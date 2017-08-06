<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style rel="stylesheet/scss" lang="scss">
body{
	font: 14px/1.5 Microsoft Yahei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
    color: #222;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
    -webkit-tap-highlight-color: transparent;
    background-color: #f3f4f5;
}
html,body,#app{
  height:100%;
}
</style>
