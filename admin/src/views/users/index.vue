<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                <el-form-item label="钱包地址" prop="address">
                    <el-input class="w-56" v-model="queryParams.address" clearable placeholder="请输入钱包地址" />
                </el-form-item>
                <el-form-item label="上级ID" prop="fid">
                    <el-input class="w-56" v-model="queryParams.fid" clearable placeholder="请输入上级ID" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['users/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['users/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="ID" prop="id" />
                    <el-table-column label="钱包地址" prop="address" />
                    <el-table-column label="上级ID" prop="fid" />
                    <el-table-column label="链上BNB快照" prop="amount1" />
                    <el-table-column label="BNB分红" prop="amount2" />
                    <el-table-column label="分红次数" prop="count" />
                    <el-table-column label="创建时间" prop="create_time" />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['users/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['users/delete']"
                                type="danger"
                                link
                                @click="handleDelete(row.id)"
                            >
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
        <edit-popup v-if="showEdit" ref="editRef" @success="getLists" @close="showEdit = false" />
    </div>
</template>

<script lang="ts" setup>
import { usePaging } from '@/hooks/usePaging'
import { dictDataLists } from '@/api/setting/dict'
import { apiUsersLists, apiUsersDelete } from '@/api/users'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    address: '',
    fid: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 字典数据
const dictData = reactive<Record<string, any[]>>({
    
})

// 获取字典数据
const getDictData = () => {

}

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiUsersLists,
    params: queryParams
})

// 添加
const handleAdd = async () => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('add')
}

// 编辑
const handleEdit = async (data: any) => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

// 删除
const handleDelete = async (id: number | any[]) => {
    await feedback.confirm('确定要删除？')
    await apiUsersDelete({ id })
    getLists()
}

getLists()
getDictData()
</script>

