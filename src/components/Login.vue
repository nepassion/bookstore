<template>
<div id="login">
    login
    <el-button type="primary" @click="back" size="mini">back</el-button>
</div>
</template>
<script>
export default {
    name: "login",
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>