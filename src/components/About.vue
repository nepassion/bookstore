<template>
<div id="about">
    <el-row>
        <el-col :span="4">
            <el-menu
            class="el-menu-vertical-demo"
            default-active="2">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <router-link tag="span" to="/home">paka</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">Cinema Nav</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">Member Nav</span>
            </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :offset="1" :span="17">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                </div>
                <div>
                    <router-view></router-view>
                </div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>
<script>
export default {
    name: "about"
}
</script>
<style scoped>
#about{
    height:100%;
}
.el-row,.el-col,.el-row ul{
    height:100%;
}
.el-card{
    margin-top:10px;
}
</style>