<template>
      <!-- 按钮 -->
      <div class="btn">
        <router-link :to="{name: 'index'}"><a href="javascript:;" class="home"><div></div><font>首页</font></a></router-link>

        <!-- 是微信浏览器和天猫商品 -->
        <a v-if="itemList.terraceName == '天猫' && isWeChat()" class="browser" @click="browserBuy">浏览器购买</a>

        <!-- 不是微信浏览器和是天猫商品 -->
        <a v-if="itemList.terraceName == '天猫' && !isWeChat()" :href="itemList.couponLink ? itemList.couponLink : itemList.clickUrl" class="browser">浏览器购买</a>
       
        <!--  不是是天猫商品  -->
        <a v-if="itemList.terraceName != '天猫'" :href="itemList.couponLink ? itemList.couponLink : itemList.clickUrl" class="browser">浏览器购买</a>

        <a href="javascript:;" class="code" @click="codeBuy">淘口令购买</a>
      </div>
</template>

<script>
  export default {
    props:['itemList'],
    methods:{
      //判断是否微信
      isWeChat (){
         if (navigator.userAgent.match(/MicroMessenger/g)){
            return 1 //是 
         }else{
            return 0 //否
         }
      },

      // 淘口令购买
      codeBuy() { 
          this.$parent.show = true
          this.$nextTick(function(){
            let clientHeight = window.innerHeight
            let warp = document.getElementsByClassName("codeWarp")[0]
            let warpHeight = warp.offsetHeight;
            let fontSize = parseFloat(document.getElementsByTagName('html')[0].style.fontSize)
            warp.style.marginTop =  (clientHeight /2 - warpHeight / 2) / fontSize  + 'rem'
          })
          
      },

      //浏览器购买
      browserBuy() {
        this.$parent.guideModel = true
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/btn.scss';
</style>
