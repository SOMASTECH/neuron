(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78e7155d"],{"1b62":function(t,e,i){"use strict";e["a"]={computed:{tableHeight:function(){return window.innerHeight-60-50-40-50-20}}}},a967:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.eventList,border:"",height:t.showBtn?t.tableHeight:null},on:{"selection-change":t.handleSelectionChange}},[t.showBtn?i("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),i("el-table-column",{attrs:{"min-width":t.minWidth,prop:"sobj",label:"Object1"}}),i("el-table-column",{attrs:{prop:"satt",label:"Attribute1","min-width":t.minWidth}}),i("el-table-column",{attrs:{prop:"msgt","min-width":t.minWidth,label:"Type"}}),i("el-table-column",{attrs:{prop:"cobj","min-width":t.minWidth,label:"Object2"}}),i("el-table-column",{attrs:{prop:"catt","min-width":t.minWidth,label:"Attribute2"}}),i("el-table-column",{attrs:{prop:"acat","min-width":t.minWidth,label:"Category"}}),i("el-table-column",{attrs:{prop:"subr","min-width":t.minWidth,label:"Subroutine"}})],1)},l=[],a=i("1b62"),o={mixins:[a["a"]],props:{value:{type:Array},showBtn:{type:Boolean,default:!1},eventList:{type:Array,required:!0}},data:function(){return{minWidth:"120",multipleSelection:[]}},methods:{handleSelectionChange:function(t){this.multipleSelection=t,this.$emit("input",this.multipleSelection)}},watch:{value:function(t){this.multipleSelection=t}},computed:{tableHeight:function(){return window.innerHeight-60-50-40-50}}},r=o,c=i("2877"),u=Object(c["a"])(r,n,l,!1,null,"35cbbb5c",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-78e7155d.90b64ae8.js.map