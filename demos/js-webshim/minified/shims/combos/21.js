jQuery.webshims.register("form-message",function(a,c,r,h,u,l){var g=c.validityMessages,r=l.overrideMessages||l.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{});["select","radio"].forEach(function(a){g.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){g.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){g.en.rangeOverflow[a]="Value must be at or before {%max}."});g["en-US"]=g["en-US"]||g.en;g[""]=g[""]||g["en-US"];g.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},g.de||{});["select","radio"].forEach(function(a){g.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){g.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){g.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var t=g[""];c.createValidationMessage=function(c,g){var k=t[g];k&&"string"!==typeof k&&(k=k[a.prop(c,"type")]||k[(c.nodeName||"").toLowerCase()]||k.defaultMessage);k&&"value,min,max,title,maxlength,label".split(",").forEach(function(g){if(-1!==k.indexOf("{%"+g)){var q=("label"==g?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.attr(c,g))||"";k=k.replace("{%"+g+"}",q);"value"==g&&(k=k.replace("{%valueLen}",q.length))}});return k||""};(c.bugs.validationMessage||!Modernizr.formvalidation||
c.bugs.bustedValidity)&&r.push("validationMessage");c.activeLang({langObj:g,module:"form-core",callback:function(a){t=a}});r.forEach(function(g){c.defineNodeNamesProperty(["fieldset","output","button"],g,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(h){var k=c.defineNodeNameProperty(h,g,{prop:{get:function(){var g=this,h="";if(!a.prop(g,"willValidate"))return h;var l=a.prop(g,"validity")||{valid:1};if(l.valid||(h=c.getContentValidationMessage(g,l)))return h;if(l.customError&&
g.nodeName&&(h=Modernizr.formvalidation&&!c.bugs.bustedValidity&&k.prop._supget?k.prop._supget.call(g):c.data(g,"customvalidationMessage")))return h;a.each(l,function(a,k){if("valid"!=a&&k&&(h=c.createValidationMessage(g,a)))return!1});return h||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,c,r,h){c.inputTypes=c.inputTypes||{};var u=c.cfg.forms,l,g=c.inputTypes,t={radio:1,checkbox:1};c.addInputType=function(a,d){g[a]=d};var w={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},v={valueMissing:function(b,d,f){if(!b.prop("required"))return!1;var g=!1;if(!("type"in f))f.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();if("select"==f.nodeName){if(d=!d)if(!(d=0>b[0].selectedIndex))b=b[0],d="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=d}else b=t[f.type]?"checkbox"==f.type?!b.is(":checked"):!c.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!d;return b},tooLong:function(){return!1},typeMismatch:function(a,d,f){if(""===d||"select"==f.nodeName)return!1;var c=!1;if(!("type"in f))f.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(g[f.type]&&g[f.type].mismatch)c=g[f.type].mismatch(d,a);else if("validity"in a[0])c=a[0].validity.typeMismatch;return c},patternMismatch:function(a,d,f){if(""===d||"select"==f.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(g){c.error('invalid pattern value: "'+a+'" | '+g),a=!1}return!a?!1:!a.test(d)}};c.addValidityRule=function(a,d){v[a]=d};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=
this.form||this;if(!a.data(b,"invalidEventShim")&&(a(b).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),c.moveToFirstEvent(b,"submit"),c.bugs.bustedValidity&&a.nodeName(b,"form"))){var d=b.getAttribute("novalidate");b.setAttribute("novalidate","novalidate");c.data(b,"bustedNoValidate",null==d?null:d)}},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){l=!0;b.testedValidity=
!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),l=!1;l=!1}}};var k=function(b){if(!a.support.submitBubbles&&b&&"object"==typeof b&&!b._submit_attached)a.event.add(b,"submit._submit",function(a){a._submit_bubble=!0}),b._submit_attached=!0};if(!a.support.submitBubbles&&a.event.special.submit)a.event.special.submit.setup=function(){if(a.nodeName(this,"form"))return!1;a.event.add(this,"click._submit keypress._submit",function(b){b=b.target;b=a.nodeName(b,"input")||a.nodeName(b,
"button")?a.prop(b,"form"):void 0;k(b)})};a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var z=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return z.apply(this,arguments)}});a(r).bind("invalid",a.noop);c.addInputType("email",{mismatch:function(){var a=u.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(d){return!a.test(d)}}()});
c.addInputType("url",{mismatch:function(){var a=u.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(d){return!a.test(d)}}()});c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}});c.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},w)}}},"prop");var q=function(b){var d,f=a.prop(b,"validity");if(f)a.data(b,"cachedValidity",
f);else return!0;if(!f.valid){d=a.Event("invalid");var g=a(b).trigger(d);if(l&&!q.unhandledInvalids&&!d.isDefaultPrevented())c.validityAlert.showFor(g),q.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return f.valid},A=/^(?:select|textarea|input)/i;c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,d=a(a.prop(this,"elements")).filter(function(){if(!A.test(this.nodeName))return!1;var a=c.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});
q.unhandledInvalids=!1;for(var f=0,g=d.length;f<g;f++)q(d[f])||(b=!1);return b}}});c.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){q.unhandledInvalids=!1;return q(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");c.data(this,"customvalidationMessage",""+b)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var d=a(this).getNativeElement()[0];return!(d.disabled||
d.readOnly||b[d.type])}}()},validity:{writeable:!1,get:function(){var b=a(this).getNativeElement(),d=b[0],f=a.data(d,"cachedValidity");if(f)return f;f=a.extend({},w);if(!a.prop(d,"willValidate")||"submit"==d.type)return f;var g=b.val(),j={nodeName:d.nodeName.toLowerCase()};f.customError=!!c.data(d,"customvalidationMessage");if(f.customError)f.valid=!1;a.each(v,function(a,d){if(d(b,g,j))f[a]=!0,f.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",f.valid?"false":"true");d=b=null;return f}}},
"prop");c.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<c.browserVersion});c.reflectProperties(["input"],["pattern"]);if(!("maxLength"in h.createElement("textarea"))){var s=function(){var b,d=0,f=a([]),c=1E9,j=function(){var a=f.prop("value"),b=a.length;b>d&&b>c&&(b=Math.max(d,c),f.prop("value",a.substr(0,b)));d=b},o=function(){clearTimeout(b);f.unbind(".maxlengthconstraint")};
return function(g,p){o();if(-1<p)c=p,d=a.prop(g,"value").length,f=a(g),f.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(j,0)}),f.bind("keyup.maxlengthconstraint",j),f.bind("blur.maxlengthconstraint",o),b=setInterval(j,200)}}();s.update=function(b,d){a(b).is(":focus")&&(null==d&&(d=a.prop(b,"maxlength")),s(e.target,d))};a(h).bind("focusin",function(b){var d;"TEXTAREA"==b.target.nodeName&&-1<(d=a.prop(b.target,
"maxlength"))&&s(b.target,d)});c.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);s.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);s.update(this,a)}else this.setAttribute("maxlength","0"),s.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==
typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});c.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var B={submit:1,button:1,image:1},n={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},
{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var d="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),c="form"+b.name,g=b.name,j="click.webshimssubmittermutate"+g,o=function(){if("form"in this&&B[this.type]){var o=a.prop(this,"form");if(o){var m=a.attr(this,c);if(null!=m&&(!b.limitedTo||m.toLowerCase()===a.prop(this,d))){var i=a.attr(o,g);a.attr(o,g,m);setTimeout(function(){if(null!=i)a.attr(o,g,i);else try{a(o).removeAttr(g)}catch(b){o.removeAttribute(g)}},
9)}}}};switch(b.proptype){case "url":var x=h.createElement("form");n[d]={prop:{set:function(b){a.attr(this,c,b)},get:function(){var b=a.attr(this,c);if(null==b)return"";x.setAttribute("action",b);return x.action}}};break;case "boolean":n[d]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":n[d]={prop:{set:function(b){a.attr(this,c,b)},get:function(){var d=a.attr(this,
c);return!d||(d=d.toLowerCase())&&!b.limitedTo[d]?b.defaultProp:d}}};break;default:n[d]={prop:{set:function(b){a.attr(this,c,b)},get:function(){var b=a.attr(this,c);return null!=b?b:""}}}}n[c]||(n[c]={});n[c].attr={set:function(b){n[c].attr._supset.call(this,b);a(this).unbind(j).bind(j,o)},get:function(){return n[c].attr._supget.call(this)}};n[c].initAttr=!0;n[c].removeAttr={value:function(){a(this).unbind(j);n[c].removeAttr._supvalue.call(this)}}});c.defineNodeNamesProperties(["input","button"],
n);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):c.bugs.bustedValidity&&(c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){c.data(this,"bustedNoValidate",""+a)},get:function(){var a=c.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){c.data(this,
"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,c){v[c]=function(a){return(a[0].validity||{})[c]||!1}}));c.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},d={date:1,time:1,"datetime-local":1},f={focusout:1,blur:1},g=
{updateInput:1,change:1},j=function(a){var c,d=!0,m=a.prop("value"),i=m,j=function(c){if(a){var f=a.prop("value");f!==m&&(m=f,(!c||!b[c.type])&&a.trigger("input"));c&&g[c.type]&&(i=f);!d&&f!==i&&a.trigger("change")}},y,h=function(b){clearInterval(c);setTimeout(function(){b&&f[b.type]&&(d=!1);a&&(a.unbind("focusout blur",h).unbind("input change updateInput",j),j());a=null},1)};clearInterval(c);c=setInterval(j,160);clearTimeout(y);y=setTimeout(j,9);a.unbind("focusout blur",h).unbind("input change updateInput",
j);a.bind("focusout blur",h).bind("input updateInput change",j)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;(function(){var b=function(b){var c=1,d,i;if("date"==b.type&&(l||!a(b).is(":focus")))if((i=b.value)&&10>i.length&&(i=i.split("-"))&&3==i.length){for(;3>c;c++)if(1==i[c].length)i[c]="0"+i[c];else if(2!=i[c].length){d=!0;break}if(!d)return i=i.join("-"),a.prop(b,"value",i),i}},d,f,m,i;d=c.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){b(this);return d.prop._supvalue.apply(this,
arguments)}}});f=c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){a("input",this).each(function(){b(this)});return f.prop._supvalue.apply(this,arguments)}}});m=c.defineNodeNameProperty("input","value",{prop:{set:function(){return m.prop._supset.apply(this,arguments)},get:function(){return b(this)||m.prop._supget.apply(this,arguments)}}});i=c.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){b(this);return i.prop._supget.apply(this,arguments)}}});a(h).bind("change",
function(a){isChangeSubmit=!0;b(a.target);isChangeSubmit=!1})})();a(h).bind("focusin",function(b){b.target&&d[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&j(a(b.target))})}();c.addReady(function(b,c){var f;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==h&&!("form"in(h.activeElement||{})))(f=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&f.offsetHeight&&f.offsetWidth&&f.focus()}catch(g){}});(!Modernizr.formattribute||
!Modernizr.fieldsetdisabled)&&function(){(function(b,c){a.prop=function(d,f,m){var i;if(d&&1==d.nodeType&&m===c&&a.nodeName(d,"form")&&d.id){i=h.getElementsByName(f);if(!i||!i.length)i=h.getElementById(f);if(i&&(i=a(i).filter(function(){return a.prop(this,"form")==d}).get(),i.length))return 1==i.length?i[0]:i}return b.apply(this,arguments)}})(a.prop,void 0);var b=function(b){var c=a.data(b,"webshimsAddedElements");c&&(c.remove(),a.removeData(b,"webshimsAddedElements"))},d=/\r?\n/g,f=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
g=/^(?:select|textarea)/i;Modernizr.formattribute||(c.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var b=c.contentAttr(this,"form");b&&(b=h.getElementById(b))&&!a.nodeName(b,"form")&&(b=null);return b||this.form},writeable:!1}}),c.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var b=this.id,c;b&&(c=a(a.makeArray(this.elements)).add('input[form="'+b+'"], select[form="'+b+'"], textarea[form="'+b+'"], button[form="'+b+'"], fieldset[form="'+
b+'"]').not(".webshims-visual-hide > *").get());return c.length?c:this.elements||null},writeable:!1}}),a(function(){var c=function(a){a.stopPropagation()};a(h).bind("submit",function(c){if(!c.isDefaultPrevented()){var d=c.target;if(c=d.id)b(d),c=a('input[form="'+c+'"], select[form="'+c+'"], textarea[form="'+c+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=d}).clone(),c.length&&(a.data(d,"webshimsAddedElements",a('<div class="webshims-visual-hide" />').append(c).appendTo(d)),setTimeout(function(){b(d)},
9)),c=null}});a(h).bind("click",function(b){if(!b.isDefaultPrevented()&&a(b.target).is('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]')){var d=a.prop(b.target,"form"),f=b.target.form,m;d&&d!=f&&(m=a(b.target).clone().removeAttr("form").addClass("webshims-visual-hide").bind("click",c).appendTo(d),f&&b.preventDefault(),k(d),m.trigger("click"),setTimeout(function(){m.remove();m=null},9))}})}));Modernizr.fieldsetdisabled||c.defineNodeNamesProperty(["fieldset"],
"elements",{prop:{get:function(){var b=a("input, select, textarea, button, fieldset",this);return b.length?b:this.elements||null},writeable:!1}});a.fn.serializeArray=function(){return this.map(function(){var b=a.prop(this,"elements");return b?a.makeArray(b):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||g.test(this.nodeName)||f.test(this.type))}).map(function(b,c){var f=a(this).val();return null==f?null:a.isArray(f)?a.map(f,function(a){return{name:c.name,value:a.replace(d,
"\r\n")}}):{name:c.name,value:f.replace(d,"\r\n")}}).get()}}();(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);var b=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||b){var d="over"==c.cfg.forms.placeholderType,f=["textarea"];Modernizr.input.placeholder||f.push("input");var g=function(a){try{if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a.createTextRange){var b=a.createTextRange();b.collapse(!0);
b.moveEnd("character",0);b.moveStart("character",0);b.select();return!0}}catch(c){}},j=function(b,c,f,j){!1===f&&(f=a.prop(b,"value"));if(!d&&"password"!=b.type){if(!f&&j&&g(b)){var h=setTimeout(function(){g(b)},9);a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(h),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",
function(){g(b);clearTimeout(h);h=setTimeout(function(){g(b)},9)}).bind("blur.placeholderremove",function(){clearTimeout(h);a(b).unbind(".placeholderremove")});return}b.value=f}else if(!f&&j){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});
return}c.box.removeClass("placeholder-visible")},h=function(b,c,f,g,h){if(!g&&(g=a.data(b,"placeHolder"),!g))return;a(b).unbind(".placeholderremove");if("focus"==h||!h&&a(b).is(":focus"))("password"==b.type||d||a(b).hasClass("placeholder-visible"))&&j(b,g,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)j(b,g,c);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!c){c=g;!1===f&&(f=a.prop(b,"placeholder"));if(!d&&"password"!=b.type)b.value=f;c.box.addClass("placeholder-visible")}else j(b,g,c)},k=function(b){var b=
a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labelledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},p=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){h(this,
!1,!1,c,a.type);c.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){h(b,!1,!1,c,a.type)},0)});if("password"==b.type||d){c.text=k(b);c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",function(){h(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left",
"Top"],function(d,f){var g=(parseInt(a.css(b,"padding"+f),10)||0)+Math.max(parseInt(a.css(b,"margin"+f),10)||0,0)+(parseInt(a.css(b,"border"+f+"Width"),10)||0);c.text.css("padding"+f,g)});a.css(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},g=a.css(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,f){var g=a.css(b,f);c.text.css(f)!=g&&c.text.css(f,g)});f.width&&f.height&&c.text.css(f);"none"!==g&&c.box.addClass("placeholder-box-"+g)}else f=function(d){a(b).hasClass("placeholder-visible")&&
(j(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&h(b,!1,!1,c)},9))},a(r).bind("beforeunload",f),c.box=a(b),b.form&&a(b.form).submit(f);return c},update:function(d,f){var g=(a.attr(d,"type")||a.prop(d,"type")||"").toLowerCase();!b[g]&&!a.nodeName(d,"textarea")?(c.error('placeholder not allowed on input[type="'+g+'"]'),"date"==g&&c.error('but you can use data-placeholder for input[type="date"]')):(g=p.create(d),g.text&&g.text.text(f),h(d,!1,f,g))}}}();a.webshims.publicMethods=
{pHolder:p};f.forEach(function(a){c.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b?(c.data(this,"textareaPlaceholder",a),this.placeholder=""):c.contentAttr(this,"placeholder",a);p.update(this,a)},get:function(){return(b?c.data(this,"textareaPlaceholder"):"")||c.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});f.forEach(function(d){var f={},g;["attr","prop"].forEach(function(d){f[d]={set:function(f){var j;b&&(j=c.data(this,"textareaPlaceholder"));j||(j=c.contentAttr(this,
"placeholder"));a.removeData(this,"cachedValidity");var i=g[d]._supset.call(this,f);j&&"value"in this&&h(this,f,j);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":g[d]._supget.call(this)}}});g=c.defineNodeNameProperty(d,"value",f)})}})();(function(){if(!("value"in h.createElement("output"))){c.defineNodeNameProperty("output","value",{prop:{set:function(c){var f=a.data(this,"outputShim");f||(f=b(this));f(c)},get:function(){return c.contentAttr(this,"value")||a(this).text()||
""}}});c.onNodeNamesPropertyModify("input","value",function(b,c,g){"removeAttr"!=g&&(c=a.data(this,"outputShim"))&&c(b)});var b=function(b){if(!b.getAttribute("aria-live")){var b=a(b),f=(b.text()||"").trim(),g=b.attr("id"),j=b.attr("for"),k=a('<input class="output-shim" type="text" disabled name="'+(b.attr("name")||"")+'" value="'+f+'" style="display: none !important;" />').insertAfter(b),l=k[0].form||h,p=function(a){k[0].value=a;a=k[0].value;b.text(a);c.contentAttr(b[0],"value",a)};b[0].defaultValue=
f;c.contentAttr(b[0],"value",f);b.attr({"aria-live":"polite"});g&&(k.attr("id",g),b.attr("aria-labelledby",c.getID(a('label[for="'+g+'"]',l))));j&&(g=c.getID(b),j.split(" ").forEach(function(a){(a=h.getElementById(a))&&a.setAttribute("aria-controls",g)}));b.data("outputShim",p);k.data("outputShim",p);return p}};c.addReady(function(c,f){a("output",c).add(f.filter("output")).each(function(){b(this)})});(function(){var b={updateInput:1,input:1},f={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,
file:1,color:1},g=function(a){var f,g=a.prop("value"),h=function(f){if(a){var h=a.prop("value");h!==g&&(g=h,(!f||!b[f.type])&&c.triggerInlineForm&&c.triggerInlineForm(a[0],"input"))}},k,i=function(){clearTimeout(k);k=setTimeout(h,9)},l=function(){a.unbind("focusout",l).unbind("keyup keypress keydown paste cut",i).unbind("input change updateInput",h);clearInterval(f);setTimeout(function(){h();a=null},1)};clearInterval(f);f=setInterval(h,99);i();a.bind("keyup keypress keydown paste cut",i).bind("focusout",
l).bind("input updateInput change",h)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(h).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||"").toLowerCase()&&!f[b.target.type]&&g(a(b.target))})})()}})()});
