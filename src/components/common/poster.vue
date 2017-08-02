<template>
  <!-- 轮播 -->
  <div class="swipe">
    <mt-swipe :auto="auto" :defaultIndex="index">
      <mt-swipe-item v-for="m in navPoster">
        <a :href="m.url">
          <img v-lazy="m.img" width="100%" height="100%" :alt="m.alt" :title="m.title">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navPoster: [],
      auto: 6000,
      index: 0,
    }
  },
  mounted() {
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
