<template>
     <!-- 淘口令 -->
      <section class="model" id="model" v-show="show"  @click.self="codeBuy">
        <div class="warp codeWarp">
        	<div class="head">
	          <span class="codeLogo"></span>
            <!-- {{data.taoWord}} -->

	          <div id="foo" v-show="isBrowser() == 1">￥3PJUtZYZaM￥</div>
            <div v-show="isBrowser() == 2 || isBrowser() == 3 ">
              <div>￥3PJUtZYZaM￥</div>
              <input type="text" value="￥3PJUtZYZaM￥" id="textbox" style="width:1px;opacity:0" readonly></input>
            </div>

	        </div>
	        <div class="copy">

	          <a v-show="isBrowser() == 1" href="javascipt:viod(0)"  class="copyCode" data-clipboard-action="copy" data-clipboard-target="#foo">一键复制淘口令</a>
            <a v-show="isBrowser() == 2 || isBrowser() == 3 " href="javascipt:viod(0)" class="copyCode" @click="copy">一键复制淘口令</a>

	          <p>点击一键复制后，请打开【手机淘宝】购买，若复制失败，请手动复制淘口令。</p>
	        </div>
        </div>
      </section>
</template>

<script>
  export default {
    props:['show','data'],
    methods:{
      // 淘口令购买
      codeBuy() { 
         this.$parent.show = false
         
      },
      isBrowser() {
         // 判断设备 iPhone:1 Android:2 其他:3
          if (navigator.userAgent.match(/iPhone/g)) {
            return 1
          }else if (navigator.userAgent.match(/Android/g)) {
            return 2
          }else{
            return 3
          }
      },

      copy () {
        
        function tooltip(el, message)
        {
          var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          var x = parseInt(el.getBoundingClientRect().left) + scrollLeft + 10;
          var y = parseInt(el.getBoundingClientRect().top) + scrollTop + 10;
          if (!document.getElementById("copy_tooltip"))
          {
            var tooltip = document.createElement('div');
            tooltip.id = "copy_tooltip";
            tooltip.style.position = "absolute";
            tooltip.style.border = "1px solid black";
            tooltip.style.background = "#dbdb00";
            tooltip.style.opacity = 1;
            tooltip.style.transition = "opacity 0.3s";
            document.body.appendChild(tooltip);
          }
          else
          {
            var tooltip = document.getElementById("copy_tooltip")
          }
          tooltip.style.opacity = 1;
          tooltip.style.left = x + "px";
          tooltip.style.top = y + "px";
          tooltip.innerHTML = message;
          setTimeout(function() { tooltip.style.opacity = 0; }, 2000);
        }



        function select_all_and_copy(el) 
        {
            // Copy textarea, pre, div, etc.
          if (document.body.createTextRange) {
                // IE 
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.select();
                textRange.execCommand("Copy");   
            tooltip(el, "Copied!");  
            }
          else if (window.getSelection && document.createRange) {
                // non-IE
                var editable = el.contentEditable; // Record contentEditable status of element
                var readOnly = el.readOnly; // Record readOnly status of element
                el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
                el.readOnly = false; // iOS will not select in a read only form element
                var range = document.createRange();
                range.selectNodeContents(el);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range); // Does not work for Firefox if a textarea or input
                if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT") 
                  el.select(); // Firefox will only select a form element with select()
                if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i))
                  el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
                el.contentEditable = editable; // Restore previous contentEditable status
                el.readOnly = readOnly; // Restore previous readOnly status 
              if (document.queryCommandSupported("copy"))
              {
              var successful = document.execCommand('copy');  
                if (successful) tooltip(el, "Copied to clipboard.");
                else tooltip(el, "Press CTRL+C to copy");
            }
            else
            {
              if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
                tooltip(el, "Press CTRL+C to copy");  
            }
            }
        } // end function select_all_and_copy(el)


        select_all_and_copy(document.getElementById("textbox"))
      }
    },
    mounted:function(){
      var clipboard = new Clipboard('.copyCode');
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped="scoped">
@import './scss/codeModel.scss';
</style>
