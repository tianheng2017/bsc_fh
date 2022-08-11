<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                <el-form-item label="交易hash" prop="tx">
                    <el-input class="w-56" v-model="queryParams.tx" clearable placeholder="请输入交易hash" />
                </el-form-item>
                <el-form-item label="发送方" prop="from_address">
                    <el-input class="w-56" v-model="queryParams.from_address" clearable placeholder="请输入发送方" />
                </el-form-item>
                <el-form-item label="状态" prop="state">
                    <el-select class="w-56" v-model="queryParams.state" clearable placeholder="请选择状态">
                        <el-option label="全部" value=""></el-option>
                        <el-option 
                            v-for="(item, index) in dictData.state"
                            :key="index" 
                            :label="item.name"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item label="区块到账时间" prop="block_time">
                    <data-picker
                        v-model:start_time="queryParams.start_time"
                        v-model:end_time="queryParams.end_time"
                    />
                </el-form-item>
                

                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <!-- <el-button v-perms="['transfer_log/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['transfer_log/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button> -->
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="ID" prop="id" />
                    <el-table-column label="交易hash" prop="tx" />
                    <el-table-column label="币种名称" prop="symbol" />
                    <el-table-column label="发送方" prop="from_address" />
                    <el-table-column label="接收方" prop="to_address" />
                    <el-table-column label="转入数量" prop="amount" />
                    <el-table-column label="状态" prop="state">
                        <template #default="{ row }">
                            <dict-value :options="dictData.state" :value="row.state" />
                        </template>
                    </el-table-column>
                    <el-table-column label="区块到账时间" prop="block_time">
                        <template #default="{ row }">
                          <span>{{ timeFormat(row.block_time, 'yyyy-mm-dd hh:MM:ss') }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="创建时间" prop="create_time" />

                    <!-- <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['transfer_log/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['transfer_log/delete']"
                                type="danger"
                                link
                                @click="handleDelete(row.id)"
                            >
                                删除
                            </el-button>
                        </template>
                    </el-table-column> -->
                </el-table>
            </div>
            <div class="flex mt-4 justify-end">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
        <edit-popup v-if="showEdit" ref="editRef" @success="getLists" @close="showEdit = false" />
    </div>
</template>

<script lang="ts" setup>
import { usePaging } from '@/hooks/usePaging'
import { dictDataLists } from '@/api/setting/dict'
import { apiTransferLogLists, apiTransferLogDelete } from '@/api/transfer_log'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    tx: '',
    symbol: '',
    from_address: '',
    to_address: '',
    amount: '',
    state: '',
    block_time: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 字典数据
const dictData = reactive<Record<string, any[]>>({
    state: [],

})

// 获取字典数据
const getDictData = () => {
    dictDataLists({
        type_value: 'state',
        page_type: 0
    }).then((res: any) => {
        dictData.state = res.lists
    })

}

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiTransferLogLists,
    params: queryParams
})

// // 添加
// const handleAdd = async () => {
//     showEdit.value = true
//     await nextTick()
//     editRef.value?.open('add')
// }

// // 编辑
// const handleEdit = async (data: any) => {
//     showEdit.value = true
//     await nextTick()
//     editRef.value?.open('edit')
//     editRef.value?.setFormData(data)
// }

// // 删除
// const handleDelete = async (id: number | any[]) => {
//     await feedback.confirm('确定要删除？')
//     await apiTransferLogDelete({ id })
//     getLists()
// }

getLists()
getDictData()
</script>

