<template>
  <div>
    <div class="models-login" id="J-models-login-wrap">
      <div class="models-header J-mobile-fast-login-header" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
        <h2>密码登录</h2>
        <a href="javascript:;" class="iconfont iconfont-close2 close J-mlogin-close" style="display: none;"></a>
        <a href="javascript;" @click="back" class="m-login-back-btn J-mlogin-back-new"></a>
      </div>
      <div class="models-body">
        <form class="ui-form">
          <div v-if="msg != ''" class="mlogin-error-msg hide J-error-msg" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
            <i class="mlogin-err-tips">
                    <span class="mlogin-err-tips-in" @click="close">{{msg}}</span>
                </i>
            <span>{{msg}}</span>
          </div>
          <div class="J-login-wrap" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
            <div class="ui-form-item ui-form-item-bd">
              <label for="username">账号</label>
              <input type="text" v-model="form.user" name="username" placeholder="请输入账号" class="J-mlogin-ipt J-mlogin-ipt-username">
            </div>
            <div class="ui-form-item">
              <label for="password">密码</label>
              <input type="password" v-model="form.password" name="password" onpaste="return false;" placeholder="请输入密码" class="J-mlogin-ipt J-mlogin-ipt-password">
            </div>
            <div class="submit-box J-mlogin-submit-box">
              <a href="javascript:void(0);" :class="'J-mlogin-submit ui-button ui-button-primary submitFast disabled'" v-if="form.password=='' || form.user==''">登录</a>
              <a href="javascript:void(0);" :class="'J-mlogin-submit ui-button ui-button-primary submitFast'" v-else @click="login">登录</a>
            </div>
            <div>
              <router-link :to="{name: 'findPassword'}" class="frogot-pwd" @click="login"> 忘记密码？</router-link>
            </div>
            <div class="models-footer">
              <fieldset class="J-login-models-m">
                <legend>或</legend>
                <router-link :to="{name: 'register'}" class="login-pop-mobile J-mlogin-mobile-new" @click="login"> QQ邮箱注册登录</router-link>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
      <div class="models-footer J-models-login-footer" style="display: none;">
        <a href="javascript:;" class="frogot-pwd"></a>
        <fieldset class="J-login-models-m">
          <legend>或</legend>
          <a mars_sead="H5_pwdlogin_new_click" data_mars="{&quot;enter&quot;:&quot;1&quot;}" href="javascript:;" class="login-pop-mobile J-mlogin-login-normal">密码登录</a>
        </fieldset>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInputText: this.$route.query.name,
      msg: '',
      form: {
        user: '',
        password: ''
      },

    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {

    back() {
      this.$router.go(-1)
    },

    close() {
      this.msg = ''
    },

    login() {
      let url = '/user/login';

      if (this.form.user == '') {
        return false
      }
      if (this.form.password == '') {
        return false
      }
      this.axios.post(url, this.form).then(res => {
        if (res.data.code == 0) {
          this.msg = res.data.msg
        }
        
        this.navList = res.data.list
      }, res => {
        // error callback
      });
    }
  },
  components: {}
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/login.scss';

</style>
