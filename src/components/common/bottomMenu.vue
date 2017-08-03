<template>
   <!-- 菜单 -->
   <div class="nav">
    <nav>
      <li v-for="n in navList" :style="'width:' + 100 / navList.length + '%'">
        <router-link v-if="n.actionType == 'index'" :to="{name: 'index'}">
            <img :src="n.url"><span>{{n.name}}</span>
        </router-link>
        <router-link v-if="n.actionType == 'classify'" :to="{name: 'classify'}">
            <img :src="n.url"><span>{{n.name}}</span>
        </router-link>
        <router-link v-if="n.actionType == 'circle'" :to="{name: 'circle'}">
            <img :src="n.url"><span>{{n.name}}</span>
        </router-link>
        <router-link v-if="n.actionType == 'account'" :to="{name: 'account'}">
            <img :src="n.url"><span>{{n.name}}</span>
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