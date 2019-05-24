<template>
<div id="about">
    <el-row>
        <el-col :span="4">
            <el-menu
            class="el-menu-vertical-demo" default-active="1">
            <el-menu-item index="1">
                <router-link class="router-div" tag="div" to="contack">
                <i class="el-icon-menu"></i>
                Contack</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link class="router-div" tag="div" :to="{name: 'deliveryLink'}">
                    <i class="el-icon-document"></i>
                    Delivery</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link class="router-div" tag="div" :to="{name:'historyLink'}">
                    <i class="el-icon-setting"></i>
                    History</router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <router-link class="router-div" tag="div" :to="{name: 'orderLink'}">
                    <i class="el-icon-setting"></i>
                    Order</router-link>
            </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :offset="1" :span="17">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>the title</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                </div>
                <div class="text item">
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
.el-menu-item{
    padding: 0 !important;
}
.router-div{
    padding-left:20px;
}
</style>