/* File generated by shrinker.ch - DateTime: 2019-01-22, 18:22:15 */
window.Modernizr=function(y,m,P){function K(e,f){for(var l in e){var k=e[l];if(!~(""+k).indexOf("-")&&R[k]!==P)return f=="pfx"?k:true}return false}function D(e,f,l){var k=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+Q.join(k+" ")+k).split(" ");if(typeof f==="string"||typeof f==="undefined")f=K(s,f);else{s=(e+" "+z.join(k+" ")+k).split(" ");a:{e=s;for(var n in e){k=f[e[n]];if(k!==P){f=l===false?e[n]:typeof k==="function"?k.bind(l||f):k;break a}}f=false}}return f}var o={},A=m.documentElement,v=m.createElement("modernizr"),
R=v.style,S=" -webkit- -moz- -o- -ms- ".split(" "),Q="Webkit Moz O ms".split(" "),z="Webkit Moz O ms".toLowerCase().split(" ");v={};var E=[],B=E.slice,I,L=function(e,f,l,k){var s,n,F,G,r=m.createElement("div"),c=m.body,g=c||m.createElement("body");if(parseInt(l,10))for(;l--;){F=m.createElement("div");F.id=k?k[l]:"modernizr"+(l+1);r.appendChild(F)}return s=['­<style id="smodernizr">',e,"</style>"].join(""),r.id="modernizr",(c?r:g).innerHTML+=s,g.appendChild(r),c||(g.style.background="",g.style.overflow=
"hidden",G=A.style.overflow,A.style.overflow="hidden",A.appendChild(g)),n=f(r,e),c?r.parentNode.removeChild(r):(g.parentNode.removeChild(g),A.style.overflow=G),!!n},J={}.hasOwnProperty,M;typeof J!=="undefined"&&typeof J.call!=="undefined"?M=function(e,f){return J.call(e,f)}:M=function(e,f){return f in e&&typeof e.constructor.prototype[f]==="undefined"};Function.prototype.bind||(Function.prototype.bind=function(e){var f=this;if(typeof f!="function")throw new TypeError;var l=B.call(arguments,1),k=function(){if(this instanceof
k){var s=function(){};s.prototype=f.prototype;s=new s;var n=f.apply(s,l.concat(B.call(arguments)));return Object(n)===n?n:s}return f.apply(e,l.concat(B.call(arguments)))};return k});v.touch=function(){var e;return"ontouchstart"in y||y.DocumentTouch&&m instanceof DocumentTouch?e=true:L(["@media (",S.join("touch-enabled),("),"modernizr){#modernizr{top:9px;position:absolute}}"].join(""),function(f){e=f.offsetTop===9}),e};v.csstransitions=function(){return D("transition")};for(var N in v)M(v,N)&&(I=N.toLowerCase(),
o[I]=v[N](),E.push((o[I]?"":"no-")+I));o.addTest=function(e,f){if(typeof e=="object")for(var l in e)M(e,l)&&o.addTest(l,e[l]);else{e=e.toLowerCase();if(o[e]!==P)return o;f=typeof f=="function"?f():f;A.className+=" "+(f?"":"no-")+e;o[e]=f}return o};R.cssText="";return v=null,function(e,f){function l(){var b=j.elements;return typeof b=="string"?b.split(" "):b}function k(b){var a=w[b[t]];return a||(a={},p++,b[t]=p,w[p]=a),a}function s(b,a,d){a||(a=f);if(q)return a.createElement(b);d||(d=k(a));var i;
return d.cache[b]?d.cache[b].cloneNode():c.test(b)?(d.cache[b]=d.createElem(b)).cloneNode():i=d.createElem(b),i.canHaveChildren&&!r.test(b)?d.frag.appendChild(i):i}function n(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag());b.createElement=function(d){return j.shivMethods?s(d,b,a):a.createElem(d)};b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,
function(d){return a.createElem(d),a.frag.createElement(d),'c("'+d+'")'})+");return n}")(j,a.frag)}function F(b){b||(b=f);var a=k(b);if(j.shivCSS)if(!g)if(!a.hasCSS){var d,i=b;d=i.createElement("p");i=i.getElementsByTagName("head")[0]||i.documentElement;d=(d.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",i.insertBefore(d.lastChild,i.firstChild));a.hasCSS=!!d}return q||n(b,a),b}var G=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,t="_html5shiv",p=0,w={},q;(function(){try{var b=f.createElement("a");b.innerHTML="<xyz></xyz>";g="hidden"in b;q=b.childNodes.length==1||function(){f.createElement("a");var d=f.createDocumentFragment();return typeof d.cloneNode=="undefined"||typeof d.createDocumentFragment=="undefined"||typeof d.createElement=="undefined"}()}catch(a){q=g=true}})();var j={elements:G.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
shivCSS:G.shivCSS!==false,supportsUnknownElements:q,shivMethods:G.shivMethods!==false,type:"default",shivDocument:F,createElement:s,createDocumentFragment:function(b,a){b||(b=f);if(q)return b.createDocumentFragment();a=a||k(b);for(var d=a.frag.cloneNode(),i=0,u=l(),h=u.length;i<h;i++)d.createElement(u[i]);return d}};e.html5=j;F(f)}(this,m),o._version="2.6.2",o._prefixes=S,o._domPrefixes=z,o._cssomPrefixes=Q,o.testProp=function(e){return K([e])},o.testAllProps=D,o.testStyles=L,o.prefixed=function(e,
f,l){return f?D(e,f,l):D(e,"pfx")},A.className=A.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+E.join(" ")),o}(this,this.document);
(function(y,m,P){function K(c){return"[object Function]"==I.call(c)}function D(c){return"string"==typeof c}function o(){}function A(c){return!c||"loaded"==c||"complete"==c||"uninitialized"==c}function v(){var c=L.shift();J=1;c?c.t?E(function(){("c"==c.t?r.injectCss:r.injectJs)(c.s,0,c.a,c.x,c.e,1)},0):(c(),v()):J=0}function R(c,g,t,p,w,q,j){function b(h){if(!d&&A(a.readyState)&&(u.r=d=1,!J&&v(),a.onload=a.onreadystatechange=null,h)){"img"!=c&&E(function(){e.removeChild(a)},50);for(var x in n[g])n[g].hasOwnProperty(x)&&
n[g][x].onload()}}j=j||r.errorTimeout;var a=m.createElement(c),d=0,i=0,u={t:t,s:g,e:w,a:q,x:j};1===n[g]&&(i=1,n[g]=[]);"object"==c?a.data=g:(a.src=g,a.type=c);a.width=a.height="0";a.onerror=a.onload=a.onreadystatechange=function(){b.call(this,i)};L.splice(p,0,u);"img"!=c&&(i||2===n[g]?(e.insertBefore(a,N?null:B),E(b,j)):n[g].push(a))}function S(c,g,t,p,w){return J=0,g=g||"j",D(c)?R("c"==g?l:f,c,g,this.i++,t,p,w):(L.splice(this.i++,0,c),1==L.length&&v()),this}function Q(){var c=r;return c.loader={load:S,
i:0},c}var z=m.documentElement,E=y.setTimeout,B=m.getElementsByTagName("script")[0],I={}.toString,L=[],J=0,M="MozAppearance"in z.style,N=M&&!!m.createRange().compareNode,e=N?z:B.parentNode;z=y.opera&&"[object Opera]"==I.call(y.opera);z=!!m.attachEvent&&!z;var f=M?"object":z?"script":"img",l=z?"script":f,k=Array.isArray||function(c){return"[object Array]"==I.call(c)},s=[],n={},F={timeout:function(c,g){return g.length&&(c.timeout=g[0]),c}},G,r;r=function(c){function g(b){b=b.split("!");var a=s.length,
d=b.pop(),i=b.length;d={url:d,origUrl:d,prefixes:b};var u,h,x;for(h=0;h<i;h++){x=b[h].split("=");(u=F[x.shift()])&&(d=u(d,x))}for(h=0;h<a;h++)d=s[h](d);return d}function t(b,a,d,i,u){var h=g(b),x=h.autoCallback;h.url.split(".").pop().split("?").shift();h.bypass||(a&&(a=K(a)?a:a[b]||a[i]||a[b.split("/").pop().split("?")[0]]),h.instead?h.instead(b,a,d,i,u):(n[h.url]?h.noexec=true:n[h.url]=1,d.load(h.url,h.forceCSS||!h.forceJS&&"css"==h.url.split(".").pop().split("?").shift()?"c":P,h.noexec,h.attrs,
h.timeout),(K(a)||K(x))&&d.load(function(){Q();a&&a(h.origUrl,u,i);x&&x(h.origUrl,u,i);n[h.url]=2})))}function p(b,a){function d(C,V){if(C)if(D(C)){V||(h=function(){var H=[].slice.call(arguments);x.apply(this,H);T()});t(C,h,a,0,i)}else{if(Object(C)===C)for(O in W=function(){var H=0,U;for(U in C)C.hasOwnProperty(U)&&H++;return H}(),C)C.hasOwnProperty(O)&&(!V&&!--W&&(K(h)?h=function(){var H=[].slice.call(arguments);x.apply(this,H);T()}:h[O]=function(H){return function(){var U=[].slice.call(arguments);
H&&H.apply(this,U);T()}}(x[O])),t(C[O],h,a,O,i))}else!V&&T()}var i=!!b.test,u=b.load||b.both,h=b.callback||o,x=h,T=b.complete||o,W,O;d(i?b.yep:b.nope,!!u);u&&d(u)}var w,q,j=this.yepnope.loader;if(D(c))t(c,0,j,0);else if(k(c))for(w=0;w<c.length;w++){q=c[w];D(q)?t(q,0,j,0):k(q)?r(q):Object(q)===q&&p(q,j)}else Object(c)===c&&p(c,j)};r.addPrefix=function(c,g){F[c]=g};r.addFilter=function(c){s.push(c)};r.errorTimeout=1E4;null==m.readyState&&m.addEventListener&&(m.readyState="loading",m.addEventListener("DOMContentLoaded",
G=function(){m.removeEventListener("DOMContentLoaded",G,0);m.readyState="complete"},0));y.yepnope=Q();y.yepnope.executeStack=v;y.yepnope.injectJs=function(c,g,t,p,w,q){var j=m.createElement("script"),b,a;p=p||r.errorTimeout;j.src=c;for(a in t)j.setAttribute(a,t[a]);g=q?v:g||o;j.onreadystatechange=j.onload=function(){!b&&A(j.readyState)&&(b=1,g(),j.onload=j.onreadystatechange=null)};E(function(){b||(b=1,g(1))},p);w?j.onload():B.parentNode.insertBefore(j,B)};y.yepnope.injectCss=function(c,g,t,p,w,q){p=
m.createElement("link");var j;g=q?v:g||o;p.href=c;p.rel="stylesheet";p.type="text/css";for(j in t)p.setAttribute(j,t[j]);w||(B.parentNode.insertBefore(p,B),E(g,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};