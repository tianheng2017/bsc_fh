<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            title="提现审核"
            :async="true"
            width="550px"
            :clickModalClose="false"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form
                ref="formRef"
                :model="formData"
                label-width="120px"
                :rules="formRules"
            >
                <el-form-item label="提现数量" prop="amount">
                    <el-link :underline="false">{{ formData.amount + ' BNB' }}</el-link>
                </el-form-item>
                <el-form-item label="审核结果" prop="status">
                    <el-radio-group v-model="formData.status">
                        <el-radio :label="2">拒绝</el-radio>
                        <el-radio :label="1">通过</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div v-if="formData.status == 2">
                    <el-form-item label="拒绝理由" prop="remark">
                        <div class="flex-1">
                            <el-input
                                type="textarea"
                                rows="5"
                                v-model="formData.remark"
                                placeholder="请输入拒绝理由，拒绝时必填"
                                show-word-limit
                            />
                        </div>
                    </el-form-item>
                </div>
                <div v-if="formData.status == 1">
                    <el-form-item label="发起转账">
                        <div class="flex-1">
                            <el-button
                                type="success"
                                size="small"
                                @click="handleTransfer"
                                :loading="loading"
                                >点击转账</el-button
                            >
                            <div class="form-tips">
                                本步骤为可选操作，点击后将唤起metamask进行签名转账，若您已经在线下完成转账，请直接点击右下角“确定”按钮即可。
                            </div>
                        </div>
                    </el-form-item>
                </div>
                <div v-if="myTx">
                    <el-form-item label="Tx">
                        <div class="flex-1">
                            <el-button
                                type="primary"
                                link
                                >{{ myTx }}</el-button
                            >
                        </div>
                    </el-form-item>
                </div>
            </el-form>
        </popup>
    </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import Popup from "@/components/popup/index.vue";
import { apiWithdrawAudit } from "@/api/withdraw";
import Web3 from "web3";
import useApp from '@/stores/modules/app';

const emit = defineEmits(["success"]);
const formRef = shallowRef<FormInstance>();
const popupRef = shallowRef<InstanceType<typeof Popup>>();
const formData = reactive({
    id: 0,
    status: 2,
    remark: "",
    amount: 0,
    address: "",
});
const loading = ref(false)
const app = useApp()
const myTx = ref(false)

const checkRemark = (rule: any, value: any, callback: any) => {
    if (value === "" || formData.status !== 2) {
        callback(new Error("请输入拒绝理由"));
    } else {
        callback();
    }
};

const formRules = {
    status: [
        {
            required: true,
            message: "请选择审核结果",
            trigger: "blur",
        },
    ],
    remark: [
        {
            validator: checkRemark,
            trigger: "blur",
        },
    ],
};

// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate();
    const data = { ...formData };
    await apiWithdrawAudit(data);
    popupRef.value?.close();
    emit("success");
};

//打开弹窗
const open = () => {
    popupRef.value?.open();
};

const handleClose = () => {
    formRef.value?.resetFields();
};

const setFormData = (data: Record<any, any>) => {
    for (const key in formData) {
        if (data[key] != null && data[key] != undefined) {
            //@ts-ignore
            formData[key] = data[key];
        }
    }
};

// 获取当前metamask账号
const getAddress = async () => {
    // @ts-ignore
    if (typeof window.ethereum == 'undefined') {
        return -1
    }
    // @ts-ignore
    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload()
    });
    // @ts-ignore
    if (window.ethereum.chainId !== 56 && window.ethereum.networkVersion !== '56') {
        return -2
    }
    // @ts-ignore
    if (window.ethereum.isHbWallet) {
        // @ts-ignore
        return window.ethereum.address
    } else {
        // @ts-ignore
        let accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        return accounts[0]
    }
}

// 检查当前账号是否合法
const checkAddress = (address: string|number) => {
    let code = 0, msg = ''
    if (address == -1) {
        msg = '请在Dapp浏览器环境打开';
    } else if (address == -2) {
        msg = '请切换到BSC链'
    } else if (address == undefined) {
        msg = '请解锁钱包'
    } else {
        code = 1
    }
    return {
        code: code, 
        msg: msg
    }
}

// 唤起转账
async function callWallet(amount: number, to: string) {
    const address = await getAddress()
        ,result = checkAddress(address)

    // @ts-ignore
    const web3 = new Web3(new Web3.providers.HttpProvider(app.config.scan_node))

    if (!result.code) {
        return ElMessage.error(result.msg)
    }

    if (amount <= 0) {
        return ElMessage.error('转账金额必须大于0')
    }

    // @ts-ignore
    const gasPrice = await web3.eth.getGasPrice()
        // @ts-ignore
        ,nonce = await web3.eth.getTransactionCount(address, 'pending')

    console.log(gasPrice, nonce)

    // @ts-ignore
    window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                nonce: nonce.toString(),
                gasPrice: gasPrice.toString(),
                gas: '0x7a120',
                to: to,
                from: address,
                value: '0x0',
                // @ts-ignore
                chainId: '0x38',
            },
        ],
    }).then((tx: any) => {
        switch (tx) {
            case 'null':
                return ElMessage.error('操作失败，余额不足')
                break;
            default:
                ElMessage.success('交易已广播，等待区块打包')
        }
        myTx.value = tx
        console.log('tx:' + tx)
    })
    .catch((err: any) => {
        console.log('err:' + err)
        return ElMessage.error('操作已取消')
    });
}

// 提交按钮
const handleTransfer = async () => {
    try {
        loading.value = true
        await callWallet(formData.amount, formData.address)
        loading.value = false
    } catch(e) {
        console.log(formData)
        // @ts-ignore
        return ElMessage.error(e.message)
    } finally {
        loading.value = false
    }
};

defineExpose({
    open,
    setFormData,
});
</script>
