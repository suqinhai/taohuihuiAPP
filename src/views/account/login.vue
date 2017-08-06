<template>

	  <div>
	  	<div class="models-login" id="J-models-login-wrap" marsseadclick="">
    <div class="models-header J-mobile-fast-login-header" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
        <h2>密码登录</h2>
        <a href="javascript:;" class="iconfont iconfont-close2 close J-mlogin-close" style="display: none;"></a>
        <a href="javascript;" @click="back" class="m-login-back-btn J-mlogin-back-new"></a>
    </div>
    <div class="models-logo J-models-login-logo" style="display: none;">
        <div class="icon-login-logo"></div>
        <a data-dismiss="closemodels" class="iconfont iconfont-close2 close J-mlogin-close" href="javascript:;" style="display: none;"><span class="close-in"></span></a>
    </div>
    <div class="models-body">
        
        <form class="ui-form">
            <div class="J-login-wrap" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <div class="ui-form-item ui-form-item-bd">
                    
                        <label for="username">登录名</label>
                    
                    <input type="text" name="username" placeholder="请输入手机号或邮箱" class="J-mlogin-ipt J-mlogin-ipt-username" marsseadinput="">
                    <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display: none;">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                </div>
                <div class="ui-form-item">
                    <label for="password">密码</label>
                    <input type="password" name="password" onpaste="return false;" placeholder="请输入密码" class="J-mlogin-ipt J-mlogin-ipt-password" marsseadinput="">
                    <a href="#" class="icon-show-password J-mlogin-show-password"></a>
                    <a href="#" class="show-password-position m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                </div>               
                
                <div class="submit-box J-mlogin-submit-box">
                    <a href="javascript:void(0);" class="J-mlogin-submit ui-button ui-button-primary submitFast disabled">登录</a>
                </div>

                
                <div>
                    <a href="//m.vip.com/retrieve-password.html" class="frogot-pwd" mars_sead="H5_forpwd_new_click" data_mars="{&quot;enter&quot;:&quot;3&quot;}">忘记密码？</a>
                </div>
                

                
                <div class="models-footer">
                    <fieldset class="J-login-models-m">
                        <legend>或</legend>
                        <router-link :to="{name: 'register'}" class="login-pop-mobile J-mlogin-mobile-new"> QQ邮箱注册登录</router-link>
                    </fieldset>
                </div>
                

            </div>
            <div class="J-mobile-fast-login" style="display: none;">
                <div class="ui-form-item">
                    <label for="mobile">手机号</label>
                    <input name="mobile" type="tel" placeholder="请输入手机号" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile" marsseadinput="">
                    <a href="#" class="m-mlogin-clear J-mlogin-clear" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                </div>
                <div class="ui-form-item ui-form-item-r">
                    <label for="authcode">验证码</label>
                    <input class="J-mlogin-ipt J-mlogin-ipt-authcode" name="authcode" type="tel" placeholder="请输入验证码" maxlength="6" marsseadinput="">
                    <a href="#" class="m-mlogin-clear show-btn-position J-mlogin-clear" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                    <button class="J-mlogin-get-login-authcode J-send-code-btn z-send-code" type="button">重新获取</button>
                </div>
                <div class="submit-box">

                    
                        <a href="javascript:;" class="J-login-models-submit ui-button ui-button-primary submit">手机号注册登录</a>
                    

                    <p class="mlogin-footer-tips" id="J-footer-tips">若您输入的手机号未注册，将会进入注册流程。注册即视为同意<a href="//viva.vip.com/act/m/service_provision_20161116?wapid=vivac_503">《淘慧慧服务条款》</a>、<a href="//viva.vip.com/act/m/user_protection_policy_20160809?wapid=vivac_385">《隐私条款》等</a>
</p>

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
            <div class="J-second-step" style="display:none">    
                <div class="ui-form-item-top">
                    <label>为了确保账号安全，请设置登录密码。</label>
                </div>  
                <div class="ui-form-item">
                    <label for="password">登录密码</label>
                    <input name="password" onpaste="return false;" type="text" placeholder="6-20位字母、数字组合" class="J-mlogin-ipt J-mlogin-ipt-password-second" marsseadinput="">
                    <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                </div>
                <div class="submit-box">
                    <a href="javascript:;" class="J-register-btn ui-button ui-button-primary submitFast disabled">注册</a>
                </div>
            </div>
            <div class="error-msg hide J-error-msg" style="display: none;">
                <i class="icon-err-tips">
                    <span class="icon-err-tips-in"></span>
                </i>
                <span></span>
            </div>
        </form>
    </div>
    <div class="models-footer J-models-login-footer" style="display: none;">
    
        <a href="javascript:;" class="frogot-pwd"></a>
    
        <fieldset class="J-login-models-m">
            <legend>或</legend>
            
                <a mars_sead="H5_pwdlogin_new_click" data_mars="{&quot;enter&quot;:&quot;1&quot;}" href="javascript:;" class="login-pop-mobile J-mlogin-login-normal">密码登录</a>
            
            
            <div class="without-account">
                
                    <span class="without-account-tips J-mlogin-login-weixin">微信账号登录</span>
                
            </div>
        </fieldset>
</div>
</div>
	  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '分类页面',
      searchInputText: this.$route.query.name,
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
  	back(){
  		this.$router.go(-1)
  	}
  },
  components: {}
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/login.scss';

</style>