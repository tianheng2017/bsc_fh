<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form class="mb-[-16px]" :model="queryParams" inline>
                <el-form-item label="用户ID" prop="uid">
                    <el-input class="w-56" v-model="queryParams.uid" clearable placeholder="请输入用户ID" />
                </el-form-item>
                <el-form-item label="明细类型" prop="mtype">
                    <el-select class="w-56" v-model="queryParams.mtype" clearable placeholder="请选择明细类型">
                        <el-option label="全部" value=""></el-option>
                        <el-option v-for="(item, index) in dictData.mtype" :key="index" :label="item.name"
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
            <!-- <el-button v-perms="['money_log/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['money_log/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button> -->
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="ID" prop="id" width="60" align="center" header-align="center" />
                    <el-table-column label="用户ID" prop="uid" align="center" header-align="center" />
                    <el-table-column label="方向" prop="direction" align="center" header-align="center" />
                    <el-table-column label="金额" prop="amount" align="center" header-align="center" />
                    <el-table-column label="资金类型" prop="mtype" align="center" header-align="center">
                        <template #default="{ row }">
                            <dict-value :options="dictData.mtype" :value="row.mtype" />
                        </template>
                    </el-table-column>
                    <el-table-column label="明细详情" prop="content" align="center" header-align="center" />

                    <!-- <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['money_log/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['money_log/delete']"
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
import { apiMoneyLogLists, apiMoneyLogDelete } from '@/api/money_log'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    uid: '',
    mtype: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 字典数据
const dictData = reactive<Record<string, any[]>>({
    mtype: [],

})

// 获取字典数据
const getDictData = () => {
    dictDataLists({
        type_value: 'mtype',
        page_type: 0
    }).then((res: any) => {
        dictData.mtype = res.lists
    })

}

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiMoneyLogLists,
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
    await apiMoneyLogDelete({ id })
    getLists()
}

getLists()
getDictData()
</script>

