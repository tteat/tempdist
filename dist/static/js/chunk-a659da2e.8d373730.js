(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a659da2e"],{"167e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[n("el-row",{staticStyle:{margin:"30px"},attrs:{gutter:20}},t._l(t.value.slice(0,3),(function(e,i){return n("el-col",{key:e.title,staticStyle:{"margin-bottom":"30px"},attrs:{span:7}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[n("p",{staticStyle:{display:"inline","font-size":"18px"}},[n("strong",[t._v(t._s(t.value[i].title))])])])]),t._v(" "),n("p",{staticStyle:{"font-size":"12px"}},[t._v("此处配置项用于操作"+t._s(e.title))]),t._v(" "),n("el-button",{staticStyle:{float:"right",margin:"20px"},attrs:{type:"primary"},nativeOn:{click:function(e){return t.clickA(i)}}},[t._v("编辑配置")])],1)],1)})),1),t._v(" "),n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{visible:t.dialogTableVisible,title:t.json.kind},on:{"update:visible":function(e){t.dialogTableVisible=e},dragDialog:t.handleDrag}},[n("el-select",{ref:"select",staticStyle:{"margin-top":"0px","margin-bottom":"20px"},attrs:{placeholder:"请选择调度策略"},on:{change:t.refreshData},model:{value:t.modelType,callback:function(e){t.modelType=e},expression:"modelType"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),n("el-button",{staticStyle:{float:"right","margin-top":"0px",height:"5%",display:"inline","margin-right":"20px","margin-bottom":"20px"},attrs:{type:"primary"},nativeOn:{click:function(e){return t.clickB(e)}}},[t._v("确认配置")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"670px"},attrs:{border:"",fit:"","highlight-current-row":"",data:t.taskList}},[n("el-table-column",{attrs:{label:"任务名",prop:"id",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"类型",width:"120px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.type))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"主机节点",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.ip))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"优先级",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.priority))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"顺序",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.order))])]}}])})],1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"card-editor-container"},[n("EditableJson",{model:{value:t.json,callback:function(e){t.json=e},expression:"json"}})],1)],1)],1)},o=[],r=(n("a481"),n("7f7f"),n("a888")),l=n("e98d"),a=n("6821b"),u=n("6f82"),s=[[{name:"busybox1",type:"pod",ip:"null",priority:"null",order:1},{name:"busybox2",type:"pod",ip:"null",priority:"null",order:2},{name:"busybox3",type:"pod",ip:"null",priority:"null",order:3}],[{name:"busybox1",type:"pod",ip:"null",priority:"null",order:1},{name:"busybox2",type:"pod",ip:"null",priority:"null",order:3},{name:"busybox3",type:"pod",ip:"null",priority:"null",order:2}],[{name:"busybox1",type:"pod",ip:"null",priority:"null",order:3},{name:"busybox2",type:"pod",ip:"null",priority:"null",order:2},{name:"busybox3",type:"pod",ip:"null",priority:"null",order:1}]],c=[[{name:"busybox1",type:"pod",ip:"null",priority:"1",order:1},{name:"busybox2",type:"pod",ip:"null",priority:"2",order:2},{name:"busybox3",type:"pod",ip:"null",priority:"3",order:3}],[{name:"busybox1",type:"pod",ip:"null",priority:"1",order:1},{name:"busybox2",type:"pod",ip:"null",priority:"2",order:3},{name:"busybox3",type:"pod",ip:"null",priority:"3",order:2}],[{name:"busybox1",type:"pod",ip:"null",priority:"1",order:3},{name:"busybox2",type:"pod",ip:"null",priority:"2",order:2},{name:"busybox3",type:"pod",ip:"null",priority:"3",order:1}]],d={name:"Template",directives:{elDragDialog:r["a"]},components:{EditableJson:l["a"]},data:function(){return{schedulingType:"未选择",group:"mission",list1:[],list2:[],list3:[],dialogTableVisible:!1,options:[{value:"default",label:"默认"},{value:"priority",label:"优先级"},{value:"affinity",label:"亲和性"},{value:"anti-affinity",label:"反亲和性"}],modelType:"",value:[],viewerName:"containers",json:[],kind:"",index:0,taskList:[{name:"busybox1",type:"pod",ip:"192.168.81.164",priority:2}]}},mounted:function(){var t=this;this.$store.dispatch("taskData/getAllTaskData").then((function(e,n){console.log("resolve:",e),t.list1=e["data"]})).catch((function(t,e){console.log("reject:",e)}))},created:function(){var t=this;this.ip=Object(a["e"])(this.viewerName,this.name),Object(u["e"])().then((function(e){t.value=e.data})),this.taskList=[{name:"busybox1",type:"pod",ip:"null",priority:"null",order:1},{name:"busybox2",type:"pod",ip:"null",priority:"null",order:2},{name:"busybox3",type:"pod",ip:"null",priority:"null",order:3}]},methods:{refreshData:function(t){console.log(t),"priority"==t?(this.json=this.value[this.index+3],this.taskList=c[this.index]):"default"==t&&(this.json=this.value[this.index],this.taskList=s[this.index])},clickA:function(t){this.dialogTableVisible=!0,this.json=this.value[t],this.kind=this.value[t].title,this.modelType="default",this.index=t,this.taskList=s[this.index]},clickB:function(){this.dialogTableVisible=!1,this.schedulingType=this.modelType;var t=this.toRawJson(this.json);Object(a["n"])({viewerName:"templates",json:t,kind:this.kind}).then((function(t){console.log(t.code)}))},handleDrag:function(){this.$refs.select.blur()},toRawJson:function(t){var e=JSON.stringify(t);return e=e.replace(/ +/g,""),e=e.replace(/\\n/g,""),e=e.substring(1,e.length-1),e=e.replace(/\\/g,""),e}}},p=d,b=(n("2819"),n("2877")),f=Object(b["a"])(p,i,o,!1,null,null,null);e["default"]=f.exports},"26fe":function(t,e,n){},2819:function(t,e,n){"use strict";var i=n("26fe"),o=n.n(i);o.a},"6821b":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"h",(function(){return l})),n.d(e,"g",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"j",(function(){return c})),n.d(e,"m",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"n",(function(){return b})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return y})),n.d(e,"i",(function(){return m})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return h}));var i=n("b775"),o=n("69d3");function r(t,e){return console.log(e),"192.168.81.164"}function l(t,e){var n=Object(i["a"])({url:Object(o["h"])(),method:"get",params:{viewerName:t,ip:e}});return n}function a(t){return Object(i["a"])({url:Object(o["e"])(t.viewerName),method:"post",data:t})}function u(t,e){var n=Object(i["a"])({url:Object(o["f"])(),method:"get",params:{viewerName:t,objectName:e}});return n}function s(t){var e=Object(i["a"])({url:"/list/getActions",method:"get",params:t});return e}function c(t){var e=Object(i["a"])({url:"/list/getPodActions",method:"get",params:t});return e}function d(t){var e=Object(i["a"])({url:"/list/getVMActions",method:"get",params:t});return e}function p(t){var e=Object(i["a"])({url:Object(o["d"])(),method:"get",params:t});return e}function b(t){var e=Object(i["a"])({url:Object(o["a"])(),method:"post",data:t});return e}function f(t){var e=Object(i["a"])({url:Object(o["b"])(),method:"post",data:t});return e}function y(t){var e=Object(i["a"])({url:"/list/getFilterForm",method:"get",params:t});return e}function m(t){var e=Object(i["a"])({url:"/list/getLittleDataSource",method:"get",params:t});return e}function g(t){var e=Object(i["a"])({url:"/list/getRules",method:"get",params:t});return e}function h(t){var e=Object(i["a"])({url:"/list/getTemp",method:"get",params:t});return e}},a888:function(t,e,n){"use strict";n("a481"),n("6762"),n("2fdb");var i={bind:function(t,e,n){var i=t.querySelector(".el-dialog__header"),o=t.querySelector(".el-dialog");i.style.cssText+=";cursor:move;",o.style.cssText+=";top:0px;";var r=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();i.onmousedown=function(t){var e=t.clientX-i.offsetLeft,l=t.clientY-i.offsetTop,a=o.offsetWidth,u=o.offsetHeight,s=document.body.clientWidth,c=document.body.clientHeight,d=o.offsetLeft,p=s-o.offsetLeft-a,b=o.offsetTop,f=c-o.offsetTop-u,y=r(o,"left"),m=r(o,"top");y.includes("%")?(y=+document.body.clientWidth*(+y.replace(/\%/g,"")/100),m=+document.body.clientHeight*(+m.replace(/\%/g,"")/100)):(y=+y.replace(/\px/g,""),m=+m.replace(/\px/g,"")),document.onmousemove=function(t){var i=t.clientX-e,r=t.clientY-l;-i>d?i=-d:i>p&&(i=p),-r>b?r=-b:r>f&&(r=f),o.style.cssText+=";left:".concat(i+y,"px;top:").concat(r+m,"px;"),n.child.$emit("dragDialog")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},o=function(t){t.directive("el-drag-dialog",i)};window.Vue&&(window["el-drag-dialog"]=i,Vue.use(o)),i.install=o;e["a"]=i}}]);