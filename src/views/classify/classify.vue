<template>
  <div id="content" class="content" v-title :data-title="searchInputText + '-好惠买'">
    <!-- 左边 -->
    <div class="fl nav">
      <ul>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
        <li>女装内衣</li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="fr classify">
      <h4>热销商品</h4>
      <ul>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>连衣裙</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
        <li><img src="" alt=""><span>当季新品</span></img></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '分类页面',
      searchInputText: this.$route.query.name,
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {

  },
  components: {}
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/classify.scss';

</style>
