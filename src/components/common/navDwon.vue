<template>
   <!-- 下拉菜单 -->
    <nav v-show="show">
      <router-link v-for="n in navList" :to="{name: 'classPage', query: { columnId: n.id, name: n.name }}" href="" :class="columnId == n.id ? 'active' : ''">
      {{n.name}}
      </router-link>
    </nav>

</template>

<script>
  export default {
    props:['show','columnId'],
    data () {
        return {
          navList:[]
        }
    },
    mounted(){
      let url = '/VsoonCat/Web/getWapColumnLists'
      this.axios.get(url).then(res => {
        this.navList = res.data.extra
       
      }, res => {
        // error callback
      });
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/navDwon.scss';
</style>