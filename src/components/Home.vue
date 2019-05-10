<template>
  <div class="home">
    <span>{{msg}}</span>
    <el-button type="primary" @click="goMenuNav" size="mini">menu</el-button>
    <el-button type="primary" @click="goLogin" size="mini">login</el-button>
  </div>
</template>

<script>
import TopNav from '@/components/layout/TopNav'
export default {
  name: 'home',
  components:{
    "top-nav":TopNav
  },
  data () {
    return {
      msg: 'homepage'
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    goMenuNav(){
      // this.$router.replace("/menuNav")
      this.$router.replace({name:"menuNav"})
    },
    goLogin(){
      this.$router.replace({name:"login"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
