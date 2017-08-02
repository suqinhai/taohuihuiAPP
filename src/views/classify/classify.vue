<template>
  <div id="content" class="content" v-title :data-title="searchInputText + '-好惠买'">
    <!-- 左边 -->
    <div class="fl nav">
      <ul>
        <li class="active"><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
        <li><span>女装内衣</span></li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="fr classify">
      <div class="banner"><img src="//a.vpimg2.com/upload/flow/2017/08/01/85/15015521805568.jpg"></div>
      <h4 class="title">热销商品</h4>
      <ul>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>连衣裙</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>连衣裙</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
        <li><img src="//a4.vimage1.com/upload/category/2016/10/26/99/5b939eb2-1c24-442a-b15a-f41fbf0c37c9.jpg" alt=""><div>当季新品</div></img></li>
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
