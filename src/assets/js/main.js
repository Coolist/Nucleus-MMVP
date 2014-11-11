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

/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]},function(){var t=Date,e=t.prototype,n=t.CultureInfo,r=function(t,e){return e||(e=2),("000"+t).slice(-1*e)};e.clearTime=function(){return this.setHours(0),this.setMinutes(0),this.setSeconds(0),this.setMilliseconds(0),this},e.setTimeToNow=function(){var t=new Date;return this.setHours(t.getHours()),this.setMinutes(t.getMinutes()),this.setSeconds(t.getSeconds()),this.setMilliseconds(t.getMilliseconds()),this},t.today=function(){return(new Date).clearTime()},t.compare=function(t,e){if(isNaN(t)||isNaN(e))throw new Error(t+" - "+e);if(t instanceof Date&&e instanceof Date)return e>t?-1:t>e?1:0;throw new TypeError(t+" - "+e)},t.equals=function(t,e){return 0===t.compareTo(e)},t.getDayNumberFromName=function(t){for(var e=n.dayNames,r=n.abbreviatedDayNames,i=n.shortestDayNames,s=t.toLowerCase(),a=0;a<e.length;a++)if(e[a].toLowerCase()==s||r[a].toLowerCase()==s||i[a].toLowerCase()==s)return a;return-1},t.getMonthNumberFromName=function(t){for(var e=n.monthNames,r=n.abbreviatedMonthNames,i=t.toLowerCase(),s=0;s<e.length;s++)if(e[s].toLowerCase()==i||r[s].toLowerCase()==i)return s;return-1},t.isLeapYear=function(t){return t%4===0&&t%100!==0||t%400===0},t.getDaysInMonth=function(e,n){return[31,t.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][n]},t.getTimezoneAbbreviation=function(t){for(var e=n.timezones,r=0;r<e.length;r++)if(e[r].offset===t)return e[r].name;return null},t.getTimezoneOffset=function(t){for(var e=n.timezones,r=0;r<e.length;r++)if(e[r].name===t.toUpperCase())return e[r].offset;return null},e.clone=function(){return new Date(this.getTime())},e.compareTo=function(t){return Date.compare(this,t)},e.equals=function(t){return Date.equals(this,t||new Date)},e.between=function(t,e){return this.getTime()>=t.getTime()&&this.getTime()<=e.getTime()},e.isAfter=function(t){return 1===this.compareTo(t||new Date)},e.isBefore=function(t){return-1===this.compareTo(t||new Date)},e.isToday=function(){return this.isSameDay(new Date)},e.isSameDay=function(t){return this.clone().clearTime().equals(t.clone().clearTime())},e.addMilliseconds=function(t){return this.setMilliseconds(this.getMilliseconds()+t),this},e.addSeconds=function(t){return this.addMilliseconds(1e3*t)},e.addMinutes=function(t){return this.addMilliseconds(6e4*t)},e.addHours=function(t){return this.addMilliseconds(36e5*t)},e.addDays=function(t){return this.setDate(this.getDate()+t),this},e.addWeeks=function(t){return this.addDays(7*t)},e.addMonths=function(e){var n=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+e),this.setDate(Math.min(n,t.getDaysInMonth(this.getFullYear(),this.getMonth()))),this},e.addYears=function(t){return this.addMonths(12*t)},e.add=function(t){if("number"==typeof t)return this._orient=t,this;var e=t;return e.milliseconds&&this.addMilliseconds(e.milliseconds),e.seconds&&this.addSeconds(e.seconds),e.minutes&&this.addMinutes(e.minutes),e.hours&&this.addHours(e.hours),e.weeks&&this.addWeeks(e.weeks),e.months&&this.addMonths(e.months),e.years&&this.addYears(e.years),e.days&&this.addDays(e.days),this};var i,s,a;e.getWeek=function(){var t,e,n,r,o,u,h,c,d,l;return i=i?i:this.getFullYear(),s=s?s:this.getMonth()+1,a=a?a:this.getDate(),2>=s?(t=i-1,e=(t/4|0)-(t/100|0)+(t/400|0),n=((t-1)/4|0)-((t-1)/100|0)+((t-1)/400|0),d=e-n,o=0,u=a-1+31*(s-1)):(t=i,e=(t/4|0)-(t/100|0)+(t/400|0),n=((t-1)/4|0)-((t-1)/100|0)+((t-1)/400|0),d=e-n,o=d+1,u=a+(153*(s-3)+2)/5+58+d),h=(t+e)%7,r=(u+h-o)%7,c=u+3-r|0,l=0>c?53-((h-d)/5|0):c>364+d?1:(c/7|0)+1,i=s=a=null,l},e.getISOWeek=function(){return i=this.getUTCFullYear(),s=this.getUTCMonth()+1,a=this.getUTCDate(),r(this.getWeek())},e.setWeek=function(t){return this.moveToDayOfWeek(1).addWeeks(t-this.getWeek())},t._validate=function(t,e,n,r){if("undefined"==typeof t)return!1;if("number"!=typeof t)throw new TypeError(t+" is not a Number.");if(e>t||t>n)throw new RangeError(t+" is not a valid value for "+r+".");return!0},t.validateMillisecond=function(e){return t._validate(e,0,999,"millisecond")},t.validateSecond=function(e){return t._validate(e,0,59,"second")},t.validateMinute=function(e){return t._validate(e,0,59,"minute")},t.validateHour=function(e){return t._validate(e,0,23,"hour")},t.validateDay=function(e,n,r){return t._validate(e,1,t.getDaysInMonth(n,r),"day")},t.validateMonth=function(e){return t._validate(e,0,11,"month")},t.validateYear=function(e){return t._validate(e,0,9999,"year")},e.set=function(e){return t.validateMillisecond(e.millisecond)&&this.addMilliseconds(e.millisecond-this.getMilliseconds()),t.validateSecond(e.second)&&this.addSeconds(e.second-this.getSeconds()),t.validateMinute(e.minute)&&this.addMinutes(e.minute-this.getMinutes()),t.validateHour(e.hour)&&this.addHours(e.hour-this.getHours()),t.validateMonth(e.month)&&this.addMonths(e.month-this.getMonth()),t.validateYear(e.year)&&this.addYears(e.year-this.getFullYear()),t.validateDay(e.day,this.getFullYear(),this.getMonth())&&this.addDays(e.day-this.getDate()),e.timezone&&this.setTimezone(e.timezone),e.timezoneOffset&&this.setTimezoneOffset(e.timezoneOffset),e.week&&t._validate(e.week,0,53,"week")&&this.setWeek(e.week),this},e.moveToFirstDayOfMonth=function(){return this.set({day:1})},e.moveToLastDayOfMonth=function(){return this.set({day:t.getDaysInMonth(this.getFullYear(),this.getMonth())})},e.moveToNthOccurrence=function(t,e){var n=0;if(e>0)n=e-1;else if(-1===e)return this.moveToLastDayOfMonth(),this.getDay()!==t&&this.moveToDayOfWeek(t,-1),this;return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(t,1).addWeeks(n)},e.moveToDayOfWeek=function(t,e){var n=(t-this.getDay()+7*(e||1))%7;return this.addDays(0===n?n+=7*(e||1):n)},e.moveToMonth=function(t,e){var n=(t-this.getMonth()+12*(e||1))%12;return this.addMonths(0===n?n+=12*(e||1):n)},e.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/864e5)+1},e.getTimezone=function(){return t.getTimezoneAbbreviation(this.getUTCOffset())},e.setTimezoneOffset=function(t){var e=this.getTimezoneOffset(),n=-6*Number(t)/10;return this.addMinutes(n-e)},e.setTimezone=function(e){return this.setTimezoneOffset(t.getTimezoneOffset(e))},e.hasDaylightSavingTime=function(){return Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset()},e.isDaylightSavingTime=function(){return this.hasDaylightSavingTime()&&(new Date).getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset()},e.getUTCOffset=function(){var t,e=-10*this.getTimezoneOffset()/6;return 0>e?(t=(e-1e4).toString(),t.charAt(0)+t.substr(2)):(t=(e+1e4).toString(),"+"+t.substr(1))},e.getElapsed=function(t){return(t||new Date)-this},e.toISOString||(e.toISOString=function(){function t(t){return 10>t?"0"+t:t}return'"'+this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+'Z"'}),e._toString=e.toString,e.toString=function(t){var e=this;if(t&&1==t.length){var i=n.formatPatterns;switch(e.t=e.toString,t){case"d":return e.t(i.shortDate);case"D":return e.t(i.longDate);case"F":return e.t(i.fullDateTime);case"m":return e.t(i.monthDay);case"r":return e.t(i.rfc1123);case"s":return e.t(i.sortableDateTime);case"t":return e.t(i.shortTime);case"T":return e.t(i.longTime);case"u":return e.t(i.universalSortableDateTime);case"y":return e.t(i.yearMonth)}}var s=function(t){switch(1*t){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}};return t?t.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(t){if("\\"===t.charAt(0))return t.replace("\\","");switch(e.h=e.getHours,t){case"hh":return r(e.h()<13?0===e.h()?12:e.h():e.h()-12);case"h":return e.h()<13?0===e.h()?12:e.h():e.h()-12;case"HH":return r(e.h());case"H":return e.h();case"mm":return r(e.getMinutes());case"m":return e.getMinutes();case"ss":return r(e.getSeconds());case"s":return e.getSeconds();case"yyyy":return r(e.getFullYear(),4);case"yy":return r(e.getFullYear());case"dddd":return n.dayNames[e.getDay()];case"ddd":return n.abbreviatedDayNames[e.getDay()];case"dd":return r(e.getDate());case"d":return e.getDate();case"MMMM":return n.monthNames[e.getMonth()];case"MMM":return n.abbreviatedMonthNames[e.getMonth()];case"MM":return r(e.getMonth()+1);case"M":return e.getMonth()+1;case"t":return e.h()<12?n.amDesignator.substring(0,1):n.pmDesignator.substring(0,1);case"tt":return e.h()<12?n.amDesignator:n.pmDesignator;case"S":return s(e.getDate());default:return t}}):this._toString()}}(),function(){var t=Date,e=t.prototype,n=t.CultureInfo,r=Number.prototype;e._orient=1,e._nth=null,e._is=!1,e._same=!1,e._isSecond=!1,r._dateElement="day",e.next=function(){return this._orient=1,this},t.next=function(){return t.today().next()},e.last=e.prev=e.previous=function(){return this._orient=-1,this},t.last=t.prev=t.previous=function(){return t.today().last()},e.is=function(){return this._is=!0,this},e.same=function(){return this._same=!0,this._isSecond=!1,this},e.today=function(){return this.same().day()},e.weekday=function(){return this._is?(this._is=!1,!this.is().sat()&&!this.is().sun()):!1},e.at=function(e){return"string"==typeof e?t.parse(this.toString("d")+" "+e):this.set(e)},r.fromNow=r.after=function(t){var e={};return e[this._dateElement]=this,(t?t.clone():new Date).add(e)},r.ago=r.before=function(t){var e={};return e[this._dateElement]=-1*this,(t?t.clone():new Date).add(e)};var i,s="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),a="january february march april may june july august september october november december".split(/\s/),o="Millisecond Second Minute Hour Day Week Month Year".split(/\s/),u="Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),h="final first second third fourth fifth".split(/\s/);e.toObject=function(){for(var t={},e=0;e<o.length;e++)t[o[e].toLowerCase()]=this["get"+u[e]]();return t},t.fromObject=function(t){return t.week=null,Date.today().set(t)};for(var c=function(e){return function(){if(this._is)return this._is=!1,this.getDay()==e;if(null!==this._nth){this._isSecond&&this.addSeconds(-1*this._orient),this._isSecond=!1;var n=this._nth;this._nth=null;var r=this.clone().moveToLastDayOfMonth();if(this.moveToNthOccurrence(e,n),this>r)throw new RangeError(t.getDayName(e)+" does not occur "+n+" times in the month of "+t.getMonthName(r.getMonth())+" "+r.getFullYear()+".");return this}return this.moveToDayOfWeek(e,this._orient)}},d=function(e){return function(){var r=t.today(),i=e-r.getDay();return 0===e&&1===n.firstDayOfWeek&&0!==r.getDay()&&(i+=7),r.addDays(i)}},l=0;l<s.length;l++)t[s[l].toUpperCase()]=t[s[l].toUpperCase().substring(0,3)]=l,t[s[l]]=t[s[l].substring(0,3)]=d(l),e[s[l]]=e[s[l].substring(0,3)]=c(l);for(var f=function(t){return function(){return this._is?(this._is=!1,this.getMonth()===t):this.moveToMonth(t,this._orient)}},y=function(e){return function(){return t.today().set({month:e,day:1})}},m=0;m<a.length;m++)t[a[m].toUpperCase()]=t[a[m].toUpperCase().substring(0,3)]=m,t[a[m]]=t[a[m].substring(0,3)]=y(m),e[a[m]]=e[a[m].substring(0,3)]=f(m);for(var g=function(t){return function(){if(this._isSecond)return this._isSecond=!1,this;if(this._same){this._same=this._is=!1;for(var e=this.toObject(),n=(arguments[0]||new Date).toObject(),r="",i=t.toLowerCase(),s=o.length-1;s>-1;s--){if(r=o[s].toLowerCase(),e[r]!=n[r])return!1;if(i==r)break}return!0}return"s"!=t.substring(t.length-1)&&(t+="s"),this["add"+t](this._orient)}},p=function(t){return function(){return this._dateElement=t,this}},M=0;M<o.length;M++)i=o[M].toLowerCase(),e[i]=e[i+"s"]=g(o[M]),r[i]=r[i+"s"]=p(i);e._ss=g("Second");for(var v=function(t){return function(e){return this._same?this._ss(arguments[0]):e||0===e?this.moveToNthOccurrence(e,t):(this._nth=t,2!==t||void 0!==e&&null!==e?this:(this._isSecond=!0,this.addSeconds(this._orient)))}},D=0;D<h.length;D++)e[h[D]]=v(0===D?-1:D)}(),function(){Date.Parsing={Exception:function(t){this.message="Parse error at '"+t.substring(0,10)+" ...'"}};for(var t=Date.Parsing,e=t.Operators={rtoken:function(e){return function(n){var r=n.match(e);if(r)return[r[0],n.substring(r[0].length)];throw new t.Exception(n)}},token:function(){return function(t){return e.rtoken(new RegExp("^s*"+t+"s*"))(t)}},stoken:function(t){return e.rtoken(new RegExp("^"+t))},until:function(t){return function(e){for(var n=[],r=null;e.length;){try{r=t.call(this,e)}catch(i){n.push(r[0]),e=r[1];continue}break}return[n,e]}},many:function(t){return function(e){for(var n=[],r=null;e.length;){try{r=t.call(this,e)}catch(i){return[n,e]}n.push(r[0]),e=r[1]}return[n,e]}},optional:function(t){return function(e){var n=null;try{n=t.call(this,e)}catch(r){return[null,e]}return[n[0],n[1]]}},not:function(e){return function(n){try{e.call(this,n)}catch(r){return[null,n]}throw new t.Exception(n)}},ignore:function(t){return t?function(e){var n=null;return n=t.call(this,e),[null,n[1]]}:null},product:function(){for(var t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=[],i=0;i<t.length;i++)r.push(e.each(t[i],n));return r},cache:function(e){var n={},r=null;return function(i){try{r=n[i]=n[i]||e.call(this,i)}catch(s){r=n[i]=s}if(r instanceof t.Exception)throw r;return r}},any:function(){var e=arguments;return function(n){for(var r=null,i=0;i<e.length;i++)if(null!=e[i]){try{r=e[i].call(this,n)}catch(s){r=null}if(r)return r}throw new t.Exception(n)}},each:function(){var e=arguments;return function(n){for(var r=[],i=null,s=0;s<e.length;s++)if(null!=e[s]){try{i=e[s].call(this,n)}catch(a){throw new t.Exception(n)}r.push(i[0]),n=i[1]}return[r,n]}},all:function(){var t=arguments,e=e;return e.each(e.optional(t))},sequence:function(n,r,i){return r=r||e.rtoken(/^\s*/),i=i||null,1==n.length?n[0]:function(e){for(var s=null,a=null,o=[],u=0;u<n.length;u++){try{s=n[u].call(this,e)}catch(h){break}o.push(s[0]);try{a=r.call(this,s[1])}catch(c){a=null;break}e=a[1]}if(!s)throw new t.Exception(e);if(a)throw new t.Exception(a[1]);if(i)try{s=i.call(this,s[1])}catch(d){throw new t.Exception(s[1])}return[o,s?s[1]:e]}},between:function(t,n,i){i=i||t;var s=e.each(e.ignore(t),n,e.ignore(i));return function(t){var e=s.call(this,t);return[[e[0][0],r[0][2]],e[1]]}},list:function(t,n,r){return n=n||e.rtoken(/^\s*/),r=r||null,t instanceof Array?e.each(e.product(t.slice(0,-1),e.ignore(n)),t.slice(-1),e.ignore(r)):e.each(e.many(e.each(t,e.ignore(n))),px,e.ignore(r))},set:function(n,r,i){return r=r||e.rtoken(/^\s*/),i=i||null,function(s){for(var a=null,o=null,u=null,h=null,c=[[],s],d=!1,l=0;l<n.length;l++){u=null,o=null,a=null,d=1==n.length;try{a=n[l].call(this,s)}catch(f){continue}if(h=[[a[0]],a[1]],a[1].length>0&&!d)try{u=r.call(this,a[1])}catch(y){d=!0}else d=!0;if(d||0!==u[1].length||(d=!0),!d){for(var m=[],g=0;g<n.length;g++)l!=g&&m.push(n[g]);o=e.set(m,r).call(this,u[1]),o[0].length>0&&(h[0]=h[0].concat(o[0]),h[1]=o[1])}if(h[1].length<c[1].length&&(c=h),0===c[1].length)break}if(0===c[0].length)return c;if(i){try{u=i.call(this,c[1])}catch(p){throw new t.Exception(c[1])}c[1]=u[1]}return c}},forward:function(t,e){return function(n){return t[e].call(this,n)}},replace:function(t,e){return function(n){var r=t.call(this,n);return[e,r[1]]}},process:function(t,e){return function(n){var r=t.call(this,n);return[e.call(this,r[0]),r[1]]}},min:function(e,n){return function(r){var i=n.call(this,r);if(i[0].length<e)throw new t.Exception(r);return i}}},n=function(t){return function(){var e=null,n=[];if(arguments.length>1?e=Array.prototype.slice.call(arguments):arguments[0]instanceof Array&&(e=arguments[0]),!e)return t.apply(null,arguments);for(var r=0,i=e.shift();r<i.length;r++)return e.unshift(i[r]),n.push(t.apply(null,e)),e.shift(),n}},i="optional not ignore cache".split(/\s/),s=0;s<i.length;s++)e[i[s]]=n(e[i[s]]);for(var a=function(t){return function(){return arguments[0]instanceof Array?t.apply(null,arguments[0]):t.apply(null,arguments)}},o="each any all".split(/\s/),u=0;u<o.length;u++)e[o[u]]=a(e[o[u]])}(),function(){var t=Date,e=(t.prototype,t.CultureInfo),n=function(t){for(var e=[],r=0;r<t.length;r++)t[r]instanceof Array?e=e.concat(n(t[r])):t[r]&&e.push(t[r]);return e};t.Grammar={},t.Translator={hour:function(t){return function(){this.hour=Number(t)}},minute:function(t){return function(){this.minute=Number(t)}},second:function(t){return function(){this.second=Number(t)}},meridian:function(t){return function(){this.meridian=t.slice(0,1).toLowerCase()}},timezone:function(t){return function(){var e=t.replace(/[^\d\+\-]/g,"");e.length?this.timezoneOffset=Number(e):this.timezone=t.toLowerCase()}},day:function(t){var e=t[0];return function(){this.day=Number(e.match(/\d+/)[0])}},month:function(t){return function(){this.month=3==t.length?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(t)/4:Number(t)-1}},year:function(t){return function(){var n=Number(t);this.year=t.length>2?n:n+(n+2e3<e.twoDigitYearMax?2e3:1900)}},rday:function(t){return function(){switch(t){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0,this.now=!0}}},finishExact:function(e){e=e instanceof Array?e:[e];for(var n=0;n<e.length;n++)e[n]&&e[n].call(this);var r=new Date;if(!this.hour&&!this.minute||this.month||this.year||this.day||(this.day=r.getDate()),this.year||(this.year=r.getFullYear()),this.month||0===this.month||(this.month=r.getMonth()),this.day||(this.day=1),this.hour||(this.hour=0),this.minute||(this.minute=0),this.second||(this.second=0),this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0)),this.day>t.getDaysInMonth(this.year,this.month))throw new RangeError(this.day+" is not a valid value for days.");var i=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);return this.timezone?i.set({timezone:this.timezone}):this.timezoneOffset&&i.set({timezoneOffset:this.timezoneOffset}),i},finish:function(e){if(e=e instanceof Array?n(e):[e],0===e.length)return null;for(var r=0;r<e.length;r++)"function"==typeof e[r]&&e[r].call(this);var i=t.today();if(this.now&&!this.unit&&!this.operator)return new Date;this.now&&(i=new Date);var s,a,o,u=!!(this.days&&null!==this.days||this.orient||this.operator);if(o="past"==this.orient||"subtract"==this.operator?-1:1,this.now||-1=="hour minute second".indexOf(this.unit)||i.setTimeToNow(),(this.month||0===this.month)&&-1!="year day hour minute second".indexOf(this.unit)&&(this.value=this.month+1,this.month=null,u=!0),!u&&this.weekday&&!this.day&&!this.days){var h=Date[this.weekday]();this.day=h.getDate(),this.month||(this.month=h.getMonth()),this.year=h.getFullYear()}if(u&&this.weekday&&"month"!=this.unit&&(this.unit="day",s=t.getDayNumberFromName(this.weekday)-i.getDay(),a=7,this.days=s?(s+o*a)%a:o*a),this.month&&"day"==this.unit&&this.operator&&(this.value=this.month+1,this.month=null),null!=this.value&&null!=this.month&&null!=this.year&&(this.day=1*this.value),this.month&&!this.day&&this.value&&(i.set({day:1*this.value}),u||(this.day=1*this.value)),this.month||!this.value||"month"!=this.unit||this.now||(this.month=this.value,u=!0),u&&(this.month||0===this.month)&&"year"!=this.unit&&(this.unit="month",s=this.month-i.getMonth(),a=12,this.months=s?(s+o*a)%a:o*a,this.month=null),this.unit||(this.unit="day"),!this.value&&this.operator&&null!==this.operator&&this[this.unit+"s"]&&null!==this[this.unit+"s"]?this[this.unit+"s"]=this[this.unit+"s"]+("add"==this.operator?1:-1)+(this.value||0)*o:(null==this[this.unit+"s"]||null!=this.operator)&&(this.value||(this.value=1),this[this.unit+"s"]=this.value*o),this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0)),this.weekday&&!this.day&&!this.days){var h=Date[this.weekday]();this.day=h.getDate(),h.getMonth()!==i.getMonth()&&(this.month=h.getMonth())}return!this.month&&0!==this.month||this.day||(this.day=1),this.orient||this.operator||"week"!=this.unit||!this.value||this.day||this.month?(u&&this.timezone&&this.day&&this.days&&(this.day=this.days),u?i.add(this):i.set(this)):Date.today().setWeek(this.value)}};var r,i=t.Parsing.Operators,s=t.Grammar,a=t.Translator;s.datePartDelimiter=i.rtoken(/^([\s\-\.\,\/\x27]+)/),s.timePartDelimiter=i.stoken(":"),s.whiteSpace=i.rtoken(/^\s*/),s.generalDelimiter=i.rtoken(/^(([\s\,]|at|@|on)+)/);var o={};s.ctoken=function(t){var n=o[t];if(!n){for(var r=e.regexPatterns,s=t.split(/\s+/),a=[],u=0;u<s.length;u++)a.push(i.replace(i.rtoken(r[s[u]]),s[u]));n=o[t]=i.any.apply(null,a)}return n},s.ctoken2=function(t){return i.rtoken(e.regexPatterns[t])},s.h=i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),a.hour)),s.hh=i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2])/),a.hour)),s.H=i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),a.hour)),s.HH=i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3])/),a.hour)),s.m=i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/),a.minute)),s.mm=i.cache(i.process(i.rtoken(/^[0-5][0-9]/),a.minute)),s.s=i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/),a.second)),s.ss=i.cache(i.process(i.rtoken(/^[0-5][0-9]/),a.second)),s.hms=i.cache(i.sequence([s.H,s.m,s.s],s.timePartDelimiter)),s.t=i.cache(i.process(s.ctoken2("shortMeridian"),a.meridian)),s.tt=i.cache(i.process(s.ctoken2("longMeridian"),a.meridian)),s.z=i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),a.timezone)),s.zz=i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),a.timezone)),s.zzz=i.cache(i.process(s.ctoken2("timezone"),a.timezone)),s.timeSuffix=i.each(i.ignore(s.whiteSpace),i.set([s.tt,s.zzz])),s.time=i.each(i.optional(i.ignore(i.stoken("T"))),s.hms,s.timeSuffix),s.d=i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1]|\d)/),i.optional(s.ctoken2("ordinalSuffix"))),a.day)),s.dd=i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1])/),i.optional(s.ctoken2("ordinalSuffix"))),a.day)),s.ddd=s.dddd=i.cache(i.process(s.ctoken("sun mon tue wed thu fri sat"),function(t){return function(){this.weekday=t}})),s.M=i.cache(i.process(i.rtoken(/^(1[0-2]|0\d|\d)/),a.month)),s.MM=i.cache(i.process(i.rtoken(/^(1[0-2]|0\d)/),a.month)),s.MMM=s.MMMM=i.cache(i.process(s.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),a.month)),s.y=i.cache(i.process(i.rtoken(/^(\d\d?)/),a.year)),s.yy=i.cache(i.process(i.rtoken(/^(\d\d)/),a.year)),s.yyy=i.cache(i.process(i.rtoken(/^(\d\d?\d?\d?)/),a.year)),s.yyyy=i.cache(i.process(i.rtoken(/^(\d\d\d\d)/),a.year)),r=function(){return i.each(i.any.apply(null,arguments),i.not(s.ctoken2("timeContext")))},s.day=r(s.d,s.dd),s.month=r(s.M,s.MMM),s.year=r(s.yyyy,s.yy),s.orientation=i.process(s.ctoken("past future"),function(t){return function(){this.orient=t}}),s.operator=i.process(s.ctoken("add subtract"),function(t){return function(){this.operator=t}}),s.rday=i.process(s.ctoken("yesterday tomorrow today now"),a.rday),s.unit=i.process(s.ctoken("second minute hour day week month year"),function(t){return function(){this.unit=t}}),s.value=i.process(i.rtoken(/^\d\d?(st|nd|rd|th)?/),function(t){return function(){this.value=t.replace(/\D/g,"")}}),s.expression=i.set([s.rday,s.operator,s.value,s.unit,s.orientation,s.ddd,s.MMM]),r=function(){return i.set(arguments,s.datePartDelimiter)},s.mdy=r(s.ddd,s.month,s.day,s.year),s.ymd=r(s.ddd,s.year,s.month,s.day),s.dmy=r(s.ddd,s.day,s.month,s.year),s.date=function(t){return(s[e.dateElementOrder]||s.mdy).call(this,t)},s.format=i.process(i.many(i.any(i.process(i.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(e){if(s[e])return s[e];throw t.Parsing.Exception(e)}),i.process(i.rtoken(/^[^dMyhHmstz]+/),function(t){return i.ignore(i.stoken(t))}))),function(t){return i.process(i.each.apply(null,t),a.finishExact)});var u={},h=function(t){return u[t]=u[t]||s.format(t)[0]};s.formats=function(t){if(t instanceof Array){for(var e=[],n=0;n<t.length;n++)e.push(h(t[n]));return i.any.apply(null,e)}return h(t)},s._formats=s.formats(['"yyyy-MM-ddTHH:mm:ssZ"',"yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]),s._start=i.process(i.set([s.date,s.time,s.expression],s.generalDelimiter,s.whiteSpace),a.finish),s.start=function(t){try{var e=s._formats.call({},t);if(0===e[1].length)return e}catch(n){}return s._start.call({},t)},t._parse=t.parse,t.parse=function(e){var n=null;if(!e)return null;if(e instanceof Date)return e;try{n=t.Grammar.start.call({},e.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"))}catch(r){return null}return 0===n[1].length?n[0]:null},t.getParseFunction=function(e){var n=t.Grammar.formats(e);return function(t){var e=null;try{e=n.call({},t)}catch(r){return null}return 0===e[1].length?e[0]:null}},t.parseExact=function(e,n){return t.getParseFunction(n)(e)}}();

