/* File generated by shrinker.ch - DateTime: 2019-01-22, 18:25:07 */
var Slider=function(){var d=$("#ps-container"),e=d.children("div.ps-contentwrapper").children("div.ps-content"),h=e.length;d=d.children("div.ps-slidewrapper");var c=d.find("div.ps-slides").children("div"),j=d.find("nav > a.ps-prev"),k=d.find("nav > a.ps-next"),a=0,f=false,r=Modernizr.csstransitions,l={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")],m=function(){var b=
	a>0?c.eq(a-1).css("background-image"):c.eq(h-1).css("background-image"),g=a<h-1?c.eq(a+1).css("background-image"):c.eq(0).css("background-image");j.css("background-image",b);k.css("background-image",g)},s=function(){j.on("click",function(){f||n("prev");return false});k.on("click",function(){f||n("next");return false});e.on(l,o);c.on(l,o)},o=function(){f=false;$(this).removeClass("ps-move")},n=function(b){f=true;var g=e.eq(a),i=c.eq(a);if(b==="next")a<h-1?++a:a=0;else if(b==="prev")a>0?--a:a=h-1;var p=
	e.eq(a),q=c.eq(a);p.css({top:b==="next"?"-100%":"100%",zIndex:999});q.css({top:b==="next"?"100%":"-100%",zIndex:999});setTimeout(function(){g.addClass("ps-move").css({top:b==="next"?"100%":"-100%",zIndex:1});i.addClass("ps-move").css({top:b==="next"?"-100%":"100%",zIndex:1});p.addClass("ps-move").css("top",0);q.addClass("ps-move").css("top",0);r||(f=false)},0);m()};return{init:function(){var b=e.eq(a),g=c.eq(a),i={top:0,zIndex:999};b.css(i);g.css(i);m();s()}}}();	