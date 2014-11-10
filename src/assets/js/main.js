/* Main Scripts */

/*!
  Autosize 1.18.14
  license: MIT
  http://www.jacklmoore.com/autosize
*/
!function(e){var t,o={className:"autosizejs",id:"autosizejs",append:"\n",callback:!1,resizeDelay:10,placeholder:!0},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent","whiteSpace"],s=e(i).data("autosize",!0)[0];s.style.lineHeight="99px","99px"===e(s).css("lineHeight")&&n.push("lineHeight"),s.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),s.parentNode!==document.body&&e(document.body).append(s),this.each(function(){function o(){var t,o=window.getComputedStyle?window.getComputedStyle(u,null):!1;o?(t=u.getBoundingClientRect().width,(0===t||"number"!=typeof t)&&(t=parseInt(o.width,10)),e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){t-=parseInt(o[i],10)})):t=p.width(),s.style.width=Math.max(t,0)+"px"}function a(){var a={};if(t=u,s.className=i.className,s.id=i.id,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){a[t]=p.css(t)}),e(s).css(a).attr("wrap",p.attr("wrap")),o(),window.chrome){var r=u.style.width;u.style.width="0px";{u.offsetWidth}u.style.width=r}}function r(){var e,n;t!==u?a():o(),s.value=!u.value&&i.placeholder?p.attr("placeholder")||"":u.value,s.value+=i.append||"",s.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),s.scrollTop=0,s.scrollTop=9e4,e=s.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=w,n!==e&&(u.style.height=e+"px",s.className=s.className,f&&i.callback.call(u,u),p.trigger("autosize.resized"))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),w=0,f=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width(),y=p.css("resize");p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(w=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-w||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===y?p.css("resize","none"):"both"===y&&p.css("resize","horizontal"),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}}(jQuery||$);

/**
 * smoothState.js is a jQuery plugin to stop page load jank.
 *
 * This jQuery plugin progressively enhances page loads to 
 * behave more like a single-page application.
 *
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @see     https://github.com/miguel-perez/jquery.smoothState.js
 * 
 */
!function(t,n,o){"use strict";if(!history.pushState)return t.fn.smoothState=function(){return this},void(t.fn.smoothState.options={});if(!t.fn.smoothState){var e=t("html, body"),r=n.console||!1,a={anchors:"a",prefetch:!1,blacklist:".no-smoothstate, [target]",development:!1,pageCacheSize:0,alterRequestUrl:function(t){return t},onStart:{duration:0,render:function(){e.scrollTop(0)}},onProgress:{duration:0,render:function(){e.css("cursor","wait"),e.find("a").css("cursor","wait")}},onEnd:{duration:0,render:function(t,n,o){e.css("cursor","auto"),e.find("a").css("cursor","auto"),n.html(o)}},callback:function(){}},i={isExternal:function(t){var o=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof o[1]&&o[1].length>0&&o[1].toLowerCase()!==n.location.protocol?!0:"string"==typeof o[2]&&o[2].length>0&&o[2].replace(new RegExp(":("+{"http:":80,"https:":443}[n.location.protocol]+")?$"),"")!==n.location.host?!0:!1},isHash:function(t){var o=t.indexOf(n.location.pathname)>0?!0:!1,e=t.indexOf("#")>0?!0:!1;return o&&e?!0:!1},shouldLoad:function(t,n){var o=t.prop("href");return!i.isExternal(o)&&!i.isHash(o)&&!t.is(n)},htmlDoc:function(n){var o,e=t(),r=/<(\/?)(html|head|body|title|base|meta)(\s+[^>]*)?>/gi,a="ss"+Math.round(1e5*Math.random()),i=n.replace(r,function(n,o,r,i){var s={};return o||(t.merge(e,t("<"+r+"/>")),i&&t.each(t("<div"+i+"/>")[0].attributes,function(t,n){s[n.name]=n.value}),e.eq(-1).attr(s)),"<"+o+"div"+(o?"":" id='"+a+(e.length-1)+"'")+">"});return e.length?(o||(o=t("<div/>")),o.html(i),t.each(e,function(t){var n=o.find("#"+a+t).before(e[t]);e.eq(t).html(n.contents()),n.remove()}),o.children().unwrap()):t(n)},clearIfOverCapacity:function(t,n){return Object.keys||(Object.keys=function(t){var n,o=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.push(n);return o}),Object.keys(t).length>n&&(t={}),t},getContentById:function(n,o){o=o instanceof jQuery?o:i.htmlDoc(o);var e=o.find(n),r=e.length?t.trim(e.html()):o.filter(n).html(),a=r.length?t(r):null;return a},storePageIn:function(t,n,o){return o=o instanceof jQuery?o:i.htmlDoc(o),t[n]={status:"loaded",title:o.find("title").text(),html:o},t},triggerAllAnimationEndEvent:function(n,o){o=" "+o||"";var e=0,r="animationstart webkitAnimationStart oanimationstart MSAnimationStart",a="animationend webkitAnimationEnd oanimationend MSAnimationEnd",s="allanimationend",c=function(o){t(o.delegateTarget).is(n)&&(o.stopPropagation(),e++)},u=function(o){t(o.delegateTarget).is(n)&&(o.stopPropagation(),e--,0===e&&n.trigger(s))};n.on(r,c),n.on(a,u),n.on("allanimationend"+o,function(){e=0,i.redraw(n)})},redraw:function(t){t.height()}},s=function(o){if(null!==o.state){var e=n.location.href,r=t("#"+o.state.id),a=r.data("smoothState");a.href===e||i.isHash(e)||a.load(e,!0)}},c=function(e,a){var s=t(e),c={},u=n.location.href,l=function(t,o){o=o||!1;var e=!1,r=!1,i={loaded:function(){var a=e?"ss.onProgressEnd":"ss.onStartEnd";r&&e?r&&d(t):s.one(a,function(){d(t)}),o||n.history.pushState({id:s.prop("id")},c[t].title,t)},fetching:function(){e||(e=!0,s.one("ss.onStartEnd",function(){a.onProgress.render(t,s,null),setTimeout(function(){s.trigger("ss.onProgressEnd"),r=!0},a.onStart.duration)})),setTimeout(function(){c.hasOwnProperty(t)&&i[c[t].status]()},10)},error:function(){n.location=t}};c.hasOwnProperty(t)||h(t),a.onStart.render(t,s,null),setTimeout(function(){s.trigger("ss.onStartEnd")},a.onStart.duration),i[c[t].status]()},d=function(t){var e="#"+s.prop("id"),u=c[t]?i.getContentById(e,c[t].html):null;u?(o.title=c[t].title,s.data("smoothState").href=t,a.onEnd.render(t,s,u),s.one("ss.onEndEnd",function(){a.callback(t,s,u)}),setTimeout(function(){s.trigger("ss.onEndEnd")},a.onEnd.duration)):!u&&a.development&&r?r.warn("No element with an id of "+e+" in response from "+t+" in "+c):n.location=t},h=function(n){if(!c.hasOwnProperty(n)){c=i.clearIfOverCapacity(c,a.pageCacheSize),c[n]={status:"fetching"};var o=a.alterRequestUrl(n)||n,e=t.ajax(o);e.success(function(t){i.storePageIn(c,n,t),s.data("smoothState").cache=c}),e.error(function(){c[n].status="error"})}},f=function(n){var o=t(n.currentTarget),e=o.prop("href");i.shouldLoad(o,a.blacklist)&&(n.stopPropagation(),h(e))},m=function(n){var o=t(n.currentTarget),e=o.prop("href");n.metaKey||n.ctrlKey||!i.shouldLoad(o,a.blacklist)||(n.stopPropagation(),n.preventDefault(),l(e))},p=function(t){t.on("click",a.anchors,m),a.prefetch&&t.on("mouseover touchstart",a.anchors,f)},g=function(t){var n=s.addClass(t).prop("class");s.removeClass(n),setTimeout(function(){s.addClass(n)},0),s.one("ss.onStartEnd ss.onProgressEnd ss.onEndEnd",function(){s.removeClass(t)})};return a=t.extend({},t.fn.smoothState.options,a),null===n.history.state&&n.history.replaceState({id:s.prop("id")},o.title,u),i.storePageIn(c,u,o.documentElement.outerHTML),i.triggerAllAnimationEndEvent(s,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),p(s),{href:u,cache:c,load:l,fetch:h,toggleAnimationClass:g}},u=function(n){return this.each(function(){this.id&&!t.data(this,"smoothState")?t.data(this,"smoothState",new c(this,n)):!this.id&&r&&r.warn("Every smoothState container needs an id but the following one does not have one:",this)})};n.onpopstate=s,t.smoothStateUtility=i,t.fn.smoothState=u,t.fn.smoothState.options=a}}(jQuery,window,document);

var run = function() {

  $('textarea').autosize();

  var temp = parseInt($('.temperature .number').text());

  $('.toggle .on').click(function() {
    $(this).parents('.toggle').children('.checkbox').prop('checked', true);
  });

  $('.toggle .off').click(function() {
    $(this).parents('.toggle').children('.checkbox').prop('checked', false);
  });

  var checkTemp = function(current) {
    if (temp != current) {
      $('.current-temperature').fadeIn();
    }
    else {
      $('.current-temperature').fadeOut();
    }
  };

  $('.chevron-up').click(function() {
    temp++;

    $('.temperature .number').text(temp);
    checkTemp(68);

    return false;
  });

  $('.chevron-down').click(function() {
    temp--;

    $('.temperature .number').text(temp);
    checkTemp(68);

    return false;
  });

  // CSS Tricks Smooth Scroll: http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
};

/* Main Scripts */
$(function() {

  $('#page').smoothState({
    prefetch: true,
    pageCacheSize: 4,
    onStart: {
      duration: 200,
      render: function (url, $container) {
          $container.animate({opacity: 0}, 200, function() {
            $('body, html').scrollTop(0);
            $container.animate({opacity: 1}, 200);
            run();
          });
        }
      }
  });

  run();  
});

