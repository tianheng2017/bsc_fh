<!-- 网站信息 -->
<template>
    <div class="website-information">
        <el-card shadow="never" class="!border-none">
            <el-form ref="formRef" :rules="rules" class="ls-form" :model="formData" label-width="120px">
                <el-form-item label="网站名称" prop="name">
                    <div class="w-80">
                        <el-input v-model="formData.name" placeholder="请输入网站名称" maxlength="30" show-word-limit>
                        </el-input>
                    </div>
                </el-form-item>
                <el-form-item label="网站图标" prop="web_favicon" required>
                    <div>
                        <material-picker v-model="formData.web_favicon" :limit="1" />
                        <div class="form-tips">建议尺寸：100*100像素，支持jpg，jpeg，png格式</div>
                    </div>
                </el-form-item>
                <el-form-item label="网站LOGO" prop="web_logo" required>
                    <div>
                        <material-picker v-model="formData.web_logo" :limit="1" />
                        <div class="form-tips">建议尺寸：100*100像素，支持jpg，jpeg，png格式</div>
                    </div>
                </el-form-item>
                <el-form-item label="登录页广告图" prop="login_image" required>
                    <div>
                        <material-picker v-model="formData.login_image" :limit="1" />
                        <div class="form-tips">建议尺寸：100*100像素，支持jpg，jpeg，png格式</div>
                    </div>
                </el-form-item>
                <el-form-item label="分红钱包地址" prop="fh_wallet" required>
                    <div class="w-80">
                        <el-input v-model="formData.fh_wallet" placeholder="请输入分红钱包" maxlength="42" show-word-limit>
                        </el-input>
                        <div class="form-tips">每次更换请填写未使用的新钱包，否者可能采集到旧记录</div>
                    </div>
                </el-form-item>
                <el-form-item label="参与所需代币" prop="required_coin" required>
                    <div class="w-80">
                        <el-input v-model="formData.required_coin" placeholder="请输入参与所需代币数量" type="number">
                        </el-input>
                        <div class="form-tips">快照时，代币高于此数量的钱包才会参与分红</div>
                    </div>
                </el-form-item>
                <el-form-item label="持币分红比例" prop="cbfh_bl" required>
                    <div class="w-80">
                        <el-input v-model="formData.cbfh_bl" placeholder="请输入持币分红比例" type="number">
                        </el-input>
                        <div class="form-tips">总100%，填写持币分红比例，其余的则是推广分红比例</div>
                    </div>
                </el-form-item>
            </el-form>
        </el-card>

        <footer-btns v-perms="['setting.web.web_setting/setWebsite']">
            <el-button type="primary" @click="handleSubmit">保存</el-button>
        </footer-btns>
    </div>
</template>

<script lang="ts" setup>
import { getWebsite, setWebsite } from '@/api/setting/website'
import type { FormInstance } from 'element-plus'
const formRef = ref<FormInstance>()

// 表单数据
const formData = reactive({
    name: '', // 网站名称
    web_favicon: '', // 网站图标
    web_logo: '', // 网站logo
    login_image: '', // 登录页广告图
    fh_wallet: '',  //分红钱包地址
    required_coin: '', //参与所需代币数量
    cbfh_bl: '', // 持币分红所占百分比
})

// 表单验证
const rules = {
    name: [
        {
            required: true,
            message: '请输入网站名称',
            trigger: ['blur']
        }
    ],
    fh_wallet: [
        {
            required: true,
            message: '请输入分红钱包地址',
            trigger: ['blur']
        }
    ],
    required_coin: [
        {
            required: true,
            message: '请输入参与所需代币数量',
            trigger: ['blur']
        }
    ],
    cbfh_bl: [
        {
            required: true,
            message: '请输入持币分红比例',
            trigger: ['blur']
        }
    ],
}

// 获取备案信息
const getData = async () => {
    const data = await getWebsite()
    for (const key in formData) {
        //@ts-ignore
        formData[key] = data[key]
    }
}

// 设置备案信息
const handleSubmit = async () => {
    await formRef.value?.validate()
    await setWebsite(formData)
    getData()
}

getData()
</script>

<style lang="scss" scoped>
</style>
