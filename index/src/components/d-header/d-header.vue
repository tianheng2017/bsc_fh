<script setup>
defineProps(['title'])

const styleVars = {
	'app-bar-height': '46px',
}
</script>

<template>
    <var-style-provider :style-vars="styleVars">
        <var-app-bar :title="title" title-position="center" />
    </var-style-provider>
</template>