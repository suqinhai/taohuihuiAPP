<template>
  <div id="content" class="content" v-title :data-title="title + '-淘慧慧'">
    <div id="J-login-win" class="mg-popup login-reg-win models-wrapper" style="display: block; opacity: 1;">
      <div class="models-login models-login-bg-write" id="J-models-login-wrap" marsseadclick="">
        <div class="models-header J-mobile-fast-login-header" style="display:none">
          <h2>密码登录</h2>
          <a href="javascript:;" class="iconfont iconfont-close2 close J-mlogin-close"></a>
          <a href="javascript:;" class="m-login-back-btn J-mlogin-back-new"></a>
        </div>
        <div class="models-logo J-models-login-logo">
          <div class="icon-login-logo"></div>
          <router-link :to="{name: 'account'}" class="iconfont iconfont-close2 close J-mlogin-close"><span class="close-in"></span></router-link>
        </div>
        <div class="models-body" style="position: relative">
          <div class="J-mobile-fast-login">
            <div v-if="msg != ''" class="mlogin-error-msg hide J-error-msg" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);top: -33px;">
              <i class="mlogin-err-tips">
                      <span class="mlogin-err-tips-in" @click="close">{{msg}}</span>
                  </i>
              <span>{{msg}}</span>
            </div>
            <div class="ui-form-item">
              <label for="mobile">账号</label>
              <input name="mobile" type="text" v-model="form.user" placeholder="请输入用户名" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile">
            </div>
            <div class="ui-form-item">
              <label for="mobile">密码</label>
              <input name="mobile" type="password" v-model="form.password" placeholder="请输入密码" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile">
            </div>
            <div class="ui-form-item">
              <label for="mobile">确认密码</label>
              <input name="mobile" type="password" v-model="form.confirmPassword" placeholder="请输入确认密码" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile">
            </div>
            <div class="ui-form-item">
              <label for="mobile">QQ邮箱</label>
              <input name="mobile" type="text" v-model="form.email" placeholder="请输入QQ邮箱" class="J-mlogin-ipt J-mlogin-ipt-mobile">
            </div>
            <div class="ui-form-item ui-form-item-r">
              <label for="authcode">验证码</label>
              <input class="J-mlogin-ipt J-mlogin-ipt-authcode" name="authcode" type="text" placeholder="请输入验证码" maxlength="6">
              <button class="J-mlogin-get-login-authcode" type="button">获取验证码</button>
            </div>
            <div class="submit-box">
              <a href="javascript:;" class="J-login-models-submit ui-button ui-button-primary submit disabled" @click="login">QQ邮箱注册登录</a>
              <!--   <p class="mlogin-footer-tips" id="J-footer-tips">
                若您输入的手机号未注册，将会进入注册流程。注册即视为同意<a href="//viva.vip.com/act/m/service_provision_20161116?wapid=vivac_503">《淘慧慧服务条款》</a>、<a href="//viva.vip.com/act/m/user_protection_policy_20160809?wapid=vivac_385">《隐私条款》等</a>
              </p> -->
            </div>
          </div>
        </div>
        <div class="models-footer J-models-login-footer">
          <a href="javascript:;" class="frogot-pwd"></a>
          <fieldset class="J-login-models-m">
            <legend>或</legend>
            <router-link :to="{name: 'login'}" class="login-pop-mobile J-mlogin-login-normal"> 密码登录</router-link>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '注册',
      msg:'',
      form: {
        user: '',
        password: '',
        confirmPassword: '',
        email: ''
      }
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    close() {
      this.msg = ''
    },
    login() {
      let url = '/user/register';

      if (this.form.user == '') {
         this.msg = '账号不能为空'
         return false
      }
      if (this.form.password == '') {
         this.msg = '密码不能为空'
         return false
      }
      if (this.form.confirmPassword == '') {
         this.msg = '确认密码不能为空'
        return false
      }
      if (this.form.password != this.form.confirmPassword) {
        this.msg = '两次输入密码不一致'
        return false
      }
      if (this.form.email == '') {
         this.msg = '邮箱不能为空'
        return false
      }
      
      this.axios.post(url,this.form).then(res => {
        this.navList = res.data.list

      }, res => {
        // error callback
      });
    }
  },
  components: {

  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/login.scss';

</style>
