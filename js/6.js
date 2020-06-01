function t_sldsInit(t,e){window.t_userAgentParser={userAgent:window.navigator.userAgent,getIOSMajorVersion:function(){var t="iPhone OS";try{var e=this.userAgent.search(t);if(-1!==e){var s=e+t.length+1,a=this.userAgent.slice(s),d=a.match(/(\d{1,3}_\d{1,3}(_\d{1,3})?)/),i=parseInt(d[0]);return i}return null}catch(t){console.log("error in userAgentParser > getIOSMajorVersion"+t.message)}},isIOSMobileChrome:function(){return!!navigator.userAgent.match("CriOS")}};var s="object"==typeof t?t:$("#rec"+t);if(0===s.length)return!1;var a=s.find(".t-slds__item"),d=a.length,i=a.filter(":first"),r=a.filter(":last"),l=$(window).width(),n=s.find(".t-slds__items-wrapper"),o=n.attr("data-slider-items-in-row"),_=n.attr("data-slider-with-cycle"),c=n.attr("data-slider-stop");if("true"==c)return!1;var f=o;t_slds_setItemsInRow(t),t_slds_changeImageUrl(t);var p=window.navigator.userAgent,m=p.indexOf("MSIE"),u="",w=!1;m>0&&(u=parseInt(p.substring(m+5,p.indexOf(".",m))),8!=u&&9!=u||(w=!0)),1==w&&(n.removeClass("t-slds_animated-fast").removeClass("t-slds_animated-slow").addClass("t-slds_animated-none t-slds_ie").attr("data-slider-correct-height","true"),n.attr("data-slider-items-in-row",1)),window.$isMobile&&1==n.hasClass("t-slds_animated-none")&&n.removeClass("t-slds_animated-none").addClass("t-slds_animated-fast"),"true"==n.attr("data-slider-initialized")&&(d-=2),n.attr("data-slider-initialized","true"),n.attr("data-slider-totalslides",d),n.attr("data-slider-pos",1),n.attr("data-slider-curr-pos",1),n.attr("data-slider-cycle",""),n.attr("data-slider-animated","");var h=n.attr("data-slider-pos");if(0==s.find(".t-slds__item[data-slide-index=0]").length&&(i.before(r.clone(!0).attr("data-slide-index","0")),s.find(".t-slds__item[data-slide-index=0]").find(".t-zoomable").removeClass("t-zoomable")),0==s.find(".t-slds__item[data-slide-index="+(d+1)+"]").length){if(r.after(i.clone(!0).attr("data-slide-index",d+1).removeClass("t-slds__item_active")).addClass("t-slds__item-loaded"),o&&o>0&&"true"==_)for(var v=i,g=r,y=0;y<o-1;y++){var b=v.next().clone(!0).attr("data-slide-index",d+y+1);g.next().after(b),g=g.next(),v=v.next()}s.find(".t-slds__item[data-slide-index="+(d+1)+"]").find(".t-zoomable").removeClass("t-zoomable")}t_slds_SliderWidth(t),"true"==n.attr("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveSlide(t,h,d,e),t_slds_initSliderControls(t,e),t_slds_ActiveCaption(t,h,d),n.attr("data-slider-timeout")>0&&(s.attr("data-screen-min")&&"none"==s.css("display")||t_slds_initAutoPlay(t,h,d,e)),s.find(".t-slds__item-loaded").length<d+2&&t_slds_UpdateImages(t,h),"yes"==n.attr("data-slider-arrows-nearpic")&&t_slds_positionArrows(t),!0!==w&&t_slds_initSliderSwipe(t,l),s.find(".t-slds").css("visibility",""),$(window).bind("resize",t_throttle(function(){setTimeout(function(){t_slds_setItemsInRow(t,f),t_slds_updateSlider(t),t_slds_positionArrows(t)},100)},200)),$(window).load(function(){"true"==n.attr("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)})}function t_slds_setItemsInRow(t,e){var s,a="object"==typeof t?t:$("#rec"+t),d=a.find(".t-slds__items-wrapper"),i=d.attr("data-slider-items-in-row");i&&(window.innerWidth<=960&&(s=2),window.innerWidth<=640&&(s=1),window.innerWidth>960&&(s=e)),s&&d.attr("data-slider-items-in-row",s)}function t_slds_initSliderControls(t,e){var s="object"==typeof t?t:$("#rec"+t),a=s.find(".t-slds__items-wrapper"),d=a.attr("data-slider-items-in-row"),i=d&&d>0?s.find(".t-slds__container .t-slds__item").width():s.find(".t-slds__container").width(),r=a.attr("data-slider-stop");if("true"==r)return!1;a.css({transform:"translateX(-"+i+"px)"}),s.find(".t-slds__arrow_wrapper").click(function(){var d=t_slds_getCurrentTranslate(s),i=a.attr("data-slider-animated"),r=parseFloat(a.attr("data-slider-pos")),l=parseFloat(a.attr("data-slider-totalslides")),n="";if(""==i){a.attr("data-slider-animated","yes");var o=$(this).attr("data-slide-direction");"left"===o?"false"==a.attr("data-slider-with-cycle")&&1==r?r=1:r--:"false"==a.attr("data-slider-with-cycle")&&r==l?r=l:r++,a.attr("data-slider-pos",r),r!=l+1&&0!=r||(n="yes"),a.attr("data-slider-cycle",n),t_slideMove(t,!1,e,d)}s.trigger("updateSlider")}),s.find(".t-slds__bullet").click(function(){var d=t_slds_getCurrentTranslate(s),i=parseFloat($(this).attr("data-slide-bullet-for"));a.attr("data-slider-pos",i),t_slideMove(t,!1,e,d),s.trigger("updateSlider")})}function t_slds_animate(t,e,s){var a=performance.now();requestAnimationFrame(function d(i){var r=(i-a)/s;r>1&&(r=1);var l=t(r);e(l),r<1?requestAnimationFrame(d):"y"==window.lazy&&t_lazyload_update()})}function t_slide_MoveAnimation(t,e,s,a){if(t[0]){t[0].style.transition="height ease-in-out .5s, transform ease-in-out 0s";var d=-Math.abs(e*s),i=-parseInt(t[0].style.transform.match(/\d+/)[0]),r=i-d;0!==r&&t_slds_animate(function(t){return t},function(e){t[0].style.transform="translateX("+(i-r*e)+"px)"},a)}}function t_slideMove(t,e,s){var a="object"==typeof t?t:$("#rec"+t),d=a.find(".t-slds__items-wrapper"),i=d.attr("data-slider-items-in-row"),r=i&&i>0?a.find(".t-slds__container .t-slds__item").width():a.find(".t-slds__container").width(),l=parseFloat(d.attr("data-slider-transition")),n=parseFloat(d.attr("data-slider-pos")),o=parseFloat(d.attr("data-slider-totalslides")),_=d.attr("data-slider-cycle"),c=a.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none"),f=d.attr("data-slider-timeout")>0,p=d.attr("data-slider-stop");if("true"==p)return!1;"false"==d.attr("data-slider-with-cycle")&&(n==o||i&&i>1&&n==o-i+1)?a.find(".t-slds__arrow_wrapper-right").fadeOut(300):a.find(".t-slds__arrow_wrapper-right").fadeIn(300),"false"==d.attr("data-slider-with-cycle")&&1==n?a.find(".t-slds__arrow_wrapper-left").fadeOut(300):a.find(".t-slds__arrow_wrapper-left").fadeIn(300),d.addClass("t-slds_animated"),window.t_userAgentParser.getIOSMajorVersion()>=13&&window.t_userAgentParser.isIOSMobileChrome()?t_slide_MoveAnimation(d,n,r,l):d.css({transform:"translateX(-"+r*n+"px)"}),setTimeout(function(){d.removeClass("t-slds_animated"),d.attr("data-slider-animated",""),_=d.attr("data-slider-cycle"),"yes"==_&&(n==o+1&&(n=1),0==n&&(n=o),window.t_userAgentParser.getIOSMajorVersion()>=13&&window.t_userAgentParser.isIOSMobileChrome()?t_slide_MoveAnimation(d,n,r,0):d.css({transform:"translateX(-"+r*n+"px)"}),!0!==c&&t_slds_ActiveSlide(t,n,o,s),d.attr("data-slider-pos",n)),"y"==window.lazy&&t_lazyload_update(),!e&&f&&t_slds_initAutoPlay(t,n,o,s)},l),t_slds_ActiveBullet(t,n,o,s),t_slds_ActiveSlide(t,n,o),"true"==d.attr("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveCaption(t,n,o),a.find(".t-slds__item-loaded").length<o+2&&t_slds_UpdateImages(t,n),d.attr("data-slider-curr-pos",n)}function t_slds_updateSlider(t){var e="object"==typeof t?t:$("#rec"+t);t_slds_SliderWidth(t);var s=e.find(".t-slds__items-wrapper"),a=s.attr("data-slider-items-in-row"),d=a&&a>0?e.find(".t-slds__container .t-slds__item").width():e.find(".t-slds__container").width(),i=parseFloat(s.attr("data-slider-pos"));s.css({transform:"translateX(-"+d*i+"px)"}),"true"==s.attr("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)}function t_slds_UpdateImages(t,e){var s="object"==typeof t?t:$("#rec"+t),a=s.find('.t-slds__item[data-slide-index="'+e+'"]');a.addClass("t-slds__item-loaded"),a.next().addClass("t-slds__item-loaded"),a.prev().addClass("t-slds__item-loaded")}function t_slds_ActiveCaption(t,e,s){var a="object"==typeof t?t:$("#rec"+t),d=a.find(".t-slds__caption"),i=a.find('.t-slds__caption[data-slide-caption="'+e+'"]');d.removeClass("t-slds__caption-active"),0==e?i=a.find('.t-slds__caption[data-slide-caption="'+s+'"]'):e==s+1&&(i=a.find('.t-slds__caption[data-slide-caption="1"]')),i.addClass("t-slds__caption-active")}function t_slds_scrollImages(t,e){var s="object"==typeof t?t:$("#rec"+t),a=(e<0?"":"-")+Math.abs(e).toString();s.find(".t-slds__items-wrapper").css("transform","translateX("+a+"px)")}function t_slds_ActiveBullet(t,e,s,a){var d;if(a&&a.thumbsbulletGallery){var i=parseInt(a.storeOptions.popup_opts.columns),r=+a.storeOptions.slider_slidesOpts.ratio;d=t_store_prodPopup_gallery_calcMaxThumbsCount(i,r,60,10)}var l="object"==typeof t?t:$("#rec"+t),n=l.find(".t-slds__bullet"),o=l.find('.t-slds__bullet[data-slide-bullet-for="'+e+'"]');n.removeClass("t-slds__bullet_active"),a&&a.thumbsbulletGallery&&e>=d&&e!=s+1||s>=d&&0==e?o=l.find('.t-slds__bullet[data-slide-bullet-for="'+d+'"]'):0==e?o=l.find('.t-slds__bullet[data-slide-bullet-for="'+s+'"]'):e==s+1&&(o=l.find('.t-slds__bullet[data-slide-bullet-for="1"]')),o.addClass("t-slds__bullet_active")}function t_slds_ActiveSlide(t,e,s){var a="object"==typeof t?t:$("#rec"+t),d=a.find(".t-slds__item"),i=a.find('.t-slds__item[data-slide-index="'+e+'"]'),r=a.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");d.removeClass("t-slds__item_active"),0==e&&0==r?a.find('.t-slds__item[data-slide-index="'+s+'"]').addClass("t-slds__item_active"):0==e&&1==r?i=a.find('.t-slds__item[data-slide-index="'+s+'"]'):e==s+1&&0==r?a.find('.t-slds__item[data-slide-index="1"]').addClass("t-slds__item_active"):e==s+1&&1==r&&(i=a.find('.t-slds__item[data-slide-index="1"]')),i.addClass("t-slds__item_active")}function t_slds_SliderWidth(t){var e="object"==typeof t?t:$("#rec"+t),s=e.find(".t-slds__container").width(),a=e.find(".t-slds__item").length,d=e.find(".t-slds__items-wrapper"),i=d.attr("data-slider-stop"),r=d.attr("data-slider-items-in-row");if("true"==i)return!1;e.find(".t-slds__items-wrapper").width(s*a),window.innerWidth<=640?r=1:window.innerWidth<=960&&r>1&&(r=2);var l=r&&r>1?s/r:s;e.find(".t-slds__item").width(l)}function t_slds_SliderHeight(t){var e="object"==typeof t?t:$("#rec"+t),s=e.find(".t-slds__items-wrapper").not('[data-slider-correct-height="false"]');s.css("height",e.find(".t-slds__item_active").height())}function t_slds_UpdateSliderHeight(t){var e="object"==typeof t?t:$("#rec"+t),s=e.find(".t-slds__items-wrapper").not('[data-slider-correct-height="false"]');s.css("height",e.find(".t-slds__item_active").height())}function t_slds_SliderArrowsHeight(t){var e="object"==typeof t?t:$("#rec"+t);e.find(".t-slds__arrow_wrapper").css("height",e.find(".t-slds__item_active").height())}function t_slds_UpdateSliderArrowsHeight(t){var e="object"==typeof t?t:$("#rec"+t);e.find(".t-slds__arrow_wrapper").css("height",e.find(".t-slds__item_active").height())}function t_slds_initAutoPlay(t,e,s,a){var d="object"==typeof t?t:$("#rec"+t),i=d.find(".t-slds"),r=d.find(".t-slds__items-wrapper"),l=parseFloat(r.attr("data-slider-timeout")),n="",o=r.attr("data-slider-stop"),_=r.attr("data-slider-interval-id");if(_&&clearInterval(_),"true"==o)return!1;window.isMobile||i.hover(function(){r.attr("data-slider-stopped","yes")},function(){r.attr("data-slider-stopped","")}),$(window).bind("scroll",t_throttle(function(){var t=d.offset().top,e=t+d.outerHeight(),s=$(window).scrollTop(),a=s+$(window).height();e>s&&t<a?r.attr("data-slider-stopped",""):r.attr("data-slider-stopped","yes")},200));var c=setInterval(function(){var i=$(window).scrollTop(),l=$(window).height(),o=d.offset().top,_=d.innerHeight(),c=r.attr("data-slider-stopped"),f=r.attr("data-slider-autoplay-ignore-hover"),p=r.attr("data-slider-touch"),m=t_slds_getCurrentTranslate(d);i+l/2>o&&o+_>i&&"yes"!=c&&"yes"!=f&&"yes"!=p&&("false"==r.attr("data-slider-with-cycle")&&e==s?e=s:e++,r.attr("data-slider-pos",e),e!=s+1&&0!=e||(n="yes"),t_slideMove(t,!0,a,m),"yes"==n&&(e==s+1&&(e=1),0==e&&(e=s),r.attr("data-slider-pos",e)),r.attr("data-slider-cycle",n))},l);r.attr("data-slider-interval-id",c)}function t_slds_positionArrows(t){var e="object"==typeof t?t:$("#rec"+t),s=e.find(".t-slds__arrow_container-outside"),a=e.find(".t-slds__item").width(),d=e.find(".t-slds__arrow-left").width(),i=e.find(".t-slds__arrow-right").width();s.css({"max-width":d+i+a+120+"px"})}function t_slds_initSliderSwipe(t,e,s){var a,d="object"==typeof t?t:$("#rec"+t),i=d.find(".t-slds__items-wrapper"),r=i.attr("data-slider-stop"),l=!1;if("true"==r)return!1;delete Hammer.defaults.cssProps.userSelect,hammer=new Hammer(d.find(".t-slds__items-wrapper")[0],{domEvents:!0,inputClass:Hammer.TouchInput,recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),$(window).bind("scroll",function(){l=!0,clearTimeout(a),a=setTimeout(function(){l=!1},250)}),hammer.on("pan",function(e){if(l)return!1;var a=d.find(".t-slds__items-wrapper"),i=a.attr("data-slider-items-in-row"),r=i&&i>1,n=r?d.find(".t-slds__container .t-slds__item").width():d.find(".t-slds__container").width(),o=parseFloat(a.attr("data-slider-pos")),_=parseFloat(a.attr("data-slider-totalslides")),c="",f=e.deltaX,p=100/_*e.deltaX/$(window).innerWidth(),m=20,u=a.attr("data-slider-stop");if("true"==u)return!1;a.attr("data-slider-touch","yes"),t_slds_scrollImages(t,n*o-f),e.isFinal&&(e.velocityX>1?("false"==a.attr("data-slider-with-cycle")&&1==o?o=1:o--,a.attr("data-slider-pos",o),0==o&&(c="yes"),a.attr("data-slider-cycle",c),t_slideMove(t,!1,s)):e.velocityX<-1?("false"==a.attr("data-slider-with-cycle")&&(o==_||r&&o==_-i+1)?o=r?_-i:_:o++,a.attr("data-slider-pos",o),o==_+1&&(c="yes"),a.attr("data-slider-cycle",c),t_slideMove(t,!1,s)):p<=-m/_?("false"==a.attr("data-slider-with-cycle")&&(o==_||r&&o==_-i+1)?o=r?_-i:_:o++,a.attr("data-slider-pos",o),o==_+1&&(c="yes"),a.attr("data-slider-cycle",c),t_slideMove(t,!1,s)):p>=m/_?("false"==a.attr("data-slider-with-cycle")&&1==o?o=1:o--,a.attr("data-slider-pos",o),0==o&&(c="yes"),a.attr("data-slider-cycle",c),t_slideMove(t,!1,s)):t_slideMove(t,!1,s),a.attr("data-slider-touch",""))}),hammer.on("panend",function(){t_slideMove(t,!1,s)})}function t_slds_getCurrentTranslate(t){var e=t.find(".t-slds__items-wrapper"),s=e[0].style.transform;if(e&&void 0!==s){var a=s.match(/\d+/g);if(null!==a)return parseInt(a[0],10)}}function t_slds_changeImageUrl(t){var e="object"==typeof t?t:$("#rec"+t);e.find(".t-slds__img").each(function(){var t=$(this);void 0!==t.attr("data-src")&&(t=$(this),t.attr("src",t.attr("data-src")),t.removeAttr("data-src"))})}