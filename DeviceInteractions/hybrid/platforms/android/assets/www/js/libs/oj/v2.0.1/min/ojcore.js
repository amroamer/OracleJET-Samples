/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var o_a=this;function o_(b,f,a){b=b.split(".");a=a||o_a;b[0]in a||!a.execScript||a.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===f?a=a[d]?a[d]:a[d]={}:a[d]=f};/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["require","ojL10n!ojtranslations/nls/ojtranslations"],function(b,f){var a={};"undefined"!==typeof window?a=window:"undefined"!==typeof self&&(a=self);var d=a.oj,c=a.oj={version:"2.0.1",build:"2",revision:"24669",noConflict:function(){a.oj=d}};c.r={};o_("Logger",c.r,c);c.r.K6=0;o_("Logger.LEVEL_NONE",c.r.K6,c);c.r.AF=1;o_("Logger.LEVEL_ERROR",c.r.AF,c);c.r.an=2;o_("Logger.LEVEL_WARN",c.r.an,c);c.r.Wr=3;o_("Logger.LEVEL_INFO",c.r.Wr,c);c.r.fQ=4;o_("Logger.LEVEL_LOG",
c.r.fQ,c);c.r.B8="error";c.r.E8="warn";c.r.C8="info";c.r.D8="log";c.r.MU={level:c.r.AF,writer:null};c.r.jb=c.r.MU;c.r.error=function(a){c.r.qy(c.r.AF,c.r.B8,arguments)};o_("Logger.error",c.r.error,c);c.r.info=function(a){c.r.qy(c.r.Wr,c.r.C8,arguments)};o_("Logger.info",c.r.info,c);c.r.warn=function(a){c.r.qy(c.r.an,c.r.E8,arguments)};o_("Logger.warn",c.r.warn,c);c.r.log=function(a){c.r.qy(c.r.fQ,c.r.D8,arguments)};o_("Logger.log",c.r.log,c);c.r.option=function(a,b){var d={},e;if(0==arguments.length){for(e in c.r.jb)c.r.jb.hasOwnProperty(e)&&
(d[e]=c.r.jb[e]);return d}if("string"===typeof a&&void 0===b)return void 0===c.r.jb[a]?null:c.r.jb[a];if("string"===typeof a)c.r.jb[a]=b;else for(e in a)a.hasOwnProperty(e)&&c.r.option(e,a[e])};o_("Logger.option",c.r.option,c);c.r.qy=function(a,b,d){if(!(c.r.option("level")<a)){var e=c.r.Mea();null!=e&&(1==d.length&&d[0]instanceof Function&&(d=[d[0]()]),e[b]&&e[b].apply?e[b].apply(e,d):e[b]&&(e[b]=Function.prototype.bind.call(e[b],e),c.r.qy(a,b,d)))}};c.r.Mea=function(){var a=null;c.r.option("writer")?
a=c.r.option("writer"):void 0!==window&&void 0!==window.console&&(a=window.console);return a};c.r.Xra=function(a){return void 0!==c.r.MU[a]};var e=a.__ojCheckpointManager;c.Vh={};o_("CHECKPOINT_MANAGER",c.Vh,c);c.Vh.oqa=function(a,b){e&&e.startCheckpoint(a,b)};o_("CHECKPOINT_MANAGER.startCheckpoint",c.Vh.oqa,c);c.Vh.$na=function(a){e&&e.endCheckpoint(a)};o_("CHECKPOINT_MANAGER.endCheckpoint",c.Vh.$na,c);c.Vh.SN=function(a){return e?e.getRecord(a):void 0};o_("CHECKPOINT_MANAGER.getRecord",c.Vh.SN,
c);c.Vh.z4=function(a){return e?e.matchRecords(a):[]};o_("CHECKPOINT_MANAGER.matchRecords",c.Vh.z4,c);c.Vh.Xna=function(a){c.r.info(function(){for(var b="Checkpoint Records:",d=c.Vh.z4(a),e=0;e<d.length;e++){var g=d[e],b=b+"\n"+g.name,f=g.description;null!=f&&(b=b+" ("+f+")");b+=":\n";b=b+"start: "+g.start+"\tduration: "+g.duration}return b})};o_("CHECKPOINT_MANAGER.dump",c.Vh.Xna,c);c.b=function(){this.Init()};o_("Object",c.b,c);c.b.q=null;c.b.GM="oj.Object";c.b.a8=/function\s+([\w\$][\w\$\d]*)\s*\(/;
c.b.prototype={};c.b.prototype.constructor=c.b;c.b.g=function(a,b){var d=null,e=null,g;for(g in b)if(b.hasOwnProperty(g)){d=g;e=b[g];break}var f=a.split(".");g=c[f[0]];f=f[2];if(d!=f&&null!=d){var r=g.mL;r||(r={},g.mL=r);r[d]=f;g.prototype[f]=e}};c.b.ga=function(a,b,d){c.l.Do(a);c.l.tu(b);c.l.aN(d);void 0===b&&(b=c.b);c.l.assert(a!==b,"Class can't extend itself");var e=c.b.Xla;e.prototype=b.prototype;a.prototype=new e;a.prototype.constructor=a;a.q=a.superclass=b.prototype;d&&(a.GM=d)};o_("Object.createSubclass",
c.b.ga,c);c.b.sna=function(a,b){var d;c.l.Do(a);c.l.assert(null!=b,"source object cannot be null");for(d in b)b.hasOwnProperty(d)&&(a.prototype[d]=b[d])};o_("Object.copyPropertiesForClass",c.b.sna,c);c.b.Xla=function(){};c.b.prototype.P2=function(a){if(void 0===a)a=this;else if(null===a)return null;return a.constructor};c.b.g("Object.prototype.getClass",{P2:c.b.prototype.P2});c.b.prototype.clone=function(){var a=new this.constructor;c.yc.If(a,this);return a};c.b.g("Object.prototype.clone",{clone:c.b.prototype.clone});
c.b.prototype.toString=function(){return this.pP()};c.b.g("Object.prototype.toString",{toString:c.b.prototype.toString});c.b.prototype.pP=function(){return this.getTypeName()+" Object"};c.b.g("Object.prototype.toDebugString",{pP:c.b.prototype.pP});c.b.getTypeName=function(a){c.l.Do(a);var b=a.GM;null==b&&(b=a.toString(),b=(b=c.b.a8.exec(b))?b[1]:"anonymous",a.GM=b);return b};o_("Object.getTypeName",c.b.getTypeName,c);c.b.prototype.getTypeName=function(){return c.b.getTypeName(this.constructor)};c.b.g("Object.prototype.getTypeName",
{getTypeName:c.b.prototype.getTypeName});c.b.prototype.Init=function(){c.l.hO()&&c.l.assert(this.getTypeName,"Not an oj.Object");var a=this.constructor;a.Tl||c.b.qK(a)};c.b.g("Object.prototype.Init",{Init:c.b.prototype.Init});c.b.aoa=function(a){c.l.Do(a);a.Tl||c.b.qK(a)};o_("Object.ensureClassInitialization",c.b.aoa,c);c.b.prototype.Io=function(a){return this===a};c.b.g("Object.prototype.equals",{Io:c.b.prototype.Io});c.b.j2=function(a,b){c.l.Do(b);return b.bind(a)};o_("Object.createCallback",c.b.j2,
c);c.b.qK=function(a){c.l.hO()&&(c.l.Do(a),c.l.assert(!a.Tl));a.Tl=!0;var b=a.q;b&&((b=b.constructor)&&!b.Tl&&c.b.qK(b),c.b.L$(a));(b=a.InitClass||null)||(b=a.InitClass);b&&b.call(a)};c.b.nh=function(a,b){if(a===b)return!0;if(typeof a!==typeof b||null===a||null===b)return!1;if(a.constructor===b.constructor){if(Array.isArray(a))return c.b.Taa(a,b);if(a.constructor===Object)return c.b.Tv(a,b);if(a.valueOf&&"function"===typeof a.valueOf)return a.valueOf()===b.valueOf()}return!1};o_("Object.compareValues",
c.b.nh,c);c.b.Taa=function(a,b){if(a.length!==b.length)return!1;for(var d=0,e=a.length;d<e;d++)if(!c.b.nh(a[d],b[d]))return!1;return!0};c.b.gU=function(a,b){if(!a)return!b||0==b.length;if(!b)return!a||0==a.length;if(a.length!=b.length)return!1;for(var d=0;d<a.length;d++)if(a[d]!=b[d]&&(-1==a.indexOf(b[d])||-1==b.indexOf(a[d])))return!1;return!0};c.b.Tv=function(a,b){var d,e=!1;if(a===b)return!0;if(!(a instanceof Object&&b instanceof Object)||a.constructor!==b.constructor)return!1;for(d in a)if(e||
(e=!0),a.hasOwnProperty(d)&&(!b.hasOwnProperty(d)||a[d]!==b[d]&&("object"!==typeof a[d]||!c.b.Tv(a[d],b[d]))))return!1;for(d in b)if(e||(e=!0),b.hasOwnProperty(d)&&!a.hasOwnProperty(d))return!1;return e?!0:JSON.stringify(a)===JSON.stringify(b)};c.b.qh=function(a){var b;if(void 0===a||null===a)return!0;for(b in a)if(a.hasOwnProperty(b))return!1;return!0};c.b.L$=function(a){c.b.mL&&c.b.iT(a,a.q)};c.b.iT=function(a,b){if(b){var d=b.constructor;c.b.iT(a,d.q);var d=d.mL,e;if(d)for(e in d)if(d.hasOwnProperty(e)){var g=
d[e];if(e!=g){var f=a.prototype;!f.hasOwnProperty(e)&&f.hasOwnProperty(g)?f[e]=f[g]:!f.hasOwnProperty(g)&&f.hasOwnProperty(e)&&(f[g]=f[e])}}}};c.Ks=function(){return"function"===typeof define&&define.amd};c.l={};o_("Assert",c.l,c);c.l.foa=function(){c.l.DEBUG=!0};o_("Assert.forceDebug",c.l.foa,c);c.l.nna=function(){c.l.DEBUG=!1};o_("Assert.clearDebug",c.l.nna,c);c.l.hO=function(){return!0==c.l.DEBUG};o_("Assert.isDebug",c.l.hO,c);c.l.assert=function(a,b){if(c.l.DEBUG&&!a){var d=b||"",e;if(2<arguments.length){d+=
"(";for(e=2;e<arguments.length;e+=1)d+=arguments[e];d+=")"}c.l.Pd(d)}};o_("Assert.assert",c.l.assert,c);c.l.Yb=function(){c.l.DEBUG&&c.l.Pd("Abstract function called")};o_("Assert.failedInAbstractFunction",c.l.Yb,c);c.l.Yc=function(a,b,d){var e;c.l.DEBUG&&(null!=a?(c.l.Ph(b,"function",null,0,!1),e=b.prototype,e.isPrototypeOf(a)||c.l.Pd("object '"+a+"' doesn't match prototype "+e,0,d)):c.l.Pd("null object doesn't match prototype "+e,0,d))};o_("Assert.assertPrototype",c.l.Yc,c);c.l.dna=function(a,b,
d){var e;c.l.DEBUG&&null!=a&&(null!=a?(c.l.Ph(b,"function",null,0,!1),e=b.prototype,e.isPrototypeOf(a)||c.l.Pd("object '"+a+"' doesn't match prototype "+e,0,d)):c.l.Pd("null object doesn't match prototype "+e,0,d))};o_("Assert.assertPrototypeOrNull",c.l.dna,c);c.l.ena=function(a,b,d,e){c.l.DEBUG&&(b=b.prototype,d=d.prototype,b.isPrototypeOf(a)||d.isPrototypeOf(a)||c.l.Pd("object '"+a+"' doesn't match prototype "+b+" or "+d,0,e))};o_("Assert.assertPrototypes",c.l.ena,c);c.l.Yma=function(a){c.l.DEBUG&&
a&&void 0===a.nodeType&&c.l.Pd(a+" is not a DOM Node")};o_("Assert.assertDomNodeOrNull",c.l.Yma,c);c.l.$M=function(a){c.l.DEBUG&&(a&&void 0!==a.nodeType||c.l.Pd(a+" is not a DOM Node"))};o_("Assert.assertDomNode",c.l.$M,c);c.l.ZM=function(a,b){c.l.DEBUG&&(c.l.$M(a),1!==a.nodeType?c.l.Pd(a+" is not a DOM Element"):b&&a.nodeName!==b&&c.l.Pd(a+" is not a "+b+" Element"))};o_("Assert.assertDomElement",c.l.ZM,c);c.l.Xma=function(a,b){c.l.DEBUG&&null!=a&&(c.l.$M(a),1!==a.nodeType?c.l.Pd(a+" is not a DOM Element"):
b&&a.nodeName!==b&&c.l.Pd(a+" is not a "+b+" Element"))};o_("Assert.assertDomElementOrNull",c.l.Xma,c);c.l.Ph=function(a,b,d,e,g){!c.l.DEBUG||null==a&&g||typeof a===b||(a=a+" is not of type "+b,d&&(a=d+a),c.l.Pd(a))};o_("Assert.assertType",c.l.Ph,c);c.l.Hf=function(a,b){c.l.DEBUG&&c.l.Ph(a,"object",b,0,!1)};o_("Assert.assertObject",c.l.Hf,c);c.l.O1=function(a,b){c.l.DEBUG&&c.l.Ph(a,"object",b,0,!0)};o_("Assert.assertObjectOrNull",c.l.O1,c);c.l.$ma=function(a,b){c.l.DEBUG&&(c.l.Ph(a,"string",b,0,!1),
c.l.assert(0<a.length,"empty string"))};o_("Assert.assertNonEmptyString",c.l.$ma,c);c.l.hm=function(a,b){c.l.DEBUG&&c.l.Ph(a,"string",b,0,!1)};o_("Assert.assertString",c.l.hm,c);c.l.aN=function(a,b){c.l.DEBUG&&c.l.Ph(a,"string",b,0,!0)};o_("Assert.assertStringOrNull",c.l.aN,c);c.l.Do=function(a,b){c.l.DEBUG&&c.l.Ph(a,"function",b,0,!1)};o_("Assert.assertFunction",c.l.Do,c);c.l.tu=function(a,b){c.l.DEBUG&&c.l.Ph(a,"function",b,0,!0)};o_("Assert.assertFunctionOrNull",c.l.tu,c);c.l.N1=function(a,b){c.l.DEBUG&&
c.l.Ph(a,"boolean",b,0,!1)};o_("Assert.assertBoolean",c.l.N1,c);c.l.gm=function(a,b){c.l.DEBUG&&c.l.Ph(a,"number",b,0,!1)};o_("Assert.assertNumber",c.l.gm,c);c.l.bna=function(a,b){c.l.DEBUG&&c.l.Ph(a,"number",b,0,!0)};o_("Assert.assertNumberOrNull",c.l.bna,c);c.l.QD=function(a,b){c.l.DEBUG&&!Array.isArray(a)&&(void 0===b&&(b=a+" is not an array"),c.l.Pd(b))};o_("Assert.assertArray",c.l.QD,c);c.l.sy=function(a,b){c.l.DEBUG&&null!=a&&!Array.isArray(a)&&(void 0===b&&(b=a+" is not an array"),c.l.Pd(b))};
o_("Assert.assertArrayOrNull",c.l.sy,c);c.l.ana=function(a,b){c.l.DEBUG&&!isNaN(a)&&(void 0===b&&(b=a+" is convertible to a number"),c.l.Pd(b))};o_("Assert.assertNonNumeric",c.l.ana,c);c.l.cna=function(a,b){c.l.DEBUG&&isNaN(a)&&(void 0===b&&(b=a+" is not convertible to a number"),c.l.Pd(b))};o_("Assert.assertNumeric",c.l.cna,c);c.l.Zma=function(a,b,d){var e;if(null==a||void 0===b[a.toString()]){if(void 0===d){d=" is not in set: {";for(e in b)b.hasOwnProperty(e)&&(d+=e,d+=",");d=a+(d+"}")}c.l.Pd(d)}};
o_("Assert.assertInSet",c.l.Zma,c);c.l.Pd=function(a,b,d){b="Assertion";d&&(b+=" ("+d+")");b+=" failed: ";void 0!==a&&(b+=a);throw Error(b);};o_("Assert.assertionFailed",c.l.Pd,c);var g=a.__oj_Assert_DEBUG;void 0!==g&&(c.l.DEBUG=g);c.Qg=function(){this.Init()};o_("EventSource",c.Qg,c);c.b.ga(c.Qg,c.b,"oj.EventSource");c.Qg.prototype.Init=function(){this.hd=[];c.Qg.q.Init.call(this)};c.b.g("EventSource.prototype.Init",{Init:c.Qg.prototype.Init});c.Qg.prototype.on=function(a,b){var d=!1,c;for(c=0;c<
this.hd.length;c++)if(this.hd[c].eventType==a&&this.hd[c].eventHandlerFunc==b){d=!0;break}d||this.hd.push({eventType:a,eventHandlerFunc:b})};c.b.g("EventSource.prototype.on",{on:c.Qg.prototype.on});c.Qg.prototype.off=function(a,b){var d;for(d=this.hd.length-1;0<=d;d--)if(this.hd[d].eventType==a&&this.hd[d].eventHandlerFunc==b){this.hd.splice(d,1);break}};c.b.g("EventSource.prototype.off",{off:c.Qg.prototype.off});c.Qg.prototype.handleEvent=function(a,b){var d,c;for(d=0;d<this.hd.length;d++)if(c=this.hd[d],
c.eventType==a&&(c=c.eventHandlerFunc.apply(this,Array.prototype.slice.call(arguments).slice(1)),!1===c))return!1;return!0};c.b.g("EventSource.prototype.handleEvent",{handleEvent:c.Qg.prototype.handleEvent});c.ba={};o_("Config",c.ba,c);c.ba.Bg=function(){var a;if(c.Ks())return c.l.assert(void 0!==f,"ojtranslations module must be defined"),a=f._ojLocale_,"root"==a?"en":a;a=c.ba.Nt;null==a&&((a=document.documentElement.lang)||(a=void 0===navigator?"en":(navigator.language||navigator.userLanguage||"en").toLowerCase()),
c.ba.Nt=a=a.toLowerCase());return a};o_("Config.getLocale",c.ba.Bg,c);c.ba.gqa=function(a,d){if(c.Ks()){var e=["ojL10n!ojtranslations/nls/"+a+"/ojtranslations"];c.Ja&&e.push("ojL10n!ojtranslations/nls/"+a+"/localeElements");b(e,function(a,b){f=a;b&&c.Ja.Z9(b);d&&d()})}else c.ba.Nt=a,d&&d()};o_("Config.setLocale",c.ba.gqa,c);c.ba.kb=function(a){var d=/^\/|:/;return null==a||d.test(a)?a:(d=c.ba.uka)?d+("/"==d.charAt(d.length-1)?"":"/")+a:c.Ks()?(d=b.toUrl("ojs/_foo_"),d.replace(/[^\/]*$/,"../"+a)):
a};o_("Config.getResourceUrl",c.ba.kb,c);c.ba.hqa=function(a){c.ba.uka=a};o_("Config.setResourceBaseUrl",c.ba.hqa,c);c.ba.fqa=function(a){c.ba.S$=a};o_("Config.setAutomationMode",c.ba.fqa,c);c.ba.FN=function(){return c.ba.S$};o_("Config.getAutomationMode",c.ba.FN,c);c.ba.G3=function(){var a="Oracle JET Version: "+c.version+"\n",a=a+("Oracle JET Revision: "+c.revision+"\n");window.navigator&&(a+="Browser: "+window.navigator.userAgent+"\n",a+="Browser Platform: "+window.navigator.platform+"\n");$&&
($.fn&&(a+="jQuery Version: "+$.fn.jquery+"\n"),$.ui&&$.ui.version&&(a+="jQuery UI Version: "+$.ui.version+"\n"));c.ia&&(a+="Knockout Version: "+c.ia.Y9()+"\n");window.Xpa&&(a+="Require Version: "+window.Xpa.version+"\n");return a};o_("Config.getVersionInfo",c.ba.G3,c);c.ba.tpa=function(){console.log(c.ba.G3())};o_("Config.logVersionInfo",c.ba.tpa,c);(function(){function a(b,d){d=d||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");c.initCustomEvent(b,d.bubbles,d.cancelable,
d.detail);return c}void 0!==window&&"function"!==typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)})();c.Ma=function(){};c.Ma.ml={yF:"ie",NP:"firefox",tQ:"safari",l6:"chrome",xv:"unknown"};c.Ma.Xm={EQ:"trident",PF:"webkit",QP:"gecko",xv:"unknown"};c.Ma.Yi={m7:"Windows",e7:"Solaris",hQ:"Mac",xv:"Unknown",BP:"Android",zF:"IOS",L6:"Linux"};c.Ma.Cy=function(){var a;c.Ea.Ki(a)&&(a=navigator.userAgent);a=a.toLowerCase();var b=c.Ea.nr(a),d=c.Ma.Vba;if(d&&d.hashCode===b)return{os:d.os,
browser:d.browser,browserVersion:d.browserVersion,engine:d.engine,engineVersion:d.engineVersion,hashCode:d.hashCode};var d=c.Ma.Yi.xv,e=c.Ma.ml.xv,g=0,f=c.Ma.Xm.xv,r=0;-1<a.indexOf("iphone")||-1<a.indexOf("ipad")?d=c.Ma.Yi.zF:-1<a.indexOf("mac")?d=c.Ma.Yi.hQ:-1<a.indexOf("sunos")?d=c.Ma.Yi.e7:-1<a.indexOf("android")?d=c.Ma.Yi.BP:-1<a.indexOf("linux")?d=c.Ma.Yi.L6:-1<a.indexOf("win")&&(d=c.Ma.Yi.m7);-1<a.indexOf("msie")?(e=c.Ma.ml.yF,g=c.Ma.Ai(a,/msie (\d+[.]\d+)/),a.indexOf("trident")&&(f=c.Ma.Xm.EQ,
r=c.Ma.Ai(a,/trident\/(\d+[.]\d+)/))):-1<a.indexOf("trident")?(e=c.Ma.ml.yF,g=c.Ma.Ai(a,/rv:(\d+[.]\d+)/),a.indexOf("trident")&&(f=c.Ma.Xm.EQ,r=c.Ma.Ai(a,/trident\/(\d+[.]\d+)/))):-1<a.indexOf("chrome")?(e=c.Ma.ml.l6,g=c.Ma.Ai(a,/chrome\/(\d+[.]\d+)/),f=c.Ma.Xm.PF,r=c.Ma.Ai(a,/applewebkit\/(\d+[.]\d+)/)):-1<a.indexOf("safari")?(e=c.Ma.ml.tQ,g=c.Ma.Ai(a,/version\/(\d+[.]\d+)/),f=c.Ma.Xm.PF,r=c.Ma.Ai(a,/applewebkit\/(\d+[.]\d+)/)):-1<a.indexOf("firefox")&&(e=c.Ma.ml.NP,g=c.Ma.Ai(a,/rv:(\d+[.]\d+)/),
f=c.Ma.Xm.QP,r=c.Ma.Ai(a,/gecko\/(\d+)/));d=c.Ma.Vba={hashCode:b,os:d,browser:e,browserVersion:g,engine:f,engineVersion:r};return{os:d.os,browser:d.browser,browserVersion:d.browserVersion,engine:d.engine,engineVersion:d.engineVersion,hashCode:d.hashCode}};c.Ma.Ai=function(a,b){var d=a.match(b);return d&&(d=d[1])?parseFloat(d):0};c.De={};c.De.Q4=function(a){var b=document.getElementsByClassName(a).item(0);null===b&&(b=document.createElement("meta"),b.className=a,document.head.appendChild(b));if((b=
window.getComputedStyle(b))&&(b=b.getPropertyValue("font-family"))&&"none"!=b&&(b=b.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g,""))){try{b=JSON.parse(b)}catch(d){return c.r.error("Error parsing json for selector "+a+".\nString being parsed is "+b+"\n"+d),null}return b}c.r.info("No json found for selector "+a);return null};c.De.Uk=function(a){a=a.toLowerCase();null==c.De.NO&&(c.De.NO={});var b=c.De.NO[a];null==b&&(b=c.De.Q4("oj-"+a+"-option-defaults"),null==b&&(b={}),c.De.NO[a]=b);return b};c.ResponsiveUtils=
{};c.ResponsiveUtils.SCREEN_RANGE={SM:"sm",MD:"md",LG:"lg",XL:"xl",XXL:"xxl"};c.ResponsiveUtils.FRAMEWORK_QUERY_KEY={SM_UP:"sm-up",MD_UP:"md-up",LG_UP:"lg-up",XL_UP:"xl-up",XXL_UP:"xxl-up",SM_ONLY:"sm-only",MD_ONLY:"md-only",LG_ONLY:"lg-only",XL_ONLY:"xl-only",MD_DOWN:"md-down",LG_DOWN:"lg-down",XL_DOWN:"xl-down",HIGH_RESOLUTION:"high-resolution"};c.ResponsiveUtils.Ip={};c.ResponsiveUtils.Ip[c.ResponsiveUtils.SCREEN_RANGE.SM]=0;c.ResponsiveUtils.Ip[c.ResponsiveUtils.SCREEN_RANGE.MD]=1;c.ResponsiveUtils.Ip[c.ResponsiveUtils.SCREEN_RANGE.LG]=
2;c.ResponsiveUtils.Ip[c.ResponsiveUtils.SCREEN_RANGE.XL]=3;c.ResponsiveUtils.Ip[c.ResponsiveUtils.SCREEN_RANGE.XXL]=4;c.ResponsiveUtils.dea=function(a){var b=document.getElementsByClassName(a).item(0);null===b&&(b=document.createElement("meta"),b.className=a,document.head.appendChild(b));return window.getComputedStyle(b).getPropertyValue("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")};c.ResponsiveUtils.getFrameworkQuery=function(a){a=c.ResponsiveUtils.dea("oj-mq-"+a);return"null"==
a?null:a};c.ResponsiveUtils.compare=function(a,b){var d=c.ResponsiveUtils.Ip[a],e=c.ResponsiveUtils.Ip[b];if(void 0==d)throw"size1 param "+a+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";if(void 0==e)throw"size2 param "+b+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";return d-e};c.Ea={};o_("StringUtils",c.Ea,c);c.Ea.U9=/^\s*|\s*$/g;c.Ea.qh=function(a){return null===a?!0:0===c.Ea.trim(a).length};o_("StringUtils.isEmpty",
c.Ea.qh,c);c.Ea.Ki=function(a){return void 0===a||c.Ea.qh(a)?!0:!1};o_("StringUtils.isEmptyOrUndefined",c.Ea.Ki,c);c.Ea.od=function(a){return null!==a&&("string"===typeof a||a instanceof String)};o_("StringUtils.isString",c.Ea.od,c);c.Ea.trim=function(a){return c.Ea.od(a)?a.replace(c.Ea.U9,""):a};o_("StringUtils.trim",c.Ea.trim,c);c.Ea.nr=function(a){var b=0;if(0===a.length)return b;for(var d=0;d<a.length;d++)b=(b<<5)-b+a.charCodeAt(d),b&=b;return b};c.yc={};o_("CollectionUtils",c.yc,c);c.yc.If=function(a,
b,d,e,g){return c.yc.nU(a,b,d,e,g,0)};o_("CollectionUtils.copyInto",c.yc.If,c);c.yc.isPlainObject=function(a){if("object"===typeof a)try{if(a.constructor&&a.constructor.prototype.hasOwnProperty("isPrototypeOf"))return!0}catch(b){}return!1};o_("CollectionUtils.isPlainObject",c.yc.isPlainObject,c);c.yc.nU=function(a,b,d,e,g,f){var r,s,q;if(a&&b&&a!==b){q=Object.keys(b);for(var t=0;t<q.length;t++){r=q[t];s=d?d(r):r;r=b[r];var x=!1;if(e&&f<g){var w=a[s];c.yc.isPlainObject(w)&&c.yc.isPlainObject(r)&&(x=
!0,c.yc.nU(w,r,d,!0,g,f+1))}x||(a[s]=r)}}return a};c.ha={};o_("Translations",c.ha,c);c.ha.bP=function(a){c.ha.qH=a};o_("Translations.setBundle",c.ha.bP,c);c.ha.n3=function(a){return c.ha.OW(a)};o_("Translations.getResource",c.ha.n3,c);c.ha.Mb=function(a,b){return null==a?null:c.ha.dda(a,b)};o_("Translations.applyParameters",c.ha.Mb,c);c.ha.A=function(a,b){var d=c.ha.OW(a);if(null==d)return a;var e={};2<arguments.length?e=Array.prototype.slice.call(arguments,1):2==arguments.length&&(e=arguments[1],
"object"===typeof e||e instanceof Array||(e=[e]));return c.ha.Mb(d,e)};o_("Translations.getTranslatedString",c.ha.A,c);c.ha.iE=function(a){a=c.ha.PV()[a];var b,d;if(null==a)return{};b={};for(d in a)a.hasOwnProperty(d)&&(b[d]=a[d]);return b};o_("Translations.getComponentTranslations",c.ha.iE,c);c.ha.OW=function(a){a=a?a.split("."):[];var b=c.ha.PV(),d=a.length,e=0,g=a[e];for(c.l.Hf(b);0<--d&&b;)b=b[g],e++,g=a[e];return b?b[g]||null:null};c.ha.dda=function(a,b){var d=a.length,c=[],e=null,g=!1,f=!1,
s=!1,q=!1,t,x;for(x=0;x<d;x++){var w=a.charAt(x),v=!1;if(g)v=!0,g=!1;else switch(w){case "$":g=!0;break;case "{":q||(f||(t=!1,e=[]),f=!0);break;case "}":f&&0<e.length&&(f=b[e.join("")],c.push(void 0===f?"null":f));f=!1;break;case "[":f||(s?q=!0:s=!0);break;case "]":q?q=!1:s=!1;break;default:v=!0}v&&(f?","==w||" "==w?t=!0:t||e.push(w):q||c.push(w))}return c.join("")};c.ha.PV=function(){var a=c.ha.qH;return a?a:c.Ks()?(c.l.assert(void 0!==f,"ojtranslations module must be defined"),f):{}};return c});