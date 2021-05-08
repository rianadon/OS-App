/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/* global $, ThreeDeeTouch, Windows, MSApp, navigator, chrome, FastClick */
/* global StatusBar, networkinterface, links, SunCalc, md5, sjcl, Camera */

/* OpenSprinkler App
 * Copyright (C) 2015 - present, Samer Albahra. All rights reserved.
 *
 * This file is part of the OpenSprinkler project <https://opensprinkler.com>.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

var DEFAULT_WEATHER_SERVER_URL = "https://weather.opensprinkler.com";
var WEATHER_SERVER_URL = DEFAULT_WEATHER_SERVER_URL;

// Initialize global variables
var isIEMobile = /IEMobile/.test( navigator.userAgent ),
	isAndroid = /Android|\bSilk\b/.test( navigator.userAgent ),
	isiOS = /iP(ad|hone|od)/.test( navigator.userAgent ),
	isFireFox = /Firefox/.test( navigator.userAgent ),
	isWinApp = /MSAppHost/.test( navigator.userAgent ),
	isOSXApp = window.cordova && window.cordova.platformId === "osx",
	isChromeApp = typeof chrome === "object" && typeof chrome.storage === "object",
	isFileCapable = !isiOS && !isAndroid && !isIEMobile && !isOSXApp &&
					!isWinApp && window.FileReader,
	isTouchCapable = "ontouchstart" in window || "onmsgesturechange" in window,
	isMetric = ( [ "US", "BM", "PW" ].indexOf( navigator.languages[ 0 ].split( "-" )[ 1 ] ) === -1 ),

	// Small wrapper to handle Chrome vs localStorage usage
	storage = {
		get: function( query, callback ) {
			callback = callback || function() {};

			if ( isChromeApp ) {
				chrome.storage.local.get( query, callback );
			} else {
				var data = {},
					i;

				if ( typeof query === "string" ) {
					query = [ query ];
				}

				for ( i in query ) {
					if ( query.hasOwnProperty( i ) ) {
						data[ query[ i ] ] = localStorage.getItem( query[ i ] );
					}
				}

				callback( data );
			}
		},
		set: function( query, callback ) {
			callback = callback || function() {};

			if ( isChromeApp ) {
				chrome.storage.local.set( query, callback );
			} else {
				var i;
				if ( typeof query === "object" ) {
					for ( i in query ) {
						if ( query.hasOwnProperty( i ) ) {
							localStorage.setItem( i, query[ i ] );
						}
					}
				}

				callback( true );
			}
		},
		remove: function( query, callback ) {
			callback = callback || function() {};

			if ( isChromeApp ) {
				chrome.storage.local.remove( query, callback );
			} else {
				var i;

				if ( typeof query === "string" ) {
					query = [ query ];
				}

				for ( i in query ) {
					if ( query.hasOwnProperty( i ) ) {
						localStorage.removeItem( query[ i ] );
					}
				}

				callback( true );
			}
		}
	},

	// Define general regex patterns
	regex = {
		gps: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
	},

	// Define the status bar color(s) and use a darker color for Android
	statusBarPrimary = isAndroid ? "#121212" : "#1D1D1D",
	statusBarOverlay = isAndroid ? "#151515" : "#202020",

	// Define the amount of times the app will retry an HTTP request before marking it failed
	retryCount = 2,

	// Initialize controller array which will store JSON data
	controller = {},
	switching = false,
	currentCoordinates = [ 0, 0 ],

	// Initialize variables to keep track of current page count
	pageHistoryCount = -1,
	goingBack = false,

	// Define the mapping between options and JSON keys
	keyIndex = {
		"tz":1, "ntp":2, "dhcp":3, "ip1":4, "ip2":5, "ip3":6, "ip4":7, "gw1":8, "gw2":9, "gw3":10, "gw4":11,
		"hp0":12, "hp1":13, "ar":14, "ext":15, "seq":16, "sdt":17, "mas":18, "mton":19, "mtof":20, "urs":21, "rso":22,
		"wl":23, "den":24, "ipas":25, "devid":26, "con":27, "lit":28, "dim":29, "bst":30, "uwt":31, "ntp1":32, "ntp2":33,
		"ntp3":34, "ntp4":35, "lg":36, "mas2":37, "mton2":38, "mtof2":39, "fpr0":41, "fpr1":42, "re":43, "dns1": 44,
		"dns2":45, "dns3":46, "dns4":47, "sar":48, "ife":49, "sn1t":50, "sn1o":51, "sn2t":52, "sn2o":53, "sn1on":54,
		"sn1of":55, "sn2on":56, "sn2of":57, "subn1":58, "subn2":59, "subn3":60, "subn4":61
	},

	// Array to hold all notifications currently displayed within the app
	notifications = [],
	timers = {},
	curr183, currIp, currPrefix, currAuth, currPass, currAuthUser,
	currAuthPass, currLocal, currLang, language, deviceip, errorTimeout, weather, openPanel;

// Prevent errors from bubbling up on Windows
if ( isWinApp ) {
	$( window ).on( "error", function( msg, url, line ) {
		window.console.log( msg, url, line );
		return true;
	} );
}

// Redirect jQuery Mobile DOM manipulation to prevent error
if ( window.MSApp ) {

	if ( window.Windows && Windows.UI && Windows.UI.ApplicationSettings && Windows.UI.ApplicationSettings.SettingsPane ) {

		// Add link to privacy statement
		var settingsPane = Windows.UI.ApplicationSettings.SettingsPane.getForCurrentView();

		// Bind the privacy policy to the settings panel
		settingsPane.addEventListener( "commandsrequested", function( eventArgs ) {
			var applicationCommands = eventArgs.request.applicationCommands;
			var privacyCommand = new Windows.UI.ApplicationSettings.SettingsCommand(
				"privacy", "Privacy Policy", function() {
					window.open( "https://albahra.com/journal/privacy-policy" );
				}
			);
			applicationCommands.append( privacyCommand );
		} );
	}

	if ( MSApp.execUnsafeLocalFunction ) {

		// Cache the old domManip function.
		$.fn.oldDomManIp = $.fn.domManip;

		// Override the domManip function with a call to the cached
		// domManip function wrapped in a MSapp.execUnsafeLocalFunction call.
		$.fn.domManip = function( args, callback, allowIntersection ) {
			var that = this;
			return MSApp.execUnsafeLocalFunction( function() {
				return that.oldDomManIp( args, callback, allowIntersection );
			} );
		};
	}
}

$( document )
.one( "deviceready", function() {
	/** Replace window.open with InAppBrowser if available */
	if ( window.cordova && window.cordova.InAppBrowser ) {
		window.open = window.cordova.InAppBrowser.open;
	}

	try {

		//Change the status bar to match the headers
		StatusBar.overlaysWebView( false );
		StatusBar.styleLightContent();
		StatusBar.backgroundColorByHexString( statusBarPrimary );

		$.mobile.window.on( "statusTap", function() {
			$( "body, html" ).animate( {
				scrollTop: 0
			}, 700 );
		} );
	} catch ( err ) {}

	// Hide the splash screen
	setTimeout( function() {
		try {
			navigator.splashscreen.hide();
		} catch ( err ) {}
	}, 500 );

	// For Android and Windows Phone devices catch the back button and redirect it
	$.mobile.document.on( "backbutton", function() {
		if ( isIEMobile && $.mobile.document.data( "iabOpen" ) ) {
			return false;
		}
		checkChangesBeforeBack();
		return false;
	} );

	updateDeviceIP();

	// Check if 3D touch is available and add menu when possible
	if ( isiOS ) {
		ThreeDeeTouch.isAvailable( function( available ) {
			if ( available ) {

				// Enable quick preview on web links
				ThreeDeeTouch.enableLinkPreview();

				// Configure menu actions
				ThreeDeeTouch.configureQuickActions( [
					{
						type: "sites",
						title: _( "Manage Sites" ),
						iconType: "Location"
					},
					{
						type: "addprogram",
						title: _( "Add Program" ),
						iconType: "Add"
					},
					{
						type: "stopall",
						title: _( "Stop All Stations" ),
						iconType: "Pause"
					}
				] );

				ThreeDeeTouch.onHomeIconPressed = function( payload ) {
					if ( payload.type === "sites" ) {
						changePage( "#site-control" );
					} else if ( payload.type === "addprogram" ) {
						changePage( "#addprogram" );
					} else if ( payload.type === "stopall" ) {
						stopAllStations();
					}
				};
			}
		} );
	}
} )
.one( "mobileinit", function() {

	//Change history method for Chrome Packaged Apps
	if ( isChromeApp || window.location.protocol === "file:" ) {
		$.mobile.hashListeningEnabled = false;
	}

	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	loadUnitSetting();
} )
.on( "pagebeforechange", function( e, data ) {
	var page = data.toPage,
		currPage = $( ".ui-page-active" ),
		hash;

	// Pagebeforechange event triggers twice (before and after)
	// and this check ensures we get the before state
	if ( typeof data.toPage !== "string" ) {
		return;
	}

	// Grabs the new page hash
	hash = $.mobile.path.parseUrl( page ).hash;

	if ( currPage.length > 0 && hash === "#" + currPage.attr( "id" ) ) {
		return;
	}

	// Animations are patchy if the page isn't scrolled to the top.
	// This scrolls the page before the animation fires off.
	if ( data.options.role !== "popup" && !$( ".ui-popup-active" ).length ) {
		$.mobile.silentScroll( 0 );
	}

	// Cycle through page possibilities and call their init functions
	if ( hash === "#programs" ) {
		getPrograms( data.options.programToExpand );
	} else if ( hash === "#addprogram" ) {
		addProgram( data.options.copyID );
	} else if ( hash === "#manual" ) {
		getManual();
	} else if ( hash === "#about" ) {
		showAbout();
	} else if ( hash === "#runonce" ) {
		getRunonce();
	} else if ( hash === "#os-options" ) {
		showOptions( data.options.expandItem );
	} else if ( hash === "#preview" ) {
		getPreview();
	} else if ( hash === "#logs" ) {
		getLogs();
	} else if ( hash === "#forecast" ) {
		showForecast();
	} else if ( hash === "#loadingPage" ) {
		checkConfigured( true );
	} else if ( hash === "#start" ) {
		showStart();
	} else if ( hash === "#site-control" ) {
		showSites();
	} else if ( hash === "#sprinklers" ) {
		if ( $( hash ).length === 0 ) {
			showHome( data.options.firstLoad );
		} else {
			$( hash ).one( "pageshow", function() { refreshStatus(); } );
		}
	}
} )

// Handle OS resume event triggered by PhoneGap
.on( "resume", function() {

	// If we don't have a current device IP set, there is nothing else to update
	if ( currIp === undefined ) {
		return;
	}

	// If cloud token is available then sync sites
	cloudSync();

	// Indicate the weather and device status are being updated
	showLoading( "#weather,#footer-running" );

	updateController( updateWeather, networkFail );
} )
.on( "pause", function() {

	// Handle application being paused/closed
} )
.on( "pagebeforeshow", function( e ) {
	var newpage = "#" + e.target.id;

	// Modify the header and footer visibility before page show event
	if ( newpage === "#start" || newpage === "#loadingPage" ) {

		// Hide the header, footer and menu button on the start page
		$( "#header,#footer,#footer-menu" ).hide();
	} else {

		// Show header, footer and menu button on all other pages
		$( "#header,#footer,#footer-menu" ).show();
	}

	storage.get( "showDisabled", function( data ) {
		if ( data.showDisabled && data.showDisabled === "true" ) {
			$( newpage ).addClass( "show-hidden" ).find( ".station-hidden" ).show();
		} else {
			$( newpage ).removeClass( "show-hidden" ).find( ".station-hidden" ).hide();
		}
	} );
} )
.on( "pageshow", function( e ) {
	var newpage = "#" + e.target.id,
		$newpage = $( newpage );

	if ( goingBack ) {
		goingBack = false;
	} else {
		pageHistoryCount++;
	}

	// Fix issues between jQuery Mobile and FastClick
	fixInputClick( $newpage );

	if ( isControllerConnected() && newpage !== "#site-control" && newpage !== "#start" && newpage !== "#loadingPage" ) {

		// Update the controller status every 5 seconds and the program and station data every 30 seconds
		var refreshStatusInterval = setInterval( function() { refreshStatus(); }, 5000 ),
			refreshDataInterval;

		if ( !checkOSVersion( 216 ) ) {
			refreshDataInterval = setInterval( refreshData, 20000 );
		}

		$newpage.one( "pagehide", function() {
			clearInterval( refreshStatusInterval );
			clearInterval( refreshDataInterval );
		} );
	}
} )
.on( "popupafteropen", function() {

	// When a popup opens that has an overlay, update the status bar background color to match
	if ( $( ".ui-overlay-b:not(.ui-screen-hidden)" ).length ) {
		try {
			StatusBar.backgroundColorByHexString( statusBarOverlay );
		} catch ( err ) {}
	}
} )
.on( "popupafterclose", function() {

	$( ".ui-page-active" ).children().add( "#sprinklers-settings" ).removeClass( "blur-filter" );

	// When a popup is closed, change the header back to the default color
	try {
		StatusBar.backgroundColorByHexString( statusBarPrimary );
	} catch ( err ) {}
} )
.on( "popupbeforeposition", function() {
	$( ".ui-page-active" ).children().add( "#sprinklers-settings" ).addClass( "blur-filter" );
} )
.on( "popupbeforeposition", "#localization", checkCurrLang )
.one( "pagebeforeshow", "#loadingPage", initApp );

function initApp() {

	//Update the language on the page using the browser's locale
	updateLang();

	//Set AJAX timeout
	if ( !currLocal ) {
		$.ajaxSetup( {
			timeout: 10000
		} );
	}

	// Fix CSS for IE Mobile (Windows Phone 8)
	if ( isIEMobile ) {
		insertStyle( ".ui-toolbar-back-btn{display:none!important}ul{list-style:none!important;}" );
	}

	// Fix CSS for Chrome Web Store apps
	if ( isChromeApp ) {
		insertStyle( "html,body{overflow-y:scroll}" );
	}

	// Prevent caching of AJAX requests on Android and Windows Phone devices
	if ( isAndroid ) {

		// Hide the back button for Android (all devices have back button)
		insertStyle( ".ui-toolbar-back-btn{display:none!important}" );

		$( this ).ajaxStart( function() {
			try {
				navigator.app.clearCache();
			} catch ( err ) {}
		} );
	} else if ( isFireFox ) {

		// Allow cross domain AJAX requests in FireFox OS
		$.ajaxSetup( {
			xhr: function() {
				return new window.XMLHttpRequest( {
					mozSystem: true
				} );
			}
		} );
	} else {
		$.ajaxSetup( {
			"cache": false
		} );
	}

	//After jQuery mobile is loaded set initial configuration
	$.mobile.defaultPageTransition =
		( isAndroid || isIEMobile ) ? "fade" : "slide";
	$.mobile.hoverDelay = 0;
	$.mobile.activeBtnClass = "activeButton";

	// Handle In-App browser requests (marked with iab class)
	$.mobile.document.on( "click", ".iab", function() {
		var target = isOSXApp ? "_system" : "_blank";

		var button = $( this ),
			iab = window.open( this.href, target, "location=" + ( isAndroid ? "yes" : "no" ) +
				",enableViewportScale=" + ( button.hasClass( "iabNoScale" ) ? "no" : "yes" ) +
				",toolbar=yes,toolbarposition=top,toolbarcolor=" + statusBarPrimary +
				",closebuttoncaption=" +
					( button.hasClass( "iabNoScale" ) ? _( "Back" ) : _( "Done" ) )
			);

		if ( isIEMobile ) {

			// For Windows Mobile, save state of In-App browser to allow back button to close it
			$.mobile.document.data( "iabOpen", true );
			iab.addEventListener( "exit", function() {
				$.mobile.document.removeData( "iabOpen" );
			} );
		}

		setTimeout( function() {
			button.removeClass( "ui-btn-active" );
		}, 100 );
		return false;
	} );

	// Correctly handle popup events and prevent history navigation on custom selectmenu popup
	$.mobile.document.on( "click", ".ui-select .ui-btn", function() {
		var button = $( this ),
			id = button.attr( "id" ).replace( "-button", "-listbox" ),
			popup = $( "#" + id );

		popup.popup( "destroy" ).detach().addClass( "ui-page-theme-a" );
		$.mobile.pageContainer.append( popup );

		popup.popup( {
			history: false,
			"positionTo": button,
			overlayTheme: "b"
		} ).popup( "open" );

		button.off( "click" ).on( "click", function() {
			popup.popup( "open" );
		} );

		return false;
	} );

	// Bind event handler to open panel when swiping right
	$.mobile.document.on( "swiperight swipeleft", ".ui-page", function( e ) {
		var page = $( ".ui-page-active" );

		if ( e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && page.jqmData( "panel" ) !== "open" && !page.find( ".ui-popup-active" ).length ) {
			if ( e.type === "swiperight" ) {
				openPanel();
			} else {
				showNotifications();
			}
		}
	} );

	// Extend collapsible widget with event before change
	$.widget( "mobile.collapsible", $.mobile.collapsible, {
		_handleExpandCollapse: function( isCollapse ) {
			if ( this._trigger( "before" + ( isCollapse ? "collapse" : "expand" ) ) ) {
				this._superApply( arguments );
			}
		}
	} );

	//Update site based on selector
	$( "#site-selector" ).on( "change", function() {
		updateSite( $( this ).val() );
	} );

	// Bind footer menu button
	$( "#footer-menu" ).on( "click", function() {
		showHomeMenu( this );
	} );

	// Initialize the app header
	$( "#header,#footer" ).toolbar();

	//Attach FastClick handler
	FastClick.attach( document.body );

	// Start interval loop which will update timers/clocks
	updateTimers();

	// Handle keybinds
	$.mobile.document.on( "keydown", function( e ) {
		var tag = $( e.target ).prop( "tagName" );

		if ( tag === "INPUT" || tag === "TEXTAREA" ) {
			return;
		}

		var code = e.keyCode,
			altDown = e.altKey,
			menuOpen = $( "#mainMenu-popup" ).hasClass( "ui-popup-active" );

		if ( code === 77 ) {
			var menu = $( "#mainMenu" );
			if ( menu.length > 0 ) {
				$( "#mainMenu" ).popup( "close" );
			} else {
				showHomeMenu();
			}
		} else if ( ( menuOpen || altDown ) && code === 80 ) {
			e.preventDefault();
			changePage( "#programs" );
		} else if ( ( menuOpen || altDown ) && code === 79 ) {
			e.preventDefault();
			changePage( "#os-options" );
		} else if ( ( menuOpen || altDown ) && code === 86 ) {
			e.preventDefault();
			changePage( "#preview" );
		} else if ( ( menuOpen || altDown ) && code === 76 ) {
			e.preventDefault();
			changePage( "#logs" );
		} else if ( ( menuOpen || altDown ) && code === 82 ) {
			e.preventDefault();
			changePage( "#runonce" );
		} else if ( ( menuOpen || altDown ) && code === 68 ) {
			e.preventDefault();
			showRainDelay();
		}
	} );

	// Initialize external panel
	bindPanel();

	// Update the IP address of the device running the app
	if ( !currLocal  && typeof window.cordova === "undefined" ) {
		updateDeviceIP();
	}

	// If cloud token is available then sync sites
	cloudSync();

	//On initial load check if a valid site exists for auto connect
	setTimeout( function() {
		checkConfigured( true );
	}, 200 );
}

// Handle main switches for manual mode
function flipSwitched() {
	if ( switching ) {
		return;
	}

	//Find out what the switch was changed to
	var flip = $( this ),
		id = flip.attr( "id" ),
		changedTo = flip.is( ":checked" ),
		method = ( id === "mmm" ) ? "mm" : id,
		defer;

	if ( changedTo ) {
		defer = sendToOS( "/cv?pw=&" + method + "=1" );
	} else {
		defer = sendToOS( "/cv?pw=&" + method + "=0" );
	}

	$.when( defer ).then( function() {
		refreshStatus();
		if ( id === "mmm" ) {
			$( "#mm_list .green" ).removeClass( "green" );
		}
		checkStatus();
	},
	function() {
		switching = true;
		setTimeout( function() {
			switching = false;
		}, 200 );
		flip.prop( "checked", !changedTo ).flipswitch( "refresh" );
	} );
}

// Wrapper function to communicate with OpenSprinkler
function sendToOS( dest, type ) {

	// Inject password into the request
	dest = dest.replace( "pw=", "pw=" + encodeURIComponent( currPass ) );
	type = type || "text";

	// Designate AJAX queue based on command type
	var isChange = /\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|up|cm)/.exec( dest ),
		queue = isChange ? "change" : "default",

		// Use POST when sending data to the controller (requires firmware 2.1.8 or newer)
		usePOST = ( isChange && checkOSVersion( 300 ) ),
		obj = {
			url: currPrefix + currIp + ( usePOST ? dest.split( "?" )[ 0 ] : dest ),
			type: usePOST ? "POST" : "GET",
			data: usePOST ? getUrlVars( dest ) : null,
			dataType: type,
			shouldRetry: function( xhr, current ) {
				if ( xhr.status === 0 && xhr.statusText === "abort" || retryCount < current ) {
					$.ajaxq.abort( queue );
					return false;
				}
				return true;
			}
		},
		defer;

	if ( currAuth ) {
		$.extend( obj, {
			beforeSend: function( xhr ) {
				xhr.setRequestHeader(
					"Authorization", "Basic " + btoa( currAuthUser + ":" + currAuthPass )
				);
			}
		} );
	}

	if ( curr183 ) {

		// Firmware 1.8.3 has a bug handling the time stamp in the GET request
		$.extend( obj, {
			cache: "true"
		} );
	}

	defer = $.ajaxq( queue, obj ).then(
		function( data ) {

			// In case the data type was incorrect, attempt to fix.
			// If fix not possible, return string
			if ( typeof data === "string" ) {
				try {
					data = $.parseJSON( data );
				} catch ( e ) {
					return data;
				}
			}

			// Don't need to handle this situation for OSPi or firmware below 2.1.0
			if ( typeof data !== "object" || typeof data.result !== "number" ) {
				return data;
			}

			// Return as successful
			if ( data.result === 1 ) {
				return data;

			// Handle incorrect password
			} else if ( data.result === 2 ) {
				if ( /\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|up|cm)/.exec( dest ) ) {
					showerror( _( "Check device password and try again." ) );
				}

				// Tell subsequent handlers this request has failed (use 401 to prevent retry)
				return $.Deferred().reject( { "status":401 } );

			// Handle page not found by triggering fail
			} else if ( data.result === 32 ) {

				return $.Deferred().reject( { "status":404 } );
			}

			// Only show error messages on setting change requests
			if ( /\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|up|cm)/.exec( dest ) ) {
				if ( data.result === 48 ) {
					showerror(
						_( "The selected station is already running or is scheduled to run." )
					);
				} else {
					showerror( _( "Please check input and try again." ) );
				}

				// Tell subsequent handlers this request has failed
				return $.Deferred().reject( data );
			}

		},
		function( e ) {
			if ( ( e.statusText === "timeout" || e.status === 0 ) && /\/(?:cv|cs|cr|cp|uwa|dp|co|cl|cu|cm)/.exec( dest ) ) {

				// Handle the connection timing out but only show error on setting change
				showerror( _( "Connection timed-out. Please try again." ) );
			} else if ( e.status === 401 ) {

				//Handle unauthorized requests
				showerror( _( "Check device password and try again." ) );
			}
			return;
		}
	);

	return defer;
}

function networkFail() {
	changeStatus( 0, "red", "<p class='running-text center'>" + _( "Network Error" ) + "</p>",
		function() {
			showLoading( "#weather,#footer-running" );
			refreshStatus();
			updateWeather();
		}
	);
}

// Gather new controller information and load home page
function newLoad() {

	// Get the current site name from the site select drop down
	var name = $( "#site-selector" ).val(),
		loading = "<div class='logo'></div>" +
			"<h1 style='padding-top:5px'>" + _( "Connecting to" ) + " " + name + "</h1>" +
			"<p class='cancel tight center inline-icon'>" +
				"<span class='btn-no-border ui-btn ui-icon-delete ui-btn-icon-notext'></span>" +
				"Cancel" +
			"</p>";

	$.mobile.loading( "show", {
		html: currLocal ? "<h1>" + _( "Loading" ) + "</h1>" : loading,
		textVisible: true,
		theme: "b"
	} );

	$( ".ui-loader" ).css( {
		"box-shadow": "none",
		"margin-top": "-4em"
	} ).find( ".cancel" ).one( "click", function() {
		$.ajaxq.abort( "default" );
		changePage( "#site-control", {
			transition: "none"
		} );
	} );

	//Empty object which will store device data
	controller = {};

	//Empty notifications
	clearNotifications();

	//Empty timers object
	timers = {};

	//Clear the current queued AJAX requests (used for previous controller connection)
	$.ajaxq.abort( "default" );

	updateController(
		function() {
			var weatherAdjust = $( ".weatherAdjust" ),
				changePassword = $( ".changePassword" );

			$.mobile.loading( "hide" );
			checkURLandUpdateWeather();

			if ( checkOSVersion( 210 ) ) {
				weatherAdjust.css( "display", "" );
			} else {
				weatherAdjust.hide();
			}

			// Hide change password feature for unsupported devices
			if ( isOSPi() || checkOSVersion( 208 ) ) {
				changePassword.css( "display", "" );
			} else {
				changePassword.hide();
			}

			// Show site name instead of default Information bar
			if ( !currLocal ) {
				$( "#info-list" ).find( "li[data-role='list-divider']" ).text( name );
				document.title = "OpenSprinkler - " + name;
			} else {
				$( "#info-list" ).find( "li[data-role='list-divider']" ).text( _( "Information" ) );
			}

			// Check if a firmware update is available
			checkFirmwareUpdate();

			// Check for unused expansion boards
			detectUnusedExpansionBoards();

			// Check if password is plain text (older method) and hash the password, if needed
			if ( checkOSVersion( 213 ) && controller.options.hwv !== 255 ) {
				fixPasswordHash( name );
			}

			// Check if the OpenSprinkler can be accessed from the public IP
			if ( !currLocal && typeof controller.settings.eip === "number" ) {
				checkPublicAccess( controller.settings.eip );
			}

			// Check if a cloud token is available and if so show logout button otherwise show login
			updateLoginButtons();

			if ( isOSPi() ) {

				// Show notification of unified firmware availability
				showUnifiedFirmwareNotification();
			}

			if ( controller.options.firstRun ) {
				showGuidedSetup();
			} else {
				goHome( true );
			}
		},
		function( error ) {
			$.ajaxq.abort( "default" );
			controller = {};

			$.mobile.loading( "hide" );

			var fail = function() {
				if ( !currLocal ) {
					if ( $( ".ui-page-active" ).attr( "id" ) === "site-control" ) {
						showFail();
					} else {
						$.mobile.document.one( "pageshow", showFail );
						changePage( "#site-control", {
							transition: "none"
						} );
					}
				} else {
					storage.remove( [ "sites" ], function() {
						window.location.reload();
					} );
				}
			},
			showFail = function() {
				showerror( _( "Unable to connect to" ) + " " + name, 3500 );
			};

			if ( typeof error === "object" && error.status === 401 ) {
				$( ".ui-popup-active" ).find( "[data-role='popup']" ).popup( "close" );

				changePassword( {
					fixIncorrect: true,
					name: name,
					callback: newLoad,
					cancel: fail
				} );
			} else {
				fail();
			}
		}
	);
}

// Update controller information
function updateController( callback, fail ) {
	callback = callback || function() {};
	fail = fail || function() {};

	var finish = function() {
		$( "html" ).trigger( "datarefresh" );
		checkStatus();
		callback();
	};

	if ( isControllerConnected() && checkOSVersion( 216 ) ) {
		sendToOS( "/ja?pw=", "json" ).then( function( data ) {

			if ( typeof data === "undefined" || $.isEmptyObject( data ) ) {
				fail();
				return;
			}

			// The /ja call does not contain special station data, so let's cache it
			var special = controller.special;

			controller = data;

			// Restore the station cache to the object
			controller.special = special;

			// Fix the station status array
			controller.status = controller.status.sn;

			finish();
		}, fail );
	} else {
		$.when(
			updateControllerPrograms(),
			updateControllerStations(),
			updateControllerOptions(),
			updateControllerStatus(),
			updateControllerSettings()
		).then( finish, fail );
	}
}

function updateControllerPrograms( callback ) {
	callback = callback || function() {};

	if ( curr183 === true ) {

		// If the controller is using firmware 1.8.3, then parse the script tag for variables
		return sendToOS( "/gp?d=0" ).done( function( programs ) {
			var vars = programs.match( /(nprogs|nboards|mnp)=[\w|\d|.\"]+/g ),
				progs = /pd=\[\];(.*);/.exec( programs ),
				newdata = {}, tmp, prog;

			for ( var i = 0; i < vars.length; i++ ) {
				if ( vars[ i ] === "" ) {
					continue;
				}
				tmp = vars[ i ].split( "=" );
				newdata[ tmp[ 0 ] ] = parseInt( tmp[ 1 ] );
			}

			newdata.pd = [];
			if ( progs !== null ) {
				progs = progs[ 1 ].split( ";" );
				for ( i = 0; i < progs.length; i++ ) {
					prog = progs[ i ].split( "=" );
					prog = prog[ 1 ].replace( "[", "" );
					prog = prog.replace( "]", "" );
					newdata.pd[ i ] = parseIntArray( prog.split( "," ) );
				}
			}

			controller.programs = newdata;
			callback();
		} );
	} else {
		return sendToOS( "/jp?pw=", "json" ).done( function( programs ) {
			controller.programs = programs;
			callback();
		} );
	}
}

function updateControllerStations( callback ) {
	callback = callback || function() {};

	if ( curr183 === true ) {

		// If the controller is using firmware 1.8.3, then parse the script tag for variables
		return sendToOS( "/vs" ).done( function( stations ) {
			var names = /snames=\[(.*?)\];/.exec( stations ),
				masop = stations.match( /(?:masop|mo)\s?[=|:]\s?\[(.*?)\]/ );

			names = names[ 1 ].split( "," );
			names.pop();

			for ( var i = 0; i < names.length; i++ ) {
				names[ i ] = names[ i ].replace( /'/g, "" );
			}

			masop = parseIntArray( masop[ 1 ].split( "," ) );

			controller.stations = {
				"snames": names,
				"masop": masop,
				"maxlen": names.length
			};
			callback();
		} );
	} else {
		return sendToOS( "/jn?pw=", "json" ).done( function( stations ) {
			controller.stations = stations;
			callback();
		} );
	}
}

function updateControllerOptions( callback ) {
	callback = callback || function() {};

	if ( curr183 === true ) {

		// If the controller is using firmware 1.8.3, then parse the script tag for variables
		return sendToOS( "/vo" ).done( function( options ) {
			var isOSPi = options.match( /var sd\s*=/ ),
				vars = {}, tmp, i, o;

			if ( isOSPi ) {
				var varsRegex = /(tz|htp|htp2|nbrd|seq|sdt|mas|mton|mtoff|urs|rst|wl|ipas)\s?[=|:]\s?([\w|\d|.\"]+)/gm,
					name;

				while ( ( tmp = varsRegex.exec( options ) ) !== null ) {
					name = tmp[ 1 ].replace( "nbrd", "ext" ).replace( "mtoff", "mtof" );
					vars[ name ] = +tmp[ 2 ];
				}
				vars.ext--;
				vars.fwv = "1.8.3-ospi";
			} else {
				var valid = [ 1, 2, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26 ];
				tmp = /var opts=\[(.*)\];/.exec( options );
				tmp = tmp[ 1 ].replace( /"/g, "" ).split( "," );

				for ( i = 0; i < tmp.length - 1; i = i + 4 ) {
					o = +tmp[ i + 3 ];
					if ( $.inArray( o, valid ) !== -1 ) {
						vars[ keyIndex[ o ] ] = +tmp[ i + 2 ];
					}
				}
				vars.fwv = 183;
			}
			controller.options = vars;
			callback();
		} );
	} else {
		return sendToOS( "/jo?pw=", "json" ).done( function( options ) {
			controller.options = options;
			callback();
		} );
	}
}

function updateControllerStatus( callback ) {
	callback = callback || function() {};

	if ( curr183 === true ) {

		// If the controller is using firmware 1.8.3, then parse the script tag for variables
		return sendToOS( "/sn0" ).then(
			function( status ) {
				var tmp = status.toString().match( /\d+/ );

				tmp = parseIntArray( tmp[ 0 ].split( "" ) );

				controller.status = tmp;
				callback();
			},
			function() {
				controller.status = [];
			} );
	} else {
		return sendToOS( "/js?pw=", "json" ).then(
			function( status ) {
				controller.status = status.sn;
				callback();
			},
			function() {
				controller.status = [];
			} );
	}
}

function updateControllerSettings( callback ) {
	callback = callback || function() {};

	if ( curr183 === true ) {

		// If the controller is using firmware 1.8.3, then parse the script tag for variables
		return sendToOS( "" ).then(
			function( settings ) {
				var varsRegex = /(ver|devt|nbrd|tz|en|rd|rs|mm|rdst|urs)\s?[=|:]\s?([\w|\d|.\"]+)/gm,
					loc = settings.match( /loc\s?[=|:]\s?[\"|'](.*)[\"|']/ ),
					lrun = settings.match( /lrun=\[(.*)\]/ ),
					ps = settings.match( /ps=\[(.*)\];/ ),
					vars = {}, tmp, i;

				ps = ps[ 1 ].split( "],[" );
				for ( i = ps.length - 1; i >= 0; i-- ) {
					ps[ i ] = parseIntArray( ps[ i ].replace( /\[|\]/g, "" ).split( "," ) );
				}

				while ( ( tmp = varsRegex.exec( settings ) ) !== null ) {
					vars[ tmp[ 1 ] ] = +tmp[ 2 ];
				}

				vars.loc = loc[ 1 ];
				vars.ps = ps;
				vars.lrun = parseIntArray( lrun[ 1 ].split( "," ) );

				controller.settings = vars;
			},
			function() {
				if ( controller.settings && controller.stations ) {
					var ps = [], i;
					for ( i = 0; i < controller.stations.maxlen; i++ ) {
						ps.push( [ 0, 0 ] );
					}
					controller.settings.ps = ps;
				}
			} );
	} else {
		return sendToOS( "/jc?pw=" ).then(
			function( settings ) {
				if ( typeof settings !== "object" ) {
					try {
						settings = JSON.parse( settings );
					} catch ( err ) {
						var matchWTO = /,"wto":\{.*?\}/;
						var wto = settings.match( matchWTO );
						settings = settings.replace( matchWTO, "" );
						try {
							settings = JSON.parse( settings );
							handleCorruptedWeatherOptions( wto );
						} catch ( e ) {
							return false;
						}
					}
				}

				if ( typeof settings.lrun === "undefined" ) {
					settings.lrun = [ 0, 0, 0, 0 ];
				}

				// Update the current coordinates if the user's location is using them
				if ( settings.loc.match( regex.gps ) ) {
					var location = settings.loc.split( "," );
					currentCoordinates = [ parseFloat( location[ 0 ] ), parseFloat( location[ 1 ] ) ];
				}

				controller.settings = settings;
				callback();
			},
			function() {
				if ( controller.settings && controller.stations ) {
					var ps = [], i;
					for ( i = 0; i < controller.stations.maxlen; i++ ) {
						ps.push( [ 0, 0 ] );
					}
					controller.settings.ps = ps;
				}
			} );
	}
}

function updateControllerStationSpecial( callback ) {
	callback = callback || function() {};

	return sendToOS( "/je?pw=", "json" ).then(
		function( special ) {
			controller.special = special;
			callback();
		},
		function() {
			controller.special = {};
		} );
}

// Multi site functions
function checkConfigured( firstLoad ) {
	storage.get( [ "sites", "current_site", "cloudToken" ], function( data ) {
		var sites = data.sites,
			current = data.current_site,
			names;

		sites = parseSites( sites );

		names = Object.keys( sites );

		if ( !names.length ) {
			if ( firstLoad ) {
				if ( data.cloudToken === undefined || data.cloudToken === null ) {
					changePage( "#start", {
						transition: "none"
					} );
				} else {
					changePage( "#site-control", {
						transition: "none"
					} );
				}
			}
			return;
		}

		if ( current === null || !( current in sites ) ) {
			$.mobile.loading( "hide" );
			changePage( "#site-control", {
				transition: firstLoad ? "none" : undefined
			} );
			return;
		}

		updateSiteList( names, current );

		currIp = sites[ current ].os_ip;
		currPass = sites[ current ].os_pw;

		if ( typeof sites[ current ].ssl !== "undefined" && sites[ current ].ssl === "1" ) {
			currPrefix = "https://";
		} else {
			currPrefix = "http://";
		}

		if ( typeof sites[ current ].auth_user !== "undefined" &&
			typeof sites[ current ].auth_pw !== "undefined" ) {

			currAuth = true;
			currAuthUser = sites[ current ].auth_user;
			currAuthPass = sites[ current ].auth_pw;
		} else {
			currAuth = false;
		}

		if ( sites[ current ].is183 ) {
			curr183 = true;
		} else {
			curr183 = false;
		}

		newLoad();
	} );
}

function fixPasswordHash( current ) {
	storage.get( [ "sites" ], function( data ) {
		var sites = parseSites( data.sites );

		if ( !isMD5( currPass ) ) {
			var pw = md5( currPass );

			sendToOS(
				"/sp?pw=&npw=" + encodeURIComponent( pw ) +
				"&cpw=" + encodeURIComponent( pw ), "json"
			).done( function( info ) {
				var result = info.result;

				if ( !result || result > 1 ) {
					return false;
				} else {
					sites[ current ].os_pw = currPass = pw;
					storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
				}
			} );
		}
	} );
}

// Add a new site
function submitNewUser( ssl, useAuth ) {
	document.activeElement.blur();
	$.mobile.loading( "show" );

	var ip = $.mobile.path.parseUrl( $( "#os_ip" ).val() ).hrefNoHash.replace( /https?:\/\//, "" ),
		success = function( data, sites ) {
			$.mobile.loading( "hide" );
			var is183;

			if ( ( typeof data === "string" && data.match( /var (en|sd)\s*=/ ) ) || ( typeof data.fwv === "number" && data.fwv === 203 ) ) {
				is183 = true;
			}

			if ( data.fwv !== undefined || is183 === true ) {
				var name = $( "#os_name" ).val(),
					pw = $( "#os_pw" ).val(),
					savePW = $( "#save_pw" ).is( ":checked" );

				if ( name === "" ) {
					name = "Site " + ( Object.keys( sites ).length + 1 );
				}

				sites[ name ] = {};
				sites[ name ].os_ip = currIp = ip;

				if ( typeof data.fwv === "number" && data.fwv >= 213 ) {
					if ( typeof data.wl === "number" ) {
						pw = md5( pw );
					}
				}

				sites[ name ].os_pw = savePW ? pw : "";
				currPass = pw;

				if ( ssl ) {
					sites[ name ].ssl = "1";
					currPrefix = "https://";
				} else {
					currPrefix = "http://";
				}

				if ( useAuth ) {
					sites[ name ].auth_user = $( "#os_auth_user" ).val();
					sites[ name ].auth_pw = $( "#os_auth_pw" ).val();
					currAuth = true;
					currAuthUser = sites[ name ].auth_user;
					currAuthPass = sites[ name ].auth_pw;
				} else {
					currAuth = false;
				}

				if ( is183 === true ) {
					sites[ name ].is183 = "1";
					curr183 = true;
				}

				$( "#os_name,#os_ip,#os_pw,#os_auth_user,#os_auth_pw" ).val( "" );
				storage.set( {
					"sites": JSON.stringify( sites ),
					"current_site": name
				}, function() {
					cloudSaveSites();
					updateSiteList( Object.keys( sites ), name );
					newLoad();
				} );
			} else {
				showerror( _( "Check IP/Port and try again." ) );
			}
		},
		fail = function( x ) {
			if ( !useAuth && x.status === 401 ) {
				getAuth();
				return;
			}
			if ( ssl ) {
				$.mobile.loading( "hide" );
				showerror( _( "Check IP/Port and try again." ) );
			} else {
				submitNewUser( true );
			}
		},
		getAuth = function() {
			if ( $( "#addnew-auth" ).length ) {
				submitNewUser( ssl, true );
			} else {
				showAuth();
			}
		},
		getAuthInfo = function() {
			return btoa( $( "#os_auth_user" ).val() + ":" + $( "#os_auth_pw" ).val() );
		},
		showAuth = function() {
			$.mobile.loading( "hide" );
			var html = $( "<div class='ui-content' id='addnew-auth'>" +
					"<form method='post' novalidate>" +
						"<p class='center smaller'>" + _( "Authorization Required" ) + "</p>" +
						"<label for='os_auth_user'>" + _( "Username:" ) + "</label>" +
						"<input autocomplete='off' autocorrect='off' autocapitalize='off' " +
							"spellcheck='false' type='text' " +
							"name='os_auth_user' id='os_auth_user'>" +
						"<label for='os_auth_pw'>" + _( "Password:" ) + "</label>" +
						"<input type='password' name='os_auth_pw' id='os_auth_pw'>" +
						"<input type='submit' value='" + _( "Submit" ) + "'>" +
					"</form>" +
				"</div>" ).enhanceWithin();

			html.on( "submit", "form", function() {
				submitNewUser( ssl, true );
				return false;
			} );

			$( "#addnew-content" ).hide();
			$( "#addnew" ).append( html ).popup( "reposition", { positionTo:"window" } );
		},
		prefix;

	if ( !ip ) {
		showerror( _( "An IP address is required to continue." ) );
		return;
	}

	if ( useAuth !== true && $( "#os_useauth" ).is( ":checked" ) ) {
		getAuth();
		return;
	}

	if ( $( "#os_usessl" ).is( ":checked" ) === true ) {
		ssl = true;
	}

	if ( ssl ) {
		prefix = "https://";
	} else {
		prefix = "http://";
	}

	if ( useAuth ) {
		$( "#addnew-auth" ).hide();
		$( "#addnew-content" ).show();
		$( "#addnew" ).popup( "reposition", { positionTo:"window" } );
	}

	//Submit form data to the server
	$.ajax( {
		url: prefix + ip + "/jo?pw=" + md5( $( "#os_pw" ).val() ),
		type: "GET",
		dataType: "json",
		timeout: 10000,
		global: false,
		beforeSend: function( xhr ) {
			if ( useAuth ) {
				xhr.setRequestHeader(
					"Authorization",
					"Basic " + getAuthInfo()
				);
			}
		},
		error: function( x ) {
			if ( !useAuth && x.status === 401 ) {
				getAuth();
				return;
			}
			$.ajax( {
				url: prefix + ip,
				type: "GET",
				dataType: "text",
				timeout: 10000,
				global: false,
				cache: true,
				beforeSend: function( xhr ) {
					if ( useAuth ) {
						xhr.setRequestHeader(
							"Authorization",
							"Basic " + getAuthInfo()
						);
					}
				},
				success: function( reply ) {
					storage.get( "sites", function( data ) {
						var sites = parseSites( data.sites );
						success( reply, sites );
					} );
				},
				error: fail
			} );
		},
		success: function( reply ) {
			storage.get( "sites", function( data ) {
				var sites = parseSites( data.sites );
				success( reply, sites );
			} );
		}
	} );
}

function parseSites( sites ) {
	return ( sites === undefined || sites === null ) ? {} : JSON.parse( sites );
}

function showSiteSelect( list ) {
	$( "#site-select" ).popup( "destroy" ).remove();

	var popup = $(
		"<div data-role='popup' id='site-select' data-theme='a' data-overlay-theme='b'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + _( "Select Site" ) + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				"<ul data-role='none' class='ui-listview ui-corner-all ui-shadow'>" +
				"</ul>" +
			"</div>" +
		"</div>" );

	if ( list ) {
		popup.find( "ul" ).html( list );
	}

	popup.one( "popupafterclose", function() {
		$( this ).popup( "destroy" ).remove();
	} ).popup( {
		history: false,
		"positionTo": "window"
	} ).enhanceWithin().popup( "open" );
}

function showAddNew( autoIP, closeOld ) {
	$( "#addnew" ).popup( "destroy" ).remove();

	var isAuto = ( autoIP ) ? true : false,
		addnew = $( "<div data-role='popup' id='addnew' data-theme='a' data-overlay-theme='b'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + _( "New Device" ) + "</h1>" +
			"</div>" +
			"<div class='ui-content' id='addnew-content'>" +
				"<form method='post' novalidate>" +
					( isAuto ? "" : "<p class='center smaller'>" +
						_( "Note: The name is used to identify the OpenSprinkler within the app. OpenSprinkler IP can be either an IP or hostname. You can also specify a port by using IP:Port" ) +
					"</p>" ) +
					"<label for='os_name'>" + _( "Open Sprinkler Name:" ) + "</label>" +
					"<input autocorrect='off' spellcheck='false' type='text' name='os_name' " +
						"id='os_name' placeholder='Home'>" +
					( isAuto ? "" :
						"<label for='os_ip'>" + _( "Open Sprinkler IP:" ) + "</label>" ) +
					"<input " + ( isAuto ? "data-role='none' style='display:none' " : "" ) +
						"autocomplete='off' autocorrect='off' autocapitalize='off' " +
						"spellcheck='false' type='url' pattern='' name='os_ip' id='os_ip' " +
						"value='" + ( isAuto ? autoIP : "" ) + "' placeholder='home.dyndns.org'>" +
					"<label for='os_pw'>" + _( "Open Sprinkler Password:" ) + "</label>" +
					"<input type='password' name='os_pw' id='os_pw' value=''>" +
					"<label for='save_pw'>" + _( "Save Password" ) + "</label>" +
					"<input type='checkbox' data-wrapper-class='save_pw' name='save_pw' " +
						"id='save_pw' data-mini='true' checked='checked'>" +
					( isAuto ? "" :
						"<div data-theme='a' data-mini='true' data-role='collapsible'>" +
							"<h4>" + _( "Advanced" ) + "</h4>" +
							"<fieldset data-role='controlgroup' data-type='horizontal' " +
								"data-mini='true' class='center'>" +
							"<input type='checkbox' name='os_usessl' id='os_usessl'>" +
							"<label for='os_usessl'>" + _( "Use SSL" ) + "</label>" +
							"<input type='checkbox' name='os_useauth' id='os_useauth'>" +
							"<label for='os_useauth'>" + _( "Use Auth" ) + "</label>" +
							"</fieldset>" +
						"</div>" ) +
					"<input type='submit' data-theme='b' value='" + _( "Submit" ) + "'>" +
				"</form>" +
			"</div>" +
		"</div>" );

	addnew.find( "form" ).on( "submit", function() {
		submitNewUser();
		return false;
	} );

	addnew.one( "popupafterclose", function() {
		$( this ).popup( "destroy" ).remove();
	} ).popup( {
		history: false,
		"positionTo": "window"
	} ).enhanceWithin();

	if ( closeOld ) {
		$( ".ui-popup-active" ).children().first().one( "popupafterclose", function() {
			addnew.popup( "open" );
		} ).popup( "close" );
	} else {
		addnew.popup( "open" );
	}

	fixInputClick( addnew );

	addnew.find( ".ui-collapsible-heading-toggle" ).on( "click", function() {
		var open = $( this ).parents( ".ui-collapsible" ).hasClass( "ui-collapsible-collapsed" ),
			page = $( ".ui-page-active" ),
			height = parseInt( page.css( "min-height" ) );

		if ( open ) {
			page.css( "min-height", ( height + 65 ) + "px" );
		} else {
			page.css( "min-height", ( height - 65 ) + "px" );
		}

		addnew.popup( "reposition", { positionTo:"window" } );
	} );

	return false;
}

var showSites = ( function() {
	var page = $( "<div data-role='page' id='site-control'>" +
			"<div class='ui-content'>" +
			"</div>" +
		"</div>" ),
		makeStart = function() {
			var finish = function() {
				header.eq( 0 ).hide();
				$( "#header" ).show();
				$( "#footer, #footer-menu" ).hide();
			};

			if ( page.hasClass( "ui-page-active" ) ) {
				finish();
			} else {
				page.one( "pagebeforeshow", function( e ) {
					e.stopImmediatePropagation();
					finish();
				} );
			}

			page.on( "swiperight swipeleft", function( e ) {
				e.stopImmediatePropagation();
			} );

			document.title = "OpenSprinkler";
		},
		popup = $( "<div data-role='popup' id='addsite' data-theme='b'>" +
			"<ul data-role='listview'>" +
				"<li data-icon='false'>" +
					"<a href='#' id='site-add-scan'>" + _( "Scan For Device" ) + "</a>" +
				"</li>" +
				"<li data-icon='false'>" +
					"<a href='#' id='site-add-manual'>" + _( "Manually Add Device" ) + "</a>" +
				"</li>" +
			"</ul>" +
		"</div>" ),
		sites, header, total;

	popup.find( "#site-add-scan" ).on( "click", function() {
		popup.popup( "close" );
		startScan();
		return false;
	} );

	popup.find( "#site-add-manual" ).on( "click", function() {
		showAddNew( false, true );
		return false;
	} );

	page.on( "pagehide", function() {
		popup.popup( "destroy" ).detach();
		page.detach();
	} );

	$( "html" ).on( "siterefresh", function() {
		if ( page.hasClass( "ui-page-active" ) ) {
			updateContent();
		}
	} );

	function updateContent() {
		storage.get( [ "sites", "current_site", "cloudToken" ], function( data ) {
			sites = parseSites( data.sites );

			if ( $.isEmptyObject( sites ) ) {
				if ( typeof data.cloudToken !== "string" ) {
					changePage( "#start" );

					return;
				} else {
					makeStart();
					page.find( ".ui-content" ).html( "<p class='center'>" +
						_( "Please add a site by tapping the 'Add' button in the top right corner." ) +
					"</p>" );
				}
			} else {
				var list = "<div data-role='collapsible-set'>",
					siteNames = [],
					i = 0;

				total = Object.keys( sites ).length;

				if ( !isControllerConnected() || !total || !( data.current_site in sites ) ) {
					makeStart();
				}

				sites = sortObj( sites );

				$.each( sites, function( a, b ) {
					siteNames.push( a );

					a = htmlEscape( a );

					list += "<fieldset " + ( ( total === 1 ) ? "data-collapsed='false'" : "" ) + " id='site-" + i + "' data-role='collapsible'>" +
						"<h3>" +
							"<a class='ui-btn ui-btn-corner-all connectnow yellow' data-site='" + i + "' href='#'>" +
								_( "connect" ) +
							"</a>" +
						a + "</h3>" +
						"<form data-site='" + i + "' novalidate>" +
							"<div class='ui-field-contain'>" +
								"<label for='cnm-" + i + "'>" + _( "Change Name" ) + "</label><input id='cnm-" + i + "' type='text' value='" + a + "'>" +
							"</div>" +
							"<div class='ui-field-contain'>" +
								"<label for='cip-" + i + "'>" + _( "Change IP" ) + "</label><input id='cip-" + i + "' type='url' value='" + b.os_ip +
									"' autocomplete='off' autocorrect='off' autocapitalize='off' pattern='' spellcheck='false'>" +
							"</div>" +
							"<div class='ui-field-contain'>" +
								"<label for='cpw-" + i + "'>" + _( "Change Password" ) + "</label><input id='cpw-" + i + "' type='password'>" +
							"</div>" +
							"<fieldset data-mini='true' data-role='collapsible'>" +
								"<h3>" +
									"<span style='line-height:23px'>" + _( "Advanced" ) + "</span>" +
									"<button data-helptext='" +
										_( "These options are only for an OpenSprinkler behind a proxy capable of SSL and/or Basic Authentication." ) +
										"' class='collapsible-button-right help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
								"</h3>" +
								"<label for='usessl-" + i + "'>" +
									"<input data-mini='true' type='checkbox' id='usessl-" + i + "' name='usessl-" + i + "'" +
										( typeof b.ssl !== "undefined" && b.ssl === "1" ? " checked='checked'" : "" ) + ">" +
									_( "Use SSL" ) +
								"</label>" +
								"<label for='useauth-" + i + "'>" +
									"<input class='useauth' data-user='" + b.auth_user + "' data-pw='" + b.auth_pw +
										"' data-mini='true' type='checkbox' id='useauth-" + i + "' name='useauth-" + i + "'" +
										( typeof b.auth_user !== "undefined" && typeof b.auth_pw !== "undefined" ? " checked='checked'" : "" ) + ">" +
									_( "Use Auth" ) +
								"</label>" +
							"</fieldset>" +
							"<input class='submit' type='submit' value='" + _( "Save Changes to" ) + " " + a + "'>" +
							"<a data-role='button' class='deletesite' data-site='" + i + "' href='#' data-theme='b'>" + _( "Delete" ) + " " + a + "</a>" +
						"</form>" +
					"</fieldset>";

					testSite( b, i, function( id, result ) {
						page.find( "#site-" + id + " .connectnow" )
							.removeClass( "yellow" )
							.addClass( result ? "green" : "red" );
					} );

					i++;
				} );

				list = $( list + "</div>" );

				list.find( "form" ).one( "change input", function() {
					$( this ).find( ".submit" ).addClass( "hasChanges" );
				} );

				list.find( ".connectnow" ).on( "click", function() {
					updateSite( siteNames[ $( this ).data( "site" ) ] );
					return false;
				} );

				list.find( ".help-icon" ).on( "click", showHelpText );

				list.find( ".useauth" ).on( "change", function() {
					var el = $( this );

					if ( el.is( ":checked" ) ) {
						var popup = $( "<div data-role='popup' data-theme='a'>" +
							"<form method='post' class='ui-content' novalidate>" +
								"<label for='auth_user'>" + _( "Username:" ) + "</label>" +
								"<input autocomplete='off' autocorrect='off' autocapitalize='off' " +
									"spellcheck='false' type='text' name='auth_user' id='auth_user'>" +
								"<label for='auth_pw'>" + _( "Password:" ) + "</label>" +
								"<input type='password' name='auth_pw' id='auth_pw'>" +
								"<input type='submit' class='submit' value='" + _( "Submit" ) + "'>" +
							"</form>" +
							"</div>" ).enhanceWithin(),
							didSubmit = false;

						popup.find( ".submit" ).on( "click", function() {
							el.data( {
								user: popup.find( "#auth_user" ).val(),
								pw: popup.find( "#auth_pw" ).val()
							} );

							didSubmit = true;
							popup.popup( "close" );
							return false;
						} );

						popup.one( "popupafterclose", function() {
							if ( !didSubmit ) {
								el.attr( "checked", false ).checkboxradio( "refresh" );
							}
						} );

						openPopup( popup );
					} else {
						el.data( {
							user: "",
							pw: ""
						} );
					}
				} );

				list.find( "form" ).on( "submit", function() {
					var form = $( this ),
						id = form.data( "site" ),
						site = siteNames[ id ],
						ip = list.find( "#cip-" + id ).val(),
						pw = list.find( "#cpw-" + id ).val(),
						nm = list.find( "#cnm-" + id ).val(),
						useauth = list.find( "#useauth-" + id ).is( ":checked" ),
						usessl = list.find( "#usessl-" + id ).is( ":checked" ) ? "1" : undefined,
						authUser = list.find( "#useauth-" + id ).data( "user" ),
						authPass = list.find( "#useauth-" + id ).data( "pw" ),
						needsReconnect = ( ip !== "" && ip !== sites[ site ].os_ip ) ||
											usessl !== sites[ site ].ssl ||
											authUser !== sites[ site ].auth_user ||
											authPass !== sites[ site ].auth_pw,
						isCurrent = ( site === data.current_site ),
						rename = ( nm !== "" && nm !== site );

					form.find( ".submit" ).removeClass( "hasChanges" );

					if ( useauth ) {
						sites[ site ].auth_user = authUser;
						sites[ site ].auth_pw = authPass;
					} else {
						delete sites[ site ].auth_user;
						delete sites[ site ].auth_pw;
					}

					if ( usessl === "1" ) {
						sites[ site ].ssl = usessl;
					} else {
						delete sites[ site ].ssl;
					}

					if ( ip !== "" && ip !== sites[ site ].os_ip ) {
						sites[ site ].os_ip = ip;
					}
					if ( pw !== "" && pw !== sites[ site ].os_pw ) {
						if ( isMD5( sites[ site ].os_pw ) ) {
							pw = md5( pw );
						}
						sites[ site ].os_pw = pw;
					}
					if ( rename ) {
						sites[ nm ] = sites[ site ];
						delete sites[ site ];
						site = nm;
						if ( isCurrent ) {
							storage.set( { "current_site":site } );
							data.current_site = site;
						}
						updateSiteList( Object.keys( sites ), data.current_site );
					}

					storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );

					showerror( _( "Site updated successfully" ) );

					if ( site === data.current_site ) {
						if ( pw !== "" ) {
							currPass = pw;
						}
						if ( needsReconnect ) {
							checkConfigured();
						}
					}

					if ( rename && !form.find( ".submit" ).hasClass( "preventUpdate" ) ) {
						updateContent();
					}

					return false;
				} );

				list.find( ".deletesite" ).on( "click", function() {
					var site = siteNames[ $( this ).data( "site" ) ];
					areYouSure( _( "Are you sure you want to delete " ) + site + "?", "", function() {
						if ( $( "#site-selector" ).val() === site ) {
							makeStart();
						}

						delete sites[ site ];
						storage.set( { "sites":JSON.stringify( sites ) }, function() {
							cloudSaveSites();
							updateSiteList( Object.keys( sites ), data.current_site );
							if ( $.isEmptyObject( sites ) ) {
								storage.get( "cloudToken", function() {
									if ( data.cloudToken === null || data.cloudToken === undefined ) {
										currIp = "";
										currPass = "";
										changePage( "#start" );
										return;
									}
								} );
							} else {
								updateContent();
								showerror( _( "Site deleted successfully" ) );
							}
							return false;
						} );
					} );
					return false;
				} );

				page.find( ".ui-content" ).html( list.enhanceWithin() );
			}

			if ( typeof data.cloudToken === "string" ) {
				page.find( ".ui-content" ).prepend( addSyncStatus( data.cloudToken ) );

			}
		} );
	}

	function begin() {
		header = changeHeader( {
			title: _( "Manage Sites" ),
			animate: isControllerConnected() ? true : false,
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: function() {
					page.find( ".hasChanges" ).addClass( "preventUpdate" );
					checkChangesBeforeBack();
				}
			},
			rightBtn: {
				icon: "plus",
				text: _( "Add" ),
				on: function() {
					if ( typeof deviceip === "undefined" ) {
						showAddNew();
					} else {
						popup.popup( "open" ).popup( "reposition", {
							positionTo: header.eq( 2 )
						} );
					}
				}
			}
		} );

		updateContent();

		$.mobile.pageContainer.append( popup );

		popup.popup( {
			history: false,
			positionTo: header.eq( 2 )
		} ).enhanceWithin();

		$( "#site-control" ).remove();
		$.mobile.pageContainer.append( page );
	}

	return begin;
} )();

function addSyncStatus( token ) {
	var ele = $( "<div class='ui-bar smaller ui-bar-a ui-corner-all logged-in-alert'>" +
			"<div class='inline ui-btn ui-icon-recycle btn-no-border ui-btn-icon-notext ui-mini'></div>" +
			"<div class='inline syncStatus'>" + _( "Synced with OpenSprinkler.com" ) + " (" + getTokenUser( token ) + ")</div>" +
			"<div class='inline ui-btn ui-icon-delete btn-no-border ui-btn-icon-notext ui-mini logout'></div>" +
		"</div>" );

	ele.find( ".logout" ).on( "click", logout );
	ele.find( ".ui-icon-recycle" ).on( "click", function() {
		var btn = $( this );

		btn.addClass( "spin" );
		cloudSync( function() {
			btn.removeClass( "spin" );
		} );
	} );
	return ele;
}

function testSite( site, id, callback ) {
	$.ajax( {
		url: ( site.ssl === "1" ? "https://" : "http://" ) + site.os_ip + "/jo?pw=" + encodeURIComponent( site.os_pw ),
		type: "GET",
		dataType: "json",
		beforeSend: function( xhr ) {
			if ( typeof site.auth_user !== "undefined" && typeof site.auth_pw !== "undefined" ) {
				xhr.setRequestHeader( "Authorization", "Basic " + btoa( site.auth_user + ":" + site.auth_pw ) );
			}
		}
	} ).then(
		function() {
			callback( id, true );
		},
		function() {
			callback( id, false );
		}
	);
}

// Update the panel list of sites
function updateSiteList( names, current ) {
	var list = "",
		select = $( "#site-selector" );

	$.each( names, function() {
		list += "<option " + ( this.toString() === current ? "selected " : "" ) + "value='" + htmlEscape( this ) + "'>" + this + "</option>";
	} );

	$( "#info-list" ).find( "li[data-role='list-divider']" ).text( current );

	select.html( list );
	if ( select.parent().parent().hasClass( "ui-select" ) ) {
		select.selectmenu( "refresh" );
	}
}

// Change the current site
function updateSite( newsite ) {
	storage.get( "sites", function( data ) {
		var sites = parseSites( data.sites );
		if ( newsite in sites ) {
			closePanel( function() {
				storage.set( { "current_site":newsite }, checkConfigured );
			} );
		}
	} );
}

function findLocalSiteName( sites, callback ) {
	for ( var site in sites ) {
		if ( sites.hasOwnProperty( site ) ) {
			if ( currIp.indexOf( sites[ site ].os_ip ) !== -1 ) {
				callback( site );
				return;
			}
		}
	}

	callback( false );
}

// Automatic device detection functions
function updateDeviceIP( finishCheck ) {
	var finish = function( result ) {
		deviceip = result;

		if ( typeof finishCheck === "function" ) {
			finishCheck( result );
		}
	},
	ip;

	if ( isChromeApp ) {
		chrome.system.network.getNetworkInterfaces( function( data ) {
			var i;
			for ( i in data ) {
				if ( data.hasOwnProperty( i ) ) {
					if ( /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test( data[ i ].address ) ) {
						ip = data[ i ].address;
					}
				}
			}

			finish( ip );
		} );
	} else {
		try {

			// Request the device's IP address
			networkinterface.getWiFiIPAddress( function( data ) {
				ip = data.ip;
				finish( ip );
			} );
		} catch ( err ) {
			findRouter( function( status, data ) {
				finish( !status ? undefined : data );
			} );
		}
	}
}

function isLocalIP( ip ) {
	var chk = parseIntArray( ip.split( "." ) );

	// Check if the IP is on a private network, if not don't enable automatic scanning
	return ( chk[ 0 ] === 10 || chk[ 0 ] === 127 || ( chk[ 0 ] === 172 && chk[ 1 ] > 17 && chk[ 1 ] < 32 ) || ( chk[ 0 ] === 192 && chk[ 1 ] === 168 ) );
}

function startScan( port, type ) {

	/*
		The type represents the OpenSprinkler model as defined below
		0 - OpenSprinkler using firmware 2.0+
		1 - OpenSprinkler Pi (Python) using 1.9+
		2 - OpenSprinkler using firmware 1.8.3
		3 - OpenSprinkler Pi (Python) using 1.8.3
	*/

	var ip = deviceip.split( "." ),
		scanprogress = 1,
		devicesfound = 0,
		newlist = "",
		suffix = "",
		oldips = [],
		isCanceled = false,
		i, url, notfound, found, baseip, checkScanStatus, scanning, dtype, text;

	type = type || 0;
	port = ( typeof port === "number" ) ? port : 80;

	storage.get( "sites", function( data ) {
		var oldsites = parseSites( data.sites ),
			i;

		for ( i in oldsites ) {
			if ( oldsites.hasOwnProperty( i ) ) {
				oldips.push( oldsites[ i ].os_ip );
			}
		}
	} );

	notfound = function() {
		scanprogress++;
	};

	found = function( reply ) {
		scanprogress++;
		var ip = $.mobile.path.parseUrl( this.url ).authority,
			fwv, tmp;

		if ( $.inArray( ip, oldips ) !== -1 ) {
			return;
		}

		if ( this.dataType === "text" ) {
			tmp = reply.match( /var\s*ver=(\d+)/ );
			if ( !tmp ) {
				return;
			}
			fwv = tmp[ 1 ];
		} else {
			if ( !reply.hasOwnProperty( "fwv" ) ) {
				return;
			}
			fwv = reply.fwv;
		}

		devicesfound++;

		newlist += "<li><a class='ui-btn ui-btn-icon-right ui-icon-carat-r' href='#' data-ip='" + ip + "'>" + ip +
				"<p>" + _( "Firmware" ) + ": " + getOSVersion( fwv ) + "</p>" +
			"</a></li>";
	};

	// Check if scanning is complete
	checkScanStatus = function() {
		if ( isCanceled === true ) {
			$.mobile.loading( "hide" );
			clearInterval( scanning );
			return false;
		}

		if ( scanprogress === 245 ) {
			$.mobile.loading( "hide" );
			clearInterval( scanning );
			if ( !devicesfound ) {
				if ( type === 0 ) {
					startScan( 8080, 1 );

				} else if ( type === 1 ) {
					startScan( 80, 2 );

				} else if ( type === 2 ) {
					startScan( 8080, 3 );

				} else {
					showerror( _( "No new devices were detected on your network" ) );
				}
			} else {
				newlist = $( newlist );

				newlist.find( "a" ).on( "click", function() {
					addFound( $( this ).data( "ip" ) );
					return false;
				} );

				showSiteSelect( newlist );
			}
		}
	};

	ip.pop();
	baseip = ip.join( "." );

	if ( type === 0 ) {
		text = _( "Scanning for OpenSprinkler" );
	} else if ( type === 1 ) {
		text = _( "Scanning for OpenSprinkler Pi" );
	} else if ( type === 2 ) {
		text = _( "Scanning for OpenSprinkler (1.8.3)" );
	} else if ( type === 3 ) {
		text = _( "Scanning for OpenSprinkler Pi (1.8.3)" );
	}

	$.mobile.loading( "show", {
		html: "<h1>" + text + "</h1><p class='cancel tight center inline-icon'>" +
			"<span class='btn-no-border ui-btn ui-icon-delete ui-btn-icon-notext'></span>" + _( "Cancel" ) + "</p>",
		textVisible: true,
		theme: "b"
	} );

	$( ".ui-loader" ).find( ".cancel" ).one( "click", function() {
		isCanceled = true;
	} );

	// Start scan
	for ( i = 1; i <= 244; i++ ) {
		ip = baseip + "." + i;
		if ( type < 2 ) {
			suffix = "/jo";
			dtype = "json";
		} else {
			dtype = "text";
		}
		url = "http://" + ip + ( ( port && port !== 80 ) ? ":" + port : "" ) + suffix;
		$.ajax( {
			url: url,
			type: "GET",
			dataType: dtype,
			timeout: 6000,
			global: false,
			error: notfound,
			success: found
		} );
	}
	scanning = setInterval( checkScanStatus, 200 );
}

function findRouter( callback ) {
	callback = callback || function() {};

	var routerIPs = [ "192.168.1.1", "10.0.1.1", "192.168.1.220", "192.168.2.1", "10.1.1.1", "192.168.11.1", "192.168.0.1",
					"192.168.0.30", "192.168.0.50", "192.168.10.1", "192.168.20.1", "192.168.30.1", "192.168.62.1", "192.168.102.1",
					"192.168.1.254", "192.168.0.227", "10.0.0.138", "192.168.123.254", "192.168.4.1", "10.0.0.2", "10.0.2.1",
					"10.0.3.1", "10.0.4.1", "10.0.5.1" ],
		total = routerIPs.length,
		scanprogress = 0,
		reply = function( status, ip ) {
			scanprogress++;
			if ( status === true ) {
				routerFound = ip;
			}
		},
		checkScanStatus = function() {
			if ( scanprogress === total || typeof routerFound === "string" ) {
				clearInterval( scanning );
				if ( typeof routerFound === "string" ) {
					callback( true, routerFound );
				} else {
					callback( false );
				}
			}
		},
		scanning, routerFound, i;

	for ( i = 0; i < total; i++ ) {
		if ( typeof routerFound !== "string" ) {
			ping( routerIPs[ i ], reply );
		}
	}
	scanning = setInterval( checkScanStatus, 50 );
}

function ping( ip, callback ) {
	callback = callback || function() {};

	if ( !ip || ip === "" ) {
		callback( false );
	}

	$.ajax( {
		url: "http://" + ip,
		type: "GET",
		timeout: 6000,
		global: false
	} ).then(
		function() {
			callback( true, ip );
		},
		function( e ) {
			if ( e.statusText === "timeout" ) {
				callback( false );
			} else {
				callback( true, ip );
			}
		}
	);
}

// Show popup for new device after populating device IP with selected result
function addFound( ip ) {
	$( "#site-select" ).one( "popupafterclose", function() {
		showAddNew( ip );
	} ).popup( "close" );
}

// Weather functions
function showZimmermanAdjustmentOptions( button, callback ) {
	$( ".ui-popup-active" ).find( "[data-role='popup']" ).popup( "close" );

	// Sensitivity and baseline values for Humidity, Temp and Rainfall for Zimmerman adjustment
	var options = $.extend( {}, {
			h: 100,
			t: 100,
			r: 100,
			bh: 30,
			bt: 70,
			br: 0
		}, unescapeJSON( button.value ) ),

		// Enable Zimmerman extension to set weather conditions as baseline for adjustment
		hasBaseline = checkOSVersion( 2162 );

	// OSPi stores in imperial so convert to metric and adjust to nearest 1/10ths of a degree and mm
	if ( isMetric ) {
		options.bt = Math.round( ( ( options.bt - 32 ) * 5 / 9 ) * 10 ) / 10;
		options.br = Math.round( ( options.br * 25.4 ) * 10 ) / 10;
	}

	var popup = $( "<div data-role='popup' data-theme='a' id='adjustmentOptions'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + _( "Weather Adjustment Options" ) + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				"<p class='rain-desc center smaller'>" +
					_( "Set the baseline weather conditions for your location. " ) +
					_( "The Zimmerman method will adjust the watering duration based on differences from this reference point." ) +
				"</p>" +
				"<div class='ui-grid-b'>" +
					"<div class='ui-block-a'>" +
						"<label class='center'>" +
							_( "Temp" ) + ( isMetric ? " &#176;C" : " &#176;F" ) +
						"</label>" +
						"<input data-wrapper-class='pad_buttons' class='bt' type='number' " + ( isMetric ? "min='-20' max='50'" : "min='0' max='120'" ) + " value='" + options.bt + ( hasBaseline ? "'>" : "' disabled='disabled'>" ) +
					"</div>" +
					"<div class='ui-block-b'>" +
						"<label class='center'>" +
							_( "Rain" ) + ( isMetric ? " mm" : " \"" ) +
						"</label>" +
						"<input data-wrapper-class='pad_buttons' class='br' type='number' " + ( isMetric ? "min='0' max='25' step='0.1'" : "min='0' max='1' step='0.01'" ) + " value='" + options.br + ( hasBaseline ? "'>" : "' disabled='disabled'>" ) +
					"</div>" +
					"<div class='ui-block-c'>" +
						"<label class='center'>" +
							_( "Humidity" ) + " %" +
						"</label>" +
						"<input data-wrapper-class='pad_buttons' class='bh' type='number'  min='0' max='100' value='" + options.bh + ( hasBaseline ? "'>" : "' disabled='disabled'>" ) +
					"</div>" +
				"</div>" +
				"<p class='rain-desc center smaller'>" +
					_( "Set the sensitivity of the watering adjustment to changes in each of the above weather conditions." ) +
				"</p>" +
				"<span>" +
					"<fieldset class='ui-grid-b incr'>" +
						"<div class='ui-block-a'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-c'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" +
					"</fieldset>" +
					"<div class='ui-grid-b inputs'>" +
						"<div class='ui-block-a'>" +
							"<input data-wrapper-class='pad_buttons' class='t' type='number' min='0' max='100' value='" + options.t + "'>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<input data-wrapper-class='pad_buttons' class='r' type='number'  min='0' max='100' value='" + options.r + "'>" +
						"</div>" +
						"<div class='ui-block-c'>" +
							"<input data-wrapper-class='pad_buttons' class='h' type='number'  min='0' max='100' value='" + options.h + "'>" +
						"</div>" +
					"</div>" +
					"<fieldset class='ui-grid-b decr'>" +
						"<div class='ui-block-a'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-c'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" +
					"</fieldset>" +
				"</span>" +
				"<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" +
			"</div>" +
		"</div>" ),
		changeValue = function( pos, dir ) {
			var input = popup.find( ".inputs input" ).eq( pos ),
				val = parseInt( input.val() );

			if ( ( dir === -1 && val === 0 ) || ( dir === 1 && val === 100 ) ) {
				return;
			}

			input.val( val + dir );
		};

	popup.find( ".submit" ).on( "click", function() {
		var options = {
			h: parseInt( popup.find( ".h" ).val() ),
			t: parseInt( popup.find( ".t" ).val() ),
			r: parseInt( popup.find( ".r" ).val() )
		};

		if ( hasBaseline ) {
			$.extend( options, {
				bh: parseInt( popup.find( ".bh" ).val() ),
				bt: parseFloat( popup.find( ".bt" ).val() ),
				br: parseFloat( popup.find( ".br" ).val() )
			} );

			// OSPi strores in imperial so onvert metric at higher precision so we dont lose accuracy
			if ( isMetric ) {
				options.bt = Math.round( ( options.bt * 9 / 5 + 32 ) * 100 ) / 100;
				options.br = Math.round( ( options.br / 25.4 ) * 1000 ) / 1000;
			}
		}

		if ( button ) {
			button.value = escapeJSON( options );
		}

		callback();

		popup.popup( "close" );
		return false;
	} );

	popup.on( "focus", "input[type='number']", function() {
		this.value = "";
	} ).on( "blur", "input[type='number']", function() {

		// Generic min/max checker for Temp/Rain/Hum baseline as well as 0-100%
		var min = parseFloat( this.min ),
			max = parseFloat( this.max );

		if ( this.value === "" ) {
			this.value = "0";
		}
		if ( this.value < min || this.value > max ) {
			this.value = this.value < min ? min : max;
		}
	} );

	holdButton( popup.find( ".incr" ).children(), function( e ) {
		var pos = $( e.currentTarget ).index();
		changeValue( pos, 1 );
		return false;
	} );

	holdButton( popup.find( ".decr" ).children(), function( e ) {
		var pos = $( e.currentTarget ).index();
		changeValue( pos, -1 );
		return false;
	} );

	$( "#adjustmentOptions" ).remove();

	popup.css( "max-width", "380px" );

	openPopup( popup, { positionTo: "window" } );
}

function showAutoRainDelayAdjustmentOptions( button, callback ) {
	$( ".ui-popup-active" ).find( "[data-role='popup']" ).popup( "close" );

	var options = $.extend( {}, {
		d: 24
	}, unescapeJSON( button.value ) );

	var popup = $( "<div data-role='popup' data-theme='a' id='adjustmentOptions'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + _( "Weather Adjustment Options" ) + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				"<p class='rain-desc center smaller'>" +
					_( "If the weather reports any condition suggesting rain, a rain delay is automatically issued using the below set delay duration." ) +
				"</p>" +
				"<label class='center' for='delay_duration'>" + _( "Delay Duration (hours)" ) + "</label>" +
				"<div class='input_with_buttons'>" +
					"<button class='decr ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button>" +
					"<input id='delay_duration' type='number' pattern='[0-9]*' value='" + options.d + "'>" +
					"<button class='incr ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button>" +
				"</div>" +
				"<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" +
			"</div>" +
		"</div>" ),
		changeValue = function( dir ) {
			var input = popup.find( "#delay_duration" ),
				val = parseInt( input.val() );

			if ( ( dir === -1 && val === 0 ) || ( dir === 1 && val === 8760 ) ) {
				return;
			}

			input.val( val + dir );
		};

	popup.find( ".submit" ).on( "click", function() {
		options = { d: parseInt( popup.find( "#delay_duration" ).val() ) };

		if ( button ) {
			button.value = escapeJSON( options );
		}

		callback();

		popup.popup( "close" );
		return false;
	} );

	popup.on( "focus", "input[type='number']", function() {
		this.value = "";
	} ).on( "blur", "input[type='number']", function() {
		if ( this.value === "" || parseInt( this.value ) < 0 ) {
			this.value = "0";
		}
	} );

	holdButton( popup.find( ".incr" ), function() {
		changeValue( 1 );
		return false;
	} );

	holdButton( popup.find( ".decr" ), function() {
		changeValue( -1 );
		return false;
	} );

	$( "#adjustmentOptions" ).remove();

	popup.css( "max-width", "380px" );

	openPopup( popup, { positionTo: "window" } );
}

// Validates a Weather Underground location to verify it contains the data needed for Weather Adjustments
function validateWULocation( location, callback ) {
	if ( !controller.settings.wto || typeof controller.settings.wto.key !== "string" || controller.settings.wto.key === "" ) {
		callback( false );
	}

	$.ajax( {
		url: "https://api.weather.com/v2/pws/observations/hourly/7day?stationId=" + location + "&format=json&units=e&apiKey=" + controller.settings.wto.key,
		cache: true
	} ).done( function( data ) {
		if ( !data || data.errors ) {
			callback( false );
			return;
		}

		callback( true );
	} ).fail( function() {
		callback( false );
	} );
}

function showEToAdjustmentOptions( button, callback ) {
	$( ".ui-popup-active" ).find( "[data-role='popup']" ).popup( "close" );

	// Elevation and baseline ETo for ETo adjustment.
	var options = $.extend( {}, {
			baseETo: 0,
			elevation: 600
		},
		unescapeJSON( button.value )
	);

	if ( isMetric ) {
		options.baseETo = Math.round( options.baseETo * 25.4 * 10 ) / 10;
		options.elevation = Math.round( options.elevation / 3.28 );
	}

	var popup = $( "<div data-role='popup' data-theme='a' id='adjustmentOptions'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + _( "Weather Adjustment Options" ) + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				"<p class='rain-desc center smaller'>" +
					_( "Set the baseline potential evapotranspiration (ETo) and elevation for your location. " ) +
					_( "The ETo adjustment method will adjust the watering duration based on the difference between the baseline ETo and the current ETo." ) +
				"</p>" +
				"<div class='ui-grid-a'>" +
					"<div class='ui-block-a'>" +
						"<label class='center'>" +
							_( "Baseline ETo" ) + ( isMetric ? " (mm" : "(in" ) + "/day)" +
						"</label>" +
						"<input data-wrapper-class='pad_buttons' class='baseline-ETo' type='number' min='0' " + ( isMetric ? "max='25' step='0.1'" : "max='1' step='0.01'" ) + " value='" + options.baseETo + "'>" +
					"</div>" +
					"<div class='ui-block-b'>" +
						"<label class='center'>" +
							_( "Elevation" ) + ( isMetric ? " (m)" : " (ft)" ) +
						"</label>" +
						"<input data-wrapper-class='pad_buttons' class='elevation' type='number' step='1'" + ( isMetric ? "min='-400' max='9000'" : "min='-1400' max='30000'" ) + " value='" + options.elevation + "'>" +
					"</div>" +
				"</div>" +
				"<button class='detect-baseline-eto'>" + _( "Detect baseline ETo" ) + "</button>" +
				"<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" +
			"</div>" +
		"</div>"
	);

	popup.find( ".submit" ).on( "click", function() {
		options = {
			baseETo: parseFloat( popup.find( ".baseline-ETo" ).val() ),
			elevation: parseInt( popup.find( ".elevation" ).val() )
		};

		// Convert to imperial before storing.
		if ( isMetric ) {
			options.baseETo = Math.round( options.baseETo / 25.4 * 100 ) / 100;
			options.elevation = Math.round( options.elevation * 3.28 );
		}

		if ( button ) {
			button.value = escapeJSON( options );
		}

		callback();

		popup.popup( "close" );
		return false;
	} );

	popup.find( ".detect-baseline-eto" ).on( "click", function() {

		// Backup button contents so it can be restored after the request is completed.
		var buttonContents = $( ".detect-baseline-eto" ).html();

		showLoading( ".detect-baseline-eto" );

		$.ajax( {
			url: WEATHER_SERVER_URL + "/baselineETo?loc=" + encodeURIComponent( controller.settings.loc ),
			contentType: "application/json; charset=utf-8",
			success: function( data ) {

				var baselineETo = data.eto;

				// Convert to metric if necessary.
				if ( isMetric ) {
					baselineETo = Math.round( baselineETo * 25.4 * 100 ) / 100;
				}

				$( ".baseline-ETo" ).val( baselineETo );

				window.alert( "Detected baseline ETo for configured location is " + baselineETo + ( isMetric ? "mm" : "in" ) + "/day" );
			},
			error: function( xhr, errorType ) {

				// Use the response body for HTTP errors and the error type for JQuery errors.
				var errorMessage = "Unable to detect baseline ETo: " +
					( xhr.status ? xhr.responseText + "(" + xhr.status + ")" : errorType );
				window.alert( errorMessage );
				window.console.error( errorMessage );
			},
			complete: function( ) {
				$( ".detect-baseline-eto" ).html( buttonContents );
			}
		} );

		return false;
	} );

	popup.on( "focus", "input[type='number']", function() {
		this.value = "";
	} ).on( "blur", "input[type='number']", function() {

		// Generic min/max checker for each option.
		var min = parseFloat( this.min ),
			max = parseFloat( this.max );

		if ( this.value === "" ) {
			this.value = "0";
		}
		if ( this.value < min || this.value > max ) {
			this.value = this.value < min ? min : max;
		}
	} );

	$( "#adjustmentOptions" ).remove();

	popup.css( "max-width", "380px" );

	openPopup( popup, { positionTo: "window" } );
}

function formatTemp( temp ) {
	if ( isMetric ) {
		temp = Math.round( ( temp - 32 ) * ( 5 / 9 ) * 10 ) / 10 + " &#176;C";
	} else {
		temp = Math.round( temp * 10 ) / 10 + " &#176;F";
	}
	return temp;
}

function formatPrecip( precip ) {
	if ( isMetric ) {
		precip = Math.round( precip * 25.4 * 10 ) / 10 + " mm";
	} else {
		precip = Math.round( precip * 100 ) / 100 + " in";
	}
	return precip;
}

function formatHumidity( humidity ) {
	return Math.round( humidity ) + " %";
}

function formatSpeed( speed ) {
	if ( isMetric ) {
		speed = Math.round( speed * 1.6 * 10 ) / 10 + " km/h";
	} else {
		speed = Math.round( speed * 10 ) / 10 + " mph";
	}
	return speed;
}

function hideWeather() {
	$( "#weather" ).empty().parents( ".info-card" ).addClass( "noweather" );
}

function finishWeatherUpdate() {
	updateWeatherBox();
	$.mobile.document.trigger( "weatherUpdateComplete" );
}

function updateWeather() {
	var now = new Date().getTime();

	if ( weather && weather.providedLocation === controller.settings.loc && now - weather.lastUpdated < 60 * 60 * 100 ) {
		finishWeatherUpdate();
		return;
	} else if ( localStorage.weatherData ) {
		try {
			var weatherData = JSON.parse( localStorage.weatherData );
			if ( weatherData.providedLocation === controller.settings.loc && now - weatherData.lastUpdated < 60 * 60 * 100 ) {
				weather = weatherData;
				finishWeatherUpdate();
				return;
			}
		} catch ( err ) {}
	}

	weather = undefined;

	if ( controller.settings.loc === "" ) {
		hideWeather();
		return;
	}

	showLoading( "#weather" );

	$.ajax( {
		url: WEATHER_SERVER_URL + "/weatherData?loc=" +
			encodeURIComponent( controller.settings.loc ),
		contentType: "application/json; charset=utf-8",
		success: function( data ) {

			// Hide the weather if no data is returned
			if ( typeof data !== "object" ) {
				hideWeather();
				return;
			}

			currentCoordinates = data.location;

			weather = data;
			data.lastUpdated = new Date().getTime();
			data.providedLocation = controller.settings.loc;
			localStorage.weatherData = JSON.stringify( data );
			finishWeatherUpdate();
		}
	} );
}

function checkURLandUpdateWeather() {
	var finish = function( wsp ) {
		if ( wsp ) {
			WEATHER_SERVER_URL = currPrefix + wsp;
		} else {
			WEATHER_SERVER_URL = DEFAULT_WEATHER_SERVER_URL;
		}

		updateWeather();
	};

	if ( controller.settings.wsp ) {
		if ( controller.settings.wsp === "weather.opensprinkler.com" ) {
			finish();
			return;
		}

		finish( controller.settings.wsp );
		return;
	}

	return $.get( currPrefix + currIp + "/su" ).then( function( reply ) {
		var wsp = reply.match( /value="([\w|:|/|.]+)" name=wsp/ );
		finish( wsp ? wsp[ 1 ] : undefined );
	} );
}

function updateWeatherBox() {
	$( "#weather" )
		.html(
			( controller.settings.rd ? "<div class='rain-delay red'><span class='icon ui-icon-alert'></span>Rain Delay<span class='time'>" + dateToString( new Date( controller.settings.rdst * 1000 ), undefined, true ) + "</span></div>" : "" ) +
			"<div title='" + weather.description + "' class='wicon'><img src='https://openweathermap.org/img/w/" + weather.icon + ".png'></div>" +
			"<div class='inline tight'>" + formatTemp( weather.temp ) + "</div><br><div class='inline location tight'>" + _( "Current Weather" ) + "</div>" +
			( typeof weather.alert === "object" ? "<div><button class='tight help-icon btn-no-border ui-btn ui-icon-alert ui-btn-icon-notext ui-corner-all'></button>" + weather.alert.type + "</div>" : "" ) )
		.off( "click" ).on( "click", function( event ) {
			var target = $( event.target );
			if ( target.hasClass( "rain-delay" ) || target.parents( ".rain-delay" ).length ) {
				areYouSure( _( "Do you want to turn off rain delay?" ), "", function() {
					showLoading( "#weather" );
					sendToOS( "/cv?pw=&rd=0" ).done( function() {
						updateController( updateWeather );
					} );
				} );
			} else {
				changePage( "#forecast" );
			}
			return false;
		} )
		.parents( ".info-card" ).removeClass( "noweather" );
}

function coordsToLocation( lat, lon, callback, fallback ) {
	fallback = fallback || lat + "," + lon;

	$.getJSON( "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyDaT_HTZwFojXmvYIhwWudK00vFXzMmOKc&result_type=locality|sublocality|administrative_area_level_1|country", function( data ) {
		if ( data.results.length === 0 ) {
			callback( fallback );
			return;
		}

		data = data.results;
		fallback = data[ 0 ].formatted_address;

		var hasEnd = false;

		for ( var item in data ) {
			if ( data.hasOwnProperty( item ) ) {
				if ( $.inArray( "locality", data[ item ].types ) > -1 ||
					 $.inArray( "sublocality", data[ item ].types ) > -1 ||
					 $.inArray( "postal_code", data[ item ].types ) > -1 ||
					 $.inArray( "street_address", data[ item ].types ) > -1 ) {
						hasEnd = true;
						break;
				}
			}
		}

		if ( hasEnd === false ) {
			callback( fallback );
			return;
		}

		data = data[ item ].address_components;

		var location = "",
			country = "";

		hasEnd = false;

		for ( item in data ) {
			if ( data.hasOwnProperty( item ) && !hasEnd ) {
				if ( location === "" && $.inArray( "locality", data[ item ].types ) > -1 ) {
					location = data[ item ].long_name + ", " + location;
				}

				if ( location === "" && $.inArray( "sublocality", data[ item ].types ) > -1 ) {
					location = data[ item ].long_name + ", " + location;
				}

				if ( $.inArray( "administrative_area_level_1", data[ item ].types ) > -1 ) {
					location += data[ item ].long_name;
					hasEnd = true;
				}

				if ( $.inArray( "country", data[ item ].types ) > -1 ) {
					country = data[ item ].long_name;
				}
			}
		}

		if ( !hasEnd ) {
			location += country;
		}

		callback( location );
	} );
}

function getSunTimes( date ) {
	date = date || new Date( controller.settings.devt * 1000 );

	var times = SunCalc.getTimes( date, currentCoordinates[ 0 ], currentCoordinates[ 1 ] ),
		sunrise = times.sunrise,
		sunset = times.sunset,
		tzOffset = getTimezoneOffset();

	sunrise.setUTCMinutes( sunrise.getUTCMinutes() + tzOffset );
	sunset.setUTCMinutes( sunset.getUTCMinutes() + tzOffset );

	sunrise = ( sunrise.getUTCHours() * 60 + sunrise.getUTCMinutes() );
	sunset = ( sunset.getUTCHours() * 60 + sunset.getUTCMinutes() );

	return [ sunrise, sunset ];
}

function makeAttribution( provider ) {
	if ( typeof provider !== "string" ) { return ""; }

	var attrib = "<div class='weatherAttribution'>";
	switch ( provider ) {
		case "DarkSky":
		case "DS":
			attrib += "<a href='https://darksky.net/poweredby/' target='_blank'>" + _( "Powered by Dark Sky" ) + "</a>";
			break;
		case "OWM":
			attrib += "<a href='https://openweathermap.org/' target='_blank'>" + _( "Powered by OpenWeather" ) + "</a>";
			break;
		case "WUnderground":
		case "WU":
			attrib += "<a href='https://wunderground.com/' target='_blank'>" + _( "Powered by Weather Underground" ) + "</a>";
			break;
		case "local":
			attrib += _( "Powered by your Local PWS" );
			break;
		case "Manual":
			attrib += _( "Using manual watering" );
			break;
		default:
			attrib += _( "Unrecognised weather provider" );
			break;
	}
	return attrib + "</div>";
}

function showForecast() {
	var page = $( "<div data-role='page' id='forecast'>" +
			"<div class='ui-content' role='main'>" +
				"<ul data-role='listview' data-inset='true'>" +
					makeForecast() +
				"</ul>" +
				makeAttribution( weather.wp || weather.weatherProvider ) +
			"</div>" +
		"</div>" );

	changeHeader( {
		title: _( "Forecast" ),
		leftBtn: {
			icon: "carat-l",
			text: _( "Back" ),
			class: "ui-toolbar-back-btn",
			on: goBack
		},
		rightBtn: {
			icon: "refresh",
			text: _( "Refresh" ),
			on: function() {
				$.mobile.loading( "show" );
				$.mobile.document.one( "weatherUpdateComplete", function() {
					$.mobile.loading( "hide" );
				} );
				updateWeather();
			}
		}
	} );

	page.one( "pagehide", function() {
		page.remove();
	} );

	page.find( ".alert" ).on( "click", function() {
		openPopup( $( "<div data-role='popup' data-theme='a'>" +
				"<div data-role='header' data-theme='b'>" +
					"<h1>" + weather.alert.name + "</h1>" +
				"</div>" +
				"<div class='ui-content'>" +
					"<span style='white-space: pre-wrap'>" + $.trim( weather.alert.message ) + "</span>" +
				"</div>" +
			"</div>" ) );
	} );

	$( "#forecast" ).remove();
	$.mobile.pageContainer.append( page );
}

function makeForecast() {
	var list = "",
		sunrise = controller.settings.sunrise ? controller.settings.sunrise : getSunTimes()[ 0 ],
		sunset = controller.settings.sunset ? controller.settings.sunset : getSunTimes()[ 1 ],
		i, date, times;

	var weekdays = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

	list += "<li data-icon='false' class='center'>" +
			"<div>" + _( "Now" ) + "</div><br>" +
			"<div title='" + weather.description + "' class='wicon'><img src='https://openweathermap.org/img/w/" + weather.icon + ".png'></div>" +
			"<span>" + formatTemp( weather.temp ) + "</span><br>" +
			"<span>" + _( "Sunrise" ) + "</span><span>: " + pad( parseInt( sunrise / 60 ) % 24 ) + ":" + pad( sunrise % 60 ) + "</span> " +
			"<span>" + _( "Sunset" ) + "</span><span>: " + pad( parseInt( sunset / 60 ) % 24 ) + ":" + pad( sunset % 60 ) + "</span>" +
		"</li>";

	for ( i = 1; i < weather.forecast.length; i++ ) {
		date = new Date( weather.forecast[ i ].date * 1000 );
		times = getSunTimes( date );

		sunrise = times[ 0 ];
		sunset = times[ 1 ];

		list += "<li data-icon='false' class='center'>" +
				"<div>" + date.toLocaleDateString() + "</div><br>" +
				"<div title='" + weather.forecast[ i ].description + "' class='wicon'><img src='https://openweathermap.org/img/w/" + weather.forecast[ i ].icon + ".png'></div>" +
				"<span>" + _( weekdays[ date.getDay() ] ) + "</span><br>" +
				"<span>" + _( "Low" ) + "</span><span>: " + formatTemp( weather.forecast[ i ].temp_min ) + "  </span>" +
				"<span>" + _( "High" ) + "</span><span>: " + formatTemp( weather.forecast[ i ].temp_max ) + "</span><br>" +
				"<span>" + _( "Sunrise" ) + "</span><span>: " + pad( parseInt( sunrise / 60 ) % 24 ) + ":" + pad( sunrise % 60 ) + "</span> " +
				"<span>" + _( "Sunset" ) + "</span><span>: " + pad( parseInt( sunset / 60 ) % 24 ) + ":" + pad( sunset % 60 ) + "</span>" +
			"</li>";
	}

	return list;
}

function overlayMap( callback ) {

	// Looks up the location and shows a list possible matches for selection
	// Returns the selection to the callback
	$( "#location-list" ).popup( "destroy" ).remove();
	$.mobile.loading( "show" );

	callback = callback || function() {};

	var popup = $( "<div data-role='popup' id='location-list' data-theme='a' style='background-color:rgb(229, 227, 223);'>" +
			"<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-b ui-icon-delete ui-btn-icon-notext ui-btn-right'>" + _( "Close" ) + "</a>" +
				"<iframe style='border:none' src='" + getAppURLPath() + "map.html' width='100%' height='100%' seamless=''></iframe>" +
		"</div>" ),
		getCurrentLocation = function( callback ) {
			callback = callback || function( result ) {
				if ( result ) {
					iframe.get( 0 ).contentWindow.postMessage( {
						type: "currentLocation",
						payload: {
							lat: result.coords.latitude,
							lon: result.coords.longitude
						}
					}, "*" );
				}
			};

			var exit = function( result ) {
					clearTimeout( loadMsg );
					$.mobile.loading( "hide" );

					if ( !result ) {
						showerror( _( "Unable to retrieve your current location" ) );
					}

					callback( result );
				},
				loadMsg;

			try {
				loadMsg = setTimeout( function() {
					$.mobile.loading( "show", {
						html: "<div class='logo'></div><h1 style='padding-top:5px'>" + _( "Attempting to retrieve your current location" ) + "</h1></p>",
						textVisible: true,
						theme: "b"
					} );
				}, 100 );
				navigator.geolocation.getCurrentPosition( function( position ) {
					clearTimeout( loadMsg );
					exit( position );
				}, function() {
					exit( false );
				}, { timeout: 10000 } );
			} catch ( err ) { exit( false ); }
		},
		updateStations = function( latitude, longitude ) {
			var key = $( "#wtkey" ).val();
			if ( key === "" ) {
				return;
			}

			$.ajax( {
				url: "https://api.weather.com/v3/location/near?format=json&product=pws&apiKey=" + key +
						"&geocode=" + encodeURIComponent( latitude ) + "," + encodeURIComponent( longitude ),
				cache: true
			} ).done( function( data ) {
				var sortedData = [];

				data.location.stationId.forEach( function( id, index ) {
					sortedData.push( {
						id: id,
						lat: data.location.latitude[ index ],
						lon: data.location.longitude[ index ],
						message: data.location.stationId[ index ]
					} );
				} );

				if ( sortedData.length > 0 ) {
					sortedData = encodeURIComponent( JSON.stringify( sortedData ) );
					iframe.get( 0 ).contentWindow.postMessage( {
						type: "pwsData",
						payload: sortedData
					}, "*" );
				}
			} );
		},
		iframe = popup.find( "iframe" ),
		locInput = $( "#loc" ).val(),
		current = {
			lat: locInput.match( regex.gps ) ? locInput.split( "," )[ 0 ] : currentCoordinates[ 0 ],
			lon: locInput.match( regex.gps ) ? locInput.split( "," )[ 1 ] : currentCoordinates[ 1 ]
		},
		dataSent = false;

	// Wire in listener for communication from iframe
	$.mobile.window.off( "message onmessage" ).on( "message onmessage", function( e ) {
		var data = e.originalEvent.data;

		if ( typeof data.WS !== "undefined" ) {
			var coords = data.WS.split( "," );
			callback( coords.length > 1 ? coords : data.WS, data.station );
			dataSent = true;
			popup.popup( "destroy" ).remove();
		} else if ( data.loaded === true ) {
			$.mobile.loading( "hide" );
		} else if ( typeof data.location === "object" ) {
			updateStations( data.location[ 0 ], data.location[ 1 ] );
		} else if ( data.dismissKeyboard === true ) {
			document.activeElement.blur();
		} else if ( data.getLocation === true ) {
			getCurrentLocation();
		}
	} );

	iframe.one( "load", function() {
		if ( current.lat === 0 && current.lon === 0 ) {
			getCurrentLocation();
		}

		this.contentWindow.postMessage( {
			type: "startLocation",
			payload: {
				start: current
			}
		}, "*" );
	} );

	popup.one( "popupafterclose", function() {
		if ( dataSent === false ) {
			callback( false );
		}
	} );

	openPopup( popup, {
		beforeposition: function() {
			popup.css( {
				width: window.innerWidth - 36,
				height: window.innerHeight - 28
			} );
		},
		x: 0,
		y: 0
	} );

	updateStations( current.lat, current.lon );
}

// Ensure error codes align with reboot causes in Firmware defines.h
var rebootReasons =	{ 0: _( "None" ), 1: _( "Factory Reset" ), 2: _( "Reset Button" ), 3: _( "WiFi Change" ),
					4: _( "Web Request" ), 5: _( "Web Request" ), 6: _( "WiFi Configure" ), 7: _( "Firmware Update" ),
					8: _( "Weather Failure" ), 9: _( "Network Failure" ), 10: _( "Clock Update" ), 99: _( "Power On" ) };

// Ensure error codes align with App errors.ts (codes > 0) and HTTP error codes in Firmware defines.h (codes < 0)
var weatherErrors = {
	"-4":	_( "Empty Response" ),
	"-3":	_( "Timed Out" ),
	"-2":	_( "Connection Failed" ),
	"-1":	_( "No Response" ),
	"0":	_( "Success" ),
	"1":	_( "Weather Data Error" ),
	"10":	_( "Building Weather History" ),
	"11":	_( "Weather Provider Response Incomplete" ),
	"12":	_( "Weather Provider Request Failed" ),
	"2":	_( "Location Error" ),
	"20":	_( "Location Request Error" ),
	"21":	_( "Location Not Found" ),
	"22":	_( "Invalid Location Format" ),
	"3":	_( "PWS Error" ),
	"30":	_( "Invalid WUnderground PWS" ),
	"31":	_( "Invalid WUnderground Key" ),
	"32":	_( "WUnderground Authentication Error" ),
	"33":	_( "Unsupported WUnderground Method" ),
	"34":	_( "No WUnderground PWS Provided" ),
	"4":	_( "Adjustment Method Error" ),
	"40":	_( "Unsupported Adjustment Method" ),
	"41":	_( "No Adjustment Method Provided" ),
	"5":	_( "Adjustment Options Error" ),
	"50":	_( "Corrupt Adjustment Options" ),
	"51":	_( "Missing Adjustment Option" ),
	"99":	_( "Unexpected Error" )
};

function getRebootReason( reason ) {
	if ( reason in rebootReasons ) {
		return rebootReasons[ reason ];
	}

	return _( "Unrecognised" ) + " (" + reason + ")";
}

function getWeatherError( err ) {
	var errType = Math.floor( err / 10 );

	if ( err in weatherErrors ) {
		return weatherErrors[ err ];
	} else if ( err <= 59 && err >= 10 && errType in weatherErrors ) {
		return weatherErrors[ errType ];
	}

	return _( "Unrecognised" ) + " (" + err + ")";
}

function getWeatherStatus( status ) {
	if ( status < 0 ) {
		return "<font class='debugWUError'>" + _( "Offline" ) + "</font>";
	} else if ( status > 0 ) {
		return "<font class='debugWUError'>" + _( "Error" ) + "</font>";
	} else {
		return "<font class='debugWUOK'>" + _( "Online" ) + "</font>";
	}
}

function getWiFiRating( rssi ) {
	if ( rssi < -80 ) {
		return _( "Unuseable" );
	} else if ( rssi < -70 ) {
		return _( "Poor" );
	} else if ( rssi < -60 ) {
		return _( "Fair" );
	} else if ( rssi < -50 ) {
		return _( "Good" );
	} else {
		return _( "Excellent" );
	}
}

function debugWU() {
	var popup = "<div data-role='popup' id='debugWU' class='ui-content ui-page-theme-a'>";

	popup += "<div class='debugWUHeading'>System Status</div>" +
			"<table class='debugWUTable'>" +
				( typeof controller.settings.lupt === "number" ? "<tr><td>" + _( "Last Reboot" ) + "</td><td>" +
					( controller.settings.lupt < 1000 ? "--" : dateToString( new Date( controller.settings.lupt * 1000 ), null, 2 ) ) + "</td></tr>" : "" ) +
				( typeof controller.settings.lrbtc === "number" ? "<tr><td>" + _( "Reboot Reason" ) + "</td><td>" + getRebootReason( controller.settings.lrbtc ) + "</td></tr>" : "" ) +
				( typeof controller.settings.RSSI === "number" ? "<tr><td>" + _( "WiFi Strength" ) + "</td><td>" + getWiFiRating( controller.settings.RSSI ) + "</td></tr>" : "" ) +
				( typeof controller.settings.wterr === "number" ? "<tr><td>" + _( "Weather Service" ) + "</td><td>" + getWeatherStatus( controller.settings.wterr ) + "</td></tr>" : "" ) +
			"</table>" +
			"<div class='debugWUHeading'>Watering Level</div>" +
			"<table class='debugWUTable'>" +
				( typeof controller.options.uwt !== "undefined" ? "<tr><td>" + _( "Method" ) + "</td><td>" + getAdjustmentMethod( controller.options.uwt ).name + "</td></tr>" : "" ) +
				( typeof controller.options.wl !== "undefined" ? "<tr><td>" + _( "Watering Level" ) + "</td><td>" + controller.options.wl + " %</td></tr>" : "" ) +
				( typeof controller.settings.lswc === "number" ? "<tr><td>" + _( "Last Updated" ) + "</td><td>" +
					( controller.settings.lswc === 0  ? _( "Never" ) : humaniseDuration( controller.settings.devt * 1000, controller.settings.lswc * 1000 ) ) + "</td></tr>" : "" ) +
			"</table>" +
			"<div class='debugWUHeading'>Weather Service Details</div>" +
			"<div class='debugWUScrollable'>" +
			"<table class='debugWUTable'>";

	if ( typeof controller.settings.wtdata === "object" && Object.keys( controller.settings.wtdata ).length > 0 ) {
		popup += ( typeof controller.settings.wtdata.h !== "undefined" ? "<tr><td>" + _( "Mean Humidity" ) + "</td><td>" + formatHumidity( controller.settings.wtdata.h ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.t !== "undefined" ? "<tr><td>" + _( "Mean Temp" ) + "</td><td>" + formatTemp( controller.settings.wtdata.t ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.p !== "undefined" ? "<tr><td>" + _( "Total Rain" ) + "</td><td>" + formatPrecip( controller.settings.wtdata.p ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.eto !== "undefined" ? "<tr><td>" + _( "ETo" ) + "</td><td>" + formatPrecip( controller.settings.wtdata.eto ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.radiation !== "undefined" ? "<tr><td>" + _( "Mean Radiation" ) + "</td><td>" + controller.settings.wtdata.radiation + " kWh/m2</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.minT !== "undefined" ? "<tr><td>" + _( "Min Temp" ) + "</td><td>" + formatTemp( controller.settings.wtdata.minT ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.maxT !== "undefined" ? "<tr><td>" + _( "Max Temp" ) + "</td><td>" + formatTemp( controller.settings.wtdata.maxT ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.minH !== "undefined" ? "<tr><td>" + _( "Min Humidity" ) + "</td><td>" + formatHumidity( controller.settings.wtdata.minH ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.maxH !== "undefined" ? "<tr><td>" + _( "Max Humidity" ) + "</td><td>" + formatHumidity( controller.settings.wtdata.maxH ) + "</td></tr>" : "" ) +
			( typeof controller.settings.wtdata.wind !== "undefined" ? "<tr><td>" + _( "Mean Wind" ) + "</td><td>" + formatSpeed( controller.settings.wtdata.wind ) + "</td></tr>" : "" );
	}
	popup += ( typeof controller.settings.lwc === "number" ? "<tr><td>" + _( "Last Request" ) + "</td><td>" + dateToString( new Date( controller.settings.lwc * 1000 ), null, 2 ) + "</td></tr>" : "" );
	popup += ( typeof controller.settings.wterr === "number" ? "<tr><td>" + _( "Last Response" ) + "</td><td>" + getWeatherError( controller.settings.wterr ) + "</td></tr>" : "" );
	popup += "</table></div>";

	if ( controller.settings.wtdata && ( typeof controller.settings.wtdata.wp === "string" || typeof controller.settings.wtdata.weatherProvider === "string" ) ) {
		popup += "<hr>";
		popup += makeAttribution( controller.settings.wtdata.wp || controller.settings.wtdata.weatherProvider );
	}
	popup += "</div>";

	openPopup( $( popup ) );

	return false;
}

function showRainDelay() {
	$( ".ui-popup-active" ).find( "[data-role='popup']" ).popup( "close" );

	showDurationBox( {
		title: _( "Change Rain Delay" ),
		callback: raindelay,
		label: _( "Duration" ),
		maximum: 31536000,
		granularity: 2,
		preventCompression: true,
		incrementalUpdate: false,
		updateOnChange: false,
		helptext:
			_( "Enable manual rain delay by entering a value into the input below. To turn off a currently enabled rain delay use a value of 0." )
	} );
}

/** Returns the adjustment method for the corresponding ID, or a list of all methods if no ID is specified. */
function getAdjustmentMethod( id ) {
    var methods = [
        { name: _( "Manual" ), id: 0 },
        { name: "Zimmerman", id: 1 },
        { name: _( "Auto Rain Delay" ), id: 2, minVersion: 216 },
		{ name: "ETo", id: 3, minVersion: 216 }
    ];

    if ( id === undefined ) {
        return methods;
    }

	return methods[ id & ~( 1 << 7 ) ];
}

function getCurrentAdjustmentMethodId() {
	return controller.options.uwt & ~( 1 << 7 );
}

function getRestriction( id ) {
	return [ {
				isCurrent: 0,
				name: _( "None" )
			},
			{
				isCurrent: ( ( controller.options.uwt >> 7 ) & 1 ) ? true : false,
				name: _( "California Restriction" )
			} ][ id ];
}

function setRestriction( id, uwt ) {
	uwt = uwt || controller.options.uwt & ~( 1 << 7 );

	if ( id === 1 ) {
		uwt |= ( 1 << 7 );
	}

	return uwt;
}

function testAPIKey( key, callback ) {
	$.ajax( {
		url: "https://api.weather.com/v2/pws/observations/current?stationId=KMAHANOV10&format=json&units=m&apiKey=" + key,
		cache: true
	} ).done( function( data ) {
		if ( data.errors ) {
			callback( false );
			return;
		}
		callback( true );
	} ).fail( function() {
		callback( false );
	} );
}

// Panel functions
function bindPanel() {
	var panel = $( "#sprinklers-settings" ),
		operation = function() {
			return ( controller && controller.settings && controller.settings.en && controller.settings.en === 1 ) ? _( "Disable" ) : _( "Enable" );
		};

	panel.enhanceWithin().panel().removeClass( "hidden" ).panel( "option", "classes.modal", "needsclick ui-panel-dismiss" );

	panel.find( "a[href='#site-control']" ).on( "click", function() {
		changePage( "#site-control" );
		return false;
	} );

	panel.find( "a[href='#about']" ).on( "click", function() {
		changePage( "#about" );
		return false;
	} );

	panel.find( ".cloud-login" ).on( "click", function() {
		requestCloudAuth();
		return false;
	} );

	panel.find( "a[href='#debugWU']" ).on( "click", debugWU );

	panel.find( "a[href='#localization']" ).on( "click", languageSelect );

	panel.find( ".export_config" ).on( "click", function() {

		// Check if the controller has special stations which are enabled
		if ( typeof controller.stations.stn_spe === "object" && typeof controller.special !== "object" && !controller.stations.stn_spe.every( function( e ) { return e === 0; } ) ) {

			// Grab station special data before proceeding
			updateControllerStationSpecial( getExportMethod );
		} else {
			getExportMethod();
		}

		return false;
	} );

	panel.find( ".import_config" ).on( "click", function() {
		storage.get( "backup", function( newdata ) {
			getImportMethod( newdata.backup );
		} );

		return false;
	} );

	panel.find( ".toggleOperation" ).on( "click", function() {
		var self = $( this ),
			toValue = ( 1 - controller.settings.en );

		areYouSure( _( "Are you sure you want to" ) + " " + operation().toLowerCase() + " " + _( "operation?" ), "", function() {
			sendToOS( "/cv?pw=&en=" + toValue ).done( function() {
				$.when(
					updateControllerSettings(),
					updateControllerStatus()
				).done( function() {
					checkStatus();
					self.find( "span:first" ).html( operation() ).attr( "data-translate", operation() );
				} );
			} );
		} );

		return false;
	} ).find( "span:first" ).html( operation() ).attr( "data-translate", operation() );

	panel.find( ".reboot-os" ).on( "click", function() {
		areYouSure( _( "Are you sure you want to reboot OpenSprinkler?" ), "", function() {
			$.mobile.loading( "show" );
			sendToOS( "/cv?pw=&rbt=1" ).done( function() {
				$.mobile.loading( "hide" );
				showerror( _( "OpenSprinkler is rebooting now" ) );
			} );
		} );
		return false;
	} );

	panel.find( ".changePassword > a" ).on( "click", changePassword );

	panel.find( "#downgradeui" ).on( "click", function() {
		areYouSure( _( "Are you sure you want to downgrade the UI?" ), "", function() {
			var url = "http://rayshobby.net/scripts/java/svc" + getOSVersion();

			sendToOS( "/cu?jsp=" + encodeURIComponent( url ) + "&pw=" ).done( function() {
				storage.remove( [ "sites", "current_site", "lang", "provider", "wapikey", "runonce" ] );
				location.reload();
			} );
		} );
		return false;
	} );

	panel.find( "#logout" ).on( "click", function() {
		logout();
		return false;
	} );

	openPanel = ( function() {
		var panel = $( "#sprinklers-settings" ),
			updateButtons = function() {
				var operation = ( controller && controller.settings && controller.settings.en && controller.settings.en === 1 ) ? _( "Disable" ) : _( "Enable" );
				panel.find( ".toggleOperation span:first" ).html( operation ).attr( "data-translate", operation );
			};

		$( "html" ).on( "datarefresh",  updateButtons );

		function begin() {
			var currPage = $( ".ui-page-active" ).attr( "id" );

			if ( currPage === "start" || currPage === "loadingPage" || !isControllerConnected() || $( ".ui-page-active" ).length !== 1 ) {
				return;
			}

			updateButtons();
			panel.panel( "open" );
		}

		return begin;
	} )();
}

// Device setting management functions
function showOptions( expandItem ) {
	var list = "",
		page = $( "<div data-role='page' id='os-options'>" +
			"<div class='ui-content' role='main'>" +
				"<div data-role='collapsibleset' id='os-options-list'>" +
				"</div>" +
				"<a class='submit preventBack' style='display:none'></a>" +
			"</div>" +
		"</div>" ),
		generateSensorOptions = function( index, sensorType, number ) {
			return "<div class='ui-field-contain'>" +
				"<fieldset data-role='controlgroup' class='ui-mini center sensor-options' data-type='horizontal'>" +
					"<legend class='left'>" + _( "Sensor" ) + ( number ? " " + number + " " : " " ) + _( "Type" ) + "</legend>" +
					"<input class='noselect' type='radio' name='o" + index + "' id='o" + index + "-none' value='0'" + ( sensorType === 0 ? " checked='checked'" : "" ) + ">" +
					"<label for='o" + index + "-none'>" + _( "None" ) + "</label>" +
					"<input class='noselect' type='radio' name='o" + index + "' id='o" + index + "-rain' value='1'" + ( sensorType === 1 ? " checked='checked'" : "" ) + ">" +
					"<label for='o" + index + "-rain'>" + _( "Rain" ) + "</label>" +
					( index === 52 ? "" : "<input class='noselect' type='radio' name='o" + index + "' id='o" + index + "-flow' value='2'" + ( sensorType === 2 ? " checked='checked'" : "" ) + ">" +
						"<label for='o" + index + "-flow'>" + _( "Flow" ) + "</label>" ) +
					( checkOSVersion( 219 ) ? "<input class='noselect' type='radio' name='o" + index + "' id='o" + index + "-soil' value='3'" + ( sensorType === 3 ? " checked='checked'" : "" ) + ">" +
						"<label for='o" + index + "-soil'>" + _( "Soil" ) + "</label>" : "" ) +
					( checkOSVersion( 217 ) ? "<input class='noselect' type='radio' name='o" + index + "' id='o" + index + "-program' value='240'" + ( sensorType === 240 ? " checked='checked'" : "" ) + ">" +
						"<label for='o" + index + "-program'>" + _( "Program Switch" ) + "</label>" : "" ) +
				"</fieldset>" +
			"</div>";
		},
		submitOptions = function() {
			var opt = {},
				invalid = false,
				isPi = isOSPi(),
				button = header.eq( 2 ),
				key;

			button.prop( "disabled", true );
			page.find( ".submit" ).removeClass( "hasChanges" );

			page.find( "#os-options-list" ).find( ":input,button" ).filter( ":not(.noselect)" ).each( function() {
				var $item = $( this ),
					id = $item.attr( "id" ),
					data = $item.val(),
					ip;

				if ( !id || ( !data && data !== "" ) ) {
					return true;
				}

				switch ( id ) {
					case "o1":
						var tz = data.split( ":" );
						tz[ 0 ] = parseInt( tz[ 0 ], 10 );
						tz[ 1 ] = parseInt( tz[ 1 ], 10 );
						tz[ 1 ] = ( tz[ 1 ] / 15 >> 0 ) / 4.0;tz[ 0 ] = tz[ 0 ] + ( tz[ 0 ] >= 0 ? tz[ 1 ] : -tz[ 1 ] );
						data = ( ( tz[ 0 ] + 12 ) * 4 ) >> 0;
						break;
					case "datetime":
						var dt = new Date( data * 1000 );

						opt.tyy = dt.getUTCFullYear();
						opt.tmm = dt.getUTCMonth();
						opt.tdd = dt.getUTCDate();
						opt.thh = dt.getUTCHours();
						opt.tmi = dt.getUTCMinutes();
						opt.ttt = Math.round( dt.getTime() / 1000 );

						return true;
					case "ip_addr":
						ip = data.split( "." );

						if ( ip === "0.0.0.0" ) {
							showerror( _( "A valid IP address is required when DHCP is not used" ) );
							invalid = true;
							return false;
						}

						opt.o4 = ip[ 0 ];
						opt.o5 = ip[ 1 ];
						opt.o6 = ip[ 2 ];
						opt.o7 = ip[ 3 ];

						return true;
					case "subnet":
						ip = data.split( "." );

						if ( ip === "0.0.0.0" ) {
							showerror( _( "A valid subnet address is required when DHCP is not used" ) );
							invalid = true;
							return false;
						}

						opt.o58 = ip[ 0 ];
						opt.o59 = ip[ 1 ];
						opt.o60 = ip[ 2 ];
						opt.o61 = ip[ 3 ];

						return true;
					case "gateway":
						ip = data.split( "." );

						if ( ip === "0.0.0.0" ) {
							showerror( _( "A valid gateway address is required when DHCP is not used" ) );
							invalid = true;
							return false;
						}

						opt.o8 = ip[ 0 ];
						opt.o9 = ip[ 1 ];
						opt.o10 = ip[ 2 ];
						opt.o11 = ip[ 3 ];

						return true;
					case "dns":
						ip = data.split( "." );

						if ( ip === "0.0.0.0" ) {
							showerror( _( "A valid DNS address is required when DHCP is not used" ) );
							invalid = true;
							return false;
						}

						opt.o44 = ip[ 0 ];
						opt.o45 = ip[ 1 ];
						opt.o46 = ip[ 2 ];
						opt.o47 = ip[ 3 ];

						return true;
					case "ntp_addr":
						ip = data.split( "." );

						opt.o32 = ip[ 0 ];
						opt.o33 = ip[ 1 ];
						opt.o34 = ip[ 2 ];
						opt.o35 = ip[ 3 ];

						return true;
					case "wtkey":
						return true;
					case "wto":
						data = escapeJSON( $.extend( {}, unescapeJSON( data ), { key: page.find( "#wtkey" ).val() } ) );

						if ( escapeJSON( controller.settings.wto ) === data ) {
							return true;
						}
						break;
					case "mqtt":
						if ( escapeJSON( controller.settings.mqtt ) === data ) {
							return true;
						}
						break;
					case "isMetric":
						isMetric = $item.is( ":checked" );
						storage.set( { isMetric: isMetric } );
						return true;
					case "o12":
						if ( !isPi ) {
							opt.o12 = data & 0xff;
							opt.o13 = ( data >> 8 ) & 0xff;
						}
						return true;
					case "o31":
						if ( parseInt( data ) === 3 && !unescapeJSON( $( "#wto" )[ 0 ].value ).baseETo ) {
							showerror( _( "You must specify a baseline ETo adjustment method option to use the ET adjustment method." ) );
							invalid = true;
							return false;
						}

						var restrict = page.find( "#weatherRestriction" );
						if ( restrict.length ) {
							data = setRestriction( parseInt( restrict.val() ), data );
						}
						break;
					case "o18":
					case "o37":
						if ( parseInt( data ) > ( parseInt( page.find( "#o15" ).val() ) + 1 ) * 8 ) {
							data = 0;
						}

						break;
					case "o41":
						if ( page.find( "#o41-units" ).val() === "gallon" ) {
							data = data * 3.78541;
						}

						opt.o41 = ( data * 100 ) & 0xff;
						opt.o42 = ( ( data * 100 ) >> 8 ) & 0xff;
						return true;
					case "o2":
					case "o3":
					case "o14":
					case "o16":
					case "o21":
					case "o22":
					case "o25":
					case "o36":
					case "o48":
					case "o50":
					case "o51":
					case "o52":
					case "o53":
						data = $item.is( ":checked" ) ? 1 : 0;
						if ( !checkOSVersion( 219 ) && !data ) {
							return true;
						}
						break;
				}
				if ( isPi ) {
					if ( id === "loc" || id === "lg" ) {
						id = "o" + id;
					} else {
						key = /\d+/.exec( id );
						id = "o" + Object.keys( keyIndex ).find( function( index ) { return keyIndex[ index ] === key; } );
					}
				}

				// Because the firmware has a bug regarding spaces, let us replace them out now with a compatible seperator
				if ( checkOSVersion( 208 ) === true && id === "loc" ) {
					data = data.replace( /\s/g, "_" );
				}

				opt[ id ] = data;
			} );
			if ( invalid ) {
				button.prop( "disabled", false );
				page.find( ".submit" ).addClass( "hasChanges" );
				return;
			}
			if ( typeof controller.options.fpr0 !== "undefined" ) {
				if ( typeof controller.options.urs !== "undefined" ) {
					opt.o21 = page.find( "input[name='o21'][type='radio']:checked" ).val();
				} else {
					if ( typeof controller.options.sn1t !== "undefined" ) {
						opt.o50 = page.find( "input[name='o50'][type='radio']:checked" ).val();
					}

					if ( typeof controller.options.sn2t !== "undefined" ) {
						opt.o52 = page.find( "input[name='o52'][type='radio']:checked" ).val();
					}
				}
			}

			opt = transformKeys( opt );

			$.mobile.loading( "show" );
			sendToOS( "/co?pw=&" + $.param( opt ) ).done( function() {
				$.mobile.document.one( "pageshow", function() {
					showerror( _( "Settings have been saved" ) );
				} );
				goBack();
				updateController( updateWeather );
			} ).fail( function() {
				button.prop( "disabled", false );
				page.find( ".submit" ).addClass( "hasChanges" );
			} );
		},
		header = changeHeader( {
			title: _( "Edit Options" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: checkChangesBeforeBack
			},
			rightBtn: {
				icon: "check",
				text: _( "Submit" ),
				class: "submit",
				on: submitOptions
			}

		} ),
		timezones, tz, i;

	page.find( ".submit" ).on( "click", submitOptions );

	list = "<fieldset data-role='collapsible'" + ( typeof expandItem !== "string" || expandItem === "system" ? " data-collapsed='false'" : "" ) + ">" +
		"<legend>" + _( "System" ) + "</legend>";

	if ( typeof controller.options.ntp !== "undefined" ) {
		list += "<div class='ui-field-contain datetime-input'><label for='datetime'>" + _( "Device Time" ) + "</label>" +
			"<button " + ( controller.options.ntp ? "disabled " : "" ) + "data-mini='true' id='datetime' " +
				"value='" + ( controller.settings.devt + ( new Date( controller.settings.devt * 1000 ).getTimezoneOffset() * 60 ) ) + "'>" +
			dateToString( new Date( controller.settings.devt * 1000 ) ).slice( 0, -3 ) + "</button></div>";
	}

	if ( !isOSPi() && typeof controller.options.tz !== "undefined" ) {
		timezones = [ "-12:00", "-11:30", "-11:00", "-10:00", "-09:30", "-09:00", "-08:30", "-08:00", "-07:00", "-06:00",
			"-05:00", "-04:30", "-04:00", "-03:30", "-03:00", "-02:30", "-02:00", "+00:00", "+01:00", "+02:00", "+03:00",
			"+03:30", "+04:00", "+04:30", "+05:00", "+05:30", "+05:45", "+06:00", "+06:30", "+07:00", "+08:00", "+08:45",
			"+09:00", "+09:30", "+10:00", "+10:30", "+11:00", "+11:30", "+12:00", "+12:45", "+13:00", "+13:45", "+14:00" ];

		tz = controller.options.tz - 48;
		tz = ( ( tz >= 0 ) ? "+" : "-" ) + pad( ( Math.abs( tz ) / 4 >> 0 ) ) + ":" + ( ( Math.abs( tz ) % 4 ) * 15 / 10 >> 0 ) + ( ( Math.abs( tz ) % 4 ) * 15 % 10 );
		list += "<div class='ui-field-contain'><label for='o1' class='select'>" + _( "Timezone" ) + "</label>" +
			"<select " + ( checkOSVersion( 210 ) && typeof weather === "object" ? "disabled='disabled' " : "" ) + "data-mini='true' id='o1'>";

		for ( i = 0; i < timezones.length; i++ ) {
			list += "<option " + ( ( timezones[ i ] === tz ) ? "selected" : "" ) + " value='" + timezones[ i ] + "'>" + timezones[ i ] + "</option>";
		}
		list += "</select></div>";
	}

	list += "<div class='ui-field-contain'>" +
		"<label for='loc'>" + _( "Location" ) + "</label>" +
		"<button data-mini='true' id='loc' value='" + ( controller.settings.loc.trim() === "''" ? _( "Not specified" ) : controller.settings.loc ) + "'>" +
			"<span>" + controller.settings.loc + "</span>" +
			"<a class='ui-btn btn-no-border ui-btn-icon-notext ui-icon-delete ui-btn-corner-all clear-loc'></a>" +
		"</button></div>";

	if ( typeof controller.options.lg !== "undefined" ) {
		list += "<label for='o36'><input data-mini='true' id='o36' type='checkbox' " + ( ( controller.options.lg === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Enable Logging" ) + "</label>";
	}

	list += "<label for='isMetric'><input data-mini='true' id='isMetric' type='checkbox' " + ( isMetric ? "checked='checked'" : "" ) + ">" +
		_( "Use Metric" ) + "</label>";

	list += "</fieldset><fieldset data-role='collapsible'" +
		( typeof expandItem === "string" && expandItem === "master" ? " data-collapsed='false'" : "" ) + ">" +
		"<legend>" + _( "Configure Master" ) + "</legend>";

	if ( typeof controller.options.mas !== "undefined" ) {
		list += "<div class='ui-field-contain ui-field-no-border'><label for='o18' class='select'>" +
				_( "Master Station" ) + " " + ( typeof controller.options.mas2 !== "undefined" ? "1" : "" ) +
			"</label><select data-mini='true' id='o18'><option value='0'>" + _( "None" ) + "</option>";

		for ( i = 0; i < controller.stations.snames.length; i++ ) {
			list += "<option " + ( ( isStationMaster( i ) === 1 ) ? "selected" : "" ) + " value='" + ( i + 1 ) + "'>" +
				controller.stations.snames[ i ] + "</option>";

			if ( !checkOSVersion( 214 ) && i === 7 ) {
				break;
			}
		}
		list += "</select></div>";

		if ( typeof controller.options.mton !== "undefined" ) {
			list += "<div " + ( controller.options.mas === 0 ? "style='display:none' " : "" ) +
				"class='ui-field-no-border ui-field-contain duration-field'><label for='o19'>" +
					_( "Master On Adjustment" ) +
				"</label><button data-mini='true' id='o19' value='" + controller.options.mton + "'>" + controller.options.mton + "s</button></div>";
		}

		if ( typeof controller.options.mtof !== "undefined" ) {
			list += "<div " + ( controller.options.mas === 0 ? "style='display:none' " : "" ) +
				"class='ui-field-no-border ui-field-contain duration-field'><label for='o20'>" +
					_( "Master Off Adjustment" ) +
				"</label><button data-mini='true' id='o20' value='" + controller.options.mtof + "'>" + controller.options.mtof + "s</button></div>";
		}
	}

	if ( typeof controller.options.mas2 !== "undefined" ) {
		list += "<hr style='width:95%' class='content-divider'>";

		list += "<div class='ui-field-contain ui-field-no-border'><label for='o37' class='select'>" +
				_( "Master Station" ) + " 2" +
			"</label><select data-mini='true' id='o37'><option value='0'>" + _( "None" ) + "</option>";

		for ( i = 0; i < controller.stations.snames.length; i++ ) {
			list += "<option " + ( ( isStationMaster( i ) === 2 ) ? "selected" : "" ) + " value='" + ( i + 1 ) + "'>" + controller.stations.snames[ i ] +
				"</option>";

			if ( !checkOSVersion( 214 ) && i === 7 ) {
				break;
			}
		}

		list += "</select></div>";

		if ( typeof controller.options.mton2 !== "undefined" ) {
			list += "<div " + ( controller.options.mas2 === 0 ? "style='display:none' " : "" ) +
				"class='ui-field-no-border ui-field-contain duration-field'><label for='o38'>" +
					_( "Master On Delay" ) +
				"</label><button data-mini='true' id='o38' value='" + controller.options.mton2 + "'>" + controller.options.mton2 + "s</button></div>";
		}

		if ( typeof controller.options.mtof2 !== "undefined" ) {
			list += "<div " + ( controller.options.mas2 === 0 ? "style='display:none' " : "" ) +
				"class='ui-field-no-border ui-field-contain duration-field'><label for='o39'>" +
					_( "Master Off Delay" ) +
				"</label><button data-mini='true' id='o39' value='" + controller.options.mtof2 + "'>" + controller.options.mtof2 + "s</button></div>";
		}
	}

	list += "</fieldset><fieldset data-role='collapsible'" +
		( typeof expandItem === "string" && expandItem === "station" ? " data-collapsed='false'" : "" ) + "><legend>" +
		_( "Station Handling" ) + "</legend>";

	if ( typeof controller.options.ext !== "undefined" ) {
		list += "<div class='ui-field-contain'><label for='o15' class='select'>" +
			_( "Number of Stations" ) +
			( typeof controller.options.dexp === "number" && controller.options.dexp < 255 && controller.options.dexp >= 0 ? " <span class='nobr'>(" +
				( controller.options.dexp * 8 + 8 ) + " " + _( "available" ) + ")</span>" : "" ) +
			"</label><select data-mini='true' id='o15'>";

		for ( i = 0; i <= ( controller.options.mexp || 5 ); i++ ) {
			list += "<option " + ( ( controller.options.ext === i ) ? "selected" : "" ) + " value='" + i + "'>" + ( i * 8 + 8 ) + " " + _( "stations" ) +
				"</option>";
		}
		list += "</select></div>";
	}

	if ( typeof controller.options.sdt !== "undefined" ) {
		list += "<div class='ui-field-contain duration-field'><label for='o17'>" + _( "Station Delay" ) + "</label>" +
			"<button data-mini='true' id='o17' value='" + controller.options.sdt + "'>" +
				dhms2str( sec2dhms( controller.options.sdt ) ) +
			"</button></div>";
	}

	list += "<label for='showDisabled'><input data-mini='true' class='noselect' id='showDisabled' type='checkbox' " + ( ( localStorage.showDisabled === "true" ) ? "checked='checked'" : "" ) + ">" +
	_( "Show Disabled" ) + " " + _( "(Changes Auto-Saved)" ) + "</label>";

	if ( typeof controller.options.seq !== "undefined" ) {
		list += "<label for='o16'><input data-mini='true' id='o16' type='checkbox' " +
				( ( controller.options.seq === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Sequential" ) + "</label>";
	}

	list += "</fieldset><fieldset data-role='collapsible'" +
		( typeof expandItem === "string" && expandItem === "weather" ? " data-collapsed='false'" : "" ) + ">" +
		"<legend>" + _( "Weather and Sensors" ) + "</legend>";

	if ( typeof controller.options.uwt !== "undefined" ) {
		list += "<div class='ui-field-contain'><label for='o31' class='select'>" + _( "Weather Adjustment Method" ) +
				"<button data-helptext='" +
					_( "Weather adjustment uses OpenWeatherMaps data in conjunction with the selected method to adjust the watering percentage." ) +
					"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
			"</label><select data-mini='true' id='o31'>";
		for ( i = 0; i < getAdjustmentMethod().length; i++ ) {
			var adjustmentMethod = getAdjustmentMethod()[ i ];

			// Skip unsupported adjustment options.
			if ( adjustmentMethod.minVersion && !checkOSVersion( adjustmentMethod.minVersion ) ) {
				continue;
			}
			list += "<option " + ( ( adjustmentMethod.id === getCurrentAdjustmentMethodId() ) ? "selected" : "" ) + " value='" + i + "'>" + adjustmentMethod.name + "</option>";
		}
		list += "</select></div>";

		if ( typeof controller.settings.wto === "object" ) {
			list += "<div class='ui-field-contain" + ( getCurrentAdjustmentMethodId() === 0 ? " hidden" : "" ) + "'><label for='wto'>" + _( "Adjustment Method Options" ) + "</label>" +
				"<button data-mini='true' id='wto' value='" + escapeJSON( controller.settings.wto ) + "'>" +
					_( "Tap to Configure" ) +
				"</button></div>";
		}

		if ( checkOSVersion( 214 ) ) {
			list += "<div class='ui-field-contain'><label for='weatherRestriction' class='select'>" + _( "Weather-Based Restrictions" ) +
					"<button data-helptext='" + _( "Prevents watering when the selected restriction is met." ) +
						"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
				"</label>" +
				"<select data-mini='true' class='noselect' id='weatherRestriction'>";

			for ( i = 0; i < 2; i++ ) {
				var restrict = getRestriction( i );
				list += "<option " + ( restrict.isCurrent === true ? "selected" : "" ) + " value='" + i + "'>" + restrict.name + "</option>";
			}
			list += "</select></div>";
		}
	}

	if ( typeof controller.options.wl !== "undefined" ) {
		list += "<div class='ui-field-contain duration-field'><label for='o23'>" + _( "% Watering" ) +
				"<button data-helptext='" +
					_( "The watering percentage scales station run times by the set value. When weather adjustment is used the watering percentage is automatically adjusted." ) +
					"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
			"</label><button " + ( ( controller.options.uwt && getCurrentAdjustmentMethodId() > 0 ) ? "disabled='disabled' " : "" ) +
				"data-mini='true' id='o23' value='" + controller.options.wl + "'>" + controller.options.wl + "%</button></div>";
	}

	if ( typeof controller.options.urs !== "undefined" || typeof controller.options.sn1t !== "undefined" ) {
		if ( typeof controller.options.fpr0 !== "undefined" ) {
			list += typeof controller.options.urs !== "undefined" ? generateSensorOptions( keyIndex.urs, controller.options.urs ) :
					( typeof controller.options.sn1t !== "undefined" ? generateSensorOptions( keyIndex.sn1t, controller.options.sn1t, 1 ) : "" );
		} else {
			list += "<label for='o21'>" +
				"<input data-mini='true' id='o21' type='checkbox' " + ( ( controller.options.urs === 1 ) ? "checked='checked'" : "" ) + ">" +
				_( "Use Rain Sensor" ) + "</label>";
		}
	}

	if ( typeof controller.options.rso !== "undefined" ) {
		list += "<label for='o22'><input " + ( controller.options.urs === 1 || controller.options.urs === 240 ? "" : "data-wrapper-class='hidden' " ) +
			"data-mini='true' id='o22' type='checkbox' " + ( ( controller.options.rso === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Normally Open" ) + "</label>";
	}

	if ( typeof controller.options.sn1o !== "undefined" ) {
		list += "<label for='o51'><input " + ( controller.options.sn1t === 1 || controller.options.sn1t === 3 || controller.options.sn1t === 240 ? "" : "data-wrapper-class='hidden' " ) +
			"data-mini='true' id='o51' type='checkbox' " + ( ( controller.options.sn1o === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Normally Open" ) + "</label>";
	}

	if ( typeof controller.options.fpr0 !== "undefined" ) {
		list += "<div class='ui-field-contain" + ( controller.options.urs === 2 || controller.options.sn1t === 2 ? "" : " hidden" ) + "'>" +
			"<label for='o41'>" + _( "Flow Pulse Rate" ) + "</label>" +
			"<table>" +
				"<tr style='width:100%;vertical-align: top;'>" +
					"<td style='width:100%'>" +
						"<div class='ui-input-text controlgroup-textinput ui-btn ui-body-inherit ui-corner-all ui-mini ui-shadow-inset ui-input-has-clear'>" +
							"<input data-role='none' data-mini='true' type='number' pattern='^[-+]?[0-9]*\.?[0-9]*$' id='o41' value='" + ( ( controller.options.fpr1 * 256 + controller.options.fpr0 ) / 100 ) + "'>" +
						"</div>" +
					"</td>" +
					"<td class='tight-select'>" +
						"<select id='o41-units' class='noselect' data-mini='true'>" +
							"<option selected='selected' value='liter'>L/pulse</option>" +
							"<option value='gallon'>Gal/pulse</option>" +
						"</select>" +
					"</td>" +
				"</tr>" +
			"</table></div>";
	}

	if ( typeof controller.options.sn1on !== "undefined" ) {
		list += "<div class='" + ( controller.options.sn1t === 1 || controller.options.sn1t === 3 ? "" : "hidden " ) +
			"ui-field-no-border ui-field-contain duration-field'><label for='o54'>" +
				_( "Sensor 1 Delayed On Time" ) +
			"</label><button data-mini='true' id='o54' value='" + controller.options.sn1on + "'>" + controller.options.sn1on + "m</button></div>";
	}

	if ( typeof controller.options.sn1of !== "undefined" ) {
		list += "<div class='" + ( controller.options.sn1t === 1 || controller.options.sn1t === 3 ? "" : "hidden " ) +
			"ui-field-no-border ui-field-contain duration-field'><label for='o55'>" +
				_( "Sensor 1 Delayed Off Time" ) +
			"</label><button data-mini='true' id='o55' value='" + controller.options.sn1of + "'>" + controller.options.sn1of + "m</button></div>";
	}

	if ( checkOSVersion( 217 ) ) {
		list += "<label id='prgswitch' class='center smaller" + ( controller.options.urs === 240 || controller.options.sn1t === 240 || controller.options.sn2t === 240 ? "" : " hidden" ) + "'>" +
			_( "When using program switch, a switch is connected to the sensor port to trigger Program 1 every time the switch is pressed for at least 1 second." ) +
		"</label>";
	}

	if ( typeof controller.options.sn2t !== "undefined" && checkOSVersion( 219 ) ) {
		list += generateSensorOptions( keyIndex.sn2t, controller.options.sn2t, 2 );
	}

	if ( typeof controller.options.sn2o !== "undefined" ) {
		list += "<label for='o53'><input " + ( controller.options.sn2t === 1 || controller.options.sn2t === 3 || controller.options.sn2t === 240 ? "" : "data-wrapper-class='hidden' " ) +
			"data-mini='true' id='o53' type='checkbox' " + ( ( controller.options.sn2o === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Normally Open" ) + "</label>";
	}

	if ( typeof controller.options.sn2on !== "undefined" ) {
		list += "<div class='" + ( controller.options.sn2t === 1 || controller.options.sn2t === 3 ? "" : "hidden " ) +
			"ui-field-no-border ui-field-contain duration-field'><label for='o56'>" +
				_( "Sensor 2 Delayed On Time" ) +
			"</label><button data-mini='true' id='o56' value='" + controller.options.sn2on + "'>" + controller.options.sn2on + "m</button></div>";
	}

	if ( typeof controller.options.sn2of !== "undefined" ) {
		list += "<div class='" + ( controller.options.sn2t === 1 || controller.options.sn2t === 3 ? "" : "hidden " ) +
			"ui-field-no-border ui-field-contain duration-field'><label for='o57'>" +
				_( "Sensor 2 Delayed Off Time" ) +
			"</label><button data-mini='true' id='o57' value='" + controller.options.sn2of + "'>" + controller.options.sn2of + "m</button></div>";
	}

	if ( typeof controller.options.sn2t !== "undefined" ) {
		list += "<label id='prgswitch-2' class='center smaller" + ( controller.options.urs === 240 || controller.options.sn1t === 240 || controller.options.sn2t === 240 ? "" : " hidden" ) + "'>" +
			_( "When using program switch, a switch is connected to the sensor port to trigger Program 2 every time the switch is pressed for at least 1 second." ) +
		"</label>";
	}

	if ( typeof controller.settings.ifkey !== "undefined" || typeof controller.settings.mqtt !== "undefined" ) {
		list += "</fieldset><fieldset data-role='collapsible'" +
			( typeof expandItem === "string" && expandItem === "integrations" ? " data-collapsed='false'" : "" ) + ">" +
			"<legend>" + _( "Integrations" ) + "</legend>";

		if ( typeof controller.settings.ifkey !== "undefined" ) {
			list += "<div class='ui-field-contain'><label for='ifkey'>" + _( "IFTTT Key" ) +
				"<button data-helptext='" +
					_( "To enable IFTTT, a Maker channel key is required which can be obtained from https://ifttt.com" ) +
					"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
			"</label><input autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' data-mini='true' type='text' id='ifkey' value='" + controller.settings.ifkey + "'>" +
			"</div>";

			list += "<div class='ui-field-contain'><label for='o49'>" + _( "IFTTT Events" ) +
					"<button data-helptext='" +
						_( "Select which events to send to IFTTT for use in recipes." ) +
						"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
				"</label><button data-mini='true' id='o49' value='" + controller.options.ife + "'>Configure Events</button></div>";
		}

		if ( typeof controller.settings.mqtt !== "undefined" ) {
			list += "<div class='ui-field-contain'>" +
						"<label for='mqtt'>" + _( "MQTT" ) +
							"<button style='display:inline-block;' data-helptext='" +
								_( "OpenSprinkler can send notifications to an MQTT broker at a specified host and port." ) +
								"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'>" +
							"</button>" +
						"</label>" +
						"<button data-mini='true' id='mqtt' value='" + escapeJSON( controller.settings.mqtt ) + "'>" +
							_( "Tap to Configure" ) +
						"</button>" +
					"</div>";
		}
	}

	list += "</fieldset><fieldset class='full-width-slider' data-role='collapsible'" +
		( typeof expandItem === "string" && expandItem === "lcd" ? " data-collapsed='false'" : "" ) + ">" +
		"<legend>" + _( "LCD Screen" ) + "</legend>";

	if ( typeof controller.options.con !== "undefined" ) {
		list += "<div class='ui-field-contain'><label for='o27'>" + _( "Contrast" ) + "</label>" +
			"<input type='range' id='o27' min='0' max='255' step='10' data-highlight='true' value='" + ( controller.options.con ) + "'></div>";
	}

	if ( typeof controller.options.lit !== "undefined" ) {
		list += "<div class='ui-field-contain'><label for='o28'>" + _( "Brightness" ) + "</label>" +
			"<input type='range' id='o28' min='0' max='255' step='10' data-highlight='true' value='" + ( controller.options.lit ) + "'></div>";
	}

	if ( typeof controller.options.dim !== "undefined" ) {
		list += "<div class='ui-field-contain'><label for='o29'>" + _( "Idle Brightness" ) + "</label>" +
		"<input type='range' id='o29' min='0' max='255' step='10' data-highlight='true' value='" + ( controller.options.dim ) + "'></div>";
	}

	list += "</fieldset><fieldset data-role='collapsible' data-theme='b'" +
		( typeof expandItem === "string" && expandItem === "advanced" ? " data-collapsed='false'" : "" ) + ">" +
		"<legend>" + _( "Advanced" ) + "</legend>";

	if ( checkOSVersion( 219 ) && typeof controller.options.uwt !== "undefined" && typeof controller.settings.wto === "object" ) {
		list += "<div class='ui-field-contain'><label for='wtkey'>" + _( "Wunderground Key" ).replace( "Wunderground", "Wunder&shy;ground" ) +
			"<button data-helptext='" +
				_( "We use OpenWeatherMap normally however with a user provided API key the weather source will switch to Weather Underground." ) +
				"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
		"</label>" +
		"<table>" +
			"<tr style='width:100%;vertical-align: top;'>" +
				"<td style='width:100%'>" +
					"<div class='" +
						( ( controller.settings.wto.key && controller.settings.wto.key !== "" ) ? "green " : "" ) +
						"ui-input-text controlgroup-textinput ui-btn ui-body-inherit ui-corner-all ui-mini ui-shadow-inset ui-input-has-clear'>" +
							"<input data-role='none' data-mini='true' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' " +
								"type='text' id='wtkey' value='" + ( controller.settings.wto.key || "" ) + "'>" +
							"<a href='#' tabindex='-1' aria-hidden='true' data-helptext='" + _( "An invalid API key has been detected." ) +
								"' class='hidden help-icon ui-input-clear ui-btn ui-icon-alert ui-btn-icon-notext ui-corner-all'>" +
							"</a>" +
					"</div>" +
				"</td>" +
				"<td><button class='noselect' data-mini='true' id='verify-api'>" + _( "Verify" ) + "</button></td>" +
			"</tr>" +
		"</table></div>";
	}

	if ( typeof controller.options.hp0 !== "undefined" ) {
		list += "<div class='ui-field-contain'><label for='o12'>" + _( "HTTP Port (restart required)" ) + "</label>" +
			"<input data-mini='true' type='number' pattern='[0-9]*' id='o12' value='" + ( controller.options.hp1 * 256 + controller.options.hp0 ) + "'>" +
			"</div>";
	}

	if ( typeof controller.options.devid !== "undefined" ) {
		list += "<div class='ui-field-contain'><label for='o26'>" + _( "Device ID (restart required)" ) +
			"<button data-helptext='" +
				_( "Device ID modifies the last byte of the MAC address." ) +
			"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button></label>" +
			"<input data-mini='true' type='number' pattern='[0-9]*' max='255' id='o26' value='" + controller.options.devid + "'></div>";
	}

	if ( typeof controller.options.rlp !== "undefined" ) {
		list += "<div class='ui-field-contain duration-field'>" +
			"<label for='o30'>" + _( "Relay Pulse" ) +
				"<button data-helptext='" +
					_( "Relay pulsing is used for special situations where rapid pulsing is needed in the output with a range from 1 to 2000 milliseconds. A zero value disables the pulsing option." ) +
					"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
			"</label><button data-mini='true' id='o30' value='" + controller.options.rlp + "'>" + controller.options.rlp + "ms</button></div>";
	} else if ( checkOSVersion( 215 ) !== true && typeof controller.options.bst !== "undefined" ) {
		list += "<div class='ui-field-contain duration-field'>" +
			"<label for='o30'>" + _( "Boost Time" ) +
				"<button data-helptext='" +
					_( "Boost time changes how long the boost converter is activated with a range from 0 to 1000 milliseconds." ) +
					"' class='help-icon btn-no-border ui-btn ui-icon-info ui-btn-icon-notext'></button>" +
			"</label><button data-mini='true' id='o30' value='" + controller.options.bst + "'>" + controller.options.bst + "ms</button></div>";
	}

	if ( typeof controller.options.ntp !== "undefined" && checkOSVersion( 210 ) ) {
		var ntpIP = [ controller.options.ntp1, controller.options.ntp2, controller.options.ntp3, controller.options.ntp4 ].join( "." );
		list += "<div class='" + ( ( controller.options.ntp === 1 ) ? "" : "hidden " ) + "ui-field-contain duration-field'><label for='ntp_addr'>" +
			_( "NTP IP Address" ) + "</label><button data-mini='true' id='ntp_addr' value='" + ntpIP + "'>" + ntpIP + "</button></div>";
	}

	if ( typeof controller.options.dhcp !== "undefined" && checkOSVersion( 210 ) ) {
		var ip = [ controller.options.ip1, controller.options.ip2, controller.options.ip3, controller.options.ip4 ].join( "." ),
			gw = [ controller.options.gw1, controller.options.gw2, controller.options.gw3, controller.options.gw4 ].join( "." );

		list += "<div class='" + ( ( controller.options.dhcp === 1 ) ? "hidden " : "" ) + "ui-field-contain duration-field'><label for='ip_addr'>" +
			_( "IP Address" ) + "</label><button data-mini='true' id='ip_addr' value='" + ip + "'>" + ip + "</button></div>";
		list += "<div class='" + ( ( controller.options.dhcp === 1 ) ? "hidden " : "" ) + "ui-field-contain duration-field'><label for='gateway'>" +
			_( "Gateway Address" ) + "</label><button data-mini='true' id='gateway' value='" + gw + "'>" + gw + "</button></div>";

		if ( typeof controller.options.subn1 !== "undefined" ) {
			var subnet = [ controller.options.subn1, controller.options.subn2, controller.options.subn3, controller.options.subn4 ].join( "." );
			list += "<div class='" + ( ( controller.options.dhcp === 1 ) ? "hidden " : "" ) + "ui-field-contain duration-field'><label for='subnet'>" +
				_( "Subnet Mask" ) + "</label><button data-mini='true' id='subnet' value='" + subnet + "'>" + subnet + "</button></div>";
		}

		if ( typeof controller.options.dns1 !== "undefined" ) {
			var dns = [ controller.options.dns1, controller.options.dns2, controller.options.dns3, controller.options.dns4 ].join( "." );
			list += "<div class='" + ( ( controller.options.dhcp === 1 ) ? "hidden " : "" ) + "ui-field-contain duration-field'><label for='dns'>" +
				_( "DNS Address" ) + "</label><button data-mini='true' id='dns' value='" + dns + "'>" + dns + "</button></div>";
		}

		list += "<label for='o3'><input data-mini='true' id='o3' type='checkbox' " + ( ( controller.options.dhcp === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Use DHCP (restart required)" ) + "</label>";
	}

	if ( typeof controller.options.ntp !== "undefined" ) {
		list += "<label for='o2'><input data-mini='true' id='o2' type='checkbox' " + ( ( controller.options.ntp === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "NTP Sync" ) + "</label>";
	}

	if ( typeof controller.options.ar !== "undefined" ) {
		list += "<label for='o14'><input data-mini='true' id='o14' type='checkbox' " + ( ( controller.options.ar === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Auto Reconnect" ) + "</label>";
	}

	if ( typeof controller.options.ipas !== "undefined" ) {
		list += "<label for='o25'><input data-mini='true' id='o25' type='checkbox' " + ( ( controller.options.ipas === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Ignore Password" ) + "</label>";
	}

	if ( typeof controller.options.sar !== "undefined" ) {
		list += "<label for='o48'><input data-mini='true' id='o48' type='checkbox' " + ( ( controller.options.sar === 1 ) ? "checked='checked'" : "" ) + ">" +
			_( "Special Station Auto-Refresh" ) + "</label>";
	}

	list += "</fieldset><fieldset data-role='collapsible' data-theme='b'" +
		( typeof expandItem === "string" && expandItem === "reset" ? " data-collapsed='false'" : "" ) + ">" +
		"<legend>" + _( "Reset" ) + "</legend>";

	list += "<button data-mini='true' class='center-div reset-log'>" + _( "Clear Log Data" ) + "</button>";
	list += "<button data-mini='true' class='center-div reset-options'>" + _( "Reset All Options" ) + "</button>";
	list += "<button data-mini='true' class='center-div reset-stations'>" + _( "Reset All Station Data" ) + "</button>";

	if ( controller.options.hwv >= 30 && controller.options.hwv < 40 ) {
		list += "<hr class='divider'><button data-mini='true' class='center-div reset-wireless'>" + _( "Reset Wireless Settings" ) + "</button>";
	}

	list += "</fieldset>";

	// Insert options and remove unused groups
	page.find( "#os-options-list" )
		.html( list )
		.one( "change input", ":not(.noselect)", function() {
			header.eq( 2 ).prop( "disabled", false );
			page.find( ".submit" ).addClass( "hasChanges" );
		} )
		.find( "fieldset" ).each( function() {
			var group = $( this );

			if ( group.children().length === 1 ) {
				group.remove();
			}
		} );

	page.find( ".clear-loc" ).on( "click", function( e ) {
		e.stopImmediatePropagation();

		areYouSure( _( "Are you sure you want to clear the current location?" ), "", function() {
			page.find( "#loc" ).val( "''" ).removeClass( "green" ).find( "span" ).text( _( "Not specified" ) );
			page.find( "#o1" ).selectmenu( "enable" );
			header.eq( 2 ).prop( "disabled", false );
			page.find( ".submit" ).addClass( "hasChanges" );
		} );
	} );

	page.find( "#showDisabled" ).on( "change", function() {
		storage.set( { showDisabled: this.checked } );
		return false;
	} );

	page.find( "#loc" ).on( "click", function() {
		var loc = $( this );

		loc.prop( "disabled", true );
		overlayMap( function( selected, station ) {
			if ( selected === false ) {
				if ( loc.val() === "" ) {
					loc.removeClass( "green" );
					page.find( "#o1" ).selectmenu( "enable" );
				}
			} else {
				if ( checkOSVersion( 210 ) ) {
					page.find( "#o1" ).selectmenu( "disable" );
				}

				if ( typeof selected === "string" ) {
					loc.val( selected ).find( "span" ).text( selected );
				} else {
					selected[ 0 ] = parseFloat( selected[ 0 ] ).toFixed( 5 );
					selected[ 1 ] = parseFloat( selected[ 1 ] ).toFixed( 5 );
					if ( typeof station === "string" ) {
						validateWULocation( station, function( isValid ) {
							if ( isValid ) {
								loc.addClass( "green" );
							} else if ( !isValid ) {
								loc.removeClass( "green" );
							}
						} );
					}

					// Update the PWS location (either with the PWS station or reset to undefined)
					var wtoButton = page.find( "#wto" );

					// The value will be undefined if running an older HW version without an SD card.
					if ( wtoButton && wtoButton.val() !== undefined ) {
						wtoButton.val( escapeJSON( $.extend( {}, unescapeJSON( wtoButton.val() ), { pws: station || "" } ) ) );
					}

					loc.val( selected );
					coordsToLocation( selected[ 0 ], selected[ 1 ], function( result ) {
						loc.find( "span" ).text( result );
					} );
				}
				header.eq( 2 ).prop( "disabled", false );
				page.find( ".submit" ).addClass( "hasChanges" );
			}
			loc.prop( "disabled", false );
		} );
	} );

	page.find( "#wto" ).on( "click", function() {
		var self = this,
			options = unescapeJSON( this.value ),
			retainOptions = { pws: options.pws, key: options.key },
			method = parseInt( page.find( "#o31" ).val() ),
			finish = function() {
				self.value = escapeJSON( $.extend( {}, unescapeJSON( self.value ), retainOptions ) );
				header.eq( 2 ).prop( "disabled", false );
				page.find( ".submit" ).addClass( "hasChanges" );
			};

		if ( method === 1 ) {
			showZimmermanAdjustmentOptions( this, finish );
		} else if ( method === 2 ) {
			showAutoRainDelayAdjustmentOptions( this, finish );
		} else if ( method === 3 ) {
			showEToAdjustmentOptions( this, finish );
		}
	} );

	page.find( ".reset-log" ).on( "click", clearLogs );

	page.find( ".reset-options" ).on( "click", function() {
		resetAllOptions( function() {
			$.mobile.document.one( "pageshow", function() {
				showerror( _( "Settings have been saved" ) );
			} );
			goBack();
		} );
	} );

	page.find( ".reset-stations" ).on( "click", function() {
		var cs = "";

		for ( var i = 0; i < controller.stations.snames.length; i++ ) {
			cs += "s" + i + "=S" + pad( i + 1 ) + "&";
		}

		if ( controller.options.mas ) {
			for ( i = 0; i < controller.settings.nbrd; i++ ) {
				cs += "m" + i + "=255&";
			}
		}

		if ( typeof controller.stations.ignore_rain === "object" ) {
			for ( i = 0; i < controller.settings.nbrd; i++ ) {
				cs += "i" + i + "=0&";
			}
		}

		if ( typeof controller.stations.ignore_sn1 === "object" ) {
			for ( i = 0; i < controller.settings.nbrd; i++ ) {
				cs += "j" + i + "=0&";
			}
		}

		if ( typeof controller.stations.ignore_sn2 === "object" ) {
			for ( i = 0; i < controller.settings.nbrd; i++ ) {
				cs += "k" + i + "=0&";
			}
		}

		if ( typeof controller.stations.act_relay === "object" ) {
			for ( i = 0; i < controller.settings.nbrd; i++ ) {
				cs += "a" + i + "=0&";
			}
		}

		if ( typeof controller.stations.stn_dis === "object" ) {
			for ( i = 0; i < controller.settings.nbrd; i++ ) {
				cs += "d" + i + "=0&";
			}
		}

		if ( typeof controller.stations.stn_seq === "object" ) {
			for ( i = 0; i < controller.settings.nbrd; i++ ) {
				cs += "q" + i + "=255&";
			}
		}

		areYouSure( _( "Are you sure you want to reset all stations?" ), _( "This will reset all station names and attributes" ), function() {
			$.mobile.loading( "show" );
			storage.get( [ "sites", "current_site" ], function( data ) {
				var sites = parseSites( data.sites );

				sites[ data.current_site ].notes = {};
				sites[ data.current_site ].images = {};
				sites[ data.current_site ].lastRunTime = {};

				storage.set( { "sites": JSON.stringify( sites ) }, cloudSaveSites );
			} );
			sendToOS( "/cs?pw=&" + cs ).done( function() {
				showerror( _( "Stations have been updated" ) );
				updateController();
			} );
		} );
	} );

	page.find( ".reset-wireless" ).on( "click", function() {
		areYouSure( _( "Are you sure you want to reset the wireless settings?" ), _( "This will delete the stored SSID/password for your wireless network and return the device to access point mode" ), function() {
			sendToOS( "/cv?pw=&ap=1" ).done( function() {
				$.mobile.document.one( "pageshow", function() {
					showerror( _( "Wireless settings have been reset. Please follow the OpenSprinkler user manual on restoring connectivity." ) );
				} );
				goBack();
			} );
		} );
	} );

	page.find( "#o3" ).on( "change", function() {
		var button = $( this ),
			checked = button.is( ":checked" ),
			manualInputs = page.find( "#ip_addr,#gateway,#dns,#subnet" ).parents( ".ui-field-contain" );

		if ( checked ) {
			manualInputs.addClass( "hidden" );
		} else {
			manualInputs.removeClass( "hidden" );
		}
	} );

	page.find( ".sensor-options input[type='radio']" ).on( "change", function() {
		var currentValue = this.value;
		var index = parseInt( this.id.match( /o(\d+)/ )[ 1 ], 10 );

		if ( currentValue === "2" ) {
			page.find( "#o41" ).parents( ".ui-field-contain" ).removeClass( "hidden" );
		} else if ( index === 21 || index === 50 ) {
			page.find( "#o41" ).parents( ".ui-field-contain" ).addClass( "hidden" );
		}

		if ( currentValue === "1" || currentValue === "3" || currentValue === "240" ) {
			page.find( "#o" + ( index + 1 ) ).parent().removeClass( "hidden" );
		} else {
			page.find( "#o" + ( index + 1 ) ).parent().addClass( "hidden" );
		}

		if (
			$( "input[name='o21'][type='radio']:checked" ).val() === "240" ||
			$( "input[name='o50'][type='radio']:checked" ).val() === "240"
		) {
			page.find( "#prgswitch" ).removeClass( "hidden" );
		} else {
			page.find( "#prgswitch" ).addClass( "hidden" );
		}

		if ( $( "input[name='o52'][type='radio']:checked" ).val() === "240" ) {
			page.find( "#prgswitch-2" ).removeClass( "hidden" );
		} else {
			page.find( "#prgswitch-2" ).addClass( "hidden" );
		}

		if ( currentValue === "1" || currentValue === "3" ) {
			page.find( "#o" + ( index + 4 ) + ",#o" + ( index + 5 ) ).parent().removeClass( "hidden" );
		} else {
			page.find( "#o" + ( index + 4 ) + ",#o" + ( index + 5 ) ).parent().addClass( "hidden" );
		}
	} );

	page.find( "#o21" ).on( "change", function() {
		page.find( "#o22" ).parent().toggleClass( "hidden", $( this ).is( ":checked" ) );
	} );

	page.find( "#verify-api" ).on( "click", function() {
		var key = page.find( "#wtkey" ),
			button = $( this );

		button.prop( "disabled", true );

		testAPIKey( key.val(), function( result ) {
			if ( result === true ) {
				key.parent().find( ".ui-icon-alert" ).hide();
				key.parent().removeClass( "red" ).addClass( "green" );
			} else {
				key.parent().find( ".ui-icon-alert" ).removeClass( "hidden" ).show();
				key.parent().removeClass( "green" ).addClass( "red" );
			}
			button.prop( "disabled", false );
		} );
	} );

	page.find( ".help-icon" ).on( "click", showHelpText );

	page.find( ".duration-field button:not(.help-icon)" ).on( "click", function() {
		var dur = $( this ),
			id = dur.attr( "id" ),
			name = page.find( "label[for='" + id + "']" ).text(),
			helptext = dur.parent().find( ".help-icon" ).data( "helptext" ),
			max = 240;

		header.eq( 2 ).prop( "disabled", false );
		page.find( ".submit" ).addClass( "hasChanges" );

		if ( id === "ip_addr" || id === "gateway" || id === "dns" || id === "ntp_addr" || id === "subnet" ) {
			showIPRequest( {
				title: name,
				ip: dur.val().split( "." ),
				callback: function( ip ) {
					dur.val( ip.join( "." ) ).text( ip.join( "." ) );
				}
			} );
		} else if ( id === "o19" || id === "o38" ) {
			showSingleDurationInput( {
				data: dur.val(),
				title: name,
				callback: function( result ) {
					dur.val( result ).text( result + "s" );
				},
				label: _( "Seconds" ),
				maximum: 60,
				helptext: helptext
			} );
		} else if ( id === "o30" ) {
			showSingleDurationInput( {
				data: dur.val(),
				title: name,
				callback: function( result ) {
					dur.val( result ).text( result + "ms" );
				},
				label: _( "Milliseconds" ),
				maximum: 2000,
				helptext: helptext
			} );
		} else if ( id === "o20" || id === "o39" ) {
			showSingleDurationInput( {
				data: dur.val(),
				title: name,
				callback: function( result ) {
					dur.val( result ).text( result + "s" );
				},
				label: _( "Seconds" ),
				maximum: checkOSVersion( 217 ) ? 0 : 60,
				minimum: -60,
				helptext: helptext
			} );
		} else if ( id === "o23" ) {
			showSingleDurationInput( {
				data: dur.val(),
				title: name,
				callback: function( result ) {
					dur.val( result ).text( result + "%" );
				},
				label: _( "% Watering" ),
				maximum: 250,
				helptext: helptext
			} );
		} else if ( id === "o17" ) {
			var min = 0;

			if ( checkOSVersion( 210 ) ) {
				max = checkOSVersion( 214 ) ? 57600 : 64800;
			}

			if ( checkOSVersion( 211 ) ) {
				min = -3540;
				max = 3540;
			}

			if ( checkOSVersion( 217 ) ) {
				min = -600;
				max = 600;
			}

			showSingleDurationInput( {
				data: dur.val(),
				title: name,
				label: _( "Seconds" ),
				callback: function( result ) {
					dur.val( result );
					dur.text( dhms2str( sec2dhms( result ) ) );
				},
				maximum: max,
				minimum: min
			} );
		} else if ( id === "o54" || id === "o55" || id === "o56" || id === "o57" ) {
			showSingleDurationInput( {
				data: dur.val(),
				title: name,
				callback: function( result ) {
					dur.val( result ).text( result + "m" );
				},
				label: _( "Minutes" ),
				maximum: 240,
				minimum: 0,
				helptext: helptext
			} );
		}

		return false;
	} );

	page.find( "#o2" ).on( "change", function() {
		var ntp = $( this ).is( ":checked" );

		// Switch state of device time input based on NTP status
		page.find( ".datetime-input button" ).prop( "disabled", ntp );

		// Switch the NTP IP address field when NTP is used
		page.find( "#ntp_addr" ).parents( ".ui-field-contain" ).toggleClass( "hidden", !ntp );
	} );

	page.find( "#o18,#o37" ).on( "change", function() {
		page.find( "#o19,#o20" ).parents( ".ui-field-contain" ).toggle( parseInt( page.find( "#o18" ).val() ) === 0 ? false : true );
		if ( typeof controller.options.mas2 !== "undefined" ) {
			page.find( "#o38,#o39" ).parents( ".ui-field-contain" ).toggle( parseInt( page.find( "#o37" ).val() ) === 0 ? false : true );
		}
	} );

	page.find( "#o31" ).on( "change", function() {

		// Switch state of water level input based on weather algorithm status
		page.find( "#o23" ).prop( "disabled", ( parseInt( this.value ) === 0 ? false : true ) );

		// Switch the state of adjustment options based on the selected method
		page.find( "#wto" ).click().parents( ".ui-field-contain" ).toggleClass( "hidden", parseInt( this.value ) === 0 ? true : false );
	} );

	page.find( "#wtkey" ).on( "change input", function() {

		// Hide the invalid key status after change
		page.find( "#wtkey" ).siblings( ".help-icon" ).hide();
		page.find( "#wtkey" ).parent().removeClass( "red green" );
	} );

	page.find( "#o49" ).on( "click", function() {
		var events = {
			program: _( "Program Start" ),
			sensor1: _( "Sensor 1 Update" ),
			flow: _( "Flow Sensor Update" ),
			weather: _( "Weather Adjustment Update" ),
			reboot: _( "Controller Reboot" ),
			run: _( "Station Run" ),
			sensor2: _( "Sensor 2 Update" ),
			rain: _( "Rain Delay Update" )
		}, button = this, curr = parseInt( button.value ), inputs = "", a = 0, ife = 0;

		$.each( events, function( i, val ) {
			inputs += "<label for='ifttt-" + i + "'><input class='needsclick' data-iconpos='right' id='ifttt-" + i + "' type='checkbox' " +
				( getBitFromByte( curr, a ) ? "checked='checked'" : "" ) + ">" + val +
			"</label>";
			a++;
		} );

		var popup = $(
			"<div data-role='popup' data-theme='a'>" +
				"<div data-role='controlgroup' data-mini='true' class='tight'>" +
					"<div class='ui-bar ui-bar-a'>" + _( "Select IFTTT Events" ) + "</div>" +
						inputs +
					"<input data-wrapper-class='attrib-submit' class='submit' data-theme='b' type='submit' value='" + _( "Submit" ) + "' />" +
				"</div>" +
			"</div>" );

		popup.find( ".submit" ).on( "click", function() {
			a = 0;
			$.each( events, function( i ) {
				ife |= popup.find( "#ifttt-" + i ).is( ":checked" ) << a;
				a++;
			} );
			popup.popup( "close" );
			if ( curr === ife ) {
				return;
			} else {
				button.value = ife;
				header.eq( 2 ).prop( "disabled", false );
				page.find( ".submit" ).addClass( "hasChanges" );
			}
		} );

		openPopup( popup );
	} );

	page.find( "#mqtt" ).on( "click", function() {
		var button = this, curr = button.value,
			options = $.extend( {}, {
				en: 0,
				host: "server",
				port: 1883,
				user: "",
				pass: ""
			}, controller.settings.mqtt );

		$( ".ui-popup-active" ).find( "[data-role='popup']" ).popup( "close" );

		var popup = $( "<div data-role='popup' data-theme='a' id='mqttSettings'>" +
				"<div data-role='header' data-theme='b'>" +
					"<h1>" + _( "MQTT Settings" ) + "</h1>" +
				"</div>" +
				"<div class='ui-content'>" +
					"<label for='enable'>Enable</label>" +
					"<input class='needsclick mqtt_enable' data-mini='true' data-iconpos='right' id='enable' type='checkbox' " +
						( options.en ? "checked='checked'" : "" ) + ">" +
					"<div class='ui-body'>" +
						"<div class='ui-grid-a' style='display:table;'>" +
							"<div class='ui-block-a' style='width:40%'>" +
								"<label for='server' style='padding-top:10px'>" + _( "Broker/Server" ) + "</label>" +
							"</div>" +
							"<div class='ui-block-b' style='width:60%'>" +
								"<input class='mqtt-input' type='text' id='server' data-mini='true' maxlength='50' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'" +
									( options.en ? "" : "disabled='disabled'" ) + " placeholder='" + _( "broker/server" ) + "' value='" + options.host + "' required />" +
							"</div>" +
							"<div class='ui-block-a' style='width:40%'>" +
								"<label for='port' style='padding-top:10px'>" + _( "Port" ) + "</label>" +
							"</div>" +
							"<div class='ui-block-b' style='width:60%'>" +
								"<input class='mqtt-input' type='number' id='port' data-mini='true' pattern='[0-9]*' min='0' max='65535'" +
									( options.en ? "" : "disabled='disabled'" ) + " placeholder='1883' value='" + options.port + "' required />" +
							"</div>" +
							"<div class='ui-block-a' style='width:40%'>" +
								"<label for='username' style='padding-top:10px'>" + _( "Username" ) + "</label>" +
							"</div>" +
							"<div class='ui-block-b' style='width:60%'>" +
								"<input class='mqtt-input' type='text' id='username' data-mini='true' maxlength='32' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'" +
									( options.en ? "" : "disabled='disabled'" ) + " placeholder='" + _( "username (optional)" ) + "' value='" + options.user + "' required />" +
							"</div>" +
							"<div class='ui-block-a' style='width:40%'>" +
								"<label for='password' style='padding-top:10px'>" + _( "Password" ) + "</label>" +
							"</div>" +
							"<div class='ui-block-b' style='width:60%'>" +
								"<input class='mqtt-input' type='password' id='password' data-mini='true' maxlength='32' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'" +
									( options.en ? "" : "disabled='disabled'" ) + " placeholder='" + _( "password (optional)" ) + "' value='" + options.pass + "' required />" +
							"</div>" +
						"</div>" +
					"</div>" +
					"<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" +
				"</div>" +
			"</div>" );

		popup.find( "#enable" ).on( "change", function() {
			if ( this.checked ) {
				popup.find( ".mqtt-input" ).textinput( "enable" );
			} else {
				popup.find( ".mqtt-input" ).textinput( "disable" );
			}
		} );

		popup.find( ".submit" ).on( "click", function() {
			var options = {
				en: ( popup.find( "#enable" ).prop( "checked" ) ? 1 : 0 ),
				host: popup.find( "#server" ).val(),
				port: parseInt( popup.find( "#port" ).val() ),
				user: popup.find( "#username" ).val(),
				pass: popup.find( "#password" ).val()
			};

			popup.popup( "close" );
			if ( curr === escapeJSON( options ) ) {
				return;
			} else {
				button.value = escapeJSON( options );
				header.eq( 2 ).prop( "disabled", false );
				page.find( ".submit" ).addClass( "hasChanges" );
			}
		} );

		popup.css( "max-width", "380px" );

		openPopup( popup, { positionTo: "window" } );
    } );

	page.find( ".datetime-input" ).on( "click", function() {
		var input = $( this ).find( "button" );

		if ( input.prop( "disabled" ) ) {
			return;
		}

		header.eq( 2 ).prop( "disabled", false );
		page.find( ".submit" ).addClass( "hasChanges" );

		// Show date time input popup
		showDateTimeInput( input.val(), function( data ) {
			input.text( dateToString( data ).slice( 0, -3 ) ).val( Math.round( data.getTime() / 1000 ) );
		} );
		return false;
	} );

	page.one( "pagehide", function() {
		page.remove();
	} );

	header.eq( 2 ).prop( "disabled", true );

	$( "#os-options" ).remove();
	$.mobile.pageContainer.append( page );
}

var showHomeMenu = ( function() {

	var page, id, showHidden, popup;

	function makeMenu() {
		page = $( ".ui-page-active" );
		id = page.attr( "id" );
		showHidden = page.hasClass( "show-hidden" );
		popup = $( "<div data-role='popup' data-theme='a' id='mainMenu'>" +
			"<ul data-role='listview' data-inset='true' data-corners='false'>" +
				"<li data-role='list-divider'>" + _( "Information" ) + "</li>" +
				"<li><a href='#preview' class='squeeze'>" + _( "Preview Programs" ) + "</a></li>" +
				( checkOSVersion( 206 ) || checkOSPiVersion( "1.9" ) ? "<li><a href='#logs'>" + _( "View Logs" ) + "</a></li>" : "" ) +
				"<li data-role='list-divider'>" + _( "Programs and Settings" ) + "</li>" +
				"<li><a href='#raindelay'>" + _( "Change Rain Delay" ) + "</a></li>" +
				"<li><a href='#pause'>" + _( "Pause Programming" ) + "</a></li>" +
				"<li><a href='#runonce'>" + _( "Run-Once Program" ) + "</a></li>" +
				"<li><a href='#programs'>" + _( "Edit Programs" ) + "</a></li>" +
				"<li><a href='#os-options'>" + _( "Edit Options" ) + "</a></li>" +
				( checkOSVersion( 210 ) ? "" : "<li><a href='#manual'>" + _( "Manual Control" ) + "</a></li>" ) +
			( id === "sprinklers" || id === "runonce" || id === "programs" || id === "manual" || id === "addprogram" ?
				"</ul>" +
				"<div class='ui-grid-a ui-mini tight'>" +
					"<div class='ui-block-a'><a class='ui-btn tight' href='#show-hidden'>" +
						( showHidden ? _( "Hide" ) : _( "Show" ) ) + " " + _( "Disabled" ) +
					"</a></div>" +
					"<div class='ui-block-b'><a class='ui-btn red tight' href='#stop-all'>" + _( "Stop All Stations" ) + "</a></div>" +
				"</div>"
				: "<li><a class='ui-btn red' href='#stop-all'>" + _( "Stop All Stations" ) + "</a></li></ul>" ) +
		"</div>" );
	}

	function begin( btn ) {
		btn = btn instanceof $ ? btn : $( btn );

		$( ".ui-popup-active" ).find( "[data-role='popup']" ).popup( "close" );

		makeMenu();

		popup.on( "click", "a", function() {
			var clicked = $( this ),
				href = clicked.attr( "href" );

			popup.popup( "close" );

			if ( href === "#stop-all" ) {
				stopAllStations();
			} else if ( href === "#pause" ) {
				pauseProgramming();
			} else if ( href === "#show-hidden" ) {
				if ( showHidden ) {
					$( ".station-hidden" ).hide();
					page.removeClass( "show-hidden" );
				} else {
					$( ".station-hidden" ).show();
					page.addClass( "show-hidden" );
				}
			} else if ( href === "#raindelay" ) {
				showRainDelay();
			} else {
				checkChanges( function() {
					changePage( href );
				} );
			}

			return false;
		} );

		$( "#mainMenu" ).remove();

		popup.one( "popupafterclose", function() {
			btn.show();
		} );

		openPopup( popup, { positionTo: btn } );

		btn.hide();
	}

	return begin;
} )();

var showHome = ( function() {
	var page = $( "<div data-role='page' id='sprinklers'>" +
			"<div class='ui-panel-wrapper'>" +
				"<div class='ui-content' role='main'>" +
					"<div class='ui-grid-a ui-body ui-corner-all info-card noweather'>" +
						"<div class='ui-block-a'>" +
							"<div id='weather' class='pointer'></div>" +
						"</div>" +
						"<div class='ui-block-b center home-info pointer'>" +
							"<div class='sitename bold'></div>" +
							"<div id='clock-s' class='nobr'></div>" +
							_( "Water Level" ) + ": <span class='waterlevel'></span>%" +
						"</div>" +
					"</div>" +
					"<div id='os-running-stations'></div>" +
					"<hr style='display:none' class='content-divider'>" +
					"<div id='os-stations-list' class='card-group center'></div>" +
				"</div>" +
			"</div>" +
		"</div>" ),
		addTimer = function( station, rem ) {
			timers[ "station-" + station ] = {
				val: rem,
				station: station,
				update: function() {
					page.find( "#countdown-" + station ).text( "(" + sec2hms( this.val ) + " " + _( "remaining" ) + ")" );
				},
				done: function() {
					page.find( "#countdown-" + station ).parent( "p" ).empty().siblings( ".station-status" ).removeClass( "on" ).addClass( "off" );
				}
			};
		},
		addCard = function( i ) {
			var station = controller.stations.snames[ i ],
				isScheduled = controller.settings.ps[ i ][ 0 ] > 0,
				isRunning = controller.status[ i ] > 0,
				pname = isScheduled ? pidname( controller.settings.ps[ i ][ 0 ] ) : "",
				rem = controller.settings.ps[ i ][ 1 ],
				hasImage = sites[ currentSite ].images[ i ] ? true : false;

			if ( controller.status[ i ] && rem > 0 ) {
				addTimer( i, rem );
			}

			// Group card settings visually
			cards += "<div data-station='" + i + "' class='ui-corner-all card" +
				( isStationDisabled( i ) ? " station-hidden' style='display:none" : "" ) + "'>";

			cards += "<div class='ui-body ui-body-a center'>";

			cards += "<img src='" + ( hasImage ? "data:image/jpeg;base64," + sites[ currentSite ].images[ i ] : getAppURLPath() + "img/placeholder.png" ) + "' />";

			cards += "<p class='station-name center inline-icon' id='station_" + i + "'>" + station + "</p>";

			cards += "<span class='btn-no-border ui-btn ui-btn-icon-notext ui-corner-all card-icon station-status " +
				( isRunning ? "on" : ( isScheduled ? "wait" : "off" ) ) + "'></span>";

			cards += "<span class='btn-no-border ui-btn ui-btn-icon-notext ui-icon-wifi card-icon special-station " +
				( isStationSpecial( i ) ? "" : "hidden" ) + "'></span>";

			cards += "<span class='btn-no-border ui-btn " + ( ( isStationMaster( i ) ) ? "ui-icon-master" : "ui-icon-gear" ) +
				" card-icon ui-btn-icon-notext station-settings' data-station='" + i + "' id='attrib-" + i + "' " +
				( hasMaster ? ( "data-um='" + ( ( controller.stations.masop[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasMaster2 ? ( "data-um2='" + ( ( controller.stations.masop2[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasIR ? ( "data-ir='" + ( ( controller.stations.ignore_rain[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasSN1 ? ( "data-sn1='" + ( ( controller.stations.ignore_sn1[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasSN2 ? ( "data-sn2='" + ( ( controller.stations.ignore_sn2[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasAR ? ( "data-ar='" + ( ( controller.stations.act_relay[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasSD ? ( "data-sd='" + ( ( controller.stations.stn_dis[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasSequential ? ( "data-us='" + ( ( controller.stations.stn_seq[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				( hasGroup ? ( "data-grp='" + controller.stations.stn_grp[ i ] + "' " ) : "" ) +
				( hasSpecial ? ( "data-hs='" + ( ( controller.stations.stn_spe[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) + "' " ) : "" ) +
				"></span>";

			if ( !isStationMaster( i ) ) {
				if ( isScheduled || isRunning ) {

					// Generate status line for station
					cards += "<p class='rem center'>" + ( isRunning ? _( "Running" ) + " " + pname : _( "Scheduled" ) + " " +
						( controller.settings.ps[ i ][ 2 ] ? _( "for" ) + " " + dateToString( new Date( controller.settings.ps[ i ][ 2 ] * 1000 ) ) : pname ) );
					if ( rem > 0 ) {

						// Show the remaining time if it's greater than 0
						cards += " <span id='countdown-" + i + "' class='nobr'>(" + sec2hms( rem ) + " " + _( "remaining" ) + ")</span>";
					}
					cards += "</p>";
				}
			}

			// Close current card group
			cards += "</div></div>";
		},
		showAttributes = function() {
			$( "#stn_attrib" ).popup( "destroy" ).remove();

			var button = $( this ),
				id = button.data( "station" ),
				name = button.siblings( "[id='station_" + id + "']" ),
				showSpecialOptions = function( value ) {
					var opts = select.find( "#specialOpts" ),
						data = controller.special && controller.special.hasOwnProperty( id ) ? controller.special[ id ].sd : "",
						type  = controller.special && controller.special.hasOwnProperty( id ) ? controller.special[ id ].st : 0;

					opts.empty();

					if ( value === 0 ) {
						opts.append(
							"<p class='special-desc center small'>" +
								_( "Select the station type using the dropdown selector above and configure the station properties." ) +
							"</p>"
						).enhanceWithin();
					} else if ( value === 1 ) {
						data = ( type === value ) ? data : "0000000000000000";

						opts.append(
							"<div class='ui-bar-a ui-bar'>" + _( "RF Code" ) + ":</div>" +
							"<input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='rf-code' required='true' type='text' value='" + data + "'>"
						).enhanceWithin();
					} else if ( value === 2 ) {
						data = parseRemoteStationData( ( type === value ) ? data : "00000000005000" );

						opts.append(
							"<div class='ui-bar-a ui-bar'>" + _( "Remote Address" ) + ":</div>" +
							"<input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='remote-address' required='true' type='text' pattern='^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$' value='" + data.ip + "'>" +
							"<div class='ui-bar-a ui-bar'>" + _( "Remote Port" ) + ":</div>" +
							"<input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='remote-port' required='true' type='number' placeholder='80' min='0' max='65535' value='" + data.port + "'>" +
							"<div class='ui-bar-a ui-bar'>" + _( "Remote Station (index)" ) + ":</div>" +
							"<input class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='remote-station' required='true' type='number' min='1' max='200' placeholder='1' value='" + ( data.station + 1 ) + "'>"
						).enhanceWithin();
					} else if ( value === 3 ) {

						// Extended special station model to support GPIO stations
						// Special data for GPIO Station is three bytes of ascii decimal (not hex)
						// First two bytes are zero padded GPIO pin number (default GPIO05)
						// Third byte is either 0 or 1 for active low (GND) or high (+5V) relays (default 1 for HIGH)
						// Restrict selection to GPIO pins available on the RPi R2.
						var gpioPin = 5, activeState = 1, freePins, sel;

						if ( getHWVersion() === "OSPi" ) {
							freePins = [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 18, 19, 20, 21, 23, 24, 25, 26 ];
						} else if ( getHWVersion() === "2.3" ) {
							freePins = [ 2, 10, 12, 13, 14, 15, 18, 19 ];
						}

						if ( type === value ) {
							data = data.split( "" );
							gpioPin = parseInt( data[ 0 ] + data[ 1 ] );
							activeState = parseInt( data[ 2 ] );
						}

						sel = "<div class='ui-bar-a ui-bar'>" + _( "GPIO Pin" ) + ":</div>" +
								"<select class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='gpio-pin'>";
						for ( var i = 0; i < freePins.length; i++ ) {
							sel += "<option value='" + freePins[ i ] + "' " + ( freePins[ i ] === gpioPin ? "selected='selected'" : "" ) + ">" + freePins[ i ];
						}
						sel += "</select>";

						sel += "<div class='ui-bar-a ui-bar'>" + _( "Active State" ) + ":</div>" +
								 "<select class='center' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='active-state'>" +
									"<option value='1' " + ( activeState === 1 ? "selected='selected'" : "" ) + ">" + _( "HIGH" ) +
									"<option value='0' " + ( activeState === 0 ? "selected='selected'" : "" ) + ">" + _( "LOW" ) +
								 "</select>";

						opts.append( sel ).enhanceWithin();
					} else if ( value === 4 ) {
						data = ( type === value ) ? data.split( "," ) : [ "server", "80", "On", "Off" ];

						opts.append(
							"<div class='ui-bar-a ui-bar'>" + _( "Server Name" ) + ":</div>" +
							"<input class='center  validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-server' required='true' type='text' value='" + data[ 0 ] + "'>" +
							"<div class='ui-bar-a ui-bar'>" + _( "Server Port" ) + ":</div>" +
							"<input class='center  validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-port' required='true' type='number' min='0' max='65535' value='" + parseInt( data[ 1 ] ) + "'>" +
							"<div class='ui-bar-a ui-bar'>" + _( "On Command" ) + ":</div>" +
							"<input class='center validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-on' required='true' type='text' value='" + data[ 2 ] + "'>" +
							"<div class='ui-bar-a ui-bar'>" + _( "Off Command" ) + ":</div>" +
							"<input class='center validate-length' data-corners='false' data-wrapper-class='tight ui-btn stn-name' id='http-off' required='true' type='text' value='" + data[ 3 ] + "'>" +
							"<div class='center smaller' id='character-tracking' style='color:#999;'>" +
								"<p>" +	_( "Note: There is a limit on the number of character used to configure this station type." ) + "</p>" +
								"<span>" + _( "Characters remaining" ) + ": </span><span id='character-count'>placeholder</span>" +
							"</div>"
						).enhanceWithin();

						validateLength();
						$( ".validate-length" ).on( "input", validateLength );
					}
				},
				validateLength = function() {
					var maxSDChars = 240,		// Maximum size of special data when uri encoded. Needs to be less than sizeof(SpecialStationData) i.e. 247 bytes
						sd = select.find( "#http-server" ).val() + "," + select.find( "#http-port" ).val() + "," +
							 select.find( "#http-on" ).val() + "," + select.find( "#http-off" ).val(),
						sdLen = encodeURIComponent( sd ).length;

					select.find( "#character-count" ).text( maxSDChars - sdLen );

					if ( sdLen > maxSDChars ) {
						select.find( ".attrib-submit" ).addClass( "ui-disabled" );
						select.find( "#character-tracking" ).addClass( "red-text bold" );
					} else {
						select.find( ".attrib-submit" ).removeClass( "ui-disabled" );
						select.find( "#character-tracking" ).removeClass( "red-text bold" );
					}
				},
				saveChanges = function( checkPassed ) {
					var hs = parseInt( select.find( "#hs" ).val() );
					button.data( "hs", hs );

					if ( hs === 1 ) {
						button.data( "specialData", select.find( "#rf-code" ).val() );
					} else if ( hs === 2 ) {
						var ip = select.find( "#remote-address" ).val().split( "." ),
							port = parseInt( select.find( "#remote-port" ).val() ) || 80,
							station = ( select.find( "#remote-station" ).val() || 1 ) - 1,
							hex = "";

						for ( var i = 0; i < 4; i++ ) {
							hex += pad( parseInt( ip[ i ] ).toString( 16 ) );
						}

						hex += ( port < 256 ? "00" : "" ) + pad( port.toString( 16 ) );
						hex += pad( station.toString( 16 ) );

						if ( checkPassed !== true ) {
							$.mobile.loading( "show" );
							select.find( ".attrib-submit" ).addClass( "ui-disabled" );

							verifyRemoteStation( hex, function( result ) {
								var text;

								if ( result === true ) {
									saveChanges( true );
									return;
								} else if ( result === false || result === -1 ) {
									text = _( "Unable to reach the remote station." );
								} else if ( result === -2 ) {

									// Likely an invalid password since the firmware version is present but no other data
									text = _( "Password on remote controller does not match the password on this controller." );
								} else if ( result === -3 ) {

									// Remote controller is not configured as an extender
									text = _( "Remote controller is not configured as an extender. Would you like to do this now?" );
								}

								select.one( "popupafterclose", function() {
									$.mobile.loading( "hide" );
									loader.css( "opacity", "" );
								} );

								$.mobile.loading( "show", {
									html: "<h1>" + text + "</h1>" +
										"<button class='ui-btn cancel'>" + _( "Cancel" ) + "</button>" +
										"<button class='ui-btn continue'>" + _( "Continue" ) + "</button>",
									textVisible: true,
									theme: "b"
								} );

								var loader = $( ".ui-loader" );

								loader.css( "opacity", ".96" );

								loader.find( ".cancel" ).one( "click", function() {
									$.mobile.loading( "hide" );
									loader.css( "opacity", "" );
								} );

								loader.find( ".continue" ).one( "click", function() {
									$.mobile.loading( "hide" );
									loader.css( "opacity", "" );

									if ( result === -3 ) {
										convertRemoteToExtender( hex );
									}

									saveChanges( true );
								} );

								select.find( ".attrib-submit" ).removeClass( "ui-disabled" );
							} );
							return;
						}

						button.data( "specialData", hex );
					} else if ( hs === 3 ) {
						var sd = pad( select.find( "#gpio-pin" ).val() || "05" );
						sd += select.find( "#active-state" ).val() || "1";
						button.data( "specialData", sd );
					} else if ( hs === 4 ) {
						var sdata = select.find( "#http-server" ).val();
						sdata += "," + select.find( "#http-port" ).val();
						sdata += "," + select.find( "#http-on" ).val();
						sdata += "," + select.find( "#http-off" ).val();
						button.data( "specialData", sdata );
					}

					button.data( "um", select.find( "#um" ).is( ":checked" ) ? 1 : 0 );
					button.data( "um2", select.find( "#um2" ).is( ":checked" ) ? 1 : 0 );
					button.data( "ir", select.find( "#ir" ).is( ":checked" ) ? 1 : 0 );
					button.data( "sn1", select.find( "#sn1" ).is( ":checked" ) ? 1 : 0 );
					button.data( "sn2", select.find( "#sn2" ).is( ":checked" ) ? 1 : 0 );
					button.data( "ar", select.find( "#ar" ).is( ":checked" ) ? 1 : 0 );
					button.data( "sd", select.find( "#sd" ).is( ":checked" ) ? 1 : 0 );
					button.data( "us", select.find( "#us" ).is( ":checked" ) ? 1 : 0 );
					button.data( "grp", select.find( "#grp" ).val() );
					name.html( select.find( "#stn-name" ).val() );

					// Update the notes section
					sites[ currentSite ].notes[ id ] = select.find( "#stn-notes" ).val();
					storage.set( { "sites": JSON.stringify( sites ) }, cloudSaveSites );

					submitStations( id );
					select.popup( "destroy" ).remove();
				},
				select = "<div data-overlay-theme='b' data-role='popup' data-theme='a' id='stn_attrib'>" +
					"<fieldset style='margin:0' data-mini='true' data-corners='false' data-role='controlgroup'><form><div id='station-tabs'>";

			if ( typeof id !== "number" ) {
				return false;
			}

			// Setup two tabs for station configuration (Basic / Advanced) when applicable
			if ( hasSpecial ) {
				select += "<ul class='tabs'>" +
								"<li class='current' data-tab='tab-basic'>Basic</li>" +
								"<li data-tab='tab-advanced'>Advanced</li>" +
							"</ul>";
			}

			// Start of Basic Tab settings
			select += "<div id='tab-basic' class='tab-content current'>";

			select += "<div class='ui-bar-a ui-bar'>" + _( "Station Name" ) + ":</div>" +
				"<input class='bold center' data-corners='false' data-wrapper-class='tight stn-name ui-btn' id='stn-name' type='text' value='" +
					name.text() + "'>";

			if ( typeof navigator.camera !== "undefined" && typeof navigator.camera.getPicture === "function" ) {
				select += "<button class='changeBackground'>" +
						( typeof sites[ currentSite ].images[ id ] !== "string" ? _( "Add" ) : _( "Change" ) ) + " " + _( "Image" ) +
					"</button>";
			}

			if ( !isStationMaster( id ) ) {
				if ( hasMaster ) {
					select += "<label for='um'><input class='needsclick' data-iconpos='right' id='um' type='checkbox' " +
							( ( button.data( "um" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Use Master" ) + " " + ( hasMaster2 ? "1" : "" ) +
						"</label>";
				}

				if ( hasMaster2 ) {
					select += "<label for='um2'><input class='needsclick' data-iconpos='right' id='um2' type='checkbox' " +
							( ( button.data( "um2" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Use Master" ) + " 2" +
						"</label>";
				}

				if ( hasIR ) {
					select += "<label for='ir'><input class='needsclick' data-iconpos='right' id='ir' type='checkbox' " +
							( ( button.data( "ir" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Ignore Rain" ) +
						"</label>";
				}

				if ( hasSN1 ) {
					select += "<label for='sn1'><input class='needsclick' data-iconpos='right' id='sn1' type='checkbox' " +
							( ( button.data( "sn1" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Ignore Sensor 1" ) +
						"</label>";
				}

				if ( hasSN2 ) {
					select += "<label for='sn2'><input class='needsclick' data-iconpos='right' id='sn2' type='checkbox' " +
							( ( button.data( "sn2" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Ignore Sensor 2" ) +
						"</label>";
				}

				if ( hasAR ) {
					select += "<label for='ar'><input class='needsclick' data-iconpos='right' id='ar' type='checkbox' " +
							( ( button.data( "ar" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Activate Relay" ) +
						"</label>";
				}

				if ( hasSD ) {
					select += "<label for='sd'><input class='needsclick' data-iconpos='right' id='sd' type='checkbox' " +
							( ( button.data( "sd" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Disable" ) +
						"</label>";
				}

				if ( hasSequential ) {
					select += "<label for='us'><input class='needsclick' data-iconpos='right' id='us' type='checkbox' " +
							( ( button.data( "us" ) === 1 ) ? "checked='checked'" : "" ) + ">" + _( "Sequential" ) +
						"</label>";
				}

				if ( hasGroup ) {
					select += "<div class='ui-bar-a ui-bar'>" + _( "Grouping" ) + ":</div><input class='center' data-corners='false' data-wrapper-class='tight stn-name ui-btn' id='grp' type='text' value='" + button.data( "grp" ) +
						"'>";
				}
			}

			select += "<div class='ui-bar-a ui-bar'>" + _( "Station Notes" ) + ":</div>" +
				"<textarea data-corners='false' class='tight stn-notes' id='stn-notes'>" +
					( sites[ currentSite ].notes[ id ] ? sites[ currentSite ].notes[ id ] : "" ) +
				"</textarea>";

			select += "</div>";

			// Start of Advanced Tab settings. Initially set to disabled until we have refreshed station data from firmware
			if ( hasSpecial ) {
				select += "<div id='tab-advanced' class='tab-content'>" +
					"<div class='ui-bar-a ui-bar'>" + _( "Station Type" ) + ":</div>" +
						"<select data-mini='true' id='hs'"  + ( isStationSpecial( id ) ? " class='ui-disabled'" : "" ) + ">" +
							"<option data-hs='0' value='0'" + ( isStationSpecial( id ) ? "" : "selected" ) + ">" + _( "Standard" ) + "</option>" +
							"<option data-hs='1' value='1'>" + _( "RF" ) + "</option>" +
							"<option data-hs='2' value='2'>" + _( "Remote" ) + "</option>" +
							"<option data-hs='3' value='3'" + ( checkOSVersion( 217 ) ? ">" : " disabled>" ) + _( "GPIO" ) + "</option>" +
							"<option data-hs='4' value='4'" + ( checkOSVersion( 217 ) ? ">" : " disabled>" ) + _( "HTTP" ) + "</option>" +
						"</select>" +
						"<div id='specialOpts'></div>" +
					"</div>" +
				"</div>";
			}

			// Common Submit button
			select += "<input data-wrapper-class='attrib-submit' data-theme='b' type='submit' value='" + _( "Submit" ) + "' /></form></fieldset></div>";

			select = $( select ).enhanceWithin().on( "submit", "form", function() {
				saveChanges( id );
				return false;
			} );

			// Display the selected tab when clicked
			select.find( "ul.tabs li" ).click( function() {
				var tabId = $( this ).attr( "data-tab" );

				$( "ul.tabs li" ).removeClass( "current" );
				$( ".tab-content" ).removeClass( "current" );

				$( this ).addClass( "current" );
				$( "#" + tabId ).addClass( "current" );
			} );

			// Update Advanced tab whenever a new special station type is selected
			select.find( "#hs" ).on( "change", function() {
				var value = parseInt( $( this ).val() );
				showSpecialOptions( value );
				return false;
			} );

			// Refresh station data from firmware and update the Advanced tab to reflect special station type
			if ( isStationSpecial( id ) ) {
				updateControllerStationSpecial( function() {
					select.find( "#hs" )
						.removeClass( "ui-disabled" )
						.find( "option[data-hs='" + controller.special[ id ].st + "']" ).prop( "selected", true );
					select.find( "#hs" ).change();
				} );
			} else {
				select.find( "#hs" ).removeClass( "ui-disabled" );
				select.find( "option[data-hs='0']" ).prop( "selected", true );
				select.find( "#hs" ).change();
			}

			select.find( ".changeBackground" ).on( "click", function( e ) {
				e.preventDefault();
				var button = this;

				takePicture( function( image ) {
					sites[ currentSite ].images[ id ] = image;
					storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
					updateContent();

					button.innerHTML =  _( "Change" ) + " " + _( "Image" );
				} );
			} );

			$.mobile.pageContainer.append( select );

			var opts = { history: false };

			if ( isiOS ) {
				var pageTop = getPageTop();

				opts.x = pageTop.x;
				opts.y = pageTop.y;
			} else {
				opts.positionTo = "window";
			}

			select.popup( opts ).popup( "open" );
		},
		submitStations = function( id ) {
			var is208 = ( checkOSVersion( 208 ) === true ),
				master = {},
				master2 = {},
				sequential = {},
				group = {},
				special = {},
				rain = {},
				sensor1 = {},
				sensor2 = {},
				relay = {},
				disable = {},
				names = {},
				attrib, bid, sid, s;

			for ( bid = 0; bid < controller.settings.nbrd; bid++ ) {
				if ( hasMaster ) {
					master[ "m" + bid ] = 0;
				}
				if ( hasMaster2 ) {
					master2[ "n" + bid ] = 0;
				}
				if ( hasSequential ) {
					sequential[ "q" + bid ] = 0;
				}
				if ( hasSpecial ) {
					special[ "p" + bid ] = 0;
				}
				if ( hasIR ) {
					rain[ "i" + bid ] = 0;
				}
				if ( hasSN1 ) {
					sensor1[ "j" + bid ] = 0;
				}
				if ( hasSN2 ) {
					sensor2[ "k" + bid ] = 0;
				}
				if ( hasAR ) {
					relay[ "a" + bid ] = 0;
				}
				if ( hasSD ) {
					disable[ "d" + bid ] = 0;
				}

				for ( s = 0; s < 8; s++ ) {
					sid = bid * 8 + s;
					attrib = page.find( "#attrib-" + sid );

					if ( hasMaster ) {
						master[ "m" + bid ] = ( master[ "m" + bid ] ) + ( attrib.data( "um" ) << s );
					}

					if ( hasMaster2 ) {
						master2[ "n" + bid ] = ( master2[ "n" + bid ] ) + ( attrib.data( "um2" ) << s );
					}

					if ( hasSequential ) {
						sequential[ "q" + bid ] = ( sequential[ "q" + bid ] ) + ( attrib.data( "us" ) << s );
					}

					if ( hasGroup ) {
						group[ "g" + ( bid * 8 + s ) ] = attrib.data( "grp" );
					}

					if ( hasSpecial ) {
						special[ "p" + bid ] = ( special[ "p" + bid ] ) + ( ( attrib.data( "hs" ) ? 1 : 0 ) << s );
					}

					if ( hasIR ) {
						rain[ "i" + bid ] = ( rain[ "i" + bid ] ) + ( attrib.data( "ir" ) << s );
					}

					if ( hasSN1 ) {
						sensor1[ "j" + bid ] = ( sensor1[ "j" + bid ] ) + ( attrib.data( "sn1" ) << s );
					}

					if ( hasSN2 ) {
						sensor2[ "k" + bid ] = ( sensor2[ "k" + bid ] ) + ( attrib.data( "sn2" ) << s );
					}

					if ( hasAR ) {
						relay[ "a" + bid ] = ( relay[ "a" + bid ] ) + ( attrib.data( "ar" ) << s );
					}

					if ( hasSD ) {
						disable[ "d" + bid ] = ( disable[ "d" + bid ] ) + ( attrib.data( "sd" ) << s );
					}

					// Only send the name of the station being updated
					if ( sid === id ) {

						// Because the firmware has a bug regarding spaces, let us replace them out now with a compatible seperator
						if ( is208 ) {
							names[ "s" + sid ] = page.find( "#station_" + sid ).text().replace( /\s/g, "_" );
						} else {
							names[ "s" + sid ] = page.find( "#station_" + sid ).text();
						}

						if ( hasSpecial && attrib.data( "hs" ) ) {
							special.st = attrib.data( "hs" );
							special.sd = attrib.data( "specialData" );
							special.sid = id;
						}
					}
				}
			}

			$.mobile.loading( "show" );
			sendToOS( "/cs?pw=&" + $.param( names ) +
				( hasMaster ? "&" + $.param( master ) : "" ) +
				( hasMaster2 ? "&" + $.param( master2 ) : "" ) +
				( hasSequential ? "&" + $.param( sequential ) : "" ) +
				( hasGroup ? "&" + $.param( group ) : "" ) +
				( hasSpecial ? "&" + $.param( special ) : "" ) +
				( hasIR ? "&" + $.param( rain ) : "" ) +
				( hasSN1 ? "&" + $.param( sensor1 ) : "" ) +
				( hasSN2 ? "&" + $.param( sensor2 ) : "" ) +
				( hasAR ? "&" + $.param( relay ) : "" ) +
				( hasSD ? "&" + $.param( disable ) : "" )
			).done( function() {
				showerror( _( "Stations have been updated" ) );
				updateController( function() {
					$( "html" ).trigger( "datarefresh" );
				} );
			} );
		},
		updateClock = function() {

			// Update the current time
			timers.clock = {
				val: controller.settings.devt,
				update: function() {
					page.find( "#clock-s" ).text( dateToString( new Date( this.val * 1000 ), null, 1 ) );
				}
			};
		},
		reorderCards = function() {
			var cardHolder = page.find( "#os-stations-list" ),
				runningCards = page.find( "#os-running-stations" ),
				divider = page.find( ".content-divider" ),
				compare = function( a, b ) {
					a = $( a ).data( "station" );
					b = $( b ).data( "station" );
					if ( a < b ) {
						return -1;
					}
					if ( a > b ) {
						return 1;
					}
					return 0;
				};

			// Move running stations up
			cardHolder.find( ".station-status.on" ).parents( ".card" ).appendTo( runningCards );

			// Move stopped stations down
			runningCards.find( ".station-status.off" ).parents( ".card" ).appendTo( cardHolder );

			// Sort stations
			cardHolder.children().sort( compare ).detach().appendTo( cardHolder );
			runningCards.children().sort( compare ).detach().appendTo( runningCards );

			// Hide divider if running group is empty
			if ( runningCards.children().length === 0 ) {
				divider.hide();
			} else {
				divider.show();
			}
		},
		updateContent = function() {
			var cardHolder = page.find( "#os-stations-list" ),
				allCards = cardHolder.children(),
				runningCards = page.find( "#os-running-stations" ).children(),
				isScheduled, isRunning, pname, rem, card, line, hasImage;

			if ( !page.hasClass( "ui-page-active" ) ) {
				return;
			}

			updateClock();
			updateSites();

			if ( allCards.length + runningCards.length > controller.stations.snames.length ) {

				// Merge running station cards with remainder of station cards
				runningCards.detach().appendTo( cardHolder );

				// Update the allCards array since running cards were merged in above
				allCards = cardHolder.children();

				// Remove all stations which are higher in index than the current max
				allCards.each( function() {
					var c = $( this );

					if ( c.data( "station" ) >= controller.stations.snames.length ) {
						c.remove();
					}
				} );
			}

			page.find( ".waterlevel" ).text( controller.options.wl );
			page.find( ".sitename" ).text( siteSelect.val() );

			hasMaster = controller.options.mas ? true : false;
			hasMaster2 = controller.options.mas2 ? true : false;
			hasIR = ( typeof controller.stations.ignore_rain === "object" ) ? true : false;
			hasSN1 = ( typeof controller.stations.ignore_sn1 === "object" ) ? true : false;
			hasSN2 = ( typeof controller.stations.ignore_sn2 === "object" ) ? true : false;
			hasAR = ( typeof controller.stations.act_relay === "object" ) ? true : false;
			hasSD = ( typeof controller.stations.stn_dis === "object" ) ? true : false;
			hasSequential = ( typeof controller.stations.stn_seq === "object" ) ? true : false;
			hasGroup = ( typeof controller.stations.stn_grp === "object" ) ? true : false;
			hasSpecial = ( typeof controller.stations.stn_spe === "object" ) ? true : false;

			for ( var i = 0; i < controller.stations.snames.length; i++ ) {
				isScheduled = controller.settings.ps[ i ][ 0 ] > 0;
				isRunning = controller.status[ i ] > 0;
				pname = isScheduled ? pidname( controller.settings.ps[ i ][ 0 ] ) : "";
				rem = controller.settings.ps[ i ][ 1 ],
				hasImage = sites[ currentSite ].images[ i ] ? true : false;

				card = allCards.filter( "[data-station='" + i + "']" );

				if ( card.length === 0 ) {
					card = runningCards.filter( "[data-station='" + i + "']" );
				}

				if ( card.length === 0 ) {
					cards = "";
					addCard( i );
					cardHolder.append( cards );
				} else {
					card.find( ".ui-body > img" ).attr( "src", ( hasImage ? "data:image/jpeg;base64," + sites[ currentSite ].images[ i ] : getAppURLPath() + "img/placeholder.png" ) );

					if ( isStationDisabled( i ) ) {
						if ( !page.hasClass( "show-hidden" ) ) {
							card.hide();
						}
						card.addClass( "station-hidden" );
					} else {
						card.show().removeClass( "station-hidden" );
					}

					card.find( "#station_" + i ).text( controller.stations.snames[ i ] );
					card.find( ".special-station" ).removeClass( "hidden" ).addClass( isStationSpecial( i ) ? "" : "hidden" );
					card.find( ".station-status" ).removeClass( "on off wait" ).addClass( isRunning ? "on" : ( isScheduled ? "wait" : "off" ) );
					if ( isStationMaster( i ) ) {
						card.find( ".station-settings" ).removeClass( "ui-icon-gear" ).addClass( "ui-icon-master" );
					} else {
						card.find( ".station-settings" ).removeClass( "ui-icon-master" ).addClass( "ui-icon-gear" );
					}
					card.find( ".station-settings" ).data( {
						um: hasMaster ? ( ( controller.stations.masop[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						um2: hasMaster2 ? ( ( controller.stations.masop2[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						ir: hasIR ? ( ( controller.stations.ignore_rain[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						sn1: hasSN1 ? ( ( controller.stations.ignore_sn1[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						sn2: hasSN2 ? ( ( controller.stations.ignore_sn2[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						ar: hasAR ? ( ( controller.stations.act_relay[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						sd: hasSD ? ( ( controller.stations.stn_dis[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						us: hasSequential ? ( ( controller.stations.stn_seq[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined,
						grp: hasGroup ? controller.stations.stn_grp[ i ] : undefined,
						hs: hasSpecial ? ( ( controller.stations.stn_spe[ parseInt( i / 8 ) ] & ( 1 << ( i % 8 ) ) ) ? 1 : 0 ) : undefined
					} );

					if ( !isStationMaster( i ) && ( isScheduled || isRunning ) ) {
						line = ( isRunning ? _( "Running" ) + " " + pname : _( "Scheduled" ) + " " +
							( controller.settings.ps[ i ][ 2 ] ? _( "for" ) + " " + dateToString( new Date( controller.settings.ps[ i ][ 2 ] * 1000 ) ) : pname ) );
						if ( rem > 0 ) {

							// Show the remaining time if it's greater than 0
							line += " <span id='countdown-" + i + "' class='nobr'>(" + sec2hms( rem ) + " " + _( "remaining" ) + ")</span>";
							if ( controller.status[ i ] ) {
								addTimer( i, rem );
							}
						}
						if ( card.find( ".rem" ).length === 0 ) {
							card.find( ".ui-body" ).append( "<p class='rem center'>" + line + "</p>" );
						} else {
							card.find( ".rem" ).html( line );
						}
					} else {
						card.find( ".rem" ).remove();
					}

				}
			}

			reorderCards();
		},
		updateSites = function( callback ) {
			callback = callback || function() {};

			currentSite = siteSelect.val();
			storage.get( "sites", function( data ) {
				sites = parseSites( data.sites );
				if ( typeof sites[ currentSite ].images !== "object" || $.isEmptyObject( sites[ currentSite ].images ) ) {
					sites[ currentSite ].images = {};
					page.removeClass( "has-images" );
				} else {
					page.addClass( "has-images" );
				}
				if ( typeof sites[ currentSite ].notes !== "object" ) {
					sites[ currentSite ].notes = {};
				}
				if ( typeof sites[ currentSite ].lastRunTime !== "object" ) {
					sites[ currentSite ].lastRunTime = {};
				}

				callback();
			} );
		},
		hasMaster, hasMaster2, hasIR, hasSN1, hasSN2, hasAR, hasSD, hasSequential, hasGroup, hasSpecial, cards, siteSelect, currentSite, i, sites;

	page.one( "pageshow", function() {
		$( "html" ).on( "datarefresh", updateContent );
	} );

	function begin( firstLoad ) {
		if ( !isControllerConnected() ) {
			return false;
		}

		hasMaster = controller.options.mas ? true : false;
		hasMaster2 = controller.options.mas2 ? true : false;
		hasIR = ( typeof controller.stations.ignore_rain === "object" ) ? true : false;
		hasSN1 = ( typeof controller.stations.ignore_sn1 === "object" ) ? true : false;
		hasSN2 = ( typeof controller.stations.ignore_sn2 === "object" ) ? true : false;
		hasAR = ( typeof controller.stations.act_relay === "object" ) ? true : false;
		hasSD = ( typeof controller.stations.stn_dis === "object" ) ? true : false;
		hasSequential = ( typeof controller.stations.stn_seq === "object" ) ? true : false;
		hasGroup = ( typeof controller.stations.stn_grp === "object" ) ? true : false;
		hasSpecial = ( typeof controller.stations.stn_spe === "object" ) ? true : false;

		cards = "";
		siteSelect = $( "#site-selector" );

		updateSites( function() {
			for ( i = 0; i < controller.stations.snames.length; i++ ) {
				addCard( i );
			}

			page.find( "#os-stations-list" ).html( cards );
			reorderCards();
		} );

		page.find( ".sitename" ).toggleClass( "hidden", currLocal ? true : false ).text( siteSelect.val() );
		page.find( ".waterlevel" ).text( controller.options.wl );

		updateClock();

		page.on( "click", ".station-settings", showAttributes );
		page.on( "click", ".home-info", function() {
			changePage( "#os-options", {
				expandItem: "weather"
			} );
			return false;
		} );

		page.on( "click", ".card", function() {

			// Bind delegate handler to stop specific station (supported on firmware 2.1.0+ on Arduino)
			if ( !checkOSVersion( 210 ) ) {
				return false;
			}

			var el = $( this ),
				station = el.data( "station" ),
				currentStatus = controller.status[ station ],
				name = controller.stations.snames[ station ],
				question;

			if ( isStationMaster( station ) ) {
				return false;
			}

			if ( currentStatus ) {
				question = _( "Do you want to stop the selected station?" );
			} else {
				if ( el.find( "span.nobr" ).length ) {
					question = _( "Do you want to unschedule the selected station?" );
				} else {
					showDurationBox( {
						title: name,
						incrementalUpdate: false,
						maximum: 65535,
						seconds: sites[ currentSite ].lastRunTime[ station ] > 0 ? sites[ currentSite ].lastRunTime[ station ] : 0,
						helptext: _( "Enter a duration to manually run " + name ),
						callback: function( duration ) {
							sendToOS( "/cm?sid=" + station + "&en=1&t=" + duration + "&pw=", "json" ).done( function() {

								// Update local state until next device refresh occurs
								controller.settings.ps[ station ][ 0 ] = 99;
								controller.settings.ps[ station ][ 1 ] = duration;

								refreshStatus();
								showerror( _( "Station has been queued" ) );

								// Save run time for this station
								sites[ currentSite ].lastRunTime[ station ] = duration;
								storage.set( { "sites": JSON.stringify( sites ) }, cloudSaveSites );
							} );
						}
					} );
					return;
				}
			}
			areYouSure( question, controller.stations.snames[ station ], function() {
				sendToOS( "/cm?sid=" + station + "&en=0&pw=" ).done( function() {

					// Update local state until next device refresh occurs
					controller.settings.ps[ station ][ 0 ] = 0;
					controller.settings.ps[ station ][ 1 ] = 0;
					controller.status[ i ] = 0;

					// Remove any timer associated with the station
					delete timers[ "station-" + station ];

					refreshStatus();
					showerror( _( "Station has been stopped" ) );
				} );
			} );
		} )

		.on( "click", "img", function() {
			var image = $( this ),
				id = image.parents( ".card" ).data( "station" ),
				hasImage = image.attr( "src" ).indexOf( "data:image/jpeg;base64" ) === -1 ? false : true;

			if ( hasImage ) {
				areYouSure( _( "Do you want to delete the current image?" ), "", function() {
					delete sites[ currentSite ].images[ id ];
					storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
					updateContent();
				} );
			} else {
				takePicture( function( image ) {
					sites[ currentSite ].images[ id ] = image;
					storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
					updateContent();
				} );
			}

			return false;
		} )

		.on( {
			pagebeforeshow: function() {
				var header = changeHeader( {
					class: "logo",
					leftBtn: {
						icon: "bullets",
						on: function() {
							openPanel();
							return false;
						}
					},
					rightBtn: {
						icon: "bell",
						class: "notifications",
						text: "<span class='notificationCount ui-li-count ui-btn-corner-all'>" + notifications.length + "</span>",
						on: function() {
							showNotifications();
							return false;
						}
					},
					animate: ( firstLoad ? false : true )
				} );

				if ( notifications.length === 0 ) {
					$( header[ 2 ] ).hide();
				}
			}
		} );

		$( "#sprinklers" ).remove();
		$.mobile.pageContainer.append( page );

		if ( !$.isEmptyObject( weather ) ) {
			updateWeatherBox();
		}
	}

	return begin;
} )();

var showStart = ( function() {
	var page = $( "<div data-role='page' id='start'>" +
			"<ul data-role='none' id='welcome_list' class='ui-listview ui-listview-inset ui-corner-all'>" +
				"<li><div class='logo' id='welcome_logo'></div></li>" +
				"<li class='ui-li-static ui-body-inherit ui-first-child ui-last-child ui-li-separate'>" +
					"<p class='rain-desc'>" +
						_( "Welcome to the OpenSprinkler application. This app only works with the OpenSprinkler controller which must be installed and setup on your home network." ) +
					"</p>" +
					"<a class='iab iabNoScale ui-btn ui-mini center' target='_blank' href='https://opensprinkler.com/product/opensprinkler/'>" +
						_( "Purchase OpenSprinkler" ) +
					"</a>" +
				"</li>" +
				"<li class='ui-first-child ui-last-child'>" +
					"<a href='#' class='ui-btn center cloud-login'>" + _( "OpenSprinkler.com Login" ) + "</a>" +
				"</li>" +
				"<hr class='content-divider'>" +
				"<li id='auto-scan' class='ui-first-child'>" +
					"<a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>" +
						_( "Scan For Device" ) +
					"</a>" +
				"</li>" +
				"<li class='ui-first-child ui-last-child'>" +
					"<a class='ui-btn ui-btn-icon-right ui-icon-carat-r' data-rel='popup' href='#addnew'>" +
						 _( "Add Controller" ) +
					"</a>" +
				"</li>" +
			"</ul>" +
		"</div>" ),
		checkAutoScan = function() {
			updateDeviceIP( function( ip ) {
				if ( ip === undefined ) {
					resetStartMenu();
					return;
				}

				// Check if the IP is on a private network, if not don't enable automatic scanning
				if ( !isLocalIP( ip ) ) {
					resetStartMenu();
					return;
				}

				//Change main menu items to reflect ability to automatically scan
				next.removeClass( "ui-first-child" ).find( "a.ui-btn" ).text( _( "Manually Add Device" ) );
				auto.show();
			} );
		},
		resetStartMenu = function() {
			next.addClass( "ui-first-child" ).find( "a.ui-btn" ).text( _( "Add Controller" ) );
			auto.hide();
		},
		auto = page.find( "#auto-scan" ),
		next = auto.next();

	page.find( "#auto-scan" ).find( "a" ).on( "click", function() {
		startScan();
		return false;
	} );

	page.find( "a[href='#addnew']" ).on( "click", function() {
		showAddNew();
	} );

	page.find( ".cloud-login" ).on( "click", function() {
		requestCloudAuth();
		return false;
	} );

	page.on( "pagehide", function() {
		page.detach();
	} );

	function begin() {
		if ( isControllerConnected() ) {
			return false;
		}

		$( "#start" ).remove();

		$.mobile.pageContainer.append( page );

		checkAutoScan();
	}

	return begin;
} )();

function showGuidedSetup() {

	// Stub for guided setup page

}

function isStationMaster( sid ) {
	var m1 = typeof controller.options.mas === "number" ? controller.options.mas : 0,
		m2 = typeof controller.options.mas2 === "number" ? controller.options.mas2 : 0;

	sid++;

	if ( m1 === sid ) {
		return 1;
	} else if ( m2 === sid ) {
		return 2;
	} else {
		return 0;
	}
}

function isStationDisabled( sid ) {
	return ( typeof controller.stations.stn_dis === "object" && ( controller.stations.stn_dis[ parseInt( sid / 8 ) ] & ( 1 << ( sid % 8 ) ) ) > 0 );
}

function isStationSpecial( sid ) {
	return ( typeof controller.stations.stn_spe === "object" && ( controller.stations.stn_spe[ parseInt( sid / 8 ) ] & ( 1 << ( sid % 8 ) ) ) > 0 );
}

function isStationSequential( sid ) {
	if ( typeof controller.stations.stn_seq === "object" ) {
		return ( controller.stations.stn_seq[ parseInt( sid / 8 ) ] & ( 1 << ( sid % 8 ) ) ) > 0;
	} else {
		return controller.options.seq;
	}
}

function parseRemoteStationData( hex ) {
	hex = hex.split( "" );

	var ip = [],
		value,
		result = {};

	for ( var i = 0; i < 8; i++ ) {
		value = parseInt( hex[ i ] + hex[ i + 1 ], 16 ) || 0;
		ip.push( value );
		i++;
	}

	result.ip = ip.join( "." );
	result.port = parseInt( hex[ 8 ] + hex[ 9 ] + hex[ 10 ] + hex[ 11 ], 16 );
	result.station = parseInt( hex[ 12 ] + hex[ 13 ], 16 );

	return result;
}

function verifyRemoteStation( data, callback ) {
	data = parseRemoteStationData( data );

	$.ajax( {
		url: "http://" + data.ip + ":" + data.port + "/jo?pw=" + encodeURIComponent( currPass ),
		type: "GET",
		dataType: "json"
	} ).then(
		function( result ) {
			if ( typeof result !== "object" || !result.hasOwnProperty( "fwv" ) ) {
				callback( -1 );
			} else if ( Object.keys( result ).length === 1 ) {
				callback( -2 );
			} else if ( !result.hasOwnProperty( "re" ) || result.re === 0 ) {
				callback( -3 );
			} else {
				callback( true );
			}
		},
		function() {
			callback( false );
		}
	);
}

function convertRemoteToExtender( data ) {
	data = parseRemoteStationData( data );

	$.ajax( {
		url: "http://" + data.ip + ":" + data.port + "/cv?re=1&pw=" + encodeURIComponent( currPass ),
		type: "GET",
		dataType: "json"
	} );
}

// Current status related functions
function refreshStatus( callback ) {
	if ( !isControllerConnected() ) {
		return;
	}

	callback = callback || function() {};
	var finish = function() {

		// Notify the page container that the data has refreshed
		$( "html" ).trigger( "datarefresh" );
		checkStatus();
		callback();
	};

	if ( checkOSVersion( 216 ) ) {
		updateController( finish, networkFail );
	} else {
		$.when(
			updateControllerStatus(),
			updateControllerSettings(),
			updateControllerOptions()
		).then( finish, networkFail );
	}
}

function refreshData() {
	if ( !isControllerConnected() ) {
		return;
	}

	if ( checkOSVersion( 216 ) ) {
		updateController( null, networkFail );
	} else {
		$.when(
			updateControllerPrograms(),
			updateControllerStations()
		).fail( networkFail );
	}
}

// Actually change the status bar
function changeStatus( seconds, color, line, onclick ) {
	var footer = $( "#footer-running" ),
		html = "";

	onclick = onclick || function() {};

	if ( seconds > 1 ) {
		timers.statusbar = {
			val: seconds,
			type: "statusbar",
			update: function() {
				$( "#countdown" ).text( "(" + sec2hms( this.val ) + " " + _( "remaining" ) + ")" );
			}
		};
	}

	if ( isControllerConnected() && typeof controller.settings.curr !== "undefined" ) {
		html += _( "Current" ) + ": " + controller.settings.curr + " mA ";
	}

	if (
		isControllerConnected() &&
		( controller.options.urs === 2 || controller.options.sn1t === 2 ) &&
		typeof controller.settings.flcrt !== "undefined" &&
		typeof controller.settings.flwrt !== "undefined"
	) {
		html += "<span style='padding-left:5px'>" + _( "Flow" ) + ": " + ( flowCountToVolume( controller.settings.flcrt ) / ( controller.settings.flwrt / 60 ) ).toFixed( 2 ) + " L/min</span>";
	}

	if ( html !== "" ) {
		html = line + "<p class='running-text smaller center'>" + html + "</p>";
	} else {
		html = line;
	}

	footer.removeClass().addClass( color ).html( html ).off( "click" ).on( "click", onclick );
}

// Update status bar based on device status
function checkStatus() {
	var open, ptotal, sample, pid, pname, line, match, tmp, i;

	if ( !isControllerConnected() ) {
		changeStatus( 0, "transparent", "<p class='running-text smaller'></p>" );
		return;
	}

	// Handle controller configured as extender
	if ( controller.options.re === 1 ) {
		changeStatus( 0, "red", "<p class='running-text center pointer'>" + _( "Configured as Extender" ) + "</p>", function() {
			areYouSure( _( "Do you wish to disable extender mode?" ), "", function() {
				showLoading( "#footer-running" );
				sendToOS( "/cv?pw=&re=0" ).done( function() {
					updateController();
				} );
			} );
		} );
		return;
	}

	// Handle operation disabled
	if ( !controller.settings.en ) {
		changeStatus( 0, "red", "<p class='running-text center pointer'>" + _( "System Disabled" ) + "</p>", function() {
			areYouSure( _( "Do you want to re-enable system operation?" ), "", function() {
				showLoading( "#footer-running" );
				sendToOS( "/cv?pw=&en=1" ).done( function() {
					updateController();
				} );
			} );
		} );
		return;
	}

	// Handle queue paused
	if ( controller.settings.pq ) {
		changeStatus( 0, "yellow", "<p class='running-text center pointer'>" + _( "Programs Paused" ) + "</p>", function() {
			areYouSure( _( "Do you want to resume program operation?" ), "", function() {
				showLoading( "#footer-running" );
				sendToOS( "/pq?pw=&dur=0" ).done( function() {
					setTimeout(refreshStatus, 1000);
				} );
			} );
		} );
		return;
	}

	// Handle open stations
	open = {};
	for ( i = 0; i < controller.status.length; i++ ) {
		if ( controller.status[ i ] && !isStationMaster( i ) ) {
			open[ i ] = controller.status[ i ];
		}
	}

	// Handle more than 1 open station
	if ( Object.keys( open ).length >= 2 ) {
		ptotal = 0;

		for ( i in open ) {
			if ( open.hasOwnProperty( i ) ) {
				tmp = controller.settings.ps[ i ][ 1 ];
				if ( tmp > ptotal ) {
					ptotal = tmp;
				}
			}
		}

		sample = Object.keys( open )[ 0 ];
		pid    = controller.settings.ps[ sample ][ 0 ];
		pname  = pidname( pid );
		line   = "<div><div class='running-icon'></div><div class='running-text pointer'>";

		line += pname + " " + _( "is running on" ) + " " + Object.keys( open ).length + " " + _( "stations" ) + " ";
		if ( ptotal > 0 ) {
			line += "<span id='countdown' class='nobr'>(" + sec2hms( ptotal ) + " " + _( "remaining" ) + ")</span>";
		}
		line += "</div></div>";
		changeStatus( ptotal, "green", line, goHome );
		return;
	}

	// Handle a single station open
	match = false;
	for ( i = 0; i < controller.stations.snames.length; i++ ) {
		if ( controller.settings.ps[ i ] && controller.settings.ps[ i ][ 0 ] && controller.status[ i ] && !isStationMaster( i ) ) {
			match = true;
			pid = controller.settings.ps[ i ][ 0 ];
			pname = pidname( pid );
			line = "<div><div class='running-icon'></div><div class='running-text pointer'>";
			line += pname + " " + _( "is running on station" ) + " <span class='nobr'>" + controller.stations.snames[ i ] + "</span> ";
			if ( controller.settings.ps[ i ][ 1 ] > 0 ) {
				line += "<span id='countdown' class='nobr'>(" + sec2hms( controller.settings.ps[ i ][ 1 ] ) + " " + _( "remaining" ) + ")</span>";
			}
			line += "</div></div>";
			break;
		}
	}

	if ( match ) {
		changeStatus( controller.settings.ps[ i ][ 1 ], "green", line, goHome );
		return;
	}

	// Handle rain delay enabled
	if ( controller.settings.rd ) {
		changeStatus( 0, "red", "<p class='running-text center pointer'>" +
			_( "Rain delay until" ) + " " + dateToString( new Date( controller.settings.rdst * 1000 ) ) + "</p>",
			function() {
				areYouSure( _( "Do you want to turn off rain delay?" ), "", function() {
					showLoading( "#footer-running" );
					sendToOS( "/cv?pw=&rd=0" ).done( function() {
						updateController();
					} );
				} );
			}
		);
		return;
	}

	// Handle rain sensor triggered
	if ( controller.options.urs === 1 && controller.settings.rs === 1 ) {
		changeStatus( 0, "red", "<p class='running-text center'>" + _( "Rain detected" ) + "</p>" );
		return;
	}

	if ( controller.settings.sn1 === 1 ) {
		changeStatus( 0, "red", "<p class='running-text center'>Sensor 1 (" + ( controller.options.sn1t === 3 ? _( "Soil" ) : _( "Rain" ) ) + _( ") Activated" ) + "</p>" );
		return;
	}

	if ( controller.settings.sn2 === 1 ) {
		changeStatus( 0, "red", "<p class='running-text center'>Sensor 2 (" + ( controller.options.sn2t === 3 ? _( "Soil" ) : _( "Rain" ) ) + _( ") Activated" ) + "</p>" );
		return;
	}

	// Handle manual mode enabled
	if ( controller.settings.mm === 1 ) {
		changeStatus( 0, "red", "<p class='running-text center pointer'>" + _( "Manual mode enabled" ) + "</p>", function() {
			areYouSure( _( "Do you want to turn off manual mode?" ), "", function() {
				showLoading( "#footer-running" );
				sendToOS( "/cv?pw=&mm=0" ).done( function() {
					updateController();
				} );
			} );
		} );
		return;
	}

	var lrdur = controller.settings.lrun[ 2 ];

	// If last run duration is given, add it to the footer
	if ( lrdur !== 0 ) {
		var lrpid = controller.settings.lrun[ 1 ];
		pname = pidname( lrpid );

		changeStatus( 0, "transparent", "<p class='running-text smaller center pointer'>" + pname + " " + _( "last ran station" ) + " " +
			controller.stations.snames[ controller.settings.lrun[ 0 ] ] + " " + _( "for" ) + " " + ( lrdur / 60 >> 0 ) + "m " + ( lrdur % 60 ) + "s " +
			_( "on" ) + " " + dateToString( new Date( ( controller.settings.lrun[ 3 ] - lrdur ) * 1000 ) ) + "</p>", goHome );
		return;
	}

	changeStatus( 0, "transparent", "<p class='running-text smaller center pointer'>" + _( "System Idle" ) + "</p>", goHome );
}

function calculateTotalRunningTime( runTimes ) {
	var sequential = 0,
		parallel = 0;

	$.each( controller.stations.snames, function( i ) {
		var run = runTimes[ i ];
		if ( isStationSequential( i ) ) {
			sequential += run;
		} else {
			if ( run > parallel ) {
				parallel = run;
			}
		}
	} );

	return Math.max( sequential, parallel );
}

// Handle timer update on the home page and status bar
function updateTimers() {
	var lastCheck = new Date().getTime();

	setInterval( function() {

		if ( !isControllerConnected() ) {
			return false;
		}

		// Handle time drift
		var now = new Date().getTime(),
			diff = now - lastCheck;

		if ( diff > 2000 ) {
			checkStatus();
			refreshStatus();
		}

		lastCheck = now;

		// If no timers are defined then exit
		if ( $.isEmptyObject( timers ) ) {
			return;
		}

		for ( var timer in timers ) {
			if ( timers.hasOwnProperty( timer ) ) {
				if ( timers[ timer ].val <= 0 ) {
					if ( timer === "statusbar" ) {
						showLoading( "#footer-running" );
						refreshStatus();
					}

					if ( typeof timers[ timer ].done === "function" ) {
						timers[ timer ].done();
					}

					delete timers[ timer ];
				} else {
					if ( timer === "clock" ) {
						++timers[ timer ].val;
						timers[ timer ].update();
					} else if ( timer === "statusbar" || typeof timers[ timer ].station === "number" ) {
						--timers[ timer ].val;
						timers[ timer ].update();
					}
				}
			}
		}
	}, 1000 );
}

function removeStationTimers() {
	for ( var timer in timers ) {
		if ( timers.hasOwnProperty( timer ) ) {
			if ( timer !== "clock" ) {
				delete timers[ timer ];
			}
		}
	}
}

// Manual control functions
var getManual = ( function() {
	var page = $( "<div data-role='page' id='manual'>" +
				"<div class='ui-content' role='main'>" +
					"<p class='center'>" + _( "With manual mode turned on, tap a station to toggle it." ) + "</p>" +
					"<fieldset data-role='collapsible' data-collapsed='false' data-mini='true'>" +
						"<legend>" + _( "Options" ) + "</legend>" +
						"<div class='ui-field-contain'>" +
							"<label for='mmm'><b>" + _( "Manual Mode" ) + "</b></label>" +
							"<input type='checkbox' data-on-text='On' data-off-text='Off' data-role='flipswitch' name='mmm' id='mmm'>" +
						"</div>" +
						"<p class='rain-desc smaller center' style='padding-top:5px'>" +
							_( "Station timer prevents a station from running indefinitely and will automatically turn it off after the set duration (or when toggled off)" ) +
						"</p>" +
						"<div class='ui-field-contain duration-input'>" +
							"<label for='auto-off'><b>" + _( "Station Timer" ) + "</b></label>" +
							"<button data-mini='true' name='auto-off' id='auto-off' value='3600'>1h</button>" +
						"</div>" +
					"</fieldset>" +
					"<div id='manual-station-list'>" +
					"</div>" +
				"</div>" +
			"</div>" ),
		checkToggle = function( currPos ) {
			updateControllerStatus().done( function() {
				var item = listitems.eq( currPos ).find( "a" );

				if ( controller.options.mas ) {
					if ( controller.status[ controller.options.mas - 1 ] ) {
						listitems.eq( controller.options.mas - 1 ).addClass( "green" );
					} else {
						listitems.eq( controller.options.mas - 1 ).removeClass( "green" );
					}
				}

				item.text( controller.stations.snames[ currPos ] );

				if ( controller.status[ currPos ] ) {
					item.removeClass( "yellow" ).addClass( "green" );
				} else {
					item.removeClass( "green yellow" );
				}
			} );
		},
		toggle = function() {
			if ( !controller.settings.mm ) {
				showerror( _( "Manual mode is not enabled. Please enable manual mode then try again." ) );
				return false;
			}

			var anchor = $( this ),
				item = anchor.closest( "li" ),
				currPos = listitems.index( item ),
				sid = currPos + 1,
				dur = autoOff.val();

			if ( anchor.hasClass( "yellow" ) ) {
				return false;
			}

			if ( controller.status[ currPos ] ) {
				if ( checkOSPiVersion( "2.1" ) ) {
					dest = "/sn?sid=" + sid + "&set_to=0&pw=";
				} else {
					dest = "/sn" + sid + "=0";
				}
			} else {
				if ( checkOSPiVersion( "2.1" ) ) {
					dest = "/sn?sid=" + sid + "&set_to=1&set_time=" + dur + "&pw=";
				} else {
					dest = "/sn" + sid + "=1&t=" + dur;
				}
			}

			anchor.removeClass( "green" ).addClass( "yellow" );
			anchor.html( "<p class='ui-icon ui-icon-loading mini-load'></p>" );

			sendToOS( dest ).always(
				function() {

					// The device usually replies before the station has actually toggled. Delay in order to wait for the station's to toggle.
					setTimeout( checkToggle, 1000, currPos );
				}
			);

			return false;
		},
		autoOff = page.find( "#auto-off" ),
		dest, mmlist, listitems;

	page.on( "pagehide", function() {
		page.detach();
	} );

	storage.get( "autoOff", function( data ) {
		if ( !data.autoOff ) {
			return;
		}
		autoOff.val( data.autoOff );
		autoOff.text( dhms2str( sec2dhms( data.autoOff ) ) );
	} );

	autoOff.on( "click", function() {
		var dur = $( this ),
			name = page.find( "label[for='" + dur.attr( "id" ) + "']" ).text();

		showDurationBox( {
			seconds: dur.val(),
			title: name,
			callback: function( result ) {
				dur.val( result );
				dur.text( dhms2str( sec2dhms( result ) ) );
				storage.set( { "autoOff":result } );
			},
			maximum: 32768
		} );

		return false;
	} );

	page.find( "#mmm" ).on( "change", flipSwitched );

	function begin() {
		var list = "<li data-role='list-divider' data-theme='a'>" + _( "Sprinkler Stations" ) + "</li>";

		page.find( "#mmm" ).prop( "checked", controller.settings.mm ? true : false );

		$.each( controller.stations.snames, function( i, station ) {
			if ( isStationMaster( i ) ) {
				list += "<li data-icon='false' class='center" + ( ( controller.status[ i ] ) ? " green" : "" ) +
					( isStationDisabled( i ) ? " station-hidden' style='display:none" : "" ) + "'>" + station + " (" + _( "Master" ) + ")</li>";
			} else {
				list += "<li data-icon='false'><a class='mm_station center" + ( ( controller.status[ i ] ) ? " green" : "" ) +
					( isStationDisabled( i ) ? " station-hidden' style='display:none" : "" ) + "'>" + station + "</a></li>";
			}
		} );

		mmlist = $( "<ul data-role='listview' data-inset='true' id='mm_list'>" + list + "</ul>" );
		listitems = mmlist.children( "li" ).slice( 1 );
		mmlist.find( ".mm_station" ).on( "vclick", toggle );
		page.find( "#manual-station-list" ).html( mmlist ).enhanceWithin();

		changeHeader( {
			title: _( "Manual Control" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: goBack
			}
		} );

		$( "#manual" ).remove();
		$.mobile.pageContainer.append( page );
	}

	return begin;
} )();

// Runonce functions
var getRunonce = ( function() {

	var page = $( "<div data-role='page' id='runonce'>" +
			"<div class='ui-content' role='main' id='runonce_list'>" +
			"</div>" +
		"</div>" ),
		updateLastRun = function( data ) {
			rprogs.l = data;
			$( "<option value='l' selected='selected'>" + _( "Last Used Program" ) + "</option>" )
				.insertAfter( page.find( "#rprog" ).find( "option[value='t']" ) );
			fillRunonce( data );
		},
		resetRunonce = function() {
			page.find( "[id^='zone-']" ).val( 0 ).text( "0s" ).removeClass( "green" );
			return false;
		},
		fillRunonce = function( data ) {
			page.find( "[id^='zone-']" ).each( function( a, b ) {
				if ( isStationMaster( a ) ) {
					return;
				}

				var ele = $( b );
				ele.val( data[ a ] ).text( getDurationText( data[ a ] ) );
				if ( data[ a ] > 0 ) {
					ele.addClass( "green" );
				} else {
					ele.removeClass( "green" );
				}
			} );
		},
		i, list, quickPick, progs, rprogs, z, program, name;

	page.on( "pagehide", function() {
		page.detach();
	} );

	function begin() {
		list = "<p class='center'>" + _( "Zero value excludes the station from the run-once program." ) + "</p>";
		progs = [];
		if ( controller.programs.pd.length ) {
			for ( z = 0; z < controller.programs.pd.length; z++ ) {
				program = readProgram( controller.programs.pd[ z ] );
				var prog = [];

				if ( checkOSVersion( 210 ) ) {
					prog = program.stations;
				} else {
					var setStations = program.stations.split( "" );
					for ( i = 0; i < controller.stations.snames.length; i++ ) {
						prog.push( ( parseInt( setStations[ i ] ) ) ? program.duration : 0 );
					}
				}

				progs.push( prog );
			}
		}
		rprogs = progs;

		quickPick = "<select data-mini='true' name='rprog' id='rprog'>" +
			"<option value='t'>" + _( "Test All Stations" ) + "</option><option value='s' selected='selected'>" + _( "Quick Programs" ) + "</option>";

		for ( i = 0; i < progs.length; i++ ) {
			if ( checkOSVersion( 210 ) ) {
				name = controller.programs.pd[ i ][ 5 ];
			} else {
				name = _( "Program" ) + " " + ( i + 1 );
			}
			quickPick += "<option value='" + i + "'>" + name + "</option>";
		}
		quickPick += "</select>";
		list += quickPick + "<form>";
		$.each( controller.stations.snames, function( i, station ) {
			if ( isStationMaster( i ) ) {
				list += "<div class='ui-field-contain duration-input" + ( isStationDisabled( i ) ? " station-hidden' style='display:none" : "" ) + "'>" +
					"<label for='zone-" + i + "'>" + station + ":</label>" +
					"<button disabled='true' data-mini='true' name='zone-" + i + "' id='zone-" + i + "' value='0'>Master</button></div>";
			} else {
				list += "<div class='ui-field-contain duration-input" + ( isStationDisabled( i ) ? " station-hidden' style='display:none" : "" ) + "'>" +
					"<label for='zone-" + i + "'>" + station + ":</label>" +
					"<button data-mini='true' name='zone-" + i + "' id='zone-" + i + "' value='0'>0s</button></div>";
			}
		} );

		list += "</form><a class='ui-btn ui-corner-all ui-shadow rsubmit' href='#'>" + _( "Submit" ) + "</a>" +
			"<a class='ui-btn ui-btn-b ui-corner-all ui-shadow rreset' href='#'>" + _( "Reset" ) + "</a>";

		page.find( ".ui-content" ).html( list ).enhanceWithin();

		if ( typeof controller.settings.rodur === "object" ) {
			var total = 0;

			for ( i = 0; i < controller.settings.rodur.length; i++ ) {
				total += controller.settings.rodur[ i ];
			}

			if ( total !== 0 ) {
				updateLastRun( controller.settings.rodur );
			}
		} else {
			storage.get( "runonce", function( data ) {
				data = data.runonce;
				if ( data ) {
					data = JSON.parse( data );
					updateLastRun( data );
				}
			} );
		}

		page.find( "#rprog" ).on( "change", function() {
			var prog = $( this ).val();
			if ( prog === "s" ) {
				resetRunonce();
				return;
			} else if ( prog === "t" ) {
				fillRunonce( Array.apply( null, Array( controller.stations.snames.length ) ).map( function() {return 60;} ) );
				return;
			}
			if ( typeof rprogs[ prog ] === "undefined" ) {
				return;
			}
			fillRunonce( rprogs[ prog ] );
		} );

		page.on( "click", ".rsubmit", submitRunonce ).on( "click", ".rreset", resetRunonce );

		page.find( "[id^='zone-']" ).on( "click", function() {
			var dur = $( this ),
				name = page.find( "label[for='" + dur.attr( "id" ) + "']" ).text().slice( 0, -1 );

			showDurationBox( {
				seconds: dur.val(),
				title: name,
				callback: function( result ) {
					dur.val( result );
					dur.text( getDurationText( result ) );
					if ( result > 0 ) {
						dur.addClass( "green" );
					} else {
						dur.removeClass( "green" );
					}
				},
				maximum: 65535,
				showSun: checkOSVersion( 214 ) ? true : false
			} );

			return false;
		} );

		changeHeader( {
			title: _( "Run-Once" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: goBack
			},
			rightBtn: {
				icon: "check",
				text: _( "Submit" ),
				on: submitRunonce
			}
		} );

		$( "#runonce" ).remove();
		$.mobile.pageContainer.append( page );
	}

	return begin;
} )();

function submitRunonce( runonce ) {
	if ( !( runonce instanceof Array ) ) {
		runonce = [];
		$( "#runonce" ).find( "[id^='zone-']" ).each( function() {
			runonce.push( parseInt( this.value ) || 0 );
		} );
		runonce.push( 0 );
	}

	var submit = function() {
			$.mobile.loading( "show" );
			storage.set( { "runonce":JSON.stringify( runonce ) } );
			sendToOS( "/cr?pw=&t=" + JSON.stringify( runonce ) ).done( function() {
				$.mobile.loading( "hide" );
				$.mobile.document.one( "pageshow", function() {
					showerror( _( "Run-once program has been scheduled" ) );
				} );
				refreshStatus();
				goBack();
			} );
		},
		isOn = isRunning();

	if ( isOn !== -1 ) {
		areYouSure( _( "Do you want to stop the currently running program?" ), pidname( controller.settings.ps[ isOn ][ 0 ] ), function() {
			$.mobile.loading( "show" );
			stopStations( submit );
		} );
	} else {
		submit();
	}
}

// Preview functions
var getPreview = ( function() {
	var page = $( "<div data-role='page' id='preview'>" +
			"<div class='ui-content' role='main'>" +
				"<div id='preview_header' class='input_with_buttons'>" +
					"<button class='preview-minus ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button>" +
					"<input class='center' type='date' name='preview_date' id='preview_date'>" +
					"<button class='preview-plus ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button>" +
				"</div>" +
				"<div id='timeline'></div>" +
				"<div data-role='controlgroup' data-type='horizontal' id='timeline-navigation'>" +
					"<a class='ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext btn-no-border' title='" + _( "Zoom in" ) + "'></a>" +
					"<a class='ui-btn ui-corner-all ui-icon-minus ui-btn-icon-notext btn-no-border' title='" + _( "Zoom out" ) + "'></a>" +
					"<a class='ui-btn ui-corner-all ui-icon-carat-l ui-btn-icon-notext btn-no-border' title='" + _( "Move left" ) + "'></a>" +
					"<a class='ui-btn ui-corner-all ui-icon-carat-r ui-btn-icon-notext btn-no-border' title='" + _( "Move right" ) + "'></a>" +
				"</div>" +
			"</div>" +
		"</div>" ),
		placeholder = page.find( "#timeline" ),
		navi = page.find( "#timeline-navigation" ),
		previewData, processPrograms, checkMatch, checkMatch183, checkMatch21, checkDayMatch, checkMatch216, runSched, runSched216,
		timeToText, changeday, render, date, day, now, is21, is211, is216;

	page.find( "#preview_date" ).on( "change", function() {
		date = this.value.split( "-" );
		day = new Date( date[ 0 ], date[ 1 ] - 1, date[ 2 ] );
		render();
	} );

	page.one( "pagebeforeshow", function() {
		holdButton( page.find( ".preview-plus" ), function() {
			changeday( 1 );
		} );

		holdButton( page.find( ".preview-minus" ), function() {
			changeday( -1 );
		} );
	} );

	page.on( {
		pagehide: function() {
			page.detach();
		},
		pageshow: function() {
			render();
		}
	} );

	processPrograms = function( month, day, year ) {
		previewData = [];
		var devday = Math.floor( controller.settings.devt / ( 60 * 60 * 24 ) ),
			simminutes = 0,
			simt = Date.UTC( year, month - 1, day, 0, 0, 0, 0 ),
			simday = ( simt / 1000 / 3600 / 24 ) >> 0,
			nstations = controller.settings.nbrd * 8,
			startArray = new Array( nstations ),
			programArray = new Array( nstations ),
			endArray = new Array( nstations ),
			plArray = new Array( nstations ),

			// Runtime queue for FW 2.1.6+
			rtQueue = [],

			// Station qid for FW 2.1.6+
			qidArray = new Array( nstations ),
			lastStopTime = 0,
			lastSeqStopTime = new Array( 16 ),
			busy, matchFound, prog, sid, qid, q, sqi, bid, bid2, s, s2;

		for ( sid = 0; sid < nstations; sid++ ) {
			startArray[ sid ] = -1;
			programArray[ sid ] = 0;
			endArray[ sid ] = 0;
			plArray[ sid ] = 0;
			qidArray[ sid ] = 0xFF;
		}

		do {
			busy = 0;
			matchFound = 0;
			for ( var pid = 0; pid < controller.programs.pd.length; pid++ ) {
				prog = controller.programs.pd[ pid ];
				if ( checkMatch( prog, simminutes, simt, simday, devday ) ) {
					for ( sid = 0; sid < nstations; sid++ ) {
						bid = sid >> 3;
						s = sid % 8;

						// Skip master station
						if ( isStationMaster( sid ) ) {
							continue;
						}

						if ( is21 ) {

							// Skip disabled stations
							if ( controller.stations.stn_dis[ bid ] & ( 1 << s ) ) {
								continue;
							}

							// Skip if water time is zero, or station is already scheduled
							if ( prog[ 4 ][ sid ] && endArray[ sid ] === 0 ) {
								var waterTime = 0;

								// Use weather scaling bit on
								if ( prog[ 0 ] & 0x02 && ( ( controller.options.uwt > 0 && simday === devday ) || controller.options.uwt === 0 ) ) {
									waterTime = getStationDuration( prog[ 4 ][ sid ], simt ) * controller.options.wl / 100 >> 0;
								} else {
									waterTime = getStationDuration( prog[ 4 ][ sid ], simt );
								}

								// After weather scaling, we maybe getting 0 water time
								if ( waterTime > 0 ) {
									if ( is216 ) {
										if ( rtQueue.length < nstations ) {

											// Check if there is space in the queue (queue is as large as number of stations)
											rtQueue.push( {
												st: -1,
												dur: waterTime,
												sid: sid,
												pid: pid + 1,
												gid: controller.stations.stn_grp ? controller.stations.stn_grp[ sid ] : 0,
												pl: 1
											} );
										}
									} else {
										endArray[ sid ] = waterTime;
										programArray[ sid ] = pid + 1;
									}
									matchFound = 1;
								}
							}
						} else {
							if ( prog[ 7 + bid ] & ( 1 << s ) ) {
								endArray[ sid ] = prog[ 6 ] * controller.options.wl / 100 >> 0;
								programArray[ sid ] = pid + 1;
								matchFound = 1;
							}
						}
					}
			  }
			}
			if ( matchFound ) {
				var acctime = simminutes * 60,
					seqAcctime = new Array( lastSeqStopTime.length );

				if ( is211 ) {
					for ( var i = 0; i < seqAcctime.length; i++ ) {
						seqAcctime[ i ] = Math.max( acctime, lastSeqStopTime[ i ] + controller.options.sdt );
					}

					if ( is216 ) {

						// Schedule all stations
						for ( qid = 0; qid < rtQueue.length; qid++ ) {
							q = rtQueue[ qid ];

							// Check if already scheduled or water time is zero
							if ( q.st >= 0 || q.dur === 0 ) {
								continue;
							}
							sid = q.sid;
							bid2 = sid >> 3;
							s2 = sid & 0x07;
							if ( controller.stations.stn_seq[ bid2 ] & ( 1 << s2 ) ) {
								q.st = seqAcctime[ q.gid ];
								seqAcctime[ q.gid ] += q.dur;
								seqAcctime[ q.gid ] += controller.options.sdt;
							} else {
								q.st = acctime;
								acctime++;
							}
							busy = 1;
						}
					} else {
						for ( sid = 0; sid < nstations; sid++ ) {
							bid2 = sid >> 3;
							s2 = sid & 0x07;
							if ( endArray[ sid ] === 0 || startArray[ sid ] >= 0 ) {
								continue;
							}
							if ( controller.stations.stn_seq[ bid2 ] & ( 1 << s2 ) ) {
								startArray[ sid ] = seqAcctime[ 0 ];seqAcctime[ 0 ] += endArray[ sid ];
								endArray[ sid ] = seqAcctime[ 0 ];seqAcctime[ 0 ] += controller.options.sdt;
								plArray[ sid ] = 1;
							} else {
								startArray[ sid ] = acctime;
								endArray[ sid ] = acctime + endArray[ sid ];
								plArray[ sid ] = 1;
							}
							busy = 1;
						}
					}
				} else {
					if ( is21 && controller.options.seq ) {
						if ( lastStopTime > acctime ) {
							acctime = lastStopTime + controller.options.sdt;
						}
					}
					if ( controller.options.seq ) {
						for ( sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
							if ( endArray[ sid ] === 0 || programArray[ sid ] === 0 ) {
								continue;
							}
							startArray[ sid ] = acctime;acctime += endArray[ sid ];
							endArray[ sid ] = acctime;acctime += controller.options.sdt;
							busy = 1;
						}
					} else {
						for ( sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
							if ( endArray[ sid ] === 0 || programArray[ sid ] === 0 ) {
								continue;
							}
							startArray[ sid ] = acctime;
							endArray[ sid ] = acctime + endArray[ sid ];
							busy = 1;
						}
					}
				}
			}
			if ( is216 ) {

				// Go through queue and assign queue elements to stations
				for ( qid = 0; qid < rtQueue.length; qid++ ) {
					q = rtQueue[ qid ];
					sid = q.sid;
					sqi = qidArray[ sid ];
					if ( sqi < 255 && rtQueue[ sqi ].st < q.st ) {
						continue;
					}
					qidArray[ sid ] = qid;
				}

				// Next, go through stations and calculate the schedules
				runSched216( simminutes * 60, rtQueue, qidArray, simt );

				// Progress 1 minute
				simminutes++;

				// Go through stations and remove jobs that have been done
				for ( sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
					sqi = qidArray[ sid ];
					if ( sqi === 255 ) {
						continue;
					}
					q = rtQueue[ sqi ];
					if ( q.st >= 0 && simminutes * 60 >= q.st + q.dur ) {

						// Remove element at index sqi
						var nqueue = rtQueue.length;

						if ( sqi < nqueue - 1 ) {

							// Copy last element to overwrite
							rtQueue[ sqi ] = rtQueue[ nqueue - 1 ];

							// Fix queue index if necessary
							if ( qidArray[ rtQueue[ sqi ].sid ] === nqueue - 1 ) {
								qidArray[ rtQueue[ sqi ].sid ] = sqi;
							}
						}
						rtQueue.pop();
						qidArray[ sid ] = 0xFF;
					}
				}

				// Lastly, calculate lastSeqStopTime
				for ( var d = 0; d < lastSeqStopTime.length; d++ ) { lastSeqStopTime[ d ] = 0; }
				for ( qid = 0; qid < rtQueue.length; qid++ ) {
					q = rtQueue[ qid ];
					sid = q.sid;
					bid2 = sid >> 3;
					s2 = sid & 0x07;
					var sst = q.st + q.dur;
					if ( controller.stations.stn_seq[ bid2 ] & ( 1 << s2 ) ) {
						if ( sst > lastSeqStopTime[ q.gid ] ) {
							lastSeqStopTime[ q.gid ] = sst;
						}
					}
				}
			} else {

				// Handle firmwares prior to 2.1.6
				if ( busy ) {
					if ( is211 ) {
						lastSeqStopTime[ 0 ] = runSched( simminutes * 60, startArray, programArray, endArray, plArray, simt );
						simminutes++;
						for ( sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
							if ( programArray[ sid ] > 0 && simminutes * 60 >= endArray[ sid ] ) {
								startArray[ sid ] = -1;programArray[ sid ] = 0;endArray[ sid ] = 0;plArray[ sid ] = 0;
							}
						}
					} else if ( is21 ) {
						lastStopTime = runSched( simminutes * 60, startArray, programArray, endArray, plArray, simt );
						simminutes++;
						for ( sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
							startArray[ sid ] = -1;programArray[ sid ] = 0;endArray[ sid ] = 0;
						}
					} else {
						var endminutes = runSched( simminutes * 60, startArray, programArray, endArray, plArray, simt ) / 60 >> 0;
						if ( controller.options.seq && simminutes !== endminutes ) {
							simminutes = endminutes;
						} else {
							simminutes++;
						}
						for ( sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
							startArray[ sid ] = -1;programArray[ sid ] = 0;endArray[ sid ] = 0;
						}
					}
				} else {
					simminutes++;
					if ( is211 ) {
					  for ( sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
						  if ( programArray[ sid ] > 0 && simminutes * 60 >= endArray[ sid ] ) {
							  startArray[ sid ] = -1;programArray[ sid ] = 0;endArray[ sid ] = 0;plArray[ sid ] = 0;
						  }
					  }
					}
				}
			}
		} while ( simminutes < 24 * 60 );
	};

	runSched216 = function( simseconds, rtQueue, qidArray, simt ) {
		for ( var sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
			var sqi = qidArray[ sid ];
			if ( sqi === 255 ) {
				continue;
			}
			var q = rtQueue[ sqi ];
			if ( q.pl ) {

				// If this one hasn't been plotted
				var mas2 = typeof controller.options.mas2 !== "undefined" ? true : false,
					useMas1 = controller.stations.masop[ sid >> 3 ] & ( 1 << ( sid % 8 ) ),
					useMas2 = mas2 ? controller.stations.masop2[ sid >> 3 ] & ( 1 << ( sid % 8 ) ) : false;

				if ( !isStationMaster( sid ) ) {
					if ( controller.options.mas > 0 && useMas1 ) {
						previewData.push( {
							"start": ( q.st + controller.options.mton ),
							"end": ( q.st + q.dur + controller.options.mtof ),
							"content":"",
							"className":"master",
							"shortname":"M" + ( mas2 ? "1" : "" ),
							"group":"Master",
							"station": sid
						} );
					}

					if ( mas2 && controller.options.mas2 > 0 && useMas2 ) {
						previewData.push( {
							"start": ( q.st + controller.options.mton2 ),
							"end": ( q.st + q.dur + controller.options.mtof2 ),
							"content":"",
							"className":"master",
							"shortname":"M2",
							"group":"Master 2",
							"station": sid
						} );
					}
				}
				timeToText( sid, q.st, q.pid, q.st + q.dur, simt );
				q.pl = 0;
			}
		}
	};

	runSched = function( simseconds, startArray, programArray, endArray, plArray, simt ) {
		var endtime = simseconds;
		for ( var sid = 0; sid < controller.settings.nbrd * 8; sid++ ) {
			if ( programArray[ sid ] ) {
			  if ( is211 ) {
				if ( plArray[ sid ] ) {
					var mas2 = typeof controller.options.mas2 !== "undefined" ? true : false,
						useMas1 = controller.stations.masop[ sid >> 3 ] & ( 1 << ( sid % 8 ) ),
						useMas2 = mas2 ? controller.stations.masop2[ sid >> 3 ] & ( 1 << ( sid % 8 ) ) : false;

					if ( !isStationMaster( sid ) ) {
						if ( controller.options.mas > 0 && useMas1 ) {
							previewData.push( {
								"start": ( startArray[ sid ] + controller.options.mton ),
								"end": ( endArray[ sid ] + controller.options.mtof ),
								"content":"",
								"className":"master",
								"shortname":"M" + ( mas2 ? "1" : "" ),
								"group":"Master",
								"station": sid
							} );
						}

						if ( mas2 && controller.options.mas2 > 0 && useMas2 ) {
							previewData.push( {
								"start": ( startArray[ sid ] + controller.options.mton2 ),
								"end": ( endArray[ sid ] + controller.options.mtof2 ),
								"content":"",
								"className":"master",
								"shortname":"M2",
								"group":"Master 2",
								"station": sid
							} );
						}
					}

					timeToText( sid, startArray[ sid ], programArray[ sid ], endArray[ sid ], simt );
					plArray[ sid ] = 0;
					if ( controller.stations.stn_seq[ sid >> 3 ] & ( 1 << ( sid & 0x07 ) ) ) {
					  endtime = ( endtime > endArray[ sid ] ) ? endtime : endArray[ sid ];
					}
				}
			  } else {
				if ( controller.options.seq === 1 ) {
					if ( isStationMaster( sid ) && ( controller.stations.masop[ sid >> 3 ] & ( 1 << ( sid % 8 ) ) ) ) {
						previewData.push( {
							"start": ( startArray[ sid ] + controller.options.mton ),
							"end": ( endArray[ sid ] + controller.options.mtof ),
							"content":"",
							"className":"master",
							"shortname":"M",
							"group":"Master",
							"station": sid
						} );
					}
					timeToText( sid, startArray[ sid ], programArray[ sid ], endArray[ sid ], simt );
					endtime = endArray[ sid ];
				} else {
					timeToText( sid, simseconds, programArray[ sid ], endArray[ sid ], simt );
					if ( isStationMaster( sid ) && ( controller.stations.masop[ sid >> 3 ] & ( 1 << ( sid % 8 ) ) ) ) {
						endtime = ( endtime > endArray[ sid ] ) ? endtime : endArray[ sid ];
					}
				}
			  }
			}
		}
		if ( !is211 ) {
		  if ( controller.options.seq === 0 && controller.options.mas > 0 ) {
			  previewData.push( {
				  "start": simseconds,
				  "end": endtime,
				  "content":"",
				  "className":"master",
				  "shortname":"M",
				  "group":"Master",
				  "station": sid
			  } );
		  }
		}
		return endtime;
	};

	timeToText = function( sid, start, pid, end, simt ) {
		var className = "program-" + ( ( pid + 3 ) % 4 ),
			pname = "P" + pid;

		if ( ( ( controller.settings.rd !== 0 ) &&
			( simt + start + ( controller.options.tz - 48 ) * 900 <= controller.settings.rdst * 1000 ) ||
			controller.options.urs === 1 && controller.settings.rs === 1 ) &&
			( typeof controller.stations.ignore_rain === "object" &&
				( controller.stations.ignore_rain[ parseInt( sid / 8 ) ] & ( 1 << ( sid % 8 ) ) ) === 0 ) ) {

			className = "delayed";
		}

		if ( checkOSVersion( 210 ) ) {
			pname = controller.programs.pd[ pid - 1 ][ 5 ];
		}

		previewData.push( {
			"start": start,
			"end": end,
			"className":className,
			"content":pname,
			"pid": pid - 1,
			"shortname":"S" + ( sid + 1 ),
			"group": controller.stations.snames[ sid ],
			"station": sid
		} );
	};

	checkMatch = function( prog, simminutes, simt, simday, devday ) {
		if ( is216 ) {
			return checkMatch216( prog, simminutes, simt, simday, devday );
		} else if ( is21 ) {
			return checkMatch21( prog, simminutes, simt, simday, devday );
		} else {
			return checkMatch183( prog, simminutes, simt, simday, devday );
		}
	};

	checkMatch183 = function( prog, simminutes, simt, simday, devday ) {
		if ( prog[ 0 ] === 0 ) {
			return 0;
		}
		if ( ( prog[ 1 ] & 0x80 ) && ( prog[ 2 ] > 1 ) ) {
			var dn = prog[ 2 ],
				drem = prog[ 1 ] & 0x7f;
			if ( ( simday % dn ) !== ( ( devday + drem ) % dn ) ) {
				return 0;
			}
		} else {
			var date = new Date( simt );
			var wd = ( date.getUTCDay() + 6 ) % 7;
			if ( ( prog[ 1 ] & ( 1 << wd ) ) === 0 ) {
				return 0;
			}
			var dt = date.getUTCDate();
			if ( ( prog[ 1 ] & 0x80 ) && ( prog[ 2 ] === 0 ) ) {
				if ( ( dt % 2 ) !== 0 ) {
					return 0;
				}
			}
			if ( ( prog[ 1 ] & 0x80 ) && ( prog[ 2 ] === 1 ) ) {
				if ( dt === 31 || ( dt === 29 && date.getUTCMonth() === 1 ) || ( dt % 2 ) !== 1 ) {
					return 0;
				}
			}
		}
		if ( simminutes < prog[ 3 ] || ( simminutes > prog[ 4 ] || ( isOSPi() && simminutes >= prog[ 4 ] ) ) ) {
			return 0;
		}
		if ( prog[ 5 ] === 0 ) {
			return 0;
		}
		if ( ( ( simminutes - prog[ 3 ] ) / prog[ 5 ] >> 0 ) * prog[ 5 ] === ( simminutes - prog[ 3 ] ) ) {
			return 1;
		}
		return 0;
	};

	checkDayMatch = function( prog, simt, simday, devday ) {
		var oddeven = ( prog[ 0 ] >> 2 ) & 0x03,
			type = ( prog[ 0 ] >> 4 ) & 0x03,
			date = new Date( simt );

		if ( type === 3 ) {

			// Interval program
			var dn = prog[ 2 ],
				drem = prog[ 1 ];

			if ( ( simday % dn ) !== ( ( devday + drem ) % dn ) ) {
				return 0;
			}
		} else if ( type === 0 ) {

			// Weekly program
			var wd = ( date.getUTCDay() + 6 ) % 7;
			if ( ( prog[ 1 ] & ( 1 << wd ) ) === 0 ) {
				return 0;
			}
		} else {
			return 0;
		}

		// Odd/Even restriction handling
		var dt = date.getUTCDate();

		if ( oddeven === 2 ) {
			if ( ( dt % 2 ) !== 0 ) {
				return 0;
			}
		} else if ( oddeven === 1 ) {
			if ( dt === 31 || ( dt === 29 && date.getUTCMonth() === 1 ) || ( dt % 2 ) !== 1 ) {
				return 0;
			}
		}
		return 1;
	};

	checkMatch21 = function( prog, simminutes, simt, simday, devday ) {
		var en = prog[ 0 ] & 0x01,
			sttype = ( prog[ 0 ] >> 6 ) & 0x01,
			date = new Date( simt );

		if ( en === 0 ) {
			return 0;
		}

		if ( !checkDayMatch( prog, simt, simday, devday ) ) {
		  return 0;
		}

		// Start time matching
		if ( sttype === 0 ) {

			// Repeating program
			var start = getStartTime( prog[ 3 ][ 0 ], date ),
				repeat = prog[ 3 ][ 1 ],
				cycle = prog[ 3 ][ 2 ];

			if ( simminutes < start ) {
				return 0;
			}

			if ( repeat === 0 ) {

				// Single run program
				return ( simminutes === start ) ? 1 : 0;
			}

			if ( cycle === 0 ) {

				// If this is a multi-run, cycle time must be > 0
				return 0;
			}

			var c = Math.round( ( simminutes - start ) / cycle );
			if ( ( c * cycle === ( simminutes - start ) ) && ( c <= repeat ) ) {
				return 1;
			}
		} else {

			// Set start time program
			var sttimes = prog[ 3 ];
			for ( var i = 0; i < 4; i++ ) {

				if ( simminutes === getStartTime( sttimes[ i ], date ) ) {
					return 1;
				}
			}
		}
		return 0;
	};

	checkMatch216 = function( prog, simminutes, simt, simday, devday ) {
		var en = prog[ 0 ] & 0x01,
			sttype = ( prog[ 0 ] >> 6 ) & 0x01,
			date = new Date( simt );

		if ( en === 0 ) {
			return 0;
		}

		if ( prog[ 6 ] && prog[ 6 ][ 0 ] ) { // Enable date range
			var dateEncode = ( (date.getUTCMonth()+1) << 5 ) + date.getUTCDate();
			// Check that the current day does not lie outside the date range specified
			var isAscending = prog[ 6 ][ 1 ] < prog[ 6 ][ 2 ];
			if (isAscending && (dateEncode < prog[ 6 ][ 1 ] || dateEncode > prog[ 6 ][ 2 ])) {
				return 0;
			} else if (!isAscending && dateEncode > prog[ 6 ][ 1 ] && dateEncode < prog[ 6 ][ 2 ]) {
				return 0;
			}
		}

		var start = getStartTime( prog[ 3 ][ 0 ], date ),
			repeat = prog[ 3 ][ 1 ],
			cycle = prog[ 3 ][ 2 ],
			c;

		// Check if simday matches the program start days
		if ( checkDayMatch( prog, simt, simday, devday ) ) {

			// Match the start time
			if ( sttype === 0 ) {

				// Repeating program
				if ( simminutes === start ) {
					return 1;
				}

				if ( simminutes > start && cycle ) {
					c = Math.round( ( simminutes - start ) / cycle );
					if ( ( c * cycle === ( simminutes - start ) ) && ( c <= repeat ) ) {
						return 1;
					}
				}

			} else {

				// Set start time program
				var sttimes = prog[ 3 ];
				for ( var i = 0; i < 4; i++ ) {

					if ( simminutes === getStartTime( sttimes[ i ], date ) ) {
						return 1;
					}
				}
				return 0;
			}
		}

		// To proceed, the program has to be repeating type,
		// and interval and repeat must be non-zero
		if ( sttype || !cycle ) {
			return 0;
		}

		// Check if the previous day is a program start day
		if ( checkDayMatch( prog, simt - 86400000, simday - 1, devday ) ) {

			// If so, check if a repeating program
			// has start times that fall on today
			c = Math.round( ( simminutes - start + 1440 ) / cycle );
			if ( ( c * cycle === ( simminutes - start + 1440 ) ) && ( c <= repeat ) ) {
				return 1;
			}
		}
		return 0;
	};

	changeday = function( dir ) {
		day.setDate( day.getDate() + dir );

		var m = pad( day.getMonth() + 1 ),
			d = pad( day.getDate() ),
			y = day.getFullYear();

		date = [ y, m, d ];
		page.find( "#preview_date" ).val( date.join( "-" ) );
		render();
	};

	render = function() {
		processPrograms( date[ 1 ], date[ 2 ], date[ 0 ] );

		navi.hide();

		if ( !previewData.length ) {
			page.find( "#timeline" ).html( "<p align='center'>" + _( "No stations set to run on this day." ) + "</p>" );
			return;
		}

		previewData.sort( sortByStation );

		var shortnames = [],
			max = new Date( date[ 0 ], date[ 1 ] - 1, date[ 2 ], 24 );

		$.each( previewData, function() {
			var total = this.start + this.end;

			this.start = new Date( date[ 0 ], date[ 1 ] - 1, date[ 2 ], 0, 0, this.start );
			if ( total > 86400 ) {
				var extraDays = Math.floor( this.end / 86400 );

				this.end = new Date( date[ 0 ], date[ 1 ] - 1, parseInt( date[ 2 ] ) + extraDays, 0, 0, this.end % 86400 );
				max = max > this.end ? max : this.end;

			} else {
				this.end = new Date( date[ 0 ], date[ 1 ] - 1, date[ 2 ], 0, 0, this.end );
			}
			shortnames[ this.group ] = this.shortname;
		} );

		var options = {
			"width":  "100%",
			"editable": false,
			"axisOnTop": true,
			"eventMargin": 10,
			"eventMarginAxis": 0,
			"min": new Date( date[ 0 ], date[ 1 ] - 1, date[ 2 ], 0 ),
			"max": max,
			"selectable": true,
			"showMajorLabels": false,
			"zoomMax": 1000 * 60 * 60 * 24,
			"zoomMin": 1000 * 60 * 60,
			"groupsChangeable": false,
			"showNavigation": false,
			"groupsOrder": "none",
			"groupMinHeight": 20
		},
		resize = function() {
			timeline.redraw();
		},
		timeline = new links.Timeline( placeholder[ 0 ], options ),
		currentTime = new Date( now );

		currentTime.setMinutes( currentTime.getMinutes() + currentTime.getTimezoneOffset() );

		timeline.setCurrentTime( currentTime );
		links.events.addListener( timeline, "select", function() {
			var sel = timeline.getSelection();

			if ( sel.length ) {
				if ( typeof sel[ 0 ].row !== "undefined" ) {
					changePage( "#programs", {
						"programToExpand": parseInt( timeline.getItem( sel[ 0 ].row ).pid )
					} );
				}
			}
		} );

		$.mobile.window.on( "resize", resize );

		page.one( "pagehide", function() {
			$.mobile.window.off( "resize", resize );
		} );

		timeline.draw( previewData );

		page.find( ".timeline-groups-text" ).each( function() {
			var stn = $( this );
			var name = shortnames[ stn.text() ];
			stn.attr( "data-shortname", name );
		} );

		page.find( ".timeline-groups-axis" ).children().first().html( "<div class='timeline-axis-text center dayofweek' data-shortname='" +
			getDayName( day, "short" ) + "'>" + getDayName( day ) + "</div>" );

		if ( isAndroid ) {
			navi.find( ".ui-icon-plus" ).off( "click" ).on( "click", function() {
				timeline.zoom( 0.4 );
				return false;
			} );
			navi.find( ".ui-icon-minus" ).off( "click" ).on( "click", function() {
				timeline.zoom( -0.4 );
				return false;
			} );
			navi.find( ".ui-icon-carat-l" ).off( "click" ).on( "click", function() {
				timeline.move( -0.2 );
				return false;
			} );
			navi.find( ".ui-icon-carat-r" ).off( "click" ).on( "click", function() {
				timeline.move( 0.2 );
				return false;
			} );

			navi.show();
		} else {
			navi.hide();
		}

		placeholder.on( "swiperight swipeleft", function( e ) {
			e.stopImmediatePropagation();
		} );

	};

	function begin() {
		is21 = checkOSVersion( 210 );
		is211 = checkOSVersion( 211 );
		is216 = checkOSVersion( 216 );

		if ( page.find( "#preview_date" ).val() === "" ) {
			now = new Date( controller.settings.devt * 1000 );
			date = now.toISOString().slice( 0, 10 ).split( "-" );
			day = new Date( date[ 0 ], date[ 1 ] - 1, date[ 2 ] );
			page.find( "#preview_date" ).val( date.join( "-" ) );
		}

		changeHeader( {
			title: _( "Program Preview" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: goBack
			}
		} );

		$( "#preview" ).remove();
		$.mobile.pageContainer.append( page );
	}

	return begin;
} )();

function getStationDuration( duration, date ) {
	if ( checkOSVersion( 214 ) ) {
		var sunTimes = getSunTimes( date );

		if ( duration === 65535 ) {
			duration = ( ( sunTimes[ 0 ] + 1440 ) - sunTimes[ 1 ] ) * 60;
		} else if ( duration === 65534 ) {
			duration = ( sunTimes[ 1 ] - sunTimes[ 0 ] ) * 60;
		}
	}

	return duration;
}

// Logging functions
var getLogs = ( function() {

	var page = $( "<div data-role='page' id='logs'>" +
			"<div class='ui-content' role='main'>" +
				"<fieldset data-role='controlgroup' data-type='horizontal' data-mini='true' class='log_type'>" +
					"<input data-mini='true' type='radio' name='log_type' id='log_timeline' value='timeline'>" +
					"<label for='log_timeline'>" + _( "Timeline" ) + "</label>" +
					"<input data-mini='true' type='radio' name='log_type' id='log_table' value='table'>" +
					"<label for='log_table'>" + _( "Table" ) + "</label>" +
				"</fieldset>" +
				"<fieldset data-role='collapsible' data-mini='true' id='log_options' class='center'>" +
					"<legend>" + _( "Options" ) + "</legend>" +
					"<fieldset data-role='controlgroup' data-type='horizontal' id='table_sort'>" +
					  "<p class='tight'>" + _( "Grouping:" ) + "</p>" +
					  "<input data-mini='true' type='radio' name='table-group' id='table-sort-day' value='day' checked='checked'>" +
					  "<label for='table-sort-day'>" + _( "Day" ) + "</label>" +
					  "<input data-mini='true' type='radio' name='table-group' id='table-sort-station' value='station'>" +
					  "<label for='table-sort-station'>" + _( "Station" ) + "</label>" +
					"</fieldset>" +
					"<div class='ui-field-contain'>" +
						"<label for='log_start'>" + _( "Start:" ) + "</label>" +
						"<input data-mini='true' type='date' id='log_start'>" +
						"<label for='log_end'>" + _( "End:" ) + "</label>" +
						"<input data-mini='true' type='date' id='log_end'>" +
					"</div>" +
					"<a data-role='button' data-icon='action' class='export_logs' href='#' data-mini='true'>" + _( "Export" ) + "</a>" +
					"<a data-role='button' class='red clear_logs' href='#' data-mini='true' data-icon='alert'>" +
						_( "Clear Logs" ) +
					"</a>" +
				"</fieldset>" +
				"<div id='logs_list' class='center'>" +
				"</div>" +
			"</div>" +
		"</div>" ),
		logsList = page.find( "#logs_list" ),
		tableSort = page.find( "#table_sort" ),
		logOptions = page.find( "#log_options" ),
		data = [],
		waterlog = [],
		flowlog = [],
		sortData = function( type, grouping ) {
			var sortedData = [],
				stats = {
					totalRuntime: 0,
					totalCount: 0
				};

			if ( type === "table" && grouping === "station" ) {
				for ( i = 0; i < stations.length; i++ ) {
					sortedData[ i ] = [];
				}
			}

			$.each( data, function() {
				var station = this[ 1 ],
					duration = parseInt( this[ 2 ] );

				// Adjust for negative watering time firmware bug
				if ( duration < 0 ) {
					duration += 65536;
				}

				var date = new Date( parseInt( this[ 3 ] * 1000 ) - ( duration * 1000 ) ),
					utc = new Date( date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(),
						date.getUTCMinutes(), date.getUTCSeconds() );

				if ( typeof station === "string" ) {
					if ( station === "rd" ) {
						station = stations.length - 1;
					} else if ( station === "s1" ) {
						station = stations.length - 3;
					} else if ( station === "s2" ) {
						station = stations.length - 2;
					} else if ( station === "rs" ) {
						station = stations.length - 2;
					} else {
						return;
					}
				} else if ( typeof station === "number" ) {
					if ( station > stations.length - 2 || isStationMaster( station ) ) {
						return;
					}

					stats.totalRuntime += duration;
					stats.totalCount++;
				}

				if ( type === "table" ) {
					switch ( grouping ) {
						case "station":
							sortedData[ station ].push( [ utc, dhms2str( sec2dhms( duration ) ) ] );
							break;
						case "day":
							var day = Math.floor( date.getTime() / 1000 / 60 / 60 / 24 ),
								item = [ utc, dhms2str( sec2dhms( duration ) ), station ];

							if ( typeof sortedData[ day ] !== "object" ) {
								sortedData[ day ] = [ item ];
							} else {
								sortedData[ day ].push( item );
							}

							break;
					}
				} else if ( type === "timeline" ) {
					var pid = parseInt( this[ 0 ] ),
						className, name, group, shortname;

					if ( this[ 1 ] === "rs" ) {
						className = "delayed";
						name = _( "Rain Sensor" );
						group = name;
						shortname = _( "RS" );
					} else if ( this[ 1 ] === "rd" ) {
						className = "delayed";
						name = _( "Rain Delay" );
						group = name;
						shortname = _( "RD" );
					} else if ( this[ 1 ] === "s1" ) {
						className = "delayed";
						name = controller.options.sn1t === 3 ? _( "Soil Sensor" ) : _( "Rain Sensor" );
						group = name;
						shortname = _( "SEN1" );
					} else if ( this[ 1 ] === "s2" ) {
						className = "delayed";
						name = controller.options.sn2t === 3 ? _( "Soil Sensor" ) : _( "Rain Sensor" );
						group = name;
						shortname = _( "SEN2" );
					} else if ( pid === 0 ) {
						return;
					} else {
						className = "program-" + ( ( pid + 3 ) % 4 );
						name = pidname( pid );
						group = controller.stations.snames[ station ];
						shortname = "S" + ( station + 1 );
					}

					sortedData.push( {
						"start": utc,
						"end": new Date( utc.getTime() + ( duration * 1000 ) ),
						"className": className,
						"content": name,
						"pid": pid - 1,
						"shortname": shortname,
						"group": group,
						"station": station
					} );
				}
			} );

			if ( type === "timeline" ) {
				sortedData.sort( sortByStation );
			}

			return [ sortedData, stats ];
		},
		sortExtraData = function( stats, type ) {
			var wlSorted = [],
				flSorted = [];

			if ( waterlog.length ) {
				stats.avgWaterLevel = 0;
				$.each( waterlog, function() {
					wlSorted[ Math.floor( this[ 3 ] / 60 / 60 / 24 ) ] = this[ 2 ];
					stats.avgWaterLevel += this[ 2 ];
				} );
				stats.avgWaterLevel = parseFloat( ( stats.avgWaterLevel / waterlog.length ).toFixed( 2 ) );
			}

			if ( flowlog.length ) {
				stats.totalVolume = 0;
				$.each( flowlog, function() {
					var volume = flowCountToVolume( this[ 0 ] );

					if ( type === "timeline" ) {
						var date = new Date( parseInt( this[ 3 ] * 1000 ) ),
							utc = new Date( date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(),
								date.getUTCMinutes(), date.getUTCSeconds() );

						flSorted.push( {
							"start": new Date( utc.getTime() - parseInt( this[ 2 ] * 1000 ) ),
							"end": utc,
							"className": "",
							"content": volume + " L",
							"shortname": _( "FS" ),
							"group": _( "Flow Sensor" )
						} );
					} else {
						var day = Math.floor( this[ 3 ] / 60 / 60 / 24 );

						flSorted[ day ] = flSorted[ day ] ? flSorted[ day ] + volume : volume;
					}
					stats.totalVolume += volume;
				} );
			}

			return [ wlSorted, flSorted, stats ];
		},
		success = function( items, wl, fl ) {
			if ( typeof items !== "object" || items.length < 1 || ( items.result && items.result === 32 ) ) {
				$.mobile.loading( "hide" );
				resetLogsPage();
				return;
			}

			try {
				flowlog = JSON.parse( flowlog.replace( /,\s*inf/g, "" ) );
			} catch ( err ) {
				flowlog = [];
			}

			data = items;
			waterlog = $.isEmptyObject( wl ) ? [] : wl;
			flowlog = $.isEmptyObject( fl ) ? [] : fl;

			updateView();

			exportObj( ".export_logs", data );

			$.mobile.loading( "hide" );
		},
		updateView = function() {
			if ( page.find( "#log_table" ).prop( "checked" ) ) {
				prepTable();
			} else if ( page.find( "#log_timeline" ).prop( "checked" ) ) {
				prepTimeline();
			}
		},
		prepTimeline = function() {
			if ( data.length < 1 ) {
				resetLogsPage();
				return;
			}

			tableSort.hide();
			logsList.show();

			logOptions.collapsible( "collapse" );

			var sortedData = sortData( "timeline" ),
				extraData = sortExtraData( sortedData[ 1 ], "timeline" ),
				fullData = sortedData[ 0 ].concat( extraData[ 1 ] ),
				stats = extraData[ 2 ],
				options = {
					"width":  "100%",
					"editable": false,
					"axisOnTop": true,
					"eventMargin": 10,
					"eventMarginAxis": 0,
					"min": dates().start,
					"max": new Date( dates().end.getTime() + 86340000 ),
					"selectable": false,
					"showMajorLabels": false,
					"groupsChangeable": false,
					"showNavigation": false,
					"groupsOrder": "none",
					"groupMinHeight": 20,
					"zoomMin": 1000 * 60
				},
				resize = function() {
					timeline.redraw();
				},
				reset = function() {
					$.mobile.window.off( "resize", resize );
				},
				shortnames = [];

			logsList.on( "swiperight swipeleft", function( e ) {
				e.stopImmediatePropagation();
			} );

			$.each( fullData, function() {
				shortnames[ this.group ] = this.shortname;
			} );

			var timeline = new links.Timeline( logsList.get( 0 ), options );

			$.mobile.window.on( "resize", resize );
			page.one( "pagehide", reset );
			page.find( "input:radio[name='log_type']" ).one( "change", reset );

			timeline.draw( fullData );

			logsList.find( ".timeline-groups-text" ).each( function() {
				this.setAttribute( "data-shortname", shortnames[ this.textContent ] );
			} );

			logsList.prepend( showStats( stats ) );
		},
		prepTable = function() {
			if ( data.length < 1 ) {
				resetLogsPage();
				return;
			}

			tableSort.show();
			logsList.show();

			var grouping = page.find( "input:radio[name='table-group']:checked" ).val(),
				rawData = sortData( "table", grouping ),
				sortedData = rawData[ 0 ],
				extraData = sortExtraData( rawData [ 1 ] ),
				groupArray = [],
				wlSorted = extraData[ 0 ],
				flSorted = extraData[ 1 ],
				stats = extraData[ 2 ],
				tableHeader = "<table><thead><tr><th data-priority='1'>" + _( "Runtime" ) + "</th>" +
					"<th data-priority='2'>" + ( grouping === "station" ? _( "Date/Time" ) : _( "Time" ) + "</th><th>" + _( "Station" ) ) + "</th>" +
					"</tr></thead><tbody>",
				html = showStats( stats ) + "<div data-role='collapsible-set' data-inset='true' data-theme='b' data-collapsed-icon='arrow-d' data-expanded-icon='arrow-u'>",
				i = 0,
				group, ct, k;

			for ( group in sortedData ) {
				if ( sortedData.hasOwnProperty( group ) ) {
					ct = sortedData[ group ].length;
					if ( ct === 0 ) {
						continue;
					}
					groupArray[ i ] = "<div data-role='collapsible' data-collapsed='true'><h2>" +
							( ( checkOSVersion( 210 ) && grouping === "day" ) ? "<a class='ui-btn red ui-btn-corner-all delete-day day-" +
								group + "'>" + _( "delete" ) + "</a>" : "" ) +
							"<div class='ui-btn-up-c ui-btn-corner-all custom-count-pos'>" +
								ct + " " + ( ( ct === 1 ) ? _( "run" ) : _( "runs" ) ) +
							"</div>" + ( grouping === "station" ? stations[ group ] : dateToString(
								new Date( group * 1000 * 60 * 60 * 24 )
							).slice( 0, -9 ) ) +
						"</h2>";

					if ( wlSorted[ group ] ) {
						groupArray[ i ] += "<span style='border:none' class='" +
							( wlSorted[ group ] !== 100 ? ( wlSorted[ group ] < 100 ? "green " : "red " ) : "" ) +
							"ui-body ui-body-a'>" + _( "Average" ) + " " + _( "Water Level" ) + ": " + wlSorted[ group ] + "%</span>";
					}

					if ( flSorted[ group ] ) {
						groupArray[ i ] += "<span style='border:none' class='ui-body ui-body-a'>" +
							_( "Total Water Used" ) + ": " + flSorted[ group ] + " L" +
							"</span>";
					}

					groupArray[ i ] += tableHeader;

					for ( k = 0; k < sortedData[ group ].length; k++ ) {
						var date = new Date( sortedData[ group ][ k ][ 0 ] );
						groupArray[ i ] += "<tr><td>" + sortedData[ group ][ k ][ 1 ] + "</td><td>" +
							( grouping === "station" ? dateToString( date, false ) : pad( date.getHours() ) + ":" +
								pad( date.getMinutes() ) + ":" + pad( date.getSeconds() ) + "</td><td>" + stations[ sortedData[ group ][ k ][ 2 ] ] ) +
							"</td></tr>";
					}
					groupArray[ i ] += "</tbody></table></div>";

					i++;
				}
			}

			if ( grouping === "day" ) {
				groupArray.reverse();
			}

			logOptions.collapsible( "collapse" );
			logsList.html( html + groupArray.join( "" ) + "</div>" ).enhanceWithin();

			logsList.find( ".delete-day" ).on( "click", function() {
				var day, date;

				$.each( this.className.split( " " ), function() {
					if ( this.indexOf( "day-" ) === 0 ) {
						day = this.split( "day-" )[ 1 ];
						return false;
					}
				} );

				date = dateToString( new Date( day * 1000 * 60 * 60 * 24 ) ).slice( 0, -9 );

				areYouSure( _( "Are you sure you want to " ) + _( "delete" ) + " " + date + "?", "", function() {
					$.mobile.loading( "show" );
					sendToOS( "/dl?pw=&day=" + day ).done( function() {
						requestData();
						showerror( date + " " + _( "deleted" ) );
					} );
				} );

				return false;
			} );

			fixInputClick( logsList );
		},
		showStats = function( stats ) {
			if ( stats.totalCount === 0 || stats.totalRuntime === 0 ) {
				return "";
			}

			var hasWater = typeof stats.avgWaterLevel !== "undefined";

			return "<div class='ui-body-a smaller' id='logs_summary'>" +
						"<div><span class='bold'>" + _( "Total Station Events" ) + "</span>: " + stats.totalCount + "</div>" +
						"<div><span class='bold'>" + _( "Total Runtime" ) + "</span>: " + dhms2str( sec2dhms( stats.totalRuntime ) ) + "</div>" +
						( hasWater ?
							"<div><span class='bold'>" +  _( "Average" ) + " " + _( "Water Level" ) + "</span>: <span class='" +
									( stats.avgWaterLevel !== 100 ? ( stats.avgWaterLevel < 100 ? "green-text" : "red-text" ) : "" ) +
								"'>" + stats.avgWaterLevel + "%</span></div>" : ""
						) +
						( typeof stats.totalVolume !== "undefined" && stats.totalVolume > 0 ? "<div><span class='bold'>" + _( "Total Water Used" ) + "</span>: " + stats.totalVolume + " L" +
							( hasWater && stats.avgWaterLevel < 100 ? " (<span class='green-text'>" + ( stats.totalVolume - ( stats.totalVolume * ( stats.avgWaterLevel / 100 ) ) ).toFixed( 2 ) + "L saved</span>)" : "" ) +
						"</div>" : "" ) +
					"</div>";
		},
		resetLogsPage = function() {
			data = [];
			logOptions.collapsible( "expand" );
			tableSort.hide();
			logsList.show().html( _( "No entries found in the selected date range" ) );
		},
		fail = function() {
			$.mobile.loading( "hide" );

			tableSort.empty().hide();
			logsList.show().html( _( "Error retrieving log data. Please refresh to try again." ) );
		},
		dates = function() {
			var sDate = logStart.val().split( "-" ),
				eDate = logEnd.val().split( "-" );
			return {
				start: new Date( sDate[ 0 ], sDate[ 1 ] - 1, sDate[ 2 ] ),
				end: new Date( eDate[ 0 ], eDate[ 1 ] - 1, eDate[ 2 ] )
			};
		},
		parms = function() {
			return "start=" + ( dates().start.getTime() / 1000 ) + "&end=" + ( ( dates().end.getTime() / 1000 ) + 86340 );
		},
		requestData = function() {
			var endtime = dates().end.getTime() / 1000,
				starttime = dates().start.getTime() / 1000;

			if ( endtime < starttime ) {
				resetLogsPage();
				showerror( _( "Start time cannot be greater than end time" ) );
				return;
			}

			var delay = 0;
			$.mobile.loading( "show" );

			if ( ( endtime - starttime ) > 31540000 ) {
				showerror( _( "The requested time span exceeds the maxiumum of 1 year and has been adjusted" ), 3500 );
				var nDate = dates().start;
				nDate.setFullYear( nDate.getFullYear() + 1 );
				$( "#log_end" ).val( nDate.getFullYear() + "-" + pad( nDate.getMonth() + 1 ) + "-" + pad( nDate.getDate() ) );
				delay = 500;
			}

			var wlDefer = $.Deferred().resolve(),
				flDefer = $.Deferred().resolve();

			if ( checkOSVersion( 211 ) ) {
				wlDefer = sendToOS( "/jl?pw=&type=wl&" + parms(), "json" );
			}

			if ( checkOSVersion( 216 ) ) {
				flDefer = sendToOS( "/jl?pw=&type=fl&" + parms() );
			}

			setTimeout( function() {
				$.when(
					sendToOS( "/jl?pw=&" + parms(), "json" ),
					wlDefer,
					flDefer
				).then( success, fail );
			}, delay );
		},
		isNarrow = window.innerWidth < 640 ? true : false,
		logStart = page.find( "#log_start" ),
		logEnd = page.find( "#log_end" ),
		stations, logtimeout, i;

	// Bind clear logs button
	page.find( ".clear_logs" ).on( "click", function() {
		clearLogs( requestData );
		return false;
	} );

	//Automatically update the log viewer when changing the date range
	if ( isiOS ) {
		logStart.add( logEnd ).on( "blur", function() {
			if ( page.hasClass( "ui-page-active" ) ) {
				requestData();
			}
		} );
	} else {
		logStart.add( logEnd ).change( function() {
			clearTimeout( logtimeout );
			logtimeout = setTimeout( requestData, 1000 );
		} );
	}

	//Automatically update log viewer when switching table sort
	tableSort.find( "input[name='table-group']" ).change( function() {
		prepTable();
	} );

	//Bind view change buttons
	page.find( "input:radio[name='log_type']" ).change( updateView );

	page.on( {
		pagehide: function() {
			page.detach();
		},
		pageshow: requestData
	} );

	page.find( "#log_timeline" ).prop( "checked", !isNarrow );
	page.find( "#log_table" ).prop( "checked", isNarrow );

	function begin() {
		var additionalMetrics = checkOSVersion( 219 ) ? [
			controller.options.sn1t === 3 ? _( "Soil Sensor" ) : _( "Rain Sensor" ),
			controller.options.sn2t === 3 ? _( "Soil Sensor" ) : _( "Rain Sensor" ),
			_( "Rain Delay" )
		] : [ _( "Rain Sensor" ), _( "Rain Delay" ) ];

		stations = $.merge( $.merge( [], controller.stations.snames ), additionalMetrics );
		page.find( ".clear_logs" ).toggleClass( "hidden", ( isOSPi() || checkOSVersion( 210 ) ?  false : true ) );

		if ( logStart.val() === "" || logEnd.val() === "" ) {
			var now = new Date( controller.settings.devt * 1000 );
			logStart.val( new Date( now.getTime() - 604800000 ).toISOString().slice( 0, 10 ) );
			logEnd.val( now.toISOString().slice( 0, 10 ) );
		}

		changeHeader( {
			title: _( "Logs" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: goBack
			},
			rightBtn: {
				icon: "refresh",
				text: _( "Refresh" ),
				on: requestData
			}
		} );

		$( "#logs" ).remove();
		$.mobile.pageContainer.append( page );
	}

	return begin;
} )();

function clearLogs( callback ) {
	areYouSure( _( "Are you sure you want to clear ALL your log data?" ), "", function() {
		var url = isOSPi() ? "/cl?pw=" : "/dl?pw=&day=all";
		$.mobile.loading( "show" );
		sendToOS( url ).done( function() {
			if ( typeof callback === "function" ) {
				callback();
			}
			showerror( _( "Logs have been cleared" ) );
		} );
	} );
}

function resetAllOptions( callback ) {
	areYouSure( _( "Are you sure you want to delete all settings and return to the default settings?" ), "", function() {
		var co;

		if ( isOSPi() ) {
			co = "otz=32&ontp=1&onbrd=0&osdt=0&omas=0&omton=0&omtoff=0&orst=1&owl=100&orlp=0&ouwt=0&olg=1&oloc=Boston,MA";
		} else {
			co = "o1=32&o2=1&o3=1&o12=80&o13=0&o15=0&o17=0&o18=0&o19=0&o20=0&o22=1&o23=100&o26=0&o27=110&o28=100&o29=15&" +
				"o30=0&o31=0&o32=50&o33=97&o34=210&o35=169&o36=1&o37=0&o38=0&o39=0&loc=Boston,MA&wto=%22key%22%3A%22%22";
			transformKeysinString( co );
		}

		sendToOS( "/co?pw=&" + co ).done( function() {
			if ( typeof callback === "function" ) {
				callback();
			}
			updateController( updateWeather );
		} );
	} );
}

// Program management functions
var getPrograms = ( function() {
	var page = $( "<div data-role='page' id='programs'>" +
			"<div class='ui-content' role='main' id='programs_list'>" +
			"</div>" +
		"</div>" ),
		expandId;

	page
	.on( "programrefresh", updateContent )
	.on( "pagehide", function() {
		page.detach();
	} )
	.on( "pagebeforeshow", function() {
		updateProgramHeader();

		if ( typeof expandId !== "number" && controller.programs.pd.length === 1 ) {
			expandId = 0;
		}

		if ( typeof expandId === "number" ) {
			page.find( "fieldset[data-collapsed='false']" ).collapsible( "collapse" );
			$( "#program-" + expandId ).collapsible( "expand" );
		}
	} );

	function updateContent() {
		var list = $( makeAllPrograms() );

		list.find( "[id^=program-]" ).on( {
			collapsiblecollapse: function() {
				$( this ).find( ".ui-collapsible-content" ).empty();
			},
			collapsiblebeforecollapse: function( e ) {
				var program = $( this ),
					changed = program.find( ".hasChanges" );

				if ( changed.length ) {
					areYouSure( _( "Do you want to save your changes?" ), "", function() {
						changed.removeClass( "hasChanges" ).click();
						program.collapsible( "collapse" );
					}, function() {
						changed.removeClass( "hasChanges" );
						program.collapsible( "collapse" );
					} );
					e.preventDefault();
				}
			},
			collapsibleexpand: function() {
				expandProgram( $( this ) );
			}
		} );

		if ( checkOSVersion( 210 ) ) {
			list.find( ".move-up" ).removeClass( "hidden" ).on( "click", function() {
				var group = $( this ).parents( "fieldset" ),
					pid = parseInt( group.attr( "id" ).split( "-" )[ 1 ] );

				$.mobile.loading( "show" );

				sendToOS( "/up?pw=&pid=" + pid ).done( function() {
					updateControllerPrograms( function() {
						$.mobile.loading( "hide" );
						page.trigger( "programrefresh" );
					} );
				} );

				return false;
			} );
		}

		list.find( ".program-copy" ).on( "click", function() {
			var copyID = parseInt( $( this ).parents( "fieldset" ).attr( "id" ).split( "-" )[ 1 ] );

			changePage( "#addprogram", {
				copyID: copyID
			} );

			return false;
		} );

		page.find( "#programs_list" ).html( list.enhanceWithin() );
	}

	function begin( pid ) {
		expandId = pid;

		changeHeader( {
			title: _( "Programs" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: checkChangesBeforeBack
			},
			rightBtn: {
				icon: "plus",
				text: _( "Add" ),
				on: function() {
					checkChanges( function() {
						changePage( "#addprogram" );
					} );
				}
			}

		} );

		updateContent();

		$( "#programs" ).remove();
		$.mobile.pageContainer.append( page );
	}

	return begin;
} )();

function expandProgram( program ) {
	var id = parseInt( program.attr( "id" ).split( "-" )[ 1 ] );

	program.find( ".ui-collapsible-content" ).html( makeProgram( id ) ).enhanceWithin().on( "change input click", function( e ) {
		if ( e.type === "click" && e.target.tagName !== "BUTTON" ) {
			return;
		}

		$( this ).off( "change input click" );
		program.find( "[id^='submit-']" ).addClass( "hasChanges" );
	} );

	program.find( "[id^='submit-']" ).on( "click", function() {
		submitProgram( id );
		return false;
	} );

	program.find( "[id^='delete-']" ).on( "click", function() {
		deleteProgram( id );
		return false;
	} );

	program.find( "[id^='run-']" ).on( "click", function() {
		var name = checkOSVersion( 210 ) ? controller.programs.pd[ id ][ 5 ] : "Program " + id;

		areYouSure( _( "Are you sure you want to start " + name + " now?" ), "", function() {
			var runonce = [],
				finish = function() {
					runonce.push( 0 );
					submitRunonce( runonce );
				};

			if ( checkOSVersion( 210 ) ) {
				runonce = controller.programs.pd[ id ][ 4 ];

				if ( ( controller.programs.pd[ id ][ 0 ] >> 1 ) & 1 ) {
					areYouSure( _( "Do you wish to apply the current watering level?" ), "", function() {
						for ( var i = runonce.length - 1; i >= 0; i-- ) {
							runonce[ i ] = parseInt( runonce[ i ] * ( controller.options.wl / 100 ) );
						}
						finish();
					}, finish );
					return false;
				}
			} else {
				var durr = parseInt( $( "#duration-" + id ).val() ),
					stations = $( "[id^='station_'][id$='-" + id + "']" );

				$.each( stations, function() {
					if ( $( this ).is( ":checked" ) ) {
						runonce.push( durr );
					} else {
						runonce.push( 0 );
					}
				} );
			}
			finish();
		} );
		return false;
	} );
}

// Translate program array into easier to use data
function readProgram( program ) {
	if ( checkOSVersion( 210 ) ) {
		return readProgram21( program );
	} else {
		return readProgram183( program );
	}
}

function readProgram183( program ) {
	var days0 = program[ 1 ],
		days1 = program[ 2 ],
		even = false,
		odd = false,
		interval = false,
		days = "",
		stations = "",
		newdata = {};

	newdata.en = program[ 0 ];
	for ( var n = 0; n < controller.programs.nboards; n++ ) {
		var bits = program[ 7 + n ];
		for ( var s = 0; s < 8; s++ ) {
			stations += ( bits & ( 1 << s ) ) ? "1" : "0";
		}
	}
	newdata.stations = stations;
	newdata.duration = program[ 6 ];

	newdata.start = program[ 3 ];
	newdata.end = program[ 4 ];
	newdata.interval = program[ 5 ];

	if ( ( days0 & 0x80 ) && ( days1 > 1 ) ) {

		//This is an interval program
		days = [ days1, days0 & 0x7f ];
		interval = true;
	} else {

		//This is a weekly program
		for ( var d = 0; d < 7; d++ ) {
			if ( days0 & ( 1 << d ) ) {
				days += "1";
			} else {
				days += "0";
			}
		}
		if ( ( days0 & 0x80 ) && ( days1 === 0 ) ) {even = true;}
		if ( ( days0 & 0x80 ) && ( days1 === 1 ) ) {odd = true;}
	}

	newdata.days = days;
	newdata.is_even = even;
	newdata.is_odd = odd;
	newdata.is_interval = interval;

	return newdata;
}

// Read program for OpenSprinkler 2.1+
function readProgram21( program ) {
	var days0 = program[ 1 ],
		days1 = program[ 2 ],
		restrict = ( ( program[ 0 ] >> 2 ) & 0x03 ),
		type = ( ( program[ 0 ] >> 4 ) & 0x03 ),
		startType = ( ( program[ 0 ] >> 6 ) & 0x01 ),
		days = "",
		newdata = {
			repeat: 0,
			interval: 0
		};

	newdata.en = ( program[ 0 ] >> 0 ) & 1;
	newdata.weather = ( program[ 0 ] >> 1 ) & 1;
	newdata.is_even = ( restrict === 2 ) ? true : false;
	newdata.is_odd = ( restrict === 1 ) ? true : false;
	newdata.is_interval = ( type === 3 ) ? true : false;
	newdata.stations = program[ 4 ];
	newdata.name = program[ 5 ];
	newdata.has_daterange = program[ 6 ] ? true : false;

	if ( newdata.has_daterange ) {
		newdata.endr = program[ 6 ][ 0 ];
		newdata.fromdr = program[ 6 ][ 1 ];
		newdata.todr = program[ 6 ][ 2 ];
	}

	if ( startType === 0 ) {
		newdata.start = program[ 3 ][ 0 ];
		newdata.repeat = program[ 3 ][ 1 ];
		newdata.interval = program[ 3 ][ 2 ];
	} else if ( startType === 1 ) {
		newdata.start = program[ 3 ];
	}

	if ( type === 3 ) {

		//This is an interval program
		days = [ days1, days0 ];
	} else if ( type === 0 ) {

		//This is a weekly program
		for ( var d = 0; d < 7; d++ ) {
			if ( days0 & ( 1 << d ) ) {
				days += "1";
			} else {
				days += "0";
			}
		}
	}

	newdata.days = days;
	return newdata;
}

function getStartTime( time, date ) {
	var offset = time & 0x7ff,
		type = 0,
		times = getSunTimes( date );

	if ( time < 0 ) {
		return time;
	}

	if ( ( time >> 13 ) & 1 ) {
		type = 1;
	} else if ( !( time >> 14 ) & 1 ) {
		return time;
	}

	if ( ( time >> 12 ) & 1 ) {
		offset = -offset;
	}

	time = times[ type ];
	time += offset;

	if ( time < 0 ) {
		time = 0;
	} else if ( time > 1440 ) {
		time = 1440;
	}

	return time;
}

function readStartTime( time ) {
	var offset = time & 0x7ff,
		type = _( "Sunrise" );

	if ( ( time >> 13 ) & 1 ) {
		type = _( "Sunset" );
	} else if ( !( time >> 14 ) & 1 ) {
		return minutesToTime( time );
	}

	if ( ( time >> 12 ) & 1 ) {
		offset = -offset;
	}

	return type + ( offset !== 0 ? ( offset > 0 ? "+" : "" ) + dhms2str( sec2dhms( offset * 60 ) ) : "" );
}

// Translate the start and end dates of a date range
function readDate( date ) {
	var daysInMonth = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	var month = date >> 5;
	var day = date & 31;

	if ( month < 1 ) return "invalid";
	if ( month > 12 ) return "invalid";
	if ( day < 1 ) return "invalid";
	// 1904 is a leap year, which gives the correct max number of days for February
	// 1 is not subtracted so the month number is one more. Day = 0 goes back one day.
	if ( day > new Date(4, month, 0).getDate() ) return "invalid";

	return new Date(4, month-1, day).toLocaleString( "default", { month: "short", day: "numeric" } );
}

// Translate program ID to it's name
function pidname( pid ) {
	var pname = _( "Program" ) + " " + pid;

	if ( pid === 255 || pid === 99 ) {
		pname = _( "Manual program" );
	} else if ( pid === 254 || pid === 98 ) {
		pname = _( "Run-once program" );
	} else if ( checkOSVersion( 210 ) && pid <= controller.programs.pd.length ) {
		pname = controller.programs.pd[ pid - 1 ][ 5 ];
	}

	return pname;
}

// Check each program and change the background color to red if disabled
function updateProgramHeader() {
	$( "#programs_list" ).find( "[id^=program-]" ).each( function( a, b ) {
		var item = $( b ),
			heading = item.find( ".ui-collapsible-heading-toggle" ),
			en = checkOSVersion( 210 ) ? ( controller.programs.pd[ a ][ 0 ] ) & 0x01 : controller.programs.pd[ a ][ 0 ];

		if ( en ) {
			heading.removeClass( "red" );
		} else {
			heading.addClass( "red" );
		}
	} );
}

//Make the list of all programs
function makeAllPrograms() {
	if ( controller.programs.pd.length === 0 ) {
		return "<p class='center'>" + _( "You have no programs currently added. Tap the Add button on the top right corner to get started." ) + "</p>";
	}
	var list = "<p class='center'>" + _( "Click any program below to expand/edit. Be sure to save changes." ) + "</p><div data-role='collapsible-set'>",
		name;

	for ( var i = 0; i < controller.programs.pd.length; i++ ) {
		name = _( "Program" ) + " " + ( i + 1 );
		if ( checkOSVersion( 210 ) ) {
			name = controller.programs.pd[ i ][ 5 ];
		}
		list += "<fieldset id='program-" + i + "' data-role='collapsible'><h3><a " + ( i > 0 ? "" : "style='visibility:hidden' " ) +
				"class='hidden ui-btn ui-btn-icon-notext ui-icon-arrow-u ui-btn-corner-all move-up'></a><a class='ui-btn ui-btn-corner-all program-copy'>" +
			_( "copy" ) + "</a><span class='program-name'>" + name + "</span></h3>";
		list += "</fieldset>";
	}
	return list + "</div>";
}

function makeProgram( n, isCopy ) {
	if ( checkOSVersion( 210 ) ) {
		return makeProgram21( n, isCopy );
	} else {
		return makeProgram183( n, isCopy );
	}
}

function makeProgram183( n, isCopy ) {
	var week = [ _( "Monday" ), _( "Tuesday" ), _( "Wednesday" ), _( "Thursday" ), _( "Friday" ), _( "Saturday" ), _( "Sunday" ) ],
		list = "",
		id = isCopy ? "new" : n,
		days, i, j, setStations, program, page;

	if ( n === "new" ) {
		program = { "en":0, "weather":0, "is_interval":0, "is_even":0, "is_odd":0, "duration":0, "interval":0, "start":0, "end":0, "days":[ 0, 0 ] };
	} else {
		program = readProgram( controller.programs.pd[ n ] );
	}

	if ( typeof program.days === "string" ) {
		days = program.days.split( "" );
		for ( i = days.length; i--; ) {
			days[ i ] = days[ i ] | 0;
		}
	} else {
		days = [ 0, 0, 0, 0, 0, 0, 0 ];
	}
	if ( typeof program.stations !== "undefined" ) {
		setStations = program.stations.split( "" );
		for ( i = setStations.length - 1; i >= 0; i-- ) {
			setStations[ i ] = setStations[ i ] | 0;
		}
	}
	list += "<label for='en-" + id + "'><input data-mini='true' type='checkbox' " + ( ( program.en || n === "new" ) ? "checked='checked'" : "" ) + " name='en-" + id + "' id='en-" + id + "'>" + _( "Enabled" ) + "</label>";
	list += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>";
	list += "<input data-mini='true' type='radio' name='rad_days-" + id + "' id='days_week-" + id + "' " +
			"value='days_week-" + id + "' " + ( ( program.is_interval ) ? "" : "checked='checked'" ) + ">" +
		"<label for='days_week-" + id + "'>" + _( "Weekly" ) + "</label>";
	list += "<input data-mini='true' type='radio' name='rad_days-" + id + "' id='days_n-" + id + "' " +
			"value='days_n-" + id + "' " + ( ( program.is_interval ) ? "checked='checked'" : "" ) + ">" +
		"<label for='days_n-" + id + "'>" + _( "Interval" ) + "</label>";
	list += "</fieldset><div id='input_days_week-" + id + "' " + ( ( program.is_interval ) ? "style='display:none'" : "" ) + ">";

	list += "<div class='center'><p class='tight'>" + _( "Restrictions" ) + "</p>" +
		"<select data-inline='true' data-iconpos='left' data-mini='true' id='days_rst-" + id + "'>";
	list += "<option value='none' " + ( ( !program.is_even && !program.is_odd ) ? "selected='selected'" : "" ) + ">" + _( "None" ) + "</option>";
	list += "<option value='odd' " + ( ( !program.is_even && program.is_odd ) ? "selected='selected'" : "" ) + ">" + _( "Odd Days Only" ) + "</option>";
	list += "<option value='even' " + ( ( !program.is_odd && program.is_even ) ? "selected='selected'" : "" ) + ">" + _( "Even Days Only" ) + "</option>";
	list += "</select></div>";

	list += "<div class='center'><p class='tight'>" + _( "Days of the Week" ) + "</p>" +
		"<select " + ( $.mobile.window.width() > 560 ? "data-inline='true' " : "" ) + "data-iconpos='left' data-mini='true' " +
			"multiple='multiple' data-native-menu='false' id='d-" + id + "'><option>" + _( "Choose day(s)" ) + "</option>";

	for ( j = 0; j < week.length; j++ ) {
		list += "<option " + ( ( !program.is_interval && days[ j ] ) ? "selected='selected'" : "" ) + " value='" + j + "'>" + week[ j ] + "</option>";
	}
	list += "</select></div></div>";

	list += "<div " + ( ( program.is_interval ) ? "" : "style='display:none'" ) + " id='input_days_n-" + id + "' class='ui-grid-a'>";
	list += "<div class='ui-block-a'><label class='center' for='every-" + id + "'>" + _( "Interval (Days)" ) + "</label>" +
		"<input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='every-" + id + "' pattern='[0-9]*' id='every-" + id + "' " +
			"value='" + program.days[ 0 ] + "'></div>";
	list += "<div class='ui-block-b'><label class='center' for='starting-" + id + "'>" + _( "Starting In" ) + "</label>" +
		"<input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='starting-" + id + "' pattern='[0-9]*' " +
			"id='starting-" + id + "' value='" + program.days[ 1 ] + "'></div>";
	list += "</div>";

	list += "<fieldset data-role='controlgroup'><legend>" + _( "Stations:" ) + "</legend>";

	for ( j = 0; j < controller.stations.snames.length; j++ ) {
		list += "<label for='station_" + j + "-" + id + "'><input " +
			( isStationDisabled( j ) ? "data-wrapper-class='station-hidden hidden' " : "" ) +
			"data-mini='true' type='checkbox' " + ( ( ( typeof setStations !== "undefined" ) && setStations[ j ] ) ? "checked='checked'" : "" ) +
			" name='station_" + j + "-" + id + "' id='station_" + j + "-" + id + "'>" + controller.stations.snames[ j ] + "</label>";
	}

	list += "</fieldset>";
	list += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>";
	list += "<button class='ui-btn ui-mini' name='s_checkall-" + id + "' id='s_checkall-" + id + "'>" + _( "Check All" ) + "</button>";
	list += "<button class='ui-btn ui-mini' name='s_uncheckall-" + id + "' id='s_uncheckall-" + id + "'>" + _( "Uncheck All" ) + "</button>";
	list += "</fieldset>";

	list += "<div class='ui-grid-a'>";
	list += "<div class='ui-block-a'><label class='center' for='start-" + id + "'>" + _( "Start Time" ) + "</label>" +
		"<button class='timefield pad_buttons' data-mini='true' id='start-" + id + "' value='" + program.start + "'>" +
		minutesToTime( program.start ) + "</button></div>";
	list += "<div class='ui-block-b'><label class='center' for='end-" + id + "'>" + _( "End Time" ) + "</label>" +
		"<button class='timefield pad_buttons' data-mini='true' id='end-" + id + "' value='" + program.end + "'>" +
		minutesToTime( program.end ) + "</button></div>";
	list += "</div>";

	list += "<div class='ui-grid-a'>";
	list += "<div class='ui-block-a'><label class='pad_buttons center' for='duration-" + id + "'>" + _( "Station Duration" ) + "</label>" +
		"<button class='pad_buttons' data-mini='true' name='duration-" + id + "' id='duration-" + id + "' value='" + program.duration + "'>" +
		dhms2str( sec2dhms( program.duration ) ) + "</button></div>";
	list += "<div class='ui-block-b'><label class='pad_buttons center' for='interval-" + id + "'>" + _( "Program Interval" ) + "</label>" +
		"<button class='pad_buttons' data-mini='true' name='interval-" + id + "' id='interval-" + id + "' value='" + program.interval * 60 + "'>" +
		dhms2str( sec2dhms( program.interval * 60 ) ) + "</button></div>";
	list += "</div>";

	if ( isCopy === true || n === "new" ) {
		list += "<input data-mini='true' data-icon='check' type='submit' data-theme='b' name='submit-" + id + "' id='submit-" + id + "' " +
			"value='" + _( "Save New Program" ) + "'>";
	} else {
		list += "<button data-mini='true' data-icon='check' data-theme='b' name='submit-" + id + "' id='submit-" + id + "'>" +
			_( "Save Changes to Program" ) + " " + ( n + 1 ) + "</button>";
		list += "<button data-mini='true' data-icon='arrow-r' name='run-" + id + "' id='run-" + id + "'>" +
			_( "Run Program" ) + " " + ( n + 1 ) + "</button>";
		list += "<button data-mini='true' data-icon='delete' class='red bold' data-theme='b' name='delete-" + id + "' id='delete-" + id + "'>" +
			_( "Delete Program" ) + " " + ( n + 1 ) + "</button>";
	}

	page = $( list );

	page.find( "input[name^='rad_days']" ).on( "change", function() {
		var type = $( this ).val().split( "-" )[ 0 ],
			old;

		type = type.split( "_" )[ 1 ];
		if ( type === "n" ) {
			old = "week";
		} else {
			old = "n";
		}
		$( "#input_days_" + type + "-" + id ).show();
		$( "#input_days_" + old + "-" + id ).hide();
	} );

	page.find( "[id^='duration-'],[id^='interval-']" ).on( "click", function() {
		var dur = $( this ),
			isInterval = dur.attr( "id" ).match( "interval" ) ? 1 : 0,
			name = page.find( "label[for='" + dur.attr( "id" ) + "']" ).text();

		showDurationBox( {
			seconds: dur.val(),
			title: name,
			callback: function( result ) {
				dur.val( result );
				dur.text( dhms2str( sec2dhms( result ) ) );
			},
			maximum: isInterval ? 86340 : 65535,
			granularity: isInterval
		} );
	} );

	page.find( ".timefield" ).on( "click", function() {
		var time = $( this ),
			name = page.find( "label[for='" + time.attr( "id" ) + "']" ).text();

		showTimeInput( {
			minutes: time.val(),
			title: name,
			callback: function( result ) {
				time.val( result );
				time.text( minutesToTime( result ) );
			}
		} );
	} );

	page.find( "[id^='s_checkall-']" ).on( "click", function() {
		page.find( "[id^='station_'][id$='-" + id + "']" ).prop( "checked", true ).checkboxradio( "refresh" );
		return false;
	} );

	page.find( "[id^='s_uncheckall-']" ).on( "click", function() {
		page.find( "[id^='station_'][id$='-" + id + "']" ).prop( "checked", false ).checkboxradio( "refresh" );
		return false;
	} );

	fixInputClick( page );

	return page;
}

function makeProgram21( n, isCopy ) {
	var week = [ _( "Monday" ), _( "Tuesday" ), _( "Wednesday" ), _( "Thursday" ), _( "Friday" ), _( "Saturday" ), _( "Sunday" ) ],
		list = "",
		id = isCopy ? "new" : n,
		days, i, j, program, page, times, time, unchecked;

	if ( n === "new" ) {
		program = { "name":"", "en":0, "weather":0, "is_interval":0, "is_even":0, "is_odd":0, "interval":0, "start":0, "days":[ 0, 0 ], "repeat":0, "stations":[] };
	} else {
		program = readProgram( controller.programs.pd[ n ] );
	}

	if ( typeof program.days === "string" ) {
		days = program.days.split( "" );
		for ( i = days.length; i--; ) {
			days[ i ] = days[ i ] | 0;
		}
	} else {
		days = [ 0, 0, 0, 0, 0, 0, 0 ];
	}

	if ( typeof program.start === "object" ) {
		times = program.start;
	} else {
		times = [ program.start, -1, -1, -1 ];
	}

	// Group basic settings visually
	list += "<div style='margin-top:5px' class='ui-corner-all'>";
	list += "<div class='ui-bar ui-bar-a'><h3>" + _( "Basic Settings" ) + "</h3></div>";
	list += "<div class='ui-body ui-body-a center'>";

	// Progran name
	list += "<label for='name-" + id + "'>" + _( "Program Name" ) + "</label>" +
		"<input data-mini='true' type='text' name='name-" + id + "' id='name-" + id + "' maxlength='" + controller.programs.pnsize + "' " +
		"placeholder='" + _( "Program" ) + " " + ( controller.programs.pd.length + 1 ) + "' value='" + program.name + "'>";

	// Program enable/disable flag
	list += "<label for='en-" + id + "'><input data-mini='true' type='checkbox' " +
		( ( program.en || n === "new" ) ? "checked='checked'" : "" ) + " name='en-" + id + "' id='en-" + id + "'>" + _( "Enabled" ) + "</label>";

	// Program weather control flag
	list += "<label for='uwt-" + id + "'><input data-mini='true' type='checkbox' " +
		( ( program.weather ) ? "checked='checked'" : "" ) + " name='uwt-" + id + "' id='uwt-" + id + "'>" + _( "Use Weather Adjustment" ) + "</label>";

	// Show start time menu
	list += "<label class='center' for='start_1-" + id + "'>" + _( "Start Time" ) + "</label><button class='timefield' data-mini='true' id='start_1-" + id + "' value='" + times[ 0 ] + "'>" + readStartTime( times[ 0 ] ) + "</button>";

	// Close basic settings group
	list += "</div></div></div></div>";

	// Group all program type options visually
	list += "<div style='margin-top:10px' class='ui-corner-all'>";
	list += "<div class='ui-bar ui-bar-a'><h3>" + _( "Program Type" ) + "</h3></div>";
	list += "<div class='ui-body ui-body-a'>";

	// Controlgroup to handle program type (weekly/interval)
	list += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>";
	list += "<input data-mini='true' type='radio' name='rad_days-" + id + "' id='days_week-" + id + "' " +
		"value='days_week-" + id + "' " + ( ( program.is_interval ) ? "" : "checked='checked'" ) + ">" +
		"<label for='days_week-" + id + "'>" + _( "Weekly" ) + "</label>";
	list += "<input data-mini='true' type='radio' name='rad_days-" + id + "' id='days_n-" + id + "' " +
		"value='days_n-" + id + "' " + ( ( program.is_interval ) ? "checked='checked'" : "" ) + ">" +
		"<label for='days_n-" + id + "'>" + _( "Interval" ) + "</label>";
	list += "</fieldset>";

	// Show weekly program options
	list += "<div id='input_days_week-" + id + "' " + ( ( program.is_interval ) ? "style='display:none'" : "" ) + ">";
	list += "<div class='center'><p class='tight'>" + _( "Days of the Week" ) + "</p>" +
		"<select " + ( $.mobile.window.width() > 560 ? "data-inline='true' " : "" ) + "data-iconpos='left' data-mini='true' " +
			"multiple='multiple' data-native-menu='false' id='d-" + id + "'>" +
		"<option>" + _( "Choose day(s)" ) + "</option>";
	for ( j = 0; j < week.length; j++ ) {
		list += "<option " + ( ( !program.is_interval && days[ j ] ) ? "selected='selected'" : "" ) + " value='" + j + "'>" + week[ j ] + "</option>";
	}
	list += "</select></div></div>";

	// Show interval program options
	list += "<div " + ( ( program.is_interval ) ? "" : "style='display:none'" ) + " id='input_days_n-" + id + "' class='ui-grid-a'>";
	list += "<div class='ui-block-a'><label class='center' for='every-" + id + "'>" + _( "Interval (Days)" ) + "</label>" +
		"<input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='every-" + id + "' pattern='[0-9]*' " +
			"id='every-" + id + "' value='" + program.days[ 0 ] + "'></div>";
	list += "<div class='ui-block-b'><label class='center' for='starting-" + id + "'>" + _( "Starting In" ) + "</label>" +
		"<input data-wrapper-class='pad_buttons' data-mini='true' type='number' name='starting-" + id + "' pattern='[0-9]*' " +
			"id='starting-" + id + "' value='" + program.days[ 1 ] + "'></div>";
	list += "</div>";

	// Show restriction options
	list += "<div class='center'><p class='tight'>" + _( "Restrictions" ) + "</p><select data-inline='true' data-iconpos='left' data-mini='true' id='days_rst-" + id + "'>";
	list += "<option value='none' " + ( ( !program.is_even && !program.is_odd ) ? "selected='selected'" : "" ) + ">" + _( "None" ) + "</option>";
	list += "<option value='odd' " + ( ( !program.is_even && program.is_odd ) ? "selected='selected'" : "" ) + ">" + _( "Odd Days Only" ) + "</option>";
	list += "<option value='even' " + ( ( !program.is_odd && program.is_even ) ? "selected='selected'" : "" ) + ">" + _( "Even Days Only" ) + "</option>";
	list += "</select></div>";

	// Close program type group
	list += "</div></div>";


	if (program.has_daterange) {
		// Group all date range options visually
		list += "<div style='margin-top:10px' class='ui-corner-all'>";
		list += "<div class='ui-bar ui-bar-a'><h3>" + _( "Date Range" ) + "</h3></div>";
		list += "<div class='ui-body ui-body-a'>";

		list += "<label for='endr-" + id + "'><input data-mini='true' type='checkbox' " +
			( program.endr ? "checked='checked'" : "" ) + " name='endr-" + id + "' id='endr-" + id + "'>" + _( "Enabled" ) + "</label>";

		list += "<div " + ( program.endr ? "" : "style='display:none'" ) + " id='input_endr-" + id + "' class='ui-grid-a'>";
		list += "<div class='ui-block-a'><label class='pad_buttons center' for='fromdr-" + id + "'>" + _( "From" ) + "</label>" +
			"<button class='pad_buttons datefield' data-mini='true' name='interval-" + id + "' id='fromdr-" + id + "' " +
			"value='" + program.fromdr + "'>" + readDate(program.fromdr) + "</button></div>";
		list += "<div class='ui-block-b'><label class='pad_buttons center' for='todr-" + id + "'>" + _( "To" ) + "</label>" +
			"<button class='pad_buttons datefield' data-mini='true' name='repeat-" + id + "' id='todr-" + id + "' value='" + program.todr + "'>" +
			readDate(program.todr) + "</button></div>";
		list += "</div>";

		// Close date range group
		list += "</div></div>";
	}


	// Group all stations visually
	list += "<div style='margin-top:10px' class='ui-corner-all'>";
	list += "<div class='ui-bar ui-bar-a'><h3>" + _( "Stations" ) + "</h3></div>";
	list += "<div class='ui-body ui-body-a'>";

	var hideDisabled = $( "#programs" ).hasClass( "show-hidden" ) ? "" : "' style='display:none";

	// Show station duration inputs
	for ( j = 0; j < controller.stations.snames.length; j++ ) {
		if ( isStationMaster( j ) ) {
			list += "<div class='ui-field-contain duration-input" + ( isStationDisabled( j ) ? " station-hidden" + hideDisabled : "" ) + "'>" +
				"<label for='station_" + j + "-" + id + "'>" + controller.stations.snames[ j ] + ":</label>" +
				"<button disabled='true' data-mini='true' name='station_" + j + "-" + id + "' id='station_" + j + "-" + id + "' value='0'>" +
				_( "Master" ) + "</button></div>";
		} else {
			time = program.stations[ j ] || 0;
			list += "<div class='ui-field-contain duration-input" + ( isStationDisabled( j ) ? " station-hidden" + hideDisabled : "" ) + "'>" +
				"<label for='station_" + j + "-" + id + "'>" + controller.stations.snames[ j ] + ":</label>" +
				"<button " + ( time > 0 ? "class='green' " : "" ) + "data-mini='true' name='station_" + j + "-" + id + "' " +
					"id='station_" + j + "-" + id + "' value='" + time + "'>" + getDurationText( time ) + "</button></div>";
		}
	}

	// Close station group
	list += "</div></div>";

	// Group all start time options visually
	list += "<div style='margin-top:10px' class='ui-corner-all'>";
	list += "<div class='ui-bar ui-bar-a'><h3>" + _( "Additional Start Times" ) + "</h3></div>";
	list += "<div class='ui-body ui-body-a'>";

	// Controlgroup to handle start time type (repeating or set times)
	list += "<fieldset data-role='controlgroup' data-type='horizontal' class='center'>";
	list += "<input data-mini='true' type='radio' name='stype-" + id + "' id='stype_repeat-" + id + "' value='stype_repeat-" + id + "' " +
			( ( typeof program.start === "object" ) ? "" : "checked='checked'" ) + ">" +
		"<label for='stype_repeat-" + id + "'>" + _( "Repeating" ) + "</label>";
	list += "<input data-mini='true' type='radio' name='stype-" + id + "' id='stype_set-" + id + "' value='stype_set-" + id + "' " +
			( ( typeof program.start === "object" ) ? "checked='checked'" : "" ) + ">" +
		"<label for='stype_set-" + id + "'>" + _( "Fixed" ) + "</label>";
	list += "</fieldset>";

	// Show repeating start time options
	list += "<div " + ( ( typeof program.start === "object" ) ? "style='display:none'" : "" ) + " id='input_stype_repeat-" + id + "'>";
	list += "<div class='ui-grid-a'>";
	list += "<div class='ui-block-a'><label class='pad_buttons center' for='interval-" + id + "'>" + _( "Repeat Every" ) + "</label>" +
		"<button class='pad_buttons' data-mini='true' name='interval-" + id + "' id='interval-" + id + "' " +
			"value='" + program.interval * 60 + "'>" + dhms2str( sec2dhms( program.interval * 60 ) ) + "</button></div>";
	list += "<div class='ui-block-b'><label class='pad_buttons center' for='repeat-" + id + "'>" + _( "Repeat Count" ) + "</label>" +
		"<button class='pad_buttons' data-mini='true' name='repeat-" + id + "' id='repeat-" + id + "' value='" + program.repeat + "'>" +
			program.repeat + "</button></div>";
	list += "</div></div>";

	// Show set times options
	list += "<table style='width:100%;" + ( ( typeof program.start === "object" ) ? "" : "display:none" ) + "' id='input_stype_set-" + id + "'><tr><th class='center'>" + _( "Enable" ) + "</th><th>" + _( "Start Time" ) + "</th></tr>";
	for ( j = 1; j < 4; j++ ) {
		unchecked = ( times[ j ] === -1 );
		list += "<tr><td data-role='controlgroup' data-type='horizontal' class='use_master center'><label for='ust_" + ( j + 1 ) + "'><input id='ust_" + ( j + 1 ) + "' type='checkbox' " + ( unchecked ? "" : "checked='checked'" ) + "></label></td>";
		list += "<td><button class='timefield' data-mini='true' type='time' id='start_" + ( j + 1 ) + "-" + id + "' value='" + ( unchecked ? 0 : times[ j ] ) + "'>" + readStartTime( unchecked ? 0 : times[ j ] ) + "</button></td></tr>";
	}

	list += "</table>";

	// Close start time type group
	list += "</div></div>";

	// Show save, run and delete buttons
	if ( isCopy === true || n === "new" ) {
		list += "<button data-mini='true' data-icon='check' data-theme='b' id='submit-" + id + "'>" + _( "Save New Program" ) + "</button>";
	} else {
		list += "<button data-mini='true' data-icon='check' data-theme='b' id='submit-" + id + "'>" + _( "Save Changes to" ) + " <span class='program-name'>" + program.name + "</span></button>";
		list += "<button data-mini='true' data-icon='arrow-r' id='run-" + id + "'>" + _( "Run" ) + " <span class='program-name'>" + program.name + "</span></button>";
		list += "<button data-mini='true' data-icon='delete' class='bold red' data-theme='b' id='delete-" + id + "'>" + _( "Delete" ) + " <span class='program-name'>" + program.name + "</span></button>";
	}

	// Take HTML string and convert to jQuery object
	page = $( list );

	// When controlgroup buttons are toggled change relevant options
	page.find( "input[name^='rad_days'],input[name^='stype']" ).on( "change", function() {
		var input = $( this ).val().split( "-" )[ 0 ].split( "_" );

		$( "[id^='input_" + input[ 0 ] + "_']" ).hide();
		$( "#input_" + input[ 0 ] + "_" + input[ 1 ] + "-" + id ).show();
	} );

	// Toggle date range option when enable is toggled
	page.find( "[id^='endr-']" ).on( "change", function() {
		$( "#input_endr-" + id ).toggle( $( this ).is( ":checked" ) );
	});

	page.find( ".datefield" ).on( "click", function() {
		var date = $( this ),
		    name = page.find( "label[for='" + date.attr( "id" ) + "']" ).text();;

		showDateInput( {
			month: date.val() >> 5,
			day: date.val() & 31,
			title: name,
			callback: function( result ) {
				var datenum = ( result[0] << 5 ) + result[1];
				date.val( datenum );
				date.text( readDate( datenum ) );
			}
		} );
	} );

	// Handle interval duration input
	page.find( "[id^='interval-']" ).on( "click", function() {
		var dur = $( this ),
			name = page.find( "label[for='" + dur.attr( "id" ) + "']" ).text();

		showDurationBox( {
			seconds: dur.val(),
			title: name,
			callback: function( result ) {
				dur.val( result );
				dur.text( dhms2str( sec2dhms( result ) ) );
			},
			maximum: 86340,
			granularity: 1,
			preventCompression: true
		} );
	} );

	page.find( ".timefield" ).on( "click", function() {
		var time = $( this );

		showTimeInput( {
			minutes: time.val(),
			title: _( "Start Time" ),
			showSun: checkOSVersion( 213 ) ? true : false,
			callback: function( result ) {
				time.val( result );
				time.text( readStartTime( result ) );
			}
		} );
	} );

	// Handle repeat count button
	page.find( "[id^='repeat-']" ).on( "click", function() {
		var dur = $( this ),
			name = page.find( "label[for='" + dur.attr( "id" ) + "']" ).text();

		showSingleDurationInput( {
			data: dur.val(),
			title: name,
			label: _( "Repeat Count" ),
			callback: function( result ) {
				dur.val( result ).text( result );
			},
			maximum: 1440
		} );
	} );

	// Handle all station duration inputs
	page.find( "[id^=station_]" ).on( "click", function() {
		var dur = $( this ),
			name = controller.stations.snames[ dur.attr( "id" ).split( "_" )[ 1 ].split( "-" )[ 0 ] ];

		showDurationBox( {
			seconds: dur.val(),
			title: name,
			callback: function( result ) {
				dur.val( result ).addClass( "green" );
				dur.text( getDurationText( result ) );

				if ( result === 0 ) {
					dur.removeClass( "green" );
				}
			},
			maximum: 65535,
			showSun: checkOSVersion( 214 ) ? true : false
		} );
	} );

	fixInputClick( page );

	return page;
}

function addProgram( copyID ) {
	copyID = ( copyID >= 0 ) ? copyID : "new";

	var page = $( "<div data-role='page' id='addprogram'>" +
				"<div class='ui-content' role='main' id='newprogram'>" +
					"<fieldset id='program-new'>" +
					"</fieldset>" +
				"</div>" +
			"</div>" ),
		submit = function() {
			submitProgram( "new" );
			return false;
		},
		header = changeHeader( {
			title: _( "Add Program" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: checkChangesBeforeBack
			},
			rightBtn: {
				icon: "check",
				text: _( "Submit" ),
				on: submit
			}
		} );

	page.find( "#program-new" ).html( makeProgram( copyID, true ) ).one( "change input", function() {
		header.eq( 2 ).prop( "disabled", false ).addClass( "hasChanges" );
	} );

	page.find( "[id^='submit-']" ).on( "click", function() {
		submitProgram( "new" );
		return false;
	} );

	page.one( "pagehide", function() {
		page.remove();
	} );

	if ( typeof copyID === "string" ) {
		header.eq( 2 ).prop( "disabled", true );
	}

	$( "#addprogram" ).remove();
	$.mobile.pageContainer.append( page );
}

function deleteProgram( id ) {
	var program = pidname( parseInt( id ) + 1 );

	areYouSure( _( "Are you sure you want to delete program" ) + " " + program + "?", "", function() {
		$.mobile.loading( "show" );
		sendToOS( "/dp?pw=&pid=" + id ).done( function() {
			$.mobile.loading( "hide" );
			updateControllerPrograms( function() {
				$( "#programs" ).trigger( "programrefresh" );
				showerror( _( "Program" ) + " " + program + " " + _( "deleted" ) );
			} );
		} );
	} );
}

function submitProgram( id ) {
	$( "#program-" + id ).find( ".hasChanges" ).removeClass( "hasChanges" );

	if ( checkOSVersion( 210 ) ) {
		submitProgram21( id );
	} else {
		submitProgram183( id );
	}
}

function submitProgram183( id ) {
	var program = [],
		days = [ 0, 0 ],
		stationSelected = 0,
		en = ( $( "#en-" + id ).is( ":checked" ) ) ? 1 : 0,
		daysin, i, s;

	program[ 0 ] = en;

	if ( $( "#days_week-" + id ).is( ":checked" ) ) {
		daysin = $( "#d-" + id ).val();
		daysin = ( daysin === null ) ? [] : parseIntArray( daysin );
		for ( i = 0; i < 7; i++ ) {if ( $.inArray( i, daysin ) !== -1 ) {days[ 0 ] |= ( 1 << i ); }}
		if ( days[ 0 ] === 0 ) {
			showerror( _( "Error: You have not selected any days of the week." ) );
			return;
		}
		if ( $( "#days_rst-" + id ).val() === "odd" ) {
			days[ 0 ] |= 0x80; days[ 1 ] = 1;
		} else if ( $( "#days_rst-" + id ).val() === "even" ) {
			days[ 0 ] |= 0x80; days[ 1 ] = 0;
		}
	} else if ( $( "#days_n-" + id ).is( ":checked" ) ) {
		days[ 1 ] = parseInt( $( "#every-" + id ).val(), 10 );
		if ( !( days[ 1 ] >= 2 && days[ 1 ] <= 128 ) ) {showerror( _( "Error: Interval days must be between 2 and 128." ) );return;}
		days[ 0 ] = parseInt( $( "#starting-" + id ).val(), 10 );
		if ( !( days[ 0 ] >= 0 && days[ 0 ] < days[ 1 ] ) ) {showerror( _( "Error: Starting in days wrong." ) );return;}
		days[ 0 ] |= 0x80;
	}
	program[ 1 ] = days[ 0 ];
	program[ 2 ] = days[ 1 ];

	program[ 3 ] = parseInt( $( "#start-" + id ).val() );
	program[ 4 ] = parseInt( $( "#end-" + id ).val() );

	if ( program[ 3 ] > program[ 4 ] ) {showerror( _( "Error: Start time must be prior to end time." ) );return;}

	program[ 5 ] = parseInt( $( "#interval-" + id ).val() / 60 );

	var sel = $( "[id^=station_][id$=-" + id + "]" ),
		total = sel.length,
		nboards = total / 8;

	program[ 6 ] = parseInt( $( "#duration-" + id ).val() );
	var stations = [ 0 ], bid, sid;
	for ( bid = 0; bid < nboards; bid++ ) {
		stations[ bid ] = 0;
		for ( s = 0; s < 8; s++ ) {
			sid = bid * 8 + s;
			if ( $( "#station_" + sid + "-" + id ).is( ":checked" ) ) {
				stations[ bid ] |= 1 << s; stationSelected = 1;
			}
		}
	}
	program = JSON.stringify( program.concat( stations ) );

	if ( stationSelected === 0 ) {showerror( _( "Error: You have not selected any stations." ) );return;}
	$.mobile.loading( "show" );
	if ( id === "new" ) {
		sendToOS( "/cp?pw=&pid=-1&v=" + program ).done( function() {
			$.mobile.loading( "hide" );
			updateControllerPrograms( function() {
				$.mobile.document.one( "pageshow", function() {
					showerror( _( "Program added successfully" ) );
				} );
				goBack();
			} );
		} );
	} else {
		sendToOS( "/cp?pw=&pid=" + id + "&v=" + program ).done( function() {
			$.mobile.loading( "hide" );
			updateControllerPrograms( function() {
				updateProgramHeader();
			} );
			showerror( _( "Program has been updated" ) );
		} );
	}
}

function submitProgram21( id, ignoreWarning ) {
	var program = [],
		days = [ 0, 0 ],
		start = [ 0, 0, 0, 0 ],
		stationSelected = 0,
		en = ( $( "#en-" + id ).is( ":checked" ) ) ? 1 : 0,
		weather = ( $( "#uwt-" + id ).is( ":checked" ) ) ? 1 : 0,
		j = 0,
		daysin, i, name, url;

	// Set enable/disable bit for program
	j |= ( en << 0 );

	// Set use weather flag
	j |= ( weather << 1 );

	// Set restriction flag
	if ( $( "#days_rst-" + id ).val() === "odd" ) {
		j |= ( 1 << 2 );
	} else if ( $( "#days_rst-" + id ).val() === "even" ) {
		j |= ( 2 << 2 );
	}

	// Set program type
	if ( $( "#days_n-" + id ).is( ":checked" ) ) {
		j |= ( 3 << 4 );
		days[ 1 ] = parseInt( $( "#every-" + id ).val(), 10 );

		if ( !( days[ 1 ] >= 2 && days[ 1 ] <= 128 ) ) {
			showerror( _( "Error: Interval days must be between 2 and 128." ) );
			return;
		}

		days[ 0 ] = parseInt( $( "#starting-" + id ).val(), 10 );

		if ( !( days[ 0 ] >= 0 && days[ 0 ] < days[ 1 ] ) ) {
			showerror( _( "Error: Starting in days wrong." ) );
			return;
		}

	} else if ( $( "#days_week-" + id ).is( ":checked" ) ) {
		j |= ( 0 << 4 );
		daysin = $( "#d-" + id ).val();
		daysin = ( daysin === null ) ? [] : parseIntArray( daysin );
		for ( i = 0; i < 7; i++ ) {
			if ( $.inArray( i, daysin ) !== -1 ) {
				days[ 0 ] |= ( 1 << i );
			}
		}
		if ( days[ 0 ] === 0 ) {
			showerror( _( "Error: You have not selected any days of the week." ) );
			return;
		}
	}

	// Set program start time type
	if ( $( "#stype_repeat-" + id ).is( ":checked" ) ) {
		j |= ( 0 << 6 );

		start[ 0 ] = parseInt( $( "#start_1-" + id ).val() );
		start[ 1 ] = parseInt( $( "#repeat-" + id ).val() );
		start[ 2 ] = parseInt( $( "#interval-" + id ).val() / 60 );
	} else if ( $( "#stype_set-" + id ).is( ":checked" ) ) {
		j |= ( 1 << 6 );
		var times = $( "[id^='start_'][id$='-" + id + "']" );

		times.each( function( a, b ) {
			var time = parseInt( b.value );

			if ( typeof time !== "number" || ( a > 0 && !$( "#ust_" + ( a + 1 ) ).is( ":checked" ) ) ) {
				time = -1;
			}

			start[ a ] = time;
		} );
	}

	var enableDateRange = $( "#endr-"+id ).is( ":checked" ) ? 1 : 0;
	j |= ( enableDateRange << 7 );

	var sel = $( "[id^=station_][id$=-" + id + "]" ),
		runTimes = [];

	sel.each( function() {
		var dur = parseInt( this.value );
		if ( parseInt( dur ) > 0 ) {
			stationSelected = 1;
		}
		runTimes.push( dur );
	} );

	program[ 0 ] = j;
	program[ 1 ] = days[ 0 ];
	program[ 2 ] = days[ 1 ];
	program[ 3 ] = start;
	program[ 4 ] = runTimes;

	name = $( "#name-" + id ).val();
	url = "&v=" + JSON.stringify( program ) + "&name=" + encodeURIComponent( name );

	if ( enableDateRange ) {
		url += "&from=" + $( "#fromdr-"+id ).val();
		url += "&to=" + $( "#todr-"+id ).val();
	}

	if ( stationSelected === 0 ) {
		showerror( _( "Error: You have not selected any stations." ) );
		return;
	}

	if ( !ignoreWarning && $( "#stype_repeat-" + id ).is( ":checked" ) && start[ 1 ] > 0 && calculateTotalRunningTime( runTimes ) > start[ 2 ] * 60 ) {
		areYouSure( _( "Warning: The repeat interval is less than the program run time." ), _( "Do you want to continue?" ), function() {
			submitProgram21( id, true );
		} );

		return;
	}

	// If the interval is an even number and a restriction is set, notify user of possible conflict
	if ( !ignoreWarning && ( ( j >> 4 ) & 0x03 ) === 3 && !( days[ 1 ] & 1 ) && ( ( j >> 2 ) & 0x03 ) > 0 ) {
		areYouSure( _( "Warning: The use of odd/even restrictions with the selected interval day may result in the program not running at all." ), _( "Do you want to continue?" ), function() {
			submitProgram21( id, true );
		} );
		return;
	}

	$.mobile.loading( "show" );
	if ( id === "new" ) {
		sendToOS( "/cp?pw=&pid=-1" + url ).done( function() {
			$.mobile.loading( "hide" );
			updateControllerPrograms( function() {
				$.mobile.document.one( "pageshow", function() {
					showerror( _( "Program added successfully" ) );
				} );
				goBack();
			} );
		} );
	} else {
		sendToOS( "/cp?pw=&pid=" + id + url ).done( function() {
			$.mobile.loading( "hide" );
			updateControllerPrograms( function() {
				updateProgramHeader();
				$( "#program-" + id ).find( ".program-name" ).text( name );
			} );
			showerror( _( "Program has been updated" ) );
		} );
	}
}

function raindelay( delay ) {
	$.mobile.loading( "show" );
	sendToOS( "/cv?pw=&rd=" + ( delay / 3600 ) ).done( function() {
		$.mobile.loading( "hide" );
		showLoading( "#footer-running" );
		refreshStatus( updateWeather );
		showerror( _( "Rain delay has been successfully set" ) );
	} );
	return false;
}

// Export and Import functions
function getExportMethod() {
	var popup = $(
		"<div data-role='popup' data-theme='a'>" +
			"<div class='ui-bar ui-bar-a'>" + _( "Select Export Method" ) + "</div>" +
			"<div data-role='controlgroup' class='tight'>" +
				"<a class='ui-btn hidden fileMethod'>" + _( "File" ) + "</a>" +
				"<a class='ui-btn pasteMethod'>" + _( "Email" ) + "</a>" +
				"<a class='ui-btn localMethod'>" + _( "Internal (within app)" ) + "</a>" +
			"</div>" +
		"</div>" ),
		obj = encodeURIComponent( JSON.stringify( controller ) ),
		subject = "OpenSprinkler Data Export on " + dateToString( new Date() );

	if ( isFileCapable ) {
		popup.find( ".fileMethod" ).removeClass( "hidden" ).attr( {
			href: "data:text/json;charset=utf-8," + obj,
			download: "backup-" + new Date().toLocaleDateString().replace( /\//g, "-" ) + ".json"
		} ).on( "click", function() {
			popup.popup( "close" );
		} );
	}

	var href = "mailto:?subject=" + encodeURIComponent( subject ) + "&body=" + obj;
	popup.find( ".pasteMethod" ).attr( "href", href ).on( "click", function() {
		window.open( href, isOSXApp ? "_system" : undefined );
		popup.popup( "close" );
	} );

	popup.find( ".localMethod" ).on( "click", function() {
		popup.popup( "close" );
		storage.set( { "backup":JSON.stringify( controller ) }, function() {
			showerror( _( "Backup saved on this device" ) );
		} );
	} );

	openPopup( popup, { positionTo: $( "#sprinklers-settings" ).find( ".export_config" ) } );
}

function getImportMethod( localData ) {
	var getPaste = function() {
			var popup = $(
					"<div data-role='popup' data-theme='a' id='paste_config'>" +
						"<p class='ui-bar'>" +
							"<textarea class='textarea' rows='10' placeholder='" + _( "Paste your backup here" ) + "'></textarea>" +
							"<button data-mini='true' data-theme='b'>" + _( "Import" ) + "</button>" +
						"</p>" +
					"</div>"
				),
				width = $.mobile.window.width();

			popup.find( "button" ).on( "click", function() {
				var data = popup.find( "textarea" ).val();

				if ( data === "" ) {
					return;
				}

				try {
					data = JSON.parse( $.trim( data ).replace( /“|”|″/g, "\"" ) );
					popup.popup( "close" );
					importConfig( data );
				}catch ( err ) {
					popup.find( "textarea" ).val( "" );
					showerror( _( "Unable to read the configuration file. Please check the file and try again." ) );
				}
			} );

			popup.css( "width", ( width > 600 ? width * 0.4 + "px" : "100%" ) );
			openPopup( popup );
			return false;
		},
		popup = $(
			"<div data-role='popup' data-theme='a'>" +
				"<div class='ui-bar ui-bar-a'>" + _( "Select Import Method" ) + "</div>" +
				"<div data-role='controlgroup' class='tight'>" +
					"<button class='hidden fileMethod'>" + _( "File" ) + "</button>" +
					"<button class='pasteMethod'>" + _( "Email (copy/paste)" ) + "</button>" +
					"<button class='hidden localMethod'>" + _( "Internal (within app)" ) + "</button>" +
				"</div>" +
			"</div>" );

	if ( isFileCapable ) {
		popup.find( ".fileMethod" ).removeClass( "hidden" ).on( "click", function() {
			popup.popup( "close" );
			var input = $( "<input type='file' id='configInput' data-role='none' style='visibility:hidden;position:absolute;top:-50px;left:-50px'/>" )
				.on( "change", function() {
					var config = this.files[ 0 ],
						reader = new FileReader();

					if ( typeof config !== "object" ) {
						return;
					}

					reader.onload = function( e ) {
						try {
							var obj = JSON.parse( $.trim( e.target.result ) );
							importConfig( obj );
						}catch ( err ) {
							showerror( _( "Unable to read the configuration file. Please check the file and try again." ) );
						}
					};

					reader.readAsText( config );
				} );

			input.appendTo( "#sprinklers-settings" );
			input.click();
			return false;
		} );
	} else {

		// Handle local storage being unavailable and present paste dialog immediately
		if ( !localData ) {
			getPaste();
			return;
		}
	}

	popup.find( ".pasteMethod" ).on( "click", function() {
		popup.popup( "close" );
		getPaste();
		return false;
	} );

	if ( localData ) {
		popup.find( ".localMethod" ).removeClass( "hidden" ).on( "click", function() {
			popup.popup( "close" );
			importConfig( JSON.parse( localData ) );
			return false;
		} );
	}

	openPopup( popup, { positionTo: $( "#sprinklers-settings" ).find( ".import_config" ) } );
}

function importConfig( data ) {
	var warning = "";

	if ( typeof data !== "object" || !data.settings ) {
		showerror( _( "Invalid configuration" ) );
		return;
	}

	if ( checkOSVersion( 210 ) && typeof data.options === "object" &&
		( data.options.hp0 !== controller.options.hp0 || data.options.hp1 !== controller.options.hp1 ) ||
		( data.options.dhcp !== controller.options.dhcp ) || ( data.options.devid !== controller.options.devid ) ) {

		warning = _( "Warning: Network changes will be made and the device may no longer be accessible from this address." );
	}

	areYouSure( _( "Are you sure you want to restore the configuration?" ), warning, function() {
		$.mobile.loading( "show" );

		var cs = "/cs?pw=",
			co = "/co?pw=",
			cpStart = "/cp?pw=",
			isPi = isOSPi(),
			i, key, option, station;

		var findKey = function( index ) { return keyIndex[ index ] === key; };

		for ( i in data.options ) {
			if ( data.options.hasOwnProperty( i ) && keyIndex.hasOwnProperty( i ) ) {
				key = keyIndex[ i ];
				if ( $.inArray( key, [ 2, 14, 16, 21, 22, 25, 36 ] ) !== -1 && data.options[ i ] === 0 ) {
					continue;
				}
				if ( key === 3 ) {
					if ( checkOSVersion( 210 ) && controller.options.dhcp === 1 ) {
						co += "&o3=1";
					}
					continue;
				}
				if ( isPi ) {
					key = Object.keys( keyIndex ).find( findKey );
					if ( key === undefined ) {
						continue;
					}
				}
				if ( checkOSVersion( 208 ) === true && typeof data.options[ i ] === "string" ) {
					option = data.options[ i ].replace( /\s/g, "_" );
				} else {
					option = data.options[ i ];
				}
				co += "&o" + key + "=" + option;
			}
		}

		// Handle import from versions prior to 2.1.1 for enable logging flag
		if ( !isPi && typeof data.options.fwv === "number" && data.options.fwv < 211 && checkOSVersion( 211 ) ) {

			// Enables logging since prior firmwares always had logging enabled
			co += "&o36=1";
		}

		// Import Weather Adjustment Options, if available
		if ( typeof data.settings.wto === "object" && checkOSVersion( 215 ) ) {
			co += "&wto=" + escapeJSON( data.settings.wto );
		}

		// Import IFTTT Key, if available
		if ( typeof data.settings.ifkey === "string" && checkOSVersion( 217 ) ) {
			co += "&ifkey=" + data.settings.ifkey;
		}

		// Import mqtt options, if available
		if ( typeof data.settings.mqtt === "object" && checkOSVersion( 2191 ) ) {
			co += "&mqtt=" + escapeJSON( data.settings.mqtt );
			}

		co += "&" + ( isPi ? "o" : "" ) + "loc=" + data.settings.loc;

		for ( i = 0; i < data.stations.snames.length; i++ ) {
			if ( checkOSVersion( 208 ) === true ) {
				station = data.stations.snames[ i ].replace( /\s/g, "_" );
			} else {
				station = data.stations.snames[ i ];
			}
			cs += "&s" + i + "=" + encodeURIComponent( station );
		}

		for ( i = 0; i < data.stations.masop.length; i++ ) {
			cs += "&m" + i + "=" + data.stations.masop[ i ];
		}

		if ( typeof data.stations.masop2 === "object" ) {
			for ( i = 0; i < data.stations.masop2.length; i++ ) {
				cs += "&n" + i + "=" + data.stations.masop2[ i ];
			}
		}

		if ( typeof data.stations.ignore_rain === "object" ) {
			for ( i = 0; i < data.stations.ignore_rain.length; i++ ) {
				cs += "&i" + i + "=" + data.stations.ignore_rain[ i ];
			}
		}

		if ( typeof data.stations.ignore_sn1 === "object" ) {
			for ( i = 0; i < data.stations.ignore_sn1.length; i++ ) {
				cs += "&j" + i + "=" + data.stations.ignore_sn1[ i ];
			}
		}

		if ( typeof data.stations.ignore_sn2 === "object" ) {
			for ( i = 0; i < data.stations.ignore_sn2.length; i++ ) {
				cs += "&k" + i + "=" + data.stations.ignore_sn2[ i ];
			}
		}

		if ( typeof data.stations.stn_dis === "object" ) {
			for ( i = 0; i < data.stations.stn_dis.length; i++ ) {
				cs += "&d" + i + "=" + data.stations.stn_dis[ i ];
			}
		}

		if ( typeof data.stations.stn_spe === "object" ) {
			for ( i = 0; i < data.stations.stn_spe.length; i++ ) {
				cs += "&p" + i + "=" + data.stations.stn_spe[ i ];
			}
		}

		if ( typeof data.stations.stn_seq === "object" ) {
			for ( i = 0; i < data.stations.stn_seq.length; i++ ) {
				cs += "&q" + i + "=" + data.stations.stn_seq[ i ];
			}
		} else if ( !isPi && typeof data.options.fwv === "number" && data.options.fwv < 211 && !checkOSVersion( 211 ) ) {
			var bid;
			for ( bid = 0; bid < data.settings.nbrd; bid++ ) {
				cs += "&q" + bid + "=" + ( data.options.seq === 1 ? 255 : 0 );
			}
		}

		if ( typeof data.stations.act_relay === "object" ) {
			for ( i = 0; i < data.stations.act_relay.length; i++ ) {
				cs += "&a" + i + "=" + data.stations.act_relay[ i ];
			}
		}

		// Normalize station special data object
		data.special = data.special || {};

		$.when(
			sendToOS( transformKeysinString( co ) ),
			sendToOS( cs ),
			sendToOS( "/dp?pw=&pid=-1" ),
			$.each( data.programs.pd, function( i, prog ) {
				var name = "";

				// Handle data from firmware 2.1+ being imported to OSPi
				if ( isPi && typeof data.options.fwv === "number" && data.options.fwv >= 210 ) {
					showerror( _( "Program data is newer than the device firmware and cannot be imported" ) );
					return false;
				}

				// Handle data from firmware 2.1+ being imported to a firmware prior to 2.1
				if ( !isPi && typeof data.options.fwv === "number" && data.options.fwv >= 210 && !checkOSVersion( 210 ) ) {
					showerror( _( "Program data is newer than the device firmware and cannot be imported" ) );
					return false;
				}

				// Handle data from firmware 2.1+ being imported to a 2.1+ device
				// The firmware does not accept program name inside the program array and must be submitted seperately
				if ( !isPi && typeof data.options.fwv === "number" && data.options.fwv >= 210 && checkOSVersion( 210 ) ) {
					name = "&name=" + prog[ 5 ];

					// Truncate the program name off the array
					prog = prog.slice( 0, 5 );
				}

				// Handle data from firmware prior to 2.1 being imported to a 2.1+ device
				if ( !isPi && typeof data.options.fwv === "number" && data.options.fwv < 210 && checkOSVersion( 210 ) ) {
					var program = readProgram183( prog ),
						total = ( prog.length - 7 ),
						allDur = [],
						j = 0,
						bits, n, s;

					// Set enable/disable bit for program
					j |= ( program.en << 0 );

					// Set program restrictions
					if ( program.is_even ) {
						j |= ( 2 << 2 );
					} else if ( program.is_odd ) {
						j |= ( 1 << 2 );
					} else {
						j |= ( 0 << 2 );
					}

					// Set program type
					if ( program.is_interval ) {
						j |= ( 3 << 4 );
					} else {
						j |= ( 0 << 4 );
					}

					// Set start time type (repeating)
					j |= ( 0 << 6 );

					// Save bits to program data
					prog[ 0 ] = j;

					// Using the total number of stations, migrate the duration into each station
					for ( n = 0; n < total; n++ ) {
						bits = prog[ 7 + n ];
						for ( s = 0; s < 8; s++ ) {
							allDur.push( ( bits & ( 1 << s ) ) ? program.duration : 0 );
						}
					}

					// Set the start time, interval time, and repeat count
					prog[ 3 ] = [ program.start, parseInt( ( program.end - program.start ) / program.interval ), program.interval, 0 ];

					// Change the duration from the previous int to the new array
					prog[ 4 ] = allDur;

					// Truncate the station enable/disable flags
					prog = prog.slice( 0, 5 );

					name = "&name=" + _( "Program" ) + " " + ( i + 1 );
				}

				sendToOS( cpStart + "&pid=-1&v=" + JSON.stringify( prog ) + name );
			} ),
			$.each( data.special, function( sid, info ) {
				if ( checkOSVersion( 216 ) ) {
					sendToOS( "/cs?pw=&sid=" + sid + "&st=" + info.st + "&sd=" + encodeURIComponent( info.sd ) );
				}
			} )
		).then(
			function() {
				setTimeout( function() {
					updateController(
						function() {
							$.mobile.loading( "hide" );
							showerror( _( "Backup restored to your device" ) );
							updateWeather();
							goHome( true );
						},
						function() {
							$.mobile.loading( "hide" );
							networkFail();
						}
					);
				}, 1500 );
			},
			function() {
				$.mobile.loading( "hide" );
				showerror( _( "Unable to import configuration." ) );
			}
		);
	} );
}

// About page
var showAbout = ( function() {

	var page = $( "<div data-role='page' id='about'>" +
			"<div class='ui-content' role='main'>" +
				"<ul data-role='listview' data-inset='true'>" +
					"<li>" +
						"<p>" + _( "User manual for OpenSprinkler is available at" ) +
							" <a class='iab' target='_blank' href='https://openthings.freshdesk.com/support/solutions/folders/5000147083'>" +
								"https://support.openthings.io" +
							"</a>" +
						"</p>" +
					"</li>" +
				"</ul>" +
				"<ul data-role='listview' data-inset='true'>" +
					"<li>" +
						"<p>" + _( "This is open source software: source code and changelog for this application can be found at" ) + " " +
							"<a class='iab squeeze' target='_blank' href='https://github.com/OpenSprinkler/OpenSprinkler-App/'>" +
								"https://github.com/OpenSprinkler/OpenSprinkler-App/" +
							"</a>" +
						"</p>" +
						"<p>" + _( "Language localization is crowdsourced using Transifex available at" ) + " " +
							"<a class='iab squeeze' target='_blank' href='https://www.transifex.com/albahra/opensprinkler/'>" +
								"https://www.transifex.com/albahra/opensprinkler/" +
							"</a>" +
						"</p>" +
						"<p>" + _( "Open source attributions" ) + ": " +
							"<a class='iab iabNoScale squeeze' target='_blank' " +
								"href='https://github.com/OpenSprinkler/OpenSprinkler-App/wiki/List-of-Integrated-Libraries'>" +
									"https://github.com/OpenSprinkler/OpenSprinkler-App/wiki/List-of-Integrated-Libraries" +
							"</a>" +
						"</p>" +
					"</li>" +
				"</ul>" +
				"<p class='smaller'>" +
					_( "App Version" ) + ": 2.2.5" +
					"<br>" + _( "Firmware" ) + ": <span class='firmware'></span>" +
					"<br><span class='hardwareLabel'>" + _( "Hardware Version" ) + ":</span> <span class='hardware'></span>" +
				"</p>" +
			"</div>" +
		"</div>" ),
		showHardware;

	function begin() {
		showHardware = typeof controller.options.hwv !== "undefined" ? false : true;
		page.find( ".hardware" ).toggleClass( "hidden", showHardware ).text( getHWVersion() + getHWType() );
		page.find( ".hardwareLabel" ).toggleClass( "hidden", showHardware );

		page.find( ".firmware" ).text( getOSVersion() + getOSMinorVersion() );

		page.one( "pagehide", function() {
			page.detach();
		} );

		changeHeader( {
			title: _( "About" ),
			leftBtn: {
				icon: "carat-l",
				text: _( "Back" ),
				class: "ui-toolbar-back-btn",
				on: goBack
			}
		} );

		$( "#about" ).remove();
		$.mobile.pageContainer.append( page );
	}

	return begin;
} )();

// OpenSprinkler controller methods
function isRunning() {
	for ( var i = 0; i < controller.status.length; i++ ) {
		if ( controller.status[ i ] > 0 && controller.settings.ps[ i ][ 0 ] > 0 ) {
			return i;
		}
	}

	return -1;
}

function stopStations( callback ) {
	$.mobile.loading( "show" );

	// It can take up to a second before stations actually stop
	sendToOS( "/cv?pw=&rsn=1" ).done( function() {
		setTimeout( function() {
			$.mobile.loading( "hide" );
			callback();
		}, 1000 );
	} );
}

function flowCountToVolume( count ) {
	return parseFloat( ( count * ( ( controller.options.fpr1 << 8 ) + controller.options.fpr0 ) / 100 ).toFixed( 2 ) );
}

// OpenSprinkler feature detection functions
function isOSPi() {
	if ( controller &&
		typeof controller.options === "object" &&
		typeof controller.options.fwv === "string" &&
		controller.options.fwv.search( /ospi/i ) !== -1 ) {

		return true;
	}
	return false;
}

// Check if password is valid
function checkPW( pass, callback ) {
	$.ajax( {
		url: currPrefix + currIp + "/sp?pw=" + encodeURIComponent( pass ) + "&npw=" + encodeURIComponent( pass ) + "&cpw=" + encodeURIComponent( pass ),
		cache: false,
		crossDomain: true,
		type: "GET"
	} ).then(
		function( data ) {
			var result = data.result;

			if ( typeof result === "undefined" || result > 1 ) {
				callback( false );
			} else {
				callback( true );
			}
		},
		function() {
			callback( false );
		}
	);
}

// Device password management functions
function changePassword( opt ) {
	var defaults = {
			fixIncorrect: false,
			name: "",
			callback: function() {},
			cancel: function() {}
		};

	opt = $.extend( {}, defaults, opt );

	var isPi = isOSPi(),
		didSubmit = false,
		popup = $( "<div data-role='popup' class='modal' id='changePassword' data-theme='a' data-overlay-theme='b'>" +
				"<ul data-role='listview' data-inset='true'>" +
					( opt.fixIncorrect === true ? "" : "<li data-role='list-divider'>" + _( "Change Password" ) + "</li>" ) +
					"<li>" +
						( opt.fixIncorrect === true ? "<p class='rain-desc red-text bold'>" + _( "Incorrect password for " ) +
							opt.name + ". " + _( "Please re-enter password to try again." ) + "</p>" : "" ) +
						"<form method='post' novalidate>" +
							"<label for='npw'>" + ( opt.fixIncorrect === true ? _( "Password:" ) : _( "New Password" ) + ":" ) + "</label>" +
							"<input type='password' name='npw' id='npw' value=''" + ( isPi ? "" : " maxlength='32'" ) + ">" +
							( opt.fixIncorrect === true ? "" : "<label for='cpw'>" + _( "Confirm New Password" ) + ":</label>" +
							"<input type='password' name='cpw' id='cpw' value=''" + ( isPi ? "" : " maxlength='32'" ) + ">" ) +
							( opt.fixIncorrect === true ? "<label for='save_pw'>" + _( "Save Password" ) + "</label>" +
							"<input type='checkbox' data-wrapper-class='save_pw' name='save_pw' id='save_pw' data-mini='true'>" : "" ) +
							"<input type='submit' value='" + _( "Submit" ) + "'>" +
						"</form>" +
					"</li>" +
				"</ul>" +
		"</div>" );

	popup.find( "form" ).on( "submit", function() {
		var npw = popup.find( "#npw" ).val(),
			cpw = popup.find( "#cpw" ).val();

		if ( opt.fixIncorrect === true ) {
			didSubmit = true;

			storage.get( [ "sites" ], function( data ) {
				var sites = parseSites( data.sites ),
					success = function( pass ) {
						currPass = pass;
						sites[ opt.name ].os_pw = popup.find( "#save_pw" ).is( ":checked" ) ? pass : "";
						storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
						popup.popup( "close" );
						opt.callback();
					};

				checkPW( md5( npw ), function( result ) {
					if ( result === true ) {
						success( md5( npw ) );
					} else {
						success( npw );
					}
				} );
			} );

			return false;
		}

		if ( npw !== cpw ) {
			showerror( _( "The passwords don't match. Please try again." ) );
			return false;
		}

		if ( npw === "" ) {
			showerror( _( "Password cannot be empty" ) );
			return false;
		}

		if ( !isPi && npw.length > 32 ) {
			showerror( _( "Password cannot be longer than 32 characters" ) );
		}

		if ( checkOSVersion( 213 ) ) {
			npw = md5( npw );
			cpw = md5( cpw );
		}

		$.mobile.loading( "show" );
		sendToOS( "/sp?pw=&npw=" + encodeURIComponent( npw ) + "&cpw=" + encodeURIComponent( cpw ), "json" ).done( function( info ) {
			var result = info.result;

			if ( !result || result > 1 ) {
				if ( result === 2 ) {
					showerror( _( "Please check the current device password is correct then try again" ) );
				} else {
					showerror( _( "Unable to change password. Please try again." ) );
				}
			} else {
				storage.get( [ "sites", "current_site" ], function( data ) {
					var sites = parseSites( data.sites );

					sites[ data.current_site ].os_pw = npw;
					currPass = npw;
					storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
				} );
				$.mobile.loading( "hide" );
				popup.popup( "close" );
				showerror( _( "Password changed successfully" ) );
			}
		} );

		return false;
	} );

	popup.one( "popupafterclose", function() {
		document.activeElement.blur();
		popup.remove();
		if ( opt.fixIncorrect && !didSubmit ) {
			opt.cancel();
		}
	} ).popup().enhanceWithin();

	if ( opt.fixIncorrect ) {

		// Hash password and try again, if it fails then show the password prompt popup
		storage.get( [ "sites", "current_site" ], function( data ) {
			var sites = parseSites( data.sites ),
				current = data.current_site,
				pw = md5( sites[ current ].os_pw );

			if ( !isMD5( sites[ current ].os_pw ) ) {
				$.ajax( {
					url: currPrefix + currIp + "/jc?pw=" + pw,
					type: "GET",
					dataType: "json"
				} ).then(
					function() {
						sites[ current ].os_pw = currPass = pw;
						storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
						opt.callback();
					},
					function() {
						popup.popup( "open" );
					}
				);
			} else {
				popup.popup( "open" );
			}
		} );
	} else {
		popup.popup( "open" );
	}
}

function requestCloudAuth( callback ) {
	callback = callback || function() {};

	var popup = $( "<div data-role='popup' class='modal' id='requestCloudAuth' data-theme='a'>" +
				"<ul data-role='listview' data-inset='true'>" +
					"<li data-role='list-divider'>" + _( "OpenSprinkler.com Login" ) + "</li>" +
					"<li><p class='rain-desc tight'>" +
						_( "Use your OpenSprinkler.com login and password to securely sync sites between all your devices." ) +
						"<br><br>" +
						_( "Don't have an account?" ) + " <a href='https://opensprinkler.com/my-account/' class='iab'>" +
						_( "Register here" ) + "</a>" +
					"</p></li>" +
					"<li>" +
						"<form method='post' novalidate>" +
							"<label for='cloudUser'>" + _( "Username:" ) + "</label>" +
							"<input type='text' name='cloudUser' id='cloudUser' autocomplete='off' autocorrect='off' autocapitalize='off' " +
								"spellcheck='false'>" +
							"<label for='cloudPass'>" + _( "Password:" ) + "</label>" +
							"<input type='password' name='cloudPass' id='cloudPass'>" +
							"<input type='submit' value='" + _( "Submit" ) + "'>" +
						"</form>" +
					"</li>" +
				"</ul>" +
		"</div>" ),
		didSucceed = false;

	popup.find( "form" ).on( "submit", function() {
		$.mobile.loading( "show" );
		cloudLogin( popup.find( "#cloudUser" ).val(), popup.find( "#cloudPass" ).val(), function( result ) {
			if ( result === false ) {
				showerror( _( "Invalid username/password combination. Please try again." ) );
				return;
			} else {
				$.mobile.loading( "hide" );
				didSucceed = true;
				popup.popup( "close" );
			}
		} );
		return false;
	} );

	popup.one( "popupafterclose", function() {
		callback( didSucceed );
		if ( didSucceed ) {
			cloudSyncStart();
		}
	} );

	openPopup( popup );
}

function cloudLogin( user, pass, callback ) {
	callback = callback || function() {};

	$.ajax( {
		type: "POST",
		dataType: "json",
		url: "https://opensprinkler.com/wp-admin/admin-ajax.php",
		data: {
			action: "ajaxLogin",
			username: user,
			password: pass
		},
		success: function( data ) {
			if ( typeof data.token === "string" ) {
				storage.set( {
					"cloudToken": data.token,
					"cloudDataToken": sjcl.codec.hex.fromBits( sjcl.hash.sha256.hash( pass ) )
				} );
			}
			callback( data.loggedin );
		},
		fail: function() {
			callback( false );
		}
	} );
}

function cloudSaveSites( callback ) {
	if ( typeof callback !== "function" ) {
		callback = function() {};
	}

	storage.get( [ "cloudToken", "cloudDataToken", "sites" ], function( data ) {
		if ( data.cloudToken === null || data.cloudToken === undefined ) {
			callback( false );
			return;
		}

		$.ajax( {
			type: "POST",
			dataType: "json",
			url: "https://opensprinkler.com/wp-admin/admin-ajax.php",
			data: {
				action: "saveSites",
				token: data.cloudToken,
				sites: encodeURIComponent( JSON.stringify( sjcl.encrypt( data.cloudDataToken, data.sites ) ) )
			},
			success: function( data ) {
				if ( data.success === false ) {
					if ( data.message === "BAD_TOKEN" ) {
						handleExpiredLogin();
					}
					callback( false, data.message );
				} else {
					storage.set( { "cloudToken":data.token } );
					callback( data.success );
				}
			},
			fail: function() {
				callback( false );
			}
		} );
	} );
}

function cloudGetSites( callback ) {
	callback = callback || function() {};

	storage.get( [ "cloudToken", "cloudDataToken" ], function( local ) {
		if ( local.cloudToken === undefined || local.cloudToken === null ) {
			callback( false );
			return;
		}

		if ( local.cloudDataToken === undefined || local.cloudDataToken === null ) {
			handleInvalidDataToken();
			callback( false );
			return;
		}

		$.ajax( {
			type: "POST",
			dataType: "json",
			url: "https://opensprinkler.com/wp-admin/admin-ajax.php",
			data: {
				action: "getSites",
				token: local.cloudToken
			},
			success: function( data ) {
				if ( data.success === false || data.sites === "" ) {
					if ( data.message === "BAD_TOKEN" ) {
						handleExpiredLogin();
					}
					callback( false, data.message );
				} else {
					storage.set( { "cloudToken":data.token } );
					var sites;

					try {
						sites = sjcl.decrypt( local.cloudDataToken, data.sites );
					} catch ( err ) {
						if ( err.message === "ccm: tag doesn't match" ) {
							handleInvalidDataToken();
						}
						callback( false );
					}

					try {
						callback( JSON.parse( sites ) );
					} catch ( err ) {
						callback( false );
					}
				}
			},
			fail: function() {
				callback( false );
			}
		} );
	} );
}

function cloudSyncStart() {
	cloudGetSites( function( sites ) {
		var page = $( ".ui-page-active" ).attr( "id" );

		if ( page === "start" ) {
			if ( Object.keys( sites ).length > 0 ) {
				storage.set( { "sites":JSON.stringify( sites ) } );
			}
			changePage( "#site-control" );
		} else {
			updateLoginButtons();

			storage.get( "sites", function( data ) {
				if ( JSON.stringify( sites ) === data.sites ) {
					return;
				}

				data.sites = parseSites( data.sites );

				if ( currLocal ) {
					findLocalSiteName( sites, function( result ) {

						// Logout if the current site isn't matched in the cloud sites
						if ( result === false ) {
							areYouSure(
								_( "Do you wish to add this location to your cloud synced site list?" ),
								_( "This site is not found in the currently synced site list but may be added now." ),
								function() {
									sites[ currIp ] = data.sites.Local;
									storage.set( { "sites": JSON.stringify( sites ) }, cloudSaveSites );
									storage.set( { "current_site": currIp } );
									updateSiteList( Object.keys( sites ), currIp );
								},
								function() {
									storage.remove( "cloudToken", updateLoginButtons );
								}
							 );
						} else {
							storage.set( { "sites": JSON.stringify( sites ) }, cloudSaveSites );
							storage.set( { "current_site": result } );
							updateSiteList( Object.keys( sites ), result );
						}
					} );

					return;
				}

				if ( Object.keys( sites ).length > 0 ) {

					// Handle how to merge when cloud is populated
					var popup = $(
						"<div data-role='popup' data-theme='a' data-overlay-theme='b'>" +
							"<div class='ui-bar ui-bar-a'>" + _( "Select Merge Method" ) + "</div>" +
							"<div data-role='controlgroup' class='tight'>" +
								"<button class='merge'>" + _( "Merge" ) + "</button>" +
								"<button class='replaceLocal'>" + _( "Replace local with cloud" ) + "</button>" +
								"<button class='replaceCloud'>" + _( "Replace cloud with local" ) + "</button>" +
							"</div>" +
						"</div>" ),
						finish = function() {
							storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
							popup.popup( "close" );

							if ( page === "site-control" ) {
								changePage( "#site-control" );
							}
						};

					popup.find( ".merge" ).on( "click", function() {
						sites = $.extend( {}, data.sites, sites );
						finish();
					} );

					popup.find( ".replaceLocal" ).on( "click", function() {
						finish();
					} );

					popup.find( ".replaceCloud" ).on( "click", function() {
						sites = data.sites;
						finish();
					} );

					popup.one( "popupafterclose", function() {
						popup.popup( "destroy" ).remove();
					} ).popup( {
						history: false,
						"positionTo": "window"
					} ).enhanceWithin().popup( "open" );
				} else {
					cloudSaveSites();
				}
			} );
		}
	} );
}

function cloudSync( callback ) {
	if ( typeof callback !== "function" ) {
		callback = function() {};
	}

	storage.get( [ "cloudToken", "current_site" ], function( local ) {
		if ( typeof local.cloudToken !== "string" ) {
			return;
		}

		cloudGetSites( function( data ) {
			if ( data !== false ) {
				storage.set( { "sites":JSON.stringify( data ) }, function() {
					updateSiteList( Object.keys( data ), local.current_site );
					callback();

					$( "html" ).trigger( "siterefresh" );
				} );
			}
		} );
	} );
}

var corruptionNotificationShown = false;
function handleCorruptedWeatherOptions( wto ) {
	if ( corruptionNotificationShown ) {
		return;
	}

	addNotification( {
		title: _( "Weather Options have Corrupted" ),
		desc: _( "Click here to retrieve the partial weather option data" ),
		on: function() {
			var button = $( this ).parent(),
				popup = $(
					"<div data-role='popup' data-theme='a' class='modal ui-content' id='weatherOptionCorruption'>" +
						"<h3 class='center'>" +
							_( "Weather option data has corrupted" ) +
						"</h3>" +
						"<h5 class='center'>" + _( "Please note this may indicate other data corruption as well, please verify all settings." ) + "</h5>" +
						"<h6 class='center'>" + _( "Below is the corrupt data which could not be parsed but may be useful for restoration." ) + "</h6>" +
						"<code>" +
							wto[ 0 ].substr( 7 ) +
						"</code>" +
						"<a class='ui-btn ui-corner-all ui-shadow red reset-options' style='width:80%;margin:5px auto;' href='#'>" +
							_( "Reset All Options" ) +
						"</a>" +
						"<a class='ui-btn ui-corner-all ui-shadow submit' style='width:80%;margin:5px auto;' href='#'>" +
							_( "Dismiss" ) +
						"</a>" +
					"</div>"
				);

			popup.find( ".submit" ).on( "click", function() {
				removeNotification( button );
				popup.popup( "close" );

				return false;
			} );

			popup.find( ".reset-options" ).on( "click", function() {
				removeNotification( button );
				popup.popup( "close" );
				resetAllOptions( function() {
					showerror( _( "Settings have been saved" ) );
				} );

				return false;
			} );

			openPopup( popup );
			return false;
		}
	} );

	corruptionNotificationShown = true;
}

function handleExpiredLogin() {
	storage.remove( [ "cloudToken" ], updateLoginButtons );

	addNotification( {
		title: _( "OpenSprinkler.com Login Expired" ),
		desc: _( "Click here to re-login to OpenSprinkler.com" ),
		on: function() {
			var button = $( this ).parent();

			requestCloudAuth( function( result ) {
				removeNotification( button );

				if ( result === true ) {
					updateLoginButtons();
					cloudSync();
				}
			} );

			return false;
		}
	} );
}

function handleInvalidDataToken() {
	storage.remove( [ "cloudDataToken" ] );

	addNotification( {
		title: _( "Unable to read cloud data" ),
		desc: _( "Click here to enter a valid password to decrypt the data" ),
		on: function() {
			var button = $( this ).parent(),
				popup = $(
					"<div data-role='popup' data-theme='a' class='modal ui-content' id='dataPassword'>" +
						"<p class='tight rain-desc'>" +
							_( "Please enter your OpenSprinkler.com password. If you have recently changed your password, you may need to enter your previous password to decrypt the data." ) +
						"</p>" +
						"<form>" +
							"<input type='password' id='dataPasswordInput' name='dataPasswordInput' placeholder='" + _( "Password" ) + "' />" +
							"<input type='submit' data-theme='b' value='" + _( "Submit" ) + "' />" +
						"</form>" +
					"</div>"
				),
				didSubmit = false;

			//Bind submit
			popup.find( "form" ).on( "submit", function() {
				removeNotification( button );
				didSubmit = true;
				storage.set( {
					"cloudDataToken": sjcl.codec.hex.fromBits( sjcl.hash.sha256.hash( popup.find( "#dataPasswordInput" ).val() ) )
				}, function() {
					popup.popup( "close" );
				} );

				return false;
			} );

			popup.one( "popupafterclose", function() {
				if ( didSubmit === true ) {
					cloudSync();
				}
			} );

			openPopup( popup );
			return false;
		}
	} );
}

function getTokenUser( token ) {
	return atob( token ).split( "|" )[ 0 ];
}

function detectUnusedExpansionBoards() {
	if (
		typeof controller.options.dexp === "number" &&
		controller.options.dexp < 255 &&
		controller.options.dexp >= 0 &&
		controller.options.ext < controller.options.dexp
	) {
		addNotification( {
			title: _( "Unused Expanders Detected" ),
			desc: _( "Click here to enable all connected stations." ),
			on: function() {
				removeNotification( $( this ).parent() );
				changePage( "#os-options", {
					expandItem: "station"
				} );
				return false;
			}
		} );
	}
}

function showUnifiedFirmwareNotification() {
	if ( !isOSPi() ) {
		return;
	}

	storage.get( "ignoreUnifiedFirmware", function( data ) {
		if ( data.ignoreUnifiedFirmware !== "1" ) {

			// Unable to access the device using it's public IP
			addNotification( {
				title: _( "Unified firmware is now avaialble" ),
				desc: _( "Click here for more details" ),
				on: function() {
					var iab = window.open( "https://openthings.freshdesk.com/support/solutions/articles/5000631599",
						"_blank", "location=" + ( isAndroid ? "yes" : "no" ) +
						",enableViewportScale=yes,toolbarposition=top,closebuttoncaption=" + _( "Back" ) );

					if ( isIEMobile ) {
						$.mobile.document.data( "iabOpen", true );
						iab.addEventListener( "exit", function() {
							$.mobile.document.removeData( "iabOpen" );
						} );
					}

					return false;
				},
				off: function() {
					storage.set( { "ignoreUnifiedFirmware": "1" } );
					return true;
				}
			} );
		}
	} );
}

function intToIP( eip ) {
	return ( ( eip >> 24 ) & 255 ) + "." + ( ( eip >> 16 ) & 255 ) + "." + ( ( eip >> 8 ) & 255 ) + "." + ( eip & 255 );
}

function checkPublicAccess( eip ) {

	// Check if the device is accessible from it's public IP

	if ( eip === 0 ) {
		return;
	}

	var ip = intToIP( eip ),
		port = currIp.match( /.*:(\d+)/ ),
		fail = function() {
			storage.get( "ignoreRemoteFailed", function( data ) {
				if ( data.ignoreRemoteFailed !== "1" ) {

					// Unable to access the device using it's public IP
					addNotification( {
						title: _( "Remote access is not enabled" ),
						desc: _( "Click here to troubleshoot remote access issues" ),
						on: function() {
							var iab = window.open( "https://openthings.freshdesk.com/support/solutions/articles/5000569763",
								"_blank", "location=" + ( isAndroid ? "yes" : "no" ) +
								",enableViewportScale=yes,toolbarposition=top,closebuttoncaption=" + _( "Back" ) );

							if ( isIEMobile ) {
								$.mobile.document.data( "iabOpen", true );
								iab.addEventListener( "exit", function() {
									$.mobile.document.removeData( "iabOpen" );
								} );
							}

							return false;
						},
						off: function() {
							storage.set( { "ignoreRemoteFailed": "1" } );
							return true;
						}
					} );
				}
			} );
		};

	if ( ip === currIp || isLocalIP( ip ) || !isLocalIP( currIp ) ) {
		return;
	}

	port = ( port ? parseInt( port[ 1 ] ) : 80 );

	$.ajax( {
		url: currPrefix + ip + ":" + port + "/jo?pw=" + currPass,
		global: false,
		dataType: "json",
		type: "GET"
	} ).then(
		function( data ) {
			if ( typeof data !== "object" || !data.hasOwnProperty( "fwv" ) || data.fwv !== controller.options.fwv ||
				( checkOSVersion( 214 ) && controller.options.ip4 !== data.ip4 ) ) {
					fail();
					return;
			}

			// Public IP worked, update device IP to use the public IP instead
			// storage.get( [ "sites", "current_site" ], function( data ) {
			// 	var sites = parseSites( data.sites ),
			// 		current = data.current_site;

			// 	sites[ current ].os_ip = ip + ( port === 80 ? "" : ":" + port );

			// 	storage.set( { "sites":JSON.stringify( sites ) }, cloudSaveSites );
			// } );
		},
		fail
	);
}

function logout( success ) {
	if ( typeof success !== "function" ) {
		success = function() {};
	}

	areYouSure( _( "Are you sure you want to logout?" ), "", function() {
		if ( currLocal ) {
			storage.remove( [ "sites", "current_site", "lang", "provider", "wapikey", "runonce", "cloudToken" ], function() {
				location.reload();
			} );
		} else {
			storage.remove( [ "cloudToken" ], function() {
				updateLoginButtons();
				success();
			} );
		}
	} );
}

function updateLoginButtons() {
	var page = $( ".ui-page-active" );

	storage.get( "cloudToken", function( data ) {
		var login = $( ".login-button" ),
			logout = $( ".logout-button" );

		if ( data.cloudToken === null || data.cloudToken === undefined ) {
			login.removeClass( "hidden" );

			if ( !currLocal ) {
				logout.addClass( "hidden" );
			}

			logout.find( "a" ).text( _( "Logout" ) );

			if ( page.attr( "id" ) === "site-control" ) {
				page.find( ".logged-in-alert" ).remove();
			}
		} else {
			logout.removeClass( "hidden" ).find( "a" ).text( _( "Logout" ) + " (" + getTokenUser( data.cloudToken ) + ")" );
			login.addClass( "hidden" );

			if ( page.attr( "id" ) === "site-control" && page.find( ".logged-in-alert" ).length === 0 ) {
				page.find( ".ui-content" ).prepend( addSyncStatus( data.cloudToken ) );
			}
		}
	} );
}

function addNotification( item ) {
	notifications.push( item );
	updateNotificationBadge();

	var panel = $( "#notificationPanel" );

	if ( panel.hasClass( "ui-panel-open" ) ) {
		panel.find( "ul" ).append( createNotificationItem( item ) ).listview( "refresh" );
	}
}

function updateNotificationBadge() {
	var total = notifications.length,
		header = $( "#header" );

	if ( total === 0 ) {
		header.find( ".notifications" ).hide();
	} else {
		header.find( ".notifications" ).show();
		header.find( ".notificationCount" ).text( total );
	}
}

function createNotificationItem( item ) {
	var listItem = $( "<li><a class='primary' href='#'><h2>" + item.title + "</h2>" + ( item.desc ? "<p>" + item.desc + "</p>" : "" ) +
		"</a><a class='ui-btn ui-btn-icon-notext ui-icon-delete'></a></li>" );

	listItem.find( ".primary" ).on( "click", item.on );
	listItem.find( ".ui-icon-delete" ).on( "click", function() {
		removeNotification( $( this ).parent() );
	} );

	return listItem;
}

function showNotifications() {
	if ( notifications.length === 0 ) {
		return;
	}

	var panel = $( "#notificationPanel" ),
		menu = $( "#footer-menu" ),
		items = [ $( "<li data-role='list-divider'>" + _( "Notifications" ) +
			"<button class='ui-btn ui-btn-icon-notext ui-icon-delete btn-no-border clear-all delete'></button></li>" )
		.on( "click", ".clear-all", function() {
			var button = $( this );

			if ( button.hasClass( "clear" ) ) {
				clearNotifications();
			} else {
				button.removeClass( "delete ui-btn-icon-notext ui-icon-delete" ).addClass( "clear" ).text( _( "Clear" ) );
				setTimeout( function() {
				$.mobile.document.one( "click", function() {
						button.removeClass( "clear" ).addClass( "delete ui-btn-icon-notext ui-icon-delete" ).text( "" );
					} );
				}, 1 );
			}
		} ) ];

	for ( var i = notifications.length - 1; i >= 0; i-- ) {
		items.push( createNotificationItem( notifications[ i ] ) );
	}

	panel.find( "ul" ).replaceWith( $( "<ul/>" ).append( items ).listview() );
	panel.on( "panelbeforeclose", function() {
		menu.removeClass( "moveLeft" );
	} );
	panel.panel().panel( "option", "classes.modal", "needsclick ui-panel-dismiss" );
	menu.addClass( "moveLeft" );
	panel.panel( "open" );
}

function clearNotifications() {
	var panel = $( "#notificationPanel" );
	notifications = [];
	updateNotificationBadge();
	panel.find( "ul" ).empty();
	if ( panel.hasClass( "ui-panel-open" ) ) {
		panel.panel( "close" );
	}
}

function removeNotification( button ) {
	var panel = $( "#notificationPanel" ),
		off = notifications[ button.index() - 1 ].off;

	if ( typeof off === "function" ) {
		if ( !off() ) {
			return;
		}
	}

	notifications.remove( button.index() - 1 );
	button.remove();
	updateNotificationBadge();
	if ( notifications.length === 0 && panel.hasClass( "ui-panel-open" ) ) {
		panel.panel( "close" );
	}
}

function checkFirmwareUpdate() {

	// Update checks are only be available for Arduino firmwares
	if ( checkOSVersion( 200 ) && ( getHWVersion() === "3.0" || isOSPi() ) ) {

		// Github API to get releases for OpenSprinkler firmware
		$.getJSON( "https://api.github.com/repos/opensprinkler/opensprinkler-firmware/releases" ).done( function( data ) {
			if ( controller.options.fwv < data[ 0 ].tag_name ) {

				// Grab a local storage variable which defines the firmware version for the last dismissed update
				storage.get( "updateDismiss", function( flag ) {

					// If the variable does not exist or is lower than the newest update, show the update notification
					if ( !flag.updateDismiss || flag.updateDismiss < data[ 0 ].tag_name ) {
						addNotification( {
							title: _( "Firmware update available" ),
							on: function() {

								// Modify the changelog by parsing markdown of lists to HTML
								var button = $( this ).parent(),
									canUpdate = controller.options.hwv === 30 || controller.options.hwv > 63 && checkOSVersion( 216 ),
									changelog = data[ 0 ][ "html_url" ],
									popup = $(
										"<div data-role='popup' class='modal' data-theme='a'>" +
											"<h3 class='center' style='margin-bottom:0'>" +
												_( "Latest" ) + " " + _( "Firmware" ) + ": " + data[ 0 ].name +
											"</h3>" +
											"<h5 class='center' style='margin:0'>" + _( "This Controller" ) + ": " + getOSVersion() + getOSMinorVersion() + "</h5>" +
											"<a class='iab ui-btn ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' target='_blank' href='" + changelog + "'>" +
												_( "View Changelog" ) +
											"</a>" +
											"<a class='guide ui-btn ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' href='#'>" +
												_( "Update Guide" ) +
											"</a>" +
											( canUpdate ? "<a class='update ui-btn ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' href='#'>" +
												_( "Update Now" ) +
											"</a>" : "" ) +
											"<a class='dismiss ui-btn ui-btn-b ui-corner-all ui-shadow' style='width:80%;margin:5px auto;' href='#'>" +
												_( "Dismiss" ) +
											"</a>" +
										"</div>"
									);

								popup.find( ".update" ).on( "click", function() {
									if ( controller.options.hwv === 30 ) {
										$( "<a class='hidden iab' href='" + currPrefix + currIp + "/update'></a>" ).appendTo( popup ).click();
										return;
									}

									// For OSPi/OSBo with firmware 2.1.6 or newer, trigger the update script from the app
									sendToOS( "/cv?pw=&update=1", "json" ).then(
										function() {
											showerror( _( "Update successful" ) );
											popup.find( ".dismiss" ).click();
										},
										function() {
											$.mobile.loading( "show", {
												html: "<div class='center'>" + _( "Update did not complete." ) + "<br>" +
													"<a class='iab ui-btn' href='https://openthings.freshdesk.com/support/solutions/articles/5000631599-installing-and-updating-the-unified-firmware#upgrade'>" + _( "Update Guide" ) + "</a></div>",
												textVisible: true,
												theme: "b"
											} );
											setTimeout( function() { $.mobile.loading( "hide" ); }, 3000 );
										}
									);
								} );

								popup.find( ".guide" ).on( "click", function() {

										var url = controller.options.hwv > 63 ?
											"https://openthings.freshdesk.com/support/solutions/articles/5000631599-installing-and-updating-the-unified-firmware#upgrade"
											: "https://openthings.freshdesk.com/support/solutions/articles/5000381694-opensprinkler-firmware-update-guide";

										// Open the firmware upgrade guide in a child browser
										$( "<a class='hidden iab' href='" + url + "'></a>" )
											.appendTo( popup ).click();
								} );

								popup.find( ".dismiss" ).one( "click", function() {

									// Update the notification dismiss variable with the latest available version
									storage.set( { updateDismiss:data[ 0 ].tag_name } );
									popup.popup( "close" );
									removeNotification( button );
									return false;
								} );

								openPopup( popup );
							}
						} );
					}
				} );
			}
		} );
	}
}

function stopAllStations() {

	if ( !isControllerConnected() ) {
		return false;
	}

	areYouSure( _( "Are you sure you want to stop all stations?" ), "", function() {
		$.mobile.loading( "show" );
		sendToOS( "/cv?pw=&rsn=1" ).done( function() {
			$.mobile.loading( "hide" );
			removeStationTimers();
			refreshStatus();
			showerror( _( "All stations have been stopped" ) );
		} );
	} );
}

function pauseProgramming() {

	if ( !isControllerConnected() ) {
		return false;
	}

	showDurationBox( {
		title: _( "Pause Time" ),
		incrementalUpdate: false,
		updateOnChange: false,
		maximum: 65535,
		callback: function( result ) {
			$.mobile.loading( "show" );
			sendToOS( "/pq?pw=&dur="+result ).done (function() {
				$.mobile.loading( "hide" );
				refreshStatus();
			} );
		}
	} );
}

function checkOSPiVersion( check ) {
	var ver;

	if ( isOSPi() ) {
		ver = controller.options.fwv.split( "-" )[ 0 ];
		if ( ver !== check ) {
			ver = ver.split( "." );
			check = check.split( "." );
			return versionCompare( ver, check );
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function checkOSVersion( check ) {
	var version = controller.options.fwv;

	// If check is 4 digits then we need to include the minor version number as well
	if ( check >= 1000 ) {
		version = version * 10 + controller.options.fwm;
	}

	if ( isOSPi() ) {
		return false;
	} else {
		if ( check === version ) {
			return true;
		} else {
			return versionCompare( version.toString().split( "" ), check.toString().split( "" ) );
		}
	}
}

function versionCompare( ver, check ) {

	// Returns false when check < ver and 1 when check > ver

	var max = Math.max( ver.length, check.length ),
		result;

	while ( ver.length < max ) {
		ver.push( 0 );
	}

	while ( check.length < max ) {
		check.push( 0 );
	}

	for ( var i = 0; i < max; i++ ) {
		result = Math.max( -1, Math.min( 1, ver[ i ] - check[ i ] ) );
		if ( result !== 0 ) {
			break;
		}
	}

	if ( result === -1 ) {
		result = false;
	}

	return result;
}

function getOSVersion( fwv ) {
	if ( !fwv && typeof controller.options === "object" ) {
		fwv = controller.options.fwv;
	}
	if ( typeof fwv === "string" && fwv.search( /ospi/i ) !== -1 ) {
		return fwv;
	} else {
		return ( fwv / 100 >> 0 ) + "." + ( ( fwv / 10 >> 0 ) % 10 ) + "." + ( fwv % 10 );
	}
}

function getOSMinorVersion() {
	if ( !isOSPi() && typeof controller.options === "object" && typeof controller.options.fwm === "number" && controller.options.fwm > 0 ) {
		return " (" + controller.options.fwm + ")";
	}
	return "";
}

function getHWVersion( hwv ) {
	if ( !hwv ) {
		if ( typeof controller.options === "object" && typeof controller.options.hwv !== "undefined" ) {
			hwv = controller.options.hwv;
		} else {
			return false;
		}
	}

	if ( typeof hwv === "string" ) {
		return hwv;
	} else {
		if ( hwv === 64 ) {
			return "OSPi";
		} else if ( hwv === 128 ) {
			return "OSBo";
		} else if ( hwv === 192 ) {
			return "Linux";
		} else if ( hwv === 255 ) {
			return "Demo";
		} else {
			return ( ( hwv / 10 >> 0 ) % 10 ) + "." + ( hwv % 10 );
		}
	}
}

function getHWType() {
	if ( isOSPi() || typeof controller.options.hwt !== "number" || controller.options.hwt === 0 ) {
		return "";
	}

	if ( controller.options.hwt === 172 ) {
		return " - AC";
	} else if ( controller.options.hwt === 220 ) {
		return " - DC";
	} else if ( controller.options.hwt === 26 ) {
		return " - Latching";
	} else {
		return "";
	}
}

// Accessory functions for jQuery Mobile
function areYouSure( text1, text2, success, fail ) {
	$( "#sure" ).popup( "destroy" ).remove();
	success = success || function() {};
	fail = fail || function() {};

	var popup = $(
		"<div data-role='popup' data-theme='a' id='sure'>" +
			"<h3 class='sure-1 center'>" + text1 + "</h3>" +
			"<p class='sure-2 center'>" + text2 + "</p>" +
			"<a class='sure-do ui-btn ui-btn-b ui-corner-all ui-shadow' href='#'>" + _( "Yes" ) + "</a>" +
			"<a class='sure-dont ui-btn ui-corner-all ui-shadow' href='#'>" + _( "No" ) + "</a>" +
		"</div>"
	);

	//Bind buttons
	popup.find( ".sure-do" ).one( "click.sure", function() {
		popup.popup( "close" );
		success();
		return false;
	} );
	popup.find( ".sure-dont" ).one( "click.sure", function() {
		popup.popup( "close" );
		fail();
		return false;
	} );

	openPopup( popup );
}

function showIPRequest( opt ) {
	var defaults = {
			title: _( "Enter IP Address" ),
			ip: [ 0, 0, 0, 0 ],
			showBack: true,
			callback: function() {}
		};

	opt = $.extend( {}, defaults, opt );

	$( "#ipInput" ).popup( "destroy" ).remove();

	var popup = $( "<div data-role='popup' id='ipInput' data-theme='a'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + opt.title + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				"<span>" +
					"<fieldset class='ui-grid-c incr'>" +
						"<div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>" +
						"<div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>" +
						"<div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>" +
						"<div class='ui-block-d'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>" +
					"</fieldset>" +
					"<div class='ui-grid-c inputs'>" +
						"<div class='ui-block-a'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + opt.ip[ 0 ] + "'></div>" +
						"<div class='ui-block-b'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + opt.ip[ 1 ] + "'></div>" +
						"<div class='ui-block-c'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + opt.ip[ 2 ] + "'></div>" +
						"<div class='ui-block-d'><input data-wrapper-class='pad_buttons' class='ip_addr' type='number' pattern='[0-9]*' max='255' value='" + opt.ip[ 3 ] + "'></div>" +
					"</div>" +
					"<fieldset class='ui-grid-c decr'>" +
						"<div class='ui-block-a'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>" +
						"<div class='ui-block-b'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>" +
						"<div class='ui-block-c'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>" +
						"<div class='ui-block-d'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>" +
					"</fieldset>" +
				"</span>" +
				( opt.showBack ? "<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" : "" ) +
			"</div>" +
		"</div>" ),
		changeValue = function( pos, dir ) {
			var input = popup.find( ".inputs input" ).eq( pos ),
				val = parseInt( input.val() );

			if ( ( dir === -1 && val === 0 ) || ( dir === 1 && val >= 255 ) ) {
				return;
			}

			input.val( val + dir );
			opt.callback( getIP() );
		},
		getIP = function() {
			return $.makeArray( popup.find( ".ip_addr" ).map( function() {return parseInt( $( this ).val() );} ) );
		};

	popup.find( "button.submit" ).on( "click", function() {
		opt.callback( getIP() );
		popup.popup( "destroy" ).remove();
	} );

	popup.on( "focus", "input[type='number']", function() {
		this.value = "";
	} ).on( "blur", "input[type='number']", function() {
		if ( this.value === "" ) {
			this.value = "0";
		}
	} );

	holdButton( popup.find( ".incr" ).children(), function( e ) {
		var pos = $( e.currentTarget ).index();
		changeValue( pos, 1 );
		return false;
	} );

	holdButton( popup.find( ".decr" ).children(), function( e ) {
		var pos = $( e.currentTarget ).index();
		changeValue( pos, -1 );
		return false;
	} );

	popup
	.css( "max-width", "350px" )
	.one( "popupafterclose", function() {
		opt.callback( getIP() );
	} );

	openPopup( popup );
}

function showDurationBox( opt ) {
	var defaults = {
			seconds: 0,
			title: _( "Duration" ),
			granularity: 0,
			preventCompression: false,
			incrementalUpdate: true,
			showBack: true,
			showSun: false,
			minimum: 0,
			callback: function() {}
		},
		type = 0;

	opt = $.extend( {}, defaults, opt );

	$( "#durationBox" ).popup( "destroy" ).remove();

	opt.seconds = parseInt( opt.seconds );

	if ( opt.seconds === 65535 ) {
		type = 1;
		opt.seconds = 0;
	} else if ( opt.seconds === 65534 ) {
		type = 2;
		opt.seconds = 0;
	}

	if ( checkOSVersion( 217 ) ) {
		opt.preventCompression = true;
	}

	var keys = [ "days", "hours", "minutes", "seconds" ],
		text = [ _( "Days" ), _( "Hours" ), _( "Minutes" ), _( "Seconds" ) ],
		conv = [ 86400, 3600, 60, 1 ],
		max = [ 0, 23, 59, 59 ],
		total = 4 - opt.granularity,
		start = 0,
		arr = sec2dhms( opt.seconds ),
		i;

	if ( !opt.preventCompression && ( checkOSVersion( 210 ) && opt.maximum > 64800 ) ) {
		opt.maximum = checkOSVersion( 214 ) ? 57600 : 64800;
	}

	if ( opt.maximum ) {
		for ( i = conv.length - 1; i >= 0; i-- ) {
			if ( opt.maximum < conv[ i ] ) {
				start = i + 1;
				total = ( conv.length - start ) - opt.granularity;
				break;
			}
		}
	}

	var incrbts = "<fieldset class='ui-grid-" + String.fromCharCode( 95 + ( total ) ) + " incr'>",
		inputs = "<div class='ui-grid-" + String.fromCharCode( 95 + ( total ) ) + " inputs'>",
		decrbts = "<fieldset class='ui-grid-" + String.fromCharCode( 95 + ( total ) ) + " decr'>",
		popup = $( "<div data-role='popup' id='durationBox' data-theme='a'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + opt.title + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				( opt.helptext ? "<p class='rain-desc center smaller'>" + opt.helptext + "</p>" : "" ) +
				"<span>" +
				"</span>" +
				( opt.showSun ? "<div class='ui-grid-a useSun'>" +
					"<div class='ui-block-a'>" +
						"<button value='65534' class='ui-mini ui-btn rise " + ( type === 2 ? "ui-btn-active" : "" ) + "'>" + _( "Sunrise to Sunset" ) + "</button>" +
					"</div>" +
					"<div class='ui-block-b'>" +
						"<button value='65535' class='ui-mini ui-btn set " + ( type === 1 ? "ui-btn-active" : "" ) + "'>" + _( "Sunset to Sunrise" ) + "</button>" +
					"</div>" +
				"</div>" : "" ) +
				( opt.showBack ? "<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" : "" ) +
			"</div>" +
		"</div>" ),
		changeValue = function( pos, dir ) {
			var input = popup.find( ".inputs input" ).eq( pos ),
				apos = pos + start,
				val = parseInt( input.val() );

			if ( input.prop( "disabled" ) ) {
				return;
			}

			if ( ( dir === -1 && ( getValue() <= opt.minimum || val <= 0 ) ) || ( dir === 1 && ( getValue() + conv[ apos ] ) > opt.maximum ) ) {
				return;
			}

			// Increment next time field on current max
			if ( ( max[ apos ] !== 0 && pos !== 0 && Math.abs( val ) >= max[ apos ] ) ) {
				input.val( 0 );
				input = popup.find( ".inputs input" ).eq( pos - 1 );
				val = parseInt( input.val() );
			}

			input.val( val + dir );
			if ( opt.incrementalUpdate ) {
				opt.callback( getValue() );
			}

			if ( !opt.preventCompression && checkOSVersion( 210 ) ) {
				var state = ( dir === 1 ) ? true : false;

				if ( dir === 1 ) {
					if ( getValue() >= 60 ) {
						toggleInput( "seconds", state );
					}
					if ( getValue() >= 10800 ) {
						toggleInput( "minutes", state );
					}
				} else if ( dir === -1 ) {
					if ( getValue() <= -60 ) {
						toggleInput( "seconds", !state );
					} else if ( getValue() <= -10800 ) {
						toggleInput( "minutes", !state );
					} else if ( getValue() < 60 ) {
						toggleInput( "seconds", state );
					} else if ( getValue() < 10800 ) {
						toggleInput( "minutes", state );
					}
				}
			}
		},
		getValue = function() {
			var useSun = popup.find( ".useSun" ).find( "button.ui-btn-active" );

			if ( useSun.length === 1 ) {
				return parseInt( useSun.val() );
			} else {
				return dhms2sec( {
					"days": parseInt( popup.find( ".days" ).val() ) || 0,
					"hours": parseInt( popup.find( ".hours" ).val() ) || 0,
					"minutes": parseInt( popup.find( ".minutes" ).val() ) || 0,
					"seconds": parseInt( popup.find( ".seconds" ).val() ) || 0
				} );
			}
		},
		toggleInput = function( field, state ) {
			popup.find( "." + field ).toggleClass( "ui-state-disabled", state ).prop( "disabled", state ).val( function() {
				if ( state ) {
					return 0;
				} else {
					return this.value;
				}
			} ).parent( ".ui-input-text" ).toggleClass( "ui-state-disabled", state );
		};

	for ( i = start; i < conv.length - opt.granularity; i++ ) {
		incrbts += "<div " + ( ( total > 1 ) ? "class='ui-block-" + String.fromCharCode( 97 + i - start ) + "'" : "" ) + ">" +
			"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>";
		inputs += "<div " + ( ( total > 1 ) ? "class='ui-block-" + String.fromCharCode( 97 + i - start ) + "'" : "" ) + "><label class='center'>" +
			_( text[ i ] ) + "</label><input data-wrapper-class='pad_buttons' class='" + keys[ i ] + "' type='number' pattern='[0-9]*' value='" +
			arr[ keys[ i ] ] + "'></div>";
		decrbts += "<div " + ( ( total > 1 ) ? "class='ui-block-" + String.fromCharCode( 97 + i - start ) + "'" : "" ) +
			"><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>";
	}

	incrbts += "</fieldset>";
	inputs += "</div>";
	decrbts += "</fieldset>";

	popup.find( "span" ).prepend( incrbts + inputs + decrbts );

	popup.find( "button.submit" ).on( "click", function() {
		opt.callback( getValue() );
		popup.popup( "destroy" ).remove();
	} );

	if ( !opt.preventCompression && checkOSVersion( 210 ) ) {
		if ( opt.seconds <= -60 ) {
			toggleInput( "seconds", true );
		}

		if ( opt.seconds <= -10800 ) {
			toggleInput( "minutes", true );
		}

		if ( opt.seconds >= 60 ) {
			toggleInput( "seconds", true );
		}

		if ( opt.seconds >= 10800 ) {
			toggleInput( "minutes", true );
		}
	}

	popup.on( "focus", "input[type='number']", function() {
		this.value = "";
	} ).on( "blur", "input[type='number']", function() {
		if ( this.value === "" ) {
			this.value = "0";
		}
	} );

	holdButton( popup.find( ".incr" ).children(), function( e ) {
		var pos = $( e.currentTarget ).index();
		changeValue( pos, 1 );
		return false;
	} );

	holdButton( popup.find( ".decr" ).children(), function( e ) {
		var pos = $( e.currentTarget ).index();
		changeValue( pos, -1 );
		return false;
	} );

	if ( opt.showSun ) {
		popup.find( ".useSun" ).on( "click", "button", function() {
			var button = $( this ),
				contraButton = popup.find( ".useSun" ).find( "button" ).not( button ),
				timeButtons = popup.find( "span" ).find( ".ui-btn,input" );

			contraButton.removeClass( "ui-btn-active" );
			if ( button.hasClass( "ui-btn-active" ) ) {
				button.removeClass( "ui-btn-active" );
				timeButtons.prop( "disabled", false ).removeClass( "ui-disabled" );
			} else {
				button.addClass( "ui-btn-active" );
				timeButtons.prop( "disabled", true ).addClass( "ui-disabled" );
			}

			if ( opt.incrementalUpdate ) {
				opt.callback( getValue() );
			}
		} );
	}

	popup
	.css( "max-width", "350px" )
	.one( "popupafteropen", function() {
		if ( type !== 0 ) {
			popup.find( "span" ).find( ".ui-btn,input" ).prop( "disabled", true ).addClass( "ui-disabled" );
		}
	} )
	.one( "popupafterclose", function() {
		if ( opt.incrementalUpdate ) {
			opt.callback( getValue() );
		}
	} );

	openPopup( popup );
}

function showSingleDurationInput( opt ) {
	$( "#singleDuration" ).popup( "destroy" ).remove();
	var defaults = {
		data: 0,
		title: _( "Duration" ),
		minimum: 0,
		label: "",
		updateOnChange: true,
		showBack: true,
		callback: function() {}
	};

	opt = $.extend( {}, defaults, opt );

	var popup = $( "<div data-role='popup' id='singleDuration' data-theme='a'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + opt.title + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				( opt.helptext ? "<p class='rain-desc center smaller'>" + opt.helptext + "</p>" : "" ) +
				"<label class='center'>" + opt.label + "</label>" +
				"<div class='input_with_buttons'>" +
					"<button class='decr ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button>" +
					"<input type='number' pattern='[0-9]*' value='" + opt.data + "'>" +
					"<button class='incr ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button>" +
				"</div>" +
				( opt.updateOnChange && !opt.showBack ? "" : "<input type='submit' data-theme='b' value='" + _( "Submit" ) + "'>" ) +
			"</div>" +
		"</div>" ),
		input = popup.find( "input" ),
		reply = function( val ) {
			opt.callback( parseInt( val ).clamp( opt.minimum, opt.maximum ) );
		},
		changeValue = function( dir ) {
			var val = parseInt( input.val() );

			if ( ( dir === -1 && val === opt.minimum ) || ( dir === 1 && val === opt.maximum ) ) {
				return;
			}

			input.val( val + dir );
			if ( opt.updateOnChange ) {
				reply( val + dir );
			}
		};

	holdButton( popup.find( ".incr" ), function() {
		changeValue( 1 );
		return false;
	} );
	holdButton( popup.find( ".decr" ), function() {
		changeValue( -1 );
		return false;
	} );

	popup.find( "input[type='number']" ).on( "focus", function() {
		this.value = "";
	} ).on( "blur", function() {
		if ( this.value === "" ) {
			this.value = "0";
		}
	} );

	popup.find( "input[type='submit']" ).on( "click", function() {
		reply( input.val() );
		popup.popup( "destroy" ).remove();
	} );

	popup
	.one( "popupafterclose", function() {
		if ( opt.updateOnChange ) {
			reply( input.val() );
		}
	} );

	openPopup( popup );
}

function showDateTimeInput( timestamp, callback ) {
	$( "#datetimeInput" ).popup( "destroy" ).remove();

	if ( !( timestamp instanceof Date ) ) {
		timestamp = new Date( timestamp * 1000 );
		timestamp.setMinutes( timestamp.getMinutes() - timestamp.getTimezoneOffset() );
	}

	callback = callback || function() {};

	var keys = [ "Month", "Date", "FullYear", "Hours", "Minutes" ],
		monthNames = [ _( "Jan" ), _( "Feb" ), _( "Mar" ), _( "Apr" ), _( "May" ), _( "Jun" ), _( "Jul" ),
			_( "Aug" ), _( "Sep" ), _( "Oct" ), _( "Nov" ), _( "Dec" ) ],
		popup = $( "<div data-role='popup' id='datetimeInput' data-theme='a'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + _( "Enter Date/Time" ) + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
			"</div>" +
		"</div>" ),
		changeValue = function( pos, dir ) {
			timestamp[ "setUTC" + pos ]( timestamp[ "getUTC" + pos ]() + dir );
			callback( new Date( timestamp.getTime() ) );
			updateContent();
		},
		updateContent = function() {
			var incrbts = "<fieldset class='ui-grid-d incr'>",
				inputs = "<div class='ui-grid-d inputs'>",
				decrbts = "<fieldset class='ui-grid-d decr'>",
				val, mark, i;

			for ( i = 0; i < 5; i++ ) {
				val = timestamp[ "getUTC" + keys[ i ] ]();
				mark = "";

				if ( keys[ i ] === "Month" ) {
					val = "<p class='center'>" + monthNames[ val ] + "</p>";
				} else if ( keys[ i ] === "Date" ) {
					val = "<p class='center'>" + val + ",</p>";
				} else if ( keys[ i ] === "Hours" ) {
					val = "<p style='width:90%;display:inline-block' class='center'>" + val + "</p><p style='display:inline-block'>:</p>";
				} else {
					val = "<p class='center'>" + val + "</p>";
				}

				incrbts += "<div class='ui-block-" + String.fromCharCode( 97 + i ) + "'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a></div>";
				inputs += "<div id='" + keys[ i ] + "' class='ui-block-" + String.fromCharCode( 97 + i ) + "'>" + val + "</div>";
				decrbts += "<div class='ui-block-" + String.fromCharCode( 97 + i ) + "'><a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a></div>";
			}

			incrbts += "</fieldset>";
			inputs += "</div>";
			decrbts += "</fieldset>";

			popup.find( ".ui-content" ).html( "<span>" + incrbts + inputs + decrbts + "</span>" ).enhanceWithin();

			popup.find( ".incr" ).children().on( "vclick", function() {
				var pos = $( this ).index();
				changeValue( popup.find( ".inputs" ).children().eq( pos ).attr( "id" ), 1 );
				return false;
			} );

			popup.find( ".decr" ).children().on( "vclick", function() {
				var pos = $( this ).index();
				changeValue( popup.find( ".inputs" ).children().eq( pos ).attr( "id" ), -1 );
				return false;
			} );
	};

	updateContent();

	popup
	.css( "width", "280px" )
	.one( "popupafterclose", function() {
		callback( timestamp );
	} );

	openPopup( popup );
}

function showTimeInput( opt ) {
	var defaults = {
			minutes: 0,
			title: _( "Time" ),
			incrementalUpdate: true,
			showBack: true,
			showSun: false,
			callback: function() {}
		};

	opt = $.extend( {}, defaults, opt );

	$( "#timeInput" ).popup( "destroy" ).remove();

	var offset = opt.minutes & 0x7ff,
		type = 0;

	if ( ( opt.minutes >> 12 ) & 1 ) {
		offset = -offset;
	}
	if ( ( opt.minutes >> 14 ) & 1 ) {
		type = 1;
	} else if ( ( opt.minutes >> 13 ) & 1 ) {
		type = 2;
	}

	var isPM = ( opt.minutes > 719 ? true : false ),
		getPeriod = function() {
			return isPM ? _( "PM" ) : _( "AM" );
		},
		popup = $( "<div data-role='popup' id='timeInput' data-theme='a'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + opt.title + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				( opt.helptext ? "<p class='pad-top rain-desc center smaller'>" + opt.helptext + "</p>" : "" ) +
				"<span>" +
					"<fieldset class='ui-grid-" + ( isMetric ? "a" : "b" ) + " incr'>" +
						"<div class='ui-block-a'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" +
						( isMetric ? "" : "<div class='ui-block-c'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" ) +
					"</fieldset>" +
					"<div class='ui-grid-" + ( isMetric ? "a" : "b" ) + " inputs'>" +
						"<div class='ui-block-a'>" +
							"<input data-wrapper-class='pad_buttons' class='hour dontPad' type='number' pattern='[0-9]*' value='" +
								( isMetric ? pad( ( opt.minutes / 60 >> 0 ) % 24 ) + "'>" : ( parseInt( opt.minutes / 60 ) % 12 === 0 ? 12 : parseInt( opt.minutes / 60 ) % 12 ) + "'>" ) +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<input data-wrapper-class='pad_buttons' class='minute' type='number' pattern='[0-9]*' value='" +
								pad( opt.minutes % 60 ) + "'>" +
						"</div>" +
						( isMetric ? "" : "<div class='ui-block-c'>" +
							"<p class='center period'>" + getPeriod() + "</p>" +
						"</div>" ) +
					"</div>" +
					"<fieldset class='ui-grid-" + ( isMetric ? "a" : "b" ) + " decr'>" +
						"<div class='ui-block-a'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" +
						( isMetric ? "" : "<div class='ui-block-c'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" ) +
					"</fieldset>" +
				"</span>" +
				( opt.showSun ? "<div class='ui-grid-a useSun'>" +
					"<div class='ui-block-a'>" +
						"<button class='ui-mini ui-btn rise " + ( type === 1 ? "ui-btn-active" : "" ) + "'>" + _( "Use Sunrise" ) + "</button>" +
					"</div>" +
					"<div class='ui-block-b'>" +
						"<button class='ui-mini ui-btn set " + ( type === 2 ? "ui-btn-active" : "" ) + "'>" + _( "Use Sunset" ) + "</button>" +
					"</div>" +
				"</div>" +
				"<div class='offsetInput'" + ( type === 0 ? " style='display: none;'" : "" ) + ">" +
					"<h5 class='center tight'>" + _( "Offset (minutes)" ) + "</h5>" +
					"<div class='input_with_buttons'>" +
						"<button class='decr ui-btn ui-btn-icon-notext ui-icon-carat-l btn-no-border'></button>" +
						"<input class='dontPad' type='number' pattern='[0-9]*' value='" + offset + "'>" +
						"<button class='incr ui-btn ui-btn-icon-notext ui-icon-carat-r btn-no-border'></button>" +
					"</div>" +
				"</div>" : "" ) +
				( opt.showBack ? "<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" : "" ) +
			"</div>" +
		"</div>" ),
		changeValue = function( pos, dir ) {
			if ( pos === 0 || pos === 1 ) {
				var curr = getValue(),
					to = curr + ( dir * ( pos === 0 ? 60 : 1 ) ),
					input = popup.find( ".inputs input" ).eq( pos ),
					isHour = input.hasClass( "hour" ),
					val = parseInt( input.val() );

				if ( dir === 1 ) {
					if ( isHour && ( ( isMetric && val >= 24 ) || ( !isMetric && val >= 12 ) ) ) {
						val = 0;
					}
					if ( !isHour && val >= 59 ) {
						val = -1;
						var hour = popup.find( ".hour" ),
							hourFixed = parseInt( hour.val() );

						if ( !isMetric ) {
							if ( hourFixed === 12 ) {
								hourFixed = 0;
							}

							hour.val( hourFixed + 1 );
						}
					}
				} else if ( isHour && val <= 1 ) {
					val = 13;
				} else if ( !isHour && val <= 0 ) {
					return;
				}

				if ( ( !isPM && to > 719 ) || ( isPM && to < 721 ) || ( isPM && to > 1439 ) || ( !isPM && dir === -1 && to < 0 ) ) {
					isPM = !isPM;
					popup.find( ".period" ).text( getPeriod() );
				}

				val = isHour ? val + dir : pad( val + dir );
				input.val( val );
			} else if ( pos === 2 ) {
				isPM = !isPM;
				popup.find( ".period" ).text( getPeriod() );
			}

			if ( opt.incrementalUpdate ) {
				opt.callback( getValue() );
			}
		},
		getValue = function() {
			var useSun = popup.find( ".useSun" ).find( "button.ui-btn-active" );

			if ( useSun.length === 1 ) {
				var st = 0,
					offset = parseInt( popup.find( ".offsetInput input" ).val() );
				if ( useSun.hasClass( "rise" ) ) {
					if ( offset >= 0 ) {
						st = offset;
					} else {
						st = -offset;
						st |= ( 1 << 12 );
					}

					// Set the sunrise bit
					st |= ( 1 << 14 );
				} else {
					if ( offset >= 0 ) {
						st = offset;
					} else {
						st = -offset;

						// Set the sign bit
						st |= ( 1 << 12 );
					}

					// Set the sunset bit
					st |= ( 1 << 13 );
				}

				return st;
			} else {
				var hour = parseInt( popup.find( ".hour" ).val() );

				if ( !isMetric ) {
					if ( isPM && hour !== 12 ) {
						hour = hour + 12;
					}

					if ( !isPM && hour === 12 ) {
						hour = 0;
					}
				}

				return ( hour * 60 ) + parseInt( popup.find( ".minute" ).val() );
			}
		};

	popup.find( "button.submit" ).on( "click", function() {
		opt.callback( getValue() );
		popup.popup( "destroy" ).remove();
	} );

	popup.on( "focus", "input[type='number']", function( e ) {
		e.target.value = "";
	} ).on( "blur", "input[type='number']", function( e ) {
		var val = parseInt( e.target.value ) || 0;
		e.target.value = $( e.target ).hasClass( "dontPad" ) ? val : pad( val );
	} );

	holdButton( popup.find( ".incr" ).children(), function( e ) {
		var button = $( e.currentTarget ),
			pos = button.index();

		if ( button.find( ".ui-disabled" ).length === 0 ) {
			changeValue( pos, 1 );
		}

		return false;
	} );

	holdButton( popup.find( ".decr" ).children(), function( e ) {
		var button = $( e.currentTarget ),
			pos = button.index();

		if ( button.find( ".ui-disabled" ).length === 0 ) {
			changeValue( pos, -1 );
		}

		return false;
	} );

	if ( opt.showSun ) {
		popup.find( ".useSun" ).on( "click", "button", function() {
			var button = $( this ),
				contraButton = popup.find( ".useSun" ).find( "button" ).not( button ),
				offset = popup.find( ".offsetInput" ),
				timeButtons = popup.find( "span" ).find( ".ui-btn,input,p" );

			contraButton.removeClass( "ui-btn-active" );
			if ( button.hasClass( "ui-btn-active" ) ) {
				button.removeClass( "ui-btn-active" );
				offset.slideUp();

				timeButtons.prop( "disabled", false ).removeClass( "ui-disabled" );
			} else {
				button.addClass( "ui-btn-active" );
				offset.slideDown();

				timeButtons.prop( "disabled", true ).addClass( "ui-disabled" );
			}

			if ( opt.incrementalUpdate ) {
				opt.callback( getValue() );
			}
		} );

		var offsetInput = popup.find( ".offsetInput" ).find( "input" ),
			changeOffset = function( dir ) {
				var val = parseInt( offsetInput.val() );

				if ( ( dir === -1 && val === -240 ) || ( dir === 1 && val === 240 ) ) {
					return;
				}

				offsetInput.val( val + dir );

				if ( opt.incrementalUpdate ) {
					opt.callback( getValue() );
				}
			};

		offsetInput.on( "focus", function() {
			this.value = "";
		} ).on( "blur", function() {
			if ( this.value === "" ) {
				this.value = "0";
			} else if ( this.value > 240 ) {
				this.value = "240";
			} else if ( this.value < -240 ) {
				this.value = "-240";
			}
		} );

		holdButton( popup.find( ".offsetInput" ).find( ".incr" ), function() {
			changeOffset( 1 );
			return false;
		} );
		holdButton( popup.find( ".offsetInput" ).find( ".decr" ), function() {
			changeOffset( -1 );
			return false;
		} );
	}

	popup
	.css( "max-width", "350px" )
	.one( "popupafteropen", function() {
		if ( type !== 0 ) {
			popup.find( "span" ).find( ".ui-btn,input,p" ).prop( "disabled", true ).addClass( "ui-disabled" );
		}
	} )
	.one( "popupafterclose", function() {
		if ( opt.incrementalUpdate ) {
			opt.callback( getValue() );
		}
	} );

	openPopup( popup );
}

function showDateInput( opt ) {
	var defaults = {
			month: 1,
			day: 1,
			title: _( "Date" ),
			showBack: true,
			callback: function() {}
		};

	opt = $.extend( {}, defaults, opt );

	$( "#dateInput" ).popup( "destroy" ).remove();

	if ( opt.month < 1) opt.month = 1;
	if ( opt.month > 12 ) opt.month = 12;
	if ( opt.day < 1 ) opt.day = 1;

	var monthNames = [ _( "Jan" ), _( "Feb" ), _( "Mar" ), _( "Apr" ), _( "May" ), _( "Jun" ),
					   _( "Jul" ), _( "Aug" ), _( "Sep" ), _( "Oct" ), _( "Nov" ), _( "Dec" ) ];

	var monthOptions = "";
	for ( var i = 0; i < 12; i++ ) {
		monthOptions += "<option value='" + (i+1) + "' ";
		if ( i+1 === opt.month) monthOptions += "selected";
		monthOptions += ">" + monthNames[i] + "</option>";
	}

	var popup = $( "<div data-role='popup' id='dateInput' data-theme='a'>" +
			"<div data-role='header' data-theme='b'>" +
				"<h1>" + opt.title + "</h1>" +
			"</div>" +
			"<div class='ui-content'>" +
				"<span>" +
					"<fieldset class='ui-grid-a incr'>" +
						"<div class='ui-block-a'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='plus' data-iconpos='bottom'></a>" +
						"</div>" +
					"</fieldset>" +
					"<div class='ui-grid-a inputs'>" +
						"<div class='ui-block-a'>" +
							"<select data-wrapper-class='pad_buttons' class='month'>" + monthOptions + "</select>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<input data-wrapper-class='pad_buttons' class='day' type='number' pattern='[0-9]*' value='" +
								opt.day + "'>" +
						"</div>" +
					"</div>" +
					"<fieldset class='ui-grid-a decr'>" +
						"<div class='ui-block-a'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" +
						"<div class='ui-block-b'>" +
							"<a href='#' data-role='button' data-mini='true' data-corners='true' data-icon='minus' data-iconpos='bottom'></a>" +
						"</div>" +
					"</fieldset>" +
				"</span>" +
				( opt.showBack ? "<button class='submit' data-theme='b'>" + _( "Submit" ) + "</button>" : "" ) +
			"</div>" +
		"</div>" ),
		changeValue = function( pos, dir ) {
			var val = getValue(),
			input = popup.find( ".inputs input, .inputs select" ).eq( pos );

			val[ pos ] += dir;
			if ( val[0] < 1 ) val[ 0 ] = 12;
			if ( val[0] > 12 ) val[ 0 ] = 1;
			if ( val[1] < 1 ) val[ 1 ] = 31;
			if ( val[1] > 31 ) val[ 1 ] = 1;

			input.val( val[pos] );
			if ( pos == 0 ) input.selectmenu('refresh', true);
		},
		getValue = function() {
			var month = parseInt( popup.find( "select.month" ).val() );
			var day = parseInt( popup.find( "input.day" ).val() );
			return [ month, day ];
		};

	popup.find( "button.submit" ).on( "click", function() {
		opt.callback( getValue() );
		popup.popup( "destroy" ).remove();
	} );

	popup.on( "focus", "input[type='number']", function( e ) {
		e.target.value = "";
	} ).on( "blur", "input[type='number']", function( e ) {
		var val = parseInt( e.target.value ) || 0;
		e.target.value = val;
	} );

	holdButton( popup.find( ".incr" ).children(), function( e ) {
		var button = $( e.currentTarget ),
			pos = button.index();

		if ( button.find( ".ui-disabled" ).length === 0 ) {
			changeValue( pos, 1 );
		}

		return false;
	} );

	holdButton( popup.find( ".decr" ).children(), function( e ) {
		var button = $( e.currentTarget ),
			pos = button.index();

		if ( button.find( ".ui-disabled" ).length === 0 ) {
			changeValue( pos, -1 );
		}

		return false;
	} );

	popup
	.css( "max-width", "350px" )
	.one( "popupafterclose", function() {
		if ( opt.incrementalUpdate ) {
			opt.callback( getValue() );
		}
	} );

	openPopup( popup );
}

function showHelpText( e ) {
	e.stopImmediatePropagation();

	var button = $( this ),
		text = button.data( "helptext" ),
		popup;

	popup = $( "<div data-role='popup' data-theme='a'>" +
		"<p>" + text + "</p>" +
	"</div>" );

	openPopup( popup, { positionTo: button } );

	return false;
}

$.fn.focusInput = function() {
	if ( this.get( 0 ).setSelectionRange ) {
		this.focus();
		this.get( 0 ).setSelectionRange( 0, this.val().length );
	} else if ( this.get( 0 ).createTextRange ) {
		var range = this.get( 0 ).createTextRange();
		range.collapse( true );
		range.moveEnd( "character", this.val().length );
		range.moveStart( "character", 0 );
		range.select();
	}

	return this;
};

Number.prototype.clamp = function( min, max ) {
	return Math.min( Math.max( this, min ), max );
};

function changePage( toPage, opts ) {
	opts = opts || {};
	if ( toPage.indexOf( "#" ) !== 0 ) {
		toPage = "#" + toPage;
	}

	// Close the panel before page transition to avoid bug in jQM 1.4+
	closePanel( function() {
		$.mobile.pageContainer.pagecontainer( "change", toPage, opts );
	} );
}

function openPopup( popup, args ) {
	args = $.extend( {}, {
		history: false,
		positionTo: "window",
		overlayTheme: "b"
	}, args );

	$.mobile.pageContainer.append( popup );

	popup.one( "popupafterclose", function() {
		popup.popup( "destroy" ).remove();
	} ).popup( args ).enhanceWithin();

	popup.popup( "open" );
}

function closePanel( callback ) {
	var panel = $( ".ui-panel-open" );
	if ( panel.length > 0 ) {
		panel.one( "panelclose", function() {
			callback();
		} );
		panel.panel( "close" );
		return;
	} else {
		callback();
	}
}

// Change persistent header
function changeHeader( opt ) {

	// Declare function defaults
	var defaults = {
			title: "",
			class: "",
			animate: true,
			leftBtn: {
				icon: "",
				class: "",
				text: "",
				on: function() {}
			},
			rightBtn: {
				icon: "",
				class: "",
				text: "",
				on: function() {}
			}
		},
		header = $( "#header" );

	// Merge defaults with supplied options
	opt = $.extend( true, {}, defaults, opt );

	// Change default page title to the logo
	if ( opt.title === "" && opt.class === "" ) {
		opt.class = "logo";
	}

	// Generate new header content
	var newHeader = $( "<button data-icon='" + opt.leftBtn.icon + "' " + ( opt.leftBtn.text === "" ? "data-iconpos='notext' " : "" ) +
				"class='ui-btn-left " + opt.leftBtn.class + "'>" + opt.leftBtn.text + "</button>" +
			"<h3 class='" + opt.class + "'>" + opt.title + " <span style='color:red'>UNOFFICIAL BUILD</span></h3>" +
			"<button data-icon='" + opt.rightBtn.icon + "' " + ( opt.rightBtn.text === "" ? "data-iconpos='notext' " : "" ) +
				"class='ui-btn-right " + opt.rightBtn.class + "'>" + opt.rightBtn.text + "</button>" ),
		speed = opt.animate ? "fast" : 0;

	// Fade out the header content, replace it, and update the header
	header.children().stop().fadeOut( speed, function() {
		header.html( newHeader ).toolbar( header.hasClass( "ui-header" ) ? "refresh" : null );
		header.find( ".ui-btn-left" ).on( "click", opt.leftBtn.on );
		header.find( ".ui-btn-right" ).on( "click", opt.rightBtn.on );
	} ).fadeIn( speed );

	return newHeader;
}

function getPageTop() {
	var theWindow = $.mobile.window;

	return {
		x: ( theWindow[ 0 ].innerWidth || theWindow.width() ) / 2 + theWindow.scrollLeft(),
		y: theWindow.scrollTop() + 22.5
	};
}

// Show loading indicator within element(s)
function showLoading( ele ) {
	ele = ( typeof ele === "string" ) ? $( ele ) : ele;
	ele.off( "click" ).html( "<p class='ui-icon ui-icon-loading mini-load'></p>" );

	var footer = ele.filter( "#footer-running" );
	if ( footer.length === 1 ) {
		footer.find( ".mini-load" ).addClass( "bottom" );
	}
}

function takePicture( callback ) {
	if ( typeof navigator.camera !== "object" || typeof navigator.camera.getPicture !== "function" ) {
		return;
	}

	navigator.camera.getPicture( callback, function() {}, {
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		allowEdit: true,
		targetWidth: 200,
		targetHeight: 200
	} );
}

function goHome( firstLoad ) {

	// Transition to home page after succesful load
	if ( $( ".ui-page-active" ).attr( "id" ) !== "sprinklers" ) {
		$.mobile.document.one( "pageshow", function() {

			// Allow future transitions to properly animate
			delete $.mobile.navigate.history.getActive().transition;
		} );

		var opts = {
			"reverse": true
		};

		if ( firstLoad === true ) {
			opts = {
				"firstLoad": true,
				"showLoading": false,
				"transition": "none"
			};
		}

		changePage( "#sprinklers", opts );
	}
}

function goBack() {
	var page = $( ".ui-page-active" );

	// Prevent back navigation during active page transition
	if ( page.length !== 1 ) {
		return;
	}

	page = page.attr( "id" );

	var managerStart = ( page === "site-control" && !isControllerConnected() ),
		popup = $( ".ui-popup-active" );

	if ( popup.length ) {
		popup.find( "[data-role='popup']" ).popup( "close" );
		return;
	}

	if ( page === "sprinklers" || page === "start" || managerStart ) {
		try {
			navigator.app.exitApp();
		} catch ( err ) {}
	} else {
		if ( isChromeApp || window.location.protocol === "file:" ) {
			var url = $.mobile.navigate.history.getPrev().url;

			if ( url.slice( 0, 1 ) !== "#" ) {
				return;
			}

			changePage( url, {
				reverse: true
			} );
			$.mobile.document.one( "pagehide", function() {
				$.mobile.navigate.history.activeIndex -= 2;
			} );
		} else {
			if ( pageHistoryCount > 0 ) {
				pageHistoryCount--;
			}

			if ( pageHistoryCount === 0 ) {
				navigator.app.exitApp();
			} else {
				goingBack = true;
				$.mobile.back();
			}

		}
	}
}

function checkChangesBeforeBack() {
	checkChanges( goBack );
}

function checkChanges( callback ) {
	var page = $( ".ui-page-active" ),
		changed = page.find( ".hasChanges" );

	callback = callback || function() {};

	if ( changed.length !== 0 ) {
		areYouSure( _( "Do you want to save your changes?" ), "", function() {
			changed.click();
			if ( !changed.hasClass( "preventBack" ) ) {
				callback();
			}
		}, callback );
		return false;
	} else {
		callback();
	}
}

// Show error message box
function showerror( msg, dur ) {
	dur = dur || 2500;

	clearTimeout( errorTimeout );

	$.mobile.loading( "show", {
		text: msg,
		textVisible: true,
		textonly: true,
		theme: "b"
	} );

	// Hide after provided delay
	errorTimeout = setTimeout( function() {$.mobile.loading( "hide" );}, dur );
}

function loadUnitSetting() {
	storage.get( "isMetric", function( data ) {

		// We are using a switch because the boolean gets stored as a string
		// and we don't want to impact the in-memory value of `isMetric` when
		// no value in local storage exists.
		switch ( data.isMetric ) {
			case "true":
				isMetric = true;
				break;
			case "false":
				isMetric = false;
				break;
			default:
		}
	} );
}

// Accessory functions
function fixInputClick( page ) {

	// Handle Fast Click quirks
	if ( !FastClick.notNeeded( document.body ) ) {
		page.find( "input[type='checkbox']:not([data-role='flipswitch']),.ui-select > .ui-btn" ).addClass( "needsclick" );
		page.find( ".ui-collapsible-heading-toggle" ).on( "click", function() {
			var heading = $( this );

			setTimeout( function() {
				heading.removeClass( "ui-btn-active" );
			}, 100 );
		} );
	}
}

// Bind buttons to allow push and hold effects
function holdButton( target, callback ) {
	var intervalId;

	target.on( isTouchCapable ? "tap" : "click", callback ).on( "taphold", function( e ) {
		intervalId = setInterval( function() {
			callback( e );
		}, 100 );
	} ).on( "vmouseup vmouseout vmousecancel touchend", function() {
		clearInterval( intervalId );
	} ).on( "touchmove", function( e ) {
		e.preventDefault();
	} );
}

// Insert style string into the DOM
function insertStyle( style ) {
	var a = document.createElement( "style" );
	a.innerHTML = style;
	document.head.appendChild( a );
}

// Convert all elements in array to integer
function parseIntArray( arr ) {
	for ( var i = 0; i < arr.length; i++ ) {arr[ i ] = +arr[ i ];}
	return arr;
}

function getDurationText( time ) {
	if ( time === 65535 ) {
		return _( "Sunset to Sunrise" );
	} else if ( time === 65534 ) {
		return _( "Sunrise to Sunset" );
	} else {
		return dhms2str( sec2dhms( time ) );
	}
}

// Convert seconds into (HH:)MM:SS format. HH is only reported if greater than 0.
function sec2hms( diff ) {
	var str = "";
	var hours = Math.max( 0, parseInt( diff / 3600 ) % 24 );
	var minutes = Math.max( 0, parseInt( diff / 60 ) % 60 );
	var seconds = diff % 60;
	if ( hours ) {
		str += pad( hours ) + ":";
	}
	return str + pad( minutes ) + ":" + pad( seconds );
}

// Convert seconds into array of days, hours, minutes and seconds.
function sec2dhms( diff ) {
	var isNegative = ( diff < 0 ) ? -1 : 1;
	diff = Math.abs( diff );
	return {
		"days": Math.max( 0, parseInt( diff / 86400 ) ) * isNegative,
		"hours": Math.max( 0, parseInt( diff % 86400 / 3600 ) ) * isNegative,
		"minutes": Math.max( 0, parseInt( ( diff % 86400 ) % 3600 / 60 ) ) * isNegative,
		"seconds": Math.max( 0, parseInt( ( diff % 86400 ) % 3600 % 60 ) ) * isNegative
	};
}

function dhms2str( arr ) {
	var str = "";
	if ( arr.days ) {
		str += arr.days + _( "d" ) + " ";
	}
	if ( arr.hours ) {
		str += arr.hours + _( "h" ) + " ";
	}
	if ( arr.minutes ) {
		str += arr.minutes + _( "m" ) + " ";
	}
	if ( arr.seconds ) {
		str += arr.seconds + _( "s" ) + " ";
	}
	if ( str === "" ) {
		str = "0" + _( "s" );
	}
	return str.trim();
}

// Convert days, hours, minutes and seconds array into seconds (int).
function dhms2sec( arr ) {
	return parseInt( ( arr.days * 86400 ) + ( arr.hours * 3600 ) + ( arr.minutes * 60 ) + arr.seconds );
}

function isControllerConnected() {
	if ( currIp === "" ||
		$.isEmptyObject( controller ) ||
		$.isEmptyObject( controller.options ) ||
		$.isEmptyObject( controller.programs ) ||
		$.isEmptyObject( controller.settings ) ||
		$.isEmptyObject( controller.status ) ||
		$.isEmptyObject( controller.stations ) ) {

			return false;
	}

	return true;
}

// Generate export link for JSON data
function exportObj( ele, obj, subject ) {
	obj = encodeURIComponent( JSON.stringify( obj ) );

	if ( isFileCapable ) {
		$( ele ).attr( {
			href: "data:text/json;charset=utf-8," + obj,
			download: "backup-" + new Date().toLocaleDateString().replace( /\//g, "-" ) + ".json"
		} );
	} else {
		subject = subject || "OpenSprinkler Data Export on " + dateToString( new Date() );
		var href = "mailto:?subject=" + encodeURIComponent( subject ) + "&body=" + obj;
		$( ele ).attr( "href", href ).on( "click", function() {
			window.open( href );
		} );
	}
}

function sortObj( obj, type ) {
	var tempArray = [];

	for ( var key in obj ) {
		if ( obj.hasOwnProperty( key ) ) {
			tempArray.push( key );
		}
	}

	if ( typeof type === "function" ) {
		tempArray.sort( type );
	} else if ( type === "value" ) {
		tempArray.sort( function( a, b ) {
			var x = obj[ a ];
			var y = obj[ b ];
			return ( ( x < y ) ? -1 : ( ( x > y ) ? 1 : 0 ) );
		} );
	} else {
		tempArray.sort();
	}

	var tempObj = {};

	for ( var i = 0; i < tempArray.length; i++ ) {
		tempObj[ tempArray[ i ] ] = obj[ tempArray[ i ] ];
	}

	return tempObj;
}

// Return day of the week
function getDayName( day, type ) {
	var ldays = [ _( "Sunday" ), _( "Monday" ), _( "Tuesday" ), _( "Wednesday" ), _( "Thursday" ), _( "Friday" ), _( "Saturday" ) ],
		sdays = [ _( "Sun" ), _( "Mon" ), _( "Tue" ), _( "Wed" ), _( "Thu" ), _( "Fri" ), _( "Sat" ) ];

	if ( type === "short" ) {
		return sdays[ day.getDay() ];
	} else {
		return ldays[ day.getDay() ];
	}
}

// Pad a single digit with a leading zero
function pad( number ) {
	var r = String( number );
	if ( r.length === 1 ) {
		r = "0" + r;
	}
	return r;
}

// Escape characters for HTML support
function htmlEscape( str ) {
	return String( str )
		.replace( /&/g, "&amp;" )
		.replace( /"/g, "&quot;" )
		.replace( /'/g, "&#39;" )
		.replace( /</g, "&lt;" )
		.replace( />/g, "&gt;" );
}

//Localization functions
function _( key ) {

	//Translate item (key) based on currently defined language
	if ( typeof language === "object" && language.hasOwnProperty( key ) ) {
		var trans = language[ key ];
		return trans ? trans : key;
	} else {

		//If English
		return key;
	}
}

function setLang() {

	//Update all static elements to the current language
	$( "[data-translate]" ).text( function() {
		var el = $( this ),
			txt = el.data( "translate" );

		if ( el.is( "input[type='submit']" ) ) {
			el.val( _( txt ) );

			// Update button for jQuery Mobile
			if ( el.parent( "div.ui-btn" ).length > 0 ) {
				el.button( "refresh" );
			}
		} else {
			return _( txt );
		}
	} );
	$( ".ui-toolbar-back-btn" ).text( _( "Back" ) );

	checkCurrLang();
}

function updateLang( lang ) {

	//Empty out the current language (English is provided as the key)
	language = {};

	if ( typeof lang === "undefined" ) {
		storage.get( "lang", function( data ) {

			//Identify the current browser's locale
			var locale = data.lang || navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "en";

			updateLang( locale.substring( 0, 2 ) );
		} );
		return;
	}

	storage.set( { "lang":lang } );
	currLang = lang;

	if ( lang === "en" ) {
		setLang();
		return;
	}

	$.getJSON( getAppURLPath() + "locale/" + lang + ".js", function( store ) {
		language = store.messages;
		setLang();
	} ).fail( setLang );
}

function languageSelect() {
	$( "#localization" ).popup( "destroy" ).remove();

	/*
		Commented list of languages used by the string parser to identify strings for translation

		{af: _("Afrikaans"), am: _("Amharic"), zh: _("Chinese"), hr: _("Croatian"), cs: _("Czech"), et: _("Estonian")
		nl: _("Dutch"), en: _("English"), pes: _("Farsi"), fr: _("French"), de: _("German"), bg: _("Bulgarian"),
		el: _("Greek"), he: _("Hebrew"), hu: _("Hungarian"), is: _("Icelandic"), it: _("Italian"), lv: _("Latvian"),
		mn: _("Mongolian"), no: _("Norwegian"), pl: _("Polish"), pt: _("Portuguese"), ru: _("Russian"), ta: _("Tamil"),
		sk: _("Slovak"), sl: _("Slovenian"), es: _("Spanish"), th: _("Thai"), tr: _("Turkish"), sv: _("Swedish"), ro: _("Romanian")}
	*/

	var popup = "<div data-role='popup' data-theme='a' id='localization' data-corners='false'>" +
				"<ul data-inset='true' data-role='listview' id='lang' data-corners='false'>" +
				"<li data-role='list-divider' data-theme='b' class='center' data-translate='Localization'>" + _( "Localization" ) + "</li>",

		codes = { af: "Afrikaans", am: "Amharic", bg: "Bulgarian", zh: "Chinese", hr: "Croatian", cs: "Czech", nl: "Dutch",
				en: "English", et: "Estonian", pes: "Farsi", fr: "French", de: "German", el: "Greek", he: "Hebrew", hu: "Hungarian",
				is: "Icelandic", it: "Italian", lv: "Latvian", mn: "Mongolian", no: "Norwegian", pl: "Polish", pt: "Portuguese",
				ru: "Russian", sk: "Slovak", sl: "Slovenian", es: "Spanish", ta: "Tamil", th: "Thai", tr: "Turkish", sv: "Swedish", ro: "Romanian" };

	$.each( codes, function( key, name ) {
		popup += "<li><a href='#' data-lang-code='" + key + "'><span data-translate='" + name + "'>" + _( name ) + "</span> (" + key.toUpperCase() + ")</a></li>";
	} );

	popup += "</ul></div>";

	popup = $( popup );

	popup.find( "a" ).on( "click", function() {
		var link = $( this ),
			lang = link.data( "lang-code" );

		updateLang( lang );
	} );

	openPopup( popup );

	return false;
}

function checkCurrLang() {
	storage.get( "lang", function( data ) {
		var popup = $( "#localization" );

		popup.find( "a" ).each( function() {
			var item = $( this );
			if ( item.data( "lang-code" ) === data.lang ) {
				item.removeClass( "ui-icon-carat-r" ).addClass( "ui-icon-check" );
			} else {
				item.removeClass( "ui-icon-check" ).addClass( "ui-icon-carat-r" );
			}
		} );

		popup.find( "li.ui-last-child" ).removeClass( "ui-last-child" );
	} );
}

function getAppURLPath() {
	return currLocal ? $.mobile.path.parseUrl( $( "head" ).find( "script[src$='app.js']" ).attr( "src" ) ).hrefNoHash.slice( 0, -9 ) : "";
}

function getUrlVars( url ) {
	var hash,
		json = {},
		hashes = url.slice( url.indexOf( "?" ) + 1 ).split( "&" );

	for ( var i = 0; i < hashes.length; i++ ) {
		hash = hashes[ i ].split( "=" );
		json[ hash[ 0 ] ] = decodeURIComponent( hash[ 1 ].replace( /\+/g, "%20" ) );
	}
	return json;
}

function escapeJSON( json ) {
	return JSON.stringify( json ).replace( /\{|\}/g, "" );
}

function unescapeJSON( string ) {
	return JSON.parse( "{" + string + "}" );
}

function isMD5( pass ) {
	return /^[a-f0-9]{32}$/i.test( pass );
}

function sortByStation( a, b ) {
	if ( a.station < b.station ) {
		return -1;
	} else if ( a.station > b.station ) {
		return 1;
	} else {
		return 0;
	}
}

function minutesToTime( minutes ) {
	var period = minutes > 719 ? "PM" : "AM",
		hour = parseInt( minutes / 60 ) % 12;

	if ( hour === 0 ) {
		hour = 12;
	}

	return isMetric ? ( pad( ( minutes / 60 >> 0 ) % 24 ) + ":" + pad( minutes % 60 ) ) : ( hour + ":" + pad( minutes % 60 ) + " " + period );
}

function getBitFromByte( byte, bit ) {
	return ( byte & ( 1 << bit ) ) !== 0;
}

function getTimezoneOffset() {
	var tz = controller.options.tz - 48,
		sign = tz >= 0 ? 1 : -1;

	tz = ( ( Math.abs( tz ) / 4 >> 0 ) * 60 ) + ( ( Math.abs( tz ) % 4 ) * 15 / 10 >> 0 ) + ( ( Math.abs( tz ) % 4 ) * 15 % 10 );
	return tz * sign;
}

// Credit Stacktrace
// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site/23259289#23259289
function humaniseDuration( base, relative ) {
	var seconds = Math.floor( ( relative - base ) / 1000 ),
		isFuture = ( seconds > 0 ) ? true : false,
		intervalType;

	seconds = Math.abs( seconds );
	if ( seconds < 10 ) {
		return _( "Just Now" );
	}

	var interval = Math.floor( seconds / 31536000 );
	if ( interval >= 1 ) {
		intervalType = ( interval > 1 ) ? _( "years" ) : _( "year" );
	} else {
		interval = Math.floor( seconds / 2592000 );
		if ( interval >= 1 ) {
			intervalType = ( interval > 1 ) ? _( "months" ) : _( "month" );
		} else {
			interval = Math.floor( seconds / 86400 );
			if ( interval >= 1 ) {
				intervalType = ( interval > 1 ) ? _( "days" ) : _( "day" );
			} else {
				interval = Math.floor( seconds / 3600 );
				if ( interval >= 1 ) {
					intervalType = ( interval > 1 ) ? _( "hours" ) : _( "hour" );
				} else {
					interval = Math.floor( seconds / 60 );
					if ( interval >= 1 ) {
						intervalType = ( interval > 1 ) ? _( "minutes" ) : _( "minute" );
					} else {
						interval = seconds;
						intervalType = ( interval > 1 ) ? _( "seconds" ) : _( "second" );
					}
				}
			}
		}
	}

	if ( isFuture ) {
		return _( "In" ) + " " + interval + " " + intervalType;
	} else {
		return interval + " " + intervalType + " " + _( "ago" );
	}
}

function dateToString( date, toUTC, shorten ) {
	var dayNames = [ _( "Sun" ), _( "Mon" ), _( "Tue" ),
					_( "Wed" ), _( "Thu" ), _( "Fri" ), _( "Sat" ) ],
		monthNames = [ _( "Jan" ), _( "Feb" ), _( "Mar" ), _( "Apr" ), _( "May" ), _( "Jun" ),
					_( "Jul" ), _( "Aug" ), _( "Sep" ), _( "Oct" ), _( "Nov" ), _( "Dec" ) ];

	if ( date.getTime() === 0 ) {
		return "--";
	}

	if ( toUTC !== false ) {
		date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
	}

	if ( currLang === "de" ) {
		return pad( date.getDate() ) + "." + pad( date.getMonth() + 1 ) + "." +
				date.getFullYear() + " " + pad( date.getHours() ) + ":" +
				pad( date.getMinutes() ) + ":" + pad( date.getSeconds() );
	} else {
		if ( shorten === 1 ) {
			return monthNames[ date.getMonth() ] + " " + pad( date.getDate() ) + ", " +
					date.getFullYear() + " " + pad( date.getHours() ) + ":" +
					pad( date.getMinutes() ) + ":" + pad( date.getSeconds() );
		} else if ( shorten === 2 ) {
			return monthNames[ date.getMonth() ] + " " + pad( date.getDate() ) + ", " +
					pad( date.getHours() ) + ":" + pad( date.getMinutes() ) + ":" +
					pad( date.getSeconds() );
		} else {
			return dayNames[ date.getDay() ] + ", " + pad( date.getDate() ) + " " +
					monthNames[ date.getMonth() ] + " " + date.getFullYear() + " " +
					pad( date.getHours() ) + ":" + pad( date.getMinutes() ) + ":" +
					pad( date.getSeconds() );
		}
	}
}

// Transform keys to JSON names for 2.1.9+
function transformKeys( opt ) {
	if ( checkOSVersion( 219 ) ) {
		var renamedOpt = {};
		Object.keys( opt ).forEach( function( item ) {
			var name = item.match( /^o(\d+)$/ );

			if ( name && name[ 1 ] ) {
				renamedOpt[ Object.keys( keyIndex ).find( function( index ) { return keyIndex[ index ] === parseInt( name[ 1 ], 10 ); } ) ] = opt[ item ];
			} else {
				renamedOpt[ item ] = opt[ item ];
			}
		} );

		return renamedOpt;
	}

	return opt;
}

function transformKeysinString( co ) {
	var opt = {};
	co.split( "&" ).forEach( function( item ) {
		item = item.split( "=" );
		opt[ item[ 0 ] ] = item[ 1 ];
	} );
	opt = transformKeys( opt );
	var arr = [];
	Object.keys( opt ).forEach( function( key ) { arr.push( key + "=" + opt[ key ] ); } );
	co = arr.join( "&" );
	return co;
}
/*! jQuery.ajaxRetry v0.1.3 | (c) 2013 Daniel Herman | opensource.org/licenses/MIT | https://github.com/dcherman/jQuery.ajaxRetry */
!function(a){"use strict";function b(a){return a.state?"pending"!==a.state():a.isResolved()||a.isRejected()}var c="__RETRY__"+(new Date).getTime();a.ajaxPrefilter(function(d,e,f){if(!d[c]&&"undefined"!=typeof d.shouldRetry){e[c]=!0;var g,h,i=a.Deferred(),j=a.Deferred(),k={},l=0,m=function(b,c,e){var f,g=d.shouldRetry,h=typeof g;switch(h){case"number":f=g>c;break;case"boolean":f=g;break;case"function":f=g(b,c,e)}return"object"==typeof f&&"function"==typeof f.then?a.Deferred(function(a){f.then(a.resolve,function(){a.resolve(!1)})}).promise():a.when(f)};g=a.extend({},e,{success:a.noop,error:a.noop,complete:a.noop,statusCode:{}}),function n(b,c,d){(c?m(c,l++,b.type||"GET"):a.when(!0)).done(function(e){e===!0?(c?a.ajax(b):f).then(function(a,b,c){h=c.status,i.resolveWith(this,arguments),i.done(k[h]),j.resolveWith(this,[c,b])},function(a,c){var d=arguments,e=this;n(b,a,function(){h=a.status,i.rejectWith(e,d),i.fail(k[h]),j.resolveWith(e,[a,c])})}):d()})}(g),f.complete&&(f.complete=j.done,f.success=i.done,f.error=i.fail),a.extend(f,i.promise()),f.statusCode=function(a){var c;if(a)if(b(i))i.then(a[h],a[h]);else for(c in a)k[c]=[k[c],a[c]];return this}}})}(jQuery);

/*
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.6
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
!function(){"use strict";function t(e,o){var i;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,c=0,s=r.length;c<s;c++)a[r[c]]=u(a[r[c]],a);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(i=e.onclick,e.addEventListener("click",function(t){i(t)},!1),e.onclick=null)}function u(t,e){return function(){return t.apply(e,arguments)}}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type&&"email"!==t.type?(e=t.value.length,t.focus(),t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r,a;if(t.timeStamp<0?(a=(new Date).getTime(),this.isTrackingClickStartFromEvent=!1):(a=t.timeStamp,this.isTrackingClickStartFromEvent=!0),t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if((r=window.getSelection()).rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=a,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,a-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},t.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l,h=this.targetElement;if(l=this.isTrackingClickStartFromEvent?t.timeStamp:(new Date).getTime(),!this.trackingClick)return!0;if(l-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(l-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=l,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],(h=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||h).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(c=h.tagName.toLowerCase())){if(e=this.findControl(h)){if(this.focus(h),n)return!1;h=e}}else if(this.needsFocus(h))return l-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(h),this.sendClick(h,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return!(!o||i||!(s=h.fastClickScrollParent)||s.fastClickLastScrollTop===s.scrollTop)||(this.needsClick(h)||(t.preventDefault(),this.sendClick(h,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i;if(void 0===window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]"))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();

/*

 Licensed under the Apache License, Version 2.0 (the "License"); you may not
 use this file except in compliance with the License. You may obtain a copy
 of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 License for the specific language governing permissions and limitations under
 the License.

 Copyright (c) 2011-2014 Almende B.V.

 @author  Jos de Jong, <jos@almende.org>
 @date    2014-05-16
 @version 2.8.0
*/
"undefined"==typeof links&&(links={}),"undefined"==typeof google&&(google=void 0),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return t;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var i=0,n=this.length;n>i;++i)e.call(t||this,this[i],i,this)}),links.Timeline=function(e,t){if(e){this.dom={},this.conversion={},this.eventParams={},this.groups=[],this.groupIndexes={},this.items=[],this.renderQueue={show:[],hide:[],update:[]},this.renderedItems=[],this.clusterGenerator=new links.Timeline.ClusterGenerator(this),this.currentClusters=[],this.selection=void 0,this.listeners={},this.size={actualHeight:0,axis:{characterMajorHeight:0,characterMajorWidth:0,characterMinorHeight:0,characterMinorWidth:0,height:0,labelMajorTop:0,labelMinorTop:0,line:0,lineMajorWidth:0,lineMinorHeight:0,lineMinorTop:0,lineMinorWidth:0,top:0},contentHeight:0,contentLeft:0,contentWidth:0,frameHeight:0,frameWidth:0,groupsLeft:0,groupsWidth:0,items:{top:0}},this.dom.container=e,this.options={width:"100%",height:"auto",minHeight:0,groupMinHeight:0,autoHeight:!0,eventMargin:10,eventMarginAxis:20,dragAreaWidth:10,min:void 0,max:void 0,zoomMin:10,zoomMax:31536e10,moveable:!0,zoomable:!0,selectable:!0,unselectable:!0,editable:!1,snapEvents:!0,groupChangeable:!0,timeChangeable:!0,showCurrentTime:!0,showCustomTime:!1,showMajorLabels:!0,showMinorLabels:!0,showNavigation:!1,showButtonNew:!1,groupsOnRight:!1,groupsOrder:!0,axisOnTop:!1,stackEvents:!0,animate:!0,animateZoom:!0,cluster:!1,clusterMaxItems:5,style:"box",customStackOrder:!1,locale:"en",MONTHS:["January","February","March","April","May","June","July","August","September","October","November","December"],MONTHS_SHORT:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],DAYS:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],DAYS_SHORT:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ZOOM_IN:"Zoom in",ZOOM_OUT:"Zoom out",MOVE_LEFT:"Move left",MOVE_RIGHT:"Move right",NEW:"New",CREATE_NEW_EVENT:"Create new event"},this.setOptions(t),this.clientTimeOffset=0;for(var i=this.dom;i.container.hasChildNodes();)i.container.removeChild(i.container.firstChild);this.step=new links.Timeline.StepDate,this.itemTypes={box:links.Timeline.ItemBox,range:links.Timeline.ItemRange,floatingRange:links.Timeline.ItemFloatingRange,dot:links.Timeline.ItemDot},this.data=[],this.firstDraw=!0,this.setVisibleChartRange(void 0,void 0,!1),this.render();var n=this;setTimeout(function(){n.trigger("ready")},0)}},links.Timeline.prototype.draw=function(e,t){t&&console.log("WARNING: Passing options in draw() is deprecated. Pass options to the constructur or use setOptions() instead!"),this.setOptions(t),this.options.selectable&&links.Timeline.addClassName(this.dom.frame,"timeline-selectable"),this.setData(e),t&&(t.start||t.end)?this.setVisibleChartRange(t.start,t.end):this.firstDraw&&this.setVisibleChartRangeAuto(),this.firstDraw=!1},links.Timeline.prototype.setOptions=function(e){if(e){for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t]);if("undefined"!=typeof links.locales&&"en"!==this.options.locale){var i=links.locales[this.options.locale];if(i)for(var n in i)i.hasOwnProperty(n)&&(this.options[n]=i[n])}void 0!=e.showButtonAdd&&(this.options.showButtonNew=e.showButtonAdd,console.log("WARNING: Option showButtonAdd is deprecated. Use showButtonNew instead")),void 0!=e.intervalMin&&(this.options.zoomMin=e.intervalMin,console.log("WARNING: Option intervalMin is deprecated. Use zoomMin instead")),void 0!=e.intervalMax&&(this.options.zoomMax=e.intervalMax,console.log("WARNING: Option intervalMax is deprecated. Use zoomMax instead")),e.scale&&e.step&&this.step.setScale(e.scale,e.step)}this.options.autoHeight="auto"===this.options.height},links.Timeline.prototype.getOptions=function(){return this.options},links.Timeline.prototype.addItemType=function(e,t){this.itemTypes[e]=t},links.Timeline.mapColumnIds=function(e){for(var t={},i=e.getNumberOfColumns(),n=!0,s=0;i>s;s++){var o=e.getColumnId(s)||e.getColumnLabel(s);t[o]=s,("start"==o||"end"==o||"content"==o||"group"==o||"className"==o||"editable"==o||"type"==o)&&(n=!1)}return n&&(t.start=0,t.end=1,t.content=2,i>3&&(t.group=3),i>4&&(t.className=4),i>5&&(t.editable=5),i>6&&(t.type=6)),t},links.Timeline.prototype.setData=function(e){this.unselectItem(),e||(e=[]),this.stackCancelAnimation(),this.clearItems(),this.data=e;var t=this.items;if(this.deleteGroups(),google&&google.visualization&&e instanceof google.visualization.DataTable)for(var i=links.Timeline.mapColumnIds(e),n=0,s=e.getNumberOfRows();s>n;n++)t.push(this.createItem({start:void 0!=i.start?e.getValue(n,i.start):void 0,end:void 0!=i.end?e.getValue(n,i.end):void 0,content:void 0!=i.content?e.getValue(n,i.content):void 0,group:void 0!=i.group?e.getValue(n,i.group):void 0,className:void 0!=i.className?e.getValue(n,i.className):void 0,editable:void 0!=i.editable?e.getValue(n,i.editable):void 0,type:void 0!=i.type?e.getValue(n,i.type):void 0}));else{if(!links.Timeline.isArray(e))throw"Unknown data type. DataTable or Array expected.";for(var n=0,s=e.length;s>n;n++){var o=e[n],a=this.createItem(o);t.push(a)}}this.options.cluster&&this.clusterGenerator.setData(this.items),this.render({animate:!1})},links.Timeline.prototype.getData=function(){return this.data},links.Timeline.prototype.updateData=function(e,t){var i,n=this.data;if(google&&google.visualization&&n instanceof google.visualization.DataTable){var s=e+1-n.getNumberOfRows();s>0&&n.addRows(s);var o=links.Timeline.mapColumnIds(n);for(i in t)if(t.hasOwnProperty(i)){var a=o[i];if(void 0==a){var r=t[i],l="string";"number"==typeof r?l="number":"boolean"==typeof r?l="boolean":r instanceof Date&&(l="datetime"),a=n.addColumn(l,i)}n.setValue(e,a,t[i])}}else{if(!links.Timeline.isArray(n))throw"Cannot update data, unknown type of data";var h=n[e];void 0==h&&(h={},n[e]=h);for(i in t)t.hasOwnProperty(i)&&(h[i]=t[i])}},links.Timeline.prototype.getItemIndex=function(e){for(var t=e,i=this.dom,n=i.items.frame,s=this.items,o=void 0;t.parentNode&&t.parentNode!==n;)t=t.parentNode;if(t.parentNode===n)for(var a=0,r=s.length;r>a;a++)if(s[a].dom===t){o=a;break}return o},links.Timeline.prototype.getClusterIndex=function(e){var t=e,i=this.dom,n=i.items.frame,s=this.clusters,o=void 0;if(this.clusters){for(;t.parentNode&&t.parentNode!==n;)t=t.parentNode;if(t.parentNode===n)for(var a=0,r=s.length;r>a;a++)if(s[a].dom===t){o=a;break}}return o},links.Timeline.prototype.getVisibleItems=function(e,t){var i=this.items,n=[];if(i)for(var s=0,o=i.length;o>s;s++){var a=i[s];a.end?e<=a.start&&a.end<=t&&n.push({row:s}):e<=a.start&&a.start<=t&&n.push({row:s})}return n},links.Timeline.prototype.setSize=function(e,t){e&&(this.options.width=e,this.dom.frame.style.width=e),t&&(this.options.height=t,this.options.autoHeight="auto"===this.options.height,"auto"!==t&&(this.dom.frame.style.height=t)),this.render({animate:!1})},links.Timeline.prototype.setVisibleChartRange=function(e,t,i){var n={};e&&t||(n=this.getDataRange(!0)),e||(t?n.min&&n.min.valueOf()<t.valueOf()?e=n.min:(e=new Date(t.valueOf()),e.setDate(e.getDate()-7)):(e=new Date,e.setDate(e.getDate()-3))),t||(n.max?t=n.max:(t=new Date(e.valueOf()),t.setDate(t.getDate()+7))),e>=t&&(t=new Date(e.valueOf()),t.setDate(t.getDate()+7));var s=this.options.min?this.options.min:void 0;void 0!=s&&e.valueOf()<s.valueOf()&&(e=new Date(s.valueOf()));var o=this.options.max?this.options.max:void 0;void 0!=o&&t.valueOf()>o.valueOf()&&(t=new Date(o.valueOf())),this.applyRange(e,t),void 0==i||1==i?this.render({animate:!1}):this.recalcConversion()},links.Timeline.prototype.setVisibleChartRangeAuto=function(){var e=this.getDataRange(!0);this.setVisibleChartRange(e.min,e.max)},links.Timeline.prototype.setVisibleChartRangeNow=function(){var e=new Date,t=this.end.valueOf()-this.start.valueOf(),i=new Date(e.valueOf()-t/2),n=new Date(i.valueOf()+t);this.setVisibleChartRange(i,n)},links.Timeline.prototype.getVisibleChartRange=function(){return{start:new Date(this.start.valueOf()),end:new Date(this.end.valueOf())}},links.Timeline.prototype.getDataRange=function(e){var t=this.items,i=void 0,n=void 0;if(t)for(var s=0,o=t.length;o>s;s++){var a=t[s],r=void 0!=a.start?a.start.valueOf():void 0,l=void 0!=a.end?a.end.valueOf():r;void 0!=r&&(i=void 0!=i?Math.min(i.valueOf(),r.valueOf()):r),void 0!=l&&(n=void 0!=n?Math.max(n.valueOf(),l.valueOf()):l)}if(i&&n&&e){var h=n-i;i-=.05*h,n+=.05*h}return{min:void 0!=i?new Date(i):void 0,max:void 0!=n?new Date(n):void 0}},links.Timeline.prototype.render=function(e){var t=(this.reflowFrame(),this.reflowAxis(),this.reflowGroups(),this.reflowItems(),this.options.animate);e&&void 0!=e.animate&&(t=e.animate),this.recalcConversion(),this.clusterItems(),this.filterItems(),this.stackItems(t),this.recalcItems();var i=this.repaint();if(i){var n=e?e.renderTimesLeft:void 0;void 0==n&&(n=5),n>0&&this.render({animate:e?e.animate:void 0,renderTimesLeft:n-1})}},links.Timeline.prototype.repaint=function(){var e=this.repaintFrame(),t=this.repaintAxis(),i=this.repaintGroups(),n=this.repaintItems();return this.repaintCurrentTime(),this.repaintCustomTime(),e||t||i||n},links.Timeline.prototype.reflowFrame=function(){var e=this.dom,t=(this.options,this.size),i=!1,n=e.frame?e.frame.offsetWidth:0,s=e.frame?e.frame.clientHeight:0;return i=i||t.frameWidth!==n,i=i||t.frameHeight!==s,t.frameWidth=n,t.frameHeight=s,i},links.Timeline.prototype.repaintFrame=function(){var e=!1,t=this.dom,i=this.options,n=this.size;t.frame||(t.frame=document.createElement("DIV"),t.frame.className="timeline-frame ui-widget ui-widget-content ui-corner-all",t.container.appendChild(t.frame),e=!0);var s=i.autoHeight?n.actualHeight+"px":i.height||"100%",o=i.width||"100%";if(e=e||t.frame.style.height!=s,e=e||t.frame.style.width!=o,t.frame.style.height=s,t.frame.style.width=o,!t.content){t.content=document.createElement("DIV"),t.content.className="timeline-content",t.frame.appendChild(t.content);var a=document.createElement("DIV");a.style.position="absolute",a.style.left="0px",a.style.top="0px",a.style.height="100%",a.style.width="0px",t.content.appendChild(a),t.contentTimelines=a;var r=this.eventParams,l=this;r.onMouseDown||(r.onMouseDown=function(e){l.onMouseDown(e)},links.Timeline.addEventListener(t.content,"mousedown",r.onMouseDown)),r.onTouchStart||(r.onTouchStart=function(e){l.onTouchStart(e)},links.Timeline.addEventListener(t.content,"touchstart",r.onTouchStart)),r.onMouseWheel||(r.onMouseWheel=function(e){l.onMouseWheel(e)},links.Timeline.addEventListener(t.content,"mousewheel",r.onMouseWheel)),r.onDblClick||(r.onDblClick=function(e){l.onDblClick(e)},links.Timeline.addEventListener(t.content,"dblclick",r.onDblClick)),e=!0}return t.content.style.left=n.contentLeft+"px",t.content.style.top="0px",t.content.style.width=n.contentWidth+"px",t.content.style.height=n.frameHeight+"px",this.repaintNavigation(),e},links.Timeline.prototype.reflowAxis=function(){var e=!1,t=this.dom,i=this.options,n=this.size,s=t.axis,o=s&&s.characterMinor?s.characterMinor.clientWidth:0,a=s&&s.characterMinor?s.characterMinor.clientHeight:0,r=s&&s.characterMajor?s.characterMajor.clientWidth:0,l=s&&s.characterMajor?s.characterMajor.clientHeight:0,h=(i.showMinorLabels?a:0)+(i.showMajorLabels?l:0),m=i.axisOnTop?0:n.frameHeight-h,p=i.axisOnTop?h:m;e=e||n.axis.top!==m,e=e||n.axis.line!==p,e=e||n.axis.height!==h,n.axis.top=m,n.axis.line=p,n.axis.height=h,n.axis.labelMajorTop=i.axisOnTop?0:p+(i.showMinorLabels?a:0),n.axis.labelMinorTop=i.axisOnTop?i.showMajorLabels?l:0:p,n.axis.lineMinorTop=i.axisOnTop?n.axis.labelMinorTop:0,n.axis.lineMinorHeight=i.showMajorLabels?n.frameHeight-l:n.frameHeight,n.axis.lineMinorWidth=s&&s.minorLines&&s.minorLines.length?s.minorLines[0].offsetWidth:1,n.axis.lineMajorWidth=s&&s.majorLines&&s.majorLines.length?s.majorLines[0].offsetWidth:1,e=e||n.axis.characterMinorWidth!==o,e=e||n.axis.characterMinorHeight!==a,e=e||n.axis.characterMajorWidth!==r,e=e||n.axis.characterMajorHeight!==l,n.axis.characterMinorWidth=o,n.axis.characterMinorHeight=a,n.axis.characterMajorWidth=r,n.axis.characterMajorHeight=l;var u=Math.max(n.frameHeight-h,0);return n.contentLeft=i.groupsOnRight?0:n.groupsWidth,n.contentWidth=Math.max(n.frameWidth-n.groupsWidth,0),n.contentHeight=u,e},links.Timeline.prototype.repaintAxis=function(){var e=!1,t=this.dom,i=this.options,n=this.size,s=this.step,o=t.axis;o||(o={},t.axis=o),n.axis.properties||(n.axis.properties={}),o.minorTexts||(o.minorTexts=[]),o.minorLines||(o.minorLines=[]),o.majorTexts||(o.majorTexts=[]),o.majorLines||(o.majorLines=[]),o.frame||(o.frame=document.createElement("DIV"),o.frame.style.position="absolute",o.frame.style.left="0px",o.frame.style.top="0px",t.content.appendChild(o.frame)),t.content.removeChild(o.frame),o.frame.style.width=n.contentWidth+"px",o.frame.style.height=n.axis.height+"px";var a=this.screenToTime(0),r=this.screenToTime(n.contentWidth);n.axis.characterMinorWidth&&(this.minimumStep=this.screenToTime(6*n.axis.characterMinorWidth)-this.screenToTime(0),s.setRange(a,r,this.minimumStep));var l=this.repaintAxisCharacters();e=e||l,this.repaintAxisStartOverwriting(),s.start();for(var h=void 0,m=0;!s.end()&&1e3>m;){m++;var p=s.getCurrent(),u=this.timeToScreen(p),d=s.isMajor();i.showMinorLabels&&this.repaintAxisMinorText(u,s.getLabelMinor(i)),d&&i.showMajorLabels?(u>0&&(void 0==h&&(h=u),this.repaintAxisMajorText(u,s.getLabelMajor(i))),this.repaintAxisMajorLine(u)):this.repaintAxisMinorLine(u),s.next()}if(i.showMajorLabels){var c=this.screenToTime(0),g=this.step.getLabelMajor(i,c),f=g.length*n.axis.characterMajorWidth+10;(void 0==h||h>f)&&this.repaintAxisMajorText(0,g,c)}return this.repaintAxisEndOverwriting(),this.repaintAxisHorizontal(),t.content.insertBefore(o.frame,t.content.firstChild),e},links.Timeline.prototype.repaintAxisCharacters=function(){var e,t=!1,i=this.dom,n=i.axis;if(!n.characterMinor){e=document.createTextNode("0");var s=document.createElement("DIV");s.className="timeline-axis-text timeline-axis-text-minor",s.appendChild(e),s.style.position="absolute",s.style.visibility="hidden",s.style.paddingLeft="0px",s.style.paddingRight="0px",n.frame.appendChild(s),n.characterMinor=s,t=!0}if(!n.characterMajor){e=document.createTextNode("0");var o=document.createElement("DIV");o.className="timeline-axis-text timeline-axis-text-major",o.appendChild(e),o.style.position="absolute",o.style.visibility="hidden",o.style.paddingLeft="0px",o.style.paddingRight="0px",n.frame.appendChild(o),n.characterMajor=o,t=!0}return t},links.Timeline.prototype.repaintAxisStartOverwriting=function(){var e=this.size.axis.properties;e.minorTextNum=0,e.minorLineNum=0,e.majorTextNum=0,e.majorLineNum=0},links.Timeline.prototype.repaintAxisEndOverwriting=function(){var e,t=this.dom,i=this.size.axis.properties,n=this.dom.axis.frame,s=t.axis.minorTexts;for(e=i.minorTextNum;s.length>e;){var o=s[e];n.removeChild(o),s.splice(e,1)}var a=t.axis.minorLines;for(e=i.minorLineNum;a.length>e;){var r=a[e];n.removeChild(r),a.splice(e,1)}var l=t.axis.majorTexts;for(e=i.majorTextNum;l.length>e;){var h=l[e];n.removeChild(h),l.splice(e,1)}var m=t.axis.majorLines;for(e=i.majorLineNum;m.length>e;){var p=m[e];n.removeChild(p),m.splice(e,1)}},links.Timeline.prototype.repaintAxisHorizontal=function(){var e=this.dom.axis,t=this.size,i=this.options,n=i.showMinorLabels||i.showMajorLabels;if(n){if(!e.backgroundLine){var s=document.createElement("DIV");s.className="timeline-axis",s.style.position="absolute",s.style.left="0px",s.style.width="100%",s.style.border="none",e.frame.insertBefore(s,e.frame.firstChild),e.backgroundLine=s}e.backgroundLine&&(e.backgroundLine.style.top=t.axis.top+"px",e.backgroundLine.style.height=t.axis.height+"px")}else e.backgroundLine&&(e.frame.removeChild(e.backgroundLine),delete e.backgroundLine);if(n){if(e.line){var o=e.frame.removeChild(e.line);e.frame.appendChild(o)}else{var o=document.createElement("DIV");o.className="timeline-axis",o.style.position="absolute",o.style.left="0px",o.style.width="100%",o.style.height="0px",e.frame.appendChild(o),e.line=o}e.line.style.top=t.axis.line+"px"}else e.line&&e.line.parentElement&&(e.frame.removeChild(e.line),delete e.line)},links.Timeline.prototype.repaintAxisMinorText=function(e,t){var i,n=this.size,s=this.dom,o=n.axis.properties,a=s.axis.frame,r=s.axis.minorTexts,l=o.minorTextNum;if(l<r.length)i=r[l];else{var h=document.createTextNode("");i=document.createElement("DIV"),i.appendChild(h),i.className="timeline-axis-text timeline-axis-text-minor",i.style.position="absolute",a.appendChild(i),r.push(i)}i.childNodes[0].nodeValue=t,i.style.left=e+"px",i.style.top=n.axis.labelMinorTop+"px",o.minorTextNum++},links.Timeline.prototype.repaintAxisMinorLine=function(e){var t,i=this.size.axis,n=this.dom,s=i.properties,o=n.axis.frame,a=n.axis.minorLines,r=s.minorLineNum;r<a.length?t=a[r]:(t=document.createElement("DIV"),t.className="timeline-axis-grid timeline-axis-grid-minor",t.style.position="absolute",t.style.width="0px",o.appendChild(t),a.push(t)),t.style.top=i.lineMinorTop+"px",t.style.height=i.lineMinorHeight+"px",t.style.left=e-i.lineMinorWidth/2+"px",s.minorLineNum++},links.Timeline.prototype.repaintAxisMajorText=function(e,t){var i,n=this.size,s=n.axis.properties,o=this.dom.axis.frame,a=this.dom.axis.majorTexts,r=s.majorTextNum;if(r<a.length)i=a[r];else{var l=document.createTextNode(t);i=document.createElement("DIV"),i.className="timeline-axis-text timeline-axis-text-major",i.appendChild(l),i.style.position="absolute",i.style.top="0px",o.appendChild(i),a.push(i)}i.childNodes[0].nodeValue=t,i.style.top=n.axis.labelMajorTop+"px",i.style.left=e+"px",s.majorTextNum++},links.Timeline.prototype.repaintAxisMajorLine=function(e){var t,i=this.size,n=i.axis.properties,s=this.size.axis,o=this.dom.axis.frame,a=this.dom.axis.majorLines,r=n.majorLineNum;r<a.length?t=a[r]:(t=document.createElement("DIV"),t.className="timeline-axis-grid timeline-axis-grid-major",t.style.position="absolute",t.style.top="0px",t.style.width="0px",o.appendChild(t),a.push(t)),t.style.left=e-s.lineMajorWidth/2+"px",t.style.height=i.frameHeight+"px",n.majorLineNum++},links.Timeline.prototype.reflowItems=function(){var e,t,i,n=!1,s=this.groups,o=this.renderedItems;for(s&&s.forEach(function(e){e.itemsHeight=0}),e=0,t=o.length;t>e;e++){var a=o[e],r=a.dom;if(i=a.group,r){var l=r?r.clientWidth:0,h=r?r.clientHeight:0;n=n||a.width!=l,n=n||a.height!=h,a.width=l,a.height=h,a.reflow()}i&&(i.itemsHeight=Math.max(this.options.groupMinHeight,i.itemsHeight?Math.max(i.itemsHeight,a.height):a.height))}return n},links.Timeline.prototype.recalcItems=function(){var e,t,i,n,s,o,a=!1,r=this.groups,l=this.size,h=this.options,m=this.renderedItems,p=0;if(0==r.length){if(h.autoHeight||h.cluster){var u=0,d=0;if(this.stack&&this.stack.finalItems)for(s=this.stack.finalItems,n=s[0],n&&n.top&&(u=n.top,d=n.top+n.height),e=1,t=s.length;t>e;e++)n=s[e],u=Math.min(u,n.top),d=Math.max(d,n.top+n.height);else for(i=m[0],i&&i.top&&(u=i.top,d=i.top+i.height),e=1,t=m.length;t>e;e++)i=m[e],i.top&&(u=Math.min(u,i.top),d=Math.max(d,i.top+i.height));if(p=d-u+2*h.eventMarginAxis+l.axis.height,p<h.minHeight&&(p=h.minHeight),l.actualHeight!=p&&h.autoHeight&&!h.axisOnTop){var c=p-l.actualHeight;if(this.stack&&this.stack.finalItems)for(s=this.stack.finalItems,e=0,t=s.length;t>e;e++)s[e].top+=c,s[e].item.top+=c;else for(e=0,t=m.length;t>e;e++)m[e].top+=c}}}else{for(p=l.axis.height+2*h.eventMarginAxis,e=0,t=r.length;t>e;e++){o=r[e];var g=o.itemsHeight;a=a||g!=o.height,o.height=Math.max(g,h.groupMinHeight),p+=r[e].height+h.eventMargin}var f=h.eventMargin,v=h.axisOnTop?h.eventMarginAxis+f/2:l.contentHeight-h.eventMarginAxis+f/2,T=l.axis.height;for(e=0,t=r.length;t>e;e++)o=r[e],h.axisOnTop?(o.top=v+T,o.labelTop=v+T+(o.height-o.labelHeight)/2,o.lineTop=v+T+o.height+f/2,v+=o.height+f):(v-=o.height+f,o.top=v,o.labelTop=v+(o.height-o.labelHeight)/2,o.lineTop=v-f/2);a=!0}return p<h.minHeight&&(p=h.minHeight),a=a||p!=l.actualHeight,l.actualHeight=p,a},links.Timeline.prototype.clearItems=function(){var e=this.renderQueue.hide;this.renderedItems.forEach(function(t){e.push(t)}),this.clusterGenerator.clear(),this.items=[]},links.Timeline.prototype.repaintItems=function(){var e,t,i=!1,n=this.dom,s=this.size,o=this,a=this.renderedItems;n.items||(n.items={});var r=n.items.frame;r||(r=document.createElement("DIV"),r.style.position="relative",n.content.appendChild(r),n.items.frame=r),r.style.left="0px",r.style.top=s.items.top+"px",r.style.height="0px",n.content.removeChild(r);var l=this.renderQueue,h=[];for(i=i||l.show.length>0||l.update.length>0||l.hide.length>0;e=l.show.shift();)e.showDOM(r),e.getImageUrls(h),a.push(e);for(;e=l.update.shift();)e.updateDOM(r),e.getImageUrls(h),t=this.renderedItems.indexOf(e),-1==t&&a.push(e);for(;e=l.hide.shift();)e.hideDOM(r),t=this.renderedItems.indexOf(e),-1!=t&&a.splice(t,1);if(a.forEach(function(e){e.updatePosition(o)}),this.repaintDeleteButton(),this.repaintDragAreas(),n.content.appendChild(r),h.length){var m=function(){o.render()},p=!1;links.imageloader.loadAll(h,m,p)}return i},links.Timeline.prototype.reflowGroups=function(){for(var e=!1,t=this.options,i=this.size,n=this.dom,s=0,o=this.groups,a=this.dom.groups?this.dom.groups.labels:[],r=0,l=o.length;l>r;r++){var h=o[r],m=a[r];h.labelWidth=m?m.clientWidth:0,h.labelHeight=m?m.clientHeight:0,h.width=h.labelWidth,s=Math.max(s,h.width)}void 0!==t.groupsWidth&&(s=n.groups.frame?n.groups.frame.clientWidth:0),s+=1;var p=t.groupsOnRight?i.frameWidth-s:0;return e=e||i.groupsWidth!==s,e=e||i.groupsLeft!==p,i.groupsWidth=s,i.groupsLeft=p,e},links.Timeline.prototype.repaintGroups=function(){var e=this.dom,t=this,i=this.options,n=this.size,s=this.groups;void 0===e.groups&&(e.groups={});var o=e.groups.labels;o||(o=[],e.groups.labels=o);var a=e.groups.labelLines;a||(a=[],e.groups.labelLines=a);var r=e.groups.itemLines;r||(r=[],e.groups.itemLines=r);var l=e.groups.frame;l||(l=document.createElement("DIV"),l.className="timeline-groups-axis",l.style.position="absolute",l.style.overflow="hidden",l.style.top="0px",l.style.height="100%",e.frame.appendChild(l),e.groups.frame=l),l.style.left=n.groupsLeft+"px",l.style.width=void 0!==i.groupsWidth?i.groupsWidth:n.groupsWidth+"px",l.style.display=0==s.length?"none":"";for(var h=o.length,m=s.length,p=0,u=Math.min(h,m);u>p;p++){var d=s[p],c=o[p];c.innerHTML=this.getGroupName(d),c.style.display=""}for(var p=h;m>p;p++){var d=s[p],c=document.createElement("DIV");c.className="timeline-groups-text",c.style.position="absolute",void 0===i.groupsWidth&&(c.style.whiteSpace="nowrap"),c.innerHTML=this.getGroupName(d),l.appendChild(c),o[p]=c;var g=document.createElement("DIV");g.className="timeline-axis-grid timeline-axis-grid-minor",g.style.position="absolute",g.style.left="0px",g.style.width="100%",g.style.height="0px",g.style.borderTopStyle="solid",l.appendChild(g),a[p]=g;var f=document.createElement("DIV");f.className="timeline-axis-grid timeline-axis-grid-minor",f.style.position="absolute",f.style.left="0px",f.style.width="100%",f.style.height="0px",f.style.borderTopStyle="solid",e.content.insertBefore(f,e.content.firstChild),r[p]=f}for(var p=m;h>p;p++){var c=o[p],g=a[p],f=r[p];l.removeChild(c),l.removeChild(g),e.content.removeChild(f)}o.splice(m,h-m),a.splice(m,h-m),r.splice(m,h-m),links.Timeline.addClassName(l,i.groupsOnRight?"timeline-groups-axis-onright":"timeline-groups-axis-onleft");for(var p=0,u=s.length;u>p;p++){var d=s[p],c=o[p],g=a[p],f=r[p];c.style.top=d.labelTop+"px",g.style.top=d.lineTop+"px",f.style.top=d.lineTop+"px",f.style.width=n.contentWidth+"px"}if(!e.groups.background){var v=document.createElement("DIV");v.className="timeline-axis",v.style.position="absolute",v.style.left="0px",v.style.width="100%",v.style.border="none",l.appendChild(v),e.groups.background=v}if(e.groups.background.style.top=n.axis.top+"px",e.groups.background.style.height=n.axis.height+"px",!e.groups.line){var T=document.createElement("DIV");T.className="timeline-axis",T.style.position="absolute",T.style.left="0px",T.style.width="100%",T.style.height="0px",l.appendChild(T),e.groups.line=T}if(e.groups.line.style.top=n.axis.line+"px",e.groups.frame&&s.length){var k=[];if(links.imageloader.filterImageUrls(e.groups.frame,k),k.length){var y=function(){t.render()},D=!1;links.imageloader.loadAll(k,y,D)}}},links.Timeline.prototype.repaintCurrentTime=function(){var e=this.options,t=this.dom,i=this.size;if(!e.showCurrentTime)return void(t.currentTime&&(t.contentTimelines.removeChild(t.currentTime),delete t.currentTime));if(!t.currentTime){var n=document.createElement("DIV");n.className="timeline-currenttime",n.style.position="absolute",n.style.top="0px",n.style.height="100%",t.contentTimelines.appendChild(n),t.currentTime=n}var s=new Date,o=new Date(s.valueOf()+this.clientTimeOffset),a=this.timeToScreen(o),r=a>-i.contentWidth&&a<2*i.contentWidth;t.currentTime.style.display=r?"":"none",t.currentTime.style.left=a+"px",t.currentTime.title="Current time: "+o,void 0!=this.currentTimeTimer&&(clearTimeout(this.currentTimeTimer),delete this.currentTimeTimer);var l=this,h=function(){l.repaintCurrentTime()},m=1/this.conversion.factor/2;30>m&&(m=30),this.currentTimeTimer=setTimeout(h,m)},links.Timeline.prototype.repaintCustomTime=function(){var e=this.options,t=this.dom,i=this.size;if(!e.showCustomTime)return void(t.customTime&&(t.contentTimelines.removeChild(t.customTime),delete t.customTime));if(!t.customTime){var n=document.createElement("DIV");n.className="timeline-customtime",n.style.position="absolute",n.style.top="0px",n.style.height="100%";var s=document.createElement("DIV");s.style.position="relative",s.style.top="0px",s.style.left="-10px",s.style.height="100%",s.style.width="20px",n.appendChild(s),t.contentTimelines.appendChild(n),t.customTime=n,this.customTime=new Date}var o=this.timeToScreen(this.customTime),a=o>-i.contentWidth&&o<2*i.contentWidth;t.customTime.style.display=a?"":"none",t.customTime.style.left=o+"px",t.customTime.title="Time: "+this.customTime},links.Timeline.prototype.repaintDeleteButton=function(){var e=this.dom,t=e.items.frame,i=e.items.deleteButton;i||(i=document.createElement("DIV"),i.className="timeline-navigation-delete",i.style.position="absolute",t.appendChild(i),e.items.deleteButton=i);var n=this.selection&&void 0!==this.selection.index?this.selection.index:-1,s=this.selection&&void 0!==this.selection.index?this.items[n]:void 0;if(s&&s.rendered&&this.isEditable(s)){var o=s.getRight(this),a=s.top;i.style.left=o+"px",i.style.top=a+"px",i.style.display="",t.removeChild(i),t.appendChild(i)}else i.style.display="none"},links.Timeline.prototype.repaintDragAreas=function(){var e=this.options,t=this.dom,i=this.dom.items.frame,n=t.items.dragLeft;n||(n=document.createElement("DIV"),n.className="timeline-event-range-drag-left",n.style.position="absolute",i.appendChild(n),t.items.dragLeft=n);var s=t.items.dragRight;s||(s=document.createElement("DIV"),s.className="timeline-event-range-drag-right",s.style.position="absolute",i.appendChild(s),t.items.dragRight=s);var o=this.selection&&void 0!==this.selection.index?this.selection.index:-1,a=this.selection&&void 0!==this.selection.index?this.items[o]:void 0;if(a&&a.rendered&&this.isEditable(a)&&(a instanceof links.Timeline.ItemRange||a instanceof links.Timeline.ItemFloatingRange)){var r=a.getLeft(this),l=a.getRight(this),h=a.top,m=a.height;n.style.left=r+"px",n.style.top=h+"px",n.style.width=e.dragAreaWidth+"px",n.style.height=m+"px",n.style.display="",i.removeChild(n),i.appendChild(n),s.style.left=l-e.dragAreaWidth+"px",s.style.top=h+"px",s.style.width=e.dragAreaWidth+"px",s.style.height=m+"px",s.style.display="",i.removeChild(s),i.appendChild(s)}else n.style.display="none",s.style.display="none"},links.Timeline.prototype.repaintNavigation=function(){var e=this,t=this.options,i=this.dom,n=i.frame,s=i.navBar;if(!s){var o=t.showButtonNew&&t.editable,a=t.showNavigation&&(t.zoomable||t.moveable);if((a||o)&&(s=document.createElement("DIV"),s.style.position="absolute",s.className="timeline-navigation ui-widget ui-state-highlight ui-corner-all",t.groupsOnRight?s.style.left="10px":s.style.right="10px",t.axisOnTop?s.style.bottom="10px":s.style.top="10px",i.navBar=s,n.appendChild(s)),o){s.addButton=document.createElement("DIV"),s.addButton.className="timeline-navigation-new",s.addButton.title=t.CREATE_NEW_EVENT;var r=document.createElement("SPAN");r.className="ui-icon ui-icon-circle-plus",s.addButton.appendChild(r);var l=function(i){links.Timeline.preventDefault(i),links.Timeline.stopPropagation(i);var n=e.size.contentWidth,s=n/2,o=e.screenToTime(s);t.snapEvents&&e.step.snap(o);var a=t.NEW,r=e.groups.length?e.groups[0].content:void 0,l=!0;e.addItem({start:o,content:a,group:r},l);var h=e.items.length-1;e.selectItem(h),e.applyAdd=!0,e.trigger("add"),e.applyAdd?(e.render({animate:!1}),e.selectItem(h)):e.deleteItem(h)};links.Timeline.addEventListener(s.addButton,"mousedown",l),s.appendChild(s.addButton)}if(o&&a&&links.Timeline.addClassName(s.addButton,"timeline-navigation-new-line"),a){if(t.zoomable){s.zoomInButton=document.createElement("DIV"),s.zoomInButton.className="timeline-navigation-zoom-in",s.zoomInButton.title=this.options.ZOOM_IN;var h=document.createElement("SPAN");h.className="ui-icon ui-icon-circle-zoomin",s.zoomInButton.appendChild(h);var m=function(t){links.Timeline.preventDefault(t),links.Timeline.stopPropagation(t),e.zoom(.4),e.trigger("rangechange"),e.trigger("rangechanged")};links.Timeline.addEventListener(s.zoomInButton,"mousedown",m),s.appendChild(s.zoomInButton),s.zoomOutButton=document.createElement("DIV"),s.zoomOutButton.className="timeline-navigation-zoom-out",s.zoomOutButton.title=this.options.ZOOM_OUT;var p=document.createElement("SPAN");p.className="ui-icon ui-icon-circle-zoomout",s.zoomOutButton.appendChild(p);var u=function(t){links.Timeline.preventDefault(t),links.Timeline.stopPropagation(t),e.zoom(-.4),e.trigger("rangechange"),e.trigger("rangechanged")};links.Timeline.addEventListener(s.zoomOutButton,"mousedown",u),s.appendChild(s.zoomOutButton)}if(t.moveable){s.moveLeftButton=document.createElement("DIV"),s.moveLeftButton.className="timeline-navigation-move-left",s.moveLeftButton.title=this.options.MOVE_LEFT;var d=document.createElement("SPAN");d.className="ui-icon ui-icon-circle-arrow-w",s.moveLeftButton.appendChild(d);var c=function(t){links.Timeline.preventDefault(t),links.Timeline.stopPropagation(t),e.move(-.2),e.trigger("rangechange"),e.trigger("rangechanged")};links.Timeline.addEventListener(s.moveLeftButton,"mousedown",c),s.appendChild(s.moveLeftButton),s.moveRightButton=document.createElement("DIV"),s.moveRightButton.className="timeline-navigation-move-right",s.moveRightButton.title=this.options.MOVE_RIGHT;var g=document.createElement("SPAN");g.className="ui-icon ui-icon-circle-arrow-e",s.moveRightButton.appendChild(g);var f=function(t){links.Timeline.preventDefault(t),links.Timeline.stopPropagation(t),e.move(.2),e.trigger("rangechange"),e.trigger("rangechanged")};links.Timeline.addEventListener(s.moveRightButton,"mousedown",f),s.appendChild(s.moveRightButton)}}}},links.Timeline.prototype.setCurrentTime=function(e){var t=new Date;this.clientTimeOffset=e.valueOf()-t.valueOf(),this.repaintCurrentTime()},links.Timeline.prototype.getCurrentTime=function(){var e=new Date;return new Date(e.valueOf()+this.clientTimeOffset)},links.Timeline.prototype.setCustomTime=function(e){this.customTime=new Date(e.valueOf()),this.repaintCustomTime()},links.Timeline.prototype.getCustomTime=function(){return new Date(this.customTime.valueOf())},links.Timeline.prototype.setScale=function(e,t){this.step.setScale(e,t),this.render()},links.Timeline.prototype.setAutoScale=function(e){this.step.setAutoScale(e),this.render()},links.Timeline.prototype.redraw=function(){this.setData(this.data)},links.Timeline.prototype.checkResize=function(){this.render()},links.Timeline.prototype.isEditable=function(e){return e?void 0!=e.editable?e.editable:this.options.editable:!1},links.Timeline.prototype.recalcConversion=function(){this.conversion.offset=this.start.valueOf(),this.conversion.factor=this.size.contentWidth/(this.end.valueOf()-this.start.valueOf())},links.Timeline.prototype.screenToTime=function(e){var t=this.conversion;return new Date(e/t.factor+t.offset)},links.Timeline.prototype.timeToScreen=function(e){var t=this.conversion;return(e.valueOf()-t.offset)*t.factor},links.Timeline.prototype.onTouchStart=function(e){var t=this.eventParams,i=this;if(!t.touchDown){t.touchDown=!0,t.zoomed=!1,this.onMouseDown(e),t.onTouchMove||(t.onTouchMove=function(e){i.onTouchMove(e)},links.Timeline.addEventListener(document,"touchmove",t.onTouchMove)),t.onTouchEnd||(t.onTouchEnd=function(e){i.onTouchEnd(e)},links.Timeline.addEventListener(document,"touchend",t.onTouchEnd));var n=links.Timeline.getTarget(e),s=this.getItemIndex(n);t.doubleTapStartPrev=t.doubleTapStart,t.doubleTapStart=(new Date).valueOf(),t.doubleTapItemPrev=t.doubleTapItem,t.doubleTapItem=s,links.Timeline.preventDefault(e)}},links.Timeline.prototype.onTouchMove=function(e){var t=this.eventParams;if(e.scale&&1!==e.scale&&(t.zoomed=!0),t.zoomed){if(this.options.zoomable){t.zoomed=!0;var i=e.scale,n=t.end.valueOf()-t.start.valueOf(),s=n/i,o=s-n,a=new Date(parseInt(t.start.valueOf()-o/2)),r=new Date(parseInt(t.end.valueOf()+o/2));this.setVisibleChartRange(a,r),this.trigger("rangechange")}}else this.onMouseMove(e);links.Timeline.preventDefault(e)},links.Timeline.prototype.onTouchEnd=function(e){var t=this.eventParams,i=this;t.touchDown=!1,t.zoomed&&this.trigger("rangechanged"),t.onTouchMove&&(links.Timeline.removeEventListener(document,"touchmove",t.onTouchMove),delete t.onTouchMove),t.onTouchEnd&&(links.Timeline.removeEventListener(document,"touchend",t.onTouchEnd),delete t.onTouchEnd),this.onMouseUp(e);{var n=500,s=(new Date).valueOf(),o=links.Timeline.getTarget(e);this.getItemIndex(o)}t.doubleTapStartPrev&&s-t.doubleTapStartPrev<n&&t.doubleTapItem==t.doubleTapItemPrev&&(t.touchDown=!0,i.onDblClick(e),t.touchDown=!1),links.Timeline.preventDefault(e)},links.Timeline.prototype.onMouseDown=function(e){e=e||window.event;var t=this.eventParams,i=this.options,n=this.dom,s=e.which?1==e.which:1==e.button;if(s||t.touchDown){t.mouseX=links.Timeline.getPageX(e),t.mouseY=links.Timeline.getPageY(e),t.frameLeft=links.Timeline.getAbsoluteLeft(this.dom.content),t.frameTop=links.Timeline.getAbsoluteTop(this.dom.content),t.previousLeft=0,t.previousOffset=0,t.moved=!1,t.start=new Date(this.start.valueOf()),t.end=new Date(this.end.valueOf()),t.target=links.Timeline.getTarget(e);var o=n.items&&n.items.dragLeft?n.items.dragLeft:void 0,a=n.items&&n.items.dragRight?n.items.dragRight:void 0;if(t.itemDragLeft=t.target===o,t.itemDragRight=t.target===a,t.itemDragLeft||t.itemDragRight?(t.itemIndex=this.selection&&void 0!==this.selection.index?this.selection.index:void 0,delete t.clusterIndex):(t.itemIndex=this.getItemIndex(t.target),t.clusterIndex=this.getClusterIndex(t.target)),t.customTime=t.target===n.customTime||t.target.parentNode===n.customTime?this.customTime:void 0,t.addItem=i.editable&&e.ctrlKey,t.addItem){var r=t.mouseX-t.frameLeft,l=t.mouseY-t.frameTop,h=this.screenToTime(r);i.snapEvents&&this.step.snap(h);var m=new Date(h.valueOf()),p=i.NEW,u=this.getGroupFromHeight(l);this.addItem({start:h,end:m,content:p,group:this.getGroupName(u)}),t.itemIndex=this.items.length-1,delete t.clusterIndex,this.selectItem(t.itemIndex),t.itemDragRight=!0}var d=this.items[t.itemIndex],c=this.isSelected(t.itemIndex);if(t.editItem=c&&this.isEditable(d),t.editItem?(t.itemStart=d.start,t.itemEnd=d.end,t.itemGroup=d.group,t.itemLeft=d.getLeft(this),t.itemRight=d.getRight(this)):this.dom.frame.style.cursor="move",!t.touchDown){var g=this;t.onMouseMove||(t.onMouseMove=function(e){g.onMouseMove(e)},links.Timeline.addEventListener(document,"mousemove",t.onMouseMove)),t.onMouseUp||(t.onMouseUp=function(e){g.onMouseUp(e)},links.Timeline.addEventListener(document,"mouseup",t.onMouseUp)),links.Timeline.preventDefault(e)}}},links.Timeline.prototype.onMouseMove=function(e){e=e||window.event;var t=this.eventParams,i=this.size,n=this.dom,s=this.options,o=links.Timeline.getPageX(e),a=links.Timeline.getPageY(e);void 0==t.mouseX&&(t.mouseX=o),void 0==t.mouseY&&(t.mouseY=a);var r=o-t.mouseX,l=a-t.mouseY;if(Math.abs(l)>=1&&(newy=$.mobile.window.scrollTop(),$.mobile.window.scrollTop(newy-l)),Math.abs(r)>=1&&(t.moved=!0),t.customTime){var h=this.timeToScreen(t.customTime),m=h+r;this.customTime=this.screenToTime(m),this.repaintCustomTime(),this.trigger("timechange")}else if(t.editItem){var p,u,d=this.items[t.itemIndex];t.itemDragLeft&&s.timeChangeable?(p=t.itemLeft+r,u=t.itemRight,d.start=this.screenToTime(p),s.snapEvents&&(this.step.snap(d.start),p=this.timeToScreen(d.start)),p>u&&(p=u,d.start=this.screenToTime(p)),this.trigger("change")):t.itemDragRight&&s.timeChangeable?(p=t.itemLeft,u=t.itemRight+r,d.end=this.screenToTime(u),s.snapEvents&&(this.step.snap(d.end),u=this.timeToScreen(d.end)),p>u&&(u=p,d.end=this.screenToTime(u)),this.trigger("change")):s.timeChangeable&&(p=t.itemLeft+r,d.start=this.screenToTime(p),s.snapEvents&&(this.step.snap(d.start),p=this.timeToScreen(d.start)),d.end&&(u=p+(t.itemRight-t.itemLeft),d.end=this.screenToTime(u)),this.trigger("change")),d.setPosition(p,u);var c=t.itemDragLeft||t.itemDragRight;if(this.groups.length&&!c){var g=a-t.frameTop,f=this.getGroupFromHeight(g);if(s.groupsChangeable&&d.group!==f){var v=this.items.indexOf(d);this.changeItem(v,{group:this.getGroupName(f)})}else this.repaintDeleteButton(),this.repaintDragAreas()}else this.render()}else if(s.moveable){var T=t.end.valueOf()-t.start.valueOf(),k=Math.round(-r/i.contentWidth*T),y=new Date(t.start.valueOf()+k),D=new Date(t.end.valueOf()+k);this.applyRange(y,D);var x=this.start.valueOf()-y.valueOf();x&&(k+=x),this.recalcConversion();var M=t.previousLeft||0,S=parseFloat(n.items.frame.style.left)||0,C=t.previousOffset||0,I=C+(S-M),E=-k/T*i.contentWidth+I;n.items.frame.style.left=E+"px",t.previousOffset=I,t.previousLeft=parseFloat(n.items.frame.style.left)||E,this.repaintCurrentTime(),this.repaintCustomTime(),this.repaintAxis(),this.trigger("rangechange")}links.Timeline.preventDefault(e)},links.Timeline.prototype.onMouseUp=function(e){var t=this.eventParams,i=this.options;if(e=e||window.event,this.dom.frame.style.cursor="auto",t.onMouseMove&&(links.Timeline.removeEventListener(document,"mousemove",t.onMouseMove),delete t.onMouseMove),t.onMouseUp&&(links.Timeline.removeEventListener(document,"mouseup",t.onMouseUp),delete t.onMouseUp),t.customTime)this.trigger("timechanged");else if(t.editItem){var n=this.items[t.itemIndex];if(t.moved||t.addItem){if(this.applyChange=!0,this.applyAdd=!0,this.updateData(t.itemIndex,{start:n.start,end:n.end}),this.trigger(t.addItem?"add":"changed"),n=this.items[t.itemIndex],t.addItem)this.applyAdd?this.updateData(t.itemIndex,{start:n.start,end:n.end,content:n.content,group:this.getGroupName(n.group)}):this.deleteItem(t.itemIndex);else if(this.applyChange)this.updateData(t.itemIndex,{start:n.start,end:n.end});else{delete this.applyChange,delete this.applyAdd;{var n=this.items[t.itemIndex];n.dom}n.start=t.itemStart,n.end=t.itemEnd,n.group=t.itemGroup,n.setPosition(t.itemLeft,t.itemRight),this.updateData(t.itemIndex,{start:t.itemStart,end:t.itemEnd})}this.options.cluster&&this.clusterGenerator.updateData(),this.render()}}else t.moved||t.zoomed?(this.render(),(t.moved&&i.moveable||t.zoomed&&i.zoomable)&&this.trigger("rangechanged")):t.target===this.dom.items.deleteButton?this.selection&&void 0!==this.selection.index&&this.confirmDeleteItem(this.selection.index):i.selectable&&(void 0!=t.itemIndex?this.isSelected(t.itemIndex)||(this.selectItem(t.itemIndex),this.trigger("select")):void 0!=t.clusterIndex?(this.selectCluster(t.clusterIndex),this.trigger("select")):i.unselectable&&(this.unselectItem(),this.trigger("select")))},links.Timeline.prototype.onDblClick=function(e){{var t=this.eventParams,i=this.options,n=this.dom;this.size}if(e=e||window.event,void 0!=t.itemIndex){var s=this.items[t.itemIndex];s&&this.isEditable(s)&&this.trigger("edit")}else if(i.editable){t.mouseX=links.Timeline.getPageX(e),t.mouseY=links.Timeline.getPageY(e);var o=t.mouseX-links.Timeline.getAbsoluteLeft(n.content),a=t.mouseY-links.Timeline.getAbsoluteTop(n.content),r=this.screenToTime(o);i.snapEvents&&this.step.snap(r);var l=i.NEW,h=this.getGroupFromHeight(a),m=!0;this.addItem({start:r,content:l,group:this.getGroupName(h)},m),t.itemIndex=this.items.length-1,this.selectItem(t.itemIndex),this.applyAdd=!0,this.trigger("add"),this.applyAdd?(this.render({animate:!1}),this.selectItem(t.itemIndex)):this.deleteItem(t.itemIndex)}links.Timeline.preventDefault(e)},links.Timeline.prototype.onMouseWheel=function(e){if(this.options.zoomable){e||(e=window.event);var t=0;if(e.wheelDelta?t=e.wheelDelta/120:e.detail&&(t=-e.detail/3),t){var i=this,n=function(){var n=t/5,s=links.Timeline.getAbsoluteLeft(i.dom.content),o=links.Timeline.getPageX(e),a=void 0!=o&&void 0!=s?i.screenToTime(o-s):void 0;i.zoom(n,a),i.trigger("rangechange"),i.trigger("rangechanged")},s=function(){i.move(t*-.2),i.trigger("rangechange"),i.trigger("rangechanged")};e.shiftKey?s():n()}links.Timeline.preventDefault(e)}},links.Timeline.prototype.zoom=function(e,t){void 0==t&&(t=new Date((this.start.valueOf()+this.end.valueOf())/2)),e>=1&&(e=.9),-1>=e&&(e=-.9),0>e&&(e/=1+e);var i=this.start.valueOf()-t,n=this.end.valueOf()-t,s=new Date(this.start.valueOf()-i*e),o=new Date(this.end.valueOf()-n*e),a=o.valueOf()-s.valueOf(),r=Number(this.options.zoomMin)||10;10>r&&(r=10),a>=r&&(this.applyRange(s,o,t),this.render({animate:this.options.animate&&this.options.animateZoom}))},links.Timeline.prototype.move=function(e){var t=this.end.valueOf()-this.start.valueOf(),i=new Date(this.start.valueOf()+t*e),n=new Date(this.end.valueOf()+t*e);this.applyRange(i,n),this.render()},links.Timeline.prototype.applyRange=function(e,t,i){var n=e.valueOf(),s=t.valueOf(),o=s-n,a=this.options,r=31536e6,l=Number(a.zoomMin)||10;10>l&&(l=10);var h=Number(a.zoomMax)||1e4*r;h>1e4*r&&(h=1e4*r),l>h&&(h=l);var m=a.min?a.min.valueOf():void 0,p=a.max?a.max.valueOf():void 0;if(void 0!=m&&void 0!=p){if(m>=p){var u=864e5;p=m+u}h>p-m&&(h=p-m),l>p-m&&(l=p-m)}if(n>=s&&(s+=864e5),l>o){var d=l-o,c=i?(i.valueOf()-n)/o:.5;n-=Math.round(d*c),s+=Math.round(d*(1-c))}if(o>h){var d=o-h,c=i?(i.valueOf()-n)/o:.5;n+=Math.round(d*c),s-=Math.round(d*(1-c))}if(void 0!=m){var d=n-m;0>d&&(n-=d,s-=d)}if(void 0!=p){var d=p-s;0>d&&(n+=d,s+=d)}this.start=new Date(n),this.end=new Date(s)},links.Timeline.prototype.confirmDeleteItem=function(e){this.applyDelete=!0,this.isSelected(e)||this.selectItem(e),this.trigger("delete"),this.applyDelete&&this.deleteItem(e),delete this.applyDelete},links.Timeline.prototype.deleteItem=function(e,t){if(e>=this.items.length)throw"Cannot delete row, index out of range";this.selection&&void 0!==this.selection.index&&(this.selection.index==e?this.unselectItem():this.selection.index>e&&this.selection.index--);var i=this.items.splice(e,1)[0];if(this.renderQueue.hide.push(i),this.data)if(google&&google.visualization&&this.data instanceof google.visualization.DataTable)this.data.removeRow(e);else{if(!links.Timeline.isArray(this.data))throw"Cannot delete row from data, unknown data type";this.data.splice(e,1)}this.options.cluster&&this.clusterGenerator.updateData(),t||this.render()},links.Timeline.prototype.deleteAllItems=function(){if(this.unselectItem(),this.clearItems(),this.deleteGroups(),this.data)if(google&&google.visualization&&this.data instanceof google.visualization.DataTable)this.data.removeRows(0,this.data.getNumberOfRows());else{if(!links.Timeline.isArray(this.data))throw"Cannot delete row from data, unknown data type";this.data.splice(0,this.data.length)}this.options.cluster&&this.clusterGenerator.updateData(),this.render()},links.Timeline.prototype.getGroupFromHeight=function(e){var t,i,n=this.groups;if(n.length){if(this.options.axisOnTop){for(t=n.length-1;t>=0;t--)if(i=n[t],e>i.top)return i}else for(t=0;t<n.length;t++)if(i=n[t],e>i.top)return i;return i}return void 0},links.Timeline.Item=function(e,t){if(e&&(this.start=e.start,this.end=e.end,this.content=e.content,this.className=e.className,this.editable=e.editable,this.group=e.group,this.type=e.type),this.top=0,this.left=0,this.width=0,this.height=0,this.lineWidth=0,this.dotWidth=0,this.dotHeight=0,this.rendered=!1,t)for(var i in t)t.hasOwnProperty(i)&&(this[i]=t[i])},links.Timeline.Item.prototype.reflow=function(){return!1},links.Timeline.Item.prototype.getImageUrls=function(e){this.dom&&links.imageloader.filterImageUrls(this.dom,e)},links.Timeline.Item.prototype.select=function(){},links.Timeline.Item.prototype.unselect=function(){},links.Timeline.Item.prototype.createDOM=function(){},links.Timeline.Item.prototype.showDOM=function(){},links.Timeline.Item.prototype.hideDOM=function(){},links.Timeline.Item.prototype.updateDOM=function(){},links.Timeline.Item.prototype.updatePosition=function(){},links.Timeline.Item.prototype.isRendered=function(){return this.rendered},links.Timeline.Item.prototype.isVisible=function(){return!1},links.Timeline.Item.prototype.setPosition=function(){},links.Timeline.Item.prototype.getLeft=function(){return 0},links.Timeline.Item.prototype.getRight=function(){return 0},links.Timeline.Item.prototype.getWidth=function(){return this.width||0},links.Timeline.ItemBox=function(e,t){links.Timeline.Item.call(this,e,t)},links.Timeline.ItemBox.prototype=new links.Timeline.Item,links.Timeline.ItemBox.prototype.reflow=function(){var e=this.dom,t=e.dot.offsetHeight,i=e.dot.offsetWidth,n=e.line.offsetWidth,s=this.dotHeight!=t||this.dotWidth!=i||this.lineWidth!=n;return this.dotHeight=t,this.dotWidth=i,this.lineWidth=n,s},links.Timeline.ItemBox.prototype.select=function(){var e=this.dom;links.Timeline.addClassName(e,"timeline-event-selected ui-state-active"),links.Timeline.addClassName(e.line,"timeline-event-selected ui-state-active"),links.Timeline.addClassName(e.dot,"timeline-event-selected ui-state-active")},links.Timeline.ItemBox.prototype.unselect=function(){var e=this.dom;links.Timeline.removeClassName(e,"timeline-event-selected ui-state-active"),links.Timeline.removeClassName(e.line,"timeline-event-selected ui-state-active"),links.Timeline.removeClassName(e.dot,"timeline-event-selected ui-state-active")},links.Timeline.ItemBox.prototype.createDOM=function(){var e=document.createElement("DIV");e.style.position="absolute",e.style.left=this.left+"px",e.style.top=this.top+"px";var t=document.createElement("DIV");t.className="timeline-event-content",t.innerHTML=this.content,e.appendChild(t);var i=document.createElement("DIV");i.style.position="absolute",i.style.width="0px",e.line=i;var n=document.createElement("DIV");return n.style.position="absolute",n.style.width="0px",n.style.height="0px",e.dot=n,this.dom=e,this.updateDOM(),e},links.Timeline.ItemBox.prototype.showDOM=function(e){var t=this.dom;t||(t=this.createDOM()),t.parentNode!=e&&(t.parentNode&&this.hideDOM(),e.appendChild(t),e.insertBefore(t.line,e.firstChild),e.appendChild(t.dot),this.rendered=!0)},links.Timeline.ItemBox.prototype.hideDOM=function(){var e=this.dom;e&&(e.parentNode&&e.parentNode.removeChild(e),e.line&&e.line.parentNode&&e.line.parentNode.removeChild(e.line),e.dot&&e.dot.parentNode&&e.dot.parentNode.removeChild(e.dot),this.rendered=!1)},links.Timeline.ItemBox.prototype.updateDOM=function(){var e=this.dom;if(e){var t=e.line,i=e.dot;e.firstChild.innerHTML=this.content,e.className="timeline-event timeline-event-box ui-widget ui-state-default",t.className="timeline-event timeline-event-line ui-widget ui-state-default",i.className="timeline-event timeline-event-dot ui-widget ui-state-default",this.isCluster&&(links.Timeline.addClassName(e,"timeline-event-cluster ui-widget-header"),links.Timeline.addClassName(t,"timeline-event-cluster ui-widget-header"),links.Timeline.addClassName(i,"timeline-event-cluster ui-widget-header")),this.className&&(links.Timeline.addClassName(e,this.className),links.Timeline.addClassName(t,this.className),links.Timeline.addClassName(i,this.className))}},links.Timeline.ItemBox.prototype.updatePosition=function(e){var t=this.dom;if(t){var i=e.timeToScreen(this.start),n=e.options.axisOnTop,s=e.size.axis.top,o=e.size.axis.height,a=e.options.box&&e.options.box.align?e.options.box.align:void 0;t.style.top=this.top+"px",t.style.left="right"==a?i-this.width+"px":"left"==a?i+"px":i-this.width/2+"px";var r=t.line,l=t.dot;r.style.left=i-this.lineWidth/2+"px",l.style.left=i-this.dotWidth/2+"px",n?(r.style.top=o+"px",r.style.height=Math.max(this.top-o,0)+"px",l.style.top=o-this.dotHeight/2+"px"):(r.style.top=this.top+this.height+"px",r.style.height=Math.max(s-this.top-this.height,0)+"px",l.style.top=s-this.dotHeight/2+"px")}},links.Timeline.ItemBox.prototype.isVisible=function(e,t){return this.cluster?!1:this.start>e&&this.start<t},links.Timeline.ItemBox.prototype.setPosition=function(e){var t=this.dom;t.style.left=e-this.width/2+"px",t.line.style.left=e-this.lineWidth/2+"px",t.dot.style.left=e-this.dotWidth/2+"px",this.group&&(this.top=this.group.top,t.style.top=this.top+"px")},links.Timeline.ItemBox.prototype.getLeft=function(e){var t=e.options.box&&e.options.box.align?e.options.box.align:void 0,i=e.timeToScreen(this.start);return i-="right"==t?width:this.width/2},links.Timeline.ItemBox.prototype.getRight=function(e){var t,i=e.options.box&&e.options.box.align?e.options.box.align:void 0,n=e.timeToScreen(this.start);return t="right"==i?n:"left"==i?n+this.width:n+this.width/2},links.Timeline.ItemRange=function(e,t){links.Timeline.Item.call(this,e,t)},links.Timeline.ItemRange.prototype=new links.Timeline.Item,links.Timeline.ItemRange.prototype.select=function(){var e=this.dom;links.Timeline.addClassName(e,"timeline-event-selected ui-state-active")},links.Timeline.ItemRange.prototype.unselect=function(){var e=this.dom;links.Timeline.removeClassName(e,"timeline-event-selected ui-state-active")},links.Timeline.ItemRange.prototype.createDOM=function(){var e=document.createElement("DIV");e.style.position="absolute";var t=document.createElement("DIV");return t.className="timeline-event-content",e.appendChild(t),this.dom=e,this.updateDOM(),e},links.Timeline.ItemRange.prototype.showDOM=function(e){var t=this.dom;t||(t=this.createDOM()),t.parentNode!=e&&(t.parentNode&&this.hideDOM(),e.appendChild(t),this.rendered=!0)},links.Timeline.ItemRange.prototype.hideDOM=function(){var e=this.dom;e&&(e.parentNode&&e.parentNode.removeChild(e),this.rendered=!1)},links.Timeline.ItemRange.prototype.updateDOM=function(){var e=this.dom;e&&(e.firstChild.innerHTML=this.content,e.className="timeline-event timeline-event-range ui-widget ui-state-default",this.isCluster&&links.Timeline.addClassName(e,"timeline-event-cluster ui-widget-header"),this.className&&links.Timeline.addClassName(e,this.className))},links.Timeline.ItemRange.prototype.updatePosition=function(e){var t=this.dom;if(t){var i=e.size.contentWidth,n=e.timeToScreen(this.start),s=e.timeToScreen(this.end);-i>n&&(n=-i),s>2*i&&(s=2*i),t.style.top=this.top+"px",t.style.left=n+"px",t.style.width=Math.max(s-n,1)+"px"}},links.Timeline.ItemRange.prototype.isVisible=function(e,t){return this.cluster?!1:this.end>e&&this.start<t},links.Timeline.ItemRange.prototype.setPosition=function(e,t){var i=this.dom;i.style.left=e+"px",i.style.width=t-e+"px",this.group&&(this.top=this.group.top,i.style.top=this.top+"px")},links.Timeline.ItemRange.prototype.getLeft=function(e){return e.timeToScreen(this.start)},links.Timeline.ItemRange.prototype.getRight=function(e){return e.timeToScreen(this.end)},links.Timeline.ItemRange.prototype.getWidth=function(e){return e.timeToScreen(this.end)-e.timeToScreen(this.start)},links.Timeline.ItemFloatingRange=function(e,t){links.Timeline.Item.call(this,e,t)},links.Timeline.ItemFloatingRange.prototype=new links.Timeline.Item,links.Timeline.ItemFloatingRange.prototype.select=function(){var e=this.dom;links.Timeline.addClassName(e,"timeline-event-selected ui-state-active")},links.Timeline.ItemFloatingRange.prototype.unselect=function(){var e=this.dom;links.Timeline.removeClassName(e,"timeline-event-selected ui-state-active")},links.Timeline.ItemFloatingRange.prototype.createDOM=function(){var e=document.createElement("DIV");e.style.position="absolute";var t=document.createElement("DIV");return t.className="timeline-event-content",e.appendChild(t),this.dom=e,this.updateDOM(),e},links.Timeline.ItemFloatingRange.prototype.showDOM=function(e){var t=this.dom;t||(t=this.createDOM()),t.parentNode!=e&&(t.parentNode&&this.hideDOM(),e.appendChild(t),this.rendered=!0)},links.Timeline.ItemFloatingRange.prototype.hideDOM=function(){var e=this.dom;e&&(e.parentNode&&e.parentNode.removeChild(e),this.rendered=!1)},links.Timeline.ItemFloatingRange.prototype.updateDOM=function(){var e=this.dom;e&&(e.firstChild.innerHTML=this.content,e.className="timeline-event timeline-event-range ui-widget ui-state-default",this.isCluster&&links.Timeline.addClassName(e,"timeline-event-cluster ui-widget-header"),this.className&&links.Timeline.addClassName(e,this.className))},links.Timeline.ItemFloatingRange.prototype.updatePosition=function(e){var t=this.dom;if(t){var i=e.size.contentWidth,n=this.getLeft(e),s=this.getRight(e);-i>n&&(n=-i),s>2*i&&(s=2*i),t.style.top=this.top+"px",t.style.left=n+"px",t.style.width=Math.max(s-n,1)+"px"}},links.Timeline.ItemFloatingRange.prototype.isVisible=function(e,t){return this.cluster?!1:this.end&&this.start?this.end>e&&this.start<t:this.start?this.start<t:this.end?this.end>e:!0},links.Timeline.ItemFloatingRange.prototype.setPosition=function(e,t){var i=this.dom;i.style.left=e+"px",i.style.width=t-e+"px",this.group&&(this.top=this.group.top,i.style.top=this.top+"px")},links.Timeline.ItemFloatingRange.prototype.getLeft=function(e){return this.start?e.timeToScreen(this.start):0},links.Timeline.ItemFloatingRange.prototype.getRight=function(e){return this.end?e.timeToScreen(this.end):e.size.contentWidth},links.Timeline.ItemFloatingRange.prototype.getWidth=function(e){return this.getRight(e)-this.getLeft(e)},links.Timeline.ItemDot=function(e,t){links.Timeline.Item.call(this,e,t)},links.Timeline.ItemDot.prototype=new links.Timeline.Item,links.Timeline.ItemDot.prototype.reflow=function(){var e=this.dom,t=e.dot.offsetHeight,i=e.dot.offsetWidth,n=e.content.offsetHeight,s=this.dotHeight!=t||this.dotWidth!=i||this.contentHeight!=n;return this.dotHeight=t,this.dotWidth=i,this.contentHeight=n,s},links.Timeline.ItemDot.prototype.select=function(){var e=this.dom;links.Timeline.addClassName(e,"timeline-event-selected ui-state-active")},links.Timeline.ItemDot.prototype.unselect=function(){var e=this.dom;links.Timeline.removeClassName(e,"timeline-event-selected ui-state-active")},links.Timeline.ItemDot.prototype.createDOM=function(){var e=document.createElement("DIV");e.style.position="absolute";var t=document.createElement("DIV");t.className="timeline-event-content",e.appendChild(t);var i=document.createElement("DIV");return i.style.position="absolute",i.style.width="0px",i.style.height="0px",e.appendChild(i),e.content=t,e.dot=i,this.dom=e,this.updateDOM(),e},links.Timeline.ItemDot.prototype.showDOM=function(e){var t=this.dom;t||(t=this.createDOM()),t.parentNode!=e&&(t.parentNode&&this.hideDOM(),e.appendChild(t),this.rendered=!0)},links.Timeline.ItemDot.prototype.hideDOM=function(){var e=this.dom;e&&(e.parentNode&&e.parentNode.removeChild(e),this.rendered=!1)},links.Timeline.ItemDot.prototype.updateDOM=function(){if(this.dom){var e=this.dom,t=e.dot;e.firstChild.innerHTML=this.content,e.className="timeline-event-dot-container",t.className="timeline-event timeline-event-dot ui-widget ui-state-default",this.isCluster&&(links.Timeline.addClassName(e,"timeline-event-cluster ui-widget-header"),links.Timeline.addClassName(t,"timeline-event-cluster ui-widget-header")),this.className&&(links.Timeline.addClassName(e,this.className),links.Timeline.addClassName(t,this.className))}},links.Timeline.ItemDot.prototype.updatePosition=function(e){var t=this.dom;if(t){var i=e.timeToScreen(this.start);t.style.top=this.top+"px",t.style.left=i-this.dotWidth/2+"px",t.content.style.marginLeft=1.5*this.dotWidth+"px",t.dot.style.top=(this.height-this.dotHeight)/2+"px"}},links.Timeline.ItemDot.prototype.isVisible=function(e,t){return this.cluster?!1:this.start>e&&this.start<t},links.Timeline.ItemDot.prototype.setPosition=function(e){var t=this.dom;t.style.left=e-this.dotWidth/2+"px",this.group&&(this.top=this.group.top,t.style.top=this.top+"px")},links.Timeline.ItemDot.prototype.getLeft=function(e){return e.timeToScreen(this.start)},links.Timeline.ItemDot.prototype.getRight=function(e){return e.timeToScreen(this.start)+this.width},links.Timeline.prototype.getItem=function(e){if(e>=this.items.length)throw"Cannot get item, index out of range";var t,i=this.data;if(google&&google.visualization&&i instanceof google.visualization.DataTable){var n=links.Timeline.mapColumnIds(i);t={};for(var s in n)n.hasOwnProperty(s)&&(t[s]=this.data.getValue(e,n[s]))}else{if(!links.Timeline.isArray(this.data))throw"Unknown data type. DataTable or Array expected.";t=links.Timeline.clone(this.data[e])}var o=this.items[e];return t.start=new Date(o.start.valueOf()),o.end&&(t.end=new Date(o.end.valueOf())),t.content=o.content,o.group&&(t.group=this.getGroupName(o.group)),o.className&&(t.className=o.className),"undefined"!=typeof o.editable&&(t.editable=o.editable),o.type&&(t.type=o.type),t},links.Timeline.prototype.getCluster=function(e){if(e>=this.clusters.length)throw"Cannot get cluster, index out of range";var t={},i=this.clusters[e],n=i.items;t.start=new Date(i.start.valueOf()),i.type&&(t.type=i.type),t.items=[];for(var s=0;s<n.length;s++)for(var o=0;o<this.items.length;o++)if(this.items[o]==n[s]){t.items.push(this.getItem(o));break}return t},links.Timeline.prototype.addItem=function(e,t){var i=[e];this.addItems(i,t)},links.Timeline.prototype.addItems=function(e,t){var i=this,n=this.items;e.forEach(function(e){var t=n.length;n.push(i.createItem(e)),i.updateData(t,e)}),this.options.cluster&&this.clusterGenerator.updateData(),t||this.render({animate:!1})},links.Timeline.prototype.createItem=function(e){var t=e.type||(e.end?"range":this.options.style),i=links.Timeline.clone(e);i.type=t,i.group=this.getGroup(e.group);var n,s=this.options;return n=s.axisOnTop?this.size.axis.height+s.eventMarginAxis+s.eventMargin/2:this.size.contentHeight-s.eventMarginAxis-s.eventMargin/2,t in this.itemTypes?new this.itemTypes[t](i,{top:n}):(console.log('ERROR: Unknown event type "'+t+'"'),new links.Timeline.Item(i,{top:n}))},links.Timeline.prototype.changeItem=function(e,t,i){var n=this.items[e];if(!n)throw"Cannot change item, index out of range";var s=this.createItem({start:t.hasOwnProperty("start")?t.start:n.start,end:t.hasOwnProperty("end")?t.end:n.end,content:t.hasOwnProperty("content")?t.content:n.content,group:t.hasOwnProperty("group")?t.group:this.getGroupName(n.group),className:t.hasOwnProperty("className")?t.className:n.className,editable:t.hasOwnProperty("editable")?t.editable:n.editable,type:t.hasOwnProperty("type")?t.type:n.type});this.items[e]=s,this.renderQueue.hide.push(n),this.renderQueue.show.push(s),this.updateData(e,t),this.options.cluster&&this.clusterGenerator.updateData(),i||(this.render({animate:!1}),this.selection&&this.selection.index==e&&s.select())},links.Timeline.prototype.deleteGroups=function(){this.groups=[],this.groupIndexes={}},links.Timeline.prototype.getGroup=function(e){var t=this.groups,i=this.groupIndexes,n=void 0,s=i[e];if(void 0==s&&void 0!=e){n={content:e,labelTop:0,lineTop:0},t.push(n),1==this.options.groupsOrder?t=t.sort(function(e,t){return e.content>t.content?1:e.content<t.content?-1:0}):"function"==typeof this.options.groupsOrder&&(t=t.sort(this.options.groupsOrder));for(var o=0,a=t.length;a>o;o++)i[t[o].content]=o}else n=t[s];return n},links.Timeline.prototype.getGroupName=function(e){return e?e.content:void 0},links.Timeline.prototype.cancelChange=function(){this.applyChange=!1},links.Timeline.prototype.cancelDelete=function(){this.applyDelete=!1},links.Timeline.prototype.cancelAdd=function(){this.applyAdd=!1},links.Timeline.prototype.setSelection=function(e){if(void 0!=e&&e.length>0){if(void 0!=e[0].row){var t=e[0].row;if(this.items[t]){var i=this.items[t];this.selectItem(t);var n,s=i.start,o=i.end;n=void 0!=o?(o.valueOf()+s.valueOf())/2:s.valueOf();var a=this.end.valueOf()-this.start.valueOf(),r=new Date(n-a/2),l=new Date(n+a/2);return this.setVisibleChartRange(r,l),!0}}}else this.unselectItem();return!1},links.Timeline.prototype.getSelection=function(){var e=[];return this.selection&&e.push(void 0!==this.selection.index?{row:this.selection.index}:{cluster:this.selection.cluster}),e},links.Timeline.prototype.selectItem=function(e){if(this.unselectItem(),this.selection=void 0,void 0!=this.items[e]){{var t=this.items[e];t.dom}this.selection={index:e},t&&t.dom&&(this.isEditable(t)&&(t.dom.style.cursor="move"),t.select()),this.repaintDeleteButton(),this.repaintDragAreas()}},links.Timeline.prototype.selectCluster=function(e){this.unselectItem(),this.selection=void 0,void 0!=this.clusters[e]&&(this.selection={cluster:e},this.repaintDeleteButton(),this.repaintDragAreas())},links.Timeline.prototype.isSelected=function(e){return this.selection&&this.selection.index==e},links.Timeline.prototype.unselectItem=function(){if(this.selection&&void 0!==this.selection.index){var e=this.items[this.selection.index];if(e&&e.dom){var t=e.dom;t.style.cursor="",e.unselect()}this.selection=void 0,this.repaintDeleteButton(),this.repaintDragAreas()}},links.Timeline.prototype.stackItems=function(e){void 0==e&&(e=!1);var t=this.stack;if(t||(t={},this.stack=t),t.sortedItems=this.stackOrder(this.renderedItems),t.finalItems=this.stackCalculateFinal(t.sortedItems),e||t.timer){var i=this,n=function(){var e=i.stackMoveOneStep(t.sortedItems,t.finalItems);i.repaint(),e?delete t.timer:t.timer=setTimeout(n,30)};t.timer||(t.timer=setTimeout(n,30))}else this.stackMoveToFinal(t.sortedItems,t.finalItems)},links.Timeline.prototype.stackCancelAnimation=function(){this.stack&&this.stack.timer&&(clearTimeout(this.stack.timer),delete this.stack.timer)},links.Timeline.prototype.getItemsByGroup=function(e){for(var t={},i=0;i<e.length;++i){var n=e[i],s="undefined";n.group&&(s=n.group.content?n.group.content:n.group),t[s]||(t[s]=[]),t[s].push(n)}return t},links.Timeline.prototype.stackOrder=function(e){var t=e.concat([]),i=this.options.customStackOrder&&"function"==typeof this.options.customStackOrder?this.options.customStackOrder:function(e,t){return(e instanceof links.Timeline.ItemRange||e instanceof links.Timeline.ItemFloatingRange)&&!(t instanceof links.Timeline.ItemRange||t instanceof links.Timeline.ItemFloatingRange)?-1:e instanceof links.Timeline.ItemRange||e instanceof links.Timeline.ItemFloatingRange||!(t instanceof links.Timeline.ItemRange||t instanceof links.Timeline.ItemFloatingRange)?e.left-t.left:1};return t.sort(i),t},links.Timeline.prototype.stackCalculateFinal=function(e){var t,i,n=this.size,s=this.options,o=s.axisOnTop,a=s.eventMargin,r=s.eventMarginAxis,l=o?n.axis.height+r+a/2:n.contentHeight-r-a/2,h=[];for(t=this.getItemsByGroup(e),j=0;j<this.groups.length;++j){var m=this.groups[j];t[m.content]?(i=this.finalItemsPosition(t[m.content],l,m),i.forEach(function(e){h.push(e)}),o?l+=m.itemsHeight+a:l-=m.itemsHeight+a):o?l+=s.groupMinHeight+a:l-=s.groupMinHeight+a}return t.undefined&&(i=this.finalItemsPosition(t.undefined,l),i.forEach(function(e){h.push(e)})),h},links.Timeline.prototype.finalItemsPosition=function(e,t,i){var n,s,o,a=this.options,r=a.axisOnTop,l=a.eventMargin;for(o=this.initialItemsPosition(e,t),n=0,s=o.length;s>n;n++){var h=o[n],m=null;if(this.options.stackEvents)do m=this.stackItemsCheckOverlap(o,n,0,n-1),null!=m&&(h.top=r?m.top+m.height+l:m.top-h.height-l,h.bottom=h.top+h.height);while(m);i&&(i.itemsHeight=r?i.itemsHeight?Math.max(i.itemsHeight,h.bottom-t):h.height+l:i.itemsHeight?Math.max(i.itemsHeight,t-h.top):h.height+l)}return o},links.Timeline.prototype.initialItemsPosition=function(e,t){for(var i=this.options,n=i.axisOnTop,s=[],o=0,a=e.length;a>o;++o){var r,l,h=e[o],m=h.height,p=h.getWidth(this),u=h.getRight(this),d=u-p;r=n?t:t-m,l=r+m,s.push({left:d,top:r,right:u,bottom:l,height:m,item:h})}return s},links.Timeline.prototype.stackMoveOneStep=function(e,t){for(var i=!0,n=0,s=t.length;s>n;n++){var o=t[n],a=o.item,r=parseInt(a.top),l=parseInt(o.top),h=l-r;if(h){var m=l==r?0:l>r?1:-1;Math.abs(h)>4&&(m=h/4);var p=parseInt(r+m);p!=l&&(i=!1),a.top=p,a.bottom=a.top+a.height}else a.top=o.top,a.bottom=o.bottom;a.left=o.left,a.right=o.right}return i},links.Timeline.prototype.stackMoveToFinal=function(e,t){for(var i=0,n=t.length;n>i;i++){var s=t[i],o=s.item;o.left=s.left,o.top=s.top,o.right=s.right,o.bottom=s.bottom}},links.Timeline.prototype.stackItemsCheckOverlap=function(e,t,i,n){for(var s=this.options.eventMargin,o=this.collision,a=e[t],r=n;r>=i;r--){var l=e[r];if(o(a,l,s)&&r!=t)return l}return void 0},links.Timeline.prototype.collision=function(e,t,i){return void 0==i&&(i=0),e.left-i<t.right&&e.right+i>t.left&&e.top-i<t.bottom&&e.bottom+i>t.top},links.Timeline.prototype.trigger=function(e){var t=null;switch(e){case"rangechange":case"rangechanged":t={start:new Date(this.start.valueOf()),end:new Date(this.end.valueOf())};break;case"timechange":case"timechanged":t={time:new Date(this.customTime.valueOf())}}links.events.trigger(this,e,t),google&&google.visualization&&google.visualization.events.trigger(this,e,t)},links.Timeline.prototype.clusterItems=function(){if(this.options.cluster){var e=this.clusterGenerator.getClusters(this.conversion.factor,this.options.clusterMaxItems);if(this.clusters!=e){var t=this.renderQueue;this.clusters&&this.clusters.forEach(function(e){t.hide.push(e),e.items.forEach(function(e){e.cluster=void 0})}),e.forEach(function(e){e.items.forEach(function(t){t.cluster=e})}),this.clusters=e}}},links.Timeline.prototype.filterItems=function(){function e(e){e.forEach(function(e){var i=e.rendered,o=e.isVisible(n,s);i!=o&&(i&&t.hide.push(e),o&&-1==t.show.indexOf(e)&&t.show.push(e))})}var t=this.renderQueue,i=this.end-this.start,n=new Date(this.start.valueOf()-i),s=new Date(this.end.valueOf()+i);e(this.items),this.clusters&&e(this.clusters)},links.Timeline.ClusterGenerator=function(e){this.timeline=e,this.clear()},links.Timeline.ClusterGenerator.prototype.clear=function(){this.items=[],this.groups={},this.clearCache()},links.Timeline.ClusterGenerator.prototype.clearCache=function(){this.cache={},this.cacheLevel=-1,this.cache[this.cacheLevel]=[]},links.Timeline.ClusterGenerator.prototype.setData=function(e,t){this.items=e||[],this.dataChanged=!0,this.applyOnChangedLevel=!0,t&&t.applyOnChangedLevel&&(this.applyOnChangedLevel=t.applyOnChangedLevel)},links.Timeline.ClusterGenerator.prototype.updateData=function(){this.dataChanged=!0,this.applyOnChangedLevel=!1},links.Timeline.ClusterGenerator.prototype.filterData=function(){var e=this.items||[],t={};this.groups=t,e.forEach(function(e){var i=e.group?e.group.content:"",n=t[i];n||(n=[],t[i]=n),n.push(e),e.start&&(e.center=e.end?(e.start.valueOf()+e.end.valueOf())/2:e.start.valueOf())});for(var i in t)t.hasOwnProperty(i)&&t[i].sort(function(e,t){return e.center-t.center});this.dataChanged=!1},links.Timeline.ClusterGenerator.prototype.getClusters=function(e,t){var i=-1,n=2,s=0;if(e>0&&(i=Math.round(Math.log(100/e)/Math.log(n)),s=Math.pow(n,i)),this.dataChanged){var o=i!=this.cacheLevel,a=this.applyOnChangedLevel?o:!0;a&&(this.clearCache(),this.filterData())}this.cacheLevel=i;var r=this.cache[i];if(!r){r=[];for(var l in this.groups)if(this.groups.hasOwnProperty(l))for(var h=this.groups[l],m=h.length,p=0;m>p;){for(var u=h[p],d=1,c=p-1;c>=0&&u.center-h[c].center<s/2;)h[c].cluster||d++,c--;for(var g=p+1;g<h.length&&h[g].center-u.center<s/2;)d++,g++;for(var f=r.length-1;f>=0&&u.center-r[f].center<s/2;)u.group==r[f].group&&d++,f--;if(d>t){for(var v=d-t+1,T=[],k=void 0,y=void 0,D=void 0,x=!1,M=0,S=p;T.length<v&&S<h.length;){var C=h[S],I=C.start.valueOf(),E=C.end?C.end.valueOf():C.start.valueOf();T.push(C),k=M?M/(M+1)*k+1/(M+1)*C.center:C.center,y=void 0!=y?Math.min(y,I):I,D=void 0!=D?Math.max(D,E):E,x=x||C instanceof links.Timeline.ItemRange||C instanceof links.Timeline.ItemFloatingRange,M++,S++}var O,w="Cluster containing "+M+" events. Zoom in to see the individual events.",L='<div title="'+w+'">'+M+" events</div>",b=u.group?u.group.content:void 0;O=this.timeline.createItem(x?{start:new Date(y),end:new Date(D),content:L,group:b}:{start:new Date(k),content:L,group:b}),O.isCluster=!0,O.items=T,O.items.forEach(function(e){e.cluster=O}),r.push(O),p+=v}else delete u.cluster,p+=1}this.cache[i]=r}return r},links.events=links.events||{listeners:[],indexOf:function(e){for(var t=this.listeners,i=0,n=this.listeners.length;n>i;i++){var s=t[i];if(s&&s.object==e)return i}return-1},addListener:function(e,t,i){var n=this.indexOf(e),s=this.listeners[n];s||(s={object:e,events:{}},this.listeners.push(s));var o=s.events[t];o||(o=[],s.events[t]=o),-1==o.indexOf(i)&&o.push(i)},removeListener:function(e,t,i){var n=this.indexOf(e),s=this.listeners[n];if(s){var o=s.events[t];if(o){var n=o.indexOf(i);-1!=n&&o.splice(n,1),0==o.length&&delete s.events[t]}var a=0,r=s.events;for(var l in r)r.hasOwnProperty(l)&&a++;0==a&&delete this.listeners[n]}},removeAllListeners:function(){this.listeners=[]},trigger:function(e,t,i){var n=this.indexOf(e),s=this.listeners[n];if(s){var o=s.events[t];if(o)for(var a=0,r=o.length;r>a;a++)o[a](i)}}},links.Timeline.StepDate=function(e,t,i){this.current=new Date,this._start=new Date,this._end=new Date,this.autoScale=!0,this.scale=links.Timeline.StepDate.SCALE.DAY,this.step=1,this.setRange(e,t,i)},links.Timeline.StepDate.SCALE={MILLISECOND:1,SECOND:2,MINUTE:3,HOUR:4,DAY:5,WEEKDAY:6,MONTH:7,YEAR:8},links.Timeline.StepDate.prototype.setRange=function(e,t,i){e instanceof Date&&t instanceof Date&&(this._start=void 0!=e?new Date(e.valueOf()):new Date,this._end=void 0!=t?new Date(t.valueOf()):new Date,this.autoScale&&this.setMinimumStep(i))},links.Timeline.StepDate.prototype.start=function(){this.current=new Date(this._start.valueOf()),this.roundToMinor()},links.Timeline.StepDate.prototype.roundToMinor=function(){switch(this.scale){case links.Timeline.StepDate.SCALE.YEAR:this.current.setFullYear(this.step*Math.floor(this.current.getFullYear()/this.step)),this.current.setMonth(0);case links.Timeline.StepDate.SCALE.MONTH:this.current.setDate(1);case links.Timeline.StepDate.SCALE.DAY:case links.Timeline.StepDate.SCALE.WEEKDAY:this.current.setHours(0);case links.Timeline.StepDate.SCALE.HOUR:this.current.setMinutes(0);case links.Timeline.StepDate.SCALE.MINUTE:this.current.setSeconds(0);case links.Timeline.StepDate.SCALE.SECOND:this.current.setMilliseconds(0)}if(1!=this.step)switch(this.scale){case links.Timeline.StepDate.SCALE.MILLISECOND:this.current.setMilliseconds(this.current.getMilliseconds()-this.current.getMilliseconds()%this.step);break;case links.Timeline.StepDate.SCALE.SECOND:this.current.setSeconds(this.current.getSeconds()-this.current.getSeconds()%this.step);break;case links.Timeline.StepDate.SCALE.MINUTE:this.current.setMinutes(this.current.getMinutes()-this.current.getMinutes()%this.step);break;case links.Timeline.StepDate.SCALE.HOUR:this.current.setHours(this.current.getHours()-this.current.getHours()%this.step);break;case links.Timeline.StepDate.SCALE.WEEKDAY:case links.Timeline.StepDate.SCALE.DAY:this.current.setDate(this.current.getDate()-1-(this.current.getDate()-1)%this.step+1);break;case links.Timeline.StepDate.SCALE.MONTH:this.current.setMonth(this.current.getMonth()-this.current.getMonth()%this.step);break;case links.Timeline.StepDate.SCALE.YEAR:this.current.setFullYear(this.current.getFullYear()-this.current.getFullYear()%this.step)}},links.Timeline.StepDate.prototype.end=function(){return this.current.valueOf()>this._end.valueOf()},links.Timeline.StepDate.prototype.next=function(){var e=this.current.valueOf();if(this.current.getMonth()<6)switch(this.scale){case links.Timeline.StepDate.SCALE.MILLISECOND:this.current=new Date(this.current.valueOf()+this.step);break;case links.Timeline.StepDate.SCALE.SECOND:this.current=new Date(this.current.valueOf()+1e3*this.step);break;case links.Timeline.StepDate.SCALE.MINUTE:this.current=new Date(this.current.valueOf()+1e3*this.step*60);break;case links.Timeline.StepDate.SCALE.HOUR:this.current=new Date(this.current.valueOf()+1e3*this.step*60*60);var t=this.current.getHours();this.current.setHours(t-t%this.step);break;case links.Timeline.StepDate.SCALE.WEEKDAY:case links.Timeline.StepDate.SCALE.DAY:this.current.setDate(this.current.getDate()+this.step);break;case links.Timeline.StepDate.SCALE.MONTH:this.current.setMonth(this.current.getMonth()+this.step);break;case links.Timeline.StepDate.SCALE.YEAR:this.current.setFullYear(this.current.getFullYear()+this.step)}else switch(this.scale){case links.Timeline.StepDate.SCALE.MILLISECOND:this.current=new Date(this.current.valueOf()+this.step);break;case links.Timeline.StepDate.SCALE.SECOND:this.current.setSeconds(this.current.getSeconds()+this.step);break;case links.Timeline.StepDate.SCALE.MINUTE:this.current.setMinutes(this.current.getMinutes()+this.step);break;case links.Timeline.StepDate.SCALE.HOUR:this.current.setHours(this.current.getHours()+this.step);break;case links.Timeline.StepDate.SCALE.WEEKDAY:case links.Timeline.StepDate.SCALE.DAY:this.current.setDate(this.current.getDate()+this.step);break;case links.Timeline.StepDate.SCALE.MONTH:this.current.setMonth(this.current.getMonth()+this.step);break;case links.Timeline.StepDate.SCALE.YEAR:this.current.setFullYear(this.current.getFullYear()+this.step)}if(1!=this.step)switch(this.scale){case links.Timeline.StepDate.SCALE.MILLISECOND:this.current.getMilliseconds()<this.step&&this.current.setMilliseconds(0);break;case links.Timeline.StepDate.SCALE.SECOND:this.current.getSeconds()<this.step&&this.current.setSeconds(0);break;case links.Timeline.StepDate.SCALE.MINUTE:this.current.getMinutes()<this.step&&this.current.setMinutes(0);break;case links.Timeline.StepDate.SCALE.HOUR:this.current.getHours()<this.step&&this.current.setHours(0);break;case links.Timeline.StepDate.SCALE.WEEKDAY:case links.Timeline.StepDate.SCALE.DAY:this.current.getDate()<this.step+1&&this.current.setDate(1);break;case links.Timeline.StepDate.SCALE.MONTH:this.current.getMonth()<this.step&&this.current.setMonth(0);break;case links.Timeline.StepDate.SCALE.YEAR:}this.current.valueOf()==e&&(this.current=new Date(this._end.valueOf()))},links.Timeline.StepDate.prototype.getCurrent=function(){return this.current},links.Timeline.StepDate.prototype.setScale=function(e,t){this.scale=e,t>0&&(this.step=t),this.autoScale=!1},links.Timeline.StepDate.prototype.setAutoScale=function(e){this.autoScale=e},links.Timeline.StepDate.prototype.setMinimumStep=function(e){if(void 0!=e){var t=31104e6,i=2592e6,n=864e5,s=36e5,o=6e4,a=1e3,r=1;1e3*t>e&&(this.scale=links.Timeline.StepDate.SCALE.YEAR,this.step=1e3),500*t>e&&(this.scale=links.Timeline.StepDate.SCALE.YEAR,this.step=500),100*t>e&&(this.scale=links.Timeline.StepDate.SCALE.YEAR,this.step=100),50*t>e&&(this.scale=links.Timeline.StepDate.SCALE.YEAR,this.step=50),10*t>e&&(this.scale=links.Timeline.StepDate.SCALE.YEAR,this.step=10),5*t>e&&(this.scale=links.Timeline.StepDate.SCALE.YEAR,this.step=5),t>e&&(this.scale=links.Timeline.StepDate.SCALE.YEAR,this.step=1),3*i>e&&(this.scale=links.Timeline.StepDate.SCALE.MONTH,this.step=3),i>e&&(this.scale=links.Timeline.StepDate.SCALE.MONTH,this.step=1),5*n>e&&(this.scale=links.Timeline.StepDate.SCALE.DAY,this.step=5),2*n>e&&(this.scale=links.Timeline.StepDate.SCALE.DAY,this.step=2),n>e&&(this.scale=links.Timeline.StepDate.SCALE.DAY,this.step=1),n/2>e&&(this.scale=links.Timeline.StepDate.SCALE.WEEKDAY,this.step=1),4*s>e&&(this.scale=links.Timeline.StepDate.SCALE.HOUR,this.step=4),s>e&&(this.scale=links.Timeline.StepDate.SCALE.HOUR,this.step=1),15*o>e&&(this.scale=links.Timeline.StepDate.SCALE.MINUTE,this.step=15),10*o>e&&(this.scale=links.Timeline.StepDate.SCALE.MINUTE,this.step=10),5*o>e&&(this.scale=links.Timeline.StepDate.SCALE.MINUTE,this.step=5),o>e&&(this.scale=links.Timeline.StepDate.SCALE.MINUTE,this.step=1),15*a>e&&(this.scale=links.Timeline.StepDate.SCALE.SECOND,this.step=15),10*a>e&&(this.scale=links.Timeline.StepDate.SCALE.SECOND,this.step=10),5*a>e&&(this.scale=links.Timeline.StepDate.SCALE.SECOND,this.step=5),a>e&&(this.scale=links.Timeline.StepDate.SCALE.SECOND,this.step=1),200*r>e&&(this.scale=links.Timeline.StepDate.SCALE.MILLISECOND,this.step=200),100*r>e&&(this.scale=links.Timeline.StepDate.SCALE.MILLISECOND,this.step=100),50*r>e&&(this.scale=links.Timeline.StepDate.SCALE.MILLISECOND,this.step=50),10*r>e&&(this.scale=links.Timeline.StepDate.SCALE.MILLISECOND,this.step=10),5*r>e&&(this.scale=links.Timeline.StepDate.SCALE.MILLISECOND,this.step=5),r>e&&(this.scale=links.Timeline.StepDate.SCALE.MILLISECOND,this.step=1)}},links.Timeline.StepDate.prototype.snap=function(e){if(this.scale==links.Timeline.StepDate.SCALE.YEAR){var t=e.getFullYear()+Math.round(e.getMonth()/12);e.setFullYear(Math.round(t/this.step)*this.step),e.setMonth(0),e.setDate(0),e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0)}else if(this.scale==links.Timeline.StepDate.SCALE.MONTH)e.getDate()>15?(e.setDate(1),e.setMonth(e.getMonth()+1)):e.setDate(1),e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0);else if(this.scale==links.Timeline.StepDate.SCALE.DAY||this.scale==links.Timeline.StepDate.SCALE.WEEKDAY){switch(this.step){case 5:case 2:e.setHours(24*Math.round(e.getHours()/24));break;default:e.setHours(12*Math.round(e.getHours()/12))}e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0)}else if(this.scale==links.Timeline.StepDate.SCALE.HOUR){switch(this.step){case 4:e.setMinutes(60*Math.round(e.getMinutes()/60));break;default:e.setMinutes(30*Math.round(e.getMinutes()/30))}e.setSeconds(0),e.setMilliseconds(0)}else if(this.scale==links.Timeline.StepDate.SCALE.MINUTE){switch(this.step){case 15:case 10:e.setMinutes(5*Math.round(e.getMinutes()/5)),e.setSeconds(0);break;case 5:e.setSeconds(60*Math.round(e.getSeconds()/60));break;default:e.setSeconds(30*Math.round(e.getSeconds()/30))}e.setMilliseconds(0)}else if(this.scale==links.Timeline.StepDate.SCALE.SECOND)switch(this.step){case 15:case 10:e.setSeconds(5*Math.round(e.getSeconds()/5)),e.setMilliseconds(0);break;case 5:e.setMilliseconds(1e3*Math.round(e.getMilliseconds()/1e3));break;default:e.setMilliseconds(500*Math.round(e.getMilliseconds()/500))}else if(this.scale==links.Timeline.StepDate.SCALE.MILLISECOND){var i=this.step>5?this.step/2:1;e.setMilliseconds(Math.round(e.getMilliseconds()/i)*i)}},links.Timeline.StepDate.prototype.isMajor=function(){switch(this.scale){case links.Timeline.StepDate.SCALE.MILLISECOND:return 0==this.current.getMilliseconds();case links.Timeline.StepDate.SCALE.SECOND:return 0==this.current.getSeconds();case links.Timeline.StepDate.SCALE.MINUTE:return 0==this.current.getHours()&&0==this.current.getMinutes();case links.Timeline.StepDate.SCALE.HOUR:return 0==this.current.getHours();case links.Timeline.StepDate.SCALE.WEEKDAY:case links.Timeline.StepDate.SCALE.DAY:return 1==this.current.getDate();case links.Timeline.StepDate.SCALE.MONTH:return 0==this.current.getMonth();case links.Timeline.StepDate.SCALE.YEAR:return!1;default:return!1}},links.Timeline.StepDate.prototype.getLabelMinor=function(e,t){switch(void 0==t&&(t=this.current),this.scale){case links.Timeline.StepDate.SCALE.MILLISECOND:return String(t.getMilliseconds());case links.Timeline.StepDate.SCALE.SECOND:return String(t.getSeconds());case links.Timeline.StepDate.SCALE.MINUTE:return this.addZeros(t.getHours(),2)+":"+this.addZeros(t.getMinutes(),2);case links.Timeline.StepDate.SCALE.HOUR:return this.addZeros(t.getHours(),2)+":"+this.addZeros(t.getMinutes(),2);case links.Timeline.StepDate.SCALE.WEEKDAY:return e.DAYS_SHORT[t.getDay()]+" "+t.getDate();case links.Timeline.StepDate.SCALE.DAY:return String(t.getDate());case links.Timeline.StepDate.SCALE.MONTH:return e.MONTHS_SHORT[t.getMonth()];case links.Timeline.StepDate.SCALE.YEAR:return String(t.getFullYear());default:return""}},links.Timeline.StepDate.prototype.getLabelMajor=function(e,t){switch(void 0==t&&(t=this.current),this.scale){case links.Timeline.StepDate.SCALE.MILLISECOND:return this.addZeros(t.getHours(),2)+":"+this.addZeros(t.getMinutes(),2)+":"+this.addZeros(t.getSeconds(),2);case links.Timeline.StepDate.SCALE.SECOND:return t.getDate()+" "+e.MONTHS[t.getMonth()]+" "+this.addZeros(t.getHours(),2)+":"+this.addZeros(t.getMinutes(),2);case links.Timeline.StepDate.SCALE.MINUTE:return e.DAYS[t.getDay()]+" "+t.getDate()+" "+e.MONTHS[t.getMonth()]+" "+t.getFullYear();case links.Timeline.StepDate.SCALE.HOUR:return e.DAYS[t.getDay()]+" "+t.getDate()+" "+e.MONTHS[t.getMonth()]+" "+t.getFullYear();case links.Timeline.StepDate.SCALE.WEEKDAY:case links.Timeline.StepDate.SCALE.DAY:return e.MONTHS[t.getMonth()]+" "+t.getFullYear();case links.Timeline.StepDate.SCALE.MONTH:return String(t.getFullYear());default:return""}},links.Timeline.StepDate.prototype.addZeros=function(e,t){for(var i=""+e;i.length<t;)i="0"+i;return i},links.imageloader=function(){function e(e){if(1==o[e])return!0;var t=new Image;return t.src=e,t.complete?!0:!1}function t(e){return void 0!=a[e]}function i(i,n,s){if(void 0==s&&(s=!0),e(i))return void(s&&n(i));if(!t(i)||s){var r=a[i];if(!r){var l=new Image;l.src=i,r=[],a[i]=r,l.onload=function(){o[i]=!0,delete a[i];for(var e=0;e<r.length;e++)r[e](i)}}-1==r.indexOf(n)&&r.push(n)}}function n(t,n,s){var o=[];if(t.forEach(function(t){e(t)||o.push(t)}),o.length){var a=o.length;o.forEach(function(e){i(e,function(){a--,0==a&&n()},s)})}else s&&n()}function s(e,t){for(var i=e.firstChild;i;){if("IMG"==i.tagName){var n=i.src;-1==t.indexOf(n)&&t.push(n)}s(i,t),i=i.nextSibling}}var o={},a={};return{isLoaded:e,isLoading:t,load:i,loadAll:n,filterImageUrls:s}}(),links.Timeline.addEventListener=function(e,t,i,n){e.addEventListener?(void 0===n&&(n=!1),"mousewheel"===t&&navigator.userAgent.indexOf("Firefox")>=0&&(t="DOMMouseScroll"),e.addEventListener(t,i,n)):e.attachEvent("on"+t,i)},links.Timeline.removeEventListener=function(e,t,i,n){e.removeEventListener?(void 0===n&&(n=!1),"mousewheel"===t&&navigator.userAgent.indexOf("Firefox")>=0&&(t="DOMMouseScroll"),e.removeEventListener(t,i,n)):e.detachEvent("on"+t,i)},links.Timeline.getTarget=function(e){e||(e=window.event);var t;return e.target?t=e.target:e.srcElement&&(t=e.srcElement),void 0!=t.nodeType&&3==t.nodeType&&(t=t.parentNode),t},links.Timeline.stopPropagation=function(e){e||(e=window.event),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},links.Timeline.preventDefault=function(e){e||(e=window.event),e.preventDefault?e.preventDefault():e.returnValue=!1},links.Timeline.getAbsoluteLeft=function(e){for(var t=document.documentElement,i=document.body,n=e.offsetLeft,s=e.offsetParent;null!=s&&s!=i&&s!=t;)n+=s.offsetLeft,n-=s.scrollLeft,s=s.offsetParent;return n},links.Timeline.getAbsoluteTop=function(e){for(var t=document.documentElement,i=document.body,n=e.offsetTop,s=e.offsetParent;null!=s&&s!=i&&s!=t;)n+=s.offsetTop,n-=s.scrollTop,s=s.offsetParent;return n},links.Timeline.getPageY=function(e){if("targetTouches"in e&&e.targetTouches.length&&(e=e.targetTouches[0]),"pageY"in e)return e.pageY;var t=e.clientY,i=document.documentElement,n=document.body;return t+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)},links.Timeline.getPageX=function(e){if("targetTouches"in e&&e.targetTouches.length&&(e=e.targetTouches[0]),"pageX"in e)return e.pageX;var t=e.clientX,i=document.documentElement,n=document.body;return t+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0)},links.Timeline.addClassName=function(e,t){for(var i=e.className.split(" "),n=t.split(" "),s=!1,o=0;o<n.length;o++)-1==i.indexOf(n[o])&&(i.push(n[o]),s=!0);s&&(e.className=i.join(" "))},links.Timeline.removeClassName=function(e,t){for(var i=e.className.split(" "),n=t.split(" "),s=!1,o=0;o<n.length;o++){var a=i.indexOf(n[o]);-1!=a&&(i.splice(a,1),s=!0)}s&&(e.className=i.join(" "))},links.Timeline.isArray=function(e){return e instanceof Array?!0:"[object Array]"===Object.prototype.toString.call(e)},links.Timeline.clone=function(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},links.Timeline.parseJSONDate=function(e){if(void 0==e)return void 0;if(e instanceof Date)return e;var t=e.match(/\/Date\((-?\d+)([-\+]?\d{2})?(\d{2})?\)\//i);if(t){var i=t[2]?36e5*t[2]+6e4*t[3]*(t[2]/Math.abs(t[2])):0;return new Date(1*t[1]+i)}return Date.parse(e)};

/* AjaxQ jQuery Plugin
   Copyright (c) 2012 Foliotek Inc.
   MIT License
   https://github.com/Foliotek/ajaxq */
!function(e){var n={},t={};e.ajaxq=function(r,a){function i(e){if(n[r])n[r].push(e);else{n[r]=[];var a=e();t[r]=a}}function u(){if(n[r]){var e=n[r].shift();if(e){var a=e();t[r]=a}else delete n[r],delete t[r]}}if("undefined"==typeof a)throw"AjaxQ: queue name is not provided";var o=e.Deferred(),f=o.promise();f.success=f.done,f.error=f.fail,f.complete=f.always;var s="function"==typeof a,c=s?null:e.extend(!0,{},a);return i(function(){var n=e.ajax.apply(window,[s?a():c]);return n.done(function(){o.resolve.apply(this,arguments)}),n.fail(function(){o.reject.apply(this,arguments)}),n.always(u),n}),f},e.each(["getq","postq"],function(n,t){e[t]=function(n,r,a,i,u){return e.isFunction(a)&&(u=u||i,i=a,a=void 0),e.ajaxq(n,{type:"postq"===t?"post":"get",url:r,data:a,success:i,dataType:u})}});var r=function(e){return n.hasOwnProperty(e)&&n[e].length>0},a=function(){for(var e in n)if(r(e))return!0;return!1};e.ajaxq.isRunning=function(e){return e?r(e):a()},e.ajaxq.getActiveRequest=function(e){if(!e)throw"AjaxQ: queue name is required";return t[e]},e.ajaxq.abort=function(r){if(!r)throw"AjaxQ: queue name is required";var a=e.ajaxq.getActiveRequest(r);delete n[r],delete t[r],a&&a.abort()},e.ajaxq.clear=function(e){if(e)n[e]&&(n[e]=[]);else for(var t in n)n.hasOwnProperty(t)&&(n[t]=[])}}(jQuery);

/*
 (c) 2011-2014, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun/moon position and light phases.
 https://github.com/mourner/suncalc
*/
!function(){"use strict";function n(n){return n.valueOf()/I-.5+S}function t(n){return new Date((n+.5-S)*I)}function e(t){return n(t)-T}function r(n,t){return b(P(n)*p(k)-D(t)*P(k),p(n))}function a(n,t){return y(P(t)*p(k)+p(t)*P(k)*P(n))}function u(n,t,e){return b(P(n),p(n)*P(t)-D(e)*p(t))}function i(n,t,e){return y(P(t)*P(e)+p(t)*p(e)*p(n))}function o(n,t){return H*(280.16+360.9856235*n)-t}function c(n){return H*(357.5291+.98560028*n)}function s(n){var t=H*(1.9148*P(n)+.02*P(2*n)+3e-4*P(3*n)),e=102.9372*H;return n+t+e+w}function d(n){var t=c(n),e=s(t);return{dec:a(e,0),ra:r(e,0)}}function f(n,t){return Math.round(n-q-t/(2*w))}function l(n,t,e){return q+(n+t)/(2*w)+e}function M(n,t,e){return T+n+.0053*P(t)-.0069*P(2*e)}function h(n,t,e){return E((P(n)-P(t)*P(e))/(p(t)*p(e)))}function v(n,t,e,r,a,u,i){var o=h(n,e,r),c=l(o,t,a);return M(c,u,i)}function g(n){var t=H*(218.316+13.176396*n),e=H*(134.963+13.064993*n),u=H*(93.272+13.22935*n),i=t+6.289*H*P(e),o=5.128*H*P(u),c=385001-20905*p(e);return{ra:r(i,o),dec:a(i,o),dist:c}}function m(n,t){return new Date(n.valueOf()+t*I/24)}var w=Math.PI,P=Math.sin,p=Math.cos,D=Math.tan,y=Math.asin,b=Math.atan2,E=Math.acos,H=w/180,I=864e5,S=2440588,T=2451545,k=23.4397*H,z={};z.getPosition=function(n,t,r){var a=H*-r,c=H*t,s=e(n),f=d(s),l=o(s,a)-f.ra;return{azimuth:u(l,c,f.dec),altitude:i(l,c,f.dec)}};var O=z.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];z.addTime=function(n,t,e){O.push([n,t,e])};var q=9e-4;z.getTimes=function(n,r,u){var i,o,d,h,g,m=H*-u,w=H*r,P=e(n),p=f(P,m),D=l(0,m,p),y=c(D),b=s(y),E=a(b,0),I=M(D,y,b),S={solarNoon:t(I),nadir:t(I-.5)};for(i=0,o=O.length;o>i;i+=1)d=O[i],h=v(d[0]*H,m,w,E,p,y,b),g=I-(h-I),S[d[1]]=t(g),S[d[2]]=t(h);return S},z.getMoonPosition=function(n,t,r){var a=H*-r,c=H*t,s=e(n),d=g(s),f=o(s,a)-d.ra,l=i(f,c,d.dec);return l+=.017*H/D(l+10.26*H/(l+5.1*H)),{azimuth:u(f,c,d.dec),altitude:l,distance:d.dist}},z.getMoonIllumination=function(n){var t=e(n),r=d(t),a=g(t),u=149598e3,i=E(P(r.dec)*P(a.dec)+p(r.dec)*p(a.dec)*p(r.ra-a.ra)),o=b(u*P(i),a.dist-u*p(i)),c=b(p(r.dec)*P(r.ra-a.ra),P(r.dec)*p(a.dec)-p(r.dec)*P(a.dec)*p(r.ra-a.ra));return{fraction:(1+p(o))/2,phase:.5+.5*o*(0>c?-1:1)/Math.PI,angle:c}},z.getMoonTimes=function(n,t,e){var r=new Date(n);r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0);for(var a,u,i,o,c,s,d,f,l,M,h,v,g,w=.133*H,P=z.getMoonPosition(r,t,e).altitude-w,p=1;24>=p&&(a=z.getMoonPosition(m(r,p),t,e).altitude-w,u=z.getMoonPosition(m(r,p+1),t,e).altitude-w,c=(P+u)/2-a,s=(u-P)/2,d=-s/(2*c),f=(c*d+s)*d+a,l=s*s-4*c*a,M=0,l>=0&&(g=Math.sqrt(l)/(2*Math.abs(c)),h=d-g,v=d+g,Math.abs(h)<=1&&M++,Math.abs(v)<=1&&M++,-1>h&&(h=v)),1===M?0>P?i=p+h:o=p+h:2===M&&(i=p+(0>f?v:h),o=p+(0>f?h:v)),!i||!o);p+=2)P=u;var D={};return i&&(D.rise=m(r,i)),o&&(D.set=m(r,o)),i||o||(D[f>0?"alwaysUp":"alwaysDown"]=!0),D},"function"==typeof define&&define.amd?define(z):"undefined"!=typeof module?module.exports=z:window.SunCalc=z}();

/*
 * JavaScript MD5 1.1.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove=function(t,h){var e=this.slice((h||t)+1||this.length);return this.length=0>t?this.length+t:t,this.push.apply(this,e)};

// Stanford Javascript Crypto Library (1.0.4)
"use strict";function q(a){throw a;}var s=void 0,u=!1;var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);"function"===typeof define&&define([],function(){return sjcl});sjcl.cipher.aes=function(a){this.l[0][0][0]||this.G();var b,c,d,e,g=this.l[0][4],f=this.l[1];b=a.length;var h=1;4!==b&&(6!==b&&8!==b)&&q(new sjcl.exception.invalid("invalid aes key size"));this.b=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=g[c>>>24]<<24^g[c>>16&255]<<16^g[c>>8&255]<<8^g[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:f[0][g[c>>>24]]^f[1][g[c>>16&255]]^f[2][g[c>>8&255]]^f[3][g[c&255]]};sjcl.cipher.aes.prototype={encrypt:function(a){return w(this,a,0)},decrypt:function(a){return w(this,a,1)},l:[[[],[],[],[],[]],[[],[],[],[],[]]],G:function(){var a=this.l[0],b=this.l[1],c=a[4],d=b[4],e,g,f,h=[],l=[],k,m,n,p;for(e=0;0x100>e;e++)l[(h[e]=e<<1^283*(e>>7))^e]=e;for(g=f=0;!c[g];g^=k||1,f=l[f]||1){n=f^f<<1^f<<2^f<<3^f<<4;n=n>>8^n&255^99;c[g]=n;d[n]=g;m=h[e=h[k=h[g]]];p=0x1010101*m^0x10001*e^0x101*k^0x1010100*g;m=0x101*h[n]^0x1010100*n;for(e=0;4>e;e++)a[e][g]=m=m<<24^m>>>8,b[e][n]=p=p<<24^p>>>8}for(e=0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)}};function w(a,b,c){4!==b.length&&q(new sjcl.exception.invalid("invalid aes block size"));var d=a.b[c],e=b[0]^d[0],g=b[c?3:1]^d[1],f=b[2]^d[2];b=b[c?1:3]^d[3];var h,l,k,m=d.length/4-2,n,p=4,t=[0,0,0,0];h=a.l[c];a=h[0];var r=h[1],v=h[2],y=h[3],z=h[4];for(n=0;n<m;n++)h=a[e>>>24]^r[g>>16&255]^v[f>>8&255]^y[b&255]^d[p],l=a[g>>>24]^r[f>>16&255]^v[b>>8&255]^y[e&255]^d[p+1],k=a[f>>>24]^r[b>>16&255]^v[e>>8&255]^y[g&255]^d[p+2],b=a[b>>>24]^r[e>>16&255]^v[g>>8&255]^y[f&255]^d[p+3],p+=4,e=h,g=l,f=k;for(n=0;4>n;n++)t[c?3&-n:n]=z[e>>>24]<<24^z[g>>16&255]<<16^z[f>>8&255]<<8^z[b&255]^d[p++],h=e,e=g,g=f,f=b,b=h;return t}sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.R(a.slice(b/32),32-(b&31)).slice(1);return c===s?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray.R(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return 0===b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b&=31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return u;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^b[d];return 0===c},R:function(a,b,c,d){var e;e=0;for(d===s&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},g:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]},byteswapM:function(a){var b,c;for(b=0;b<a.length;++b)c=a[b],a[b]=c>>>24|c>>>8&0xff00|(c&0xff00)<<8|c<<24;return a}};sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>24),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a+="00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};sjcl.codec.base32={p:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",O:"0123456789ABCDEFGHIJKLMNOPQRSTUV",BITS:32,BASE:5,REMAINING:27,fromBits:function(a,b,c){var d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,g="",f=0,h=sjcl.codec.base32.p,l=0,k=sjcl.bitArray.bitLength(a);c&&(h=sjcl.codec.base32.O);for(c=0;g.length*d<k;)g+=h.charAt((l^a[c]>>>f)>>>e),f<d?(l=a[c]<<d-f,f+=e,c++):(l<<=d,f-=d);for(;g.length&7&&!b;)g+="=";return g},toBits:function(a,b){a=a.replace(/\s|=/g,"").toUpperCase();var c=sjcl.codec.base32.BITS,d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,g=[],f,h=0,l=sjcl.codec.base32.p,k=0,m,n="base32";b&&(l=sjcl.codec.base32.O,n="base32hex");for(f=0;f<a.length;f++){m=l.indexOf(a.charAt(f));if(0>m){if(!b)try{return sjcl.codec.base32hex.toBits(a)}catch(p){}q(new sjcl.exception.invalid("this isn't "+n+"!"))}h>e?(h-=e,g.push(k^m>>>h),k=m<<c-h):(h+=d,k^=m<<c-h)}h&56&&g.push(sjcl.bitArray.partial(h&56,k,1));return g}};sjcl.codec.base32hex={fromBits:function(a,b){return sjcl.codec.base32.fromBits(a,b,1)},toBits:function(a){return sjcl.codec.base32.toBits(a,1)}};sjcl.codec.base64={p:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,g=sjcl.codec.base64.p,f=0,h=sjcl.bitArray.bitLength(a);c&&(g=g.substr(0,62)+"-_");for(c=0;6*d.length<h;)d+=g.charAt((f^a[c]>>>e)>>>26),6>e?(f=a[c]<<6-e,e+=26,c++):(f<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,g=sjcl.codec.base64.p,f=0,h;b&&(g=g.substr(0,62)+"-_");for(d=0;d<a.length;d++)h=g.indexOf(a.charAt(d)),0>h&&q(new sjcl.exception.invalid("this isn't base64!")),26<e?(e-=26,c.push(f^h>>>e),f=h<<32-e):(e+=6,f^=h<<32-e);e&56&&c.push(sjcl.bitArray.partial(e&56,f,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.b[0]||this.G();a?(this.s=a.s.slice(0),this.o=a.o.slice(0),this.i=a.i):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.s=this.P.slice(0);this.o=[];this.i=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.o=sjcl.bitArray.concat(this.o,a);b=this.i;a=this.i=b+sjcl.bitArray.bitLength(a);for(b=512+b&-512;b<=a;b+=512)x(this,c.splice(0,16));return this},finalize:function(){var a,b=this.o,c=this.s,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.i/4294967296));for(b.push(this.i|0);b.length;)x(this,b.splice(0,16));this.reset();return c},P:[],b:[],G:function(){function a(a){return 0x100000000*(a-Math.floor(a))|0}var b=0,c=2,d;a:for(;64>b;c++){for(d=2;d*d<=c;d++)if(0===c%d)continue a;8>b&&(this.P[b]=a(Math.pow(c,0.5)));this.b[b]=a(Math.pow(c,1/3));b++}}};function x(a,b){var c,d,e,g=b.slice(0),f=a.s,h=a.b,l=f[0],k=f[1],m=f[2],n=f[3],p=f[4],t=f[5],r=f[6],v=f[7];for(c=0;64>c;c++)16>c?d=g[c]:(d=g[c+1&15],e=g[c+14&15],d=g[c&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+g[c&15]+g[c+9&15]|0),d=d+v+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(r^p&(t^r))+h[c],v=r,r=t,t=p,p=n+d|0,n=m,m=k,k=l,l=d+(k&m^n&(k^m))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;f[0]=f[0]+l|0;f[1]=f[1]+k|0;f[2]=f[2]+m|0;f[3]=f[3]+n|0;f[4]=f[4]+p|0;f[5]=f[5]+t|0;f[6]=f[6]+r|0;f[7]=f[7]+v|0}sjcl.mode.ccm={name:"ccm",t:[],listenProgress:function(a){sjcl.mode.ccm.t.push(a)},unListenProgress:function(a){a=sjcl.mode.ccm.t.indexOf(a);-1<a&&sjcl.mode.ccm.t.splice(a,1)},X:function(a){var b=sjcl.mode.ccm.t.slice(),c;for(c=0;c<b.length;c+=1)b[c](a)},encrypt:function(a,b,c,d,e){var g,f=b.slice(0),h=sjcl.bitArray,l=h.bitLength(c)/8,k=h.bitLength(f)/8;e=e||64;d=d||[];7>l&&q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));for(g=2;4>g&&k>>>8*g;g++);g<15-l&&(g=15-l);c=h.clamp(c,8*(15-g));b=sjcl.mode.ccm.M(a,b,c,d,e,g);f=sjcl.mode.ccm.q(a,f,c,b,e,g);return h.concat(f.data,f.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var g=sjcl.bitArray,f=g.bitLength(c)/8,h=g.bitLength(b),l=g.clamp(b,h-e),k=g.bitSlice(b,h-e),h=(h-e)/8;7>f&&q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));for(b=2;4>b&&h>>>8*b;b++);b<15-f&&(b=15-f);c=g.clamp(c,8*(15-b));l=sjcl.mode.ccm.q(a,l,c,k,e,b);a=sjcl.mode.ccm.M(a,l.data,c,d,e,b);g.equal(l.tag,a)||q(new sjcl.exception.corrupt("ccm: tag doesn't match"));return l.data},ea:function(a,b,c,d,e,g){var f=[],h=sjcl.bitArray,l=h.g;d=[h.partial(8,(b.length?64:0)|d-2<<2|g-1)];d=h.concat(d,c);d[3]|=e;d=a.encrypt(d);if(b.length){c=h.bitLength(b)/8;65279>=c?f=[h.partial(16,c)]:0xffffffff>=c&&(f=h.concat([h.partial(16,65534)],[c]));f=h.concat(f,b);for(b=0;b<f.length;b+=4)d=a.encrypt(l(d,f.slice(b,b+4).concat([0,0,0])))}return d},M:function(a,b,c,d,e,g){var f=sjcl.bitArray,h=f.g;e/=8;(e%2||4>e||16<e)&&q(new sjcl.exception.invalid("ccm: invalid tag length"));(0xffffffff<d.length||0xffffffff<b.length)&&q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data"));c=sjcl.mode.ccm.ea(a,d,c,e,f.bitLength(b)/8,g);for(d=0;d<b.length;d+=4)c=a.encrypt(h(c,b.slice(d,d+4).concat([0,0,0])));return f.clamp(c,8*e)},q:function(a,b,c,d,e,g){var f,h=sjcl.bitArray;f=h.g;var l=b.length,k=h.bitLength(b),m=l/50,n=m;c=h.concat([h.partial(8,g-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(f(d,a.encrypt(c)),0,e);if(!l)return{tag:d,data:[]};for(f=0;f<l;f+=4)f>m&&(sjcl.mode.ccm.X(f/l),m+=n),c[3]++,e=a.encrypt(c),b[f]^=e[0],b[f+1]^=e[1],b[f+2]^=e[2],b[f+3]^=e[3];return{tag:d,data:h.clamp(b,k)}}};sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,g){128!==sjcl.bitArray.bitLength(c)&&q(new sjcl.exception.invalid("ocb iv must be 128 bits"));var f,h=sjcl.mode.ocb2.J,l=sjcl.bitArray,k=l.g,m=[0,0,0,0];c=h(a.encrypt(c));var n,p=[];d=d||[];e=e||64;for(f=0;f+4<b.length;f+=4)n=b.slice(f,f+4),m=k(m,n),p=p.concat(k(c,a.encrypt(k(c,n)))),c=h(c);n=b.slice(f);b=l.bitLength(n);f=a.encrypt(k(c,[0,0,0,b]));n=l.clamp(k(n.concat([0,0,0]),f),b);m=k(m,k(n.concat([0,0,0]),f));m=a.encrypt(k(m,k(c,h(c))));d.length&&(m=k(m,g?d:sjcl.mode.ocb2.pmac(a,d)));return p.concat(l.concat(n,l.clamp(m,e)))},decrypt:function(a,b,c,d,e,g){128!==sjcl.bitArray.bitLength(c)&&q(new sjcl.exception.invalid("ocb iv must be 128 bits"));e=e||64;var f=sjcl.mode.ocb2.J,h=sjcl.bitArray,l=h.g,k=[0,0,0,0],m=f(a.encrypt(c)),n,p,t=sjcl.bitArray.bitLength(b)-e,r=[];d=d||[];for(c=0;c+4<t/32;c+=4)n=l(m,a.decrypt(l(m,b.slice(c,c+4)))),k=l(k,n),r=r.concat(n),m=f(m);p=t-32*c;n=a.encrypt(l(m,[0,0,0,p]));n=l(n,h.clamp(b.slice(c),p).concat([0,0,0]));k=l(k,n);k=a.encrypt(l(k,l(m,f(m))));d.length&&(k=l(k,g?d:sjcl.mode.ocb2.pmac(a,d)));h.equal(h.clamp(k,e),h.bitSlice(b,t))||q(new sjcl.exception.corrupt("ocb: tag doesn't match"));return r.concat(h.clamp(n,p))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.J,e=sjcl.bitArray,g=e.g,f=[0,0,0,0],h=a.encrypt([0,0,0,0]),h=g(h,d(d(h)));for(c=0;c+4<b.length;c+=4)h=d(h),f=g(f,a.encrypt(g(h,b.slice(c,c+4))));c=b.slice(c);128>e.bitLength(c)&&(h=g(h,d(h)),c=e.concat(c,[-2147483648,0,0,0]));f=g(f,c);return a.encrypt(g(d(g(h,d(h))),f))},J:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^135*(a[0]>>>31)]}};sjcl.mode.gcm={name:"gcm",encrypt:function(a,b,c,d,e){var g=b.slice(0);b=sjcl.bitArray;d=d||[];a=sjcl.mode.gcm.q(!0,a,g,d,c,e||128);return b.concat(a.data,a.tag)},decrypt:function(a,b,c,d,e){var g=b.slice(0),f=sjcl.bitArray,h=f.bitLength(g);e=e||128;d=d||[];e<=h?(b=f.bitSlice(g,h-e),g=f.bitSlice(g,0,h-e)):(b=g,g=[]);a=sjcl.mode.gcm.q(u,a,g,d,c,e);f.equal(a.tag,b)||q(new sjcl.exception.corrupt("gcm: tag doesn't match"));return a.data},ba:function(a,b){var c,d,e,g,f,h=sjcl.bitArray.g;e=[0,0,0,0];g=b.slice(0);for(c=0;128>c;c++){(d=0!==(a[Math.floor(c/32)]&1<<31-c%32))&&(e=h(e,g));f=0!==(g[3]&1);for(d=3;0<d;d--)g[d]=g[d]>>>1|(g[d-1]&1)<<31;g[0]>>>=1;f&&(g[0]^=-0x1f000000)}return e},h:function(a,b,c){var d,e=c.length;b=b.slice(0);for(d=0;d<e;d+=4)b[0]^=0xffffffff&c[d],b[1]^=0xffffffff&c[d+1],b[2]^=0xffffffff&c[d+2],b[3]^=0xffffffff&c[d+3],b=sjcl.mode.gcm.ba(b,a);return b},q:function(a,b,c,d,e,g){var f,h,l,k,m,n,p,t,r=sjcl.bitArray;n=c.length;p=r.bitLength(c);t=r.bitLength(d);h=r.bitLength(e);f=b.encrypt([0,0,0,0]);96===h?(e=e.slice(0),e=r.concat(e,[1])):(e=sjcl.mode.gcm.h(f,[0,0,0,0],e),e=sjcl.mode.gcm.h(f,e,[0,0,Math.floor(h/0x100000000),h&0xffffffff]));h=sjcl.mode.gcm.h(f,[0,0,0,0],d);m=e.slice(0);d=h.slice(0);a||(d=sjcl.mode.gcm.h(f,h,c));for(k=0;k<n;k+=4)m[3]++,l=b.encrypt(m),c[k]^=l[0],c[k+1]^=l[1],c[k+2]^=l[2],c[k+3]^=l[3];c=r.clamp(c,p);a&&(d=sjcl.mode.gcm.h(f,h,c));a=[Math.floor(t/0x100000000),t&0xffffffff,Math.floor(p/0x100000000),p&0xffffffff];d=sjcl.mode.gcm.h(f,d,a);l=b.encrypt(e);d[0]^=l[0];d[1]^=l[1];d[2]^=l[2];d[3]^=l[3];return{tag:r.bitSlice(d,0,g),data:c}}};sjcl.misc.hmac=function(a,b){this.N=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this.n=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this.n[0].update(c[0]);this.n[1].update(c[1]);this.I=new b(this.n[0])};sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){this.S&&q(new sjcl.exception.invalid("encrypt on already updated hmac called!"));this.update(a);return this.digest(a)};sjcl.misc.hmac.prototype.reset=function(){this.I=new this.N(this.n[0]);this.S=u};sjcl.misc.hmac.prototype.update=function(a){this.S=!0;this.I.update(a)};sjcl.misc.hmac.prototype.digest=function(){var a=this.I.finalize(),a=(new this.N(this.n[1])).update(a).finalize();this.reset();return a};sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E3;(0>d||0>c)&&q(sjcl.exception.invalid("invalid params to pbkdf2"));"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var g,f,h,l,k=[],m=sjcl.bitArray;for(l=1;32*k.length<(d||1);l++){e=g=a.encrypt(m.concat(b,[l]));for(f=1;f<c;f++){g=a.encrypt(g);for(h=0;h<g.length;h++)e[h]^=g[h]}k=k.concat(e)}d&&(k=m.clamp(k,d));return k};sjcl.prng=function(a){this.c=[new sjcl.hash.sha256];this.j=[0];this.H=0;this.u={};this.F=0;this.L={};this.Q=this.d=this.k=this.Z=0;this.b=[0,0,0,0,0,0,0,0];this.f=[0,0,0,0];this.C=s;this.D=a;this.r=u;this.B={progress:{},seeded:{}};this.m=this.Y=0;this.w=1;this.A=2;this.U=0x10000;this.K=[0,48,64,96,128,192,0x100,384,512,768,1024];this.V=3E4;this.T=80};sjcl.prng.prototype={randomWords:function(a,b){var c=[],d;d=this.isReady(b);var e;d===this.m&&q(new sjcl.exception.notReady("generator isn't seeded"));if(d&this.A){d=!(d&this.w);e=[];var g=0,f;this.Q=e[0]=(new Date).valueOf()+this.V;for(f=0;16>f;f++)e.push(0x100000000*Math.random()|0);for(f=0;f<this.c.length&&!(e=e.concat(this.c[f].finalize()),g+=this.j[f],this.j[f]=0,!d&&this.H&1<<f);f++);this.H>=1<<this.c.length&&(this.c.push(new sjcl.hash.sha256),this.j.push(0));this.d-=g;g>this.k&&(this.k=g);this.H++;this.b=sjcl.hash.sha256.hash(this.b.concat(e));this.C=new sjcl.cipher.aes(this.b);for(d=0;4>d&&!(this.f[d]=this.f[d]+1|0,this.f[d]);d++);}for(d=0;d<a;d+=4)0===(d+1)%this.U&&A(this),e=B(this),c.push(e[0],e[1],e[2],e[3]);A(this);return c.slice(0,a)},setDefaultParanoia:function(a,b){0===a&&"Setting paranoia=0 will ruin your security; use it only for testing"!==b&&q("Setting paranoia=0 will ruin your security; use it only for testing");this.D=a},addEntropy:function(a,b,c){c=c||"user";var d,e,g=(new Date).valueOf(),f=this.u[c],h=this.isReady(),l=0;d=this.L[c];d===s&&(d=this.L[c]=this.Z++);f===s&&(f=this.u[c]=0);this.u[c]=(this.u[c]+1)%this.c.length;switch(typeof a){case "number":b===s&&(b=1);this.c[f].update([d,this.F++,1,b,g,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if("[object Uint32Array]"===c){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else{"[object Array]"!==c&&(l=1);for(c=0;c<a.length&&!l;c++)"number"!==typeof a[c]&&(l=1)}if(!l){if(b===s)for(c=b=0;c<a.length;c++)for(e=a[c];0<e;)b++,e>>>=1;this.c[f].update([d,this.F++,2,b,g,a.length].concat(a))}break;case "string":b===s&&(b=a.length);this.c[f].update([d,this.F++,3,b,g,a.length]);this.c[f].update(a);break;default:l=1}l&&q(new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string"));this.j[f]+=b;this.d+=b;h===this.m&&(this.isReady()!==this.m&&C("seeded",Math.max(this.k,this.d)),C("progress",this.getProgress()))},isReady:function(a){a=this.K[a!==s?a:this.D];return this.k&&this.k>=a?this.j[0]>this.T&&(new Date).valueOf()>this.Q?this.A|this.w:this.w:this.d>=a?this.A|this.m:this.m},getProgress:function(a){a=this.K[a?a:this.D];return this.k>=a?1:this.d>a?1:this.d/a},startCollectors:function(){this.r||(this.a={loadTimeCollector:D(this,this.da),mouseCollector:D(this,this.fa),keyboardCollector:D(this,this.ca),accelerometerCollector:D(this,this.W),touchCollector:D(this,this.ha)},window.addEventListener?(window.addEventListener("load",this.a.loadTimeCollector,u),window.addEventListener("mousemove",this.a.mouseCollector,u),window.addEventListener("keypress",this.a.keyboardCollector,u),window.addEventListener("devicemotion",this.a.accelerometerCollector,u),window.addEventListener("touchmove",this.a.touchCollector,u)):document.attachEvent?(document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector)):q(new sjcl.exception.bug("can't attach event")),this.r=!0)},stopCollectors:function(){this.r&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,u),window.removeEventListener("mousemove",this.a.mouseCollector,u),window.removeEventListener("keypress",this.a.keyboardCollector,u),window.removeEventListener("devicemotion",this.a.accelerometerCollector,u),window.removeEventListener("touchmove",this.a.touchCollector,u)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.r=u)},addEventListener:function(a,b){this.B[a][this.Y++]=b},removeEventListener:function(a,b){var c,d,e=this.B[a],g=[];for(d in e)e.hasOwnProperty(d)&&e[d]===b&&g.push(d);for(c=0;c<g.length;c++)d=g[c],delete e[d]},ca:function(){E(1)},fa:function(a){var b,c;try{b=a.x||a.clientX||a.offsetX||0,c=a.y||a.clientY||a.offsetY||0}catch(d){c=b=0}0!=b&&0!=c&&sjcl.random.addEntropy([b,c],2,"mouse");E(0)},ha:function(a){a=a.touches[0]||a.changedTouches[0];sjcl.random.addEntropy([a.pageX||a.clientX,a.pageY||a.clientY],1,"touch");E(0)},da:function(){E(2)},W:function(a){a=a.accelerationIncludingGravity.x||a.accelerationIncludingGravity.y||a.accelerationIncludingGravity.z;if(window.orientation){var b=window.orientation;"number"===typeof b&&sjcl.random.addEntropy(b,1,"accelerometer")}a&&sjcl.random.addEntropy(a,2,"accelerometer");E(0)}};function C(a,b){var c,d=sjcl.random.B[a],e=[];for(c in d)d.hasOwnProperty(c)&&e.push(d[c]);for(c=0;c<e.length;c++)e[c](b)}function E(a){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?sjcl.random.addEntropy(window.performance.now(),a,"loadtime"):sjcl.random.addEntropy((new Date).valueOf(),a,"loadtime")}function A(a){a.b=B(a).concat(B(a));a.C=new sjcl.cipher.aes(a.b)}function B(a){for(var b=0;4>b&&!(a.f[b]=a.f[b]+1|0,a.f[b]);b++);return a.C.encrypt(a.f)}function D(a,b){return function(){b.apply(a,arguments)}}sjcl.random=new sjcl.prng(6);a:try{var F,G,H,I;if(I="undefined"!==typeof module){var J;if(J=module.exports){var K;try{K=require("crypto")}catch(L){K=null}J=(G=K)&&G.randomBytes}I=J}if(I)F=G.randomBytes(128),F=new Uint32Array((new Uint8Array(F)).buffer),sjcl.random.addEntropy(F,1024,"crypto['randomBytes']");else if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){H=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(H);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(H);else break a;sjcl.random.addEntropy(H,1024,"crypto['getRandomValues']")}}catch(M){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(M))}sjcl.json={defaults:{v:1,iter:1E3,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},aa:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,g=e.e({iv:sjcl.random.randomWords(4,0)},e.defaults),f;e.e(g,c);c=g.adata;"string"===typeof g.salt&&(g.salt=sjcl.codec.base64.toBits(g.salt));"string"===typeof g.iv&&(g.iv=sjcl.codec.base64.toBits(g.iv));(!sjcl.mode[g.mode]||!sjcl.cipher[g.cipher]||"string"===typeof a&&100>=g.iter||64!==g.ts&&96!==g.ts&&128!==g.ts||128!==g.ks&&192!==g.ks&&0x100!==g.ks||2>g.iv.length||4<g.iv.length)&&q(new sjcl.exception.invalid("json encrypt: invalid parameters"));"string"===typeof a?(f=sjcl.misc.cachedPbkdf2(a,g),a=f.key.slice(0,g.ks/32),g.salt=f.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.publicKey&&(f=a.kem(),g.kemtag=f.tag,a=f.key.slice(0,g.ks/32));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));"string"===typeof c&&(g.adata=c=sjcl.codec.utf8String.toBits(c));f=new sjcl.cipher[g.cipher](a);e.e(d,g);d.key=a;g.ct="ccm"===g.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&b instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.encrypt(f,b,g.iv,c,g.ts):sjcl.mode[g.mode].encrypt(f,b,g.iv,c,g.ts);return g},encrypt:function(a,b,c,d){var e=sjcl.json,g=e.aa.apply(e,arguments);return e.encode(g)},$:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.e(e.e(e.e({},e.defaults),b),c,!0);var g,f;g=b.adata;"string"===typeof b.salt&&(b.salt=sjcl.codec.base64.toBits(b.salt));"string"===typeof b.iv&&(b.iv=sjcl.codec.base64.toBits(b.iv));(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||"string"===typeof a&&100>=b.iter||64!==b.ts&&96!==b.ts&&128!==b.ts||128!==b.ks&&192!==b.ks&&0x100!==b.ks||!b.iv||2>b.iv.length||4<b.iv.length)&&q(new sjcl.exception.invalid("json decrypt: invalid parameters"));"string"===typeof a?(f=sjcl.misc.cachedPbkdf2(a,b),a=f.key.slice(0,b.ks/32),b.salt=f.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.secretKey&&(a=a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0,b.ks/32));"string"===typeof g&&(g=sjcl.codec.utf8String.toBits(g));f=new sjcl.cipher[b.cipher](a);g="ccm"===b.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&b.ct instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.decrypt(f,b.ct,b.iv,b.tag,g,b.ts):sjcl.mode[b.mode].decrypt(f,b.ct,b.iv,g,b.ts);e.e(d,b);d.key=a;return 1===c.raw?g:sjcl.codec.utf8String.fromBits(g)},decrypt:function(a,b,c,d){var e=sjcl.json;return e.$(a,e.decode(b),c,d)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b))switch(b.match(/^[a-z0-9]+$/i)||q(new sjcl.exception.invalid("json encode: invalid property name")),c+=d+'"'+b+'":',d=",",typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+sjcl.codec.base64.fromBits(a[b],0)+'"';break;default:q(new sjcl.exception.bug("json encode: unsupported type"))}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");a.match(/^\{.*\}$/)||q(new sjcl.exception.invalid("json decode: this isn't json!"));a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++)(d=a[c].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))||q(new sjcl.exception.invalid("json decode: this isn't json!")),null!=d[3]?b[d[2]]=parseInt(d[3],10):null!=d[4]?b[d[2]]=d[2].match(/^(ct|adata|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4]):null!=d[5]&&(b[d[2]]="true"===d[5]);return b},e:function(a,b,c){a===s&&(a={});if(b===s)return a;for(var d in b)b.hasOwnProperty(d)&&(c&&(a[d]!==s&&a[d]!==b[d])&&q(new sjcl.exception.invalid("required parameter overridden")),a[d]=b[d]);return a},ja:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},ia:function(a,b){var c={},d;for(d=0;d<b.length;d++)a[b[d]]!==s&&(c[b[d]]=a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.ga={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.ga,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=b.salt===s?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};
