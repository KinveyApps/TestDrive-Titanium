// Wrap dependencies in an IIFE so they are exported onto the root object only.
(function(define, module) {
  var window = this;
  var setTimeout = function(fn) {
    return window.setTimeout(fn, 0);
  };
  var exports = window.__KinveySocialAdapter = window;
  var File = function() { };
;
/**@license MIT-promiscuous-Â©Ruben Verborgh*/
!function(n,t){function c(n,t){return(typeof t)[0]==n}function u(o,e){return e=function f(i,h,l,a,p,s){function y(n){return function(t){p&&(p=0,f(c,n,t))}}if(a=f.q,i!=c)return u(function(n,t){a.push({p:this,r:n,j:t,1:i,0:h})});if(l&&c(n,l)|c(t,l))try{p=l.then}catch(j){h=0,l=j}if(c(n,p))try{p.call(l,y(1),h=y(0))}catch(j){h(j)}else for(e=function(t,e){return c(n,t=h?t:e)?u(function(n,c){r(this,n,c,l,t)}):o},s=0;s<a.length;)p=a[s++],c(n,i=p[h])?r(p.p,p.r,p.j,l,i):(h?p.r:p.j)(l)},e.q=[],o.call(o={then:function(n,t){return e(n,t)},"catch":function(n){return e(0,n)}},function(n){e(c,1,n)},function(n){e(c,0,n)}),o}function r(u,r,o,e,f){setTimeout(function(){try{e=f(e),f=e&&c(t,e)|c(n,e)&&e.then,c(n,f)?e==u?o(TypeError()):f.call(e,r,o):r(e)}catch(i){o(i)}})}function o(n){return u(function(t){t(n)})}Promise=u,u.resolve=o,u.reject=function(n){return u(function(t,c){c(n)})},u.all=function(n){return u(function(t,c,u,r){r=[],u=n.length||t(r),n.map(function(n,e){o(n).then(function(n){r[e]=n,--u||t(r)},c)})})}}("f","o");;
(function(){var m=new function(){function g(a){return a?0:-1}var e=this.priority=function(a,b){for(var c=a.exprs,f=0,d=0,e=c.length;d<e;d++){var h=c[d];if(!~(h=h.e(h.v,b instanceof Date?b.getTime():b,b)))return-1;f+=h}return f},d=this.parse=function(a,b){a||(a={$eq:a});var c=[];if(a.constructor==Object)for(var f in a){var g=l[f]?f:"$trav",k=a[f],h=k;if(j[g]){if(~f.indexOf(".")){h=f.split(".");f=h.shift();for(var n={},m=n,p=0,s=h.length-1;p<s;p++)m=m[h[p]]={};m[h[p]]=k;h=k=n}if(k instanceof Array){h=
[];for(n=k.length;n--;)h.push(d(k[n]))}else h=d(k,f)}c.push(r(g,f,h))}else c.push(r("$eq",f,a));var q={exprs:c,k:b,test:function(a){return!!~q.priority(a)},priority:function(a){return e(q,a)}};return q},j=this.traversable={$and:!0,$or:!0,$nor:!0,$trav:!0,$not:!0},l=this.testers={$eq:function(a,b){return g(a.test(b))},$ne:function(a,b){return g(!a.test(b))},$lt:function(a,b){return a>b?0:-1},$gt:function(a,b){return a<b?0:-1},$lte:function(a,b){return a>=b?0:-1},$gte:function(a,b){return a<=b?0:-1},
$exists:function(a,b){return a===(null!=b)?0:-1},$in:function(a,b){if(b instanceof Array)for(var c=b.length;c--;){if(~a.indexOf(b[c]))return c}else return g(~a.indexOf(b));return-1},$not:function(a,b){if(!a.test)throw Error("$not test should include an expression, not a value. Use $ne instead.");return g(!a.test(b))},$type:function(a,b,c){return c?c instanceof a||c.constructor==a?0:-1:-1},$nin:function(a,b){return~l.$in(a,b)?-1:0},$mod:function(a,b){return b%a[0]==a[1]?0:-1},$all:function(a,b){for(var c=
a.length;c--;)if(!~b.indexOf(a[c]))return-1;return 0},$size:function(a,b){return b?a==b.length?0:-1:-1},$or:function(a,b){for(var c=a.length,f=c;c--;)if(~e(a[c],b))return c;return 0==f?0:-1},$nor:function(a,b){for(var c=a.length;c--;)if(~e(a[c],b))return-1;return 0},$and:function(a,b){for(var c=a.length;c--;)if(!~e(a[c],b))return-1;return 0},$trav:function(a,b){if(b instanceof Array){for(var c=b.length;c--;){var f=b[c];if(f[a.k]&&~e(a,f[a.k]))return c}return-1}return e(a,b?b[a.k]:void 0)},$regex:function(a,
b){return RegExp(a).test(b)?0:-1}},k={$eq:function(a){return a instanceof RegExp?a:{test:a instanceof Function?a:function(b){return b instanceof Array?~b.indexOf(a):a==b}}},$ne:function(a){return k.$eq(a)}},r=function(a,b,c){c=c instanceof Date?c.getTime():c;return{k:b,v:k[a]?k[a](c):c,e:l[a]}}},j=function(g,e,d){"object"!=typeof e&&(d=e,e=void 0);if(d){if("function"!=typeof d)throw Error("Unknown sift selector "+d);}else d=function(d){return d};var j=d,l=m.parse(g);d=function(d){for(var e=[],a,b,
c,f=0,g=d.length;f<g;f++)b=d[f],a=j(b),~(c=l.priority(a))&&e.push({value:b,priority:c});e.sort(function(a,b){return a.priority>b.priority?-1:1});d=Array(e.length);for(f=e.length;f--;)d[f]=e[f].value;return d};d.test=l.test;d.score=l.priority;d.query=g;return e?d(e):d};j.use=function(g){g.operators&&j.useOperators(g.operators)};j.useOperators=function(g){for(var e in g)j.useOperator(e,g[e])};j.useOperator=function(g,e){var d={},d="object"==typeof e?e:{test:e},j="$"+g;m.testers[j]=d.test;if(d.traversable||
d.traverse)m.traversable[j]=!0};"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=j:"undefined"!=typeof window&&(window.sift=j)})();
;
var exports=exports||this;exports.OAuth=function(a){function b(a){var e,b=arguments,c=b.callee,f=(b.length,this);if(!(this instanceof c))return new c(a);for(e in a)a.hasOwnProperty(e)&&(f[e]=a[e]);return f}function c(){}function d(a){var d,f,g,h,i,j,k,b=arguments,c=b.callee,l=/^([^:\/?#]+?:\/\/)*([^\/:?#]*)?(:[^\/?#]*)*([^?#]*)(\?[^#]*)?(#(.*))*/,m=this;return this instanceof c?(m.scheme="",m.host="",m.port="",m.path="",m.query=new e,m.anchor="",null!==a&&(d=a.match(l),f=d[1],g=d[2],h=d[3],i=d[4],j=d[5],k=d[6],f=void 0!==f?f.replace("://","").toLowerCase():"http",h=h?h.replace(":",""):"https"===f?"443":"80",f="http"==f&&"443"===h?"https":f,j=j?j.replace("?",""):"",k=k?k.replace("#",""):"",("https"===f&&"443"!==h||"http"===f&&"80"!==h)&&(g=g+":"+h),m.scheme=f,m.host=g,m.port=h,m.path=i||"/",m.query.setQueryParams(j),m.anchor=k||""),void 0):new c(a)}function e(a){var e,b=arguments,c=b.callee,f=(b.length,this);if(g.urlDecode,!(this instanceof c))return new c(a);if(void 0!=a)for(e in a)a.hasOwnProperty(e)&&(f[e]=a[e]);return f}function g(a){return this instanceof g?this.init(a):new g(a)}function h(a){var c,d,b=[];for(c in a)a[c]&&void 0!==a[c]&&""!==a[c]&&("realm"===c?d=c+'="'+a[c]+'"':b.push(c+'="'+g.urlEncode(a[c]+"")+'"'));return b.sort(),d&&b.unshift(d),b.join(", ")}function i(a,b,c,d){var f,e=[],h=g.urlEncode;for(f in c)void 0!==c[f]&&""!==c[f]&&e.push([g.urlEncode(f),g.urlEncode(c[f]+"")]);for(f in d)void 0!==d[f]&&""!==d[f]&&(c[f]||e.push([h(f),h(d[f]+"")]));return e=e.sort(function(a,b){return a[0]<b[0]?-1:a[0]>b[0]?1:a[1]<b[1]?-1:a[1]>b[1]?1:0}).map(function(a){return a.join("=")}),[a,h(b),h(e.join("&"))].join("&")}function j(){return parseInt(+new Date/1e3,10)}function k(a){function b(){return Math.floor(Math.random()*h.length)}a=a||64;var g,c=a/8,d="",e=c/4,f=c%4,h=["20","21","22","23","24","25","26","27","28","29","2A","2B","2C","2D","2E","2F","30","31","32","33","34","35","36","37","38","39","3A","3B","3C","3D","3E","3F","40","41","42","43","44","45","46","47","48","49","4A","4B","4C","4D","4E","4F","50","51","52","53","54","55","56","57","58","59","5A","5B","5C","5D","5E","5F","60","61","62","63","64","65","66","67","68","69","6A","6B","6C","6D","6E","6F","70","71","72","73","74","75","76","77","78","79","7A","7B","7C","7D","7E"];for(g=0;e>g;g++)d+=h[b()]+h[b()]+h[b()]+h[b()];for(g=0;f>g;g++)d+=h[b()];return d}function l(){var b;if("undefined"!=typeof a.Titanium&&"undefined"!=typeof a.Titanium.Network.createHTTPClient)b=a.Titanium.Network.createHTTPClient();else if("undefined"!=typeof require)try{b=new require("xhr").XMLHttpRequest()}catch(c){if("undefined"==typeof a.XMLHttpRequest)throw"No valid request transport found.";b=new a.XMLHttpRequest}else{if("undefined"==typeof a.XMLHttpRequest)throw"No valid request transport found.";b=new a.XMLHttpRequest}return b}function m(a){var b=new Array(++a);return b.join(0).split("")}function n(a){var c,d,b=[];for(d=0;d<a.length;d++)c=a.charCodeAt(d),128>c?b.push(c):2048>c?b.push(192+(c>>6),128+(63&c)):65536>c?b.push(224+(c>>12),128+(63&c>>6),128+(63&c)):2097152>c&&b.push(240+(c>>18),128+(63&c>>12),128+(63&c>>6),128+(63&c));return b}function o(a){var c,b=[];for(c=0;c<32*a.length;c+=8)b.push(255&a[c>>>5]>>>24-c%32);return b}function p(a){var d,b=[],c=a.length;for(d=0;c>d;d++)b.push((a[d]>>>4).toString(16)),b.push((15&a[d]).toString(16));return b.join("")}function q(a){var d,b="",c=a.length;for(d=0;c>d;d++)b+=String.fromCharCode(a[d]);return b}function r(a,b){return a<<b|a>>>32-b}function s(a){if(void 0!==a){var c,d,b=a;return b.constructor===String&&(b=n(b)),c=this instanceof s?this:new s(a),d=c.hash(b),p(d)}return this instanceof s?this:new s}function t(a,b,c,d){var h,i,j,k,e=n(b),f=n(c),g=e.length;for(g>a.blocksize&&(e=a.hash(e),g=e.length),e=e.concat(m(a.blocksize-g)),i=e.slice(0),j=e.slice(0),k=0;k<a.blocksize;k++)i[k]^=92,j[k]^=54;return h=a.hash(i.concat(a.hash(j.concat(f)))),d?p(h):q(h)}c.prototype={join:function(a){return a=a||"",this.values().join(a)},keys:function(){var a,b=[],c=this;for(a in c)c.hasOwnProperty(a)&&b.push(a);return b},values:function(){var a,b=[],c=this;for(a in c)c.hasOwnProperty(a)&&b.push(c[a]);return b},shift:function(){throw"not implimented"},unshift:function(){throw"not implimented"},push:function(){throw"not implimented"},pop:function(){throw"not implimented"},sort:function(){throw"not implimented"},ksort:function(a){var d,e,f,b=this,c=b.keys();for(void 0==a?c.sort():c.sort(a),d=0;d<c.length;d++)f=c[d],e=b[f],delete b[f],b[f]=e;return b},toObject:function(){var b,a={},c=this;for(b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);return a}},b.prototype=new c,d.prototype={scheme:"",host:"",port:"",path:"",query:"",anchor:"",toString:function(){var a=this,b=a.query+"";return a.scheme+"://"+a.host+a.path+(""!=b?"?"+b:"")+(""!==a.anchor?"#"+a.anchor:"")}},e.prototype=new b,e.prototype.toString=function(){var a,b=this,c=[],d="",e="",f=g.urlEncode;b.ksort();for(a in b)b.hasOwnProperty(a)&&void 0!=a&&void 0!=b[a]&&(e=f(a)+"="+f(b[a]),c.push(e));return c.length>0&&(d=c.join("&")),d},e.prototype.setQueryParams=function(a){var d,e,f,i,b=arguments,c=b.length,h=this,j=g.urlDecode;if(1==c){if("object"==typeof a)for(d in a)a.hasOwnProperty(d)&&(h[d]=j(a[d]));else if("string"==typeof a)for(e=a.split("&"),d=0,f=e.length;f>d;d++)i=e[d].split("="),""!=i[0]&&(h[i[0]]=j(i[1]))}else for(d=0;c>d;d+=2)h[b[d]]=j(b[d+1])};var f="1.0";return g.prototype={realm:"",requestTokenUrl:"",authorizationUrl:"",accessTokenUrl:"",init:function(a){var b="",c={enablePrivilege:a.enablePrivilege||!1,proxyUrl:a.proxyUrl,callbackUrl:a.callbackUrl||"oob",consumerKey:a.consumerKey,consumerSecret:a.consumerSecret,accessTokenKey:a.accessTokenKey||b,accessTokenSecret:a.accessTokenSecret||b,verifier:b,signatureMethod:a.signatureMethod||"HMAC-SHA1"};return this.realm=a.realm||b,this.requestTokenUrl=a.requestTokenUrl||b,this.authorizationUrl=a.authorizationUrl||b,this.accessTokenUrl=a.accessTokenUrl||b,this.getAccessToken=function(){return[c.accessTokenKey,c.accessTokenSecret]},this.getAccessTokenKey=function(){return c.accessTokenKey},this.getAccessTokenSecret=function(){return c.accessTokenSecret},this.setAccessToken=function(a,b){b&&(a=[a,b]),c.accessTokenKey=a[0],c.accessTokenSecret=a[1]},this.getVerifier=function(){return c.verifier},this.setVerifier=function(a){c.verifier=a},this.setCallbackUrl=function(a){c.callbackUrl=a},this.request=function(a){var b,e,m,n,o,p,q,r,s,t,u,v,x,z,A,B,w=[],y={};b=a.method||"GET",e=d(a.url),m=a.data||{},n=a.headers||{},o=a.success||function(){},p=a.failure||function(){},A=function(){var a=!1;for(var b in m)(m[b]instanceof File||"undefined"!=typeof m[b].fileName)&&(a=!0);return a}(),x=a.appendQueryString?a.appendQueryString:!1,c.enablePrivilege&&netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead UniversalBrowserWrite"),q=l(),q.onreadystatechange=function(){if(4===q.readyState){var e,a=/^(.*?):\s*(.*?)\r?$/gm,b=n,c={},d="";if(q.getAllResponseHeaders)for(d=q.getAllResponseHeaders();e=a.exec(d);)c[e[1]]=e[2];else if(q.getResponseHeaders){d=q.getResponseHeaders();for(var f=0,g=d.length;g>f;++f)c[d[f][0]]=d[f][1]}var h=!1;"Content-Type"in c&&"text/xml"==c["Content-Type"]&&(h=!0);var i={text:q.responseText,xml:h?q.responseXML:"",requestHeaders:b,responseHeaders:c};q.status>=200&&q.status<=226||304==q.status||0===q.status?o(i):q.status>=400&&0!==q.status&&p(i)}},s={oauth_callback:c.callbackUrl,oauth_consumer_key:c.consumerKey,oauth_token:c.accessTokenKey,oauth_signature_method:c.signatureMethod,oauth_timestamp:j(),oauth_nonce:k(),oauth_verifier:c.verifier,oauth_version:f},t=c.signatureMethod,z=e.query.toObject();for(r in z)y[r]=z[r];if(!("Content-Type"in n&&"application/x-www-form-urlencoded"!=n["Content-Type"]||A))for(r in m)y[r]=m[r];if(B=e.scheme+"://"+e.host+e.path,u=i(b,B,s,y),v=g.signatureMethod[t](c.consumerSecret,c.accessTokenSecret,u),s.oauth_signature=v,this.realm&&(s.realm=this.realm),c.proxyUrl&&(e=d(c.proxyUrl+e.path)),x||"GET"==b)e.query.setQueryParams(m),w=null;else if(A){if(A){w=new FormData;for(r in m)w.append(r,m[r])}}else if("string"==typeof m)w=m,"Content-Type"in n||(n["Content-Type"]="text/plain");else{for(r in m)w.push(g.urlEncode(r)+"="+g.urlEncode(m[r]+""));w=w.sort().join("&"),"Content-Type"in n||(n["Content-Type"]="application/x-www-form-urlencoded")}q.open(b,e+"",!0),q.setRequestHeader("Authorization","OAuth "+h(s)),q.setRequestHeader("X-Requested-With","XMLHttpRequest");for(r in n)q.setRequestHeader(r,n[r]);q.send(w)},this},get:function(a,b,c){this.request({url:a,success:b,failure:c})},post:function(a,b,c,d){this.request({method:"POST",url:a,data:b,success:c,failure:d})},getJSON:function(a,b,c){this.get(a,function(a){b(JSON.parse(a.text))},c)},postJSON:function(a,b,c,d){this.request({method:"POST",url:a,data:JSON.stringify(b),success:function(a){c(JSON.parse(a.text))},failure:d,headers:{"Content-Type":"application/json"}})},parseTokenRequest:function(a,b){switch(b){case"text/xml":var c=a.xml.getElementsByTagName("token"),d=a.xml.getElementsByTagName("secret");i[g.urlDecode(c[0])]=g.urlDecode(d[0]);break;default:for(var e=0,f=a.text.split("&"),h=f.length,i={};h>e;++e){var j=f[e].split("=");i[g.urlDecode(j[0])]=g.urlDecode(j[1])}}return i},fetchRequestToken:function(a,b){var c=this;c.setAccessToken("","");var d=c.authorizationUrl;this.get(this.requestTokenUrl,function(b){var e=c.parseTokenRequest(b,b.responseHeaders["Content-Type"]||void 0);c.setAccessToken([e.oauth_token,e.oauth_token_secret]),a(d+"?"+b.text)},b)},fetchAccessToken:function(a,b){var c=this;this.get(this.accessTokenUrl,function(b){var d=c.parseTokenRequest(b,b.responseHeaders["Content-Type"]||void 0);c.setAccessToken([d.oauth_token,d.oauth_token_secret]),c.setVerifier(""),a(b)},b)}},g.signatureMethod={"HMAC-SHA1":function(b,c,d){var e,f,h=g.urlEncode;return b=h(b),c=h(c||""),e=b+"&"+c,f=t(s.prototype,e,d),a.btoa(f)}},g.urlEncode=function(a){function b(a){var b=a.toString(16).toUpperCase();return b.length<2&&(b=0+b),"%"+b}if(!a)return"";a+="";var e,g,c=/[ \t\r\n!*"'();:@&=+$,\/?%#\[\]<>{}|`^\\\u0080-\uffff]/,d=a.length,f=a.split("");for(e=0;d>e;e++)(g=f[e].match(c))&&(g=g[0].charCodeAt(0),128>g?f[e]=b(g):2048>g?f[e]=b(192+(g>>6))+b(128+(63&g)):65536>g?f[e]=b(224+(g>>12))+b(128+(63&g>>6))+b(128+(63&g)):2097152>g&&(f[e]=b(240+(g>>18))+b(128+(63&g>>12))+b(128+(63&g>>6))+b(128+(63&g))));return f.join("")},g.urlDecode=function(a){return a?a.replace(/%[a-fA-F0-9]{2}/gi,function(a){return String.fromCharCode(parseInt(a.replace("%",""),16))}):""},s.prototype=new s,s.prototype.blocksize=64,s.prototype.hash=function(a){function A(a,b,c,d){switch(a){case 0:return b&c|~b&d;case 1:case 3:return b^c^d;case 2:return b&c|b&d|c&d}return-1}var d,e,f,g,h,i,j,k,l,p,q,s,t,u,v,w,x,y,z,b=[1732584193,4023233417,2562383102,271733878,3285377520],c=[1518500249,1859775393,2400959708,3395469782];for(a.constructor===String&&(a=n(a.encodeUTF8())),f=a.length,g=Math.ceil((f+9)/this.blocksize)*this.blocksize-(f+9),e=Math.floor(f/4294967296),d=Math.floor(f%4294967296),h=[255&8*e>>24,255&8*e>>16,255&8*e>>8,255&8*e,255&8*d>>24,255&8*d>>16,255&8*d>>8,255&8*d],a=a.concat([128],m(g),h),i=Math.ceil(a.length/this.blocksize),j=0;i>j;j++){for(k=a.slice(j*this.blocksize,(j+1)*this.blocksize),l=k.length,p=[],q=0;l>q;q++)p[q>>>2]|=k[q]<<24-8*(q-4*(q>>2));for(s=b[0],t=b[1],u=b[2],v=b[3],w=b[4],x=0;80>x;x++)x>=16&&(p[x]=r(p[x-3]^p[x-8]^p[x-14]^p[x-16],1)),y=Math.floor(x/20),z=r(s,5)+A(y,t,u,v)+w+c[y]+p[x],w=v,v=u,u=r(t,30),t=s,s=z;b[0]+=s,b[1]+=t,b[2]+=u,b[3]+=v,b[4]+=w}return o(b)},g}(exports);var exports=exports||this;!function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.btoa=a.btoa||function(a){for(var e,f,c=0,d=a.length,g="";d>c;c+=3)e=[a.charCodeAt(c),a.charCodeAt(c+1),a.charCodeAt(c+2)],f=[e[0]>>2,(3&e[0])<<4|e[1]>>4,(15&e[1])<<2|e[2]>>6,63&e[2]],isNaN(e[1])&&(f[2]=64),isNaN(e[2])&&(f[3]=64),g+=b.charAt(f[0])+b.charAt(f[1])+b.charAt(f[2])+b.charAt(f[3]);return g}}(exports);;
var exports=exports||this;exports.Google=function(e){function t(){var e=this,t=this.oauthClient,s=Ti.UI.createWindow({title:this.windowTitle}),n=Ti.UI.createWebView(),i=Ti.UI.createView({backgroundColor:"black",opacity:.7,zIndex:1}),r=Titanium.UI.createActivityIndicator({height:50,width:10,message:"Loading...",color:"white"}),c=Ti.UI.createButton({title:this.windowClose}),a=Ti.UI.createButton({title:this.windowBack});this.webView=n,s.leftNavButton=c,r.show(),i.add(r),s.add(i),s.open({modal:!0}),s.add(n),c.addEventListener("click",function(t){s.close(),e.fireEvent("cancel",{success:!1,error:"The user cancelled.",result:null})}),a.addEventListener("click",function(e){n.goBack()}),n.addEventListener("beforeload",function(e){o||s.add(i),r.show()}),n.addEventListener("load",function(n){if(-1!==n.url.indexOf("https://accounts.google.com/o/oauth2/approval")){s.remove(i),r.hide(),s.leftNavButton!==a&&(s.leftNavButton=a),o||s.close();var u=n.source.evalJS("document.getElementsByTagName('title')[0].innerText").split("=")[1];t.post("https://accounts.google.com/o/oauth2/token",{grant_type:"authorization_code",client_id:e.consumerKey,client_secret:e.consumerSecret,code:u,redirect_uri:e.callbackUrl},function(n){var i=JSON.parse(n.text);t.setAccessToken([i.access_token]),e.accessTokenKey=i.access_token,e.refreshTokenKey=i.refresh_token,e.fireEvent("login",{success:!0,error:!1,accessTokenKey:t.getAccessTokenKey(),refreshTokenKey:e.refreshTokenKey,expiresIn:i.expires_in}),e.authorized=!0,o&&s.close()})}else s.remove(i),r.hide(),s.leftNavButton!==c&&(s.leftNavButton=c)})}var s=function(){},o="android"===Ti.Platform.osname,n={OAuth:exports.OAuth},i=function(e){var t;return t=this instanceof i?this:new s,e||(e={}),t.windowTitle=e.windowTitle||"Google Authorization",t.windowClose=e.windowClose||"Close",t.windowBack=e.windowBack||"Back",t.consumerKey=e.consumerKey,t.consumerSecret=e.consumerSecret,t.accessTokenKey=e.accessTokenKey,t.refreshTokenKey=e.refreshTokenKey,t.scope=e.scope,t.authorized=!1,t.listeners={},t.accessTokenKey&&t.refreshTokenKey&&(t.authorized=!0),t.callbackUrl=e.callbackUrl||"urn:ietf:wg:oauth:2.0:oob",e.requestTokenUrl=e.requestTokenUrl||"https://accounts.google.com/o/oauth2/auth",t.oauthClient=n.OAuth(e),t};return s.prototype=i.prototype,i.prototype.authorize=function(){var e=this;this.authorized?this.oauthClient.post("https://accounts.google.com/o/oauth2/token",{grant_type:"refresh_token",client_id:this.consumerKey,client_secret:this.consumerSecret,refresh_token:this.refreshTokenKey},function(t){var s=JSON.parse(t.text);e.oauthClient.setAccessToken([s.access_token]),e.accessTokenKey=s.access_token,e.refreshTokenKey=s.refresh_token,e.fireEvent("login",{success:!0,error:!1,accessTokenKey:e.oauthClient.getAccessTokenKey(),refreshTokenKey:e.refreshTokenKey,expiresIn:s.expires_in})},function(t){e.oauthClient.setAccessToken([null]),e.accessTokenKey=null,e.refreshTokenKey=null,e.fireEvent("login",{success:!1,error:!0})}):(t.call(this),this.oauthClient.setAccessToken("",""),e.webView.url=this.oauthClient.requestTokenUrl+"?client_id="+this.consumerKey+"&redirect_uri="+this.callbackUrl+"&scope="+this.scope+"&response_type=code")},i.prototype.request=function(e,t,s,o,n){var i=this,r=this.oauthClient,c=e;s.Authorization="OAuth "+r.getAccessTokenKey(),r.request({method:o,url:c,data:t,headers:s,success:function(e){n.call(i,{success:!0,error:!1,result:e})},failure:function(e){n.call(i,{success:!1,error:"Request failed",result:e})}})},i.prototype.logout=function(e){this.oauthClient.setAccessToken("",""),this.accessTokenKey=null,this.refreshTokenKey=null,this.authorized=!1,e()},i.prototype.addEventListener=function(e,t){this.listeners=this.listeners||{},this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)},i.prototype.fireEvent=function(e,t){for(var s=this.listeners[e]||[],o=0;o<s.length;o++)s[o].call(this,t)},i.prototype.refreshAccessToken=function(){var e=this;e.oauthClient.post("https://accounts.google.com/o/oauth2/token",{grant_type:"refresh_token",client_id:e.consumerKey,client_secret:e.consumerSecret,refresh_token:e.refreshTokenKey},function(t){var s=JSON.parse(t.text);e.oauthClient.setAccessToken([s.access_token]),e.accessTokenKey=s.access_token,e.refreshTokenKey=s.refresh_token,e.fireEvent("refresh",{success:!0,error:!1,accessTokenKey:e.oauthClient.getAccessTokenKey(),refreshTokenKey:e.refreshTokenKey,expiresIn:s.expires_in})},function(t){e.fireEvent("refresh",{success:!1,error:!0})})},i}(this);var exports=exports||this;exports.Linkedin=function(e){function t(){var e=this,t=this.oauthClient,s=Ti.UI.createWindow({title:this.windowTitle}),n=Ti.UI.createWebView(),i=Ti.UI.createView({backgroundColor:"black",opacity:.7,zIndex:1}),r=Titanium.UI.createActivityIndicator({height:50,width:10,message:"Loading...",color:"white"}),c=Ti.UI.createButton({title:this.windowClose}),a=Ti.UI.createButton({title:this.windowBack});this.webView=n,s.leftNavButton=c,r.show(),i.add(r),s.add(i),s.open({modal:!0}),s.add(n),c.addEventListener("click",function(t){s.close(),e.fireEvent("cancel",{success:!1,error:"The user cancelled.",result:null})}),a.addEventListener("click",function(e){n.goBack()}),n.addEventListener("beforeload",function(e){o||s.add(i),r.show()}),n.addEventListener("load",function(n){if(-1===n.url.indexOf(e.authorizeUrl))s.remove(i),r.hide(),s.leftNavButton!==a&&(s.leftNavButton=a);else{s.leftNavButton!==c&&(s.leftNavButton=c);var u=n.source.evalJS("document.getElementsByClassName('access-code')[0].innerText");u?(o||s.close(),t.accessTokenUrl="https://api.linkedin.com/uas/oauth/accessToken?oauth_verifier="+u,t.fetchAccessToken(function(n){e.fireEvent("login",{success:!0,error:!1,accessTokenKey:t.getAccessTokenKey(),accessTokenSecret:t.getAccessTokenSecret()}),e.authorized=!0,o&&s.close()},function(t){e.fireEvent("login",{success:!1,error:"Failure to fetch access token, please try again.",result:t})})):(s.remove(i),r.hide())}})}var s=function(){},o="android"===Ti.Platform.osname,n={OAuth:exports.OAuth},i=function(e){var t;return t=this instanceof i?this:new s,e||(e={}),t.windowTitle=e.windowTitle||"Linkedin Authorization",t.windowClose=e.windowClose||"Close",t.windowBack=e.windowBack||"Back",t.consumerKey=e.consumerKey,t.consumerSecret=e.consumerSecret,t.authorizeUrl="https://www.linkedin.com/uas/oauth/authorize",t.accessTokenKey=e.accessTokenKey,t.accessTokenSecret=e.accessTokenSecret,t.scope=e.scope,t.authorized=!1,t.listeners={},t.accessTokenKey&&(t.authorized=!0),t.callbackUrl=e.callbackUrl||"oob",e.requestTokenUrl=e.requestTokenUrl||"https://api.linkedin.com/uas/oauth/requestToken",t.oauthClient=n.OAuth(e),t};return s.prototype=i.prototype,i.prototype.authorize=function(){var e=this;this.authorized?setTimeout(function(){e.fireEvent("login",{success:!0,error:!1,accessTokenKey:e.accessTokenKey,accessTokenSecret:e.accessTokenSecret})},1):(t.call(this),this.oauthClient.fetchRequestToken(function(t){var s=e.authorizeUrl+t;e.webView.url=s},function(t){e.fireEvent("login",{success:!1,error:"Failure to fetch access token, please try again.",result:t})}))},i.prototype.request=function(e,t,s,o,n){var i,r=this,c=this.oauthClient;i=e.match(/^https?:\/\/.+/i)?e:"https://api.linkedin.com/"+e,t.access_token=this.accessTokenKey,c.request({method:o,url:i,data:t,headers:s,success:function(e){n.call(r,{success:!0,error:!1,result:e})},failure:function(e){n.call(r,{success:!1,error:"Request failed",result:e})}})},i.prototype.logout=function(e){this.oauthClient.setAccessToken("",""),this.accessTokenKey=null,this.accessTokenSecret=null,this.authorized=!1,e()},i.prototype.addEventListener=function(e,t){this.listeners=this.listeners||{},this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)},i.prototype.fireEvent=function(e,t){for(var s=this.listeners[e]||[],o=0;o<s.length;o++)s[o].call(this,t)},i}(this);var exports=exports||this;exports.Twitter=function(e){function t(){var e=this,t=this.oauthClient,s=Ti.UI.createWindow({title:this.windowTitle}),n=Ti.UI.createWebView(),i=Ti.UI.createView({backgroundColor:"black",opacity:.7,zIndex:1}),r=Titanium.UI.createActivityIndicator({height:50,width:10,message:"Loading...",color:"white"}),c=Ti.UI.createButton({title:this.windowClose}),a=Ti.UI.createButton({title:this.windowBack});this.webView=n,s.leftNavButton=c,r.show(),i.add(r),s.add(i),s.open({modal:!0}),s.add(n),c.addEventListener("click",function(t){s.close(),e.fireEvent("cancel",{success:!1,error:"The user cancelled.",result:null})}),a.addEventListener("click",function(e){n.goBack()}),n.addEventListener("beforeload",function(e){o||s.add(i),r.show()}),n.addEventListener("load",function(n){if(-1===n.url.indexOf(e.authorizeUrl))s.remove(i),r.hide(),s.leftNavButton!==a&&(s.leftNavButton=a);else{s.leftNavButton!==c&&(s.leftNavButton=c);var u=n.source.evalJS("document.getElementById('oauth_pin').getElementsByTagName('code')[0].innerText");u?(o||s.close(),t.accessTokenUrl="https://api.twitter.com/oauth/access_token?oauth_verifier="+u,t.fetchAccessToken(function(n){e.fireEvent("login",{success:!0,error:!1,accessTokenKey:t.getAccessTokenKey(),accessTokenSecret:t.getAccessTokenSecret()}),e.authorized=!0,o&&s.close()},function(t){e.fireEvent("login",{success:!1,error:"Failure to fetch access token, please try again.",result:t})})):(s.remove(i),r.hide())}})}var s=function(){},o="android"===Ti.Platform.osname,n={OAuth:exports.OAuth},i=function(e){var t;return t=this instanceof i?this:new s,e||(e={}),t.windowTitle=e.windowTitle||"Twitter Authorization",t.windowClose=e.windowClose||"Close",t.windowBack=e.windowBack||"Back",t.consumerKey=e.consumerKey,t.consumerSecret=e.consumerSecret,t.authorizeUrl="https://api.twitter.com/oauth/authorize",t.accessTokenKey=e.accessTokenKey,t.accessTokenSecret=e.accessTokenSecret,t.authorized=!1,t.listeners={},t.accessTokenKey&&t.accessTokenSecret&&(t.authorized=!0),e.requestTokenUrl=e.requestTokenUrl||"https://api.twitter.com/oauth/request_token",t.oauthClient=n.OAuth(e),t};return s.prototype=i.prototype,i.prototype.authorize=function(){var e=this;this.authorized?setTimeout(function(){e.fireEvent("login",{success:!0,error:!1,accessTokenKey:e.accessTokenKey,accessTokenSecret:e.accessTokenSecret})},1):(t.call(this),this.oauthClient.fetchRequestToken(function(t){var s=e.authorizeUrl+t;e.webView.url=s},function(t){e.fireEvent("login",{success:!1,error:"Failure to fetch access token, please try again.",result:t})}))},i.prototype.request=function(e,t,s,o,n){var i,r=this,c=this.oauthClient;i=e.match(/^https?:\/\/.+/i)?e:"https://api.twitter.com/"+e,c.request({method:o,url:i,data:t,headers:s,success:function(e){n.call(r,{success:!0,error:!1,result:e})},failure:function(e){n.call(r,{success:!1,error:"Request failed",result:e})}})},i.prototype.logout=function(e){this.oauthClient.setAccessToken("",""),this.accessTokenKey=null,this.accessTokenSecret=null,this.authorized=!1,e()},i.prototype.addEventListener=function(e,t){this.listeners=this.listeners||{},this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)},i.prototype.fireEvent=function(e,t){for(var s=this.listeners[e]||[],o=0;o<s.length;o++)s[o].call(this,t)},i}(this);;
}.call(this));;
/*!
 * Copyright (c) 2015 Kinvey, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {

  // Setup.
  // ------

  // Establish the root object; `window` in the browser, `global` on the
  // server.
  var root = this;

  // Disable debug mode unless declared already.
  if('undefined' === typeof KINVEY_DEBUG) {
    /**
     * Debug mode. This is a global variable, which can be set anywhere,
     * anytime. Not available in the minified version of the library.
     *
     * @global
     * @type {boolean}
     * @default
     */
    KINVEY_DEBUG = false;
  }

  // Lightweight wrapper for `console.log` for easy debugging.
  // http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
  var log = function() {
    log.history = log.history || []; // Store logs to an array for reference.
    log.history.push(arguments);
    if(root.console) {
      root.console.log.call(root.console, Array.prototype.slice.call(arguments));
    }
  };

  // Define a function which returns a fresh copy of the library. Copies are
  // fully isolated from each other, making it very easy to communicate with
  // different apps within the same JavaScript-context.
  var kinveyFn = function() {
    /**
     * The library namespace. Contains all library functionality. Invoke as a
     * function (e.g. `Kinvey()`) to obtain a fresh copy of the library.
     *
     * @exports Kinvey
     */
    var Kinvey = function(options) {
      // Debug.
      if(KINVEY_DEBUG) {
        log('Obtaining a fresh copy of the library.', arguments);
      }

      // Create a fresh copy of the library.
      var Kinvey = kinveyFn();

      // Initialize the library if `options` are provided. If not, the
      // application should call `Kinvey.init` on the return value.
      if(null != options) {
        Kinvey.init(options);
      }

      // Return the copy.
      return Kinvey;
    };

    // From here, all library functionality will be appended to `Kinvey`.

    // Constants.
    // ----------

    /**
     * The Kinvey server.
     *
     * @constant
     * @type {string}
     * @default
     * @deprecated Kinvey.API_ENDPOINT
     */
    Kinvey.APIHostName = 'https://baas.kinvey.com';
    Kinvey.API_ENDPOINT = undefined;

    /**
     * The Auth server.
     *
     * @constant
     * @type {String}
     * @default https://auth.kinvey.com
     */
    Kinvey.MICHostName = 'https://auth.kinvey.com';

    /**
     * The Kinvey API version used when communicating with `Kinvey.APIHostName`.
     *
     * @constant
     * @type {string}
     * @default
     */
    Kinvey.API_VERSION = '3';

    /**
     * The current version of the library.
     *
     * @constant
     * @type {string}
     * @default
     */
    Kinvey.SDK_VERSION = '1.3.1';

    // Properties.
    // -----------

    /**
     * Kinvey App Key.
     *
     * @private
     * @type {?string}
     */
    Kinvey.appKey = null;

    /**
     * Kinvey App Secret.
     *
     * @private
     * @type {?string}
     */
    Kinvey.appSecret = null;

    /**
     * Kinvey Master Secret.
     *
     * @private
     * @type {?string}
     */
    Kinvey.masterSecret = null;

    // Top-level functionality.
    // ------------------------

    // The namespaces of the Kinvey service.
    var DATA_STORE = 'appdata';
    var FILES = 'blob';
    /*var PUSH = 'push';*/
    var RPC = 'rpc';
    var USERS = 'user';
    var CRP_MAX_BYTES = 2000;
    /*var USER_GROUPS = 'group';*/

    // The library has a concept of an active user which represents the person
    // using the app. There can only be one user per copy of the library.

    // The active user.
    var activeUser = null;

    // Status flag indicating whether the active user is ready to be used.
    var activeUserReady = false;

    /**
     * Restores the active user (if any) from disk.
     *
     * @param {Object} options Options.
     * @returns {Promise} The active user, or `null` if there is no active user.
     */
    var restoreActiveUser = function(options) {
      // Retrieve the authtoken from storage. If there is an authtoken, restore the
      // active user from disk.
      var promise = Storage.get('activeUser');
      return promise.then(function(user) {
        // If there is no active user, set to `null`.
        if(null == user) {
          return Kinvey.setActiveUser(null);
        }

        // Debug.
        if(KINVEY_DEBUG) {
          log('Restoring the active user.');
        }

        // Set the active user to a near-empty user with only id and authtoken set.
        var previous = Kinvey.setActiveUser({
          _id: user[0],
          _kmd: {
            authtoken: user[1]
          }
        });

        // If not `options.refresh`, return here.
        if(false === options.refresh) {
          return Kinvey.getActiveUser();
        }

        // Remove callbacks from `options` to avoid multiple calls.
        var fnSuccess = options.success;
        var fnError = options.error;
        delete options.success;
        delete options.error;

        // Retrieve the user. The `Kinvey.User.me` method will also update the
        // active user. If `INVALID_CREDENTIALS`, reset the active user.
        return Kinvey.User.me(options).then(function(response) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Restored the active user.', response);
          }

          // Restore the options and return the response.
          options.success = fnSuccess;
          options.error = fnError;
          return response;
        }, function(error) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Failed to restore the active user.', error);
          }

          // Reset the active user.
          if(Kinvey.Error.INVALID_CREDENTIALS === error.name) {
            Kinvey.setActiveUser(previous);
          }

          // Restore the options and return the response.
          options.success = fnSuccess;
          options.error = fnError;
          return Kinvey.Defer.reject(error);
        });
      });
    };

    /**
     * Returns the active user.
     *
     * @throws {Error} `Kinvey.getActiveUser` can only be called after the promise
         returned by `Kinvey.init` fulfills or rejects.
     * @returns {?Object} The active user, or `null` if there is no active user.
     */
    Kinvey.getActiveUser = function() {
      // Validate preconditions.
      if(false === activeUserReady) {
        throw new Kinvey.Error('Kinvey.getActiveUser can only be called after the ' +
          'promise returned by Kinvey.init fulfills or rejects.');
      }

      return activeUser;
    };

    /**
     * Sets the active user.
     *
     * @param {?Object} user The active user, or `null` to reset.
     * @throws {Kinvey.Error} `user` must contain: `_kmd.authtoken`.
     * @returns {?Object} The previous active user, or `null` if there was no
     *            previous active user.
     * @throws {Kinvey.Error} user argument must contain: _id, _kmd.authtoken.
     */
    Kinvey.setActiveUser = function(user) {
      // Debug.
      if(KINVEY_DEBUG) {
        log('Setting the active user.', arguments);
      }

      // Validate arguments.
      if(null != user && !(null != user._id && null != user._kmd && null != user._kmd.authtoken)) {
        throw new Kinvey.Error('user argument must contain: _id, _kmd.authtoken.');
      }

      // At this point, the active user is ready to be used (even though the
      // user data is not retrieved yet).
      if(false === activeUserReady) {
        activeUserReady = true;
      }

      var result = Kinvey.getActiveUser(); // Previous.
      activeUser = user;

      // Update disk state in the background.
      if(null != user) { // Save the active user.
        Storage.save('activeUser', [user._id, user._kmd.authtoken]);
      }
      else { // Delete the active user.
        Storage.destroy('activeUser');
      }

      // Return the previous active user.
      return result;
    };

    /**
     * Initializes the library for use with Kinvey services.
     *
     * @param {Options}  options Options.
     * @param {string}  [options.clientAppVersion]   Client App Version.
     * @param {Object}  [options.customRequestProperties] Customer request properties.
     * @param {string}  [options.apiHostName]  API Host Name. Must use the `https` protocol
     * @param {string}  [options.micHostName]  MIC Host Name. Must use the `https` protocol
     * @param {string}   options.appKey        App Key.
     * @param {string}  [options.appSecret]    App Secret.
     * @param {string}  [options.masterSecret] Master Secret. **Never use the
     *          Master Secret in client-side code.**
     * @param {boolean} [options.refresh=true] Refresh the active user (if any).
     * @param {Object}  [options.sync]         Synchronization options.
     * @returns {Promise} The active user.
     */
    Kinvey.init = function(options) {
      var error;

      // Debug.
      if(KINVEY_DEBUG) {
        log('Initializing the copy of the library.', arguments);
      }

      // Validate arguments.
      options = options || {};
      if(null == options.appKey) {
        error = new Kinvey.Error('options argument must contain: appKey.');
        return wrapCallbacks(Kinvey.Defer.reject(error), options);
      }
      if(null == options.appSecret && null == options.masterSecret) {
        error = new Kinvey.Error('options argument must contain: appSecret and/or masterSecret.');
        return wrapCallbacks(Kinvey.Defer.reject(error), options);
      }

      // The active user is not ready yet.
      activeUserReady = false;

      // Set the API host name
      var apiHostName = options.apiHostName || Kinvey.API_ENDPOINT;
      Kinvey.APIHostName = apiHostName || Kinvey.APIHostName;

      // Check if Kinvey.APIHostName uses https protocol
      if(Kinvey.APIHostName.indexOf('https://') !== 0) {
        error = new Kinvey.Error('Kinvey requires https as the protocol when setting' +
          ' Kinvey.APIHostName, instead found the protocol ' +
          Kinvey.APIHostName.substring(0, Kinvey.APIHostName.indexOf(':/')) +
          ' in Kinvey.APIHostName: ' + Kinvey.APIHostName);
        return wrapCallbacks(Kinvey.Defer.reject(error), options);
      }

      // Set the MIC host name
      Kinvey.MICHostName = options.micHostName || Kinvey.MICHostName;

      // Check if Kinvey.MICHostName uses https protocol
      if(Kinvey.MICHostName.indexOf('https://') !== 0) {
        error = new Kinvey.Error('Kinvey requires https as the protocol when setting' +
          ' Kinvey.MICHostName, instead found the protocol ' +
          Kinvey.MICHostName.substring(0, Kinvey.MICHostName.indexOf(':/')) +
          ' in Kinvey.MICHostName: ' + Kinvey.MICHostName);
        return wrapCallbacks(Kinvey.Defer.reject(error), options);
      }

      // Set the Client App Version
      if(options.clientAppVersion != null) {
        Kinvey.ClientAppVersion.setVersion(options.clientAppVersion);
      }

      // Set the custom request properties
      if(options.customRequestProperties != null) {
        Kinvey.CustomRequestProperties.setProperties(options.customRequestProperties);
      }

      // Save credentials.
      Kinvey.appKey = options.appKey;
      Kinvey.appSecret = null != options.appSecret ? options.appSecret : null;
      Kinvey.masterSecret = null != options.masterSecret ? options.masterSecret : null;

      // Set the encryption key.
      Kinvey.encryptionKey = null != options.encryptionKey ? options.encryptionKey : null;

      // Initialize the synchronization namespace and restore the active user.
      var promise = Kinvey.Sync.init(options.sync).then(function() {
        return restoreActiveUser(options);
      });
      return wrapCallbacks(promise, options);
    };

    /**
     * Pings the Kinvey service.
     *
     * @param {Object} [options] Options.
     * @returns {Promise} The response.
     */
    Kinvey.ping = function(options) {
      // Debug.
      if(KINVEY_DEBUG) {
        log('Pinging the Kinvey service.', arguments);
      }

      // Cast arguments.
      options = options || {};

      // The top-level ping is not compatible with `options.nocache`.
      options.nocache = null == Kinvey.appKey ? false : options.nocache;

      // Prepare the response. If the library copy has not been initialized yet,
      // ping anonymously.
      var promise = Kinvey.Persistence.read({
        namespace: DATA_STORE,
        auth: null != Kinvey.appKey ? Auth.All : Auth.None
      }, options);

      // Debug.
      if(KINVEY_DEBUG) {
        promise.then(function(response) {
          log('Pinged the Kinvey service.', response);
        }, function(error) {
          log('Failed to ping the Kinvey service.', error);
        });
      }

      // Return the response.
      return wrapCallbacks(promise, options);
    };


    // Error-handling.
    // ---------------

    // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error

    /**
     * The Kinvey Error class. Thrown whenever the library encounters an error.
     *
     * @memberof! <global>
     * @class Kinvey.Error
     * @extends {Error}
     * @param {string} msg Error message.
     */
    Kinvey.Error = function(msg) {
      // Add stack for debugging purposes.
      this.name = 'Kinvey.Error';
      this.message = msg;
      this.stack = (new Error()).stack;

      // Debug.
      if(KINVEY_DEBUG) {
        log('A Kinvey.Error was thrown.', this.message, this.stack);
      }
    };
    Kinvey.Error.prototype = new Error();
    Kinvey.Error.prototype.constructor = Kinvey.Error;

    // ### Error definitions.

    // #### Server.
    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.ENTITY_NOT_FOUND = 'EntityNotFound';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.COLLECTION_NOT_FOUND = 'CollectionNotFound';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.APP_NOT_FOUND = 'AppNotFound';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.USER_NOT_FOUND = 'UserNotFound';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BLOB_NOT_FOUND = 'BlobNotFound';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INVALID_CREDENTIALS = 'InvalidCredentials';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.KINVEY_INTERNAL_ERROR_RETRY = 'KinveyInternalErrorRetry';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.KINVEY_INTERNAL_ERROR_STOP = 'KinveyInternalErrorStop';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.USER_ALREADY_EXISTS = 'UserAlreadyExists';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.USER_UNAVAILABLE = 'UserUnavailable';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.DUPLICATE_END_USERS = 'DuplicateEndUsers';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INSUFFICIENT_CREDENTIALS = 'InsufficientCredentials';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.WRITES_TO_COLLECTION_DISALLOWED = 'WritesToCollectionDisallowed';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INDIRECT_COLLECTION_ACCESS_DISALLOWED = 'IndirectCollectionAccessDisallowed';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.APP_PROBLEM = 'AppProblem';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.PARAMETER_VALUE_OUT_OF_RANGE = 'ParameterValueOutOfRange';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.CORS_DISABLED = 'CORSDisabled';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INVALID_QUERY_SYNTAX = 'InvalidQuerySyntax';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MISSING_QUERY = 'MissingQuery';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.JSON_PARSE_ERROR = 'JSONParseError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MISSING_REQUEST_HEADER = 'MissingRequestHeader';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INCOMPLETE_REQUEST_BODY = 'IncompleteRequestBody';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MISSING_REQUEST_PARAMETER = 'MissingRequestParameter';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INVALID_IDENTIFIER = 'InvalidIdentifier';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BAD_REQUEST = 'BadRequest';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.FEATURE_UNAVAILABLE = 'FeatureUnavailable';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.API_VERSION_NOT_IMPLEMENTED = 'APIVersionNotImplemented';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.API_VERSION_NOT_AVAILABLE = 'APIVersionNotAvailable';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INPUT_VALIDATION_FAILED = 'InputValidationFailed';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BL_RUNTIME_ERROR = 'BLRuntimeError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BL_SYNTAX_ERROR = 'BLSyntaxError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BL_TIMEOUT_ERROR = 'BLTimeoutError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.OAUTH_TOKEN_REFRESH_ERROR = 'OAuthTokenRefreshError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BL_VIOLATION_ERROR = 'BLViolationError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BL_INTERNAL_ERROR = 'BLInternalError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.THIRD_PARTY_TOS_UNACKED = 'ThirdPartyTOSUnacked';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.STALE_REQUEST = 'StaleRequest';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.DATA_LINK_PARSE_ERROR = 'DataLinkParseError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.NOT_IMPLEMENTED_ERROR = 'NotImplementedError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.EMAIL_VERIFICATION_REQUIRED = 'EmailVerificationRequired';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.SORT_LIMIT_EXCEEDED = 'SortLimitExceeded';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INVALID_SHORT_URL = 'InvalidShortURL';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.INVALID_OR_MISSING_NONCE = 'InvalidOrMissingNonce';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MISSING_CONFIGURATION = 'MissingConfiguration';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.ENDPOINT_DOES_NOT_EXIST = 'EndpointDoesNotExist';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.DISALLOWED_QUERY_SYNTAX = 'DisallowedQuerySyntax';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MALFORMED_AUTHENTICATION_HEADER = 'MalformedAuthenticationHeader';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.APP_ARCHIVED = 'AppArchived';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.BL_NOT_SUPPORTED_FOR_ROUTE = 'BLNotSupportedForRoute';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.USER_LOCKED_DOWN = 'UserLockedDown';

    // #### Client.
    /**
     * @memberOf Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.ALREADY_LOGGED_IN = 'AlreadyLoggedIn';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.DATABASE_ERROR = 'DatabaseError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MISSING_APP_CREDENTIALS = 'MissingAppCredentials';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MISSING_MASTER_CREDENTIALS = 'MissingMasterCredentials';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.NO_ACTIVE_USER = 'NoActiveUser';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.REQUEST_ABORT_ERROR = 'RequestAbortError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.REQUEST_ERROR = 'RequestError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.REQUEST_TIMEOUT_ERROR = 'RequestTimeoutError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.SOCIAL_ERROR = 'SocialError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.SYNC_ERROR = 'SyncError';

    /**
     * @memberof Kinvey.Error
     * @constant
     * @default
     */
    Kinvey.Error.MIC_ERROR = 'MIC_ERROR';

    // All client-side errors are fully declared below.
    var ClientError = {};

    /**
     * Already logged in error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.ALREADY_LOGGED_IN] = {
      name: Kinvey.Error.ALREADY_LOGGED_IN,
      description: 'You are already logged in with another user.',
      debug: 'If you want to switch users, logout the active user first ' +
        'using `Kinvey.User.logout`, then try again.'
    };

    /**
     * Database error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.DATABASE_ERROR] = {
      name: Kinvey.Error.DATABASE_ERROR,
      description: 'The database used for local persistence encountered an error.',
      debug: ''
    };

    /**
     * Missing app credentials.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.MISSING_APP_CREDENTIALS] = {
      name: Kinvey.Error.MISSING_APP_CREDENTIALS,
      description: 'Missing credentials: `Kinvey.appKey` and/or `Kinvey.appSecret`.',
      debug: 'Did you forget to call `Kinvey.init`?'
    };

    /**
     * Missing master credentials.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.MISSING_MASTER_CREDENTIALS] = {
      name: Kinvey.Error.MISSING_MASTER_CREDENTIALS,
      description: 'Missing credentials: `Kinvey.appKey` and/or `Kinvey.masterSecret`.',
      debug: 'Did you forget to call `Kinvey.init` with your Master Secret?'
    };

    /**
     * No active user.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.NO_ACTIVE_USER] = {
      name: Kinvey.Error.NO_ACTIVE_USER,
      description: 'You need to be logged in to execute this request.',
      debug: 'Try creating a user using `Kinvey.User.signup`, or login an ' +
        'existing user using `Kinvey.User.login`.'
    };

    /**
     * Request abort error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.REQUEST_ABORT_ERROR] = {
      name: Kinvey.Error.REQUEST_TIMEOUT_ERROR,
      description: 'The request was aborted.',
      debug: ''
    };

    /**
     * Request error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.REQUEST_ERROR] = {
      name: Kinvey.Error.REQUEST_ERROR,
      description: 'The request failed.',
      debug: ''
    };

    /**
     * Request timeout error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.REQUEST_TIMEOUT_ERROR] = {
      name: Kinvey.Error.REQUEST_TIMEOUT_ERROR,
      description: 'The request timed out.',
      debug: ''
    };

    /**
     * Social error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.SOCIAL_ERROR] = {
      name: Kinvey.Error.SOCIAL_ERROR,
      description: 'The social identity cannot be obtained.',
      debug: ''
    };

    /**
     * Sync error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.SYNC_ERROR] = {
      name: Kinvey.Error.SYNC_ERROR,
      description: 'The synchronization operation cannot be completed.',
      debug: ''
    };

    /**
     * MIC error.
     *
     * @constant
     * @type {Object}
     * @default
     */
    ClientError[Kinvey.Error.MIC_ERROR] = {
      name: Kinvey.Error.MIC_ERROR,
      description: 'Unable to authorize using Mobile Identity Connect.',
      debug: ''
    };

    // The `description` and `debug` properties can be overridden if desired. The
    // function below makes it easy to customize client errors.

    /**
     * Creates a new client-side error object.
     *
     * @param {string} name Error name (one of `Kinvey.Error.*` constants).
     * @param {Object} [dict] Dictionary.
     * @param {string} [dict.description] Error description.
     * @param {*} [dict.debug] Error debugging information.
     * @returns {Object} Client-side error object.
     */
    var clientError = function(name, dict) {
      // Cast arguments.
      var error = ClientError[name] || {
        name: name
      };

      // Return the error structure.
      dict = dict || {};
      return {
        name: error.name,
        description: dict.description || error.description || '',
        debug: dict.debug || error.debug || ''
      };
    };


    // Utils.
    // ------

    // Helper function to get and set a nested property in a document.
    var nested = function(document, dotProperty, value) {
      if(!dotProperty) { // Top-level document.
        document = 'undefined' === typeof value ? document : value;
        return document;
      }

      var obj = document;
      var parts = dotProperty.split('.');

      // Traverse the document until the nested property is located.
      var current;
      while((current = parts.shift()) && null != obj && obj.hasOwnProperty(current)) {
        if(0 === parts.length) { // Return the (new) property value.
          obj[current] = 'undefined' === typeof value ? obj[current] : value;
          return obj[current];
        }
        obj = obj[current]; // Continue traversing.
      }
      return null; // Property not found.
    };

    // Use the fastest possible means to execute a task in a future turn of the
    // event loop. Borrowed from [q](http://documentup.com/kriskowal/q/).
    var nextTick;
    if('function' === typeof root.setImmediate) { // IE10, Node.js 0.9+.
      nextTick = root.setImmediate;
    }
    else if('undefined' !== typeof process && process.nextTick) { // Node.js <0.9.
      nextTick = process.nextTick;
    }
    else { // Most browsers.
      nextTick = function(fn) {
        root.setTimeout(fn, 0);
      };
    }

    // Wraps asynchronous callbacks so they get called when a promise fulfills or
    // rejects. The `success` and `error` properties are extracted from `options`
    // at run-time, allowing intermediate process to alter the callbacks.
    var wrapCallbacks = function(promise, options) {
      promise.then(function(value) {
        if(options.success) { // Invoke the success handler.
          options.success(value);
        }
      }, function(reason) {
        if(options.error) { // Invoke the error handler.
          options.error(reason);
        }
      }).then(null, function(err) {
        // If an exception occurs, the promise would normally catch it. Since we
        // are using asynchronous callbacks, exceptions should be thrown all the
        // way.
        nextTick(function() {
          throw err;
        });
      });
      return promise;
    };

    // Create helper functions that are used throughout the library. Inspired by
    // [underscore.js](http://underscorejs.org/).
    var isArray = Array.isArray || function(arg) {
      return '[object Array]' === Object.prototype.toString.call(arg);
    };
    var isFunction = function(fn) {
      if('function' !== typeof /./) {
        return 'function' === typeof fn;
      }
      return '[object Function]' === Object.prototype.toString.call(fn);
    };
    var isNumber = function(number) {
      return '[object Number]' === Object.prototype.toString.call(number) && !isNaN(number);
    };
    var isObject = function(obj) {
      return Object(obj) === obj;
    };
    var isRegExp = function(regExp) {
      return '[object RegExp]' === Object.prototype.toString.call(regExp);
    };

    var isString = function(str) {
      return '[object String]' === Object.prototype.toString.call(str);
    };
    // var isEmptyString = String.isEmpty = function(str) {
    //   return isString(str) && (str.length === 0 || !str.trim());
    // };

    var isEmpty = function(obj) {
      if(null == obj) {
        return true;
      }
      if(isArray(obj) || isString(obj)) {
        return 0 === obj.length;
      }
      for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    };

    // The library internals rely on adapters to implement certain functionalities.
    // Adapters must implement these functionalities according to an interface. An
    // adapter is applied to the internals through a `use` function.

    // If no adapter is specified, the internals throw an error instead.
    var methodNotImplemented = function(methodName) {
      return function() {
        throw new Kinvey.Error('Method not implemented: ' + methodName);
      };
    };

    // An adapter can be applied by a `use` function attached to an internal
    // namespace. Adapters must implement the `nsInterface`.
    var use = function(nsInterface) {
      return function(adapter) {
        var namespace = this;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Applying an adapter.', namespace, adapter);
        }

        // Validate adapter.
        adapter = adapter || {};
        nsInterface.forEach(function(methodName) {
          if('function' !== typeof adapter[methodName]) {
            throw new Kinvey.Error('Adapter must implement method: ' + methodName);
          }
        });

        // Apply adapter to the internals.
        nsInterface.forEach(function(methodName) {
          namespace[methodName] = function() {
            // Ensure the adapter is used as `this` context.
            return adapter[methodName].apply(adapter, arguments);
          };
        });
      };
    };

    // Gets the byte count for a string
    var getByteCount = function(str) {
      var count = 0,
        stringLength = str.length,
        i;

      str = String(str || '');

      for(i = 0; i < stringLength; i++) {
        var partCount = encodeURI(str[i]).split('%').length;
        count += partCount === 1 ? 1 : partCount - 1;
      }

      return count;
    };

    /**
     * Parse a query string and return an object.
     *
     * @example foo=bar&baz=qux -> { foo: "bar", baz: "qux" }
     * @param {string} string The query string.
     * @returns {Object} The query string params.
     */
    var parseQueryString = function(str) {
      if(typeof str !== 'string') {
        return {};
      }

      str = str.trim().replace(/^(\?|#)/, '');

      if(!str) {
        return {};
      }

      var index = str.indexOf('#/');
      if(index === str.length - 2) {
        str = str.substring(0, index);
      }

      return str.trim().split('&').reduce(function(ret, param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = parts[0];
        var val = parts[1];

        key = decodeURIComponent(key);
        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeURIComponent(val);

        if(!ret.hasOwnProperty(key)) {
          ret[key] = val;
        }
        else if(Array.isArray(ret[key])) {
          ret[key].push(val);
        }
        else {
          ret[key] = [ret[key], val];
        }

        return ret;
      }, {});
    };

    // Define the request Option type for documentation purposes.

    /**
     * @typedef {Object} Options
     * @property {function} [error]        Failure callback.
     * @property {Array}    [exclude]      List of relational fields not to save.
     *             Use in conjunction with `save` or `update`.
     * @property {boolean}  [fallback]     Fallback to the network if the request
     *             failed locally. Use in conjunction with `offline`.
     * @property {Array}    [fields]       Fields to select.
     * @property {boolean}  [fileTls=true] Use the https protocol to communicate
     *             with GCS.
     * @property {integer}  [fileTtl]      A custom expiration time (in seconds).
     * @property {integer}  [maxAge]       Cache maxAge (in seconds).
     * @property {boolean}  [nocache=true] Use cache busting.
     * @property {boolean}  [offline]      Initiate the request locally.
     * @property {boolean}  [refresh]      Persist the response locally.
     * @property {Object}   [relations]    Map of relational fields to collections.
     * @property {boolean}  [skipBL]       Skip Business Logic. Use in conjunction
     *             with Master Secret.
     * @property {function} [success]      Success callback.
     * @property {integer}  [timeout]      The request timeout (ms).
     * @property {boolean}  [trace=false]  Add the request id to the error object
     *             for easy request tracking (in case of contacting support).
     */

    // Define the `Storage` namespace, used to store application state.
    /**
     * @private
     * @namespace Storage
     */
    var Storage = /** @lends Storage */ {
      /**
       * Prepares a deletion from storage.
       *
       * @param {string} key The key.
       * @returns {Promise}
       */
      destroy: function(key) {
        return Storage._destroy(Storage._key(key));
      },

      /**
       * Prepares a retrieval from storage.
       *
       * @param {string} key The key.
       * @returns {Promise}
       */
      get: function(key) {
        return Storage._get(Storage._key(key));
      },

      /**
       * Prepares a save to storage.
       *
       * @param {string} key The key.
       * @param {*} value The value.
       * @returns {Promise}
       */
      save: function(key, value) {
        return Storage._save(Storage._key(key), value);
      },

      /**
       * Deletes a value from storage.
       *
       * @private
       * @abstract
       * @method
       * @param {string} key The key.
       * @returns {Promise}
       */
      _destroy: methodNotImplemented('Storage.destroy'),

      /**
       * Retrieves a value from storage.
       *
       * @private
       * @abstract
       * @method
       * @param {string} key The key.
       * @returns {*} The value.
       * @returns {Promise}
       */
      _get: methodNotImplemented('Storage.get'),

      /**
       * Formats the key.
       *
       * @private
       * @param {string} key The key.
       * @returns {string} The formatted key.
       */
      _key: function(key) {
        // Namespace the key, so it is unique to the Kinvey application.
        return ['Kinvey', Kinvey.appKey, key].join('.');
      },

      /**
       * Saves a value to storage.
       *
       * @private
       * @abstract
       * @method
       * @param {string} key The key.
       * @param {*} value The value.
       */
      _save: methodNotImplemented('Storage.set'),

      /**
       * Sets the implementation of `Storage` to the specified adapter.
       *
       * @method
       * @param {Object} adapter Object implementing the `Storage` interface.
       */
      use: use(['_destroy', '_get', '_save'])
    };


    // Deferreds.
    // ----------

    // The library relies on deferreds for asynchronous communication. The internal
    // implementation is defined by an adapter. Adapters must implement the
    // [Promises/A+ spec](http://promises-aplus.github.io/promises-spec/).

    /**
     * @memberof! <global>
     * @namespace Kinvey.Defer
     */
    Kinvey.Defer = /** @lends Kinvey.Defer */ {
      /**
       * Turns an array of promises into a promise for an array. If any of the
       * promises gets rejected, the whole array is rejected immediately.
       *
       * @param {Promise[]} promises List of promises.
       * @throws {Kinvey.Error} `promises` must be of type: `Array`.
       * @returns {Promise} The promise.
       */
      all: function(promises) {
        var error;

        // Validate arguments.
        if(!isArray(promises)) {
          error = new Kinvey.Error('promises argument must be of type: Array.');
          return Kinvey.Defer.reject(error);
        }

        // If there are no promises, resolve immediately.
        var pending = promises.length;
        if(0 === pending) {
          return Kinvey.Defer.resolve([]);
        }

        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // For every promise, add its value to the response if fulfilled. If all
        // promises are fulfilled, fulfill the array promise. If one of the members
        // fail, reject the array promise immediately.
        var response = [];
        promises.forEach(function(promise, index) {
          promise.then(function(value) {
            // Update counter and append response in-place.
            pending -= 1;
            response[index] = value;

            // If all promises are fulfilled, fulfill the array promise.
            if(0 === pending) {
              deferred.resolve(response);
            }
          }, function(error) { // A member got rejected, reject the whole array.
            deferred.reject(error);
          });
        });

        // Return the promise.
        return deferred.promise;
      },

      /**
       * Fulfills a promise immediately.
       *
       * @param {*} value The fulfillment value.
       * @returns {Promise} The promise.
       */
      resolve: function(value) {
        var deferred = Kinvey.Defer.deferred();
        deferred.resolve(value);
        return deferred.promise;
      },

      /**
       * Rejects a promise immediately.
       *
       * @param {*} reason The rejection reason.
       * @returns {Promise} The promise.
       */
      reject: function(reason) {
        var deferred = Kinvey.Defer.deferred();
        deferred.reject(reason);
        return deferred.promise;
      },

      /**
       * Creates a deferred (pending promise).
       *
       * @abstract
       * @method
       * @returns {Object} The deferred.
       */
      deferred: methodNotImplemented('Kinvey.Defer.deferred'),

      /**
       * Sets the implementation of `Kinvey.Defer` to the specified adapter.
       *
       * @method
       * @param {Object} adapter Object implementing the `Kinvey.Defer` interface.
       */
      use: use(['deferred'])
    };

    // Define the Promise type for documentation purposes.

    /**
     * @typedef {Object} Promise
     * @property {function} then The accessor to the current state or eventual
     *             fulfillment value or rejection reason.
     */


    // Authentication.
    // ---------------

    // Access to the Kinvey service is authenticated through user credentials,
    // Master Secret, or App Secret. A combination of these is often (but not
    // always) accepted. Therefore, an extensive set of all possible combinations
    // is gathered here and presented as authentication policies.

    /**
     * @private
     * @namespace Auth
     */
    var Auth = /** @lends Auth */ {

      // All policies must return a {Promise}. The value of a resolved promise must
      // be an object containing `scheme` and `username` and `password` or
      // `credentials`. The reason of rejection must be a `Kinvey.Error` constant.

      // https://tools.ietf.org/html/rfc2617

      /**
       * Authenticate through (1) user credentials, (2) Master Secret, or (3) App
       * Secret.
       *
       * @returns {Promise}
       */
      All: function() {
        return Auth.Session().then(null, Auth.Basic);
      },

      /**
       * Authenticate through App Secret.
       *
       * @returns {Promise}
       */
      App: function() {
        // Validate preconditions.
        if(null == Kinvey.appKey || null == Kinvey.appSecret) {
          var error = clientError(Kinvey.Error.MISSING_APP_CREDENTIALS);
          return Kinvey.Defer.reject(error);
        }

        // Prepare the response.
        var promise = Kinvey.Defer.resolve({
          scheme: 'Basic',
          username: Kinvey.appKey,
          password: Kinvey.appSecret
        });

        // Debug
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Authenticating through App Secret.', response);
          });
        }

        // Return the response.
        return promise;
      },

      /**
       * Authenticate through (1) Master Secret, or (2) App Secret.
       *
       * @returns {Promise}
       */
      Basic: function() {
        return Auth.Master().then(null, Auth.App);
      },

      /**
       * Authenticate through (1) user credentials, or (2) Master Secret.
       *
       * @returns {Promise}
       */
      Default: function() {
        return Auth.Session().then(null, function(error) {
          return Auth.Master().then(null, function() {
            // Most likely, the developer did not create a user. Return a useful
            // error.
            return Kinvey.Defer.reject(error);
          });
        });
      },

      /**
       * Authenticate through Master Secret.
       *
       * @returns {Promise}
       */
      Master: function() {
        // Validate preconditions.
        if(null == Kinvey.appKey || null == Kinvey.masterSecret) {
          var error = clientError(Kinvey.Error.MISSING_MASTER_CREDENTIALS);
          return Kinvey.Defer.reject(error);
        }

        // Prepare the response.
        var promise = Kinvey.Defer.resolve({
          scheme: 'Basic',
          username: Kinvey.appKey,
          password: Kinvey.masterSecret
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Authenticating through Master Secret.', response);
          });
        }

        // Return the response.
        return promise;
      },

      /**
       * Do not authenticate.
       *
       * @returns {Promise}
       */
      None: function() {
        return Kinvey.Defer.resolve(null);
      },

      /**
       * Authenticate through user credentials.
       *
       * @returns {Promise}
       */
      Session: function() {
        // Validate preconditions.
        var error;
        var user = Kinvey.getActiveUser();

        if(null === user) {
          error = clientError(Kinvey.Error.NO_ACTIVE_USER);
          return Kinvey.Defer.reject(error);
        }

        // Check if user has property _kmd
        if(user._kmd === null || user._kmd === undefined) {
          error = new Kinvey.Error('The active user does not have _kmd defined as a property.' +
            'It is required to authenticate the user. User _id: ' +
            user._id);
          return Kinvey.Defer.reject(error);
        }

        // Prepare the response.
        var promise = Kinvey.Defer.resolve({
          scheme: 'Kinvey',
          credentials: user._kmd.authtoken
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Authenticating through user credentials.', response);
          });
        }

        // Return the response.
        return promise;
      }
    };


    /* globals angular: true, Backbone: true, Ember: true, forge: true, jQuery: true */
    /* globals ko: true, Titanium: true */

    // Device information.
    // -------------------

    // Build the device information string sent along with every network request.
    // <js-library>/<version> [(<library>/<version>,...)] <platform> <version> <manufacturer> <id>
    var deviceInformation = function() {
      var browser, platform, version, manufacturer, id, libraries = [];

      // Helper function to detect the browser name and version.
      var browserDetect = function(ua) {
        // Cast arguments.
        ua = ua.toLowerCase();

        // User-Agent patterns.
        var rChrome = /(chrome)\/([\w]+)/;
        var rFirefox = /(firefox)\/([\w.]+)/;
        var rIE = /(msie) ([\w.]+)/i;
        var rOpera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
        var rSafari = /(safari)\/([\w.]+)/;

        return rChrome.exec(ua) || rFirefox.exec(ua) || rIE.exec(ua) ||
          rOpera.exec(ua) || rSafari.exec(ua) || [];
      };

      // Platforms.
      if('undefined' !== typeof root.cordova &&
        'undefined' !== typeof root.device) { // PhoneGap
        var device = root.device;
        libraries.push('phonegap/' + device.cordova);
        platform = device.platform;
        version = device.version;
        manufacturer = device.model;
        id = device.uuid;
      }
      else if('undefined' !== typeof Titanium) { // Titanium.
        libraries.push('titanium/' + Titanium.getVersion());

        // If mobileweb, extract browser information.
        if('mobileweb' === Titanium.Platform.getName()) {
          browser = browserDetect(Titanium.Platform.getModel());
          platform = browser[1];
          version = browser[2];
          manufacturer = Titanium.Platform.getOstype();
        }
        else {
          platform = Titanium.Platform.getOsname();
          version = Titanium.Platform.getVersion();
          manufacturer = Titanium.Platform.getManufacturer();
        }
        id = Titanium.Platform.getId();
      }
      else if('undefined' !== typeof forge) { // Trigger.io
        libraries.push('triggerio/' + (forge.config.platform_version || ''));
        id = forge.config.uuid;
      }
      else if('undefined' !== typeof process) { // Node.js
        platform = process.title;
        version = process.version;
        manufacturer = process.platform;
      }

      // Libraries.
      if('undefined' !== typeof angular) { // AngularJS.
        libraries.push('angularjs/' + angular.version.full);
      }
      if('undefined' !== typeof Backbone) { // Backbone.js.
        libraries.push('backbonejs/' + Backbone.VERSION);
      }
      if('undefined' !== typeof Ember) { // Ember.js.
        libraries.push('emberjs/' + Ember.VERSION);
      }
      if('undefined' !== typeof jQuery) { // jQuery.
        libraries.push('jquery/' + jQuery.fn.jquery);
      }
      if('undefined' !== typeof ko) { // Knockout.
        libraries.push('knockout/' + ko.version);
      }
      if('undefined' !== typeof Zepto) { // Zepto.js.
        libraries.push('zeptojs');
      }

      // Default platform, most likely this is just a plain web app.
      if(null == platform && root.navigator) {
        browser = browserDetect(root.navigator.userAgent);
        platform = browser[1];
        version = browser[2];
        manufacturer = root.navigator.platform;
      }

      // Return the device information string.
      var parts = ['js-titanium/1.3.1'];
      if(0 !== libraries.length) { // Add external library information.
        parts.push('(' + libraries.sort().join(', ') + ')');
      }
      return parts.concat(
        [
          platform,
          version,
          manufacturer,
          id
        ].map(function(part) {
          return null != part ? part.toString().replace(/\s/g, '_').toLowerCase() : 'unknown';
        })
      ).join(' ');
    };

    // Client App Version
    // ----

    // Set app version for the application.

    var clientAppVersion;

    var parseAppVersion = function() {
      var version = arguments[0];

      // Set app version using specified major, minor, and patch
      // provided as arguments.
      if(arguments.length > 1) {
        // Get individual parts of app version
        var major = arguments[0];
        var minor = arguments[1];
        var patch = arguments[2];

        // Set app version to major value
        version = (major + '').trim();

        // Append minor value if it was provided
        if(minor != null) {
          version += ('.' + minor).trim();
        }

        // Append patch value if it was provided
        if(patch != null) {
          version += ('.' + patch).trim();
        }
      }

      return version;
    };

    var stringifyAppVersion = function(version) {
      if(null == version) {
        return undefined;
      }

      return(version + '').trim();
    };

    var clearClientAppVersion = function() {
      clientAppVersion = undefined;
    };

    /**
     * @memberof! <global>
     * @namespace Kinvey.ClientAppVersion
     */
    Kinvey.ClientAppVersion = /** @lends Kinvey.ClientAppVersion */ {

      /**
       * Returns a string representation of the client app version or
       * `undefined` if one has not been set.
       *
       * @return {?string} A string representation of the client app
       *                   version or `undefined`.
       */
      stringValue: function() {
        return stringifyAppVersion(clientAppVersion);
      },

      /**
       * Sets the client app version for the application.
       */
      setVersion: function() {
        Kinvey.ClientAppVersion.clear();

        // Debug
        if(KINVEY_DEBUG) {
          log('Setting the client app version.', arguments);
        }

        clientAppVersion = parseAppVersion.apply(root, arguments);
      },

      /**
       * Clears the client app version that is set for the application.
       */
      clear: function() {
        // Debug
        if(KINVEY_DEBUG) {
          log('Clearing the client app version.');
        }

        clearClientAppVersion();
      }
    };



    // Custom Request Properties
    // ----

    // Set and get custom request properties for the application.

    var customRequestProperties = {};

    var clearCustomRequestProperty = function(name) {
      if(null != name && customRequestProperties.hasOwnProperty(name)) {
        delete customRequestProperties[name];
      }
    };

    var clearCustomRequestProperties = function() {
      customRequestProperties = {};
    };

    /**
     * @memberof! <global>
     * @namespace Kinvey.CustomRequestProperties
     */
    Kinvey.CustomRequestProperties = /** @lends Kinvey.CustomRequestProperties */ {

      /**
       * Returns the custom request properties that have been set for the application.
       * @return {Object} Custom request properties
       */
      properties: function() {
        // Return a copy and not a reference
        return JSON.parse(JSON.stringify(customRequestProperties));
      },

      /**
       * Returns the custom request property for the name or `undefined` if
       * it has not been set.
       *
       * @param  {string} name Custom request property name
       * @return {*}           Custom request property value
       */
      property: function(name) {
        if(null != name && customRequestProperties.hasOwnProperty(name)) {
          return customRequestProperties[name];
        }

        return undefined;
      },

      /**
       * Clears all custom request properties that were previously set
       * for the application. Then sets the provided properties
       * for the application.
       *
       * @param {Object} properties Custom request properties
       */
      setProperties: function(properties) {
        Kinvey.CustomRequestProperties.clear();
        Kinvey.CustomRequestProperties.addProperties(properties);
      },

      /**
       * Sets the custom request property for the name and value.
       *
       * @param {string} name  Custom request property name
       * @param {*}      value Custom request property value
       */
      setProperty: function(name, value) {
        var properties = {};
        properties[name] = value;
        Kinvey.CustomRequestProperties.addProperties(properties);
      },

      /**
       * Adds to the properties to the exisiting custom request properties
       * replacing any that already existed.
       *
       * @param {Object} properties Custom request properties
       */
      addProperties: function(properties) {
        if(properties != null) {
          Object.keys(properties).forEach(function(name) {
            var value = properties[name];

            // Debug
            if(KINVEY_DEBUG) {
              log('Adding custom request property ' + name + ' as ' + value + '.');
            }

            customRequestProperties[name] = value;
          });
        }
      },

      /**
       * Clears all the custom request properties.
       */
      clear: function() {
        // Debug
        if(KINVEY_DEBUG) {
          log('Clearing the custom request properties.');
        }

        clearCustomRequestProperties();
      },

      /**
       * Clears one custom request property.
       *
       * @param  {string} name Custom request property name
       */
      clearProperty: function(name) {
        // Debug
        if(KINVEY_DEBUG) {
          log('Clearing the custom request property ' + name + '.');
        }

        clearCustomRequestProperty(name);
      }
    };


    // ACL.
    // ----

    // Wrapper for setting permissions on document-level (i.e. entities and users).

    /**
     * The Kinvey.Acl class.
     *
     * @memberof! <global>
     * @class Kinvey.Acl
     * @param {Object} [document] The document.
     * @throws {Kinvey.Error} `document` must be of type: `Object`.
     */
    Kinvey.Acl = function(document) {
      // Validate arguments.
      if(null != document && !isObject(document)) {
        throw new Kinvey.Error('document argument must be of type: Object.');
      }

      // Cast arguments.
      document = document || {};
      document._acl = document._acl || {};

      /**
       * The ACL.
       *
       * @private
       * @type {Object}
       */
      this._acl = document._acl;
    };

    // Define the ACL methods.
    Kinvey.Acl.prototype = /** @lends Kinvey.Acl# */ {
      /**
       * Adds a user to the list of users that are explicitly allowed to read the
       * entity.
       *
       * @param {string} user The user id.
       * @returns {Kinvey.Acl} The ACL.
       */
      addReader: function(user) {
        this._acl.r = this._acl.r || [];
        if(-1 === this._acl.r.indexOf(user)) {
          this._acl.r.push(user);
        }
        return this;
      },

      /**
       * Adds a user group to the list of user groups that are explicitly allowed
       * to read the entity.
       *
       * @param {string} group The group id.
       * @returns {Kinvey.Acl} The ACL.
       */
      addReaderGroup: function(group) {
        this._acl.groups = this._acl.groups || {};
        this._acl.groups.r = this._acl.groups.r || [];
        if(-1 === this._acl.groups.r.indexOf(group)) {
          this._acl.groups.r.push(group);
        }
        return this;
      },

      /**
       * Adds a user group to the list of user groups that are explicitly allowed
       * to modify the entity.
       *
       * @param {string} group The group id.
       * @returns {Kinvey.Acl} The ACL.
       */
      addWriterGroup: function(group) {
        this._acl.groups = this._acl.groups || {};
        this._acl.groups.w = this._acl.groups.w || [];
        if(-1 === this._acl.groups.w.indexOf(group)) {
          this._acl.groups.w.push(group);
        }
        return this;
      },

      /**
       * Adds a user to the list of users that are explicitly allowed to modify the
       * entity.
       *
       * @param {string} user The user id.
       * @returns {Kinvey.Acl} The ACL.
       */
      addWriter: function(user) {
        this._acl.w = this._acl.w || [];
        if(-1 === this._acl.w.indexOf(user)) {
          this._acl.w.push(user);
        }
        return this;
      },

      /**
       * Returns the user id of the user that originally created the entity.
       *
       * @returns {?string} The user id, or `null` if not set.
       */
      getCreator: function() {
        return this._acl.creator || null;
      },

      /**
       * Returns the list of users that are explicitly allowed to read the entity.
       *
       * @returns {Array} The list of users.
       */
      getReaders: function() {
        return this._acl.r || [];
      },

      /**
       * Returns the list of user groups that are explicitly allowed to read the
       * entity.
       *
       * @returns {Array} The list of user groups.
       */
      getReaderGroups: function() {
        return this._acl.groups ? this._acl.groups.r : [];
      },

      /**
       * Returns the list of user groups that are explicitly allowed to read the
       * entity.
       *
       * @returns {Array} The list of user groups.
       */
      getWriterGroups: function() {
        return this._acl.groups ? this._acl.groups.w : [];
      },

      /**
       * Returns the list of users that are explicitly allowed to modify the
       * entity.
       *
       * @returns {Array} The list of users.
       */
      getWriters: function() {
        return this._acl.w || [];
      },

      /**
       * Returns whether the entity is globally readable.
       *
       * @returns {boolean}
       */
      isGloballyReadable: function() {
        return this._acl.gr || false;
      },

      /**
       * Returns whether the entity is globally writable.
       *
       * @returns {boolean}
       */
      isGloballyWritable: function() {
        return this._acl.gw || false;
      },

      /**
       * Removes a user from the list of users that are explicitly allowed to read
       * the entity.
       *
       * @param {string} user The user id.
       * @returns {Kinvey.Acl} The ACL.
       */
      removeReader: function(user) {
        var pos;
        if(this._acl.r && -1 !== (pos = this._acl.r.indexOf(user))) {
          this._acl.r.splice(pos, 1);
        }
        return this;
      },

      /**
       * Removes a user group from the list of user groups that are explicitly
       * allowed to read the entity.
       *
       * @param {string} group The group id.
       * @returns {Kinvey.Acl} The ACL.
       */
      removeReaderGroup: function(group) {
        var pos;
        if(this._acl.groups && this._acl.groups.r && -1 !== (pos = this._acl.groups.r.indexOf(group))) {
          this._acl.groups.r.splice(pos, 1);
        }
        return this;
      },

      /**
       * Removes a user group from the list of user groups that are explicitly
       * allowed to modify the entity.
       *
       * @param {string} group The group id.
       * @returns {Kinvey.Acl} The ACL.
       */
      removeWriterGroup: function(group) {
        var pos;
        if(this._acl.groups && this._acl.groups.w && -1 !== (pos = this._acl.groups.w.indexOf(group))) {
          this._acl.groups.w.splice(pos, 1);
        }
        return this;
      },

      /**
       * Removes a user from the list of users that are explicitly allowed to
       * modify the entity.
       *
       * @param {string} user The user id.
       * @returns {Kinvey.Acl} The ACL.
       */
      removeWriter: function(user) {
        var pos;
        if(this._acl.w && -1 !== (pos = this._acl.w.indexOf(user))) {
          this._acl.w.splice(pos, 1);
        }
        return this;
      },

      /**
       * Specifies whether the entity is globally readable.
       *
       * @param {boolean} [gr=true] Make the entity globally readable.
       * @returns {Kinvey.Acl} The ACL.
       */
      setGloballyReadable: function(gr) {
        this._acl.gr = gr || false;
        return this;
      },

      /**
       * Specifies whether the entity is globally writable.
       *
       * @param {boolean} [gw=true] Make the entity globally writable.
       * @returns {Kinvey.Acl}
       */
      setGloballyWritable: function(gw) {
        this._acl.gw = gw || false;
        return this;
      },

      /**
       * Returns JSON representation of the document ACL.
       *
       * @returns {Object} The document ACL.
       */
      toJSON: function() {
        return this._acl;
      }
    };

    // Aggregation.
    // ------------

    // The `Kinvey.Group` class provides an easy way to build aggregations, which
    // can then be passed to one of the REST API wrappers to group application
    // data. Internally, the class builds a MongoDB aggregation.

    /**
     * The `Kinvey.Group` class.
     *
     * @memberof! <global>
     * @class Kinvey.Group
     */
    Kinvey.Group = function() {
      /**
       * The query applied to the result set.
       *
       * @private
       * @type {?Kinvey.Query}
       */
      this._query = null;

      /**
       * The initial structure of the document to be returned.
       *
       * @private
       * @type {Object}
       */
      this._initial = {};

      /**
       * The fields to group by.
       *
       * @private
       * @type {Object}
       */
      this._key = {};

      /**
       * The MapReduce function.
       *
       * @private
       * @type {string}
       */
      this._reduce = function() {}.toString();
    };

    // Define the aggregation methods.
    Kinvey.Group.prototype = /** @lends Kinvey.Group# */ {
      /**
       * Sets the field to group by.
       *
       * @param {string} field The field.
       * @returns {Kinvey.Group} The aggregation.
       */
      by: function(field) {
        this._key[field] = true;
        return this;
      },

      /**
       * Sets the initial structure of the document to be returned.
       *
       * @param {Object|string} objectOrKey The initial structure, or key to set.
       * @param {*} value [value] The value of `key`.
       * @throws {Kinvey.Error} `object` must be of type: `Object`.
       * @returns {Kinvey.Group} The aggregation.
       */
      initial: function(objectOrKey, value) {
        // Validate arguments.
        if('undefined' === typeof value && !isObject(objectOrKey)) {
          throw new Kinvey.Error('objectOrKey argument must be of type: Object.');
        }

        // Set or append the initial structure.
        if(isObject(objectOrKey)) {
          this._initial = objectOrKey;
        }
        else {
          this._initial[objectOrKey] = value;
        }
        return this;
      },

      /**
       * Post processes the raw response by applying sort, limit, and skip. These
       * modifiers are provided through the aggregation query.
       *
       * @param {Array} response The raw response.
       * @throws {Kinvey.Error} `response` must be of type: `Array`.
       * @returns {Array} The processed response.
       */
      postProcess: function(response) {
        // If there is a query, process it.
        if(null === this._query) {
          return response;
        }
        return this._query._postProcess(response);
      },

      /**
       * Sets the query to apply to the result set.
       *
       * @param {Kinvey.Query} query The query.
       * @throws {Kinvey.Error} `query` must be of type: `Kinvey.Query`.
       * @returns {Kinvey.Group} The aggregation.
       */
      query: function(query) {
        // Validate arguments.
        if(!(query instanceof Kinvey.Query)) {
          throw new Kinvey.Error('query argument must be of type: Kinvey.Query.');
        }

        this._query = query;
        return this;
      },

      /**
       * Sets the MapReduce function.
       *
       * @param {function|string} fn The function.
       * @throws {Kinvey.Error} `fn` must be of type: `function` or `string`.
       * @returns {Kinvey.Group} The aggregation.
       */
      reduce: function(fn) {
        // Cast arguments.
        if(isFunction(fn)) {
          fn = fn.toString();
        }

        // Validate arguments.
        if(!isString(fn)) {
          throw new Kinvey.Error('fn argument must be of type: function or string.');
        }

        this._reduce = fn;
        return this;
      },

      /**
       * Returns JSON representation of the aggregation.
       *
       * @returns {Object} JSON object-literal.
       */
      toJSON: function() {
        return {
          key: this._key,
          initial: this._initial,
          reduce: this._reduce,
          condition: null !== this._query ? this._query.toJSON().filter : {}
        };
      }
    };

    // Pre-define a number of reduce functions. All return a preseeded
    // `Kinvey.Group`.

    /**
     * Counts all elements in the group.
     *
     * @memberof Kinvey.Group
     * @param {string} [field] The field, or `null` to perform a global count.
     * @returns {Kinvey.Group} The aggregation.
     */
    Kinvey.Group.count = function(field) {
      // Return the aggregation.
      var agg = new Kinvey.Group();

      // If a field was specified, count per field.
      if(null != field) {
        agg.by(field);
      }

      agg.initial({
        result: 0
      });
      agg.reduce(function(doc, out) {
        out.result += 1;
      });
      return agg;
    };

    /**
     * Sums together the numeric values for the specified field.
     *
     * @memberof Kinvey.Group
     * @param {string} field The field.
     * @returns {Kinvey.Group} The aggregation.
     */
    Kinvey.Group.sum = function(field) {
      // Escape arguments.
      field = field.replace('\'', '\\\'');

      // Return the aggregation.
      var agg = new Kinvey.Group();
      agg.initial({
        result: 0
      });
      agg.reduce('function(doc, out) { out.result += doc["' + field + '"]; }');
      return agg;
    };

    /**
     * Finds the minimum of the numeric values for the specified field.
     *
     * @memberof Kinvey.Group
     * @param {string} field The field.
     * @returns {Kinvey.Group} The aggregation.
     */
    Kinvey.Group.min = function(field) {
      // Escape arguments.
      field = field.replace('\'', '\\\'');

      // Return the aggregation.
      var agg = new Kinvey.Group();
      agg.initial({
        result: 'Infinity'
      });
      agg.reduce('function(doc, out) { out.result = Math.min(out.result, doc["' + field + '"]); }');
      return agg;
    };

    /**
     * Finds the maximum of the numeric values for the specified field.
     *
     * @memberof Kinvey.Group
     * @param {string} field The field.
     * @returns {Kinvey.Group} The aggregation.
     */
    Kinvey.Group.max = function(field) {
      // Escape arguments.
      field = field.replace('\'', '\\\'');

      // Return the aggregation.
      var agg = new Kinvey.Group();
      agg.initial({
        result: '-Infinity'
      });
      agg.reduce('function(doc, out) { out.result = Math.max(out.result, doc["' + field + '"]); }');
      return agg;
    };

    /**
     * Finds the average of the numeric values for the specified field.
     *
     * @memberof Kinvey.Group
     * @param {string} field The field.
     * @returns {Kinvey.Group} The aggregation.
     */
    Kinvey.Group.average = function(field) {
      // Escape arguments.
      field = field.replace('\'', '\\\'');

      // Return the aggregation.
      var agg = new Kinvey.Group();
      agg.initial({
        count: 0,
        result: 0
      });
      agg.reduce(
        'function(doc, out) {' +
        '  out.result = (out.result * out.count + doc["' + field + '"]) / (out.count + 1);' +
        '  out.count += 1;' +
        '}'
      );
      return agg;
    };


    // Custom Endpoints.
    // -----------------

    /**
     * Executes a custom command.
     *
     * @param {string} id The endpoint.
     * @param {Object} [args] Command arguments.
     * @param {Options} [options] Options.
     * @returns {Promise} The response.
     */
    Kinvey.execute = function(id, args, options) {
      // Debug.
      if(KINVEY_DEBUG) {
        log('Executing custom command.', arguments);
      }

      // Cast arguments.
      options = options || {};

      // Prepare the response.
      var promise = Kinvey.Persistence.create({
        namespace: RPC,
        collection: 'custom',
        id: id,
        data: args,
        auth: Auth.Default
      }, options).then(null, function(error) {
        // If `REQUEST_ERROR`, the debug object may hold an actual custom response.
        if(Kinvey.Error.REQUEST_ERROR === error.name && isObject(error.debug)) {
          return Kinvey.Defer.reject(error.debug);
        }
        return Kinvey.Defer.reject(error);
      });

      // Debug.
      if(KINVEY_DEBUG) {
        promise.then(function(response) {
          log('Executed the custom command.', response);
        }, function(error) {
          log('Failed to execute the custom command.', error);
        });
      }

      // Return the response.
      return wrapCallbacks(promise, options);
    };

    // Data Store.
    // -----------

    // REST API wrapper for data storage.

    /**
     * @memberof! <global>
     * @namespace Kinvey.DataStore
     */
    Kinvey.DataStore = /** @lends Kinvey.DataStore */ {
      /**
       * Retrieves all documents matching the provided query.
       *
       * @param {string} collection Collection.
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} [options] Options.
       * @returns {Promise} A list of documents.
       */
      find: function(collection, query, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Retrieving documents by query.', arguments);
        }

        // Validate arguments.
        if(null != query && !(query instanceof Kinvey.Query)) {
          error = new Kinvey.Error('query argument must be of type: Kinvey.Query.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: DATA_STORE,
          collection: collection,
          query: query,
          auth: Auth.Default,
          local: {
            req: true,
            res: true
          }
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Retrieved the documents by query.', response);
          }, function(error) {
            log('Failed to retrieve the documents by query.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Retrieves a document.
       *
       * @param {string} collection Collection.
       * @param {string} id Document id.
       * @param {Options} [options] Options.
       * @returns {Promise} The document.
       */
      get: function(collection, id, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Retrieving a document.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: DATA_STORE,
          collection: collection,
          id: id,
          auth: Auth.Default,
          local: {
            req: true,
            res: true
          }
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Retrieved the document.', response);
          }, function(error) {
            log('Failed to retrieve the document.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Saves a (new) document.
       *
       * @param {string} collection Collection.
       * @param {Object} document Document.
       * @param {Options} [options] Options.
       * @returns {Promise} The new document.
       */
      save: function(collection, document, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Saving a (new) document.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // If the document has an `_id`, perform an update instead.
        if(null != document._id) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('The document has an _id, updating instead.', arguments);
          }

          return Kinvey.DataStore.update(collection, document, options);
        }

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: DATA_STORE,
          collection: collection,
          data: document,
          auth: Auth.Default,
          local: {
            req: true,
            res: true
          }
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Saved the new document.', response);
          }, function(error) {
            log('Failed to save the new document.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Updates an existing document. If the document does not exist, however, it
       * is created.
       *
       * @param {string} collection Collection.
       * @param {Object} document Document.
       * @param {Options} [options] Options.
       * @returns {Promise} The (new) document.
       */
      update: function(collection, document, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Updating a document.', arguments);
        }

        // Validate arguments.
        if(null == document._id) {
          error = new Kinvey.Error('document argument must contain: _id');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.update({
          namespace: DATA_STORE,
          collection: collection,
          id: document._id,
          data: document,
          auth: Auth.Default,
          local: {
            req: true,
            res: true
          }
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Updated the document.', response);
          }, function(error) {
            log('Failed to update the document.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Deletes all documents matching the provided query.
       *
       * @param {string} collection Collection.
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} [options] Options.
       * @throws {Kinvey.Error} `query` must be of type: `Kinvey.Query`.
       * @returns {Promise} The response.
       */
      clean: function(collection, query, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Deleting documents by query.', arguments);
        }

        // Cast and validate arguments.
        options = options || {};
        query = query || new Kinvey.Query();
        if(!(query instanceof Kinvey.Query)) {
          error = new Kinvey.Error('query argument must be of type: Kinvey.Query.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Prepare the response.
        var promise = Kinvey.Persistence.destroy({
          namespace: DATA_STORE,
          collection: collection,
          query: query,
          auth: Auth.Default,
          local: {
            req: true,
            res: true
          }
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Deleted the documents.', response);
          }, function(error) {
            log('Failed to delete the documents.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Deletes a document.
       *
       * @param {string} collection Collection.
       * @param {string} id Document id.
       * @param {Options} [options] Options.
       * @param {boolean} [options.silent=false] Succeed if the document did not
       *          exist prior to deleting.
       * @returns {Promise} The response.
       */
      destroy: function(collection, id, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Deleting a document.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.destroy({
          namespace: DATA_STORE,
          collection: collection,
          id: id,
          auth: Auth.Default,
          local: {
            req: true,
            res: true
          }
        }, options).then(null, function(error) {
          // If `options.silent`, treat `ENTITY_NOT_FOUND` as success.
          if(options.silent && Kinvey.Error.ENTITY_NOT_FOUND === error.name) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('The document does not exist. Returning success because of the silent flag.');
            }

            return {
              count: 0
            }; // The response.
          }
          return Kinvey.Defer.reject(error);
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Deleted the document.', response);
          }, function(error) {
            log('Failed to delete the document.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Performs a count operation.
       *
       * @param {string} collection The collection.
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      count: function(collection, query, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Counting the number of documents.', arguments);
        }

        // Validate arguments.
        if(null != query && !(query instanceof Kinvey.Query)) {
          error = new Kinvey.Error('query argument must be of type: Kinvey.Query.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: DATA_STORE,
          collection: collection,
          id: '_count',
          query: query,
          auth: Auth.Default,
          local: {
            req: true
          }
        }, options).then(function(response) {
          return response.count;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Counted the number of documents.', response);
          }, function(error) {
            log('Failed to count the number of documents.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Performs a group operation.
       *
       * @param {string} collection The collection.
       * @param {Kinvey.Aggregation} aggregation The aggregation.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      group: function(collection, aggregation, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Grouping documents', arguments);
        }

        // Validate arguments.
        if(!(aggregation instanceof Kinvey.Group)) {
          error = new Kinvey.Error('aggregation argument must be of type: Kinvey.Group.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: DATA_STORE,
          collection: collection,
          id: '_group',
          data: aggregation.toJSON(),
          auth: Auth.Default,
          local: {
            req: true
          }
        }, options).then(function(response) {
          // Process the raw response.
          return aggregation.postProcess(response);
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Grouped the documents.', response);
          }, function(error) {
            log('Failed to group the documents.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      }
    };


    /* jshint sub: true */

    // Files.
    // ------

    // REST API wrapper for files.

    /**
     * @memberof! <global>
     * @namespace Kinvey.File
     */
    Kinvey.File = /** @lends Kinvey.File */ {
      /**
       * Deletes a file.
       *
       * @param {string} name Name.
       * @param {Options} [options] Options.
       * @param {boolean} [options.silent=false] Succeed if the file did not exist
       *          prior to deleting.
       * @returns {Promise} The response.
       */
      destroy: function(id, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Deleting a file.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.destroy({
          namespace: FILES,
          id: id,
          auth: Auth.Default
        }, options).then(null, function(error) {
          // If `options.silent`, treat `BLOB_NOT_FOUND` as success.
          if(options.silent && Kinvey.Error.BLOB_NOT_FOUND === error.name) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('The file does not exist. Returning success because of the silent flag.');
            }

            // Return the response.
            return {
              count: 0
            };
          }
          return Kinvey.Defer.reject(error);
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Deleted the file.', response);
          }, function(error) {
            log('Failed to delete the file.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Downloads a file.
       *
       * @param {string} id File id.
       * @param {Options} [options] Options.
       * @param {boolean} [options.stream=false] Stream instead of download.
       * @param {boolean} [options.tls=true] Use the https protocol to communicate
       *          with GCS.
       * @param {integer} [options.ttl] A custom expiration time (in seconds).
       * @returns {Promise} The file metadata if `options.stream`, a file resource
       *            otherwise.
       */
      download: function(id, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Downloading a file.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Build the flags.
        var flags = {};
        if(false !== options.tls) {
          flags.tls = true;
        }
        if(options.ttl) {
          flags.ttl_in_seconds = options.ttl;
        }

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: FILES,
          id: id,
          flags: flags,
          auth: Auth.Default
        }, options).then(function(response) {
          // If `options.stream`, return the file metadata instead of the resource.
          if(options.stream) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('Returning the file metadata only because of the stream flag.');
            }
            return response;
          }

          // Temporarily reset some options to avoid invoking the callbacks
          // multiple times.
          var success = options.success;
          var error = options.error;
          delete options.success;
          delete options.error;

          // Download the actual file, and return the composite response.
          return Kinvey.File.downloadByUrl(response, options).then(function(response) {
            // Restore the options and return the response.
            options.success = success;
            options.error = error;
            return response;
          }, function(reason) {
            // Restore the options and return the error.
            options.success = success;
            options.error = error;
            return Kinvey.Defer.reject(reason);
          });
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Downloaded the file.', response);
          }, function(error) {
            log('Failed to download the file.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Downloads a file given its URL or metadata object.
       *
       * @param {Object|string} metadataOrUrl File download URL, or metadata.
       * @param {Options} [options]           Options.
       * @param {Object}  [options.headers]   Any request headers to send to GCS.
       * @returns {Promise} The file metadata and resource.
       */
      downloadByUrl: function(metadataOrUrl, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Downloading a file by URL.', arguments);
        }

        // Cast arguments.
        var metadata = isObject(metadataOrUrl) ? metadataOrUrl : {
          _downloadURL: metadataOrUrl
        };
        options = options || {};
        options.file = metadata.mimeType || 'application-octet-stream';
        options.headers = options.headers || {};
        delete options.headers['Content-Type'];

        // Download the file, and return a composite response.
        var url = metadata._downloadURL;
        var download = Kinvey.Persistence.Net.request('GET', url, null, options.headers, options);
        download = download.then(function(data) {
          metadata._data = data; // Merge into the file metadata.
          return metadata;
        }, function(reason) {
          // Since the error originates from a different host, convert it into a
          // `BLOB_NOT_FOUND` client-side error.
          var error = clientError(Kinvey.Error.REQUEST_ERROR, {
            description: 'This file could not be downloaded from the provided URL.',
            debug: reason
          });
          return Kinvey.Defer.reject(error);
        });

        // Debug.
        if(KINVEY_DEBUG) {
          download.then(function(response) {
            log('Downloaded the file by URL.', response);
          }, function(error) {
            log('Failed to download a file by URL.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(download, options);
      },

      /**
       * Retrieves all files matching the provided query.
       *
       * @param {Kinvey.Query} [query] The query.
       * @param {Object} [options] Options.
       * @param {boolean} [options.download] Download the actual file resources.
       * @param {boolean} [options.tls=true] Use the https protocol to communicate
       *          with GCS.
       * @param {integer} [options.ttl] A custom expiration time.
       * @returns {Promise} A list of files.
       */
      find: function(query, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Retrieving files by query.', arguments);
        }

        // Validate arguments.
        if(null != query && !(query instanceof Kinvey.Query)) {
          error = new Kinvey.Error('query argument must be of type: Kinvey.Query.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Build the flags.
        var flags = {};
        if(false !== options.tls) {
          flags.tls = true;
        }
        if(options.ttl) {
          flags.ttl_in_seconds = options.ttl;
        }

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: FILES,
          query: query,
          flags: flags,
          auth: Auth.Default
        }, options).then(function(response) {
          // If `options.download`, download the file resources.
          if(options.download) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('Obtaining the file resources.', response);
            }

            // Temporarily reset some options to avoid invoking the callbacks
            // multiple times.
            var success = options.success;
            var error = options.error;
            delete options.success;
            delete options.error;

            // Download the actual files in parallel, and return the composite
            // response.
            var promises = response.map(function(file) {
              return Kinvey.File.downloadByUrl(file, options);
            });
            return Kinvey.Defer.all(promises).then(function(response) {
              // Restore the options and return the response.
              options.success = success;
              options.error = error;
              return response;
            }, function(reason) {
              // Restore the options and return the error.
              options.success = success;
              options.error = error;
              return Kinvey.Defer.reject(reason);
            });
          }
          return response;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Retrieved the files by query.', response);
          }, function(error) {
            log('Failed to retrieve the files by query.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Streams a file.
       *
       * @param {string} name Name.
       * @param {Options} [options] Options.
       * @param {boolean} [options.tls=true] Use the https protocol to communicate
       *          with GCS.
       * @param {integer} [options.ttl] A custom expiration time.
       * @returns {Promise} The download URI.
       */
      stream: function(name, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Streaming a file.', arguments);
        }

        // Forward to `Kinvey.File.download`, with the `stream` flag set.
        options = options || {};
        options.stream = true;
        return Kinvey.File.download(name, options);
      },

      /**
       * Uploads a file.
       *
       * @param {*}       file               The file.
       * @param {Object}  [data]             The filesâ€™ metadata.
       * @param {Options} [options]          Options.
       * @param {boolean} [options.public]   Mark the file publicly-readable.
       * @param {boolean} [options.tls=true] Use the https protocol to communicate
       *          with GCS.
       * @returns {Promise} The response.
       */
      upload: function(file, data, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Uploading a file.', arguments);
        }

        // Cast arguments.
        file = file || {};
        data = data || {};
        options = options || {};

        // Attempt to extract metadata from the file resource.
        if(null == data._filename && (null != file._filename || null != file.name)) {
          data._filename = file._filename || file.name;
        }
        if(null == data.size && (null != file.size || null != file.length)) {
          data.size = file.size || file.length;
        }
        data.mimeType = data.mimeType || file.mimeType || file.type || 'application/octet-stream';

        // Apply options.
        if(options['public']) {
          data._public = true;
        }
        options.contentType = data.mimeType;

        // Prepare the response.
        var promise = null != data._id ? Kinvey.Persistence.update({
          namespace: FILES,
          id: data._id,
          data: data,
          flags: false !== options.tls ? {
            tls: true
          } : null,
          auth: Auth.Default
        }, options) : Kinvey.Persistence.create({
          namespace: FILES,
          data: data,
          flags: false !== options.tls ? {
            tls: true
          } : null,
          auth: Auth.Default
        }, options);

        // Prepare the actual file upload.
        promise = promise.then(function(response) {
          var url = response._uploadURL;
          var headers = response._requiredHeaders || {};
          headers['Content-Type'] = options.contentType;

          // Delete fields from the response.
          delete response._expiresAt;
          delete response._requiredHeaders;
          delete response._uploadURL;

          // Upload the file, and return a composite response.
          var upload = Kinvey.Persistence.Net.request('PUT', url, file, headers, options);
          return upload.then(function() {
            response._data = file; // Merge into the file metadata.
            return response;
          });
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Uploaded the file.', response);
          }, function(error) {
            log('Failed to upload the file.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      }
    };


    // Metadata.
    // ---------

    // Patch JavaScript implementations lacking ISO-8601 date support.
    // http://jsfiddle.net/mplungjan/QkasD/
    var fromISO = function(dateString) {
      var date = Date.parse(dateString);
      if(date) {
        return new Date(date);
      }

      // Patch here.
      var regex = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/;
      var match = dateString.match(regex);
      if(null != match[1]) {
        var day = match[1].split(/\D/).map(function(segment) {
          return root.parseInt(segment, 10) || 0;
        });
        day[1] -= 1; // Months range 0â€“11.
        day = new Date(Date.UTC.apply(Date, day));

        // Adjust for timezone.
        if(null != match[5]) {
          var timezone = root.parseInt(match[5], 10) / 100 * 60;
          timezone += (null != match[6] ? root.parseInt(match[6], 10) : 0);
          timezone *= ('+' === match[4]) ? -1 : 1;
          if(timezone) {
            day.setUTCMinutes(day.getUTCMinutes() * timezone);
          }
        }
        return day;
      }
      return NaN; // Invalid.
    };

    // Wrapper for accessing the `_acl` and `_kmd` properties of a document
    // (i.e. entity and users).

    /**
     * The Kinvey.Metadata class.
     *
     * @memberof! <global>
     * @class Kinvey.Metadata
     * @param {Object} document The document.
     * @throws {Kinvey.Error} `document` must be of type: `Object`.
     */
    Kinvey.Metadata = function(document) {
      // Validate arguments.
      if(!isObject(document)) {
        throw new Kinvey.Error('document argument must be of type: Object.');
      }

      /**
       * The ACL.
       *
       * @private
       * @type {Kinvey.Acl}
       */
      this._acl = null;

      /**
       * The document.
       *
       * @private
       * @type {Object}
       */
      this._document = document;
    };

    // Define the Metadata methods.
    Kinvey.Metadata.prototype = /** @lends Kinvey.Metadata# */ {
      /**
       * Returns the document ACL.
       *
       * @returns {Kinvey.Acl} The ACL.
       */
      getAcl: function() {
        if(null === this._acl) {
          this._acl = new Kinvey.Acl(this._document);
        }
        return this._acl;
      },

      /**
       * Returns the date when the entity was created.
       *
       * @returns {?Date} Created at date, or `null` if not set.
       */
      getCreatedAt: function() {
        if(null != this._document._kmd && null != this._document._kmd.ect) {
          return fromISO(this._document._kmd.ect);
        }
        return null;
      },

      /**
       * Returns the email verification status.
       *
       * @returns {?Object} The email verification status, or `null` if not set.
       */
      getEmailVerification: function() {
        if(null != this._document._kmd && null != this._document._kmd.emailVerification) {
          return this._document._kmd.emailVerification.status;
        }
        return null;
      },

      /**
       * Returns the date when the entity was last modified.
       *
       * @returns {?Date} Last modified date, or `null` if not set.
       */
      getLastModified: function() {
        if(null != this._document._kmd && null != this._document._kmd.lmt) {
          return fromISO(this._document._kmd.lmt);
        }
        return null;
      },

      /**
       * Sets the document ACL.
       *
       * @param {Kinvey.Acl} acl The ACL.
       * @throws {Kinvey.Error} `acl` must be of type: `Kinvey.Acl`.
       * @returns {Kinvey.Metadata} The metadata.
       */
      setAcl: function(acl) {
        // Validate arguments.
        if(!(acl instanceof Kinvey.Acl)) {
          throw new Kinvey.Error('acl argument must be of type: Kinvey.Acl.');
        }

        this._acl = null; // Reset.
        this._document._acl = acl.toJSON();
        return this;
      },

      /**
       * Returns JSON representation of the document.
       *
       * @returns {Object} The document.
       */
      toJSON: function() {
        return this._document;
      }
    };

    // Social Identities.
    // ------------------

    // An app can remove friction by not requiring users to create special
    // usernames and passwords just for the app. Instead, the app can offer options
    // for users to login using social identities. The flow of obtaining the tokens
    // from the social party is defined below.

    // List of supported providers.
    var supportedProviders = ['facebook', 'google', 'linkedIn', 'twitter'];

    /**
     * @private
     * @namespace
     */
    var Social = {
      /**
       * Sets the implementation of `Kinvey.Social` to the specified adapter.
       *
       * @method
       * @param {Object} adapter Object implementing the `Kinvey.Social`
       *          interface.
       */
      use: use(supportedProviders)
    };

    // Add stubs for the provider methods.
    supportedProviders.forEach(function(provider) {
      Social[provider] = methodNotImplemented('Social.' + provider);
    });

    /**
     * @memberof! <global>
     * @namespace Kinvey.Social
     */
    Kinvey.Social = /** @lends Kinvey.Social */ {
      /**
       * Links a social identity to the provided (if any) Kinvey user.
       *
       * @param {Object} [user] The associated user.
       * @param {string} provider The provider.
       * @param {Options} [options] Options.
       * @param {boolean} [options.create=true] Create a new user if no user with
       *          the provided social identity exists.
       * @returns {Promise} The user.
       */
      connect: function(user, provider, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Linking a social identity to a Kinvey user.', arguments);
        }

        // Cast and validate arguments.
        options = options || {};
        options.create = 'undefined' !== typeof options.create ? options.create : true;
        if(!Kinvey.Social.isSupported(provider)) {
          error = new Kinvey.Error('provider argument is not supported.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Remove callbacks from `options` to avoid multiple calls.
        var success = options.success;
        error = options.error;
        delete options.success;
        delete options.error;

        // Obtain the OAuth tokens for the specified provider.
        var promise = Social[provider](options).then(function(tokens) {
          // Update the user data.
          user = user || {};

          // If the user is the active user, forward to `Kinvey.User.update`.
          var activeUser = Kinvey.getActiveUser();
          user._socialIdentity = user._socialIdentity || {};
          user._socialIdentity[provider] = tokens;

          if(null !== activeUser) {
            // Check activeUser for property _id. Thrown error will reject promise.
            if(activeUser._id == null) {
              error = new Kinvey.Error('Active user does not have _id property defined.');
              throw error;
            }

            if(activeUser._id === user._id) {
              options._provider = provider; // Force tokens to be updated.
              return Kinvey.User.update(user, options);
            }
          }

          // Attempt logging in with the tokens.
          user._socialIdentity = {};
          user._socialIdentity[provider] = tokens;
          return Kinvey.User.login(user, null, options).then(null, function(error) {
            // If `options.create`, attempt to signup as a new user if no user with
            // the identity exists.
            if(options.create && Kinvey.Error.USER_NOT_FOUND === error.name) {
              return Kinvey.User.signup(user, options);
            }
            return Kinvey.Defer.reject(error);
          });
        });

        // Restore the options.
        promise = promise.then(function(response) {
          options.success = success;
          options.error = error;
          return response;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Linked the social identity to the Kinvey user.', response);
          }, function(error) {
            log('Failed to link a social identity to a Kinvey user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Removes a social identity from the provided Kinvey user.
       *
       * @param {Object} [user] The user.
       * @param {string} provider The provider.
       * @param {Options} [options] Options.
       * @returns {Promise} The user.
       */
      disconnect: function(user, provider, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Unlinking a social identity from a Kinvey user.', arguments);
        }

        // Cast and validate arguments.
        if(!Kinvey.Social.isSupported(provider)) {
          error = new Kinvey.Error('provider argument is not supported.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Update the user data.
        user._socialIdentity = user._socialIdentity || {};
        user._socialIdentity[provider] = null;

        // If the user exists, forward to `Kinvey.User.update`. Otherwise, resolve
        // immediately.
        if(null == user._id) {
          var promise = Kinvey.Defer.resolve(user);
          return wrapCallbacks(promise, options);
        }
        return Kinvey.User.update(user, options);
      },

      /**
       * Links a Facebook identity to the provided (if any) Kinvey user.
       *
       * @param {Object} [user] The associated user.
       * @param {Options} [options] Options.
       * @returns {Promise} The user.
       */
      facebook: function(user, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Linking a Facebook identity to a Kinvey user.', arguments);
        }

        // Forward to `Kinvey.Social.connect`.
        return Kinvey.Social.connect(user, 'facebook', options);
      },

      /**
       * Links a Google+ identity to the provided (if any) Kinvey user.
       *
       * @param {Object} [user] The associated user.
       * @param {Options} [options] Options.
       * @returns {Promise} The user.
       */
      google: function(user, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Linking a Google+ identity to a Kinvey user.', arguments);
        }

        // Forward to `Kinvey.Social.connect`.
        return Kinvey.Social.connect(user, 'google', options);
      },

      /**
       * Returns whether a social provider is supported.
       *
       * @param {string} provider The provider.
       * @returns {boolean}
       */
      isSupported: function(provider) {
        return -1 !== supportedProviders.indexOf(provider);
      },

      /**
       * Links a LinkedIn identity to the provided (if any) Kinvey user.
       *
       * @param {Object} [user] The associated user.
       * @param {Options} [options] Options.
       * @returns {Promise} The user.
       */
      linkedIn: function(user, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Linking a LinkedIn identity to a Kinvey user.', arguments);
        }

        // Forward to `Kinvey.Social.connect`.
        return Kinvey.Social.connect(user, 'linkedIn', options);
      },

      /**
       * Links a Twitter identity to the provided (if any) Kinvey user.
       *
       * @param {Object} [user] The associated user.
       * @param {Options} [options] Options.
       * @returns {Promise} The user.
       */
      twitter: function(user, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Linking a Twitter identity to a Kinvey user.', arguments);
        }

        // Forward to `Kinvey.Social.connect`.
        return Kinvey.Social.connect(user, 'twitter', options);
      }
    };


    // Users.
    // ------

    // REST API wrapper for user management with the Kinvey services. Note the
    // [active user](http://devcenter.kinvey.com/guides/users#ActiveUser) is not
    // exclusively managed in this namespace: `Kinvey.getActiveUser` and
    // `Kinvey.Auth.Session` operate on the active user as well.

    /**
     * @memberof! <global>
     * @namespace Kinvey.User
     */
    Kinvey.User = /** @lends Kinvey.User */ {
      /**
       * Signs up a new user.
       *
       * @param {Object} [data] User data.
       * @param {Options} [options] Options.
       * @returns {Promise} The new user.
       */
      signup: function(data, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Signing up a new user.', arguments);
        }

        // Forward to `Kinvey.User.create`. Signup, however, always marks the
        // created user as the active user.
        options = options || {};
        options.state = true; // Overwrite.
        return Kinvey.User.create(data, options);
      },

      /**
       * Signs up a new user through a provider.
       *
       * @param {string} provider  Provider.
       * @param {Object} tokens    Tokens.
       * @param {Object} [options] Options.
       * @returns {Promise} The active user.
       */
      signupWithProvider: function(provider, tokens, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Signing up a new user with a provider.', arguments);
        }

        // Parse tokens.
        var data = {
          _socialIdentity: {}
        };
        data._socialIdentity[provider] = tokens;

        // Forward to `Kinvey.User.signup`.
        return Kinvey.User.signup(data, options);
      },

      /**
       * Logs in an existing user.
       * NOTE If `options._provider`, this method should trigger a BL script.
       *
       * @param {Object|string} usernameOrData Username, or user data.
       * @param {string} [password] Password.
       * @param {Options} [options] Options.
       * @param {boolean} [options._provider] Login via Business Logic. May only
       *          be used internally to provide social login for browsers.
       * @returns {Promise} The active user.
       */
      login: function(usernameOrData, password, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Logging in an existing user.', arguments);
        }

        // Cast arguments.
        if(isObject(usernameOrData)) {
          options = 'undefined' !== typeof options ? options : password;
        }
        else {
          usernameOrData = {
            username: usernameOrData,
            password: password
          };
        }
        options = options || {};

        // Validate arguments.
        if(null == usernameOrData.username && null == usernameOrData.password &&
          null == usernameOrData._socialIdentity) {
          error = new Kinvey.Error('Argument must contain: username and password, or _socialIdentity.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Validate preconditions.
        if(null !== Kinvey.getActiveUser()) {
          error = clientError(Kinvey.Error.ALREADY_LOGGED_IN);
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Login with the specified credentials.
        var promise = Kinvey.Persistence.create({
          namespace: USERS,
          collection: options._provider ? null : 'login',
          data: usernameOrData,
          flags: options._provider ? {
            provider: options._provider
          } : {},
          auth: Auth.App,
          local: {
            res: true
          }
        }, options).then(function(user) {
          // Set and return the active user.
          Kinvey.setActiveUser(user);
          return user;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Logged in the user.', response);
          }, function(error) {
            log('Failed to login the user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Logs in an existing user through a provider.
       *
       * @param {string} provider  Provider.
       * @param {Object} tokens    Tokens.
       * @param {Object} [options] Options.
       * @returns {Promise} The active user.
       */
      loginWithProvider: function(provider, tokens, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Logging in with a provider.', arguments);
        }

        // Parse tokens.
        var data = {
          _socialIdentity: {}
        };
        data._socialIdentity[provider] = tokens;

        // Forward to `Kinvey.User.login`.
        return Kinvey.User.login(data, options);
      },

      /**
       * Logs out the active user.
       *
       * @param {Options} [options] Options.
       * @param {boolean} [options.force=false] Reset the active user even if an
       *          `InvalidCredentials` error is returned.
       * @param {boolean} [options.silent=false] Succeed when there is no active
       *          user.
       * @returns {Promise} The previous active user.
       */
      logout: function(options) {
        // Cast arguments.
        options = options || {};

        // If `options.silent`, resolve immediately if there is no active user.
        var promise;
        if(options.silent && null === Kinvey.getActiveUser()) {
          promise = Kinvey.Defer.resolve(null);
        }
        else { // Otherwise, attempt to logout the active user.
          // Debug.
          if(KINVEY_DEBUG) {
            log('Logging out the active user.', arguments);
          }

          // Prepare the response.
          promise = Kinvey.Persistence.create({
            namespace: USERS,
            collection: '_logout',
            auth: Auth.Session
          }, options).then(null, function(error) {
            // If `options.force`, clear the active user on `INVALID_CREDENTIALS`.
            if(options.force && (Kinvey.Error.INVALID_CREDENTIALS === error.name ||
                Kinvey.Error.EMAIL_VERIFICATION_REQUIRED === error.name)) {
              // Debug.
              if(KINVEY_DEBUG) {
                log('The user credentials are invalid. Returning success because of the force flag.');
              }
              return null;
            }
            return Kinvey.Defer.reject(error);
          }).then(function() {
            // Disconnect MIC
            return MIC.disconnect();
          }).then(function() {
            var error;

            // Reset the active user, and return the previous active user. Make
            // sure to delete the authtoken.
            var previous = Kinvey.setActiveUser(null);

            // Check if previous has property _kmd. Thrown error will cause promise to be
            // rejected
            if(previous._kmd == null) {
              error = new Kinvey.Error('The previous active user does not have _kmd defined' +
                'as a property.');
              throw error;
            }

            if(null !== previous) {
              delete previous._kmd.authtoken;
            }
            return previous;
          });

          // Debug.
          if(KINVEY_DEBUG) {
            promise.then(function(response) {
              log('Logged out the active user.', response);
            }, function(error) {
              log('Failed to logout the active user.', error);
            });
          }
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Retrieves information on the active user.
       *
       * @param {Options} [options] Options.
       * @returns {Promise} The active user.
       */
      me: function(options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Retrieving information on the active user.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: USERS,
          collection: '_me',
          auth: Auth.Session,
          local: {
            req: true,
            res: true
          }
        }, options).then(function(user) {
          // The response is a fresh copy of the active user. However, the response
          // does not contain `_kmd.authtoken`. Therefore, extract it from the
          // stale copy.
          user._kmd = user._kmd || {};
          if(null == user._kmd.authtoken) {
            user._kmd.authtoken = Kinvey.getActiveUser()._kmd.authtoken;
          }

          // Set and return the active user.
          Kinvey.setActiveUser(user);
          return user;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Retrieved information on the active user.', response);
          }, function(error) {
            log('Failed to retrieve information on the active user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Requests e-mail verification for a user.
       *
       * @param {string} username Username.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      verifyEmail: function(username, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Requesting e-mail verification.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: RPC,
          collection: username,
          id: 'user-email-verification-initiate',
          auth: Auth.App
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Requested e-mail verification.', response);
          }, function(error) {
            log('Failed to request e-mail verification.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Requests a username reminder for a user.
       *
       * @param {string} email E-mail.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      forgotUsername: function(email, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Requesting a username reminder.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: RPC,
          id: 'user-forgot-username',
          data: {
            email: email
          },
          auth: Auth.App
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Requested a username reminder.', response);
          }, function(error) {
            log('Failed to request a username reminder.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Requests a password reset for a user.
       *
       * @param {string} username Username.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      resetPassword: function(username, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Requesting a password reset.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: RPC,
          collection: username,
          id: 'user-password-reset-initiate',
          auth: Auth.App
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Requested a password reset.', response);
          }, function(error) {
            log('Failed to request a password reset.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Checks whether a username exists.
       *
       * @param {string} username Username to check.
       * @param {Options} [options] Options.
       * @returns {Promise} `true` if username exists, `false` otherwise.
       */
      exists: function(username, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Checking whether a username exists.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: RPC,
          id: 'check-username-exists',
          data: {
            username: username
          },
          auth: Auth.App
        }, options).then(function(response) {
          return response.usernameExists;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Checked whether the username exists.', response);
          }, function(error) {
            log('Failed to check whether the username exists.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Creates a new user.
       *
       * @param {Object} [data] User data.
       * @param {Options} [options] Options.
       * @param {boolean} [options.state=true] Save the created user as the active
       *          user.
       * @returns {Promise} The new user.
       */
      create: function(data, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Creating a new user.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // If `options.state`, validate preconditions.
        if(false !== options.state && null !== Kinvey.getActiveUser()) {
          var error = clientError(Kinvey.Error.ALREADY_LOGGED_IN);
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Create the new user.
        var promise = Kinvey.Persistence.create({
          namespace: USERS,
          data: data || {},
          auth: Auth.App
        }, options).then(function(user) {
          // If `options.state`, set the active user.
          if(false !== options.state) {
            Kinvey.setActiveUser(user);
          }
          return user;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Created the new user.', response);
          }, function(error) {
            log('Failed to create the new user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Updates a user. To create a user, use `Kinvey.User.create` or
       * `Kinvey.User.signup`.
       *
       * @param {Object} data User data.
       * @param {Options} [options] Options.
       * @param {string} [options._provider] Do not strip the `access_token` for
       *          this provider. Should only be used internally.
       * @returns {Promise} The user.
       */
      update: function(data, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Updating a user.', arguments);
        }

        // Validate arguments.
        if(null == data._id) {
          error = new Kinvey.Error('data argument must contain: _id');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Delete the social identitiesâ€™ access tokens, unless the identity is
        // `options._provider`. The tokens will be re-added after updating.
        var tokens = [];
        if(null != data._socialIdentity) {
          for(var identity in data._socialIdentity) {
            if(data._socialIdentity.hasOwnProperty(identity)) {
              if(null != data._socialIdentity[identity] && identity !== options._provider) {
                tokens.push({
                  provider: identity,
                  access_token: data._socialIdentity[identity].access_token,
                  access_token_secret: data._socialIdentity[identity].access_token_secret
                });
                delete data._socialIdentity[identity].access_token;
                delete data._socialIdentity[identity].access_token_secret;
              }
            }
          }
        }

        // Prepare the response.
        var promise = Kinvey.Persistence.update({
          namespace: USERS,
          id: data._id,
          data: data,
          auth: Auth.Default,
          local: {
            res: true
          }
        }, options).then(function(user) {
          // Re-add the social identitiesâ€™ access tokens.
          tokens.forEach(function(identity) {
            var provider = identity.provider;
            if(null != user._socialIdentity && null != user._socialIdentity[provider]) {
              ['access_token', 'access_token_secret'].forEach(function(field) {
                if(null != identity[field]) {
                  user._socialIdentity[provider][field] = identity[field];
                }
              });
            }
          });

          // If we just updated the active user, refresh it.
          var activeUser = Kinvey.getActiveUser();

          if(null !== activeUser) {
            // Check activeUser for property _id. Thrown error will reject promise.
            if(activeUser._id == null) {
              error = new Kinvey.Error('Active user does not have _id property defined.');
              throw error;
            }

            // Check user for property _id. Thrown error will reject promise.
            if(user._id == null) {
              error = new Kinvey.Error('User does not have _id property defined.');
              throw error;
            }

            if(activeUser._id === user._id) {
              // Debug.
              if(KINVEY_DEBUG) {
                log('Updating the active user because the updated user was the active user.');
              }

              Kinvey.setActiveUser(user);
            }
          }

          return user;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Updated the user.', response);
          }, function(error) {
            log('Failed to update the user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Retrieves all users matching the provided query.
       *
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} [options] Options.
       * @param {boolean} [discover=false] Use
       *          [User Discovery](http://devcenter.kinvey.com/guides/users#lookup).
       * @returns {Promise} A list of users.
       */
      find: function(query, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Retrieving users by query.', arguments);
        }

        // Validate arguments.
        if(null != query && !(query instanceof Kinvey.Query)) {
          error = new Kinvey.Error('query argument must be of type: Kinvey.Query.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // If `options.discover`, use
        // [User Discovery](http://devcenter.kinvey.com/guides/users#lookup)
        // instead of querying the user namespace directly.
        var promise;
        if(options.discover) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Using User Discovery because of the discover flag.');
          }

          // Prepare the response.
          promise = Kinvey.Persistence.create({
            namespace: USERS,
            collection: '_lookup',
            data: null != query ? query.toJSON().filter : null,
            auth: Auth.Default,
            local: {
              req: true,
              res: true
            }
          }, options);
        }
        else {
          // Prepare the response.
          promise = Kinvey.Persistence.read({
            namespace: USERS,
            query: query,
            auth: Auth.Default,
            local: {
              req: true,
              res: true
            }
          }, options);
        }

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Retrieved the users by query.', response);
          }, function(error) {
            log('Failed to retrieve the users by query.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Retrieves a user.
       *
       * @param {string} id User id.
       * @param {Options} [options] Options.
       * @returns {Promise} The user.
       */
      get: function(id, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Retrieving a user.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: USERS,
          id: id,
          auth: Auth.Default,
          local: {
            req: true,
            res: true
          }
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Retrieved the user.', response);
          }, function(error) {
            log('Failed to return the user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Deletes a user.
       *
       * @param {string} id User id.
       * @param {Options} [options] Options.
       * @param {boolean} [options.hard=false] Perform a hard delete.
       * @param {boolean} [options.silent=false] Succeed if the user did not exist
       *          prior to deleting.
       * @returns {Promise} The response.
       */
      destroy: function(id, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Deleting a user.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.destroy({
          namespace: USERS,
          id: id,
          flags: options.hard ? {
            hard: true
          } : {},
          auth: Auth.Default,
          local: {
            res: true
          }
        }, options).then(function(response) {
          // If we just deleted the active user, unset it here.
          var activeUser = Kinvey.getActiveUser();

          if(null !== activeUser) {
            // Check activeUser for property _id. Thrown error will reject promise.
            if(activeUser._id == null) {
              error = new Kinvey.Error('Active user does not have _id property defined.');
              throw error;
            }

            if(activeUser._id === id) {
              // Debug.
              if(KINVEY_DEBUG) {
                log('Deleting the active user because the deleted user was the active user.');
              }

              Kinvey.setActiveUser(null);
            }
          }

          return response;
        }, function(error) {
          // If `options.silent`, treat `USER_NOT_FOUND` as success.
          if(options.silent && Kinvey.Error.USER_NOT_FOUND === error.name) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('The user does not exist. Returning success because of the silent flag.');
            }

            return null;
          }
          return Kinvey.Defer.reject(error);
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Deleted the user.', response);
          }, function(error) {
            log('Failed to delete the user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Restores a previously disabled user.
       *
       * @param {string} id User id.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      restore: function(id, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Restoring a previously disabled user.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: USERS,
          collection: id,
          id: '_restore',
          auth: Auth.Master
        }, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Restored the previously disabled user.', response);
          }, function(error) {
            log('Failed to restore the previously disabled user.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Performs a count operation.
       *
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      count: function(query, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Counting the number of users.', arguments);
        }

        // Validate arguments.
        if(null != query && !(query instanceof Kinvey.Query)) {
          error = new Kinvey.Error('query argument must be of type: Kinvey.Query.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.read({
          namespace: USERS,
          id: '_count',
          query: query,
          auth: Auth.Default,
          local: {
            req: true
          }
        }, options).then(function(response) {
          return response.count;
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Counted the number of users.', response);
          }, function(error) {
            log('Failed to count the number of users.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Performs a group operation.
       *
       * @param {Kinvey.Aggregation} aggregation The aggregation.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      group: function(aggregation, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Grouping users.', arguments);
        }

        // Validate arguments.
        if(!(aggregation instanceof Kinvey.Group)) {
          error = new Kinvey.Error('aggregation argument must be of type: Kinvey.Group.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Kinvey.Persistence.create({
          namespace: USERS,
          id: '_group',
          data: aggregation.toJSON(),
          auth: Auth.Default,
          local: {
            req: true
          }
        }, options).then(function(response) {
          // Process the raw response.
          return aggregation.postProcess(response);
        });

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Grouped the users.', response);
          }, function(error) {
            log('Failed to group the users.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      }
    };


    // Mobile Identity Connect
    // ----

    var MIC = {
      /**
       * Auth Path
       *
       * @constant
       * @default '/oauth/auth'
       */
      AUTH_PATH: '/oauth/auth',

      /**
       * Token Path
       *
       * @constant
       * @default '/oauth/token'
       */
      TOKEN_PATH: '/oauth/token',

      /**
       * Auth Provider
       *
       * @constant
       * @default 'kinveyAuth'
       */
      AUTH_PROVIDER: 'kinveyAuth',

      /**
       * Token Storage Key
       *
       * @constant
       * @default 'micToken'
       */
      TOKEN_STORAGE_KEY: 'micToken',

      /**
       * Auth Timeout
       *
       * @constant
       * @default 5 minutes
       */
      AUTH_TIMEOUT: (1000 * 60 * 5),

      AuthorizationGrant: {
        AuthorizationCodeLoginPage: 'AuthorizationCodeLoginPage',
        AuthorizationCodeAPI: 'AuthorizationCodeAPI'
      },

      /**
       * Login with MIC.
       *
       * @param  {string}   authorizationGrant        Authorization Grant.
       * @param  {string}   redirectUri               Redirect Uri.
       * @param  {Object}   [options]                 Options.
       * @params {string}   [options.username]        Username for the user to be authorized.
       * @params {string}   [options.password]        Password for the user to be authorized.
       * @param  {boolean}  [options.create=true]     Create a new user if no user exists.
       * @param  {number}   [options.timeout=300000]  How long to wait for a successful authorization. Defaults to 5 minutes.
       * @return {Promise}                            Authorized user.
       */
      login: function(authorizationGrant, redirectUri, options) {
        var clientId = Kinvey.appKey;
        var activeUser = Kinvey.getActiveUser();
        var error;
        var promise;

        // Set defaults for options
        options = options || {};
        options.timeout = options.timeout || MIC.AUTH_TIMEOUT;
        options.attemptMICRefresh = false;

        if(null != activeUser) {
          // Reject with error because of active user
          error = clientError(Kinvey.Error.ALREADY_LOGGED_IN);
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }
        else if(null == redirectUri) {
          error = new Kinvey.Error('A redirect uri must be provided to login with MIC.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }
        // Step 1: Check authorization grant type
        else if(MIC.AuthorizationGrant.AuthorizationCodeLoginPage === authorizationGrant) {
          if(this.isNode()) {
            error = new Kinvey.Error(MIC.AuthorizationGrant.AuthorizationCodeLoginPage + ' grant is not supported.');
            return wrapCallbacks(Kinvey.Defer.reject(error), options);
          }

          // Step 2: Request a code
          promise = MIC.requestCodeWithPopup(clientId, redirectUri, options);
        }
        else if(MIC.AuthorizationGrant.AuthorizationCodeAPI === authorizationGrant) {
          if(this.isHTML5() || this.isAngular() || this.isBackbone() || this.isPhoneGap() || this.isTitanium()) {
            error = new Kinvey.Error(MIC.AuthorizationGrant.AuthorizationCodeAPI + ' grant is not supported.');
            return wrapCallbacks(Kinvey.Defer.reject(error), options);
          }

          if(null == options.username) {
            error = new Kinvey.Error('A username must be provided to login with MIC using the ' +
              MIC.AuthorizationGrant.AuthorizationCodeAPI + ' grant.');
            return wrapCallbacks(Kinvey.Defer.reject(error), options);
          }

          if(null == options.password) {
            error = new Kinvey.Error('A password must be provided to login with MIC using the ' +
              MIC.AuthorizationGrant.AuthorizationCodeAPI + ' grant.');
            return wrapCallbacks(Kinvey.Defer.reject(error), options);
          }

          // Step 2a: Request a temp login uri
          promise = MIC.requestUrl(clientId, redirectUri, options).then(function(url) {
            // Step 2b: Request a code
            // options.url = url + '?client_id=' + encodeURIComponent(clientId) + '&redirect_uri=' + encodeURIComponent(redirectUri) +
            //   '&response_type=code&username=' + encodeURIComponent(options.username) +
            //   '&password=' + encodeURIComponent(options.password);
            return MIC.requestCodeWithUrl(url, clientId, redirectUri, options);
          });
        }
        else {
          // Reject with error because of invalid authorization grant
          error = clientError(Kinvey.Error.MIC_ERROR, {
            debug: 'The authorization grant ' + authorizationGrant + ' is unrecognized. Please provide one of the ' +
              'following authorization grants: ' + MIC.AuthorizationGrant.AuthorizationCodeLoginPage + ', ' +
              MIC.AuthorizationGrant.AuthorizationCodeAPI + '.'
          });
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        promise = promise.then(function(code) {
          // Step 3: Request a token
          return MIC.requestToken(clientId, redirectUri, code, options);
        }).then(function(token) {
          // Step 4: Connect the token with the user. Create a new user by default if one does not exist.
          options.create = false === options.create ? false : true;
          return MIC.connect(activeUser, token.access_token, options).then(function(user) {
            // Step 5: Save the token
            return Storage.save(MIC.TOKEN_STORAGE_KEY, {
              refresh_token: token.refresh_token,
              redirect_uri: redirectUri
            }).then(function() {
              return user;
            });
          });
        });

        return wrapCallbacks(promise, options);
      },

      /**
       * Refresh a MIC token.
       *
       * @param  {Object}   [options]   Options.
       * @return {Promise}              Authorized user.
       */
      refresh: function(options) {
        var error;
        var clientId = Kinvey.appKey;
        var activeUser = Kinvey.getActiveUser();
        var redirectUri;
        var promise;

        // Set defaults for options
        options = options || {};
        options.attemptMICRefresh = false;

        // Step 1: Retrieve the saved token
        promise = Storage.get(MIC.TOKEN_STORAGE_KEY).then(function(token) {
          if(null != token) {
            // Step 2: Refresh the token
            redirectUri = token.redirect_uri;
            return MIC.refreshToken(clientId, redirectUri, token.refresh_token, options);
          }

          // Throw error to reject promise for missing token.
          error = clientError(Kinvey.Error.MIC_ERROR, {
            debug: 'Unable to refresh because there is not a valid refresh token available.'
          });
          throw error;
        }).then(function(token) {
          // Step 3: Connect the token with the user
          return MIC.connect(activeUser, token.access_token, options).then(function(user) {
            // Step 4: Save the token
            return Storage.save(MIC.TOKEN_STORAGE_KEY, {
              refresh_token: token.refresh_token,
              redirect_uri: redirectUri
            }).then(function() {
              return user;
            });
          });
        }, function(err) {
          return Storage.destroy(MIC.TOKEN_STORAGE_KEY).then(function() {
            throw err;
          });
        });

        return wrapCallbacks(promise, options);
      },

      /**
       * Send a request to get a temp login url.
       *
       * @param  {string} clientId     Client Id.
       * @param  {string} redirectUri  Redirect Uri.
       * @param  {Object} options      Options.
       * @return {Promise}             Temp Login Uri.
       */
      requestUrl: function(clientId, redirectUri, options) {
        // Create a request
        var request = {
          method: 'POST',
          url: Kinvey.MICHostName + MIC.AUTH_PATH,
          data: {
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: 'code'
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'X-Kinvey-API-Version': Kinvey.API_VERSION,
            'X-Kinvey-Device-Information': deviceInformation()
          }
        };

        // Debug.
        if(KINVEY_DEBUG) {
          request.headers['X-Kinvey-Trace-Request'] = 'true';
          request.headers['X-Kinvey-Force-Debug-Log-Credentials'] = 'true';
        }

        // Send request
        return Kinvey.Persistence.Net.request(
          request.method,
          request.url,
          MIC.encodeFormData(request.data),
          request.headers,
          options
        ).then(function(response) {
          try {
            response = JSON.parse(response);
          }
          catch(e) {}

          return response.temp_login_uri;
        });
      },

      /**
       * Request a code by opening a popup up to a url.
       *
       * @param  {string} clientId    Client Id.
       * @param  {string} redirectUri Redirect Uri.
       * @param  {Object} options     Options.
       * @return {Promise}            Code.
       */
      requestCodeWithPopup: function(clientId, redirectUri, options) {
        var error;
        var deferred = Kinvey.Defer.deferred();
        var url = Kinvey.MICHostName + MIC.AUTH_PATH + '?client_id=' + encodeURIComponent(clientId) +
          '&redirect_uri=' + encodeURIComponent(redirectUri) + '&response_type=code';
        var deferredResolved = false;
        var popup;
        var tiWebView;
        var tiCloseButton;
        options = options || {};
        options.url = options.url || url;

        // Load handler: Used when running Cordova or Titanium
        var loadHandler = function(event) {
          // Check if url is location of redirect uri
          var redirected = false;
          try {
            redirected = 0 === event.url.indexOf(redirectUri);
          }
          catch(e) {}

          // Continue if the popup was redirected.
          if(redirected) {
            // Extract the code
            var queryString = '?' + event.url.split('?')[1];
            var params = parseQueryString(queryString);
            deferred.resolve(params.code);
            deferredResolved = true;

            // Animation popup open prevents closing sometimes so
            // wait just a moment to close
            setTimeout(function() {
              // Close the popup
              popup.close();
            }, 200);
          }
        };

        // Close handler: Used when running Cordova or Titanium
        var closeHandler = function() {
          if(!deferredResolved) {
            // Return the response.
            error = clientError(Kinvey.Error.MIC_ERROR, {
              debug: 'The popup was closed without authorizing the user.'
            });
            deferred.reject(error);
          }

          // Remove event listeners
          if(MIC.isPhoneGap()) {
            popup.removeEventListener('loadstart', loadHandler);
            popup.removeEventListener('exit', closeHandler);
          }
          else if(MIC.isTitanium()) {
            tiWebView.removeEventListener('load', loadHandler);
            tiWebView.removeEventListener('error', loadHandler);
            popup.removeEventListener('close', closeHandler);

            if(OS_IOS) {
              tiCloseButton.removeEventListener('click', clickHandler);
            }
            else if(OS_ANDROID) {
              popup.close();
              popup.removeEventListener('androidback', closeHandler);
            }
          }
        };

        // Click handler: Used when running Titanium
        var clickHandler = function() {
          popup.close();
        };

        if(MIC.isPhoneGap()) {
          // Open the popup
          popup = root.open(options.url, '_blank', 'location=yes');

          if(null == popup) {
            // Return the response.
            error = clientError(Kinvey.Error.MIC_ERROR, {
              debug: 'The popup was blocked.'
            });
            deferred.reject(error);
          }
          else {
            popup.addEventListener('loadstart', loadHandler);
            popup.addEventListener('exit', closeHandler);
          }
        }
        else if(MIC.isTitanium()) {
          // Create a web view
          tiWebView = Titanium.UI.createWebView({
            width: '100%',
            height: '100%',
            url: options.url
          });

          // Create a popup window
          popup = Titanium.UI.createWindow({
            backgroundColor: 'white',
            barColor: '#000',
            title: 'Kinvey - MIC',
            modal: true
          });

          // Add the web view to the popup window
          popup.add(tiWebView);

          if(OS_IOS) {
            // Create a window
            var win = Titanium.UI.createWindow({
              backgroundColor: 'white',
              barColor: '#e3e3e3',
              title: 'Kinvey - MIC'
            });

            // Add the web view to the window
            win.add(tiWebView);

            // Create close button
            tiCloseButton = Titanium.UI.createButton({
              title: 'Close',
              style: Titanium.UI.iPhone.SystemButtonStyle.DONE
            });
            win.setLeftNavButton(tiCloseButton);

            // Listen for click event on close button
            tiCloseButton.addEventListener('click', clickHandler);

            // Create a navigation window
            popup = Titanium.UI.iOS.createNavigationWindow({
              backgroundColor: 'white',
              window: win,
              modal: true
            });
          }
          else if(OS_ANDROID) {
            popup.addEventListener('androidback', closeHandler);
          }

          // Open the web view UI
          popup.open();

          // Add event listener
          tiWebView.addEventListener('load', loadHandler);
          tiWebView.addEventListener('error', loadHandler);
          popup.addEventListener('close', closeHandler);
        }
        else {
          // Open the popup
          popup = root.open(options.url, '_blank', 'toolbar=no,location=no');

          // Popup management.
          var elapsed = 0; // Time elapsed since opening the popup.
          var interval = 100; // ms.
          var timer = root.setInterval(function() {
            // The popup was blocked.
            if(null == popup) {
              root.clearTimeout(timer); // Stop listening.

              // Return the response.
              error = clientError(Kinvey.Error.MIC_ERROR, {
                debug: 'The popup was blocked.'
              });
              deferred.reject(error);
            }

            // The popup closed unexpectedly.
            else if(popup.closed) {
              root.clearTimeout(timer); // Stop listening.

              // Return the response.
              error = clientError(Kinvey.Error.MIC_ERROR, {
                debug: 'The popup was closed without authorizing the user.'
              });
              deferred.reject(error);
            }
            // The user waited too long to reply to the authorization request.
            else if(options.timeout && elapsed > options.timeout) {
              root.clearTimeout(timer); // Stop listening.
              popup.close();

              // Return the response.
              error = clientError(Kinvey.Error.MIC_ERROR, {
                debug: 'The authorization request timed out.'
              });
              deferred.reject(error);
            }

            // The popup is still active, check its location.
            else {
              // Firefox will throw an exception when `popup.location.host` has
              // a different origin.
              var redirected = false;
              try {
                redirected = 0 === popup.location.href.indexOf(redirectUri);
              }
              catch(e) {}

              // Continue if the popup was redirected.
              if(redirected) {
                root.clearTimeout(timer);

                // Extract the code
                var params = parseQueryString(popup.location.search);
                deferred.resolve(params.code);
                deferredResolved = true;

                // Close the popup
                popup.close();
              }
            }

            // Update elapsed time.
            elapsed += interval;
          }, interval);
        }

        // Return the promise.
        return deferred.promise;
      },

      /**
       * Request a code by sending a POST request to the url.
       *
       * @param  {String} url         Url.
       * @param  {string} clientId    Client Id.
       * @param  {string} redirectUri Redirect Uri.
       * @param  {Object} options     Options.
       * @return {Promise}            Code.
       */
      requestCodeWithUrl: function(url, clientId, redirectUri, options) {
        // Create a request
        var request = {
          method: 'POST',
          url: url,
          data: {
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: 'code',
            username: options.username,
            password: options.password
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          }
        };

        // Send request
        return Kinvey.Persistence.Net.request(
          request.method,
          request.url,
          MIC.encodeFormData(request.data),
          request.headers,
          options
        ).then(function(response) {
          try {
            response = JSON.parse(response);
          }
          catch(e) {}

          return response.code;
        }, function(error) {
          error = clientError(Kinvey.Error.MIC_ERROR, {
            debug: 'Unable to authorize user with username ' + options.username + ' and ' +
              'password ' + options.password + '.'
          });
          throw error;
        });
      },

      /**
       * Request a token from MIC using the provided code.
       *
       * @param  {string} clientId    Client Id.
       * @param  {string} redirectUri Redirect Uri.
       * @param  {string} code        MIC Code.
       * @param  {Object} options     Options.
       * @return {Promise}            Token.
       */
      requestToken: function(clientId, redirectUri, code, options) {
        // Create a request
        var request = {
          auth: Auth.App,
          method: 'POST',
          url: Kinvey.MICHostName + MIC.TOKEN_PATH,
          data: {
            grant_type: 'authorization_code',
            client_id: clientId,
            redirect_uri: redirectUri,
            code: code
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'X-Kinvey-API-Version': Kinvey.API_VERSION,
            'X-Kinvey-Device-Information': deviceInformation()
          }
        };

        // Debug.
        if(KINVEY_DEBUG) {
          request.headers['X-Kinvey-Trace-Request'] = 'true';
          request.headers['X-Kinvey-Force-Debug-Log-Credentials'] = 'true';
        }

        return request.auth().then(function(auth) {
          if(null !== auth) {
            // Format credentials.
            var credentials = auth.credentials;
            if(null != auth.username) {
              credentials = Kinvey.Persistence.Net.base64(auth.username + ':' + auth.password);
            }

            // Append header.
            request.headers.Authorization = auth.scheme + ' ' + credentials;
          }

          // Send request
          return Kinvey.Persistence.Net.request(
            request.method,
            request.url,
            MIC.encodeFormData(request.data),
            request.headers,
            options
          );
        }).then(function(token) {
          try {
            token = JSON.parse(token);
          }
          catch(e) {}

          return token;
        });
      },

      /**
       * Refresh a token with the provided refresh token.
       *
       * @param  {string} clientId     Client Id.
       * @param  {string} redirectUri  Redirect Uri.
       * @param  {string} refreshToken Refresh Token.
       * @param  {Object} options      Options.
       * @return {Promise}             User.
       */
      refreshToken: function(clientId, redirectUri, refreshToken, options) {
        // Create a request
        var request = {
          auth: Auth.App,
          method: 'POST',
          url: Kinvey.MICHostName + MIC.TOKEN_PATH,
          data: {
            grant_type: 'refresh_token',
            client_id: clientId,
            redirect_uri: redirectUri,
            refresh_token: refreshToken
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'X-Kinvey-API-Version': Kinvey.API_VERSION,
            'X-Kinvey-Device-Information': deviceInformation()
          }
        };

        // Debug.
        if(KINVEY_DEBUG) {
          request.headers['X-Kinvey-Trace-Request'] = 'true';
          request.headers['X-Kinvey-Force-Debug-Log-Credentials'] = 'true';
        }

        return request.auth().then(function(auth) {
          if(null !== auth) {
            // Format credentials.
            var credentials = auth.credentials;
            if(null != auth.username) {
              credentials = Kinvey.Persistence.Net.base64(auth.username + ':' + auth.password);
            }

            // Append header.
            request.headers.Authorization = auth.scheme + ' ' + credentials;
          }

          // Send request
          return Kinvey.Persistence.Net.request(
            request.method,
            request.url,
            MIC.encodeFormData(request.data),
            request.headers,
            options
          );
        }).then(function(token) {
          try {
            token = JSON.parse(token);
          }
          catch(e) {}

          return token;
        });
      },

      /**
       * Links a MIC token to the provided (if any) Kinvey user.
       *
       * @param {Object} [user] The associated user.
       * @param {Options} [options] Options.
       * @param {boolean} [options.create=true] Create a new user if no user with
       *          the provided social identity exists.
       * @returns {Promise} The user.
       */
      connect: function(user, accessToken, options) {
        // Default user.
        user = user || {};

        // Set active user to null
        Kinvey.setActiveUser(null);

        // Attempt logging in with the tokens.
        user._socialIdentity = {};
        user._socialIdentity[MIC.AUTH_PROVIDER] = {
          access_token: accessToken
        };
        return Kinvey.User.login(user, null, options).then(null, function(error) {
          // If `options.create`, attempt to signup as a new user if no user with
          // the identity exists.
          if(options.create && Kinvey.Error.USER_NOT_FOUND === error.name) {
            return Kinvey.User.signup(user, options).then(function(user) {
              return MIC.connect(user, accessToken, options);
            });
          }

          return Kinvey.Defer.reject(error);
        });
      },

      /**
       * Removes a MIC token from the provided Kinvey user.
       *
       * @param {Object} [user] The user.
       * @param {Options} [options] Options.
       * @returns {Promise} The user.
       */
      disconnect: function() {
        // Destroy the token
        return Storage.destroy(MIC.TOKEN_STORAGE_KEY);
      },

      /**
       * Encodes the data as form data.
       *
       * @param  {object} data Data to encode.
       * @return {string} Encoded data string.
       */
      encodeFormData: function(data) {
        var str = [];
        for(var p in data) {
          if(data.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
          }
        }
        return str.join('&');
      },

      /**
       * Return true or false if using HTML5.
       *
       * @return {Boolean} HTML5
       */
      isHTML5: function() {
        return !(this.isTitanium() || this.isNode());
      },

      /**
       * Return true or false if using Angular framework.
       *
       * @return {Boolean} Angular Framework
       */
      isAngular: function() {
        return('undefined' !== typeof root.angular);
      },

      /**
       * Return true or false if using Backbone framework.
       *
       * @return {Boolean} Backbone Framework
       */
      isBackbone: function() {
        return('undefined' !== typeof root.Backbone);
      },

      /**
       * Return true or false if using Cordova/PhoneGap framework.
       *
       * @return {Boolean} Cordova/PhoneGap Framework
       */
      isPhoneGap: function() {
        return('undefined' !== typeof root.cordova && 'undefined' !== typeof root.device);
      },

      /**
       * Return true or false if using Titanium framework.
       *
       * @return {Boolean} Titanium Framework
       */
      isTitanium: function() {
        return('undefined' !== typeof Titanium);
      },

      /**
       * Return true or false if using NodeJS.
       *
       * @return {Boolean} NodeJS
       */
      isNode: function() {
        return('undefined' !== typeof module && module.exports);
      }
    };

    /**
     * @memberof! <global>
     * @namespace Kinvey.User.MIC
     */
    Kinvey.User = Kinvey.User || {};
    Kinvey.User.MIC = /** @lends Kinvey.User.MIC */ {

      /**
       * Authorize a user with Mobile Identity Connect (MIC) using a login page.
       *
       * @param  {String}   redirectUri               Where to redirect to after a succesful login. This should be the same value as setup
       *                                              in the Kinvey Console for your applicaiton.
       * @param  {Object}   [options]                 Options.
       * @param  {Boolean}  [options.create=true]     Create a new user if no user exists.
       * @param  {Number}   [options.timeout=300000]  How long to wait for a successful authorization. Defaults to 5 minutes.
       * @return {Promise}                            Authorized user.
       */
      loginWithAuthorizationCodeLoginPage: function(redirectUri, options) {
        return MIC.login(MIC.AuthorizationGrant.AuthorizationCodeLoginPage, redirectUri, options);
      },

      /**
       * Authorize a user with Mobile Identity Connect (MIC) using a provided username and password.
       *
       * @param  {String}   username                Username for the user to be authorized.
       * @param  {String}   password                Password for the user to be authorized.
       * @param  {String}   redirectUri             Where to redirect to after a succesful login. This should be the same value as setup
       *                                            in the Kinvey Console for your applicaiton.
       * @param  {Object}   [options]               Options.
       * @param  {Boolean}  [options.create=true]   Create a new user if no user exists.
       * @return {Promise}                          Authorized user.
       */
      loginWithAuthorizationCodeAPI: function(username, password, redirectUri, options) {
        options = options || {};
        options.username = username;
        options.password = password;
        return MIC.login(MIC.AuthorizationGrant.AuthorizationCodeAPI, redirectUri, options);
      },

      /**
       * Logout the active user.
       *
       * @param {Options} [options] Options.
       * @param {boolean} [options.force=false] Reset the active user even if an
       *          `InvalidCredentials` error is returned.
       * @param {boolean} [options.silent=false] Succeed when there is no active
       *          user.
       * @returns {Promise} The previous active user.
       */
      logout: function(options) {
        return Kinvey.User.logout(options);
      }
    };



    // Querying.
    // ---------

    // The `Kinvey.Query` class provides an easy way to build queries, which can
    // then be passed to one of the REST API wrappers to query application data.
    // Internally, the class builds a MongoDB query.

    /**
     * The Kinvey.Query class.
     *
     * @memberof! <global>
     * @class Kinvey.Query
     * @param {Object} [options] Options.
     * @param {Object} [options.filter] Filter.
     * @param {Object} [options.sort] Sort.
     * @param {number} [options.skip] Skip.
     * @param {number} [options.limit] Limit.
     */
    Kinvey.Query = function(options) {
      // Cast arguments.
      options = options || {};

      /**
       * Fields to select.
       *
       * @private
       * @type {Array}
       */
      this._fields = options.fields || [];

      /**
       * The MongoDB query.
       *
       * @private
       * @type {Object}
       */
      this._filter = options.filter || {};

      /**
       * The sorting order.
       *
       * @private
       * @type {Object}
       */
      this._sort = options.sort || {};

      /**
       * Number of documents to select.
       *
       * @private
       * @type {?number}
       */
      this._limit = options.limit || null;

      /**
       * Number of documents to skip from the start.
       *
       * @private
       * @type {number}
       */
      this._skip = options.skip || 0;

      /**
       * Maintain reference to the parent query in case the query is part of a
       * join.n
       *
       * @private
       * @type {?Kinvey.Query}
       */
      this._parent = null;
    };

    // Define the query methods.
    Kinvey.Query.prototype = /** @lends Kinvey.Query# */ {
      // Comparison.

      /**
       * Adds an equal to filter to the query. Requires `field` to equal `value`.
       * Any existing filters on `field` will be discarded.
       * http://docs.mongodb.org/manual/reference/operators/#comparison
       *
       * @param {string} field Field.
       * @param {*} value Value.
       * @returns {Kinvey.Query} The query.
       */
      equalTo: function(field, value) {
        this._filter[field] = value;
        return this;
      },

      /**
       * Adds a contains filter to the query. Requires `field` to contain at least
       * one of the members of `list`.
       * http://docs.mongodb.org/manual/reference/operator/in/
       *
       * @param {string} field Field.
       * @param {Array} values List of values.
       * @throws {Kinvey.Error} `values` must be of type: `Array`.
       * @returns {Kinvey.Query} The query.
       */
      contains: function(field, values) {
        // Validate arguments.
        if(!isArray(values)) {
          throw new Kinvey.Error('values argument must be of type: Array.');
        }

        return this._addFilter(field, '$in', values);
      },

      /**
       * Adds a contains all filter to the query. Requires `field` to contain all
       * members of `list`.
       * http://docs.mongodb.org/manual/reference/operator/all/
       *
       * @param {string} field Field.
       * @param {Array} values List of values.
       * @throws {Kinvey.Error} `values` must be of type: `Array`.
       * @returns {Kinvey.Query} The query.
       */
      containsAll: function(field, values) {
        // Validate arguments.
        if(!isArray(values)) {
          throw new Kinvey.Error('values argument must be of type: Array.');
        }

        return this._addFilter(field, '$all', values);
      },

      /**
       * Adds a greater than filter to the query. Requires `field` to be greater
       * than `value`.
       * http://docs.mongodb.org/manual/reference/operator/gt/
       *
       * @param {string} field Field.
       * @param {number|string} value Value.
       * @throws {Kinvey.Error} `value` must be of type: `number` or `string`.
       * @returns {Kinvey.Query} The query.
       */
      greaterThan: function(field, value) {
        // Validate arguments.
        if(!(isNumber(value) || isString(value))) {
          throw new Kinvey.Error('value argument must be of type: number or string.');
        }

        return this._addFilter(field, '$gt', value);
      },

      /**
       * Adds a greater than or equal to filter to the query. Requires `field` to
       * be greater than or equal to `value`.
       * http://docs.mongodb.org/manual/reference/operator/gte/
       *
       * @param {string} field Field.
       * @param {number|string} value Value.
       * @throws {Kinvey.Error} `value` must be of type: `number` or `string`.
       * @returns {Kinvey.Query} The query.
       */
      greaterThanOrEqualTo: function(field, value) {
        // Validate arguments.
        if(!(isNumber(value) || isString(value))) {
          throw new Kinvey.Error('value argument must be of type: number or string.');
        }

        return this._addFilter(field, '$gte', value);
      },

      /**
       * Adds a less than filter to the query. Requires `field` to be less than
       * `value`.
       * http://docs.mongodb.org/manual/reference/operator/lt/
       *
       * @param {string} field Field.
       * @param {number|string} value Value.
       * @throws {Kinvey.Error} `value` must be of type: `number` or `string`.
       * @returns {Kinvey.Query} The query.
       */
      lessThan: function(field, value) {
        // Validate arguments.
        if(!(isNumber(value) || isString(value))) {
          throw new Kinvey.Error('value argument must be of type: number or string.');
        }

        return this._addFilter(field, '$lt', value);
      },

      /**
       * Adds a less than or equal to filter to the query. Requires `field` to be
       * less than or equal to `value`.
       * http://docs.mongodb.org/manual/reference/operator/lte/
       *
       * @param {string} field Field.
       * @param {number|string} value Value.
       * @throws {Kinvey.Error} `value` must be of type: `number` or `string`.
       * @returns {Kinvey.Query} The query.
       */
      lessThanOrEqualTo: function(field, value) {
        // Validate arguments.
        if(!(isNumber(value) || isString(value))) {
          throw new Kinvey.Error('value argument must be of type: number or string.');
        }

        return this._addFilter(field, '$lte', value);
      },

      /**
       * Adds a not equal to filter to the query. Requires `field` not to equal
       * `value`.
       * http://docs.mongodb.org/manual/reference/operator/ne/
       *
       * @param {string} field Field.
       * @param {*} value Value.
       * @returns {Kinvey.Query} The query.
       */
      notEqualTo: function(field, value) {
        return this._addFilter(field, '$ne', value);
      },

      /**
       * Adds a not contained in filter to the query. Requires `field` not to
       * contain any of the members of `list`.
       * http://docs.mongodb.org/manual/reference/operator/nin/
       *
       * @param {string} field Field.
       * @param {Array} values List of values.
       * @throws {Kinvey.Error} `values` must be of type: `Array`.
       * @returns {Kinvey.Query} The query.
       */
      notContainedIn: function(field, values) {
        // Validate arguments.
        if(!isArray(values)) {
          throw new Kinvey.Error('values argument must be of type: Array.');
        }

        return this._addFilter(field, '$nin', values);
      },

      // Logical. The operator precedence is as defined as: AND-NOR-OR.

      /**
       * Performs a logical AND operation on the query and the provided queries.
       * http://docs.mongodb.org/manual/reference/operator/and/
       *
       * @param {...Kinvey.Query|Object} Queries.
       * @throws {Kinvey.Error} `query` must be of type: `Kinvey.Query[]` or `Object[]`.
       * @returns {Kinvey.Query} The query.
       */
      and: function() {
        // AND has highest precedence. Therefore, even if this query is part of a
        // JOIN already, apply it on this query.
        return this._join('$and', Array.prototype.slice.call(arguments));
      },

      /**
       * Performs a logical NOR operation on the query and the provided queries.
       * http://docs.mongodb.org/manual/reference/operator/nor/
       *
       * @param {...Kinvey.Query|Object} Queries.
       * @throws {Kinvey.Error} `query` must be of type: `Kinvey.Query[]` or `Object[]`.
       * @returns {Kinvey.Query} The query.
       */
      nor: function() {
        // NOR is preceded by AND. Therefore, if this query is part of an AND-join,
        // apply the NOR onto the parent to make sure AND indeed precedes NOR.
        if(null !== this._parent && null != this._parent._filter.$and) {
          return this._parent.nor.apply(this._parent, arguments);
        }
        return this._join('$nor', Array.prototype.slice.call(arguments));
      },

      /**
       * Performs a logical OR operation on the query and the provided queries.
       * http://docs.mongodb.org/manual/reference/operator/or/
       *
       * @param {...Kinvey.Query|Object} Queries.
       * @throws {Kinvey.Error} `query` must be of type: `Kinvey.Query[]` or `Object[]`.
       * @returns {Kinvey.Query} The query.
       */
      or: function() {
        // OR has lowest precedence. Therefore, if this query is part of any join,
        // apply the OR onto the parent to make sure OR has indeed the lowest
        // precedence.
        if(null !== this._parent) {
          return this._parent.or.apply(this._parent, arguments);
        }
        return this._join('$or', Array.prototype.slice.call(arguments));
      },

      // Element.

      /**
       * Adds an exists filter to the query. Requires `field` to exist if `flag` is
       * `true`, or not to exist if `flag` is `false`.
       * http://docs.mongodb.org/manual/reference/operator/exists/
       *
       * @param {string} field Field.
       * @param {boolean} [flag=true] The exists flag.
       * @returns {Kinvey.Query} The query.
       */
      exists: function(field, flag) {
        flag = 'undefined' === typeof flag ? true : flag || false; // Cast.
        return this._addFilter(field, '$exists', flag);
      },

      /**
       * Adds a modulus filter to the query. Requires `field` modulo `divisor` to
       * have remainder `remainder`.
       * http://docs.mongodb.org/manual/reference/operator/mod/
       *
       * @param {string} field Field.
       * @param {number} divisor Divisor.
       * @param {number} [remainder=0] Remainder.
       * @throws {Kinvey.Error} * `divisor` must be of type: `number`.
       *                         * `remainder` must be of type: `number`.
       * @returns {Kinvey.Query} The query.
       */
      mod: function(field, divisor, remainder) {
        // Cast arguments.
        if(isString(divisor)) {
          divisor = parseFloat(divisor);
        }
        if('undefined' === typeof remainder) {
          remainder = 0;
        }
        else if(isString(remainder)) {
          remainder = parseFloat(remainder);
        }

        // Validate arguments.
        if(!isNumber(divisor)) {
          throw new Kinvey.Error('divisor arguments must be of type: number.');
        }
        if(!isNumber(remainder)) {
          throw new Kinvey.Error('remainder argument must be of type: number.');
        }

        return this._addFilter(field, '$mod', [divisor, remainder]);
      },

      // JavaScript.

      /**
       * Adds a match filter to the query. Requires `field` to match `regExp`.
       * http://docs.mongodb.org/manual/reference/operator/regex/
       *
       * @param {string} field Field.
       * @param {RegExp|string} regExp Regular expression.
       * @param {Object} [options] Options.
       * @param {boolean} [options.ignoreCase=inherit] Toggles case-insensitivity.
       * @param {boolean} [options.multiline=inherit] Toggles multiline matching.
       * @param {boolean} [options.extended=false] Toggles extended capability.
       * @param {boolean} [options.dotMatchesAll=false] Toggles dot matches all.
       * @returns {Kinvey.Query} The query.
       */
      matches: function(field, regExp, options) {
        // Cast arguments.
        if(!isRegExp(regExp)) {
          regExp = new RegExp(regExp);
        }
        options = options || {};

        // Validate arguments.
        if((regExp.ignoreCase || options.ignoreCase) && false !== options.ignoreCase) {
          throw new Error('ignoreCase flag is not supported.');
        }
        if(0 !== regExp.source.indexOf('^')) {
          throw new Error('regExp must be an anchored expression.');
        }

        // Flags.
        var flags = [];
        if((regExp.multiline || options.multiline) && false !== options.multiline) {
          flags.push('m');
        }
        if(options.extended) {
          flags.push('x');
        }
        if(options.dotMatchesAll) {
          flags.push('s');
        }

        // `$regex` and `$options` are separate filters.
        var result = this._addFilter(field, '$regex', regExp.source);
        if(0 !== flags.length) {
          this._addFilter(field, '$options', flags.join(''));
        }
        return result;
      },

      // Geospatial.

      /**
       * Adds a near filter to the query. Requires `field` to be a coordinate
       * within `maxDistance` of `coord`. Sorts documents from nearest to farthest.
       * http://docs.mongodb.org/manual/reference/operator/near/
       *
       * @param {string} field The field.
       * @param {Array.<number, number>} coord The coordinate (longitude, latitude).
       * @param {number} [maxDistance] The maximum distance (miles).
       * @throws {Kinvey.Error} `coord` must be of type: `Array.<number, number>`.
       * @returns {Kinvey.Query} The query.
       */
      near: function(field, coord, maxDistance) {
        // Validate arguments.
        if(!isArray(coord) || null == coord[0] || null == coord[1]) {
          throw new Kinvey.Error('coord argument must be of type: Array.<number, number>.');
        }

        // Cast arguments.
        coord[0] = parseFloat(coord[0]);
        coord[1] = parseFloat(coord[1]);

        // `$nearSphere` and `$maxDistance` are separate filters.
        var result = this._addFilter(field, '$nearSphere', [coord[0], coord[1]]);
        if(null != maxDistance) {
          this._addFilter(field, '$maxDistance', maxDistance);
        }
        return result;
      },

      /**
       * Adds a within box filter to the query. Requires `field` to be a coordinate
       * within the bounds of the rectangle defined by `bottomLeftCoord`,
       * `bottomRightCoord`.
       * http://docs.mongodb.org/manual/reference/operator/box/
       *
       * @param {string} field The field.
       * @param {Array.<number, number>} bottomLeftCoord The bottom left coordinate
       *          (longitude, latitude).
       * @param {Array.<number, number>} upperRightCoord The bottom right
       *          coordinate (longitude, latitude).
       * @throws {Kinvey.Error} * `bottomLeftCoord` must be of type: `Array.<number, number>`.
       *                         * `bottomRightCoord` must be of type: `Array.<number, number>`.
       * @returns {Kinvey.Query} The query.
       */
      withinBox: function(field, bottomLeftCoord, upperRightCoord) {
        // Validate arguments.
        if(!isArray(bottomLeftCoord) || null == bottomLeftCoord[0] || null == bottomLeftCoord[1]) {
          throw new Kinvey.Error('bottomLeftCoord argument must be of type: Array.<number, number>.');
        }
        if(!isArray(upperRightCoord) || null == upperRightCoord[0] || null == upperRightCoord[1]) {
          throw new Kinvey.Error('upperRightCoord argument must be of type: Array.<number, number>.');
        }

        // Cast arguments.
        bottomLeftCoord[0] = parseFloat(bottomLeftCoord[0]);
        bottomLeftCoord[1] = parseFloat(bottomLeftCoord[1]);
        upperRightCoord[0] = parseFloat(upperRightCoord[0]);
        upperRightCoord[1] = parseFloat(upperRightCoord[1]);

        var coords = [
          [bottomLeftCoord[0], bottomLeftCoord[1]],
          [upperRightCoord[0], upperRightCoord[1]]
        ];
        return this._addFilter(field, '$within', {
          $box: coords
        });
      },

      /**
       * Adds a within polygon filter to the query. Requires `field` to be a
       * coordinate within the bounds of the polygon defined by `coords`.
       * http://docs.mongodb.org/manual/reference/operator/polygon/
       *
       * @param {string} field The field.
       * @param {Array.Array.<number, number>} coords List of coordinates.
       * @throws {Kinvey.Error} `coords` must be of type `Array.Array.<number, number>`.
       * @returns {Kinvey.Query} The query.
       */
      withinPolygon: function(field, coords) {
        // Validate arguments.
        if(!isArray(coords) || 3 > coords.length) {
          throw new Kinvey.Error('coords argument must be of type: Array.Array.<number, number>.');
        }

        // Cast and validate arguments.
        coords = coords.map(function(coord) {
          if(null == coord[0] || null == coord[1]) {
            throw new Kinvey.Error('coords argument must be of type: Array.Array.<number, number>.');
          }
          return [parseFloat(coord[0]), parseFloat(coord[1])];
        });

        return this._addFilter(field, '$within', {
          $polygon: coords
        });
      },

      // Array.

      /**
       * Adds a size filter to the query. Requires `field` to be an `Array` with
       * exactly `size` members.
       * http://docs.mongodb.org/manual/reference/operator/size/
       *
       * @param {string} field Field.
       * @param {number} size Size.
       * @throws {Kinvey.Error} `size` must be of type: `number`.
       * @returns {Kinvey.Query} The query.
       */
      size: function(field, size) {
        // Cast arguments.
        if(isString(size)) {
          size = parseFloat(size);
        }

        // Validate arguments.
        if(!isNumber(size)) {
          throw new Kinvey.Error('size argument must be of type: number.');
        }

        return this._addFilter(field, '$size', size);
      },

      // Modifiers.

      /**
       * Sets the fields to select.
       *
       * @param {Array} fields Fields to select.
       * @throws {Kinvey.Error} `fields` must be of type: `Array`.
       * @returns {Kinvey.Query} The query.
       */
      fields: function(fields) {
        // Cast arguments.
        fields = fields || [];

        // Validate arguments.
        if(!isArray(fields)) {
          throw new Kinvey.Error('fields argument must be of type: Array.');
        }

        // Set fields on the top-level query.
        if(null !== this._parent) {
          this._parent.fields(fields);
        }
        else {
          this._fields = fields;
        }
        return this;
      },

      /**
       * Sets the number of documents to select.
       *
       * @param {number} [limit] Limit.
       * @throws {Kinvey.Error} `limit` must be of type: `number`.
       * @returns {Kinvey.Query} The query.
       */
      limit: function(limit) {
        // Cast arguments.
        limit = limit || null;
        if(isString(limit)) {
          limit = parseFloat(limit);
        }

        // Validate arguments.
        if(null != limit && !isNumber(limit)) {
          throw new Kinvey.Error('limit argument must be of type: number.');
        }

        // Set limit on the top-level query.
        if(null !== this._parent) {
          this._parent.limit(limit);
        }
        else {
          this._limit = limit;
        }
        return this;
      },

      /**
       * Sets the number of documents to skip from the start.
       *
       * @param {number} skip Skip.
       * @throws {Kinvey.Error} `skip` must be of type: `number`.
       * @returns {Kinvey.Query} The query.
       */
      skip: function(skip) {
        // Cast arguments.
        if(isString(skip)) {
          skip = parseFloat(skip);
        }

        // Validate arguments.
        if(!isNumber(skip)) {
          throw new Kinvey.Error('skip argument must be of type: number.');
        }

        // Set skip on the top-level query.
        if(null !== this._parent) {
          this._parent.skip(skip);
        }
        else {
          this._skip = skip;
        }
        return this;
      },

      /**
       * Adds an ascending sort modifier to the query. Sorts by `field`, ascending.
       *
       * @param {string} field Field.
       * @returns {Kinvey.Query} The query.
       */
      ascending: function(field) {
        // Add sort on the top-level query.
        if(null !== this._parent) {
          this._parent.ascending(field);
        }
        else {
          this._sort[field] = 1;
        }
        return this;
      },

      /**
       * Adds an descending sort modifier to the query. Sorts by `field`,
       * descending.
       *
       * @param {string} field Field.
       * @returns {Kinvey.Query} The query.
       */
      descending: function(field) {
        // Add sort on the top-level query.
        if(null !== this._parent) {
          this._parent.descending(field);
        }
        else {
          this._sort[field] = -1;
        }
        return this;
      },

      /**
       * Sets the sort for the query. Any existing sort parameters will be
       * discarded.
       *
       * @param {Object} [sort] Sort.
       * @throws {Kinvey.Error} `sort` must be of type: `Object`.
       * @returns {Kinvey.Query} The query.
       */
      sort: function(sort) {
        // Validate arguments.
        if(null != sort && !isObject(sort)) {
          throw new Kinvey.Error('sort argument must be of type: Object.');
        }

        // Set sort on the top-level query.
        if(null !== this._parent) {
          this._parent.sort(sort);
        }
        else {
          this._sort = sort || {};
        }
        return this;
      },

      /**
       * Returns JSON representation of the query.
       *
       * @returns {Object} JSON object-literal.
       */
      toJSON: function() {
        // If the query is part of a join, return the top-level JSON representation
        // instead.
        if(null !== this._parent) {
          return this._parent.toJSON();
        }

        // Return set of parameters.
        return {
          fields: this._fields,
          filter: this._filter,
          sort: this._sort,
          skip: this._skip,
          limit: this._limit
        };
      },

      /**
       * Adds a filter to the query.
       *
       * @private
       * @param {string} field
       * @param {string} condition Condition.
       * @param {*} value Value.
       * @returns {Kinvey.Query} The query.
       */
      _addFilter: function(field, condition, value) {
        // Initialize the field selector.
        if(!isObject(this._filter[field])) {
          this._filter[field] = {};
        }
        this._filter[field][condition] = value;
        return this;
      },

      /**
       * Joins the current query with another query using an operator.
       *
       * @private
       * @param {string} operator Operator.
       * @param {Kinvey.Query[]|Object[]} queries Queries.
       * @throws {Kinvey.Error} `query` must be of type: `Kinvey.Query[]` or `Object[]`.
       * @returns {Kinvey.Query} The query.
       */
      _join: function(operator, queries) {
        // Cast, validate, and parse arguments. If `queries` are supplied, obtain
        // the `filter` for joining. The eventual return function will be the
        // current query.
        var result = this;
        queries = queries.map(function(query) {
          if(!(query instanceof Kinvey.Query)) {
            if(isObject(query)) { // Cast argument.
              query = new Kinvey.Query(query);
            }
            else {
              throw new Kinvey.Error('query argument must be of type: Kinvey.Query[] or Object[].');
            }
          }
          return query.toJSON().filter;
        });

        // If there are no `queries` supplied, create a new (empty) `Kinvey.Query`.
        // This query is the right-hand side of the join expression, and will be
        // returned to allow for a fluent interface.
        if(0 === queries.length) {
          result = new Kinvey.Query();
          queries = [result.toJSON().filter];
          result._parent = this; // Required for operator precedence and `toJSON`.
        }

        // Join operators operate on the top-level of `_filter`. Since the `toJSON`
        // magic requires `_filter` to be passed by reference, we cannot simply re-
        // assign `_filter`. Instead, empty it without losing the reference.
        var currentQuery = {};
        for(var member in this._filter) {
          if(this._filter.hasOwnProperty(member)) {
            currentQuery[member] = this._filter[member];
            delete this._filter[member];
          }
        }

        // `currentQuery` is the left-hand side query. Join with `queries`.
        this._filter[operator] = [currentQuery].concat(queries);

        // Return the current query if there are `queries`, and the new (empty)
        // `Kinvey.Query` otherwise.
        return result;
      },

      /**
       * Post processes the raw response by applying sort, limit, and skip.
       *
       * @private
       * @param {Array} response The raw response.
       * @throws {Kinvey.Error} `response` must be of type: `Array`.
       * @returns {Array} The processed response.
       */
      _postProcess: function(response) {
        // Validate arguments.
        if(!isArray(response)) {
          throw new Kinvey.Error('response argument must be of type: Array.');
        }

        // Sorting.
        var _this = this;
        response = response.sort(function(a, b) {
          for(var field in _this._sort) {
            if(_this._sort.hasOwnProperty(field)) {
              // Find field in objects.
              var aField = nested(a, field);
              var bField = nested(b, field);

              // Elements which do not contain the field should always be sorted
              // lower.
              if(null != aField && null == bField) {
                return -1;
              }
              if(null != bField && null == aField) {
                return 1;
              }

              // Sort on the current field. The modifier adjusts the sorting order
              // (ascending (-1), or descending(1)). If the fields are equal,
              // continue sorting based on the next field (if any).
              if(aField !== bField) {
                var modifier = _this._sort[field]; // 1 or -1.
                return(aField < bField ? -1 : 1) * modifier;
              }
            }
          }
          return 0;
        });

        // Limit and skip.
        if(null !== this._limit) {
          return response.slice(this._skip, this._skip + this._limit);
        }
        return response.slice(this._skip);
      }
    };

    // Relational Data.
    // ----------------

    // Returns a shallow clone of the specified object.
    var clone = function(object) {
      var result = {};
      for(var key in object) {
        if(object.hasOwnProperty(key)) {
          result[key] = object[key];
        }
      }
      return result;
    };

    /**
     * @private
     * @namespace KinveyReference
     */
    var KinveyReference = /** @lends KinveyReference */ {
      /**
       * Retrieves relations for a document.
       * NOTE This method should be used in conjunction with local persistence.
       *
       * @param {Array|Object} document The document, or list of documents.
       * @param {Options} options Options.
       * @returns {Promise} The document.
       */
      get: function(document, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Retrieving relations for a document.', document, options);
        }

        // If a list of documents was passed in, retrieve all relations in parallel.
        if(isArray(document)) {
          var promises = document.map(function(member) {
            return KinveyReference.get(member, clone(options));
          });
          return Kinvey.Defer.all(promises);
        }

        // Cast arguments.
        options = options || {};
        options.exclude = options.exclude || [];
        options.relations = options.relations || {};

        // Temporarily reset some options to avoid infinite recursion and invoking
        // the callbacks multiple times.
        var error = options.error;
        var relations = options.relations;
        var success = options.success;
        delete options.error;
        delete options.relations;
        delete options.success;



        // We need to build a relationship mapping object
        // This is important because we might have to resolve
        // relationships as objects inside an array of existing
        // relationships.
        //
        // ala: 'month', 'month.days'
        // with an array of every month as the relationship key
        var relationMapping = {};
        Object.keys(relations).forEach(function(relation) {
          var mapping = relationMapping;
          var relationSplit = relation.split('.');
          var relationLength = relationSplit.length;
          relationSplit.forEach(function(relationStep, index) {
            if(!mapping.keys) {
              mapping.keys = {};
            }
            if(!mapping.keys[relationStep]) {
              mapping.keys[relationStep] = {};
            }

            mapping = mapping.keys[relationStep];

            if(index === relationLength - 1) {
              mapping.resolve = true;
            }
          });
        });


        //Recursively process relationships
        var resolveRelationships = function(entity, relationMapping) {
          var error;

          if(relationMapping.keys) {
            var relationshipPromises = [];

            Object.keys(relationMapping.keys).forEach(function(key) {
              var relationLevel = relationMapping.keys[key];
              if(relationLevel.resolve) {
                // Retrieve the relation(s) in parallel.
                var isKeyArray = isArray(entity[key]);
                var promises = (isKeyArray ? entity[key] : [entity[key]]).map(function(member) {
                  // Do not retrieve if the property is not a reference, or it is
                  // explicitly excluded.
                  if(null == member || 'KinveyRef' !== member._type) {
                    return Kinvey.Defer.resolve(member);
                  }

                  // Check member for property _id
                  if(member._id == null) {
                    error = new Kinvey.Error('Member does not have _id property defined. ' +
                      'It is required to resolve the relationship.');
                    return Kinvey.Defer.reject(error);
                  }

                  // Forward to the `Kinvey.User` or `Kinvey.DataStore` namespace.
                  var promise;
                  if(USERS === member._collection) {
                    promise = Kinvey.User.get(member._id, options);
                  }
                  else {
                    promise = Kinvey.DataStore.get(member._collection, member._id, options);
                  }

                  // Return the response.
                  return promise.then(function(resolvedMember) {
                    return resolveRelationships(resolvedMember, relationLevel).then(function() {
                      return resolvedMember;
                    }, function() {
                      return resolvedMember;
                    });
                  }, function() {
                    // If the retrieval failed, retain the reference.
                    return Kinvey.Defer.resolve(member);
                  });
                });


                relationshipPromises.push(
                  Kinvey.Defer.all(promises)
                  .then(function(relationshipEntities) {
                    //Once finished we need to update the original entity with our results
                    if(isKeyArray) {
                      entity[key] = relationshipEntities;
                    }
                    else {
                      entity[key] = relationshipEntities[0];
                    }
                  })
                );
              }
              else {
                relationshipPromises.push(resolveRelationships(entity[key], relationLevel));
              }
            });

            return Kinvey.Defer.all(relationshipPromises);
          }
          else {
            return Kinvey.Defer.resolve();
          }
        };

        var promise = resolveRelationships(document, relationMapping);

        // All documents are retrieved.
        return promise.then(function() {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Retrieved relations for the document.', document);
          }

          // Restore the options and return the response.
          options.error = error;
          options.relations = relations;
          options.success = success;
          return document;
        }, function(reason) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Failed to retrieve relations for the document.', document);
          }

          // Restore the options and return the error.
          options.error = error;
          options.relations = relations;
          options.success = success;
          return Kinvey.Defer.reject(reason);
        });

      },

      /**
       * Saves a document and its relations.
       *
       * @param {string} collection The collection.
       * @param {Array|Object} document The document, or list of documents.
       * @param {Options} options Options.
       * @param {boolean} [options.force] Succeed even if the relations could
       *          not be saved successfully.
       * @returns {Promise} The document.
       */
      save: function(collection, document, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Saving a document with relations.', collection, document, options);
        }

        // If a list of documents was passed in, retrieve all relations in parallel.
        if(isArray(document)) {
          var promises = document.map(function(member) {
            return KinveyReference.save(collection, member, clone(options));
          });
          return Kinvey.Defer.all(promises);
        }

        // Cast arguments.
        options = options || {};
        options.exclude = options.exclude || [];
        options.relations = options.relations || {};

        // Temporarily reset some options to avoid infinite recursion and invoking
        // the callbacks multiple times.
        var error = options.error;
        var relations = options.relations;
        var success = options.success;
        delete options.error;
        delete options.relations;
        delete options.success;

        // Re-order the relations in order of deepness, so the partial responses
        // propagate properly. Moreover, relations with the same depth can safely
        // be saved in parallel.
        var properties = [];
        relations[''] = collection; // Add the top-level document.
        Object.keys(relations).forEach(function(relation) {
          // The top-level document must be the only document with index 0.
          var index = '' === relation ? 0 : relation.split('.').length;
          properties[index] = (properties[index] || []).concat(relation);
        });

        // Prepare the response.
        var documents = {}; // Partial responses.
        var promise = Kinvey.Defer.resolve(null);

        // Save all (relational) documents. Start with the deepest relations.
        properties.reverse().forEach(function(relationalLevel) {
          promise = promise.then(function() {
            var promises = relationalLevel.map(function(property) {
              var collection = relations[property];
              var obj = nested(document, property); // The relational document.

              // Save the relation(s) in parallel.
              var isArrayRelation = isArray(obj);
              var promises = (isArrayRelation ? obj : [obj]).map(function(member) {
                // Do not save if the property is not a document or a reference
                // already, or it is explicitly excluded.
                if(null == member || 'KinveyRef' === member._type ||
                  -1 !== options.exclude.indexOf(property)) {
                  return Kinvey.Defer.resolve(member);
                }

                // To allow storing of users with references locally, use
                // `Kinvey.DataStore` if the operation does not need to notify
                // the synchronization functionality.
                var saveUsingDataStore = options.offline && false === options.track;

                // Forward to the `Kinvey.User` or `Kinvey.DataStore` namespace.
                var promise;
                if(USERS === collection && !saveUsingDataStore) {
                  // If the referenced user is new, create with `state` set to false.
                  var isNew = null == member._id;
                  options.state = isNew && '' !== property ? options.state || false : options.state;
                  promise = Kinvey.User[isNew ? 'create' : 'update'](member, options);
                }
                else {
                  promise = Kinvey.DataStore.save(collection, member, options);
                }

                // Return the response.
                return promise.then(null, function(error) {
                  // If `options.force`, succeed if the save failed.
                  if(options.force && '' !== property) {
                    return member;
                  }
                  return Kinvey.Defer.reject(error);
                });
              });

              // Return the response.
              return Kinvey.Defer.all(promises).then(function(responses) {
                // Replace the relations in the original document with references.
                var reference = responses.map(function(response) {
                  // Do not convert non-relations to references.
                  if(null == response || null == response._id) {
                    return response;
                  }
                  return {
                    _type: 'KinveyRef',
                    _collection: collection,
                    _id: response._id
                  };
                });

                // Update the original document and add the partial response.
                if(!isArrayRelation) {
                  reference = reference[0];
                  responses = responses[0];
                }
                nested(document, property, reference);
                documents[property] = responses;
              });
            });
            return Kinvey.Defer.all(promises);
          });
        });

        // All documents are saved. Replace the references in the document with the
        // actual relational document, starting with the top-level document.
        return promise.then(function() {
          var response = documents['']; // The top-level document.
          properties.reverse().forEach(function(relationalLevel) {
            relationalLevel.forEach(function(property) {
              nested(response, property, documents[property]);
            });
          });

          // Debug.
          if(KINVEY_DEBUG) {
            log('Saved the document with relations.', response);
          }

          // Restore the options and return the response.
          delete relations['']; // Remove the added top-level document.
          options.error = error;
          options.relations = relations;
          options.success = success;
          return response;
        }, function(reason) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Failed to save the document with relations.', error);
          }

          // Restore the options and return the error.
          delete relations['']; // Remove the added top-level document.
          options.error = error;
          options.relations = relations;
          options.success = success;
          return Kinvey.Defer.reject(reason);
        });
      }
    };


    // Persistence.
    // ------------

    // The library provides ways to store data in a variety of locations. By
    // default, all data will be stored in the remote backend. However, the
    // namespace below provides means to switch between the local (optionally
    // read-only) and remote backend. The interface of all backends must follow
    // CRUD for easy interoperability between backends.

    // Define a function to merge user-defined persistence options with state as
    // defined by `Kinvey.Sync`.
    var persistenceOptions = function(options) {
      var isEnabled = Kinvey.Sync.isEnabled();
      var isOnline = Kinvey.Sync.isOnline();
      options.fallback = isEnabled && isOnline && false !== options.fallback;
      options.offline = isEnabled && (!isOnline || options.offline);
      options.refresh = isEnabled && isOnline && false !== options.refresh;
      return options;
    };

    // Define a namespace to control local data expiration through a maxAge mechanism.
    var maxAge = {
      /**
       * Adds maxAge metadata entries.
       *
       * @param {Array|Object} data List of objects.
       * @param {integer} [maxAge] maximum age (seconds).
       * @returns {Array|Object} Mutated list of objects.
       */
      addMetadata: function(data, maxAge) {
        var lastRefreshedAt = new Date().toISOString();
        var multi = isArray(data);

        var response = multi ? data : [data];
        response = response.map(function(item) {
          if(null != item) {
            item._kmd = item._kmd || {};
            item._kmd.lastRefreshedAt = lastRefreshedAt;
            if(null != maxAge) {
              item._kmd.maxAge = maxAge;
            }
          }
          return item;
        });
        return multi ? response : response[0];
      },

      /**
       * Removes maxAge metadata entries.
       *
       * @param {Array|Object} data List of objects.
       * @returns {Array|Object} Mutated list of objects.
       */
      removeMetadata: function(data) {
        var multi = isArray(data);
        var response = multi ? data : [data];
        response = response.map(function(item) {
          if(null != item && null != item._kmd) {
            delete item._kmd.lastRefreshedAt;
            delete item._kmd.maxAge;
          }
          return item;
        });
        return multi ? response : response[0];
      },

      /**
       * Returns data maxAge status.
       *
       * @param {Array|Object} data List of objects.
       * @param {integer} [maxAge] Maximum age (optional).
       * @returns {boolean|Object} Status, or object if refresh is needed.
       * @throws {Kinvey.Error} The item does not have _kmd defined as a property.
       *                        It is required to get the maxAge status.
       */
      status: function(data, maxAge) {
        var needsRefresh = false;
        var response = isArray(data) ? data : [data];

        var length = response.length;
        var now = new Date().getTime();
        for(var i = 0; i < length; i += 1) {
          var item = response[i];

          // Check if item has property _kmd
          if(item._kmd == null) {
            var error = new Kinvey.Error('The item does not have _kmd defined as a property.' +
              'It is required to get the maxAge status.');
            throw error;
          }

          if(null != item && null != item._kmd && null != item._kmd.lastRefreshedAt) {
            var itemMaxAge = (maxAge || item._kmd.maxAge) * 1000; // Milliseconds.
            var lastRefreshedAt = fromISO(item._kmd.lastRefreshedAt).getTime();
            var threshold = lastRefreshedAt + itemMaxAge;

            // Verify time.
            if(now > threshold) {
              return false;
            }

            // Verify whether refresh is required.
            var refreshThreshold = lastRefreshedAt + itemMaxAge * 0.9; // 90%
            if(now > refreshThreshold) {
              needsRefresh = true;
            }
          }
        }
        return needsRefresh ? {
          refresh: true
        } : true;
      }
    };

    /**
     * @private
     * @memberof! <global>
     * @namespace Kinvey.Persistence
     */
    Kinvey.Persistence = /** @lends Kinvey.Persistence */ {
      /**
       * Performs a create operation.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      create: function(request, options) {
        // Add support for references.
        if(options.relations) {
          var collection = USERS === request.namespace ? USERS : request.collection;
          return KinveyReference.save(collection, request.data, options);
        }

        // Cast arguments.
        request.local = request.local || {};
        options = persistenceOptions(options);

        // If `options.offline`, use local.
        if(request.local.req && options.offline) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Using local persistence.');
          }

          return Kinvey.Persistence.Local.create(request, options).then(null, function(error) {
            // On rejection, if `options.fallback`, perform aggregation requests
            // against net.
            if(options.fallback && '_group' === request.id) {
              // Debug.
              if(KINVEY_DEBUG) {
                log('Local persistence failed. Use net persistence because of the fallback flag.');
              }

              options.offline = false; // Overwrite to avoid infinite recursion.
              return Kinvey.Persistence.create(request, options);
            }
            return Kinvey.Defer.reject(error);
          });
        }

        // Debug.
        if(KINVEY_DEBUG) {
          log('Using net persistence.');
        }

        // Use net. If `options.refresh`, persist the response locally.
        var promise = Kinvey.Persistence.Net.create(request, options);
        if(request.local.res && options.refresh) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Persisting the response locally.');
          }

          return promise.then(function(response) {
            // The request `data` is the response from the network.
            request.data = response;
            return Kinvey.Persistence.Local.create(request, options).then(function() {
              // Return the original response.
              return response;
            });
          });
        }
        return promise;
      },

      /**
       * Performs a read operation.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      read: function(request, options) {
        // Cast arguments.
        request.local = request.local || {};
        options = persistenceOptions(options);

        // If `options.offline`, use local.
        if(request.local.req && options.offline) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Using local persistence.');
          }

          return Kinvey.Persistence.Local.read(request, options).then(null, function(error) {
            // On rejection, if `options.fallback`, perform the request against
            // net.
            if(options.fallback) {
              // Debug.
              if(KINVEY_DEBUG) {
                log('Local persistence failed. Use net persistence because of the fallback flag.');
              }

              options.offline = false; // Overwrite to avoid infinite recursion.
              return Kinvey.Persistence.read(request, options);
            }
            return Kinvey.Defer.reject(error);
          });
        }

        // Debug.
        if(KINVEY_DEBUG) {
          log('Using net persistence.');
        }

        // Use net.
        var promise = Kinvey.Persistence.Net.read(request, options);

        // If `options.refresh`, and field selection was *not* used, persist the response locally.
        var fieldSelection = options.fields || (request.query && !isEmpty(request.query._fields));
        if(request.local.res && options.refresh && !fieldSelection) {
          return promise.then(function(response) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('Persisting the response locally.');
            }

            // Add support for references.
            var promise;
            if(options.relations) {
              var offline = options.offline;
              options.offline = true; // Force local persistence.
              options.track = false; // The documents are not subject to synchronization.
              var collection = USERS === request.namespace ? USERS : request.collection;
              promise = KinveyReference.save(collection, response, options).then(function() {
                // Restore the options.
                options.offline = offline;
                delete options.track;
              });
            }
            else { // Save at once.
              request.data = response; // The request data is the network response.
              promise = Kinvey.Persistence.Local.create(request, options);
            }

            // Return the original response.
            return promise.then(function() {
              return response;
            });
          }, function(error) {
            // If `ENTITY_NOT_FOUND`, persist the response locally by initiating a
            // delete request locally.
            if(Kinvey.Error.ENTITY_NOT_FOUND === error.name) {
              return Kinvey.Persistence.Local.destroy(request, options).then(function() {
                // Return the original response.
                return Kinvey.Defer.reject(error);
              });
            }
            return Kinvey.Defer.reject(error);
          });
        }
        return promise;
      },

      /**
       * Performs an update operation.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      update: function(request, options) {
        // Add support for references.
        if(options.relations) {
          var collection = USERS === request.namespace ? USERS : request.collection;
          return KinveyReference.save(collection, request.data, options);
        }

        // Cast arguments.
        request.local = request.local || {};
        options = persistenceOptions(options);

        // If `options.offline`, use local.
        if(request.local.req && options.offline) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Using local persistence.');
          }

          return Kinvey.Persistence.Local.update(request, options);
        }

        // Debug.
        if(KINVEY_DEBUG) {
          log('Using net persistence..');
        }

        // Use net. If `options.refresh`, persist the response locally.
        var promise = Kinvey.Persistence.Net.update(request, options);
        if(request.local.res && options.refresh) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Persisting the response locally.');
          }

          return promise.then(function(response) {
            // The request `data` is the response from the network.
            request.data = response;
            return Kinvey.Persistence.Local.update(request, options).then(function() {
              // Return the original response.
              return response;
            });
          });
        }
        return promise;
      },

      /**
       * Performs a delete operation.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      destroy: function(request, options) {
        // Cast arguments.
        request.local = request.local || {};
        options = persistenceOptions(options);

        // If `options.offline`, use local.
        if(request.local.req && options.offline) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Using local persistence.');
          }

          return Kinvey.Persistence.Local.destroy(request, options);
        }

        // Debug.
        if(KINVEY_DEBUG) {
          log('Using net persistence.');
        }

        // Use net. If `options.refresh`, persist the response locally.
        var promise = Kinvey.Persistence.Net.destroy(request, options);
        if(request.local.res && options.refresh) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Persisting the response locally.');
          }

          return promise.then(function(response) {
            // Initiate the same request against local.
            return Kinvey.Persistence.Local.destroy(request, options).then(function() {
              // Return the original response.
              return response;
            }, function(error) {
              // If `ENTITY_NOT_FOUND`, the local database was already up-to-date.
              if(Kinvey.Error.ENTITY_NOT_FOUND === error.name) {
                // Return the original response.
                return response;
              }
              return Kinvey.Defer.reject(error);
            });
          });
        }
        return promise;
      }
    };

    // Define the Request type for documentation purposes.

    /**
     * @private
     * @typedef {Object} Request
     * @property {string}       namespace    Namespace.
     * @property {string}       [collection] The collection.
     * @property {string}       [id]         The id.
     * @property {Kinvey.Query} [query]      Query.
     * @property {Object}       [flags]      Flags.
     * @property {*}            [data]       Data.
     * @property {function}     auth         Authentication.
     * @property {Object}       [local]      Cacheability of the request.
     * @property {boolean}      [local.req]  The request is executable locally.
     * @property {boolean}      [local.res]  The response is persistable locally.
     */


    // Database.
    // ---------

    // To enable local persistence, application data must be physically stored on
    // the device. The `Database` namespace exposes the API to do just that.

    /**
     * @private
     * @namespace Database
     */
    var Database = /** @lends Database */ {
      /**
       * Saves multiple (new) documents.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Object[]} documents List of documents.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      batch: methodNotImplemented('Database.batch'),

      /**
       * Deletes all documents matching the provided query.
       * NOTE This method is not transaction-safe.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      clean: methodNotImplemented('Database.clean'),

      /**
       * Counts the number of documents matching the provided query.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      count: methodNotImplemented('Database.count'),

      /**
       * Deletes a document.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {string} id The document id.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      destroy: methodNotImplemented('Database.destroy'),

      /**
       * Deletes the entire database.
       *
       * @abstract
       * @method
       * @returns {Promise} The response.
       */
      destruct: methodNotImplemented('Database.destruct'),

      /**
       * Retrieves all documents matching the provided query.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Kinvey.Query} [query] The query.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      find: methodNotImplemented('Database.find'),

      /**
       * Retrieves a document, and updates it within the same transaction.
       * NOTE This method must be transaction-safe.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Kinvey.Query} [query] The query.
       * @param {function} fn The update function.
       * @returns {Promise} The response.
       */
      findAndModify: methodNotImplemented('Database.findAndModify'),

      /**
       * Retrieves a document.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {string} id The document id.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      get: methodNotImplemented('Database.get'),

      /**
       * Performs an aggregation.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Object} aggregation The aggregation object-literal.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      group: methodNotImplemented('Database.group'),

      /**
       * Saves a (new) document.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Object} document The document.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      save: methodNotImplemented('Database.save'),

      /**
       * Updates a document.
       *
       * @abstract
       * @method
       * @param {string} collection The collection.
       * @param {Object} document The document.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      update: methodNotImplemented('Database.update'),

      /**
       * Sets the implementation of `Database` to the specified adapter.
       *
       * @method
       * @param {Object} adapter Object implementing the `Database` interface.
       */
      use: use([
        'batch', 'clean', 'count', 'destroy', 'destruct', 'find', 'findAndModify',
        'get', 'group', 'save', 'update'
      ])
    };

    // Local persistence.
    // ------------------

    // The local persistence namespace translates persistence requests into calls
    // to persist data locally. The local persistence is accessible through the
    // `Database` namespace.

    /**
     * @private
     * @memberof! <global>
     * @namespace Kinvey.Persistence.Local
     */
    Kinvey.Persistence.Local = /** @lends Kinvey.Persistence.Local */ {
      /**
       * Initiates a create request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      create: function(request, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating a create request.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Normalize â€œcollectionsâ€ of the user namespace.
        var collection = USERS === request.namespace ? USERS : request.collection;

        // The create request can be an aggregation, or (batch) save of documents.
        // The latter two change application data, and are therefore subject to
        // synchronization.
        if('_group' === request.id) { // Aggregation.
          return Database.group(collection, request.data, options);
        }

        // Add maxAge metadata.
        request.data = maxAge.addMetadata(request.data, options.maxAge);

        // (Batch) save.
        var method = isArray(request.data) ? 'batch' : 'save';
        var promise = Database[method](collection, request.data, options);
        return promise.then(function(response) {
          // If `options.offline`, the request is subject to synchronization.
          if(options.offline && false !== options.track) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('Notifying the synchronization functionality.', collection, response);
            }

            return Sync.notify(collection, response, options).then(function() {
              // Return the original response.
              return response;
            });
          }
          return response;
        });
      },

      /**
       * Initiates a create request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      read: function(request, options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating a read request.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Normalize â€œcollectionsâ€ of the user namespace.
        var collection = USERS === request.namespace ? USERS : request.collection;

        // The read request can be a count, me, query, or simple get. Neither
        // change any application data, and therefore none are subject to
        // synchronization.
        if('_count' === request.id) { // Count.
          return Database.count(collection, request.query, options);
        }
        if('_me' === request.collection) { // Me.
          // If there is an active user, attempt to retrieve its details.
          var user = Kinvey.getActiveUser();
          if(null !== user) {
            // Check user for property _id
            if(user._id == null) {
              error = new Kinvey.Error('Active user does not have the _id property defined. ' +
                'Unable to retrieve information about the user.');
              return Kinvey.Defer.reject(error);
            }

            return Database.get(collection, user._id, options).then(null, function(error) {
              // If `ENTITY_NOT_FOUND`, return all we know about the active user.
              if(error.name === Kinvey.Error.ENTITY_NOT_FOUND) {
                return user;
              }
              return Kinvey.Defer.reject(error);
            });
          }

          error = clientError(Kinvey.Error.NO_ACTIVE_USER);
          return Kinvey.Defer.reject(error);
        }

        // Query the collection, or retrieve a single document.
        var promise;
        if(null == request.id) { // Query.
          promise = Database.find(collection, request.query, options);
        }
        else { // Single document.
          promise = Database.get(collection, request.id, options);
        }
        return promise.then(function(response) {
          // Force refresh is maxAge of response data was exceeded.
          var status = maxAge.status(response, options.maxAge);
          if(false === status && Kinvey.Sync.isOnline()) {
            options.offline = false; // Force using network.
            return Kinvey.Persistence.read(request, options);
          }

          // Add support for references.
          if(options.relations) {
            return KinveyReference.get(response, options).then(function(response) {
              // Refresh in the background if required.
              if(true === status.refresh && Kinvey.Sync.isOnline()) {
                options.offline = false; // Force using network.
                Kinvey.Persistence.read(request, options);
              }

              // Return the response.
              return response;
            });
          }

          // Refresh in the background if required.
          if(true === status.refresh && Kinvey.Sync.isOnline()) {
            options.offline = false; // Force using network.
            Kinvey.Persistence.read(request, options);
          }

          // Return the response.
          return response;
        });
      },

      /**
       * Initiates a create request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      update: function(request, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating an update request.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Normalize â€œcollectionsâ€ of the user namespace.
        var collection = USERS === request.namespace ? USERS : request.collection;

        // Add maxAge metadata.
        request.data = maxAge.addMetadata(request.data, options.maxAge);

        // All update operations change application data, and are therefore subject
        // to synchronization.
        var promise = Database.update(collection, request.data, options);
        return promise.then(function(response) {
          // If `options.offline`, the response is subject to synchronization.
          if(options.offline && false !== options.track) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('Notifying the synchronization functionality.', collection, response);
            }

            return Sync.notify(collection, response, options).then(function() {
              // Return the original response.
              return response;
            });
          }
          return response;
        });
      },

      /**
       * Initiates a create request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      destroy: function(request, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating a delete request.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Normalize â€œcollectionsâ€ of the user namespace.
        var collection = USERS === request.namespace ? USERS : request.collection;

        // The delete request can be a clean or destroy of documents. Both change
        // application data, and are therefore subject to synchronization.
        var promise;
        if(null == request.id) { // Clean documents.
          promise = Database.clean(collection, request.query, options);
        }
        else { // Destroy a single document.
          promise = Database.destroy(collection, request.id, options);
        }
        return promise.then(function(response) {
          // If `options.offline`, the request is subject to synchronization.
          if(options.offline && false !== options.track) {
            // Debug.
            if(KINVEY_DEBUG) {
              log('Notifying the synchronization functionality.', collection, response);
            }

            return Sync.notify(collection, response.documents, options).then(function() {
              // Return the original response.
              return response;
            });
          }
          return response;
        });
      }
    };


    // Network persistence.
    // --------------------

    // The cached return value of `deviceInformation` function.
    var deviceInformationHeader = null;

    // The actual execution of a network request must be defined by an adapter.

    /**
     * @private
     * @memberof! <global>
     * @namespace Kinvey.Persistence.Net
     */
    Kinvey.Persistence.Net = /** @lends Kinvey.Persistence.Net */ {
      /**
       * Initiates a create request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      create: function(request, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating a create request.', arguments);
        }

        // Strip maxAge metadata.
        request.data = maxAge.removeMetadata(request.data);

        // Initiate the network request.
        request.method = 'POST';
        return Kinvey.Persistence.Net._request(request, options);
      },

      /**
       * Initiates a read request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      read: function(request, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating a read request.', arguments);
        }

        // Cast arguments.
        request.flags = request.flags || {};
        options = options || {};

        // Add support for field selection.
        if(isArray(options.fields)) {
          request.flags.fields = options.fields.join(',');
        }

        // Add support for file references.
        if(null != request.collection) {
          if(false !== options.fileTls) {
            request.flags.kinveyfile_tls = true;
          }
          if(options.fileTtl) {
            request.flags.kinveyfile_ttl = options.fileTtl;
          }
        }

        // Add support for references.
        if(options.relations) {
          // Resolve all relations not explicitly excluded.
          options.exclude = options.exclude || [];
          var resolve = Object.keys(options.relations).filter(function(member) {
            return -1 === options.exclude.indexOf(member);
          });

          if(0 !== resolve.length) {
            request.flags.retainReferences = false;
            request.flags.resolve = resolve.join(',');
          }
        }

        // Initiate the network request.
        request.method = 'GET';
        return Kinvey.Persistence.Net._request(request, options);
      },

      /**
       * Initiates an update request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      update: function(request, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating an update request.', arguments);
        }

        // Strip maxAge metadata.
        request.data = maxAge.removeMetadata(request.data);

        // Initiate the network request.
        request.method = 'PUT';
        return Kinvey.Persistence.Net._request(request, options);
      },

      /**
       * Initiates a delete request.
       *
       * @param {Request} request The request.
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      destroy: function(request, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating a delete request.', arguments);
        }

        // Initiate the network request.
        request.method = 'DELETE';
        return Kinvey.Persistence.Net._request(request, options);
      },

      /**
       * Initiates a network request to the Kinvey service.
       *
       * @private
       * @param {Request} request The request.
       * @param {string} request.method The request method.
       * @param {Options} options Options.
       * @returns {Promise}
       */
      _request: function(request, options) {
        var error;

        // Validate arguments.
        if(null == request.method) {
          error = new Kinvey.Error('request argument must contain: method.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }
        if(null == request.namespace) {
          error = new Kinvey.Error('request argument must contain: namespace.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }
        if(null == request.auth) {
          error = new Kinvey.Error('request argument must contain: auth.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Validate preconditions.
        if(null == Kinvey.appKey && Auth.None !== request.auth) {
          error = clientError(Kinvey.Error.MISSING_APP_CREDENTIALS);
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }
        if(null == Kinvey.masterSecret && options.skipBL) {
          error = clientError(Kinvey.Error.MISSING_MASTER_CREDENTIALS);
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Cast arguments.
        options.trace = options.trace || (KINVEY_DEBUG && false !== options.trace);
        options.attemptMICRefresh = false === options.attemptMICRefresh ? false : true;

        // Build, escape, and join URL segments.
        // Format: <APIHostName>/<namespace>[/<Kinvey.appKey>][/<collection>][/<id>]
        var segments = [request.namespace, Kinvey.appKey, request.collection, request.id];
        segments = segments.filter(function(value) {
          // Exclude empty optional segment. Note the required namespace cannot be
          // empty at this point (enforced above).
          return null != value;
        }).map(Kinvey.Persistence.Net.encode);
        var url = [Kinvey.APIHostName].concat(segments).join('/') + '/';

        // Build query string.
        var flags = request.flags || {};
        if(request.query) { // Add query fragments.
          var query = request.query.toJSON();
          flags.query = query.filter;
          if(!isEmpty(query.fields)) {
            flags.fields = query.fields.join(',');
          }
          if(null !== query.limit) {
            flags.limit = query.limit;
          }
          if(0 !== query.skip) {
            flags.skip = query.skip;
          }
          if(!isEmpty(query.sort)) {
            flags.sort = query.sort;
          }
        }

        // Unless `options.nocache` is false, add a cache busting query string.
        // This is useful for Android < 4.0 which caches all requests aggressively.
        if(false !== options.nocache) {
          flags._ = Math.random().toString(36).substr(2);
        }

        // Format fragments.
        var params = [];
        for(var key in flags) {
          if(flags.hasOwnProperty(key)) {
            var value = isString(flags[key]) ? flags[key] : JSON.stringify(flags[key]);
            params.push(
              Kinvey.Persistence.Net.encode(key) + '=' + Kinvey.Persistence.Net.encode(value)
            );
          }
        }

        // Append query string if there are `params`.
        if(0 < params.length) {
          url += '?' + params.join('&');
        }

        // Evaluate the device information header.
        if(null === deviceInformationHeader) {
          deviceInformationHeader = deviceInformation();
        }

        // Set headers.
        var headers = {
          Accept: 'application/json',
          'X-Kinvey-API-Version': Kinvey.API_VERSION,
          'X-Kinvey-Device-Information': deviceInformationHeader
        };

        // Append optional headers.
        options.clientAppVersion = options.clientAppVersion || Kinvey.ClientAppVersion.stringValue();
        if(options.clientAppVersion != null) {
          headers['X-Kinvey-Client-App-Version'] = (options.clientAppVersion + '');
        }
        if(null != request.data) {
          headers['Content-Type'] = 'application/json; charset=utf-8';
        }
        if(options.contentType) {
          headers['X-Kinvey-Content-Type'] = options.contentType;
        }
        if(options.skipBL) {
          headers['X-Kinvey-Skip-Business-Logic'] = 'true';
        }
        if(options.trace) {
          headers['X-Kinvey-Include-Headers-In-Response'] = 'X-Kinvey-Request-Id';
          headers['X-Kinvey-ResponseWrapper'] = 'true';
        }

        // Set the custom request properties for the request defaulting to an
        // empty object.
        options.customRequestProperties = options.customRequestProperties || {};

        // Get globally set custom request properties.
        var customRequestProperties = Kinvey.CustomRequestProperties.properties();

        // If any custom request properties exist globally, merge them into the
        // custom request properties for this request. Only global custom request
        // properties that don't already exist for this request will be added.
        // Global request properties do NOT overwrite existing custom request
        // properties for the request.
        if(customRequestProperties != null) {
          Object.keys(customRequestProperties).forEach(function(name) {
            if(!options.customRequestProperties.hasOwnProperty(name)) {
              options.customRequestProperties[name] = customRequestProperties[name];
            }
          });
        }

        // Set X-Kinvey-Custom-Request-Properties to the JSON string of the custom
        // request properties for the request. Checks to make sure the JSON string of
        // the custom request properties is less then the max bytes allowed for custom
        // request properties otherwise throws an error.
        var customRequestPropertiesHeader = JSON.stringify(options.customRequestProperties);
        var customRequestPropertiesByteCount = getByteCount(customRequestPropertiesHeader);
        if(customRequestPropertiesByteCount >= CRP_MAX_BYTES) {
          error = new Kinvey.Error('Custom request properties is ' + customRequestPropertiesByteCount +
            '. It must be less then ' + CRP_MAX_BYTES + ' bytes.');
          return wrapCallbacks(Kinvey.Defer.reject(error), options);
        }

        // Set the custom request properties header.
        headers['X-Kinvey-Custom-Request-Properties'] = customRequestPropertiesHeader;

        // Debug.
        if(KINVEY_DEBUG) {
          headers['X-Kinvey-Trace-Request'] = 'true';
          headers['X-Kinvey-Force-Debug-Log-Credentials'] = 'true';
        }

        // Authorization.
        var promise = request.auth().then(function(auth) {
          if(null !== auth) {
            // Format credentials.
            var credentials = auth.credentials;
            if(null != auth.username) {
              credentials = Kinvey.Persistence.Net.base64(auth.username + ':' + auth.password);
            }

            // Append header.
            headers.Authorization = auth.scheme + ' ' + credentials;
          }
        });

        // Invoke the network layer.
        return promise.then(function() {
          // Store the original request
          options._originalRequest = request;

          // Send the request
          var response = Kinvey.Persistence.Net.request(
            request.method,
            url,
            request.data,
            headers,
            options
          ).then(function(response) {
            // Parse the response.
            try {
              response = JSON.parse(response);
            }
            catch(e) {}

            // Debug.
            if(KINVEY_DEBUG && options.trace && isObject(response)) {
              log('Obtained the request ID.', response.headers['X-Kinvey-Request-Id']);
            }

            // Check response to GET request that we receive a
            // single entity if one is expected or an array of entities
            // if they are expected. Thrown error will reject the promise.
            if(request.method === 'GET' &&
              request.collection != null &&
              request.namespace === 'appdata') {
              var expectSingleEntity = request.id != null ? true : false;
              var error;

              if(isArray(response) && expectSingleEntity) {
                error = new Kinvey.Error('Expected a single entity as a response to ' +
                  request.method + ' ' + url + '. Received an array ' +
                  'of entities instead.');
                throw error;
              }
              else if(!isArray(response) && !expectSingleEntity) {
                error = new Kinvey.Error('Expected an array of entities as a response to ' +
                  request.method + ' ' + url + '. Received a single ' +
                  'entity instead.');
                throw error;
              }
            }

            return options.trace && isObject(response) ? response.result : response;
          }, function(response) {
            // Parse the response.
            try {
              response = JSON.parse(response);
            }
            catch(e) {}

            // If `options.trace`, extract result and headers from the response.
            var requestId = null;
            if(options.trace) {
              requestId = response.headers['X-Kinvey-Request-Id'];
              response = response.result;
            }

            // Format the response as client-side error object.
            if(null != response && null != response.error) { // Server-side error.
              response = {
                name: response.error,
                description: response.description || '',
                debug: response.debug || ''
              };

              // If `options.trace`, add the `requestId`.
              if(options.trace) {
                response.requestId = requestId;

                // Debug.
                if(KINVEY_DEBUG) {
                  log('Obtained the request ID.', requestId);
                }
              }
            }
            else { // Client-side error.
              var dict = { // Dictionary for common errors.
                abort: Kinvey.Error.REQUEST_ABORT_ERROR,
                error: Kinvey.Error.REQUEST_ERROR,
                timeout: Kinvey.Error.REQUEST_TIMEOUT_ERROR
              };
              response = clientError(dict[response] || dict.error, {
                debug: response
              });
            }

            // Reject.
            return Kinvey.Defer.reject(response);
          });

          // Handle certain errors.
          return response.then(null, function(error) {
            if(Kinvey.Error.USER_LOCKED_DOWN === error.name) {
              // Clear user credentials.
              Kinvey.setActiveUser(null);

              // Clear the cache, and return the original error.
              if('undefined' !== typeof Database) {
                var fn = function() {
                  Kinvey.Defer.reject(error);
                };
                return Kinvey.Sync.destruct().then(fn, fn);
              }
            }
            else if(Kinvey.Error.INVALID_CREDENTIALS === error.name) {
              var activeUser = Kinvey.getActiveUser();

              // Add a descriptive message to `InvalidCredentials` error so the user
              // knows whatâ€™s going on.
              if(activeUser != null && activeUser._socialIdentity != null && activeUser._socialIdentity[MIC.AUTH_PROVIDER] != null) {
                error.debug += ' It is possible the tokens used to execute the ' +
                  'request are expired. In that case, please execute ' +
                  '`Kinvey.User.logout({ force: true })`, and then log back in ' +
                  'using `Kinvey.User.MIC.loginWithAuthorizationCodeLoginPage(redirectUri)` or ' +
                  '`Kinvey.User.MIC.loginWithAuthorizationCodeAPI(username, password, redirectUri)` ' +
                  'to solve this issue.';
              }
              else {
                error.debug += ' It is possible the tokens used to execute the ' +
                  'request are expired. In that case, please execute ' +
                  '`Kinvey.User.logout({ force: true })`, and then log back in ' +
                  'using `Kinvey.User.login(username, password)` ' +
                  'to solve this issue.';
              }
            }
            return Kinvey.Defer.reject(error);
          });
        });
      },

      /**
       * Base64-encodes a value.
       *
       * @abstract
       * @method
       * @param {string} value Value.
       * @returns {string} Base64-encoded value.
       */
      base64: methodNotImplemented('Kinvey.Persistence.Net.base64'),

      /**
       * Encodes a value for use in the URL.
       *
       * @abstract
       * @method
       * @param {string} value Value.
       * @returns {string} Encoded value.
       */
      encode: methodNotImplemented('Kinvey.Persistence.Net.encode'),

      /**
       * Initiates a network request.
       *
       * @abstract
       * @method
       * @param {string}  method    Method.
       * @param {string}  url       URL.
       * @param {?Object} [body]    Body.
       * @param {Object}  [headers] Headers.
       * @param {Options} [options] Options.
       * @returns {Promise} The promise.
       */
      request: methodNotImplemented('Kinvey.Persistence.Net.request'),

      /**
       * Sets the implementation of `Kinvey.Persistence.Net` to the specified
       * adapter.
       *
       * @method
       * @param {Object} adapter Object implementing the `Kinvey.Persistence.Net`
       *          interface.
       */
      use: use(['base64', 'encode', 'request'])
    };


    // Synchronization.
    // ----------------

    // Synchronization consists of two major namespaces: `Sync` and `Kinvey.Sync`.
    // The former contains the synchronization code, as well as multiple properties
    // used to maintain the application state throughout its lifetime. The
    // `Kinvey.Sync` namespace exposes a number of methods to the outside world.
    // Most of these methods delegate back to `Sync`. Therefore, `Kinvey.Sync`
    // provides the public interface for synchronization.

    /**
     * @private
     * @namespace Sync
     */
    var Sync = /** @lends Sync */ {
      /**
       * Flag whether local persistence is enabled.
       *
       * @type {boolean}
       */
      enabled: false,

      /**
       * Flag whether the application resides in an online state.
       *
       * @type {boolean}
       */
      online: true,

      /**
       * The identifier where the synchronization metadata is stored.
       *
       * @type {string}
       */
      system: 'system.sync',

      /**
       * Counts the number of documents pending synchronization. If `collection` is
       * provided, it returns the count of that collection only.
       *
       * @param {string} [collection] The collection.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      count: function(collection, options) {
        // Cast arguments.
        options = options || {};

        // If a collection was provided, count that collection only.
        if(null != collection) {
          return Database.get(Sync.system, collection, options).then(function(response) {
            // Return the count.
            return response.size;
          }, function(error) {
            // If `ENTITY_NOT_FOUND`, there are no documents pending
            // synchronization.
            if(Kinvey.Error.ENTITY_NOT_FOUND === error.name) {
              return 0;
            }
            return Kinvey.Defer.reject(error);
          });
        }

        // Aggregate the count of all collections.
        var agg = Kinvey.Group.sum('size').toJSON();
        return Database.group(Sync.system, agg, options).then(function(response) {
          // Return the aggregation result, or 0 if the aggregation was empty.
          return response[0] ? response[0].result : 0;
        });
      },

      /**
       * Initiates a synchronization operation.
       *
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      execute: function(options) {
        // Obtain all the collections that need to be synchronized.
        var query = new Kinvey.Query().greaterThan('size', 0);
        return Database.find(Sync.system, query, options).then(function(response) {
          // Synchronize all the collections in parallel.
          var promises = response.map(function(collection) {
            return Sync._collection(collection._id, collection.documents, options);
          });
          return Kinvey.Defer.all(promises);
        });
      },

      /**
       * Handler to flag the provided `documents` for synchronization.
       *
       * @param {string} collection The collection.
       * @param {Array|Object} documents The document, or list of documents.
       * @param {Options} [options] Options.
       * @returns {Promise} The promise.
       */
      notify: function(collection, documents, options) {
        var error;

        // Update the metadata for the provided collection in a single transaction.
        return Database.findAndModify(Sync.system, collection, function(metadata) {
          // Cast arguments.
          documents = isArray(documents) ? documents : [documents];
          metadata = metadata || {
            _id: collection,
            documents: {},
            size: 0
          };

          // Add each document to the metadata ( id => timestamp ).
          documents.forEach(function(document) {
            // Check document for property _id. Thrown error will reject promise.
            if(document._id == null) {
              error = new Kinvey.Error('Document does not have _id property defined. ' +
                'It is required to do proper synchronization.');
              throw error;
            }

            if(!metadata.documents.hasOwnProperty(document._id)) {
              metadata.size += 1;
            }

            // Get metadata for the doucment.
            var timestamp = null != document._kmd ? document._kmd.lmt : null;
            var clientAppVersion = options.clientAppVersion || Kinvey.ClientAppVersion.stringValue(),
              customRequestProperties = options.customRequestProperties || {};

            // Get globally set custom request properties.
            var globalCustomRequestProperties = Kinvey.CustomRequestProperties.properties();

            // If any custom request properties exist globally, merge them into the
            // custom request properties for this document. Only global custom request
            // properties that don't already exist for this document will be added.
            // Global request properties do NOT overwrite existing custom request
            // properties for the document.
            if(globalCustomRequestProperties != null) {
              Object.keys(globalCustomRequestProperties).forEach(function(name) {
                // If the property is not already set then set it
                if(!customRequestProperties.hasOwnProperty(name)) {
                  customRequestProperties[name] = globalCustomRequestProperties[name];
                }
              });
            }

            // Store the metadata.
            metadata.documents[document._id] = {
              timestamp: timestamp,
              clientAppVersion: clientAppVersion,
              customRequestProperties: customRequestProperties
            };
          });

          // Return the new metadata.
          return metadata;
        }, options).then(function() {
          // Return an empty response.
          return null;
        });
      },

      /**
       * Synchronizes the provided collection.
       *
       * @private
       * @param {string} collection The collection.
       * @param {Object} documents Object of documents ( id => timestamp ).
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      _collection: function(collection, documents, options) {
        // Prepare the response.
        var result = {
          collection: collection,
          success: [],
          error: []
        };
        var identifiers = Object.keys(documents);

        // Read the documents
        return Sync._read(collection, documents, options).then(function(response) {
          // Step 2: categorize the documents in the collection.
          var promises = identifiers.map(function(id) {
            var document = documents[id];
            var metadata = {
              id: id,
              timestamp: document.timestamp,
              clientAppVersion: document.clientAppVersion,
              customRequestProperties: document.customRequestProperties
            };
            return Sync._document(
              collection,
              metadata, // The document metadata.
              response.local[id] || null, // The local document.
              response.net[id] || null, // The net document.
              options
            ).then(null, function(response) {
              // Rejection occurs when a conflict could not be resolved. Append the
              // id to the errors, and resolve.
              result.error.push(response.id);
              return null;
            });
          });
          return Kinvey.Defer.all(promises);
        }).then(function(responses) {
          // Step 3: commit the documents in the collection.
          var created = responses.filter(function(response) {
            return null != response && null !== response.document;
          });
          var destroyed = responses.filter(function(response) {
            return null != response && null === response.document;
          });

          // Save and destroy all documents in parallel.
          var promises = [
            Sync._save(collection, created, options),
            Sync._destroy(collection, destroyed, options)
          ];
          return Kinvey.Defer.all(promises);
        }).then(function(responses) {
          // Merge the response.
          result.success = result.success.concat(responses[0].success, responses[1].success);
          result.error = result.error.concat(responses[0].error, responses[1].error);

          // Step 4: update the metadata.
          return Database.findAndModify(Sync.system, collection, function(metadata) {
            // Remove each document from the metadata.
            result.success.forEach(function(id) {
              if(metadata.documents.hasOwnProperty(id)) {
                metadata.size -= 1;
                delete metadata.documents[id];
              }
            });

            // Return the new metadata.
            return metadata;
          }, options);
        }).then(function() {
          //console.log(result);
          // Step 5: return the synchronization result.
          return result;
        });
      },

      /**
       * Reads the provided documents using both local and network persistence.
       *
       * @private
       * @param {string} collection The collection.
       * @param {Array} documents List of documents.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      _read: function(collection, documents, options) {
        var identifiers = Object.keys(documents);
        var promises = identifiers.map(function(id) {
          var metadata = documents[id];
          var requestOptions = options || {};

          // Set options.clientAppVersion based on the metadata for the document
          requestOptions.clientAppVersion = metadata.clientAppVersion != null ? metadata.clientAppVersion : null;

          // Set options.customRequestProperties based on the metadata
          // for the document
          requestOptions.customRequestProperties = metadata.customRequestProperties != null ?
            metadata.customRequestProperties : null;

          // Build the request.
          var request = {
            namespace: USERS === collection ? USERS : DATA_STORE,
            collection: USERS === collection ? null : collection,
            query: new Kinvey.Query().contains('_id', [id]),
            auth: Auth.Default
          };

          // Read from local and net in parallel.
          return Kinvey.Defer.all([
            Kinvey.Persistence.Local.read(request, requestOptions),
            Kinvey.Persistence.Net.read(request, requestOptions)
          ]).then(function(responses) {
            return {
              local: responses[0],
              net: responses[1]
            };
          });
        });

        return Kinvey.Defer.all(promises).then(function(responses) {
          var response = {
            local: {},
            net: {}
          };
          var error;

          responses.forEach(function(composite) {
            var locals = composite.local;
            var nets = composite.net;

            locals.forEach(function(document) {
              // Check document for property _id. Thrown error will reject promise.
              if(document._id == null) {
                error = new Kinvey.Error('Document does not have _id property defined. ' +
                  'It is required to do proper synchronization.');
                throw error;
              }

              response.local[document._id] = document;
            });
            nets.forEach(function(document) {
              // Check document for property _id. Thrown error will reject promise.
              if(document._id == null) {
                error = new Kinvey.Error('Document does not have _id property defined. ' +
                  'It is required to do proper synchronization.');
                throw error;
              }

              response.net[document._id] = document;
            });
          });

          return response;
        });
      },

      /**
       * Deletes the provided documents using both local and network persistence.
       *
       * @private
       * @param {string} collection The collection.
       * @param {Array} documents List of documents.
       * @param {Options} [options] Options.
       * @returns {Array} List of document ids.
       */
      _destroy: function(collection, documents, options) {
        var promises = documents.map(function(composite) {
          var id = composite.id;
          var metadata = composite.metadata;
          var requestOptions = options || {};

          // Set options.clientAppVersion based on the metadata for the document
          requestOptions.clientAppVersion = metadata.clientAppVersion != null ? metadata.clientAppVersion : null;

          // Set options.customRequestProperties based on the metadata
          // for the document
          requestOptions.customRequestProperties = metadata.customRequestProperties != null ?
            metadata.customRequestProperties : null;

          // Build the request.
          var request = {
            namespace: USERS === collection ? USERS : DATA_STORE,
            collection: USERS === collection ? null : collection,
            query: new Kinvey.Query().contains('_id', [id]),
            auth: Auth.Default
          };

          // Delete from local and net in parallel. Deletion is an atomic action,
          // therefore the documents will either all be part of `success` or `error`.
          var promises = [
            Kinvey.Persistence.Local.destroy(request, requestOptions),
            Kinvey.Persistence.Net.destroy(request, requestOptions)
          ];

          return Kinvey.Defer.all(promises).then(function() {
            return {
              success: [id],
              error: []
            };
          }, function() {
            return {
              success: [],
              error: [id]
            };
          });
        });

        // Return one result for all the delete requests
        return Kinvey.Defer.all(promises).then(function(responses) {
          var result = {
            success: [],
            error: []
          };

          responses.forEach(function(response) {
            result.success = result.success.concat(response.success);
            result.error = result.error.concat(response.error);
          });

          return result;
        });
      },

      /**
       * Compares the local and net versions of the provided document. Fulfills
       * with the winning document, or rejects if no winner can be picked.
       *
       * @private
       * @param {string} collection The collection.
       * @param {Object} metadata The document metadata.
       * @param {?Object} local The local document.
       * @param {?Object} net The net document.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      _document: function(collection, metadata, local, net, options) {
        var error;

        // Check if metadata is provided
        if(metadata == null) {
          error = new Kinvey.Error('Missing required metadata for the document in collection ' +
            collection + '. This is required to properly sync.');
          return Kinvey.Defer.reject(error);
        }

        // Check if metadata has id property.
        if(metadata.id == null) {
          error = new Kinvey.Error('Metadata does not have id defined. This is ' +
            'required to properly sync the document in collection ' +
            collection + '.');
          return Kinvey.Defer.reject(error);
        }

        if(net != null) {
          // Check if net has property _kmd
          if(net._kmd == null) {
            error = new Kinvey.Error('The server entity does not have _kmd defined as a property. ' +
              'This is required to properly sync server entity _id ' +
              net._id + ' in collection ' + collection + '.');
            return Kinvey.Defer.reject(error);
          }

          // Check if net has property _kmd.lmt.
          if(net._kmd.lmt == null) {
            error = new Kinvey.Error('The server entity does not have _kmd.lmt defined as a ' +
              'property. This is required to properly sync servery entity ' +
              '_id ' + net._id + ' in collection ' + collection + '.');
            return Kinvey.Defer.reject(error);
          }
        }

        // Resolve if the remote copy does not exist or if both timestamps match.
        // Reject otherwise.
        if(null === net || (null != net._kmd && metadata.timestamp === net._kmd.lmt)) {
          return Kinvey.Defer.resolve({
            id: metadata.id,
            document: local,
            metadata: metadata
          });
        }

        // A conflict was detected. Attempt to resolve it by invoking the conflict
        // handler.
        if(null != options.conflict) {
          // The conflict handler should return a promise which either resolves
          // with the winning document, or gets rejected.
          return options.conflict(collection, local, net).then(function(document) {
            return {
              id: metadata.id,
              document: document,
              metadata: metadata
            };
          }, function() {
            return Kinvey.Defer.reject({
              id: metadata.id,
              document: [local, net],
              metadata: metadata
            });
          });
        }
        return Kinvey.Defer.reject({
          id: metadata.id,
          document: [local, net],
          metadata: metadata
        });
      },

      /**
       * Saves the provided documents using both local and network persistence.
       *
       * @private
       * @param {string} collection The collection.
       * @param {Array} documents List of documents.
       * @param {Options} [options] Options.
       * @returns {Array} List of document ids.
       */
      _save: function(collection, documents, options) {
        // Save documents on net.
        var error = []; // Track errors of individual update operations.
        var promises = documents.map(function(composite) {
          var document = composite.document;
          var metadata = composite.metadata;
          var requestOptions = options || {};

          // Set requestOptions.appVersion based on the metadata for the document
          requestOptions.clientAppVersion = metadata.clientAppVersion != null ? metadata.clientAppVersion : null;

          // Set requestOptions.customRequestProperties based on the metadata
          // for the document
          requestOptions.customRequestProperties = metadata.customRequestProperties != null ?
            metadata.customRequestProperties : null;

          return Kinvey.Persistence.Net.update({
            namespace: USERS === collection ? USERS : DATA_STORE,
            collection: USERS === collection ? null : collection,
            id: document._id,
            data: document,
            auth: Auth.Default
          }, requestOptions).then(null, function() {
            // Rejection should not break the entire synchronization. Instead,
            // append the document id to `error`, and resolve.
            error.push(document._id);
            return null;
          });
        });
        return Kinvey.Defer.all(promises).then(function(responses) {
          // `responses` is an `Array` of documents. Batch save all documents.
          return Kinvey.Persistence.Local.create({
            namespace: USERS === collection ? USERS : DATA_STORE,
            collection: USERS === collection ? null : collection,
            data: responses,
            auth: Auth.Default
          }, options);
        }).then(function(response) {
          // Build the final response.
          return {
            success: response.map(function(document) {
              return document._id;
            }),
            error: error
          };
        }, function() {
          // Build the final response.
          return {
            success: [],
            error: documents.map(function(document) {
              return document._id;
            })
          };
        });
      }
    };

    // Expose public methods of `Sync` as the `Kinvey.Sync` namespace.

    /**
     * @memberof! <global>
     * @namespace Kinvey.Sync
     */
    Kinvey.Sync = /** @lends Kinvey.Sync */ {
      /**
       * Counts the number of documents pending synchronization. If `collection` is
       * provided, it returns the count of that collection only.
       *
       * @param {string} [collection] The collection.
       * @param {Options} [options] Options.
       * @returns {Promise} The response.
       */
      count: function(collection, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Counting the number of documents pending synchronization.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Sync.count(collection, options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Counted the number of documents pending synchronization.', response);
          }, function(error) {
            log('Failed to count the number of documents pending synchronization.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Deletes the local database, and will reset any synchronization
       * housekeeping.
       *
       * @param {Options} options Options.
       * @returns {Promise} The response.
       */
      destruct: function(options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Deleting the local database.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Prepare the response.
        var promise = Database.destruct(options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Deleted the local database.', response);
          }, function(error) {
            log('Failed to delete the local database.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Initiates a synchronization operation.
       *
       * @param {Options}  [options]          Options.
       * @param {function} [options.conflict] The conflict handler.
       * @param {Object}   [options.user]     Login with these credentials prior
       *          to initiating the synchronization operation.
       * @returns {Promise} The response.
       */
      execute: function(options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Synchronizing the application.', arguments);
        }

        // Validate preconditions.
        if(!Kinvey.Sync.isOnline()) {
          var error = clientError(Kinvey.Error.SYNC_ERROR, {
            debug: 'Sync is not enabled, or the application resides in offline mode.'
          });
          return Kinvey.Defer.reject(error);
        }

        // Cast arguments.
        options = options || {};

        // Attempt to login with the user context prior to synchronizing.
        var promise;
        if(null != options.user) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Attempting to login with a user context.', options.user);
          }

          // Prepare the response.
          promise = Kinvey.User.login(options.user).then(function() {
            // The user is now logged in. Re-start the synchronization operation.
            delete options.user; // We donâ€™t need this anymore.
            return Kinvey.Sync.execute(options);
          });

          // Debug.
          if(KINVEY_DEBUG) {
            promise.then(null, function(error) {
              log('Failed to login with the user context.', error);
            });
          }

          // Return the response.
          delete options.success;
          return wrapCallbacks(promise, options);
        }

        // Prepare the response.
        promise = Sync.execute(options);

        // Debug.
        if(KINVEY_DEBUG) {
          promise.then(function(response) {
            log('Synchonized the application.', response);
          }, function(error) {
            log('Failed to synchronize the application.', error);
          });
        }

        // Return the response.
        return wrapCallbacks(promise, options);
      },

      /**
       * Initializes the synchronization namespace.
       *
       * @param {Object}  [options]              Options.
       * @param {boolean} [options.enable=false] Enable local persistence.
       * @param {boolean} [options.online]       The initial application state.
       * @returns {Promise} The promise.
       */
      init: function(options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Initializing the synchronization functionality.', arguments);
        }

        // Cast arguments.
        options = options || {};

        // Save applicable options.
        Sync.enabled = null != options ? options.enable : false;
        Sync.online = 'undefined' !== typeof options.online ? options.online : Sync.online;

        // Resolve immediately.
        return Kinvey.Defer.resolve(null);
      },

      /**
       * Returns whether local persistence is active.
       *
       * @returns {boolean} The enable status.
       */
      isEnabled: function() {
        return Sync.enabled;
      },

      /**
       * Returns whether the application resides in an online state.
       *
       * @returns {boolean} The online status.
       */
      isOnline: function() {
        return Sync.online;
      },

      /**
       * Switches the application state to offline.
       *
       * @returns {Promise} The promise.
       */
      offline: function() {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Switching the application state to offline.');
        }

        // Validate preconditions.
        if(!Kinvey.Sync.isEnabled()) {
          var error = clientError(Kinvey.Error.SYNC_ERROR, {
            debug: 'Sync is not enabled.'
          });
          return Kinvey.Defer.reject(error);
        }

        // Flip flag.
        Sync.online = false;

        // Resolve immediately.
        return Kinvey.Defer.resolve(null);
      },

      /**
       * Switches the application state to online.
       *
       * @param {Options} [options]           Options.
       * @param {boolean} [options.sync=true] Initiate a synchronization operation
       *          on mode change.
       * @returns {Promise} The response.
       */
      online: function(options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Switching the application state to online.', arguments);
        }

        // Validate preconditions.
        if(!Kinvey.Sync.isEnabled()) {
          var error = clientError(Kinvey.Error.SYNC_ERROR, {
            debug: 'Sync is not enabled.'
          });
          return Kinvey.Defer.reject(error);
        }

        // Cast arguments.
        options = options || {};

        // Flip flag.
        var previous = Sync.online;
        Sync.online = true;

        // Initiate a synchronization operation if the mode changed.
        if(false !== options.sync && previous !== Sync.online) {
          return Kinvey.Sync.execute(options);
        }
        return Kinvey.Defer.resolve(null);
      },

      /**
       * Prefers the local document over the net document.
       *
       * @param {string} collection The collection.
       * @param {?Object} local The local document.
       * @param {?Object} net The net document.
       * @returns {Promise} The winning document.
       */
      clientAlwaysWins: function(collection, local) {
        return Kinvey.Defer.resolve(local);
      },

      /**
       * Prefers the net document over the local document.
       *
       * @param {string} collection The collection.
       * @param {?Object} local The local document.
       * @param {?Object} net The net document.
       * @returns {Promise} The winning document.
       */
      serverAlwaysWins: function(collection, local, net) {
        return Kinvey.Defer.resolve(net);
      }
    };


    // Use `promiscuous` as `Kinvey.Defer` adapter.
    if('undefined' !== typeof root.Promise) {
      Kinvey.Defer.use({
        deferred: function() {
          var deferred = {};
          deferred.promise = new root.Promise(function(resolve, reject) {
            deferred.resolve = resolve;
            deferred.reject = reject;
          });
          return deferred;
        }
      });
    }

    /* jshint evil: true */

    /**
     * `Database` adapter for [WebSql](http://dev.w3.org/html5/webdatabase/).
     *
     * @private
     * @namespace
     */
    var WebSqlAdapter = {
      /**
       * The reference to an opened instance of Database.
       *
       * @type {Database}
       */
      db: null,

      /**
       * Returns the database name.
       *
       * @throws {Kinvey.Error} `Kinvey.appKey` must not be `null`.
       * @returns {string} The database name.
       */
      dbName: function() {
        // Validate preconditions.
        if(null == Kinvey.appKey) {
          throw new Kinvey.Error('Kinvey.appKey must not be null.');
        }
        return 'Kinvey.' + Kinvey.appKey;
      },

      /**
       * The database size (in bytes).
       * Use 1000 instead of 1024 due to Apple Safari limits.
       *
       * @default
       * @type {integer}
       */
      size: 5 * 1000 * 1000,

      /**
       * Opens a database.
       *
       * @returns {Database}
       */
      open: function() {
        return root.openDatabase(WebSqlAdapter.dbName(), 1, '', WebSqlAdapter.size);
      },

      /**
       * Executes a series of queries within a transaction.
       *
       * @param {string}   collection    The collection.
       * @param {string|Array} query     The query, or list of queries.
       * @param {Array}    [parameters]  The query parameters.
       * @param {boolean}  [write=false] Request write access in addition to read.
       * @param {Object}   [options]     Options.
       * @returns {Promise} The query result.
       */
      transaction: function(collection, query, parameters, write /*, options*/ ) {
        // Validate preconditions.
        var error;
        if(!isString(collection) || !/^[a-zA-Z0-9\-]{1,128}/.test(collection)) {
          error = clientError(Kinvey.Error.INVALID_IDENTIFIER, {
            description: 'The collection name has an invalid format.',
            debug: 'The collection name must be a string containing only ' +
              'alphanumeric characters and dashes, "' + collection + '" given.'
          });
          return Kinvey.Defer.reject(error);
        }
        var escapedCollection = '"' + collection + '"';
        var isMaster = 'sqlite_master' === collection;
        var isMulti = isArray(query);

        // Cast arguments.
        query = isMulti ? query : [
          [query, parameters]
        ];
        write = write || false;

        // If there is a database handle, re-use it.
        if(null === WebSqlAdapter.db) {
          WebSqlAdapter.db = WebSqlAdapter.open();
        }

        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain a transaction handle.
        var writeTxn = write || !isFunction(WebSqlAdapter.db.readTransaction);
        WebSqlAdapter.db[writeTxn ? 'transaction' : 'readTransaction'](function(tx) {
          // If `write`, create the collection if it does not exist yet.
          if(write && !isMaster) {
            tx.executeSql(
              'CREATE TABLE IF NOT EXISTS ' + escapedCollection + ' ' +
              '(key BLOB PRIMARY KEY NOT NULL, value BLOB NOT NULL)'
            );
          }

          // Execute the queries.
          var pending = query.length;
          var responses = [];
          query.forEach(function(parts) {
            var sql = parts[0].replace('#{collection}', escapedCollection);

            // Debug.
            if(KINVEY_DEBUG) {
              log('Executing a query.', sql, parts[1]);
            }

            // Execute the query, and append the result to the response.
            tx.executeSql(sql, parts[1], function(_, resultSet) {
              // Append the result.
              var response = {
                rowCount: resultSet.rowsAffected,
                result: []
              };
              if(resultSet.rows.length) { // Append the rows.
                for(var i = 0; i < resultSet.rows.length; i += 1) {
                  var value = resultSet.rows.item(i).value;
                  var document = isMaster ? value : JSON.parse(value);
                  response.result.push(document);
                }
              }
              responses.push(response);

              // Debug.
              if(KINVEY_DEBUG) {
                log('Executed the query.', sql, parts[1], response);
              }

              // When all queries are processed, resolve.
              // NOTE Some implementations fire the `txn` success callback at the
              // wrong time, so manually maintain a `pending` counter.
              pending -= 1;
              if(0 === pending) {
                deferred.resolve(isMulti ? responses : responses.shift());
              }
            });
          });
        }, function(err) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('Failed to execute the query.', err);
          }

          // NOTE Some implementations return the error message as only argument.
          err = isString(err) ? err : err.message;

          // Translate the error in case the collection does not exist.
          if(-1 !== err.indexOf('no such table')) {
            error = clientError(Kinvey.Error.COLLECTION_NOT_FOUND, {
              description: 'This collection not found for this app backend',
              debug: {
                collection: collection
              }
            });
          }
          else { // Other errors.
            error = clientError(Kinvey.Error.DATABASE_ERROR, {
              debug: err
            });
          }

          // Return the rejection.
          deferred.reject(error);
        });

        // Return the promise.
        return deferred.promise;
      },

      /**
       * Generates an object id.
       *
       * @param {integer} [length=24] The length of the object id.
       * @returns {string} The id.
       */
      objectID: function(length) {
        length = length || 24;
        var chars = 'abcdef0123456789';
        var result = '';
        for(var i = 0, j = chars.length; i < length; i += 1) {
          var pos = Math.floor(Math.random() * j);
          result += chars.substring(pos, pos + 1);
        }
        return result;
      },

      /**
       * @augments {Database.batch}
       */
      batch: function(collection, documents, options) {
        // If there are no documents, return.
        if(0 === documents.length) {
          return Kinvey.Defer.resolve(documents);
        }

        // Build the queries.
        var queries = [];
        documents = documents.map(function(document) {
          // Cast arguments.
          document._id = document._id || WebSqlAdapter.objectID();

          // Add the query for the document.
          queries.push([
            'REPLACE INTO #{collection} (key, value) VALUES (?, ?)', [document._id, JSON.stringify(document)]
          ]);

          // Return the document.
          return document;
        });

        // Prepare the response.
        var promise = WebSqlAdapter.transaction(collection, queries, null, true, options);

        // Return the response.
        return promise.then(function() {
          return documents;
        });
      },

      /**
       * @augments {Database.clean}
       */
      clean: function(collection, query, options) {
        var error;

        // Deleting should not take the query sort, limit, and skip into account.
        if(null != query) { // Reset.
          query.sort(null).limit(null).skip(0);
        }

        // Obtain the documents to be deleted via `WebSqlAdapter.find`.
        return WebSqlAdapter.find(collection, query, options).then(function(documents) {
          // If there are no documents matching the query, return.
          if(0 === documents.length) {
            return {
              count: 0,
              documents: []
            };
          }

          // Build the query.
          var infix = [];
          var parameters = documents.map(function(document) {
            // Check document for property _id. Thrown error will reject promise.
            if(document._id == null) {
              error = new Kinvey.Error('Document does not have _id property defined. ' +
                'Unable to clean database.');
              throw error;
            }

            infix.push('?'); // Add placeholder.
            return document._id;
          });
          var sql = 'DELETE FROM #{collection} WHERE key IN(' + infix.join(',') + ')';

          // Prepare the response.
          var promise = WebSqlAdapter.transaction(collection, sql, parameters, true, options);

          // Return the response.
          return promise.then(function(response) {
            // NOTE Some implementations do not return a `rowCount`.
            response.rowCount = null != response.rowCount ? response.rowCount : documents.length;
            return {
              count: response.rowCount,
              documents: documents
            };
          });
        });
      },

      /**
       * @augments {Database.count}
       */
      count: function(collection, query, options) {
        // Counting should not take the query sort, limit, and skip into account.
        if(null != query) { // Reset.
          query.sort(null).limit(null).skip(0);
        }

        // Forward to `WebSqlAdapter.find`, and return the response count.
        return WebSqlAdapter.find(collection, query, options).then(function(response) {
          return {
            count: response.length
          };
        });
      },

      /**
       * @augments {Database.destroy}
       */
      destroy: function(collection, id, options) {
        // Prepare the response.
        var promise = WebSqlAdapter.transaction(collection, [
          ['SELECT value FROM #{collection} WHERE key = ?', [id]],
          ['DELETE       FROM #{collection} WHERE key = ?', [id]]
        ], null, true, options);

        // Return the response.
        return promise.then(function(response) {
          // Extract the response.
          var count = response[1].rowCount;
          var documents = response[0].result;

          // NOTE Some implementations do not return a `rowCount`.
          count = null != count ? count : response[0].result.length;

          // If the document could not be found, throw an `ENTITY_NOT_FOUND` error.
          if(0 === count) {
            var error = clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
              description: 'This entity not found in the collection',
              debug: {
                collection: collection,
                id: id
              }
            });
            return Kinvey.Defer.reject(error);
          }

          // Return the count and the deleted document.
          return {
            count: count,
            documents: documents
          };
        });
      },

      /**
       * @augments {Database.destruct}
       */
      destruct: function(options) {
        // Obtain a list of all tables in the database.
        var query = 'SELECT name AS value FROM #{collection} WHERE type = ?';
        var parameters = ['table'];

        // Return the response.
        var promise = WebSqlAdapter.transaction('sqlite_master', query, parameters, false, options);
        return promise.then(function(response) {
          // If there are no tables, return.
          var tables = response.result;
          if(0 === tables.length) {
            return null;
          }

          // Drop all tables. Filter tables first to avoid attempting to delete
          // system tables (which will fail).
          var queries = tables.filter(function(table) {
            return(/^[a-zA-Z0-9\-]{1,128}/).test(table);
          }).map(function(table) {
            return ['DROP TABLE IF EXISTS \'' + table + '\''];
          });
          return WebSqlAdapter.transaction('sqlite_master', queries, null, true, options);
        }).then(function() {
          return null;
        });
      },

      /**
       * @augments {Database.find}
       */
      find: function(collection, query, options) {
        // Prepare the response.
        var sql = 'SELECT value FROM #{collection}';
        var promise = WebSqlAdapter.transaction(collection, sql, [], false, options);

        // Return the response.
        return promise.then(function(response) {
          response = response.result; // The documents.

          // Apply the query.
          if(null == query) {
            return response;
          }

          // Filters.
          response = root.sift(query.toJSON().filter, response);

          // Post process.
          return query._postProcess(response);
        }, function(error) {
          // If `COLLECTION_NOT_FOUND`, return the empty set.
          if(Kinvey.Error.COLLECTION_NOT_FOUND === error.name) {
            return [];
          }
          return Kinvey.Defer.reject(error);
        });
      },

      /**
       * @augments {Database.findAndModify}
       */
      findAndModify: function(collection, id, fn, options) {
        // Obtain the document to be modified via `WebSqlAdapter.get`.
        var promise = WebSqlAdapter.get(collection, id, options).then(null, function(error) {
          // If `ENTITY_NOT_FOUND`, use an empty object and continue.
          if(Kinvey.Error.ENTITY_NOT_FOUND === error.name) {
            return null;
          }
          return Kinvey.Defer.reject(error);
        });

        // Return the response.
        return promise.then(function(response) {
          // Apply change function and update the document via `WebSqlAdapter.save`.
          var document = fn(response);
          return WebSqlAdapter.save(collection, document, options);
        });
      },

      /**
       * @augments {Database.get}
       */
      get: function(collection, id, options) {
        // Prepare the response.
        var sql = 'SELECT value FROM #{collection} WHERE key = ?';
        var promise = WebSqlAdapter.transaction(collection, sql, [id], false, options);

        // Return the response.
        return promise.then(function(response) {
          // Extract the documents.
          var documents = response.result;

          // If the document could not be found, throw an `ENTITY_NOT_FOUND` error.
          if(0 === documents.length) {
            var error = clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
              description: 'This entity not found in the collection',
              debug: {
                collection: collection,
                id: id
              }
            });
            return Kinvey.Defer.reject(error);
          }
          return documents[0];
        }, function(error) {
          // If `COLLECTION_NOT_FOUND`, convert to `ENTITY_NOT_FOUND`.
          if(Kinvey.Error.COLLECTION_NOT_FOUND === error.name) {
            error = clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
              description: 'This entity not found in the collection',
              debug: {
                collection: collection,
                id: id
              }
            });
          }
          return Kinvey.Defer.reject(error);
        });
      },

      /**
       * @augments {Database.group}
       */
      group: function(collection, aggregation, options) {
        // Cast arguments. This casts the reduce string to reduce function.
        var reduce = aggregation.reduce.replace(/function[\s\S]*?\([\s\S]*?\)/, '');
        aggregation.reduce = new Function(['doc', 'out'], reduce);

        // Obtain documents subject to aggregation.
        var query = new Kinvey.Query({
          filter: aggregation.condition
        });
        return WebSqlAdapter.find(collection, query, options).then(function(documents) {
          // Prepare the grouping.
          var groups = {};

          // Segment documents into groups.
          documents.forEach(function(document) {
            // Determine the group the document belongs to.
            // NOTE Dot-separated (nested) fields are not supported.
            var group = {};
            for(var name in aggregation.key) {
              if(aggregation.key.hasOwnProperty(name)) {
                group[name] = document[name];
              }
            }

            // Initialize the group (if not done yet).
            var key = JSON.stringify(group);
            if(null == groups[key]) {
              groups[key] = group;
              for(var attr in aggregation.initial) { // Add initial attributes.
                if(aggregation.initial.hasOwnProperty(attr)) {
                  groups[key][attr] = aggregation.initial[attr];
                }
              }
            }

            // Run the reduce function on the group and document.
            aggregation.reduce(document, groups[key]);
          });

          // Cast the groups to the response.
          var response = [];
          for(var segment in groups) {
            if(groups.hasOwnProperty(segment)) {
              response.push(groups[segment]);
            }
          }
          return response;
        });
      },

      /**
       * @augments {Database.save}
       */
      save: function(collection, document, options) {
        // Cast arguments.
        document._id = document._id || WebSqlAdapter.objectID();

        // Build the query.
        var query = 'REPLACE INTO #{collection} (key, value) VALUES (?, ?)';
        var parameters = [document._id, JSON.stringify(document)];

        // Prepare the response.
        var promise = WebSqlAdapter.transaction(collection, query, parameters, true, options);

        // Return the response.
        return promise.then(function() {
          return document;
        });
      },

      /**
       * @augments {Database.update}
       */
      update: function(collection, document, options) {
        // Forward to `WebSqlAdapter.save`.
        return WebSqlAdapter.save(collection, document, options);
      }
    };

    // Use WebSQL adapter.
    if('undefined' !== typeof root.openDatabase && 'undefined' !== typeof root.sift) {
      Database.use(WebSqlAdapter);

      // Add `Kinvey.Query` operators not supported by `sift`.
      ['near', 'regex', 'within'].forEach(function(operator) {
        root.sift.useOperator(operator, function() {
          throw new Kinvey.Error(operator + ' query operator is not supported locally.');
        });
      });
    }


    /* jshint evil: true */

    // `Database` adapter for [IndexedDB](http://www.w3.org/TR/IndexedDB/).
    var IDBAdapter = {
      /**
       * The reference to an opened instance of IndexedDB.
       *
       * @type {IDBRequest}
       */
      db: null,

      /**
       * Returns the database name.
       *
       * @throws {Kinvey.Error} `Kinvey.appKey` must not be `null`.
       * @returns {string} The database name.
       */
      dbName: function() {
        // Validate preconditions.
        if(null == Kinvey.appKey) {
          throw new Kinvey.Error('Kinvey.appKey must not be null.');
        }
        return 'Kinvey.' + Kinvey.appKey;
      },

      /**
       * The reference to the underlying IndexedDB implementation.
       *
       * @type {IDBFactory}
       */
      impl: root.indexedDB || root.webkitIndexedDB || root.mozIndexedDB ||
        root.oIndexedDB || root.msIndexedDB,

      /**
       * Status whether the database is currently performing an upgrade operation.
       *
       * @type {boolean}
       */
      inTransaction: false,

      /**
       * Generates an object id.
       *
       * @param {integer} [length=24] The length of the object id.
       * @returns {string} The id.
       */
      objectID: function(length) {
        length = length || 24;
        var chars = 'abcdef0123456789';
        var result = '';
        for(var i = 0, j = chars.length; i < length; i += 1) {
          var pos = Math.floor(Math.random() * j);
          result += chars.substring(pos, pos + 1);
        }
        return result;
      },

      /**
       * A list of operations queued while the database was `inTransaction`.
       *
       * @type {Array.<function>}
       */
      pending: [],

      /**
       * Obtains a transaction handle to the provided collection.
       * NOTE IndexedDB automatically commits transactions that havenâ€™t been used
       * in an event loop tick. Therefore, deferreds cannot be used. See
       * https://github.com/promises-aplus/promises-spec/issues/45.
       *
       * @param {string} collection The collection.
       * @param {boolean} [write=false] `true` to request write access in addition
       *                    to read.
       * @param {function} success Success callback.
       * @param {function} error Failure callback.
       * @param {boolean} [force=false] Continue even if a concurrent transaction
       *          is active.
       */
      transaction: function(collection, write, success, error, force) {
        // Validate preconditions.
        if(!isString(collection) || !/^[a-zA-Z0-9\-]{1,128}/.test(collection)) {
          return error(clientError(Kinvey.Error.INVALID_IDENTIFIER, {
            description: 'The collection name has an invalid format.',
            debug: 'The collection name must be a string containing only ' +
              'alphanumeric characters and dashes, "' + collection + '" given.'
          }));
        }

        // Cast arguments.
        write = write || false;

        // If there is a database handle, try to be smart.
        if(null !== IDBAdapter.db) {
          // If the collection exists, obtain and return the transaction handle.
          if(IDBAdapter.db.objectStoreNames.contains(collection)) {
            var mode = write ? 'readwrite' : 'readonly';
            var txn = IDBAdapter.db.transaction([collection], mode);
            var store = txn.objectStore(collection);
            return success(store);
          }

          // The collection does not exist. If we want to read only, return an error
          // and do not create the collection.
          else if(!write) { // Do not create.
            return error(clientError(Kinvey.Error.COLLECTION_NOT_FOUND, {
              description: 'This collection not found for this app backend',
              debug: {
                collection: collection
              }
            }));
          }
        }

        // There is no database handle, or the collection needs to be created. Both
        // are done through a database upgrade operation. This operation cannot be
        // executed concurrently. Therefore, queue any concurrent operations.
        if(true !== force && IDBAdapter.inTransaction) {
          return IDBAdapter.pending.push(function() {
            IDBAdapter.transaction(collection, write, success, error);
          });
        }
        IDBAdapter.inTransaction = true; // Switch flag.

        // An upgrade operation is initiated by re-opening the database with an
        // higher version number.
        var request;
        if(null !== IDBAdapter.db) { // Re-open.
          var version = IDBAdapter.db.version + 1;
          IDBAdapter.db.close(); // Required by IE10.
          request = IDBAdapter.impl.open(IDBAdapter.dbName(), version);
        }
        else { // Open the current version.
          // Validate preconditions.
          if(null == Kinvey.appKey) {
            IDBAdapter.inTransaction = false; // Restore.
            return error(clientError(Kinvey.Error.MISSING_APP_CREDENTIALS));
          }
          request = IDBAdapter.impl.open(IDBAdapter.dbName());
        }

        // If the database is opened with an higher version than its current, the
        // `upgradeneeded` event is fired. Save the handle to the database, and
        // create the collection.
        request.onupgradeneeded = function() {
          IDBAdapter.db = request.result;
          if(write) { // Create the collection.
            IDBAdapter.db.createObjectStore(collection, {
              keyPath: '_id'
            });
          }
        };

        // The `success` event is fired after `upgradeneeded` terminates. Again,
        // save the handle to the database.
        request.onsuccess = function() {
          IDBAdapter.db = request.result;

          // If a second instance of the same IndexedDB database performs an
          // upgrade operation, the `versionchange` event is fired. Then, close the
          // database to allow the external upgrade to proceed.
          IDBAdapter.db.onversionchange = function() { // Reset.
            if(null !== IDBAdapter.db) {
              IDBAdapter.db.close();
              IDBAdapter.db = null;
            }
          };

          // Try to obtain the collection handle by recursing. Append the handlers
          // to empty the queue upon success and failure. Set the `force` flag so
          // all but the current transaction remain queued.
          var wrap = function(cb) {
            return function(arg) {
              var result = cb(arg); // The original event handler.

              // The database handle has been established, we can now safely empty
              // the queue. The queue must be emptied before invoking the concurrent
              // operations to avoid infinite recursion.
              IDBAdapter.inTransaction = false;
              if(0 !== IDBAdapter.pending.length) {
                var pending = IDBAdapter.pending;
                IDBAdapter.pending = [];
                pending.forEach(function(fn) {
                  fn();
                });
              }

              return result;
            };
          };
          IDBAdapter.transaction(collection, write, wrap(success), wrap(error), true);
        };

        // The `blocked` event is not handled. In case such an event occurs, it
        // will resolve itself since the `versionchange` event handler will close
        // the conflicting database and enable the `blocked` event to continue. We
        // do, however, need to handle any other errors.
        request.onerror = function(event) {
          error(clientError(Kinvey.Error.DATABASE_ERROR, {
            debug: event
          }));
        };
      },

      /**
       * @augments {Database.batch}
       */
      batch: function(collection, documents /*, options*/ ) {
        // If there are no documents, return.
        if(0 === documents.length) {
          return Kinvey.Defer.resolve(documents);
        }

        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain the transaction handle.
        IDBAdapter.transaction(collection, true, function(store) {
          // Save all documents in a single transaction. Instead of the `success`
          // event, bind to the `complete` event.
          var request = store.transaction;
          documents.forEach(function(document) {
            document._id = document._id || IDBAdapter.objectID();
            store.put(document);
          });
          request.oncomplete = function() {
            deferred.resolve(documents);
          };
          request.onerror = function(event) {
            var error = clientError(Kinvey.Error.DATABASE_ERROR, {
              debug: event
            });
            deferred.reject(error);
          };
        }, function(error) { // Reject.
          deferred.reject(error);
        });

        // Return the promise.
        return deferred.promise;
      },

      /**
       * @augments {Database.clean}
       */
      clean: function(collection, query, options) {
        var error;

        // Deleting should not take the query sort, limit, and skip into account.
        if(null != query) { // Reset.
          query.sort(null).limit(null).skip(0);
        }

        // Obtain the documents to be deleted via `IDBAdapter.find`.
        return IDBAdapter.find(collection, query, options).then(function(documents) {
          // If there are no documents matching the query, return.
          if(0 === documents.length) {
            return {
              count: 0,
              documents: []
            };
          }

          // Prepare the response.
          var deferred = Kinvey.Defer.deferred();

          // Obtain the transaction handle.
          IDBAdapter.transaction(collection, true, function(store) {
            // Delete all documents in a single transaction. Instead of the
            // `success` event, bind to the `complete` event.
            var request = store.transaction;
            documents.forEach(function(document) {
              // Check document for property _id. Thrown error will reject promise.
              if(document._id == null) {
                error = new Kinvey.Error('Document does not have _id property defined. ' +
                  'Unable to clean database.');
                throw error;
              }

              store['delete'](document._id);
            });
            request.oncomplete = function() {
              deferred.resolve({
                count: documents.length,
                documents: documents
              });
            };
            request.onerror = function(event) {
              var error = clientError(Kinvey.Error.DATABASE_ERROR, {
                debug: event
              });
              deferred.reject(error);
            };
          });

          // Return the promise.
          return deferred.promise;
        });
      },

      /**
       * @augments {Database.count}
       */
      count: function(collection, query, options) {
        // Counting should not take the query sort, limit, and skip into account.
        if(null != query) { // Reset.
          query.sort(null).limit(null).skip(0);
        }

        // Forward to `IDBAdapter.find`, and return the response count.
        return IDBAdapter.find(collection, query, options).then(function(response) {
          return {
            count: response.length
          };
        });
      },

      /**
       * @augments {Database.destroy}
       */
      destroy: function(collection, id /*, options*/ ) {
        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain the transaction handle.
        IDBAdapter.transaction(collection, true, function(store) {
          // Find and delete the document. If the document could not be found,
          // throw an `ENTITY_NOT_FOUND` error.
          var request = store.transaction;
          var document = store.get(id);
          store['delete'](id);
          request.oncomplete = function() {
            if(null == document.result) {
              return deferred.reject(clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
                description: 'This entity not found in the collection',
                debug: {
                  collection: collection,
                  id: id
                }
              }));
            }
            deferred.resolve({
              count: 1,
              documents: [document.result]
            });
          };
          request.onerror = function(event) {
            var error = clientError(Kinvey.Error.DATABASE_ERROR, {
              debug: event
            });
            deferred.reject(error);
          };
        }, function(error) { // Reject.
          deferred.reject(error);
        });

        // Return the promise.
        return deferred.promise;
      },

      /**
       * @augments {Database.destruct}
       */
      destruct: function( /*options*/ ) {
        // Validate preconditions.
        if(null == Kinvey.appKey) {
          var error = clientError(Kinvey.Error.MISSING_APP_CREDENTIALS);
          return Kinvey.Defer.reject(error);
        }

        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Close the database first, required by IE10.
        if(null !== IDBAdapter.db) {
          IDBAdapter.db.close();
          IDBAdapter.db = null;
        }

        // Delete the entire database.
        var request = IDBAdapter.impl.deleteDatabase(IDBAdapter.dbName());

        // Handle the `success` event.
        request.onsuccess = function() {
          deferred.resolve(null);
        };

        // The `blocked` event is not handled. In case such an event occurs, it
        // will resolve itself since the `versionchange` event handler will close
        // the conflicting database and enable the `blocked` event to continue. We
        // do, however, need to handle any other errors.
        request.onerror = function(event) {
          var error = clientError(Kinvey.Error.DATABASE_ERROR, {
            debug: event
          });
          deferred.reject(error);
        };

        // Return the response.
        return deferred.promise;
      },

      /**
       * @augments {Database.find}
       */
      find: function(collection, query /*, options*/ ) {
        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain the transaction handle.
        IDBAdapter.transaction(collection, false, function(store) {
          // Retrieve all documents.
          var request = store.openCursor();
          var response = [];
          request.onsuccess = function() {
            var cursor = request.result;
            if(null != cursor) {
              response.push(cursor.value);
              cursor['continue']();
            }
            else {
              deferred.resolve(response);
            }
          };
          request.onerror = function(event) {
            deferred.reject(clientError(Kinvey.DATABASE_ERROR, {
              debug: event
            }));
          };
        }, function(error) {
          // If the error is `COLLECTION_NOT_FOUND`, return the empty set.
          if(Kinvey.Error.COLLECTION_NOT_FOUND === error.name) {
            return deferred.resolve([]);
          }
          return deferred.reject(error);
        });

        // Return the promise.
        return deferred.promise.then(function(response) {
          // Post process the response by applying the query. If there is no query,
          // exit here.
          if(null == query) {
            return response;
          }

          // Filters.
          response = root.sift(query.toJSON().filter, response);

          // Post process.
          return query._postProcess(response);
        });
      },

      /**
       * @augments {Database.findAndModify}
       */
      findAndModify: function(collection, id, fn /*, options*/ ) {
        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain the transaction handle.
        IDBAdapter.transaction(collection, true, function(store) {
          var document = null;

          // Obtain and change the document.
          var request = store.get(id);
          request.onsuccess = function() {
            document = fn(request.result || null); // Apply change function.
            store.put(document);
          };

          // Retrieve and save the document in a single transaction. Instead of the
          // `success` event, bind to the `complete` event.
          var txn = store.transaction;
          txn.oncomplete = function() {
            deferred.resolve(document);
          };
          txn.onerror = function(event) {
            var error = clientError(Kinvey.Error.DATABASE_ERROR, {
              debug: event
            });
            deferred.reject(error);
          };
        }, function(error) { // Reject.
          deferred.reject(error);
        });

        // Return the promise.
        return deferred.promise;
      },

      /**
       * @augments {Database.get}
       */
      get: function(collection, id /*, options*/ ) {
        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain the transaction handle.
        IDBAdapter.transaction(collection, false, function(store) {
          // Retrieve the document.
          var request = store.get(id);
          request.onsuccess = function() {
            if(null != request.result) {
              return deferred.resolve(request.result);
            }
            deferred.reject(clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
              description: 'This entity not found in the collection',
              debug: {
                collection: collection,
                id: id
              }
            }));
          };
          request.onerror = function(event) { // Reject.
            deferred.reject(clientError(Kinvey.Error.DATABASE_ERROR, {
              debug: event
            }));
          };
        }, function(error) { // Reject.
          // If the error is `COLLECTION_NOT_FOUND`, convert to `ENTITY_NOT_FOUND`.
          if(Kinvey.Error.COLLECTION_NOT_FOUND === error.name) {
            error = clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
              description: 'This entity not found in the collection',
              debug: {
                collection: collection,
                id: id
              }
            });
          }
          deferred.reject(error);
        });

        // Return the promise.
        return deferred.promise;
      },

      /**
       * @augments {Database.group}
       */
      group: function(collection, aggregation, options) {
        // Cast arguments. This casts the reduce string to reduce function.
        var reduce = aggregation.reduce.replace(/function[\s\S]*?\([\s\S]*?\)/, '');
        aggregation.reduce = new Function(['doc', 'out'], reduce);

        // Obtain documents subject to aggregation.
        var query = new Kinvey.Query({
          filter: aggregation.condition
        });
        return IDBAdapter.find(collection, query, options).then(function(documents) {
          // Prepare the grouping.
          var groups = {};

          // Segment documents into groups.
          documents.forEach(function(document) {
            // Determine the group the document belongs to.
            // NOTE Dot-separated (nested) fields are not supported.
            var group = {};
            for(var name in aggregation.key) {
              if(aggregation.key.hasOwnProperty(name)) {
                group[name] = document[name];
              }
            }

            // Initialize the group (if not done yet).
            var key = JSON.stringify(group);
            if(null == groups[key]) {
              groups[key] = group;
              for(var attr in aggregation.initial) { // Add initial attributes.
                if(aggregation.initial.hasOwnProperty(attr)) {
                  groups[key][attr] = aggregation.initial[attr];
                }
              }
            }

            // Run the reduce function on the group and document.
            aggregation.reduce(document, groups[key]);
          });

          // Cast the groups to the response.
          var response = [];
          for(var segment in groups) {
            if(groups.hasOwnProperty(segment)) {
              response.push(groups[segment]);
            }
          }
          return response;
        });
      },

      /**
       * @augments {Database.save}
       */
      save: function(collection, document /*, options*/ ) {
        // Cast arguments.
        document._id = document._id || IDBAdapter.objectID();

        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain the transaction handle.
        IDBAdapter.transaction(collection, true, function(store) {
          // Save the document.
          var request = store.put(document);
          request.onsuccess = function() {
            deferred.resolve(document);
          };
          request.onerror = function(event) {
            var error = clientError(Kinvey.Error.DATABASE_ERROR, {
              debug: event
            });
            deferred.reject(error);
          };
        }, function(error) { // Reject.
          deferred.reject(error);
        });

        // Return the promise.
        return deferred.promise;
      },

      /**
       * @augments {Database.update}
       */
      update: function(collection, document, options) {
        // Forward to `IDBAdapter.save`.
        return IDBAdapter.save(collection, document, options);
      }
    };

    // Use IndexedDB adapter.
    if('undefined' !== typeof IDBAdapter.impl && 'undefined' !== typeof root.sift) {
      Database.use(IDBAdapter);

      // Add `Kinvey.Query` operators not supported by `sift`.
      ['near', 'regex', 'within'].forEach(function(operator) {
        root.sift.useOperator(operator, function() {
          throw new Kinvey.Error(operator + ' query operator is not supported locally.');
        });
      });
    }


    // `Social` adapter for performing the OAuth flow.
    var SocialAdapter = {
      /**
       * @augments {Social.facebook}
       */
      facebook: function(options) {
        return SocialAdapter.oAuth2('facebook', options);
      },

      /**
       * @augments {Social.google}
       */
      google: function(options) {
        return SocialAdapter.oAuth2('google', options);
      },

      /**
       * @augments {Social.linkedIn}
       */
      linkedIn: function(options) {
        return SocialAdapter.oAuth1('linkedIn', options);
      },

      /**
       * @augments {Social.twitter}
       */
      twitter: function(options) {
        return SocialAdapter.oAuth1('twitter', options);
      },

      /**
       * Performs the oAuth1.0a authorization flow.
       *
       * @param {string} provider The provider.
       * @param {Options} [options] Options.
       * @returns {Promise} The oAuth1.0a tokens.
       */
      oAuth1: function(provider, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Obtaining OAuth1.0a credentials for a provider.', arguments);
        }

        // Step 1: obtain a request token.
        return SocialAdapter.requestToken(provider, options).then(function(tokens) {
          // Check for errors.
          if(tokens.error || tokens.denied) {
            var error = clientError(Kinvey.Error.SOCIAL_ERROR, {
              debug: tokens
            });
            return Kinvey.Defer.reject(error);
          }

          // Return the tokens.
          return {
            oauth_token: tokens.oauth_token,
            oauth_token_secret: tokens.oauth_token_secret,
            oauth_verifier: tokens.oauth_verifier
          };
        }).then(function(tokens) {
          // Step 2: convert the request token into an access token.
          return Kinvey.Persistence.Net.create({
            namespace: USERS,
            data: tokens,
            flags: {
              provider: provider,
              step: 'verifyToken'
            },
            auth: Auth.App
          }, options);
        }).then(function(tokens) {
          // Step 3: utilize the access token.
          options._provider = provider; // Hack `Kinvey.User.login`.
          return tokens;
        });
      },

      /**
       * Performs the oAuth2.0 authorization flow.
       *
       * @param {string} provider The provider.
       * @param {Options} [options] Options.
       * @returns {Promise} The oAuth2.0 tokens.
       */
      oAuth2: function(provider, options) {
        // Debug.
        if(KINVEY_DEBUG) {
          log('Obtaining OAuth2.0 credentials for a provider.', arguments);
        }

        // Generate a unique token to protect against CSRF.
        options.state = Math.random().toString(36).substr(2);

        // Step 1: obtain an access token.
        return SocialAdapter.requestToken(provider, options).then(function(tokens) {
          var error;

          // The state tokens should match.
          if(tokens.state !== options.state) {
            error = clientError(Kinvey.Error.SOCIAL_ERROR, {
              debug: 'The state parameters did not match (CSRF attack?).'
            });
            return Kinvey.Defer.reject(error);
          }

          // Check for errors.
          if(tokens.error) {
            error = clientError(Kinvey.Error.SOCIAL_ERROR, {
              debug: tokens
            });
            return Kinvey.Defer.reject(error);
          }

          // Return the tokens.
          return {
            access_token: tokens.access_token,
            expires_in: tokens.expires_in
          };
        });
      },

      /**
       * Obtains a request token.
       *
       * @param {string} provider The provider.
       * @param {Options} options Options.
       * @returns {Promise} The response and tokens.
       */
      requestToken: function(provider, options) {
        // Popup blockers only allow opening a dialog at this moment. The popup
        // location will be updated later.
        var blank = 'about:blank';
        var popup = root.open(blank, 'KinveyOAuth2');

        // Open the login dialog. This step consists of getting the dialog url,
        // after which the dialog is opened.
        var redirect = options.redirect || root.location.toString();
        return Kinvey.Persistence.Net.create({
          namespace: USERS,
          data: {
            redirect: redirect,
            state: options.state
          },
          flags: {
            provider: provider,
            step: 'requestToken'
          },
          auth: Auth.App
        }, options).then(function(response) {
          // Obtain the tokens from the login dialog.
          var deferred = Kinvey.Defer.deferred();

          // Set the popup location.
          if(null != popup) {
            popup.location = response.url;
          }

          // Popup management.
          var elapsed = 0; // Time elapsed since opening the popup.
          var interval = 100; // ms.
          var timer = root.setInterval(function() {
            var error;

            // The popup was blocked.
            if(null == popup) {
              root.clearTimeout(timer); // Stop listening.

              // Return the response.
              error = clientError(Kinvey.Error.SOCIAL_ERROR, {
                debug: 'The popup was blocked.'
              });
              deferred.reject(error);
            }

            // The popup closed unexpectedly.
            else if(popup.closed) {
              root.clearTimeout(timer); // Stop listening.

              // Return the response.
              error = clientError(Kinvey.Error.SOCIAL_ERROR, {
                debug: 'The popup was closed unexpectedly.'
              });
              deferred.reject(error);
            }

            // The user waited too long to reply to the authorization request.
            else if(options.timeout && elapsed > options.timeout) { // Timeout.
              root.clearTimeout(timer); // Stop listening.
              popup.close();

              // Return the response.
              error = clientError(Kinvey.Error.SOCIAL_ERROR, {
                debug: 'The authorization request timed out.'
              });
              deferred.reject(error);
            }

            // The popup is still active, check its location.
            else {
              // Firefox will throw an exception when `popup.location.host` has
              // a different origin.
              var host = false;
              try {
                host = blank !== popup.location.toString();
              }
              catch(e) {}

              // Continue if the popup was redirected back to our domain.
              if(host) {
                root.clearTimeout(timer); // Stop listening.

                // Extract tokens from the url.
                var location = popup.location;
                var tokenString = location.search.substring(1) + '&' + location.hash.substring(1);
                var tokens = SocialAdapter.tokenize(tokenString);
                if(null != response.oauth_token_secret) { // OAuth 1.0a.
                  tokens.oauth_token_secret = response.oauth_token_secret;
                }
                deferred.resolve(tokens);

                // Close the popup.
                popup.close();
              }
            }

            // Update elapsed time.
            elapsed += interval;
          }, interval);

          // Return the promise.
          return deferred.promise;
        });
      },

      /**
       * Tokenizes a string.
       *
       * @example foo=bar&baz=qux -> { foo: "bar", baz: "qux" }
       * @param {string} string The token string.
       * @returns {Object} The tokens.
       */
      tokenize: function(string) {
        var tokens = {};
        string.split('&').forEach(function(pair) {
          var segments = pair.split('=', 2).map(root.decodeURIComponent);
          if(segments[0]) {
            tokens[segments[0]] = segments[1];
          }
        });
        return tokens;
      }
    };

    // Use the browser adapter.
    Social.use(SocialAdapter);

    // Provide integration with Backbone (used by Titanium Alloy) if available. 
    if('undefined' !== typeof Backbone) {

      /* global _: true */

      // Backbone.
      // ---------

      // All Backbone shim functionality will be appended to `Kinvey.Backbone`.

      /**
       * @memberof! <global>
       * @namespace Kinvey.Backbone
       */
      Kinvey.Backbone = /** @lends Kinvey.Backbone */ {
        /**
         * Returns the active user as `Kinvey.Backbone.User` instance.
         *
         * @returns {?Kinvey.Backbone.User} The user model, or `null` if there is no
         *            active user.
         */
        getActiveUser: function() {
          var user = Kinvey.getActiveUser();
          return null !== user ? new Kinvey.Backbone.User(user) : null;
        }
      };

      // Error-handling.
      // ---------------

      // Backbone errors.
      /**
       * @memberof Kinvey.Error
       * @constant
       * @default
       */
      Kinvey.Error.NOT_LOGGED_IN = 'NotLoggedIn';

      /**
       * Not logged in.
       *
       * @constant
       * @type {Object}
       * @default
       */
      ClientError[Kinvey.Error.NOT_LOGGED_IN] = {
        name: Kinvey.Error.NOT_LOGGED_IN,
        description: 'This user is not logged in.',
        debug: ''
      };

      // Utils.
      // ------

      // Define the Sync mixin.
      /**
       * @private
       * @namespace SyncMixin
       */
      var SyncMixin = /** @lends SyncMixin */ {
        /**
         * Invokes the persistence layer.
         * See [Backbone.js](http://backbonejs.org/#Sync).
         *
         * @member
         * @default
         * @type {Kinvey.Backbone.Sync}
         */
        sync: function() {
          return Kinvey.Backbone.Sync.apply(this, arguments);
        }
      };

      // Helper function to wrap the optional callbacks with a default success and
      // error callback.
      var backboneWrapCallbacks = function(model, options, mutate) {
        // Cast arguments.
        mutate = 'undefined' === typeof mutate ? true : mutate;

        // Extend the success callback.
        var success = options.success;
        options.success = function(response) {
          // If `mutate`, update the model.
          if(mutate) {
            if(model instanceof Backbone.Model) {
              if(!model.set(model.parse(response, options), options)) {
                return false;
              }
            }
            else { // Update the collection.
              var method = options.reset ? 'reset' : 'set';
              if(!model[method]) { // Backbone < 1.0.0 does not have the set method.
                // If 0.9.9 & 0.9.10, use update. Otherwise, use reset.
                method = isFunction(model.update) ? 'update' : 'reset';
              }
              model[method](response, options);
            }
          }

          // Invoke the application-level success handler.
          if(success) {
            success(model, response, options);
          }

          // Trigger the `sync` event.
          if(mutate) {
            model.trigger('sync', model, response, options);
          }
        };

        // Extend the error callback.
        var error = options.error;
        options.error = function(response) {
          // Invoke the application-level error handler.
          if(error) {
            error(model, response, options);
          }

          // Trigger the `error` event.
          if(mutate) {
            model.trigger('error', model, response, options);
          }
        };
      };

      // Deferreds.
      // ----------

      // Helper function to translate a `Kinvey.Defer` to a Backbone compatible
      // promise. This helper is necessary because jQuery â€œpromisesâ€ are
      // [not really](http://domenic.me/2012/10/14/youre-missing-the-point-of-promises/)
      // promises. If Backbone relies on Zepto, return the Kinvey promise as Zepto
      // does not have the concept of deferreds.
      var kinveyToBackbonePromise = function(kinveyPromise, options) {
        // Backbone expects multiple arguments as part of the resolve or reject
        // handler. Add these here.
        var promise = kinveyPromise.then(function(value) {
          var args = options.xhr ? [options.xhr.statusText, options.xhr] : [];
          return [value].concat(args);
        }, function(reason) {
          var args = options.xhr ? [options.xhr.statusText, options.xhr] : [null, null];
          return Kinvey.Defer.reject(args.concat([reason]));
        });

        // If Backbone does not rely on jQuery, return the Kinvey promise.
        if('undefined' === typeof jQuery || 'undefined' === typeof jQuery.Deferred) {
          return promise;
        }

        // Convert the Kinvey promise into a jQuery deferred and return it.
        var deferred = jQuery.Deferred();
        promise.then(function(args) {
          deferred.resolve.apply(deferred, args);
        }, function(args) {
          deferred.reject.apply(deferred, args);
        });
        return deferred.promise();
      };

      // Data Store.
      // -----------

      // Expose a `Kinvey.Backbone` model and collection mixin which can be used to
      // extend Backboneâ€™s model and collection. Mixins follow the
      // [mixin](http://ricostacruz.com/backbone-patterns/#mixins) pattern.

      // Define the model mixin. It preseeds the modelsâ€™ `id`, as well as its `sync`
      // function.

      /**
       * @memberof! <global>
       * @mixin Kinvey.Backbone.ModelMixin
       * @borrows SyncMixin.sync as sync
       */
      Kinvey.Backbone.ModelMixin = _.extend({}, SyncMixin, /** @lends Kinvey.Backbone.ModelMixin */ {
        /**
         * The modelsâ€™ unique key.
         * See [Backbone.js.](http://backbonejs.org/#Model-idAttribute).
         *
         * @default
         * @type {string}
         */
        idAttribute: '_id',

        /**
         * List of the modelsâ€™ relations.
         *
         * @default
         * @type {Array}
         */
        relations: []
      });

      // Define the collection mixin. It preseeds the `sync`, and adds the
      // aggregation and query related methods.

      /**
       * @memberof! <global>
       * @mixin Kinvey.Backbone.CollectionMixin
       * @borrows SyncMixin.sync as sync
       */
      Kinvey.Backbone.CollectionMixin = _.extend({},
        SyncMixin,
        /** @lends Kinvey.Backbone.CollectionMixin */
        {
          /**
           * The collectionsâ€™ query, applied to the clean and fetch methods.
           *
           * @type {Kinvey.Query}
           */
          query: null,

          /**
           * Cleans the collection.
           *
           * @param {Object} [options] Options.
           * @returns {Promise} The response, status, and xhr objects.
           */
          clean: function(options) {
            // Cast arguments.
            options = options ? _.clone(options) : {};
            options.parse = 'undefined' === typeof options.parse ? true : options.parse;
            backboneWrapCallbacks(this, options);

            // Invoke the persistence layer.
            return this.sync('delete', this, options);
          },

          /**
           * Counts the number of documents in the collection.
           *
           * @param {Object} options Options.
           * @returns {Promise} The response, status, and xhr objects.
           */
          count: function(options) {
            // Cast arguments.
            options = _.clone(options) || {};
            options.subject = this; // Used by the persistence layer.
            backboneWrapCallbacks(this, options, false);

            // Prepare the response.
            var collection = _.result(this, 'url');
            var query = options.query || this.query;
            var promise;
            if(USERS === collection) {
              promise = Kinvey.User.count(query, options);
            }
            else {
              promise = Kinvey.DataStore.count(collection, query, options);
            }

            // Return the response.
            return kinveyToBackbonePromise(promise, options);
          },

          /**
           * Performs a group operation.
           *
           * @param {Kinvey.Aggregation} aggregation The aggregation.
           * @param {Object} options Options.
           * @returns {Promise} The response, status, and xhr objects.
           */
          group: function(aggregation, options) {
            // Cast arguments.
            options = _.clone(options) || {};
            options.subject = this; // Used by the persistence layer.
            backboneWrapCallbacks(this, options, false);

            // Apply query.
            var query = options.query || this.query;
            if(null != query) {
              aggregation.query(query);
            }

            // Prepare the response.
            var collection = _.result(this, 'url');
            var promise;
            if(USERS === collection) {
              promise = Kinvey.User.group(aggregation, options);
            }
            else {
              promise = Kinvey.DataStore.group(collection, aggregation, options);
            }

            // Return the response.
            return kinveyToBackbonePromise(promise, options);
          }
        }
      );

      // Metadata.
      // ---------

      // The `Kinvey.Metadata` methods are mixed into Backbone models. To maintain
      // the correct context, keep a `_metadata` property. Internally, the metadata
      // (and ACL) operate on the models `attributes` property.
      // NOTE Modifying the metadata (including the ACL) wonâ€™t emit `change` events.

      // Helper function to lazy-initialize the metadata instance.
      var backboneWrapMetadata = function(fn) {
        return function() {
          if(null === this._metadata) {
            this._metadata = new Kinvey.Metadata(this.attributes);
          }
          return fn.apply(this._metadata, arguments);
        };
      };

      // Extend the mixin with the metadata functionality.
      _.extend(Kinvey.Backbone.ModelMixin, /** @lends Kinvey.Backbone.ModelMixin */ {
        // The email verification metadata method is added in
        // `Kinvey.Backbone.UserMixin`.

        /**
         * The modelsâ€™ metadata.
         *
         * @private
         * @type {Kinvey.Metadata}
         */
        _metadata: null,

        /**
         * Returns the modelsâ€™ ACL.
         *
         * @method
         * @returns {Kinvey.Acl}
         */
        getAcl: backboneWrapMetadata(Kinvey.Metadata.prototype.getAcl),

        /**
         * Returns the date when the entity was created.
         *
         * @method
         * @returns {?Date} Created at date, or `null` if not set.
         */
        getCreatedAt: backboneWrapMetadata(Kinvey.Metadata.prototype.getCreatedAt),

        /**
         * Returns the date when the entity was last modified.
         *
         * @method
         * @returns {?Date} Last modified date, or `null` if not set.
         */
        getLastModified: backboneWrapMetadata(Kinvey.Metadata.prototype.getLastModified),

        /**
         * Sets the modelsâ€™ ACL.
         *
         * @param {Kinvey.Acl} acl The acl.
         * @returns {Backbone.Model} The model.
         */
        setAcl: function() {
          backboneWrapMetadata(Kinvey.Metadata.prototype.setAcl).apply(this, arguments);
          return this;
        }
      });

      // Users.
      // ------

      // Expose a `Kinvey.Backbone` user model and user collection mixin can be used
      // to extend Backboneâ€™s model and collection.

      // Define the general user mixin. It preseeds the `url`.
      /**
       * @private
       * @namespace UserMixin
       */
      var UserMixin = /** @lends UserMixin */ {
        /**
         * The modelsâ€™ resource location.
         * See [Backbone.js](http://backbonejs.org/#Model-url).
         *
         * @default
         * @type {string}
         */
        url: USERS
      };

      // Define the user model and collection mixins.

      /**
       * @memberof! <global>
       * @mixin Kinvey.Backbone.UserMixin
       * @mixes Kinvey.Backbone.ModelMixin
       * @borrows UserMixin.url as url
       */
      Kinvey.Backbone.UserMixin = _.extend({},
        Kinvey.Backbone.ModelMixin, UserMixin,
        /** @lends Kinvey.Backbone.UserMixin */
        {
          /**
           * Links a social identity to the user.
           *
           * @param {string} provider The provider.
           * @param {Object} [options] Options.
           * @returns {Promise} The model, response, and options objects.
           */
          connect: function(provider, options) {
            // Cast arguments.
            options = options ? _.clone(options) : {};
            options.parse = 'undefined' === typeof options.parse ? true : options.parse;
            options.subject = this; // Used by the persistence layer.
            backboneWrapCallbacks(this, options);

            // Return the response.
            var promise = Kinvey.Social.connect(this.attributes, provider, options);
            return kinveyToBackbonePromise(promise, options);
          },

          /**
           * Removes a social identity from the user.
           *
           * @param {string} provider The provider.
           * @param {Object} [options] Options.
           * @returns {Promise} The model, response, and options objects.
           */
          disconnect: function(provider, options) {
            // Cast arguments.
            options = options ? _.clone(options) : {};
            options.parse = 'undefined' === typeof options.parse ? true : options.parse;
            options.subject = this; // Used by the persistence layer.
            backboneWrapCallbacks(this, options);

            // Return the response.
            var promise = Kinvey.Social.disconnect(this.attributes, provider, options);
            return kinveyToBackbonePromise(promise, options);
          },

          /**
           * Returns the email verification status.
           *
           * @method
           * @returns {?Object} The email verification status, or `null` if not set.
           */
          getEmailVerification: backboneWrapMetadata(Kinvey.Metadata.prototype.getEmailVerification),

          /**
           * Returns whether the user is logged in.
           *
           * @returns {boolean}
           */
          isLoggedIn: function() {
            var user = Kinvey.getActiveUser();
            if(null !== user) {
              var kmd = this.get('_kmd');
              return null != kmd && kmd.authtoken === user._kmd.authtoken;
            }
            return false;
          },

          /**
           * Logs in an existing user.
           *
           * @param {Object|string} usernameOrData Username, or user data.
           * @param {string} [password] Password.
           * @param {Object} [options] Options.
           * @returns {Promise} The model, response, and options objects.
           */
          login: function(usernameOrData, password, options) {
            // Cast arguments.
            options = _.clone(isObject(usernameOrData) ? password : options) || {};
            options.parse = 'undefined' === typeof options.parse ? true : options.parse;
            options.subject = this; // Used by the persistence layer.
            backboneWrapCallbacks(this, options);

            // Return the response.
            var promise = Kinvey.User.login(usernameOrData, password, options);
            return kinveyToBackbonePromise(promise, options);
          },

          /**
           * Logs out the user.
           *
           * @param {Object} [options] Options.
           * @returns {Promise} The model, response, and options objects.
           */
          logout: function(options) {
            // Cast arguments.
            options = options ? _.clone(options) : {};
            options.parse = 'undefined' === typeof options.parse ? true : options.parse;
            options.subject = this; // Used by the persistence layer.
            backboneWrapCallbacks(this, options);

            // Validate preconditions.
            var promise;
            if(!this.isLoggedIn()) {
              var error = clientError(Kinvey.Error.NOT_LOGGED_IN);
              promise = Kinvey.Defer.reject(error);
              wrapCallbacks(promise, options);
            }
            else {
              promise = Kinvey.User.logout(options);
            }

            // Return the response.
            return kinveyToBackbonePromise(promise, options);
          },

          /**
           * Retrieves information on the user.
           *
           * @param {Options} [options] Options.
           * @returns {Promise} The model, response, and options objects.
           */
          me: function(options) {
            // Cast arguments.
            options = options ? _.clone(options) : {};
            options.parse = 'undefined' === typeof options.parse ? true : options.parse;
            options.subject = this; // Used by the persistence layer.
            backboneWrapCallbacks(this, options);

            // Validate preconditions.
            var promise;
            if(!this.isLoggedIn()) {
              var error = clientError(Kinvey.Error.NOT_LOGGED_IN);
              promise = Kinvey.Defer.reject(error);
              wrapCallbacks(promise, options);
            }
            else {
              promise = Kinvey.User.me(options);
            }

            // Return the response.
            return kinveyToBackbonePromise(promise, options);
          }
        }
      );

      /**
       * @memberof! <global>
       * @mixin Kinvey.Backbone.StaticUserMixin
       */
      Kinvey.Backbone.StaticUserMixin = /** @lends Kinvey.Backbone.StaticUserMixin */ {
        /**
         * Requests e-mail verification for a user.
         *
         * @param {string} username Username.
         * @param {Options} [options] Options.
         * @returns {Promise} The response, status, and xhr objects.
         */
        verifyEmail: function(username, options) {
          // Cast arguments.
          options = options || {};

          // Return the response.
          var promise = Kinvey.User.verifyEmail(username, options);
          return kinveyToBackbonePromise(promise, options);
        },

        /**
         * Requests a username reminder for a user.
         *
         * @param {string} email E-mail.
         * @param {Options} [options] Options.
         * @returns {Promise} The response, status, and xhr objects.
         */
        forgotUsername: function(email, options) {
          // Cast arguments.
          options = options || {};

          // Return the response.
          var promise = Kinvey.User.forgotUsername(email, options);
          return kinveyToBackbonePromise(promise, options);
        },

        /**
         * Requests a password reset for a user.
         *
         * @param {string} username Username.
         * @param {Options} [options] Options.
         * @returns {Promise} The response, status, and xhr objects.
         */
        resetPassword: function(username, options) {
          // Cast arguments.
          options = options || {};

          // Return the response.
          var promise = Kinvey.User.resetPassword(username, options);
          return kinveyToBackbonePromise(promise, options);
        },

        /**
         * Checks whether a username exists.
         *
         * @param {string} username Username to check.
         * @param {Options} [options] Options.
         * @returns {Promise} The response, status, and xhr objects.
         */
        exists: function(username, options) {
          // Cast arguments.
          options = options || {};

          // Return the response.
          var promise = Kinvey.User.exists(username, options);
          return kinveyToBackbonePromise(promise, options);
        },

        /**
         * Restores a previously disabled user.
         *
         * @param {string} id User id.
         * @param {Options} [options] Options.
         * @returns {Promise} The response, status, and xhr objects.
         */
        restore: function(id, options) {
          // Cast arguments.
          options = options || {};

          // Return the response.
          var promise = Kinvey.User.restore(id, options);
          return kinveyToBackbonePromise(promise, options);
        }
      };

      /**
       * @memberof! <global>
       * @mixin Kinvey.Backbone.UserCollectionMixin
       * @mixes Kinvey.Backbone.CollectionMixin
       * @borrows UserMixin.url as url
       */
      Kinvey.Backbone.UserCollectionMixin = _.extend(
        _.omit(Kinvey.Backbone.CollectionMixin, 'clean'), // Users cannot be cleaned.
        UserMixin
      );

      // Persistence.
      // ------------

      // The `Kinvey.Backbone.Sync` method translates a Backbone CRUD method to
      // either a `Kinvey.DataStore` or `Kinvey.User` method.

      /**
       * Returns an object containing all (nested) relations of the specified model.
       *
       * @param {string} mode The mode, read or write.
       * @param {Backbone.Model} model The model.
       * @throws {Kinvey.Error} collection or relatedModel must be set on the
       *           relation.
       * @returns {Object} The relations to in- and exclude.
       */
      var backboneRelations = function(mode, model) {
        // Prepare the response.
        var exclude = [];
        var relations = {};

        // The exclude property to check.
        var prop = 'read' === mode ? 'autoFetch' : 'autoSave';

        // Helper function to add relations to the stack.
        var stack = [];
        var addToStack = function(relations, depth, prefix) {
          relations.forEach(function(relation) {
            stack.push({
              relation: relation,
              depth: depth || 0,
              prefix: prefix || null
            });
          });
        };
        addToStack(model.relations || []);

        // Traverse the stack and add the relations to the response.
        var item;
        while(null != (item = stack.shift())) {
          var depth = item.depth;
          var prefix = item.prefix;
          var relation = item.relation;

          // Include relations up to 10 levels deep.
          if(10 === depth) {
            continue;
          }

          // Obtain the relationsâ€™ prototype (if any).
          var relatedModel = null;
          if(relation.relatedModel) {
            // `relatedModel` is either a string resolving to a global scope object,
            // or a reference to a `Backbone.AssociatedModel` class.
            relatedModel = (root[relation.relatedModel] || relation.relatedModel).prototype;
          }

          // Obtain, validate, and cast the collection.
          var collection = relation.collection || _.result(relatedModel, 'url');
          if(null == collection) {
            throw new Kinvey.Error('collection or relatedModel must be set on the relation.');
          }
          if(0 === collection.indexOf('/')) { // Strip the leading slash (if any).
            collection = collection.substr(1);
          }

          // Add the relation.
          var key = null !== prefix ? prefix + '.' + relation.key : relation.key;
          relations[key] = collection;
          if(false === relation[prop]) {
            exclude.push(key);
          }

          // Add any nested relations to the stack.
          if(false !== relation[prop] && null != relatedModel && !isEmpty(relatedModel.relations)) {
            addToStack(relatedModel.relations, depth + 1, key);
          }
        }

        // Return the response.
        return {
          exclude: exclude,
          relations: relations
        };
      };

      /**
       * Translates and invokes a Kinvey method from a Backbone CRUD method.
       *
       * @param {string} method The CRUD method.
       * @param {string} collection The collection.
       * @param {?string} id The document id (if any).
       * @param {?Object} document The document (if any).
       * @param {Object} options Options.
       * @returns {Promise} The response.
       */
      var backboneToKinveyCRUD = function(method, collection, id, data, options) {
        // Cast arguments. An explicit `id` should override `data._id`.
        if(null != id && isObject(data)) {
          data._id = id;
        }

        // Use a query if `id` and `data` is not a document.
        var query = null == id && (!isObject(data) || isArray(data));

        // Translate Backbone methods to Kinvey methods.
        var namespace = USERS === collection ? Kinvey.User : Kinvey.DataStore;
        var methodMap = {
          create: namespace[USERS === collection ? 'create' : 'save'],
          read: query ? namespace.find : namespace.get,
          update: namespace.update,
          'delete': query ? namespace.clean : namespace.destroy
        };

        // Build arguments. Both `Kinvey.DataStore` and `Kinvey.User` expect the
        // document id or data, together with `options`. `Kinvey.DataStore`, however,
        // requires an initial collection argument.
        var args = [
          query ? options.query : ('read' === method || 'delete' === method ? id : data),
          options
        ];
        if(USERS !== collection) {
          args.unshift(collection);
        }

        // Invoke the Kinvey method.
        return methodMap[method].apply(namespace, args);
      };

      /**
       * Persist a Backbone model to the Kinvey backend.
       *
       * @memberof! <global>
       * @function Kinvey.Backbone.Sync
       * @param {string} method The CRUD method.
       * @param {Object} model The model to be saved, or the collection to be read.
       * @param {Object} options Callbacks, and request options.
       * @returns {Promise} The response.
       */
      Kinvey.Backbone.Sync = function(method, model, options) {
        var error;

        // Cast and validate arguments.
        options.query = options.query || model.query; // Attach a (optional) query.
        options.subject = model; // Used by the persistence layer.

        // Extend the success handler to translate `silentFail` to silent when
        // executing inside the Kinvey core.
        var silent = options.silent;
        var success = options.success;
        options.silent = options.silentFail || false;
        options.success = function(response) {
          options.silent = silent; // Reset.

          // Invoke the application-level success handler.
          if(success) {
            success(response);
          }
        };

        // Obtain the url and document data.
        var data = options.attrs || model.toJSON(options);
        var url = options.url || _.result(model, 'url');
        if(null == url) {
          error = new Kinvey.Error('model or options argument must contain: url.');
          return kinveyToBackbonePromise(Kinvey.Defer.reject(error), options);
        }

        // Strip the leading slash (if any).
        if(0 === url.indexOf('/')) {
          url = url.substr(1);
        }

        // Extract the collection and document id from the url.
        var segments = url.split('/');
        var collection = segments[0];
        var id = segments[1] || data._id || null;

        // Add support for references for both collections and models.
        var relations = model.model ? model.model.prototype.relations : model.relations;
        if(!isEmpty(relations)) {
          var mode = 'read' === method ? 'read' : 'write';
          relations = backboneRelations(mode, this.model ? this.model.prototype : this);
          options.exclude = relations.exclude;
          options.relations = relations.relations;
        }

        // Translate to `Kinvey` core function call and return the response.
        var promise = backboneToKinveyCRUD(method, collection, id, data, options);
        return kinveyToBackbonePromise(promise, options);
      };


      // Export.

      // Extend Backbone model and collection to provide built-in models and
      // collections for entities and users. Even though the user model and
      // collection are close to the entity model and collection mixins, no
      // no inheritance is applied:
      // Kinvey.Backbone.User is not an instance of Kinvey.Backbone.Model.

      // By default, extend `Backbone.Model`. However, for better integration with
      // references, use `Backbone.AssociatedModel` instead if it is available.
      var backboneModel;
      if('undefined' !== typeof Backbone.AssociatedModel) {
        backboneModel = Backbone.AssociatedModel;
      }
      else {
        backboneModel = Backbone.Model;
      }

      // Define the `Kinvey.Backbone` classes.

      /**
       * The Kinvey.Backbone.Model class.
       *
       * @memberof! <global>
       * @class Kinvey.Backbone.Model
       * @extends Backbone.Model
       * @mixes Kinvey.Backbone.ModelMixin
       */
      Kinvey.Backbone.Model = backboneModel.extend(Kinvey.Backbone.ModelMixin);

      /**
       * The Kinvey.Backbone.Collection class.
       *
       * @memberof! <global>
       * @class Kinvey.Backbone.Collection
       * @extends Backbone.Collection
       * @mixes Kinvey.Backbone.CollectionMixin
       */
      Kinvey.Backbone.Collection = Backbone.Collection.extend(
        // The mixin does not have access to the parent class, therefore the
        // functionality below is only available on `Kinvey.Backbone.Collection`.
        _.extend({}, Kinvey.Backbone.CollectionMixin, /** @lends Kinvey.Backbone.Collection# */ {
          /**
           * The model class that the collection contains.
           * See [Backbone.js](http://backbonejs.org/#Collection-model).
           *
           * @default
           * @type {Kinvey.Backbone.Model}
           */
          model: Kinvey.Backbone.Model,

          /**
           * Initializes the collection.
           * See [Backbone.js](http://backbonejs.org/#Collection-constructor).
           *
           * @param {Array} [models] List of models.
           * @param {Object} [options] Options.
           * @param {Kinvey.Query} [options.query] The collection query.
           * @throws {Kinvey.Error} `options.query` must be of type: `Kinvey.Query`.
           */
          initialize: function(models, options) {
            // Call parent.
            var result = Backbone.Collection.prototype.initialize.apply(this, arguments);

            // Cast arguments.
            options = options || {};

            // Validate arguments.
            if(null != options.query && !(options.query instanceof Kinvey.Query)) {
              throw new Kinvey.Error('options.query argument must be of type: Kinvey.Query.');
            }
            this.query = options.query;

            // Return the parentâ€™s response.
            return result;
          }
        })
      );


      // Define the `Kinvey.Backbone` classes.

      /**
       * The Kinvey.Backbone.User class.
       *
       * @memberof! <global>
       * @class Kinvey.Backbone.User
       * @extends Backbone.Model
       * @mixes Kinvey.Backbone.UserMixin
       */
      Kinvey.Backbone.User = backboneModel.extend(
        Kinvey.Backbone.UserMixin, // Class properties.
        Kinvey.Backbone.StaticUserMixin // Static properties.
      );

      /**
       * The Kinvey.Backbone.UserCollection class.
       *
       * @memberof! <global>
       * @class Kinvey.Backbone.UserCollection
       * @extends Backbone.Collection
       * @mixes Kinvey.Backbone.UserCollectionMixin
       */
      Kinvey.Backbone.UserCollection = Backbone.Collection.extend(
        // The mixin does not have access to the parent class, therefore the
        // functionality below is only available on `Kinvey.Backbone.UserCollection`.
        _.extend({}, Kinvey.Backbone.UserCollectionMixin, /** @lends Kinvey.Backbone.UserCollection# */ {
          /**
           * The model class that the collection contains.
           * See [Backbone.js](http://backbonejs.org/#Collection-model).
           *
           * @default
           * @type {Kinvey.Backbone.User}
           */
          model: Kinvey.Backbone.User,

          /**
           * Initializes the collection.
           * See [Backbone.js](http://backbonejs.org/#Collection-constructor).
           * NOTE `initialize` is identical for both the entity and user collection.
           *
           * @method
           * @param {Array} [models] List of users.
           * @param {Object} [options] Options.
           * @param {Kinvey.Query} [options.query] The collection query.
           * @throws {Kinvey.Error} `options.query` must be of type: `Kinvey.Query`.
           */
          initialize: Kinvey.Backbone.Collection.prototype.initialize
        })
      );

    }

    // Determine whether the application is native or runs in the browser.
    var isMobileWeb = 'mobileweb' === Titanium.Platform.getName();

    // Helper function to invoke
    // [TiPlatformConnect](https://github.com/k0sukey/TiPlatformConnect) to link a
    // social identity.
    var tiPlatformConnect = function(provider, options) {
      // Debug.
      if(KINVEY_DEBUG) {
        log('Obtaining a social identity.', arguments);
      }

      // Validate arguments.
      options = options || {};
      if(null == options.consumerKey) {
        throw new Kinvey.Error('options argument must contain: consumerKey.');
      }
      if(null == options.consumerSecret) {
        throw new Kinvey.Error('options argument must contain: consumerSecret.');
      }

      // Prepare the response.
      var deferred = Kinvey.Defer.deferred();

      // Invoke the `TiPlatformConnect` plugin.
      var adapter = root.__KinveySocialAdapter[provider](options);
      adapter.addEventListener('login', function(event) {
        // Upon success, fulfill the promise with the obtained access tokens.
        if(event.success) {
          return deferred.resolve({
            consumer_key: options.consumerKey,
            consumer_secret: options.consumerSecret,
            access_token: event.accessTokenKey,
            access_token_secret: event.accessTokenSecret
          });
        }

        // Failed to obtain the access tokens, reject the promise.
        var error = clientError(Kinvey.Error.SOCIAL_ERROR, {
          description: event.error,
          debug: event
        });
        deferred.reject(error);
      });

      // Trigger the authorization flow.
      adapter.authorize();

      // Debug.
      if(KINVEY_DEBUG) {
        deferred.promise.then(function(response) {
          log('Obtained the social identity.', response);
        }, function(error) {
          log('Failed to obtain a social identity.', error);
        });
      }

      // Return the response.
      return deferred.promise;
    };

    // `Social` adapter for Titanium.
    var TiSocialAdapter = {
      /**
       * http://docs.appcelerator.com/titanium/latest/#!/api/Modules.Facebook
       * NOTE The built-in Titaium Facebook module can act buggy. Exact use case at
       * http://developer.appcelerator.com/question/116915
       *
       * @augments {Social.facebook}
       * @param {string} options.appId         The Facebook App Id.
       * @param {Array}  [options.permissions] Additional Facebook permissions.
       * @throws {Kinvey.Error} `options` must contain: `appId`.
       */
      facebook: function(options) {
        var error;

        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating the Facebook OAuth2.0 flow.', arguments);
        }

        // Validate arguments.
        options = options || {};
        if(null == options.appId) {
          error = new Kinvey.Error('options argument must contain: appId.');
          return Kinvey.Defer.reject(error);
        }

        // Prepare the response.
        var deferred = Kinvey.Defer.deferred();

        // Obtain a reference to the Titanium Facebook adapter.
        var TiFacebook = isMobileWeb ? Titanium.Facebook : require('facebook');
        TiFacebook.appid = options.appId;
        TiFacebook.permissions = options.permissions || TiFacebook.permissions || [];

        // Register the event listener.
        var listener = function(event) {
          TiFacebook.removeEventListener('login', listener); // Cleanup.

          // Debug.
          if(KINVEY_DEBUG) {
            log('Received the Facebook login response.', event);
          }

          // On success, fulfill with the obtained oAuth2.0 token.
          if(event.success) {
            var expires = TiFacebook.getExpirationDate().getTime();
            return deferred.resolve({
              access_token: TiFacebook.getAccessToken(),
              expires_in: root.parseInt((expires - new Date().getTime()) / 1000, 10)
            });
          }

          // On failure, reject with the error.
          var error = clientError(Kinvey.Error.SOCIAL_ERROR, {
            debug: event
          });
          deferred.reject(error);
        };
        TiFacebook.addEventListener('login', listener);

        // Trigger the authorization flow.
        if(TiFacebook.loggedIn) { // If already logged in, fire event manually.
          TiFacebook.fireEvent('login', {
            success: true
          });
        }
        else {
          TiFacebook.authorize();
        }

        // Debug.
        if(KINVEY_DEBUG) {
          deferred.promise.then(function(response) {
            log('Obtained the Facebook OAuth2.0 tokens.', response);
          }, function(error) {
            log('Failed to obtain the Facebook OAuth2.0 tokens.', error);
          });
        }

        // Return the response.
        return deferred.promise;
      },

      /**
       * @augments {Social.google}
       */
      google: isMobileWeb ? SocialAdapter.google : function(options) {
        // Cast arguments.
        options = options || {};
        options.scope = [ // https://developers.google.com/+/api/oauth#scopes
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email'
        ].join(' ');

        // Forward to `tiPlatformConnect`.
        return tiPlatformConnect('Google', options);
      },

      /**
       * @augments {Social.linkedIn}
       */
      linkedIn: isMobileWeb ? SocialAdapter.linkedIn : function(options) {
        // Forward to `tiPlatformConnect`.
        return tiPlatformConnect('Linkedin', options);
      },

      /**
       * @augments {Social.twitter}
       */
      twitter: isMobileWeb ? SocialAdapter.twitter : function(options) {
        // Forward to `tiPlatformConnect`.
        return tiPlatformConnect('Twitter', options);
      }
    };

    // Apply the adapter.
    Social.use(TiSocialAdapter);


    // `Storage` adapter for Titanium.

    // The storage methods are executed in the background. Therefore, implement a
    // queue to force the background processes to execute serially.
    var storagePromise = Kinvey.Defer.resolve(null);

    /**
     * @private
     * @namespace
     */
    var TiAppStorage = {
      /**
       * @augments {Storage._destroy}
       */
      _destroy: function(key) {
        // Remove the item on our turn.
        storagePromise = storagePromise.then(function() {
          Titanium.App.Properties.removeProperty(key);
          return Kinvey.Defer.resolve(null);
        });
        return storagePromise;
      },

      /**
       * @augments {Storage._get}
       */
      _get: function(key) {
        // Retrieve the item on our turn.
        storagePromise = storagePromise.then(function() {
          var value = Titanium.App.Properties.getObject(key, null);
          return Kinvey.Defer.resolve(value);
        });
        return storagePromise;
      },

      /**
       * @augments {Storage._save}
       */
      _save: function(key, value) {
        // Save the item on our turn.
        storagePromise = storagePromise.then(function() {
          Titanium.App.Properties.setObject(key, value);
          return Kinvey.Defer.resolve(null);
        });
        return storagePromise;
      }
    };

    // Use the adapter.
    Storage.use(TiAppStorage);

    /* jshint evil: true */

    // `Database` adapter for Titaniumsâ€™
    // [Database](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Database).
    // This works for native platforms only, mobileweb can *not* use this.
    var TiDatabaseAdapter = {
      /**
       * Returns the database name.
       *
       * @throws {Kinvey.Error} `Kinvey.appKey` must not be `null`.
       * @returns {string} The database name.
       */
      dbName: function() {
        // Validate preconditions.
        if(null == Kinvey.appKey) {
          throw new Kinvey.Error('Kinvey.appKey must not be null.');
        }
        return 'Kinvey.' + Kinvey.appKey;
      },

      /**
       * Executes a query.
       *
       * @param {string} collection The table name.
       * @param {string|Array} query The query, or list of queries.
       * @param {Array} [parameters] The query parameters.
       * @param {Object} options Options.
       * @param {function} [options.progress] Progress function, invoked after
       *                     each query in `query`.
       * @returns {Promise} The query result.
       */
      execute: function(collection, query, parameters, options) {
        // Validate preconditions.
        if(!isString(collection) || !/^[a-zA-Z0-9\-]{1,128}/.test(collection)) {
          var error = clientError(Kinvey.Error.INVALID_IDENTIFIER, {
            description: 'The collection name has an invalid format.',
            debug: 'The collection name must be a string containing only ' +
              'alphanumeric characters and dashes, "' + collection + '" given.'
          });
          return Kinvey.Defer.reject(error);
        }
        var escapedCollection = '\'' + collection + '\'';
        var isMulti = isArray(query);

        // Cast arguments.
        options = options || {};
        query = isMulti ? query : [
          [query, parameters]
        ];

        // Obtain a database handle. Any exceptions thrown will be converted into
        // an error object.
        try {
          var db = Titanium.Database.open(TiDatabaseAdapter.dbName());
          db.execute('BEGIN TRANSACTION'); // Start a transaction.

          // Create the collection if it does not exist yet.
          db.execute(
            'CREATE TABLE IF NOT EXISTS ' + escapedCollection + ' ' +
            '(key BLOB PRIMARY KEY NOT NULL, value BLOB NOT NULL)'
          );

          // Execute the queries.
          var response = query.map(function(parts) {
            var sql = parts[0].replace('#{collection}', escapedCollection);

            // Debug.
            if(KINVEY_DEBUG) {
              log('Executing a query.', sql, parts[1]);
            }

            // Prepare the response.
            var res = db.execute(sql, parts[1]);
            var response = {
              rowCount: db.getRowsAffected(),
              result: null
            };

            // Add the result if the result set is available.
            if(null != res) {
              response.result = [];
              while(res.isValidRow()) {
                var document = JSON.parse(res.fieldByName('value'));
                response.result.push(document);
                res.next(); // Proceed.
              }
              res.close();
            }

            // If `options.progress`, notify observer of progress.
            if(null != options.progress) {
              options.progress(collection, response, query);
            }

            // Debug.
            if(KINVEY_DEBUG) {
              log('Executed the query.', response);
            }

            // Return the response.
            return response;
          });

          // Commit the transaction.
          db.execute('COMMIT TRANSACTION');

          // Close the database.
          db.close();

          // Return the response.
          return Kinvey.Defer.resolve(isMulti ? response : response.shift());
        }
        catch(e) { // Low-level database error.
          // Debug.
          if(KINVEY_DEBUG) {
            log('Failed to execute the query.', e.message);
          }

          // Return the rejection.
          var error = clientError(Kinvey.Error.DATABASE_ERROR, {
            debug: e.message
          });
          return Kinvey.Defer.reject(error);
        }
      },

      /**
       * Generates an object id.
       *
       * @param {integer} [length=24] The length of the object id.
       * @returns {string} The id.
       */
      objectID: function(length) {
        length = length || 24;
        var chars = 'abcdef0123456789';
        var result = '';
        for(var i = 0, j = chars.length; i < length; i += 1) {
          var pos = Math.floor(Math.random() * j);
          result += chars.substring(pos, pos + 1);
        }
        return result;
      },

      /**
       * @augments {Database.batch}
       */
      batch: function(collection, documents, options) {
        // If there are no documents, return.
        if(0 === documents.length) {
          return Kinvey.Defer.resolve(documents);
        }

        // Build the queries.
        var queries = [];
        documents = documents.map(function(document) {
          // Cast arguments.
          document._id = document._id || TiDatabaseAdapter.objectID();

          // Add the query for the document.
          queries.push([
            'INSERT OR REPLACE INTO #{collection} (key, value) VALUES (?, ?)', [document._id, JSON.stringify(document)]
          ]);

          // Return the document.
          return document;
        });

        // Prepare the response.
        var promise = TiDatabaseAdapter.execute(collection, queries, null, options);

        // Return the response.
        return promise.then(function() {
          return documents;
        });
      },

      /**
       * @augments {Database.clean}
       */
      clean: function(collection, query, options) {
        var error;

        // Deleting should not take the query sort, limit, and skip into account.
        if(null != query) { // Reset.
          query.sort(null).limit(null).skip(0);
        }

        // Obtain the documents to be deleted via `TiDatabaseAdapter.find`.
        return TiDatabaseAdapter.find(collection, query, options).then(function(documents) {
          // If there are no documents matching the query, return.
          if(0 === documents.length) {
            return {
              count: 0,
              documents: []
            };
          }

          // Build the query.
          var infix = [];
          var parameters = documents.map(function(document) {
            // Check document for property _id. Thrown error will reject promise.
            if(document._id == null) {
              error = new Kinvey.Error('Document does not have _id property defined. ' +
                'Unable to clean database.');
              throw error;
            }

            infix.push('?'); // Add placeholder.
            return document._id;
          });
          var sql = 'DELETE FROM #{collection} WHERE key IN(' + infix.join(',') + ')';

          // Prepare the response.
          var promise = TiDatabaseAdapter.execute(collection, sql, parameters, options);

          // Return the response.
          return promise.then(function(response) {
            return {
              count: response.rowCount,
              documents: documents
            };
          });
        });
      },

      /**
       * @augments {Database.count}
       */
      count: function(collection, query, options) {
        // Counting should not take the query sort, limit, and skip into account.
        if(null != query) { // Reset.
          query.sort(null).limit(null).skip(0);
        }

        // Forward to `TiDatabaseAdapter.find`, and return the response count.
        return TiDatabaseAdapter.find(collection, query, options).then(function(response) {
          return {
            count: response.length
          };
        });
      },

      /**
       * @augments {Database.destroy}
       */
      destroy: function(collection, id, options) {
        // Prepare the response.
        var promise = TiDatabaseAdapter.execute(collection, [
          ['SELECT value FROM #{collection} WHERE key = ?', [id]],
          ['DELETE       FROM #{collection} WHERE key = ?', [id]]
        ], null, options);

        // Return the response.
        return promise.then(function(response) {
          // Extract the response.
          var count = response[1].rowCount;
          var documents = response[0].result;

          // If the document could not be found, throw an `ENTITY_NOT_FOUND` error.
          if(0 === count) {
            var error = clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
              description: 'This entity not found in the collection',
              debug: {
                collection: collection,
                id: id
              }
            });
            return Kinvey.Defer.reject(error);
          }

          // Return the count and the deleted document.
          return {
            count: count,
            documents: documents
          };
        });
      },

      /**
       * @augments {Database.destruct}
       */
      destruct: function( /*options*/ ) {
        // Validate preconditions.
        var error;
        if(null == Kinvey.appKey) {
          error = clientError(Kinvey.Error.MISSING_APP_CREDENTIALS);
          return Kinvey.Defer.reject(error);
        }

        // Obtain a database handle. Any exceptions thrown will be converted into
        // an error object.
        try {
          var db = Titanium.Database.open(TiDatabaseAdapter.dbName());

          // Delete the entire database. The exact mechanism used differs between
          // Android and iOS.
          if(db.remove) { // Android.
            db.remove();
            return Kinvey.Defer.resolve(null);
          }
          if(db.file && db.file.deleteFile()) { // iOS.
            return Kinvey.Defer.resolve(null);
          }

          // The mechanisms to delete the database is not implemented for this
          // platform.
          error = clientError(Kinvey.Error.DATABASE_ERROR, {
            debug: 'The mechanism to delete the database is not implemented for this platform.'
          });
          return Kinvey.Defer.reject(error);
        }
        catch(e) { // Low-level database error.
          error = clientError(Kinvey.Error.DATABASE_ERROR, {
            debug: e.message
          });
          return Kinvey.Defer.reject(error);
        }
      },

      /**
       * @augments {Database.find}
       */
      find: function(collection, query, options) {
        // Prepare the response.
        var sql = 'SELECT value FROM #{collection}';
        var promise = TiDatabaseAdapter.execute(collection, sql, [], options);

        // Return the response.
        return promise.then(function(response) {
          response = response.result; // The documents.

          // Apply the query.
          if(null == query) {
            return response;
          }

          // Filters.
          response = root.sift(query.toJSON().filter, response);

          // Post process.
          return query._postProcess(response);
        });
      },

      /**
       * @augments {Database.findAndModify}
       */
      findAndModify: function(collection, id, fn, options) {
        // Cast arguments.
        options = options || {};

        // Use the `progress` option to change the document between queries.
        var document = null;
        options.progress = function(collection, response, query) {
          document = fn(response.result[0] || null); // Apply change function.

          // Set the correct upsert query parameter.
          query[1][1][1] = JSON.stringify(document);
          delete options.progress; // Run only once.
        };

        // Prepare the response. The second upsert query parameter will be
        // overwritten by the `progress` function above. If this fails for some
        // reason, a NULL constraint violation will be thrown.
        var promise = TiDatabaseAdapter.execute(collection, [
          ['SELECT value FROM #{collection} WHERE key = ?', [id]],
          ['INSERT OR REPLACE INTO #{collection} (key, value) VALUES (?, ?)', [id, null]]
        ], null, options);

        // Return the response.
        return promise.then(function() {
          return document;
        });
      },

      /**
       * @augments {Database.get}
       */
      get: function(collection, id, options) {
        // Prepare the response.
        var sql = 'SELECT value FROM #{collection} WHERE key = ?';
        var promise = TiDatabaseAdapter.execute(collection, sql, [id], options);

        // Return the response.
        return promise.then(function(response) {
          // Extract the documents.
          var documents = response.result || [];

          // If the document could not be found, throw an `ENTITY_NOT_FOUND` error.
          if(0 === documents.length) {
            var error = clientError(Kinvey.Error.ENTITY_NOT_FOUND, {
              description: 'This entity not found in the collection',
              debug: {
                collection: collection,
                id: id
              }
            });
            return Kinvey.Defer.reject(error);
          }
          return documents[0];
        });
      },

      /**
       * @augments {Database.group}
       */
      group: function(collection, aggregation, options) {
        // Cast arguments. This casts the reduce string to reduce function.
        var reduce = aggregation.reduce.replace(/function[\s\S]*?\([\s\S]*?\)/, '');
        aggregation.reduce = new Function(['doc', 'out'], reduce);

        // Obtain documents subject to aggregation.
        var query = new Kinvey.Query({
          filter: aggregation.condition
        });
        return TiDatabaseAdapter.find(collection, query, options).then(function(documents) {
          // Prepare the grouping.
          var groups = {};

          // Segment documents into groups.
          documents.forEach(function(document) {
            // Determine the group the document belongs to.
            // NOTE Dot-separated (nested) fields are not supported.
            var group = {};
            for(var name in aggregation.key) {
              if(aggregation.key.hasOwnProperty(name)) {
                group[name] = document[name];
              }
            }

            // Initialize the group (if not done yet).
            var key = JSON.stringify(group);
            if(null == groups[key]) {
              groups[key] = group;
              for(var attr in aggregation.initial) { // Add initial attributes.
                if(aggregation.initial.hasOwnProperty(attr)) {
                  groups[key][attr] = aggregation.initial[attr];
                }
              }
            }

            // Run the reduce function on the group and document.
            aggregation.reduce(document, groups[key]);
          });

          // Cast the groups to the response.
          var response = [];
          for(var segment in groups) {
            if(groups.hasOwnProperty(segment)) {
              response.push(groups[segment]);
            }
          }
          return response;
        });
      },

      /**
       * @augments {Database.save}
       */
      save: function(collection, document, options) {
        // Cast arguments.
        document._id = document._id || TiDatabaseAdapter.objectID();

        // Build the query.
        var query = 'INSERT OR REPLACE INTO #{collection} (key, value) VALUES(?, ?)';
        var parameters = [document._id, JSON.stringify(document)];

        // Prepare the response.
        var promise = TiDatabaseAdapter.execute(collection, query, parameters, options);

        // Return the response.
        return promise.then(function() {
          return document;
        });
      },

      /**
       * @augments {Database.update}
       */
      update: function(collection, document, options) {
        // Forward to `TiDatabaseAdapter.save`.
        return TiDatabaseAdapter.save(collection, document, options);
      }
    };

    // Apply the adapter.
    if('undefined' !== typeof Titanium.Database && 'undefined' !== typeof root.sift) {
      Database.use(TiDatabaseAdapter);

      // Add `Kinvey.Query` operators not supported by `sift`.
      ['near', 'regex', 'within'].forEach(function(operator) {
        root.sift.useOperator(operator, function() {
          throw new Kinvey.Error(operator + ' query operator is not supported locally.');
        });
      });
    }


    // `Kinvey.Persistence.Net` adapter for Titaniumsâ€™
    // [HTTPClient](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Network.HTTPClient).
    var TiHttp = {
      /**
       * @augments {Kinvey.Persistence.Net.base64}
       */
      base64: function(value) {
        return Titanium.Utils.base64encode(value);
      },

      /**
       * @augments {Kinvey.Persistence.Net.encode}
       */
      encode: function(value) {
        return Titanium.Network.encodeURIComponent(value);
      },

      /**
       * @augments {Kinvey.Persistence.Net.request}
       */
      request: function(method, url, body, headers, options) {
        // Cast arguments.
        headers = headers || {};
        options = options || {};
        options.attemptMICRefresh = false === options.attemptMICRefresh ? false : true;

        // Prepare the response.

        var deferred = Kinvey.Defer.deferred();
        var xhr;
        if(isObject(body) && !isFunction(body.getLength)) {
        // Stringify if not Titanium.Blob.
          body = JSON.stringify(body);
        }

        // Create the request.
        if(isMobileWeb) {
          // Use browser XHR on mobile web. Easier binary/header handling.
          xhr = new XMLHttpRequest();

          // Getting a file. Binary response.
          xhr.responseType = options.file ? 'blob' : '';

          if(body instanceof Titanium.Blob) {
            body = body._data;
          }

          xhr.ontimeout = function() {
            deferred.reject('timeout');
          };
        }
        else {
          xhr = Titanium.Network.createHTTPClient();

          // Set the TLS version (iOS only).
          if(isFunction(xhr.setTlsVersion) && Titanium.Network.TLS_VERSION_1_2) {
            xhr.setTlsVersion(Titanium.Network.TLS_VERSION_1_2);
          }

          // Prevent Titanium from defaulting Content-Type on file download.
          // GCS signature is validated with Content-Type header.
          if(method === 'GET' && options.file) {
            headers['Content-Type'] = '';
          }
        }

        xhr.timeout = options.timeout || 0;

        // Listen for request completion.
        xhr.onerror = xhr.onload = function(e) {
          // Debug.
          if(KINVEY_DEBUG) {
            log('The network request completed.', this);
          }

          // Titanium does not provide a clear error code on timeout. Patch here.
          e = e || {};
          if(isString(e.error) && -1 !== e.error.toLowerCase().indexOf('timed out')) {
            e.type = 'timeout';
          }

          // Success implicates 2xx (Successful), or 304 (Not Modified).
          var status = 'timeout' === e.type ? 0 : this.status;

          if(2 === parseInt(status / 100, 10) || 304 === this.status) {
            var response;

            // Mobile web response.
            if(isMobileWeb) {
              var isBinary = this.responseType === 'blob';

              response = new Titanium.Blob({
                data: isBinary ? this.response : this.responseText,
                length: isBinary ? this.response.size : this.responseText.length,
                mimeType: this.getResponseHeader('Content-Type')
              });
            }
            else {
              response = options.file ? this.responseData : this.responseText;
            }

            // Check `Content-Type` header for application/json
            if(!options.file && response != null && 204 !== this.status) {
              var responseContentType = this.getResponseHeader('Content-Type');
              var error;

              if(responseContentType == null) {
                error = new Kinvey.Error('Content-Type header missing in response. Please add ' +
                  'Content-Type header to response with value ' +
                  'application/json.');
              }
              else if(responseContentType.indexOf('application/json') === -1) {
                error = new Kinvey.Error('Response Content-Type header is set to ' +
                  responseContentType + '. Expected it to be set ' +
                  'to application/json.');
              }

              if(error) {
                return deferred.reject(error);
              }
            }

            // Return the response.
            deferred.resolve(response || null);
          }
          else { // Failure.
            var promise;
            var originalRequest = options._originalRequest;

            if(401 === this.status && options.attemptMICRefresh) {
              promise = MIC.refresh(options);
            }
            else {
              promise = Kinvey.Defer.reject();
            }

            return promise.then(function() {
              // Don't refresh MIC again
              options.attemptMICRefresh = false;
              // Resend original request
              return Kinvey.Persistence.Net._request(originalRequest, options);
            }).then(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.reject(this.responseText || e.type || null);
            });
          }
        };

        xhr.open(method, url);

        // Append request headers.
        for(var name in headers) {
          if(headers.hasOwnProperty(name)) {
            xhr.setRequestHeader(name, headers[name]);
          }
        }

        // Debug.
        if(KINVEY_DEBUG) {
          log('Initiating a network request.', method, url, body, headers, options);
        }

        // Initiate the request.
        xhr.send(body);

        // Trigger the `request` event on the subject. The subject should be a
        // Backbone model or collection.
        if(null != options.subject) {
          // Remove `options.subject`.
          var subject = options.subject;
          delete options.subject;

          // Trigger the `request` event if the subject has a `trigger` method.
          if(isFunction(subject.trigger)) {
            subject.trigger('request', subject, xhr, options);
          }
        }

        // Return the response.
        return deferred.promise;
      }
    };

    // Use Titanium adapter.
    Kinvey.Persistence.Net.use(TiHttp);


    // Return the copy.
    return Kinvey;
  };

  // Exports.
  // --------

  // The top-level namespace, which is a copy of the library namespace.
  // Exported for the server, as AMD module, and for the browser.
  var Kinvey = kinveyFn();
  if('object' === typeof module && 'object' === typeof module.exports) {
    module.exports = Kinvey;
  }
  else if('function' === typeof define && define.amd) {
    define('kinvey', [], function() {
      return Kinvey;
    });
  }
  else {
    root.Kinvey = Kinvey;
  }

}.call(this));