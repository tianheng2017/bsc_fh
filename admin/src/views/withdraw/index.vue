<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form class="mb-[-16px]" :model="queryParams" inline>
                <!-- <el-form-item label="交易hash" prop="tx">
                    <el-input class="w-56" v-model="queryParams.tx" clearable placeholder="请输入交易hash" />
                </el-form-item> -->
                <el-form-item label="用户钱包" prop="address">
                    <el-input class="w-56" v-model="queryParams.address" clearable placeholder="请输入用户钱包" />
                </el-form-item>
                <el-form-item label="提现状态" prop="status">
                    <el-select class="w-56" v-model="queryParams.status" clearable placeholder="请选择提现状态">
                        <el-option label="全部" value=""></el-option>
                        <el-option v-for="(item, index) in dictData.withdraw_status" :key="index" :label="item.name"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <!-- <el-button v-perms="['withdraw/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['withdraw/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button> -->
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="ID" prop="id" width="60" align="center" header-align="center" />
                    <!-- <el-table-column label="交易hash" prop="tx" align="center" header-align="center"
                        show-overflow-tooltip /> -->
                    <el-table-column label="用户钱包" prop="address" align="center" header-align="center"
                        show-overflow-tooltip/>
                    <el-table-column label="提现数量" prop="amount" align="center" header-align="center" width="100"/>
                    <el-table-column label="提现状态" prop="status" align="center" header-align="center" width="100">
                        <template #default="{ row }">
                            <dict-value :options="dictData.withdraw_status" :value="row.status"
                                :style="{ color: row.status == 0 ? 'rgb(59,74,204)' : (row.status == 1 ? 'green' : 'red'), fontWeight: 'bold' }" />
                        </template>
                    </el-table-column>
                    <el-table-column label="申请时间" prop="create_time" align="center" header-align="center"
                        show-overflow-tooltip />
                    <el-table-column label="处理时间" prop="cl_time" align="center" header-align="center"
                        show-overflow-tooltip>
                        <template #default="{ row }">
                            <span>{{ row.cl_time ? timeFormat(row.cl_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="备注" prop="remark" align="center" header-align="center"
                        show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right" align="center" header-align="center">
                        <template #default="{ row }">
                            <el-button v-perms="['withdraw/audit']" type="primary" link
                                @click="handleAudit({ 
                                    id: row.id,
                                    amount: row.amount,
                                    address: row.address,
                                })" v-if="!row.status">
                                审核
                            </el-button>
                            <el-button v-perms="['withdraw/delete']" type="danger" link @click="handleDelete(row.id)"
                                v-if="!row.status">
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="flex mt-4 justify-end">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
        <audit-popup v-if="showAudit" ref="auditRef" @success="getLists" @close="showAudit = false" />
    </div>
</template>

<script lang="ts" setup>
import { usePaging } from '@/hooks/usePaging'
import { dictDataLists } from '@/api/setting/dict'
import { apiWithdrawLists, apiWithdrawDelete } from '@/api/withdraw'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import AuditPopup from './audit.vue'

const auditRef = shallowRef<InstanceType<typeof AuditPopup>>()
// 是否显示审核框
const showAudit = ref(false)

// 查询条件
const queryParams = reactive({
    tx: '',
    address: '',
    status: '',
    cl_time: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 字典数据
const dictData = reactive<Record<string, any[]>>({
    withdraw_status: [],

})

// 获取字典数据
const getDictData = () => {
    dictDataLists({
        type_value: 'withdraw_status',
        page_type: 0
    }).then((res: any) => {
        dictData.withdraw_status = res.lists
    })

}

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiWithdrawLists,
    params: queryParams
})

// 审核
const handleAudit = async (data: any) => {
    showAudit.value = true
    await nextTick()
    auditRef.value?.open()
    auditRef.value?.setFormData(data);
}

// 删除
const handleDelete = async (id: number | any[]) => {
    await feedback.confirm('确定要删除？')
    await apiWithdrawDelete({ id })
    getLists()
}

getLists()
getDictData()
</script>
