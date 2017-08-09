<template>
  <div>
    <div class="models-login" id="J-models-login-wrap" marsseadclick="">
      <div class="models-header J-mobile-fast-login-header" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
        <h2>找回密码</h2>
        <a href="javascript:;" class="iconfont iconfont-close2 close J-mlogin-close" style="display: none;"></a>
        <a href="javascript;" @click="back" class="m-login-back-btn J-mlogin-back-new"></a>
      </div>
      <div class="models-body">
        <form class="ui-form">
          <div class="J-login-wrap" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
            <div class="ui-form-item ui-form-item-bd">
              <label for="username">账号</label>
              <input type="text" v-model="form.user" name="username" placeholder="请输入账号" class="J-mlogin-ipt J-mlogin-ipt-username">
            </div>
            <div class="ui-form-item">
              <label for="password">新密码</label>
              <input type="password" v-model="form.password" name="password" onpaste="return false;" placeholder="请输入密码" class="J-mlogin-ipt J-mlogin-ipt-password">
            </div>
            <div class="ui-form-item">
              <label for="mobile">QQ邮箱</label>
              <input name="mobile" type="text" v-model="form.email" placeholder="请输入QQ邮箱" class="J-mlogin-ipt J-mlogin-ipt-mobile">
            </div>
            <div class="ui-form-item ui-form-item-r">
              <label for="authcode">验证码</label>
              <input class="J-mlogin-ipt J-mlogin-ipt-authcode"  type="text" placeholder="请输入验证码" maxlength="6" v-model="form.validation">
              <button class="J-mlogin-get-login-authcode" type="button">获取验证码</button>
            </div>
            <div class="submit-box J-mlogin-submit-box">
              <a href="javascript:void(0);" :class="'J-mlogin-submit ui-button ui-button-primary submitFast disabled'" v-if="form.password=='' || form.user=='' || form.email=='' || form.validation==''">修改密码</a>
              <a href="javascript:void(0);" :class="'J-mlogin-submit ui-button ui-button-primary submitFast'" v-else @click="login">修改密码</a>
            </div>
            <div>
              <a href="###" class="frogot-pwd">注册账号？</a>
            </div>
            <div class="models-footer">
              <fieldset class="J-login-models-m">
                <legend>或</legend>
                <router-link :to="{name: 'login'}" class="login-pop-mobile J-mlogin-login-normal"> 密码登录</router-link>
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
      form: {
        user: '',
        password: '',
        email:'',
        validation:''
      }
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

    login() {
      let url = '/user/modify';

      if (this.form.user == '') {
        return false
      }
      if (this.form.password == '') {
        return false
      }
      if (this.form.email == '') {
        return false
      }
      if (this.form.validation == '') {
        return false
      }

      this.axios.post(url, this.form).then(res => {
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
