<template>
  <div class="home">
    <el-row class="background">
      <el-col class="background-context">
        <div>
          <span>welcome to the legeal of legend</span>
          <el-button type="primary" @click="goMenuNav" size="mini">menu</el-button>
          <!-- <el-button type="primary" @click="goLogin" size="mini">login</el-button> -->
        </div>
      </el-col>
    </el-row>
    
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
      msg: 'homepage',
      name: 'joe'
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
  },
  // beforeRouteEnter: (to,from,next) =>{
  //   // alert('hello  '+this.name)
  //   next(vm=>{
  //     alert('hello  '+vm.name)
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background{
  background: url(../assets/temp.jpg) no-repeat;
  background-size:cover;
  height:90vh;
  padding:10%;
}
.background-context{
  background:#eee;
  height:30vh;
  padding:10px;
  opacity: 0.8;
}
.background-context div{
  width: 70vh;
  margin: 10vh auto;
}
</style>
