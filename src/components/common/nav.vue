<template>
   <!-- 菜单 -->
    <nav>
      <li v-for="n in navList">
        <router-link :to="{name: 'classPage', query: { columnId: n.id, name: n.name }}">
          <a href="javascript:viod(0)"><img :src="n.icon"><span>{{n.name}}</span></a>
        </router-link>
      </li>
    </nav>
</template>

<script>
  export default {
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
@import './scss/nav.scss';
</style>