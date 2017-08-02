<template>
   <!-- 菜单 -->
   <div class="nav">
    <nav>
      <li v-for="n in navList" :style="'width:' + 100 / navList.length + '%'">
        <router-link :to="{name: 'classPage', query: { columnId: n.id, name: n.name }}">
          <a href="javascript:viod(0)"><img :src="n.url"><span>{{n.name}}</span></a>
        </router-link>
      </li>
    </nav>
   </div>
</template>

<script>
  export default {
    data () {
        return {
          navList:[]
        }
    },
    mounted(){
      let url = '/taohuihui/frontend/bottomMenu/getMenu'
      this.axios.get(url).then(res => {
        this.navList = res.data.list
       
      }, res => {
        // error callback
      });
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/bottomMenu.scss';
</style>