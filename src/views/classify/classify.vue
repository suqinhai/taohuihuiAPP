<template>
  <div id="content" class="content" v-title :data-title="title + '-好惠买'">
    <!-- 左边 -->
    <div class="fl nav">
      <ul class="wrap">
        <!-- class="active" -->
        <li v-for="nav in navs" :class="nav._id == classId ? 'active' : '' " :_id="nav._id" @click="clickNav(nav._id)"><span>{{nav.name}}</span></li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="fr classify">
      <div class="banner"><img src="//a.vpimg2.com/upload/flow/2017/08/01/85/15015521805568.jpg"></div>
      <h4 class="title">热销商品</h4>
      <ul>
        <li v-for="classify in classifys" :_id="classify._id">
          <img :src="classify.url" alt="">
          <div>{{classify.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '分类',
      navs:[],
      classifys:[],
      classId:''
    }
  },
  mounted() {

      let url = '/taohuihui/frontend/classify/getClassify'
      this.axios.get(url).then(res => {
        this.navs = res.data.list;

        this.$nextTick(function(args){
          document.getElementsByClassName('wrap')[0].getElementsByTagName('li')[0].click()
        })

      }, res => {
        // error callback
      });


  },
  methods:{
    clickNav(_id) {
      this.classId = _id
      let url = '/taohuihui/frontend/property/getProperty?classifyId=' + _id
      this.axios.get(url).then(res => {
        this.classifys = res.data.list
    
      }, res => {
        // error callback
      });
    }
  }

}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/classify.scss';

</style>
