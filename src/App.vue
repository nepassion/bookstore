<template>
  <div id="app">
    <el-row id="nav-header">
      <el-col>
        <nav-top></nav-top>
      </el-col>
    </el-row>
    <el-row id="content-body">
      <el-col>
        <router-view></router-view>
        <router-view></router-view>
        <router-view></router-view>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <router-view name="contack"></router-view>
      </el-col>
      <el-col :span="6">
        <router-view name="history"></router-view>
      </el-col>
      <el-col :span="6">
        <router-view name="delivery"></router-view>
      </el-col>
      <el-col :span="6">
        <router-view name="order"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavTop from '@/components/layout/TopNav'
export default {
  name: 'App',
  components: {
    "nav-top":NavTop
  }
}
</script>

<style>
html,body{
  margin: 0px;
  padding:0px;
  height:100% !important;
  
}
#content-body{
  height: inherit;
}
</style>
