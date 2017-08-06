<template>
   <!-- 下拉菜单 -->
    <nav v-show="show">
      <router-link v-for="n in navList" :to="{name: 'classPage', params: { classifyId: n._id, name:  n.name}}" href="" :class="classifyId == n._id ? 'active' : ''">
      {{n.name}}
      </router-link>
    </nav>

</template>

<script>
  export default {
    props:['show','classifyId'],
    data () {
        return {
          navList:[]
        }
    },
    mounted(){
      let url = '/taohuihui/frontend/nav/getNav'
      this.axios.get(url).then(res => {
        this.navList = res.data.list
       
      }, res => {
        // error callback
      });
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/navDwon.scss';
</style>