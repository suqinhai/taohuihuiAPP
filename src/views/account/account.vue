<template>
  <div>
    <div id="J-user-info">
      <div class="user-info">
        <!-- 头部 -->
        <div class="user-info-header clearfix" id="J-user-info-header">
          <div class="f-left J-back-to-prev"> <a href="javascript:void(0);" class="ui-back-to-prev"><span class="icon-back"></span></a>
          </div>
          <div class="title" id="J-title"> <span class="ui-ellipsis">个人中心</span>
          </div>
          <div class="f-right J-f-right"> <a href="index.html" class="ui-home" mars_sead="nav_home_btn"><span class="icon-home"></span></a>
          </div>
        </div>
        <div class="user-info-header-placeholder"></div>
        <!-- 未登录 -->
        <div class="user-non-login-info J-user-non-login-info"> <a href="https://mlogin.vip.com/user-register.html?f=shop_wap_mback_act=http%3A%2F%2Fm.vip.com%2Fuser.html" class="J-register" mars_sead="user-register_btn">注 册</a>
          <i class="border-l"></i>
          <a href="https://mlogin.vip.com/user-login.html?f=shop_wap_mback_act=http%3A%2F%2Fm.vip.com%2Fuser.html" class="J-login" mars_sead="user-login_btn">登 录</a>
        </div>
      </div>
    </div>
    <div id="J-user-order">
      <div class="user-order border-b J-user-order">
        <a href="/user-order-list-unpay.html" class="item J-order-login" mars_sead="non_payment_orderlist_btn">
          <p class="order-icon"> <span>
                <i class="icon-pay"></i>
                            </span>
          </p>
          <p class="order-desc"> <span>待付款</span>
          </p>
        </a>
        <a href="/user-order-list-unreceive.html" class="item J-order-login" mars_sead="wait_delivery_orderlist_btn">
          <p class="order-icon"> <span>
                <i class="icon-deliver"></i>
                            </span>
          </p>
          <p class="order-desc"> <span>待收货</span>
          </p>
        </a>
        <a href="/user-order-list-more.html" class="item J-order-login" mars_sead="more_order_btn">
          <p class="order-icon"> <span>
                <i class="icon-orders"></i>
            </span>
          </p>
          <p class="order-desc"> <span>更多订单</span>
          </p>
        </a>
      </div>
    </div>
    <div id="J-user-menus">
      <div class="user-menus J-user-menus list border-tb">
        <ul>
          <li class="list-item more">
            <a href="/user-fav-brand.html" class="item-content J-menus-login" mars_sead="my_collect_btn">
              <div class="item-inner">
                <p class="item-title">我的收藏</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="https://mcheckout.vip.com/cart-history.html" class="item-content J-menus-login" mars_sead="cart_history_btn">
              <div class="item-inner">
                <p class="item-title">购物车历史</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="/user-history.html" class="item-content J-list-item-link">
              <div class="item-inner">
                <p class="item-title">浏览历史</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="/user-order-list-return.html" class="item-content J-menus-login" mars_sead="self_service_return_btn">
              <div class="item-inner">
                <p class="item-title">自助退货</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="https://myvpal.vip.com/h5/wallet?showHeader=1" class="item-content J-menus-login" mars_sead="user_wallet_bind_btn">
              <div class="item-inner">
                <p class="item-title">零钱</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="/user-coupon.html" class="item-content J-menus-login" mars_sead="my_coupon_btn">
              <div class="item-inner">
                <p class="item-title">优惠券</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="/user-vipmoney.html" class="item-content J-menus-login" mars_sead="myvipmoney_btn">
              <div class="item-inner">
                <p class="item-title">我的唯品币</p> <span class="item-right highlight">手机绑定，资金更安全</span>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="/user-address-list.html" class="item-content J-menus-login" mars_sead="my_address_btn">
              <div class="item-inner">
                <p class="item-title">收货地址</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="/user-updatepwd.html" class="item-content J-menus-login" mars_sead="editpassin_btn">
              <div class="item-inner">
                <p class="item-title">修改登录密码</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="https://myvpal.vip.com/h5/paypass" class="item-content J-menus-login">
              <div class="item-inner">
                <p class="item-title">管理支付密码</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="/user-mobile-bind.html" class="item-content J-menus-login" mars_sead="bind_mobilephone_btn">
              <div class="item-inner">
                <p class="item-title">绑定手机</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="https://myvpal.vip.com/h5/redPacket" class="item-content J-menus-login">
              <div class="item-inner">
                <p class="item-title">支付红包</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="https://myvpal.vip.com/h5/realName" class="item-content J-menus-login" mars_sead="identity_verification_btn">
              <div class="item-inner">
                <p class="item-title">实名认证</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
          <li class="list-item more">
            <a href="https://myvpal.vip.com/h5/bankCard" class="item-content J-menus-login">
              <div class="item-inner">
                <p class="item-title">我的银行卡</p>
              </div> <i class="icon-back"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="J-user-logout"></div>
    <div id="J-wx-share"></div>
    <div id="J-foot-download">
      <div class="clearfix footer-download-wrapper">
        <a href="//viva.vip.com/s/mdl" mars_sead="user_footer_client_download_btn" class="footer-download">
          <div class="download-text"> <span class="logo-bg">
                <i class="icon-new-logo"></i>
            </span>
            <p>唯品会客户端，特卖抢不停</p>
          </div>
          <div class="download-btn"> <span>下载</span>
          </div>
        </a>
      </div>
    </div>
    <div id="J-page-footer">
      <div class="footer clearfix" id="J-footer">
        <div class="footer-nav clearfix"> <a href="/index.html" mars_sead="footer-index_btn" class="vip-index">唯品会首页</a>
          <a href="//viva.vip.com/act/m/staic-page-about?wapid=vivac_314" class="vip-about f-left">关于我们</a>
          <a href="https://mlogin.vip.com/user-login.html?f=shop_wap_m&back_act=http%3A%2F%2Fm.vip.com%2F" class="J-footer-login" mars_sead="footer-mlogin_btn">登录</a>
          <a href="https://mlogin.vip.com/user-register.html?f=shop_wap_m&back_act=http%3A%2F%2Fm.vip.com%2F" class="register-btn J-footer-register" mars_sead="footer-mregister_btn">注册</a>
        </div>
        <p class="copyright">Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
        <div class="psb">
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010302000068">
                <img src="//ms2-m.vipstatic.com/static/base/img/icon-psb-07345bf925.png" data-original="//ms2-m.vipstatic.com/static/base/img/icon-psb-07345bf925.png" alt="粤公网安备" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <p>粤公网安备 44010302000068号</p>
            </a>
        </div>
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

  },
  components: {}
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/account.scss';

</style>
