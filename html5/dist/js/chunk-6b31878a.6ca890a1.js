(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b31878a"],{"1b62":function(t,e,n){"use strict";e["a"]={computed:{tableHeight:function(){return window.innerHeight-60-50-40-50-20}}}},"278b":function(t,e,n){},"47f8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.attributeList,border:"",height:t.showBtn?t.tableHeight:null},on:{"selection-change":t.handleSelectionChange}},[t.showBtn?n("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),n("el-table-column",{attrs:{prop:"attn","min-width":t.minWidth,label:"Name"}}),n("el-table-column",{attrs:{prop:"attt","min-width":t.minWidth,label:"Type"}}),n("el-table-column",{attrs:{prop:"deci","min-width":t.minWidth,label:"Decimal"}}),n("el-table-column",{attrs:{label:"Key: Address","min-width":"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",t._l(e.row.aadd,(function(e){return n("div",{key:t.getFullName(e.pref,e.suff),staticClass:"addrs"},[t._v("\n          "+t._s(t.getFullName(e.pref,e.suff))+":\n           \n          "+t._s(e.addr)+"\n        ")])})),0)]}}])}),n("el-table-column",{attrs:{prop:"adis","min-width":t.minWidth,label:"Visible"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.adis?"YES":"NO")+"\n    ")]}}])}),n("el-table-column",{attrs:{prop:"achg","min-width":t.minWidth,label:"Change"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.achg?"YES":"NO")+"\n    ")]}}])}),n("el-table-column",{attrs:{prop:"attr","min-width":t.minWidth,label:"RW"}}),n("el-table-column",{attrs:{prop:"rtim","min-width":t.minWidth,label:"Rtime"}}),t.showBtn?n("el-table-column",{attrs:{label:"Address","min-width":t.minWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.addAddress(e.row)}}},[t._v("Address")])]}}],null,!1,667500208)}):t._e()],1)},l=[],a=n("1b62"),r={mixins:[a["a"]],props:{value:{type:Array},showBtn:{type:Boolean,default:!1},attributeList:{type:Array,required:!0},objectName:{type:String,required:!0}},data:function(){return{minWidth:"40",multipleSelection:[]}},methods:{addAddress:function(t){this.$emit("add",t)},handleSelectionChange:function(t){this.multipleSelection=t,this.$emit("input",this.multipleSelection)},getFullName:function(t,e){return t=t?t+"_":"",e=e?"_"+e:"",t+this.objectName+e}},watch:{value:function(t){this.multipleSelection=t}},computed:{tableHeight:function(){return window.innerHeight-60-50-40-50}}},o=r,u=(n("f61d"),n("2877")),d=Object(u["a"])(o,i,l,!1,null,"0e82261c",null);e["default"]=d.exports},f61d:function(t,e,n){"use strict";var i=n("278b"),l=n.n(i);l.a}}]);
//# sourceMappingURL=chunk-6b31878a.6ca890a1.js.map