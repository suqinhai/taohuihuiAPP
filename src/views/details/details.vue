<template>
  <div id="content" class="content" v-title :data-title="this.$route.query.title + '-好惠买'">
      <div class="return" @click="goBack"></div>

      <!-- 轮播 -->
      <div :class="imgClass"  @click="bigSlider">
        <div class="swipe">

          <mt-swipe :auto="auto" :defaultIndex="index">
            <mt-swipe-item v-for="m in itemList.mainPic"><img v-lazy="m" width="100%" height="100%"></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>

      <div class="shopContent">
         <div class="title">{{ itemList.title }}</div>
         <div class="sold">{{ itemList.biz30day }}件已售</div>
         <div class="price">
           <font>¥ <span>{{ itemList.zkPrice }}</span></font>
           <span>{{itemList.userType == '0' ? '淘宝':'天猫'}}<!-- <del>¥{{ itemList.directPromoPercent }}</del> --></span>
           <div class="fr">¥{{ itemList.couponAmount }}</div>
         </div>
      </div>

      <!-- 推荐理由 -->
      <div class="reason">
        <div class="title">推荐理由</div>
        <span>{{itemList.recommend}}</span>
      </div>

      <!-- 详情 -->
      <div class="details">
        <div class="title">产品详情</div>
        <img v-for="i in itemList.detailsPic" v-lazy="i" width="100%">
      </div>
      
      <!-- 按钮 -->
      <su-btn :itemList="itemList"></su-btn>
      
      <!-- 淘口令弹窗 -->
      <su-code-model :show="show" :data="itemList"></su-code-model>
  
      <!--  指引弹窗 -->
      <su-guide-model :guideModel="guideModel"></su-guide-model>
  </div>
</template>

<script>
import suCodeModel from './../../components/details/codeModel'
import suGuideModel from './../../components/details/guideModel'
import suBtn from './../../components/details/btn'

export default{
    data () {
        return {
           msg:'详情页',
           show:false,
           itemList:{},
           imgClass:'warp',
           index:0,
           auto:0,
           guideModel:false
        }
    },

    mounted:function() {
      var _this = this
      var url = 'taohuihui/frontend/goods/getDetails?page=1&pageSize=15&_id=' + this.$route.query._id
      this.axios.get(url).then(res => {
        
        // 后台下架没有返回详情页数据返回错误页面
        if (  !res.data.list[0] ){
           this.$router.push({ name: 'error'})
           return false
        }else{
          if ( this.isEmptyObject(res.data.list[0]) ){
            this.$router.push({ name: 'error'})
            return false
          }
        }

        this.itemList = res.data.list[0]
        
        //轮播默认从第几张开始播
        if ( res.data.list[0].mainImgJson ) {
          res.data.list[0].mainImgJson.forEach(function(value,key){
            if ( value.selected == true ){
              _this.index = key
            }
          })
        }

      }, res => {
        // error callback
      });
      
    },
    methods:{
    
      //点击弹出大图
      bigSlider() {
        if ( this.imgClass == 'warp' ) {
           this.imgClass = 'swipeModel'
        }else{
           this.imgClass = 'warp'
        }

        let clientHeight = window.innerHeight
        let warp = document.getElementsByClassName("swipe")[0]
        let warpHeight = warp.offsetHeight;
        let fontSize = parseFloat(document.getElementsByTagName('html')[0].style.fontSize)
        warp.style.marginTop =  (clientHeight /2 - warpHeight / 2) / fontSize  + 'rem'

      },

      //返回按钮
      goBack() {
        // 有返回值
        if ( window.history.length > 1 ){
           history.go(-1)
        }else{
           this.closeWindow()
        }
      },

      // 关闭浏览器
      closeWindow() {
         window.opener = null;
 　      window.open(' ', '_self', ' '); 
 　      window.close();
      },

      // 判断对象为空
      isEmptyObject (obj) {
        for (var key in obj) {
          return false;
        }
        return true;
      }
    },
    components:{
      suCodeModel,
      suGuideModel,
      suBtn
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/details.scss';
</style>
<style rel="stylesheet/scss" lang="scss">
// 轮播弹窗
.swipeModel{
  width:100% !important;
  height:100% !important;
  background:#000 !important;
  position:fixed !important;
  z-index:200 !important;
  .mint-swipe{
    
    .mint-swipe-indicators{
      position: fixed !important;
      bottom: 0.84rem !important;
      z-index: 1800 !important;
    }
    .mint-swipe-indicator{
      width: 0.186667rem !important;
      height:  0.186667rem !important;
      opacity: 1 !important;
      background: rgba(255,255,255,0.3) !important;
      margin-right: 0.133333rem !important;
    }
    .mint-swipe-indicator.is-active{
        background:#ff3c85 !important;
    }
  }
  
}

.warp{
  .swipe{
      margin-top: 0 !important
     }
  .mint-swipe{
    
    .mint-swipe-indicator{
      width: 0.186667rem !important;
      height:  0.186667rem !important;
      opacity: 1 !important;
      background: rgba(255,255,255,0.3) !important;
      margin-right: 0.133333rem !important;
    }
    .mint-swipe-indicator.is-active{
        background:#000 !important;
    }
  }
}
</style>