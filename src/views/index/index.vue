<template>
  <div id="content" class="content" v-title data-title="好惠买">
  
    <!-- 搜索 -->
    <div class="search" v-show="!search">
        <div class="searchText" @click="searchText">好多优惠等来你搜</div>
    </div>

    <div class="search" v-show="search">
      <div class="inputWarp">
        <input autofocus type="text" name="search" placeholder="好多优惠等来你搜"
        v-model="searchInputText"
        @keyup.13="onEnter" 
        @keyup="keyup">
        <a href="###" class="close" v-show="close" @click="empty"></a>
      </div>
      <span><a href="###" @click="cancel">取消</a></span>
    </div>
    
    <!-- 菜单 -->
    <su-nav></su-nav>
    
   <!--  每日精选 -->

    <section class="itemWarp" v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="100">
      <div class="title"><span></span><font>每日精选</font><span></span></div>
      <div class="itemContent">
        <div class="itemList" v-for="i in itemList">
        <a :href="'/details?productId=' + i.id + '&title=' + i.title">
        <!--   <router-link :to="{name: 'details', query: { productId: i.id,title: i.title }}"> -->
            <!-- 商品图片 -->
            <div v-if="i.showImg">
              <img src="" v-lazy="i.showImg">
            </div>
            <div v-else>
              <img src="" v-lazy="m.showUrl" v-for="m in i.mainImgJson" v-if="m.selected">
            </div>
            
            <div class="pd15">
              <div class="itemTitle text-overflow">{{ i.title }}</div>
              <div class="itemCoupon">
                <span><del>¥{{ i.directPromoPercent }}</del></span>
                <div>¥{{ i.couponsAmount }}</div>
              </div>
              <div class="itemPrice">
                <div class="fl">¥ <span>{{ i.discount }}</span></div>
                <div class="fr">{{i.salesCount }}件已售</div>
              </div>
            </div>
         <!--  </router-link> -->
          </a>
        </div>
       
      </div>
    </section>  

     <!--  loading -->
    <div v-if="showLoading" style="width:25px;margin:0 auto">
        <mt-spinner type="fading-circle" :size="25"></mt-spinner>
    </div>
    <div v-else style="text-align: center">——抱歉，没有更多商品啦——</div>

    <!-- 遮罩 -->
  <!-- <su-shade></su-shade>  -->
  </div>
</template>

<script>
// import suShade from './../../components/common/shade'
import suNav from './../../components/common/nav'

export default{
    data () {
        return {
           msg:'首页',
           show:true,
           itemList:[],
           page:1,
           pageSize:6,
           search:false,
           searchInputText:'',
           close:false,
           showLoading:true,
        }
    },
    mounted:function() {
    
    },

    methods:{

      searchText() {
        this.search = true
      },

      // 取消按钮
      cancel() {
        this.searchInputText = ''
        this.search = false
      },

      // 是否显示关闭按钮
      keyup() {
        if ( this.searchInputText ){
           this.close = true
        }else{
           this.close = false
        }
      },

      // 清空Input
      empty() {
        this.searchInputText = ''
      },

      //按回车搜索
      onEnter() {
          if (!this.searchInputText) {return false}
          this.$router.push({ name: 'searchPage', query: { name: this.searchInputText }})
      },

      loadMore() {
        let _this = this

        if ( !_this.showLoading || _this.loading ) {
          return false;
        }
        this.loading = true
        setTimeout(() => {
          
          let url = 'VsoonCat/Web/Product?page='+ _this.page +'&pageSize='+ _this.pageSize +'&publish=publish&columnId=-1'
          _this.axios.get(url).then(res => {

            //有数据的时候
            if ( res.data.extra && res.data.extra.length){
               _this.itemList = _this.itemList.concat(res.data.extra)
               _this.page ++
               _this.loading = false

               // 判断是不是少于最大pageSize，少于就是以后没有数据了
               if (res.data.extra.length <  _this.pageSize ){
                   _this.showLoading = false;
               }
               
            }else{
               _this.showLoading = false;
            }

          }, res => {
            // error callback
          });

        }, 1000);
        
      },
    },
    components:{
      // suShade,
      suNav
    }
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/index.scss';
</style>