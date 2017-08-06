<template>
  <div id="content" class="content" v-title :data-title="title + '-好惠买'">
    <div id="J-login-win" class="mg-popup login-reg-win models-wrapper" style="display: block; opacity: 1;">
      <div class="models-login models-login-bg-write" id="J-models-login-wrap" marsseadclick="">
        <div class="models-header J-mobile-fast-login-header" style="display:none">
          <h2>密码登录</h2>
          <a href="javascript:;" class="iconfont iconfont-close2 close J-mlogin-close"></a>
          <a href="javascript:;" class="m-login-back-btn J-mlogin-back-new"></a>
        </div>
        <div class="models-logo J-models-login-logo">
          <div class="icon-login-logo"></div>

          <router-link :to="{name: 'account'}"  class="iconfont iconfont-close2 close J-mlogin-close"><span class="close-in"></span></router-link>
        </div>
        <div class="models-body">
            <div class="J-mobile-fast-login">
              <div class="ui-form-item">
                <label for="mobile">用户名</label>
                <input name="mobile" type="tel" placeholder="请输入用户名" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile" marsseadinput="">
                <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
              </div>
              <div class="ui-form-item">
                <label for="mobile">密码</label>
                <input name="mobile" type="tel" placeholder="请输入密码" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile" marsseadinput="">
                <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
              </div>
              <div class="ui-form-item">
                <label for="mobile">确认密码</label>
                <input name="mobile" type="tel" placeholder="请输入确认密码" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile" marsseadinput="">
                <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
              </div>
              <div class="ui-form-item">
                <label for="mobile">QQ邮箱</label>
                <input name="mobile" type="tel" placeholder="请输入QQ邮箱" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile" marsseadinput="">
                <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
              </div>
              <div class="ui-form-item ui-form-item-r">
                <label for="authcode">验证码</label>
                <input class="J-mlogin-ipt J-mlogin-ipt-authcode" name="authcode" type="tel" placeholder="请输入验证码" maxlength="6" marsseadinput="">
                <a href="#" class="m-mlogin-clear show-btn-position J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                <button class="J-mlogin-get-login-authcode" type="button">获取验证码</button>
              </div>
              <div class="submit-box">
                <a href="javascript:;" class="J-login-models-submit ui-button ui-button-primary submit disabled">QQ邮箱注册登录</a>
                <!--   <p class="mlogin-footer-tips" id="J-footer-tips">
                若您输入的手机号未注册，将会进入注册流程。注册即视为同意<a href="//viva.vip.com/act/m/service_provision_20161116?wapid=vivac_503">《淘慧慧服务条款》</a>、<a href="//viva.vip.com/act/m/user_protection_policy_20160809?wapid=vivac_385">《隐私条款》等</a>
              </p> -->
              </div>
            </div>
            <div class="J-password-step" style="display:none">
              <div class="ui-form-item-top">
                <label>为了确保账号安全，请设置登录密码。</label>
              </div>
              <div class="ui-form-item">
                <label for="password">登录密码</label>
                <input name="password" onpaste="return false;" type="text" placeholder="6-20位字母、数字组合" class="J-mlogin-ipt J-login-password" marsseadinput="">
                <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
              </div>
              <div class="submit-box">
                <a href="javascript:;" class="J-mlogin-password-btn ui-button ui-button-primary submitFast disabled">登录</a>
              </div>
            </div> 
        </div>
        <div class="models-footer J-models-login-footer">
          <a href="javascript:;" class="frogot-pwd"></a>
          <fieldset class="J-login-models-m">
            <legend>或</legend>
            <router-link :to="{name: 'login'}" class="login-pop-mobile J-mlogin-login-normal"> 密码登录</router-link>
            <div class="without-account">
              <span class="without-account-tips J-mlogin-login-weixin">微信账号登录</span>
            </div>
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
    	title:'登录'
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/login.scss';

</style>
