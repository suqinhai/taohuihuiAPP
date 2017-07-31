<template>
  <div id="content" class="content" v-title :data-title="searchInputText + '-好惠买'">
    
    <div class="search" v-show="search">
      <div class="inputWarp">
        <input type="text" name="search" placeholder="好多优惠等来你搜"
        v-model="searchInputText"
        @keyup.13="onEnter" 
        @keyup="keyup">
        <span>{{dataCount}}个结果</span>
        <!-- <a href="###" class="close" v-show="close" @click="empty"></a> -->
      </div>
    </div>

    <!-- 有数据筛选 -->
    <div class="filtrate" v-show='!noData'>
      <div order="sales" @click="filtrate('sales')" :class="this.active == 'sales' ? 'active' : '' ">销量优先</div>
      <div order="news" @click="filtrate('news')" :class="this.active == 'news' ? 'active' : '' ">最新</div>
      <div :order="sort" @click="filtrate(sort)" 
      :class="this.active == 'discountDown' ? 'active activeUp' : this.active == 'discountUp' ? 'active activeDown' : '' ">价格<span></span></div>
    </div>
    

    <!-- 没有数据筛选 -->
    <div class="filtrate noData" v-show='noData'>
      <div>销量优先</div>
      <div>最新</div>
      <div>价格<span></span></div>
    </div>


     <!--  每日精选 -->
    <section class="itemWarp" v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="100" v-show='!noData'>
      <div class="itemContent">
        <div class="itemList" v-for="i in itemList">
           <!-- <router-link :to="{name: 'details', query: { productId: i.id, title: i.title }}"> -->
           <a :href="'/details?productId=' + i.id + '&title=' + i.title">
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
                <div>¥ {{ i.couponsAmount }}</div>
              </div>
              <div class="itemPrice">
                <div class="fl">¥ <span>{{ i.discount }}</span></div>
                <div class="fr">{{i.salesCount }}件已售</div>
              </div>
            </div>
            </a>
            <!-- </router-link> -->
        </div>
        
      </div>
       <!--  loading -->
      <div v-if="showLoading" style="width:25px;margin:0 auto">
        <mt-spinner type="fading-circle" :size="25"></mt-spinner>
      </div>
      <div v-else style="text-align: center">——抱歉，没有更多商品啦——</div>
    </section>


    <div v-show='noData' class="noDataShop">抱歉，没有满足"{{noData}}"搜索条件的商品，您可以换个关键词尝试下</div> 

    <!-- 遮罩 -->
  <!-- <su-shade></su-shade>  -->
  </div>
</template>

<script>
import suLoading from './../../components/common/loading'
import suShade from './../../components/common/shade'
import suNav from './../../components/common/nav'

export default{
    data () {
        return {
           msg:'搜索页面',
           show:true,
           itemList:[],
           page:1,
           pageSize:6,
           search:true,
           searchInputText:this.$route.query.name,
           close:this.$route.query.name ? true : false,
           showLoading:true,
           sort:'discountDown',
           active:'sales',
           noData:false,
           dataCount:0,
        }
    },
    mounted:function() {
      // var url = '/Owl/Member/memberLists?page=1&pageSize=10'
      // this.axios.get(url).then(res => {

      //   // get body data
      //   this.someData = res.body;

      // }, res => {
      //   // error callback
      // });
      // 
      
    },
  
    watch:{
      '$route' (to, from) {
         this.show= true
         this.itemList= []
         this.page= 1
         this.pageSize= 6
         this.showLoading= true
         this.loading = false
         this.loadMore()
       }
    },

    methods:{
      // 筛选  销量优先 最新 价格
      filtrate (val) {

        this.show= true
        this.itemList= []
        this.page= 1
        this.pageSize= 6
        this.showLoading= true
        let _this = this
        let url = 'VsoonCat/Web/Product?page='+ _this.page +'&pageSize='+ _this.pageSize +'&publish=publish&name=' + (this.$route.query.name || '') + '&order=' + val

        if ( val == 'discountUp' ){
           this.sort = 'discountDown'
           this.active = 'discountDown'
        }else if ( val == 'discountDown' ){
           this.sort = 'discountUp'
           this.active = 'discountUp'
        }else{
           this.active = val;
        }

        _this.axios.get(url).then(res => {
            _this.dataCount =  res.data.count
            //有数据的时候
            if ( res.data.extra && res.data.extra.length){
               _this.itemList = res.data.extra
               _this.page ++

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

      },

      searchText() {
        this.search = true
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
          this.$router.push({ query: { name: this.searchInputText }})
      },

      loadMore() {

        let _this = this

        if ( !_this.showLoading || _this.loading ) {
          return false;
        }
        this.loading = true

        setTimeout(() => {
          let order = (this.active == 'discountDown' ? 'discountUp' : this.active == 'discountUp' ? 'discountDown' : this.active)
          let url = 'VsoonCat/Web/Product?page='+ _this.page +'&pageSize='+ _this.pageSize +'&publish=publish&name=' +( this.$route.query.name || '')  + '&order=' + order
          _this.axios.get(url).then(res => {
            _this.dataCount =  res.data.count
            // 判断搜索第一页都没有数据
            if ( _this.page == 1 && !res.data.extra.length){
                 _this.active = ''
                 _this.noData = _this.searchInputText
                 return false;
            }else{
                 _this.noData = false
            }

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
    	suLoading,
      suShade,
      suNav
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/searchPage.scss';
</style>