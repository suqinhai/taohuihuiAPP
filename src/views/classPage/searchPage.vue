<template>
  <div id="content" class="content" v-title :data-title="title + '-淘慧慧'">
    <div class="search" v-show="search">
      <div class="inputWarp">
        <input type="text" name="search" placeholder="好多优惠等来你搜" v-model="title" @keyup.13="onEnter" @keyup="keyup">
        <span>{{dataCount}}个结果</span>
        <!-- <a href="###" class="close" v-show="close" @click="empty"></a> -->
      </div>
    </div>
    <!-- 有数据筛选 -->
    <div class="filtrate" v-show='!noData'>
      <div @click="filtrate('biz30day')" :class="this.active == 'biz30day' ? 'active' : '' ">销量优先</div>
      <div @click="filtrate('couponAmount')" :class="this.active == 'couponAmount' ? 'active' : '' ">最优惠</div>
      <div @click="filtrate('zkPrice')" :class="this.active == 'downZkPrice' ? 'active activeUp' : this.active == 'upZkPrice' ? 'active activeDown' : '' ">价格<span></span></div>
    </div>
    <!-- 没有数据筛选 -->
    <div class="filtrate noData" v-show='noData'>
      <div>销量优先</div>
      <div>最优惠</div>
      <div>价格<span></span></div>
    </div>
    <!--  每日精选 -->
    <section class="itemWarp" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100">
      <!-- <div class="title"><span></span>
        <font>每日精选</font><span></span></div> -->
      <div class="itemContent">
        <div class="itemList" v-for="i in itemList">
          <!-- <a :href="'/details?_id=' + i._id"> -->
          <router-link :to="{name: 'details', query: { _id: i._id,title: i.title}}">
            <!-- 商品图片 -->
            <div v-if="i.pictUrl">
              <img src="" v-lazy="i.pictUrl">
            </div>
            <div v-else>
              <img src="" v-lazy="m.showUrl" v-for="m in i.mainImgJson" v-if="m.selected">
            </div>
            <div class="pd15">
              <div class="itemTitle text-overflow">{{ i.title.replace(/<(?:.|\s)*?>/g,'') }}</div>
              <div class="itemCoupon">
                <span><del>¥{{ i.reservePrice }}</del></span>
                <div>¥{{ i.couponAmount }}</div>
              </div>
              <div class="itemPrice">
                <div class="fl">¥ <span>{{ i.zkPrice }}</span></div>
                <div class="fr">{{i.biz30day }}件已售</div>
              </div>
            </div>
          </router-link>
          <!--  </a> -->
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
    <!-- 回到顶部 -->
    <div id="top" @click="goTop"></div>
  </div>
</template>
<script>
import suLoading from './../../components/common/loading'
import suShade from './../../components/common/shade'
import suNav from './../../components/common/nav'

export default {
  data() {
    return {
      itemList: [],
      page: 1,
      pageSize: 20,
      search: true,
      title: this.$route.params.name,
      showLoading: true,
      active: 'sales',
      noData: false,
      dataCount: 0,
    }
  },
  mounted: function() {

  },

  watch: {
    '$route' (to, from) {
      this.itemList = []
      this.page = 1
      this.loading = false
      this.showLoading = true
      this.loadMore()
    }
  },

  methods: {
    goTop() {
      document.body.scrollTop = 0
    },
    // 筛选  销量优先 最新 价格
    filtrate(val) {

      this.itemList = []
      this.page = 1
      this.show = true
      this.showLoading = true

      let url = '/goods/getSearchGoods?page=' + this.page + '&pageSize=' + this.pageSize + '&name=' + this.$route.params.name

      // 销量优先
      if (val == 'biz30day') {
        this.active = 'biz30day'
        url += '&biz30day=desc'
      }

      // 最优惠
      if (val == 'couponAmount') {
        this.active = 'couponAmount'
        url += '&couponAmount=desc'
      }

      // 价格排序
      if (val == 'zkPrice') {
        if (this.active == 'downZkPrice') {
          this.active = 'upZkPrice'
          url += '&zkPrice=asc'
        } else if (this.active == 'upZkPrice') {
          this.active = 'downZkPrice'
          url += '&zkPrice=desc'
        } else {
          this.active = 'upZkPrice'
          url += '&zkPrice=asc'
        }
      }

      this.axios.get(url).then(res => {
        this.dataCount = res.data.count
        //有数据的时候
        if (res.data.list && res.data.list.length) {
          this.itemList = res.data.list
          this.page++

            // 判断是不是少于最大pageSize，少于就是以后没有数据了
            if (res.data.list.length < this.pageSize) {
              this.showLoading = false;
            }
        } else {
          this.showLoading = false;
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
      if (this.title) {
        this.close = true
      } else {
        this.close = false
      }
    },

    // 清空Input
    empty() {
      this.title = ''
    },

    //按回车搜索
    onEnter() {
      this.$router.push({ params: { name: this.title } })
    },

    loadMore() {

      let _this = this

      if (_this.loading) {
        return false;
      }

      this.loading = true

      setTimeout(() => {

        let url = '/goods/getSearchGoods?page=' + _this.page + '&pageSize=' + _this.pageSize + '&name=' + this.$route.params.name

        // 销量优先
        if (this.active == 'biz30day') {
          url += '&biz30day=desc'
        }

        // 最优惠
        if (this.active == 'couponAmount') {
          url += '&couponAmount=desc'
        }

        // 价格排序
        if (this.active == 'downZkPrice') {
          url += '&zkPrice=desc'
        } else if (this.active == 'upZkPrice') {
          url += '&zkPrice=asc'
        }


        _this.axios.get(url).then(res => {

          //有数据的时候
          if (res.data.list && res.data.list.length) {
            _this.itemList = _this.itemList.concat(res.data.list)
            _this.page++
              _this.loading = false

            // 判断是不是少于最大pageSize，少于就是以后没有数据了
            if (res.data.list.length < _this.pageSize) {
              _this.showLoading = false;
            }
          } else {
            _this.showLoading = false;
          }

        }, res => {
          // error callback
        });

      }, 300);

    },
  },
  components: {
    suLoading,
    suShade,
    suNav
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/searchPage.scss';

</style>
