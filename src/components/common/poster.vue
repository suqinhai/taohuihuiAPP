<template>
    <!-- 轮播 -->
 
    <div class="swipe">
      <mt-swipe :auto="auto" :defaultIndex="index">
        <mt-swipe-item v-for="m in navPoster"><img v-lazy="m.img" width="100%" height="100%"></mt-swipe-item>
      </mt-swipe>
    </div>

</template>

<script>
  export default {
    data () {
        return {
          navPoster:[],
          auto:4000,
          index:1,
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
@import './scss/poster.scss';
</style>