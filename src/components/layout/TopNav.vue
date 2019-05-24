<template>
    <div id="top-nav">
        <el-row id="top-row">
            <el-col>
                <el-menu  class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
                    <el-menu-item index="2"><router-link :to="{name:'menu'}">Menu</router-link></el-menu-item>
                    <el-menu-item index="3"><router-link :to="{name:'about-menu'}">About</router-link></el-menu-item>
                    <el-menu-item index="4"><router-link :to="{name:'management'}">Management</router-link></el-menu-item>
                    <el-menu-item index="5"><router-link :to="{name:'login'}">Login</router-link></el-menu-item>
                    <el-menu-item index="6"><router-link :to="{name:'registe'}">Registe</router-link></el-menu-item>
                </el-menu>        
            </el-col>
        </el-row>
    </div>
</template>
<script>
// import {constUrl} from '@/components/const-url.js'
export default {
    name: "top-nav",
    data(){
        return{
            title: "the title layout",
            activeNum: "1",
            menuNav: "menuNav",
            about: "about",
            management: "management",
            login:"login",
            registe:"registe"
        }
    }
}
</script>
<style scoped>
a{
    text-decoration: none !important;
}
.el-menu{
    padding-left:31%;
}
.el-menu li{
    padding:0px;
}
a{
    text-decoration: none !important;
    padding:20px;
}
</style>