var addHistory = function(description) {
  var date = new Date().toString("hh:mmtt").toLowerCase();

  $('.timeline .column').append('<div class="item"><span class="time">' + date + '</span><span class="ball"></span><span class="description">' + description + '</span><div class="clear"></div></div>');
  $('.timeline .item:first').remove();
};

var run = function() {

  $('textarea').autosize();

  var temp = parseInt($('.temperature .number').text());

  var checkboxChanged = function(me) {
    var parentName = $(me).parents('.block').children('h4').text();
    console.log($(me).attr('checked'));

    if ($(me).attr('checked')) {
      if (parentName == 'Belkin Wall Switch') {
        addHistory(parentName + ' set to on.');
      }
      else {
        addHistory(parentName + ' locked.');
      }
    }
    else {
      if (parentName == 'Belkin Wall Switch') {
        addHistory(parentName + ' set to off.');
      }
      else {
        addHistory(parentName + ' unlocked.');
      }
    }
  };

  $('.toggle .on').click(function() {
    var me = $(this).parents('.toggle').children('.checkbox');
    me.prop('checked', true);
    checkboxChanged(me);
  });

  $('.toggle .off').click(function() {
    var me = $(this).parents('.toggle').children('.checkbox');
    me.prop('checked', false);
    checkboxChanged(me);
  });

  $('.add.device').click(function() {
    $(this).fadeOut();
    $('.home-devices').slideDown();
    $('body, html').animate({ scrollTop: $('.home-header').outerHeight() });
  });

  $('.checkbox').change(function() {
    checkboxChanged(this);
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

    addHistory('Thermostat set to ' + temp + ' degrees.');

    return false;
  });

  $('.chevron-down').click(function() {
    temp--;

    $('.temperature .number').text(temp);
    checkTemp(68);

    addHistory('Thermostat set to ' + temp + ' degrees.');

    return false;
  });

  var step = 0;

  $('.add-trigger').click(function() {
    $('.trigger-examples').css('opacity', 0).animate({
      opacity: 1,
      height: 'toggle'
    });
    step = 1;
  });

  $('.trigger-examples .item').click(function() {
    if (step === 1) {
      $('.add-trigger').animate({
        opacity: 0,
        height: 'toggle'
      });
      $('.trigger-example').css('opacity', 0).animate({
        opacity: 1,
        height: 'toggle'
      });
      $('.trigger-example .description').text($(this).text());
      $('.trigger-examples').fadeOut();
      $('.add-action').css('opacity', 1);
      step = 2;
    }
  });

  $('.add-action').click(function() {
    if (step === 2) {
      $('.action-examples').css('opacity', 0).animate({
        opacity: 1,
        height: 'toggle'
      });
      step = 3;
    }
  });

  $('.action-examples .item').click(function() {
    if (step === 3) {
      $('.add-action').animate({
        opacity: 0,
        height: 'toggle'
      });
      $('.action-example').css('opacity', 0).animate({
        opacity: 1,
        height: 'toggle'
      });
      $('.action-example .description').text($(this).text());
      $('.action-examples').fadeOut();
      step = 4;
    }
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

