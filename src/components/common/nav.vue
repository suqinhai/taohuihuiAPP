<template>
  <!-- 菜单 -->
  <nav>
    <li v-for="n in navList">
      <router-link :to="{name:'activityClass', params: { activityClass: n.actionType, name: n.name}}">
        <a href="javascript:viod(0)"><img :src="n.url"><span>{{n.name}}</span></a>
      </router-link>
    </li>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navList: []
    }
  },
  mounted() {
    let url = '/nav/getNav'
    this.axios.get(url).then(res => {
      this.navList = res.data.list

    }, res => {
      // error callback
    });
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/nav.scss';

</style>
