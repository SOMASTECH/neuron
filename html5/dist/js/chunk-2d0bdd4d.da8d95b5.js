(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdd4d"],{"2e59":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.active?n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleStart}},[t._v("Start")]):n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleStop}},[t._v("Stop")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleRestartNew}},[t._v("New")])],1)},s=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),c=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={computed:i({},Object(c["d"])({status:function(t){return t.Status.status}}),{active:function(){var t=this.status.mode||"";return-1!==t.indexOf("STANDBY")}}),methods:{handleStart:function(){this.$ws().set().send({func:71,stat:"active"})},handleStop:function(){this.$ws().set().send({func:71,stat:"standby"})},handleRestartNew:function(){this.$ws().set().send({func:70,acts:"restartnew"})}}},l=u,p=n("2877"),d=Object(p["a"])(l,r,s,!1,null,"d249db02",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0bdd4d.da8d95b5.js.map