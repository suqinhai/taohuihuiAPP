<template>
  <div id="content" class="content">
    <div class="img">
      <img src="./images/404.png">  
    </div>
    <div class="dec">页面出错了，请稍后访问
您也可以瞄瞄其他商品</div>
 	<router-link :to="{name: 'index'}">
 	返回首页
 	</router-link>
  </div>
</template>

<script>
export default {
  name: 'error'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './error.scss';
</style>
