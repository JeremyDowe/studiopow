parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Lent":[function(require,module,exports) {
$(function(){$("#logo").on("click",function(){window.location.href="/"}),$(".tween").height()!==this.undefined&&(gsap.to(".tween",{x:"+=100px",duration:1,opacity:1,stagger:{amount:1,from:"screenLeft",grid:"auto"}}),gsap.to(".background__wrapper",{scale:"1.2",duration:1,opacity:.4,stagger:{amount:1,from:"screenLeft",grid:"auto"}})),$("#logo").addClass("invert"),$("nav ul li").addClass("invert"),$(window).scroll(function(){var t=$(this).scrollTop(),a=document.body,o=document.documentElement,e=Math.max(a.scrollHeight,a.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight),s=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,n=e/3*t,r=s/(this.Math.PI*t),i=s/(this.Math.PI*t);if($("#logo").addClass("normal"),$("nav ul li").addClass("normal"),$(".page__part__one").height()!==this.undefined){var l=$(".page__part__two").position().top,p=$(".page__part__two").position().top;t>100&&t>l-100&&t<p-100?($("#logo").addClass("normal"),$("nav ul li").addClass("normal"),$("#logo").removeClass("invert"),$("nav ul li").removeClass("invert")):($("#logo").removeClass("normal"),$("nav ul li").removeClass("normal"),$("#logo").addClass("invert"),$("nav ul li").addClass("invert")),t>100&&t<l+100&&($(".center").css("transform","translateY("+Math.sqrt(.2*n)+"px)"),t>l&&t<l+100?($(".page__part__one").css("opacity","0"),$(".center").css("opacity","0")):($(".page__part__one").css("opacity",i),$(".center").css("opacity",i)),$(".background__wrapper").css("transform","scale("+scroll+")")),t<100&&($(".page__part__one").css("opacity","1"),$(".center").css("opacity","1")),t>100&&t>l-100&&gsap.to(".process-tween",{y:"-100px",duration:1,opacity:1,stagger:{amount:1,from:"screenLeft",grid:"auto"}}),t>100&&t>p-100&&gsap.to(".display__bg",{scale:1.3,duration:1})}if($(".pane").height()!==this.undefined){$(".pane").each(function(){$(this).css("height",$(window).height())});var c=$(".pane--letts").position().top,d=$(".pane--moody").position().top,g=$(".pane--atar").position().top,m=t/s,h=m/r*100/100,u=r/m*100/100;t<c==!0?m/r*100/100<.25&&($(".work--pane").css("transform","translateY("+this.Math.sqrt(.25*n)+"px)"),$(".work--pane").css("opacity",m/r*100/10),$("h2.work--title").css("transform","matrix( 1, 0, 0, 1, 0, "+m/r*100+")")):$("h2.work--title").css("transform","matrix( 1, 0, 0, 1, 0, 0)"),t>c&&($(".work--pane").css("transform","translateY(196px)"),$(".work--pane").css("opacity",1),$("h2.work--title").css("transform","matrix( 1, 0, 0, 1, 0, 3.1)"),gsap.to(".w--pane--letts",{opacity:1,duration:2,delay:1.2})),h>.5&&t<d&&($(".work--pane").css("transform","translateY("+.25*r+"px)"),$("h2.work--title").css("transform","matrix( 1, 0, 0, 1, 0, "+u+")"),gsap.to(".w--pane--moody",{opacity:1,duration:2,delay:1.2})),h>.5&&t<g&&($(".work--pane").css("transform","translateY("+.25*r+"px)"),$("h2.work--title").css("transform","matrix( 1, 0, 0, 1, 0, "+u+")"),gsap.to(".w--pane--atar",{opacity:1,duration:2,delay:1.2}))}return!0})});
},{}]},{},["Lent"], null)
//# sourceMappingURL=/app.bd404e25.js.map