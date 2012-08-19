jQuery.webshims.register("dom-extend",function(b,f,i,q,p){var n=f.modules,r=/\s*,\s*/,l={},w={},s={},h={},j={},C=b.fn.val,F=function(d,a,c,e,t){return t?C.call(b(d)):C.call(b(d),c)};b.fn.val=function(d){var a=this[0];arguments.length&&null==d&&(d="");if(!arguments.length)return!a||1!==a.nodeType?C.call(this):b.prop(a,"value",d,"val",!0);if(b.isArray(d))return C.apply(this,arguments);var c=b.isFunction(d);return this.each(function(e){a=this;1===a.nodeType&&(c?(e=d.call(a,e,b.prop(a,"value",p,"val",
!0)),null==e&&(e=""),b.prop(a,"value",e,"val")):b.prop(a,"value",d,"val"))})};var x="_webshimsLib"+Math.round(1E3*Math.random()),g=function(d,a,c){d=d.jquery?d[0]:d;if(!d)return c||{};var e=b.data(d,x);c!==p&&(e||(e=b.data(d,x,{})),a&&(e[a]=c));return a?e&&e[a]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(d){b.fn[d.name]=function(){return this.map(function(){var a=g(this,
"shadowData");return a&&a[d.prop]||this})}});["removeAttr","prop","attr"].forEach(function(d){l[d]=b[d];b[d]=function(a,c,e,t,f){var k="val"==t,u=!k?l[d]:F;if(!a||!w[c]||1!==a.nodeType||!k&&t&&"attr"==d&&b.attrFn[c])return u(a,c,e,t,f);var z=(a.nodeName||"").toLowerCase(),A=s[z],h="attr"==d&&(!1===e||null===e)?"removeAttr":d,g,o,n;A||(A=s["*"]);A&&(A=A[c]);A&&(g=A[h]);if(g){if("value"==c)o=g.isVal,g.isVal=k;if("removeAttr"===h)return g.value.call(a);if(e===p)return g.get?g.get.call(a):g.value;g.set&&
("attr"==d&&!0===e&&(e=c),n=g.set.call(a,e));if("value"==c)g.isVal=o}else n=u(a,c,e,t,f);if((e!==p||"removeAttr"===h)&&j[z]&&j[z][c]){var r;r="removeAttr"==h?!1:"prop"==h?!!e:!0;j[z][c].forEach(function(b){if(!b.only||(b.only="prop"==d)||"attr"==b.only&&"prop"!=d)b.call(a,e,r,k?"val":h,d)})}return n};h[d]=function(a,c,e){s[a]||(s[a]={});s[a][c]||(s[a][c]={});var t=s[a][c][d],h=function(a,b,z){return b&&b[a]?b[a]:z&&z[a]?z[a]:"prop"==d&&"value"==c?function(a){return e.isVal?F(this,c,a,!1,0===arguments.length):
l[d](this,c,a)}:"prop"==d&&"value"==a&&e.value.apply?function(a){var b=l[d](this,c);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return l[d](this,c,a)}};s[a][c][d]=e;if(e.value===p){if(!e.set)e.set=e.writeable?h("set",e,t):f.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:b.noop;if(!e.get)e.get=h("get",e,t)}["value","get","set"].forEach(function(a){e[a]&&(e["_sup"+a]=h(a,t))})}});var y=!b.browser.msie||8<parseInt(b.browser.version,10),o=function(){var b=f.getPrototypeOf(q.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,e,t){var h=q.createElement(c),k=f.getPrototypeOf(h);if(y&&k&&b!==k&&(!h[e]||!a.call(h,e))){var u=h[e];t._supvalue=function(){return u&&u.apply?u.apply(this,arguments):u};k[e]=t.value}else t._supvalue=function(){var a=g(this,"propValue");return a&&a[e]&&a[e].apply?a[e].apply(this,arguments):a&&a[e]},v.extendValue(c,e,t.value);t.value._supvalue=t._supvalue}}(),v=function(){var d={};f.addReady(function(a,c){var k={},e=function(d){k[d]||(k[d]=b(a.getElementsByTagName(d)),
c[0]&&b.nodeName(c[0],d)&&(k[d]=k[d].add(c)))};b.each(d,function(a,b){e(a);!b||!b.forEach?f.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){k[a].each(b)})});k=null});var a,c=b([]),e=function(c,e){d[c]?d[c].push(e):d[c]=[e];b.isDOMReady&&(a||b(q.getElementsByTagName(c))).each(e)};return{createTmpCache:function(d){b.isDOMReady&&(a=a||b(q.getElementsByTagName(d)));return a||c},flushTmpCache:function(){a=null},content:function(a,d){e(a,function(){var a=b.attr(this,d);null!=a&&b.attr(this,
d,a)})},createElement:function(a,b){e(a,b)},extendValue:function(a,d,c){e(a,function(){b(this).each(function(){g(this,"propValue",{})[d]=this[d];this[d]=c})})}}}(),B=function(b,a){if(b.defaultValue===p)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}};if(!b.attr)b.attr={}};b.extend(f,{getID:function(){var d=(new Date).getTime();return function(a){var a=b(a),c=a.attr("id");c||(d++,c="ID-"+d,a.attr("id",c));
return c}}(),extendUNDEFProp:function(d,a){b.each(a,function(a,b){a in d||(d[a]=b)})},createPropDefault:B,data:g,moveToFirstEvent:function(){var d=b._data?"_data":"data";return function(a,c,e){if((a=(b[d](a,"events")||{})[c])&&1<a.length)c=a.pop(),e||(e="bind"),"bind"==e&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(d,a,c){c=c||{};d.jquery&&(d=d[0]);a.jquery&&(a=a[0]);var e=b.data(d,x)||b.data(d,x,{}),h=b.data(a,x)||b.data(a,x,{}),f={};if(c.shadowFocusElement){if(c.shadowFocusElement){if(c.shadowFocusElement.jquery)c.shadowFocusElement=
c.shadowFocusElement[0];f=b.data(c.shadowFocusElement,x)||b.data(c.shadowFocusElement,x,f)}}else c.shadowFocusElement=a;e.hasShadow=a;f.nativeElement=h.nativeElement=d;f.shadowData=h.shadowData=e.shadowData={nativeElement:d,shadowElement:a,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){g(this,"shadowData",h.shadowData)});if(c.data)f.shadowData.data=h.shadowData.data=e.shadowData.data=c.data;c=null},propTypes:{standard:function(b){B(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,
""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){B(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}},src:function(){var d=q.createElement("a");d.style.display="none";return function(a,c){B(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(c),h;if(null==a)return"";d.setAttribute("href",a+"");if(!b.support.hrefNormalized){try{b(d).insertAfterTo(this),
h=d.getAttribute("href",4)}catch(f){h=d.getAttribute("href",4)}b(d).detach()}return h||d.href}}}}(),enumarated:function(b){B(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var a=(b.attr.get.call(this)||"").toLowerCase();if(!a||-1==b.limitedTo.indexOf(a))a=b.defaultValue;return a}}}},reflectProperties:function(d,a){"string"==typeof a&&(a=a.split(r));a.forEach(function(a){f.defineNodeNamesProperty(d,a,{prop:{set:function(d){b.attr(this,a,d)},get:function(){return b.attr(this,
a)||""}}})})},defineNodeNameProperty:function(d,a,c){w[a]=!0;if(c.reflect)f.propTypes[c.propType||"standard"](c,a);["prop","attr","removeAttr"].forEach(function(e){var g=c[e];g&&(g="prop"===e?b.extend({writeable:!0},g):b.extend({},g,{writeable:!0}),h[e](d,a,g),"*"!=d&&f.cfg.extendNative&&"prop"==e&&g.value&&b.isFunction(g.value)&&o(d,a,g),c[e]=g)});c.initAttr&&v.content(d,a);return c},defineNodeNameProperties:function(b,a,c,e){for(var h in a)!e&&a[h].initAttr&&v.createTmpCache(b),c&&(a[h][c]?f.log("override: "+
b+"["+h+"] for "+c):(a[h][c]={},["value","set","get"].forEach(function(b){b in a[h]&&(a[h][c][b]=a[h][b],delete a[h][b])}))),a[h]=f.defineNodeNameProperty(b,h,a[h]);e||v.flushTmpCache();return a},createElement:function(d,a,c){var e;b.isFunction(a)&&(a={after:a});v.createTmpCache(d);a.before&&v.createElement(d,a.before);c&&(e=f.defineNodeNameProperties(d,c,!1,!0));a.after&&v.createElement(d,a.after);v.flushTmpCache();return e},onNodeNamesPropertyModify:function(d,a,c,e){"string"==typeof d&&(d=d.split(r));
b.isFunction(c)&&(c={set:c});d.forEach(function(b){j[b]||(j[b]={});"string"==typeof a&&(a=a.split(r));c.initAttr&&v.createTmpCache(b);a.forEach(function(a){j[b][a]||(j[b][a]=[],w[a]=!0);if(c.set){if(e)c.set.only=e;j[b][a].push(c.set)}c.initAttr&&v.content(b,a)});v.flushTmpCache()})},defineNodeNamesBooleanProperty:function(d,a,c){c||(c={});if(b.isFunction(c))c.set=c;f.defineNodeNamesProperty(d,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?
p:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===p)return b=b.attributes[a]||{},c=b.specified?b.value:null,null==c?p:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var d=[],a={},c,e,h=/:\/\/|^\.*\//,g=function(a,c,d){return c&&d&&-1!==b.inArray(c,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,
h.test(d)||(d=f.cfg.basePath+d),f.loader.loadScript(d+c+".js",function(){a.langObj[c]?(a.loading=!1,u(a,!0)):b(function(){a.langObj[c]&&u(a,!0);a.loading=!1})}),!0):!1},k=function(b){a[b]&&a[b].forEach(function(b){b.callback()})},u=function(b,a){if(b.activeLang!=c&&b.activeLang!==e){var d=n[b.module].options;if(b.langObj[c]||e&&b.langObj[e])b.activeLang=c,b.callback(b.langObj[c]||b.langObj[e],c),k(b.module);else if(!a&&!g(b,c,d)&&!g(b,e,d)&&b.langObj[""]&&""!==b.activeLang)b.activeLang="",b.callback(b.langObj[""],
c),k(b.module)}};return function(k){if("string"==typeof k&&k!==c)c=k,e=c.split("-")[0],c==e&&(e=!1),b.each(d,function(b,a){u(a)});else if("object"==typeof k)if(k.register)a[k.register]||(a[k.register]=[]),a[k.register].push(k),k.callback();else{if(!k.activeLang)k.activeLang="";d.push(k);u(k)}return c}}()});b.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){f[b]=function(b,d,h,g){"string"==typeof b&&
(b=b.split(r));var k={};b.forEach(function(b){k[b]=f[a](b,d,h,g)});return k}});f.isReady("webshimLocalization",!0)});
(function(b,f){var i=b.webshims.browserVersion;if(!(b.browser.mozilla&&5<i)&&(!b.browser.msie||12>i&&7<i)){var q={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},p=function(b,f){b.getAttribute("role")||b.setAttribute("role",f)};b.webshims.addReady(function(n,r){b.each(q,function(h,f){for(var i=b(h,n).add(r.filter(h)),l=0,q=i.length;l<q;l++)p(i[l],f)});if(n===f){var l=f.getElementsByTagName("header")[0],i=f.getElementsByTagName("footer"),s=i.length;
l&&!b(l).closest("section, article")[0]&&p(l,"banner");s&&(l=i[s-1],b(l).closest("section, article")[0]||p(l,"contentinfo"))}})}})(jQuery,document);
(function(b,f,i){var q=f.audio&&f.video,p=!1,n=i.cfg.mediaelement,r=i.bugs,l;if(q){var w=document.createElement("video");f.videoBuffered="buffered"in w;p="loop"in w;i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));f.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(q&&!n.preferFlash){var s=function(h){var f=h.target.parentNode;
!n.preferFlash&&(b(h.target).is("audio, video")||f&&b("source:last",f)[0]==h.target)&&i.ready("mediaelement-swf",function(){setTimeout(function(){l&&!n.preferFlash&&!b(h.target).closest("audio, video").is(".nonnative-api-active")?(n.preferFlash=!0,document.removeEventListener("error",s,!0),b("audio, video").mediaLoad(),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+h.target.src)):l||document.removeEventListener("error",s,!0)},20)})};document.addEventListener("error",
s,!0);b("audio, video").each(function(){this.error&&s({target:this})})}r.track=!1;f.track&&function(){r.track="number"!=typeof b("<track />")[0].readyState||!b("<video />")[0].addTextTrack;var h=i.cfg.track,f=function(h){b(h.target).filter("track").each(l)},l=function(){if(r.track||!h.override&&3==b.prop(this,"readyState"))h.override=!0,i.reTest("track"),document.removeEventListener("error",f,!0),this&&b.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):
i.info("track support was overwritten.")},n=function(){document.addEventListener("error",f,!0);r.track?l():b("track").each(l)};h.override||(i.isReady("track")?n():b(n))}();i.register("mediaelement-core",function(b,j,i,s,x){l=swfobject.hasFlashPlayerVersion("9.0.115");var g=j.mediaelement,y=function(a,c){var a=b(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var e=a.attr("type");if(e)d.type=e,d.container=b.trim(e.split(";")[0]);else if(c||(c=a[0].nodeName.toLowerCase(),
"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=g.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=a.attr("media"))d.media=e;return d},o=!l&&"postMessage"in i&&q,v=function(){j.ready("mediaelement-swf",function(){if(!g.createSWF)j.modules["mediaelement-swf"].test=b.noop,j.reTest(["mediaelement-swf"],q)})},w=function(){var a;return function(){!a&&o&&(a=!0,j.loader.loadScript("https://www.youtube.com/player_api"),b(function(){j.polyfill("mediaelement-yt")}))}}(),
d=function(){l?v():w();b(function(){j.loader.loadList(["track-ui"])})};j.addPolyfill("mediaelement-yt",{test:!o,d:["dom-support"]});g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg",
"mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=b.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-
1],d;b.each(g.mimeTypes[c],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};g.srces=function(a,c){a=b(a);if(c)a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(c)||(c=[c]),c.forEach(function(b){var c=s.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var c=[],d=a[0].nodeName.toLowerCase(),e=y(a,d);e.src?c.push(e):b("source",a).each(function(){e=
y(this,d);e.src&&c.push(e)});return c}};b.fn.loadMediaSrc=function(a,c){return this.each(function(){c!==x&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c));g.srces(this,a);b(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");g.canThirdPlaySrces=function(a,c){var d="";
if(l||o)a=b(a),c=c||g.srces(a),b.each(c,function(b,a){if(a.container&&a.src&&(l&&-1!=g.swfMimeTypes.indexOf(a.container)||o&&"video/youtube"==a.container))return d=a,!1});return d};var a={};g.canNativePlaySrces=function(c,d){var e="";if(q){var c=b(c),f=(c[0].nodeName||"").toLowerCase();if(!a[f])return e;d=d||g.srces(c);b.each(d,function(b,d){if(d.type&&a[f].prop._supvalue.call(c[0],d.type))return e=d,!1})}return e};g.setError=function(a,c){c||(c="can't play sources");b(a).pause().data("mediaerror",
c);j.warn("mediaelementError: "+c);setTimeout(function(){b(a).data("mediaerror")&&b(a).trigger("mediaerror")},1)};var c=function(){var b;return function(a,e,f){j.ready(l?"mediaelement-swf":"mediaelement-yt",function(){g.createSWF?g.createSWF(a,e,f):b||(b=!0,d(),c(a,e,f))});!b&&o&&!g.createSWF&&w()}}(),e=function(b,a,d,f,h){d||!1!==d&&a&&"third"==a.isActive?(d=g.canThirdPlaySrces(b,f))?c(b,d,a):h?g.setError(b,!1):e(b,a,!1,f,!0):(d=g.canNativePlaySrces(b,f))?a&&"third"==a.isActive&&g.setActive(b,"html5",
a):h?(g.setError(b,!1),a&&"third"==a.isActive&&g.setActive(b,"html5",a)):e(b,a,!0,f,!0)},t=/^(?:embed|object|datalist)$/i,G=function(a,c){var d=j.data(a,"mediaelementBase")||j.data(a,"mediaelementBase",{}),f=g.srces(a),i=a.parentNode;clearTimeout(d.loadTimer);b.data(a,"mediaerror",!1);if(f.length&&i&&!(1!=i.nodeType||t.test(i.nodeName||"")))c=c||j.data(a,"mediaelement"),e(a,c,n.preferFlash||x,f)};b(s).bind("ended",function(a){var c=j.data(a.target,"mediaelement");(!p||c&&"html5"!=c.isActive||b.prop(a.target,
"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()},1)});p||j.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=j.defineNodeNameProperty(c,"load",{prop:{value:function(){var b=j.data(this,"mediaelement");G(this,b);q&&(!b||"html5"==b.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});a[c]=j.defineNodeNameProperty(c,"canPlayType",{prop:{value:function(d){var e=
"";q&&a[c].prop._supvalue&&(e=a[c].prop._supvalue.call(this,d),"no"==e&&(e=""));!e&&l&&(d=b.trim((d||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});j.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=j.data(b,"mediaelementBase")||j.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){G(b);b=null},9)}});i=function(){j.addReady(function(a,c){b("video, audio",a).add(c.filter("video, audio")).each(function(){b.browser.msie&&
8<j.browserVersion&&b.prop(this,"paused")&&!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():G(this);if(q){var a,c,d=this,e=function(){var a=b.prop(d,"buffered");if(a){for(var c="",e=0,f=a.length;e<f;e++)c+=a.end(e);return c}},f=function(){var a=e();a!=c&&(c=a,b(d).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==b.type&&(c=e());clearTimeout(a);a=setTimeout(f,999)}).bind("emptied stalled mediaerror abort suspend",
function(b){"emptied"==b.type&&(c=!1);clearTimeout(a)})}})})};f.track&&!r.track?(j.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),b(function(){j.polyfill("track")})):b(function(){j.loader.loadList(["track-ui"])});q?(j.isReady("mediaelement-core",!0),i(),j.ready("WINDOWLOAD mediaelement",d)):j.ready("mediaelement-swf",i)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(b,f,i,q,p,n){var r=f.mediaelement,l=i.swfobject,w=Modernizr.audio&&Modernizr.video,s=l.hasFlashPlayerVersion("9.0.115"),h=0,i={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(b){if(b)f.error("buffered index size error");else return 0},end:function(b){if(b)f.error("buffered index size error");else return 0},length:0}},j=Object.keys(i),C={currentTime:0,volume:1,
muted:!1};Object.keys(C);var F=b.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:p},i,C),x=/^jwplayer-/,g=function(b){if(b=q.getElementById(b.replace(x,"")))return b=f.data(b,"mediaelement"),"third"==b.isActive?b:null},y=function(b){return(b=f.data(b,"mediaelement"))&&"third"==b.isActive?b:null},o=function(a,m){m=b.Event(m);m.preventDefault();b.event.trigger(m,p,a)},v=n.playerPath||f.cfg.basePath+
"jwplayer/"+(n.playerName||"player.swf"),B=n.pluginPath||f.cfg.basePath+"swf/jwwebshims.swf";f.extendUNDEFProp(n.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});f.extendUNDEFProp(n.jwVars,{screencolor:"ffffffff"});f.extendUNDEFProp(n.jwAttrs,{bgcolor:"#000000"});var d=function(a,m){var c=a.duration;if(!(c&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=c}catch(d){}a.duration&&
a.duration!=a._lastDuration?(o(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&r.jwEvents.Model.META(b.extend({duration:a.duration},m),a),a._durationCalcs--):a._durationCalcs++}},a=function(b,m){3>b&&clearTimeout(m._canplaythroughTimer);if(3<=b&&3>m.readyState)m.readyState=b,o(m._elem,"canplay"),clearTimeout(m._canplaythroughTimer),m._canplaythroughTimer=setTimeout(function(){a(4,m)},4E3);if(4<=b&&4>m.readyState)m.readyState=b,o(m._elem,"canplaythrough");m.readyState=b};r.jwEvents=
{View:{PLAY:function(b){var a=g(b.id);if(a&&!a.stopPlayPause&&(a._ppFlag=!0,a.paused==b.state)){a.paused=!b.state;if(a.ended)a.ended=!1;o(a._elem,b.state?"play":"pause")}}},Model:{BUFFER:function(c){var m=g(c.id);if(m&&"percentage"in c&&m._bufferedEnd!=c.percentage){m.networkState=100==c.percentage?1:2;(isNaN(m.duration)||5<c.percentage&&25>c.percentage||100===c.percentage)&&d(m,c);if(m.ended)m.ended=!1;if(m.duration){2<c.percentage&&20>c.percentage?a(3,m):20<c.percentage&&a(4,m);if(m._bufferedEnd&&
m._bufferedEnd>c.percentage)m._bufferedStart=m.currentTime||0;m._bufferedEnd=c.percentage;m.buffered.length=1;if(100==c.percentage)m.networkState=1,a(4,m);b.event.trigger("progress",p,m._elem,!0)}}},META:function(b,c){if(c=c&&c.networkState?c:g(b.id))if("duration"in b){if(!c._metadata||!((!b.height||c.videoHeight==b.height)&&b.duration===c.duration)){c._metadata=!0;var d=c.duration;if(b.duration)c.duration=b.duration;c._lastDuration=c.duration;if(b.height||b.width)c.videoHeight=b.height||0,c.videoWidth=
b.width||0;if(!c.networkState)c.networkState=2;1>c.readyState&&a(1,c);c.duration&&d!==c.duration&&o(c._elem,"durationchange");o(c._elem,"loadedmetadata")}}else c._callMeta=!0},TIME:function(b){var c=g(b.id);if(c&&c.currentTime!==b.position){c.currentTime=b.position;c.duration&&c.duration<c.currentTime&&d(c,b);2>c.readyState&&a(2,c);if(c.ended)c.ended=!1;o(c._elem,"timeupdate")}},STATE:function(b){var c=g(b.id);if(c)switch(b.newstate){case "BUFFERING":if(c.ended)c.ended=!1;a(1,c);o(c._elem,"waiting");
break;case "PLAYING":c.paused=!1;c._ppFlag=!0;c.duration||d(c,b);3>c.readyState&&a(3,c);if(c.ended)c.ended=!1;o(c._elem,"playing");break;case "PAUSED":if(!c.paused&&!c.stopPlayPause)c.paused=!0,c._ppFlag=!0,o(c._elem,"pause");break;case "COMPLETED":4>c.readyState&&a(4,c),c.ended=!0,o(c._elem,"ended")}}},Controller:{ERROR:function(b){var a=g(b.id);a&&r.setError(a._elem,b.message)},SEEK:function(b){var a=g(b.id);if(a){if(a.ended)a.ended=!1;if(a.paused)try{a.jwapi.sendEvent("play","false")}catch(c){}if(a.currentTime!=
b.position)a.currentTime=b.position,o(a._elem,"timeupdate")}},VOLUME:function(b){var a=g(b.id);if(a&&(b=b.percentage/100,a.volume!=b))a.volume=b,o(a._elem,"volumechange")},MUTE:function(b){if(!b.state){var a=g(b.id);if(a&&a.muted!=b.state)a.muted=b.state,o(a._elem,"volumechange")}}}};var c=function(a){var c=!0;b.each(r.jwEvents,function(d,e){b.each(e,function(b){try{a.jwapi["add"+d+"Listener"](b,"jQuery.webshims.mediaelement.jwEvents."+d+"."+b)}catch(e){return c=!1}})});return c},e=function(b){var a=
b.actionQueue.length,c=0,d;if(a&&"third"==b.isActive)for(;b.actionQueue.length&&a>c;)c++,d=b.actionQueue.shift(),b.jwapi[d.fn].apply(b.jwapi,d.args);if(b.actionQueue.length)b.actionQueue=[]},t=function(a){a&&(a._ppFlag===p&&b.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===p||!a.paused))try{b(a._elem).play()}catch(c){}},1)},G=function(a){if(a&&"video"==a._elemNodeName){var c,d,e,f,g,h,k,j,i=function(i,l){if(l&&i&&!(1>l||1>i||"third"!=a.isActive))if(c&&
(c.remove(),c=!1),f=i,g=l,clearTimeout(k),d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e){h=h||b(a._elem).getShadowElement();var n;d&&!e?(n=h.height(),i*=n/l,l=n):!d&&e&&(n=h.width(),l*=n/i,i=n);j=!0;setTimeout(function(){j=!1},9);h.css({width:i,height:l})}},l=function(){if(!("third"!=a.isActive||b.prop(a._elem,"readyState")&&b.prop(this,"videoWidth"))){var f=b.prop(a._elem,"poster");if(f&&(d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e))c&&(c.remove(),c=!1),
c=b('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),c.bind("load error alreadycomplete",function(){clearTimeout(k);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||a.offsetHeight;e&&d?(i(d,e),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;i(d,e);c&&(c.remove(),c=!1);a=null},9);b(this).unbind()}).prop("src",f).appendTo("body").each(function(){this.complete||
this.error?b(this).triggerHandler("alreadycomplete"):(clearTimeout(k),k=setTimeout(function(){b(a._elem).triggerHandler("error")},9999))})}};b(a._elem).bind("loadedmetadata",function(){i(b.prop(this,"videoWidth"),b.prop(this,"videoHeight"))}).bind("emptied",l).bind("swfstageresize updatemediaelementdimensions",function(){j||i(f,g)}).bind("emptied",function(){f=void 0;g=void 0}).triggerHandler("swfstageresize");l();b.prop(a._elem,"readyState")&&i(b.prop(a._elem,"videoWidth"),b.prop(a._elem,"videoHeight"))}};
r.playerResize=function(a){a&&(a=q.getElementById(a.replace(x,"")))&&b(a).triggerHandler("swfstageresize")};b(q).bind("emptied",function(b){b=y(b.target);t(b)});var k;r.jwPlayerReady=function(a){var d=g(a.id),h=0,i=function(){if(!(9<h))if(h++,c(d)){if(d.wasSwfReady)b(d._elem).mediaLoad();else{var g=parseFloat(a.version,10);(5.6>g||6<=g)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+")}d.wasSwfReady=!0;d.tryedReframeing=0;e(d);t(d)}else clearTimeout(d.reframeTimer),d.reframeTimer=setTimeout(i,
9*h),2<h&&9>d.tryedReframeing&&(d.tryedReframeing++,d.shadowElem.css({overflow:"visible"}),setTimeout(function(){d.shadowElem.css({overflow:"hidden"})},16))};if(d&&d.jwapi){if(!d.tryedReframeing)d.tryedReframeing=0;clearTimeout(k);d.jwData=a;d.shadowElem.removeClass("flashblocker-assumed");b.prop(d._elem,"volume",d.volume);b.prop(d._elem,"muted",d.muted);i()}};var u=b.noop;if(w){var z={play:1,playing:1},A="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),
I=A.map(function(b){return b+".webshimspolyfill"}).join(" "),J=function(a){var c=f.data(a.target,"mediaelement");c&&(a.originalEvent&&a.originalEvent.type===a.type)==("third"==c.activating)&&(a.stopImmediatePropagation(),z[a.type]&&c.isActive!=c.activating&&b(a.target).pause())},u=function(a){b(a).unbind(I).bind(I,J);A.forEach(function(b){f.moveToFirstEvent(a,b)})};u(q)}r.setActive=function(a,c,d){d||(d=f.data(a,"mediaelement"));if(d&&d.isActive!=c){"html5"!=c&&"third"!=c&&f.warn("wrong type for mediaelement activating: "+
c);var e=f.data(a,"shadowData");d.activating=c;b(a).pause();d.isActive=c;"third"==c?(e.shadowElement=e.shadowFocusElement=d.shadowElem[0],b(a).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(b(a).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),e.shadowElement=e.shadowFocusElement=!1);b(a).trigger("mediaelementapichange")}};var K=function(){var b="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),
c=b.length;return function(d){if(d){var e=c,f=d.networkState;for(a(0,d);--e;)delete d[b[e]];d.actionQueue=[];d.buffered.length=0;f&&o(d._elem,"emptied")}}}(),H=function(a,c){var d=a._elem,e=a.shadowElem;b(d)[c?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!c?e.css({width:0,height:0}):e.css({width:d.style.width||b(d).width(),height:d.style.height||b(d).height()})};r.createSWF=function(a,c,d){if(s){1>h?h=1:h++;var e=b.extend({},n.jwVars,{image:b.prop(a,"poster")||"",file:c.srcProp}),
g=b(a).data("jwvars")||{};d||(d=f.data(a,"mediaelement"));if(d&&d.swfCreated)r.setActive(a,"third",d),K(d),d.currentSrc=c.srcProp,b.extend(e,g),n.changeJW(e,a,c,d,"load"),D(a,"sendEvent",["LOAD",e]);else{var i=b.prop(a,"controls"),E="jwplayer-"+f.getID(a),j=b.extend({},n.jwParams,b(a).data("jwparams")),o=a.nodeName.toLowerCase(),q=b.extend({},n.jwAttrs,{name:E,id:E},b(a).data("jwattrs")),p=b('<div class="polyfill-'+o+' polyfill-mediaelement" id="wrapper-'+E+'"><div id="'+E+'"></div>').css({position:"relative",
overflow:"hidden"}),d=f.data(a,"mediaelement",f.objectCreate(F,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:o},_elem:{value:a},currentSrc:{value:c.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=d.buffered.length)f.error("buffered index size error");else return 0},end:function(a){if(a>=d.buffered.length)f.error("buffered index size error");else return(d.duration-d._bufferedStart)*d._bufferedEnd/100+d._bufferedStart},length:0}}}));H(d,i);p.insertBefore(a);
w&&b.extend(d,{volume:b.prop(a,"volume"),muted:b.prop(a,"muted")});b.extend(e,{id:E,controlbar:i?n.jwVars.controlbar||("video"==o?"over":"bottom"):"video"==o?"none":"bottom",icons:""+(i&&"video"==o)},g,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});e.plugins=e.plugins?e.plugins+(","+B):B;f.addShadowDom(a,p);u(a);r.setActive(a,"third",d);n.changeJW(e,a,c,d,"embed");b(a).bind("updatemediaelementdimensions",function(){H(d,b.prop(a,"controls"))});G(d);l.embedSWF(v,E,"100%","100%","9.0.0",
!1,e,j,q,function(c){if(c.success)d.jwapi=c.ref,i||b(c.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!c.ref.parentNode&&p[0].parentNode||"none"==c.ref.style.display)p.addClass("flashblocker-assumed"),b(a).trigger("flashblocker"),f.warn("flashblocker assumed");b(c.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),k||(clearTimeout(k),k=setTimeout(function(){var a=b(c.ref);1<a[0].offsetWidth&&1<a[0].offsetHeight&&0===location.protocol.indexOf("file:")?f.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(2>a[0].offsetWidth||2>a[0].offsetHeight)&&f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){b(a).mediaLoad()},1)};var D=function(a,b,c,d){return(d=d||y(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var c={},d,e=function(b){"audio"==a&&
("videoHeight"==b||"videoWidth"==b)||(c[b]={get:function(){var a=y(this);return a?a[b]:w&&d[b].prop._supget?d[b].prop._supget.apply(this):F[b]},writeable:!1})},g=function(a,b){e(a);delete c[a].writeable;c[a].set=b};g("volume",function(a){var b=y(this);if(b){if(a*=100,!isNaN(a)){var c=b.muted;(0>a||100<a)&&f.error("volume greater or less than allowed "+a/100);D(this,"sendEvent",["VOLUME",a],b);if(c)try{b.jwapi.sendEvent("mute","true")}catch(e){}a/=100;if(!(b.volume==a||"third"!=b.isActive))b.volume=
a,o(b._elem,"volumechange")}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});g("muted",function(a){var b=y(this);if(b){if(a=!!a,D(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"third"!=b.isActive))b.muted=a,o(b._elem,"volumechange")}else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});g("currentTime",function(a){var b=y(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=
!0;b.stopPlayPause=!1},50);D(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,o(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){c[a]={value:function(){var b=y(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),D(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=
!0,b.paused!=("play"!=a)))b.paused="play"!=a,o(b._elem,a)},1);else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}});j.forEach(e);f.onNodeNamesPropertyModify(a,"controls",function(c,d){var e=y(this);b(this)[d?"addClass":"removeClass"]("webshims-controls");if(e){try{D(this,d?"showControls":"hideControls",[a],e)}catch(g){f.warn("you need to generate a crossdomain.xml")}"audio"==a&&H(e,d);b(e.jwapi).attr("tabindex",d?"0":"-1")}});d=f.defineNodeNameProperties(a,c,"prop")});if(s){var L=
b.cleanData,M=b.browser.msie&&9>f.browserVersion,N={object:1,OBJECT:1};b.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&h)for(b=0;b<c;b++)if(N[a[b].nodeName]){if("sendEvent"in a[b]){h--;try{a[b].sendEvent("play",!1)}catch(e){}}if(M)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return L.apply(this,arguments)}}w||(["poster","src"].forEach(function(a){f.defineNodeNameProperty("src"==a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(a){f.defineNodeNamesBooleanProperty(["audio",
"video"],a)}),f.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});
