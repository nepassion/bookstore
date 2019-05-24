<template>
<div id="login">
    <el-row>
        <el-col :offset="2" :span="20">
            <el-input v-model="user.name" placeholder="请输入账号"></el-input>
            <el-input v-model="user.password" placeholder="请输入密码" show-password></el-input>
            <el-button type="primary" size="mini">login</el-button>
            <el-button type="primary" @click="back" size="mini">back</el-button>
        </el-col>
    </el-row>
</div>
</template>
<script>
export default {
    name: "login",
    data(){
        return{
            user:{
                name: '2',
                password: ''
            }
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>