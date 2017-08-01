<template>
   <!-- 菜单 -->
    <!-- <nav>
      <li v-for="n in navList">
        <router-link :to="{name: 'classPage', query: { columnId: n.id, name: n.name }}">
          <a href="javascript:viod(0)"><img :src="n.url"><span>{{n.name}}</span></a>
        </router-link>
      </li>
    </nav> -->

    <!-- 轮播 -->
    <div :class="imgClass"  @click="bigSlider">
      <div class="swipe">
        <mt-swipe :auto="auto" :defaultIndex="index">
          <mt-swipe-item v-for="m in navPoster"><img v-lazy="m.img" width="100%" height="100%"></mt-swipe-item>
        </mt-swipe>
      </div>
    </div>

</template>

<script>
  export default {
    data () {
        return {
          navPoster:[]
        }
    },
    mounted(){
      let url = '/taohuihui/frontend/poster/getPoster'
      this.axios.get(url).then(res => {
        this.navPoster = res.data.list
       
      }, res => {
        // error callback
      });
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/nav.scss';
</style>