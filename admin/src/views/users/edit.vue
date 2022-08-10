<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="550px"
            :clickModalClose="true"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { dictDataLists } from '@/api/setting/dict'
import { apiUsersAdd, apiUsersEdit } from '@/api/users'
import { timeFormat } from '@/utils/util'

const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')

// 弹窗标题
const popupTitle = computed(() => {
    return mode.value == 'edit' ? '编辑用户表' : '新增用户表'
})

// 表单数据
const formData = reactive({
    id: '',
    
})

// 字典数据
const dictData = reactive<Record<string, any[]>>({
    
})

// 获取字典数据
const getDictData = () => {

}

// 表单验证
const formRules = reactive<any>({
    amount1: [{
        required: true,
        message: '请输入链上BNB快照',
        trigger: ['blur']
    }],
    amount2: [{
        required: true,
        message: '请输入BNB分红',
        trigger: ['blur']
    }],
})


// 获取详情
const setFormData = (data: Record<any, any>) => {
    for (const key in formData) {
        if (data[key] != null && data[key] != undefined) {
            //@ts-ignore
            formData[key] = data[key]
        }
    }
    
    
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUsersEdit(data) 
        : await apiUsersAdd(data)
    popupRef.value?.close()
    emit('success')
}

//打开弹窗
const open = (type = 'add') => {
    mode.value = type
    popupRef.value?.open()
}

// 关闭回调
const handleClose = () => {
    emit('close')
}

getDictData()

defineExpose({
    open,
    setFormData
})
</script>
