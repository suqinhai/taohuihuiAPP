<template>
     <section class="model" id="model" v-if="guideModel" @click="close">
        <img src="./images/android.png" v-if="isBrowser() == 2 || isBrowser() == 3">
        <img src="./images/ios.png" v-if="isBrowser() == 1">
      </section>
</template>

<script>
  export default {
    props:['guideModel'],
    data () {
        return {
           msg:'指引弹窗',
        }
    },
    methods:{
      close() {
        this.$parent.guideModel = false
      },

      isBrowser() {
         // 判断设备 iPhone:1 Android:2 其他:3
          if (navigator.userAgent.match(/iPhone/g)) {
            return 1
          }else if (navigator.userAgent.match(/Android/g)) {
            return 2
          }else{
            return 3
          }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/guideModel.scss';
</style>
