(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7af65f0"],{"0259":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{"margin-bottom":"32px"},attrs:{span:13}},[a("el-card",[a("div",{staticClass:"card-editor-container"},[a("json-editor",{ref:"jsonEditor",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])],1),t._v(" "),a("el-col",{staticStyle:{"margin-bottom":"32px"},attrs:{span:11}},[a("el-card",[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("iframe",{staticClass:"rate_iframe",attrs:{src:t.monitor_rs.cpu}})])],1)],1),t._v(" "),a("el-card",[a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("iframe",{staticClass:"rate_iframe",attrs:{src:t.monitor_rs.memory}})])],1)],1),t._v(" "),a("el-card",[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("iframe",{staticClass:"rate_iframe",attrs:{src:t.monitor_rs.fs}})])],1)],1),t._v(" "),a("el-card",[a("el-row",[a("el-col",{attrs:{span:24}},[a("iframe",{staticClass:"IO_iframe",attrs:{src:t.monitor_rs.network}})])],1)],1)],1)],1),t._v(" "),a("el-row",[a("el-card",[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},t._l(t.columns,(function(e){return a("el-table-column",{key:e.key,attrs:{label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(s){return["a"==e.kind?a("router-link",{staticClass:"link",attrs:{to:{path:"/profile/taskProfile"},tag:"a"}},[t._v("\n          "+t._s(t.getInputValue(s.row,e.row))+"\n        ")]):t._e(),t._v(" "),void 0==e.kind?a("span",[t._v(t._s(t.getInputValue(s.row,e.row)))]):t._e()]}}],null,!0)})})),1)],1)])],1)],1)},i=[],n=(a("ac6a"),a("28a5"),a("7f7f"),a("db72")),r=a("2f62"),l=a("7faf"),c=a("7115"),o=a("fb8d"),u=a("e206"),m=a("6f82"),d=a("fa7e"),f=a("6821b"),p={name:"taskProfile",components:{UserCard:l["a"],Activity:c["a"],Timeline:o["a"],Account:u["a"],JsonEditor:d["a"]},data:function(){return{tableKey:0,list:null,user:{},activeTab:"activity",key:"",monitor_rs:{},node:"",objectName:"link",viewerName:"nodes",nodeName:"",podList:"",listQuery:"",listLoading:"",columns:"",ip:"",value:""}},computed:Object(n["a"])({},Object(r["b"])(["name","avatar","roles"])),created:function(){var t=this;this.getUser(),this.key=this.$route.query.taskid,this.nodeName=this.$route.query.node,this.ip=Object(f["e"])("pods",this.name),Object(m["d"])({viewerName:"monitor",node:this.nodeName,objectName:this.objectName}).then((function(e){t.monitor_rs=e})),Object(f["c"])(this.viewerName,"columns").then((function(e){t.columns=e.data,Object(f["h"])(t.viewerName,t.ip).then((function(e){t.listQuery=e,t.listLoading=!0,Object(f["g"])({pageNum:1,pageSize:10,ip:t.ip,viewerName:t.viewerName}).then((function(e){var a=e.data;t.total=e.total,t.listLoading=!1;for(var s=0;s<a.length;s++)a[s].metadata.name==t.nodeName&&(t.value=a[s]);t.list=a,console.log(a)}))}))}))},mounted:function(){},methods:{getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar}},getList:function(){this.listLoading=!0},handleFilter:function(){this.listQuery.pageNum=1,this.getList()},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.handleFilter()},getInputValue:function(t,e){if("{}"==JSON.stringify(t))return"";if(""==e||void 0==e||null==e||!e)return"";if(e.indexOf(".")<0)return t[e];var a=e.split("."),s=t;return a.forEach((function(t){t.indexOf("[")>0?(s=s[t.substring(0,t.indexOf("["))],s=s[parseInt(t.substring(t.indexOf("[")+1,t.indexOf("]")))]):s=s[t]})),s},updateInputValue:function(t,e,a){if(e.indexOf(".")<0)t[e]=a;else{for(var s=e.split("."),i=t,n=0;n<s.length-1;n++){var r=s[n];r.indexOf("[")>0?(i=i[r.substring(0,r.indexOf("["))],i=i[parseInt(r.substring(r.indexOf("[")+1,r.indexOf("]")))]):i=i[r]}i[s[s.length-1]]=a}}}},v=p,h=(a("21b6"),a("2877")),b=Object(h["a"])(v,s,i,!1,null,"2b921b9e",null);e["default"]=b.exports},"21b6":function(t,e,a){"use strict";var s=a("d6f3"),i=a.n(s);i.a},"2f9c":function(t,e,a){},"6821b":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"h",(function(){return r})),a.d(e,"g",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return o})),a.d(e,"j",(function(){return u})),a.d(e,"m",(function(){return m})),a.d(e,"f",(function(){return d})),a.d(e,"n",(function(){return f})),a.d(e,"a",(function(){return p})),a.d(e,"d",(function(){return v})),a.d(e,"i",(function(){return h})),a.d(e,"k",(function(){return b})),a.d(e,"l",(function(){return g}));var s=a("b775"),i=a("69d3");function n(t,e){return console.log(e),"192.168.81.164"}function r(t,e){var a=Object(s["a"])({url:Object(i["h"])(),method:"get",params:{viewerName:t,ip:e}});return a}function l(t){return Object(s["a"])({url:Object(i["e"])(t.viewerName),method:"post",data:t})}function c(t,e){var a=Object(s["a"])({url:Object(i["f"])(),method:"get",params:{viewerName:t,objectName:e}});return a}function o(t){var e=Object(s["a"])({url:"/list/getActions",method:"get",params:t});return e}function u(t){var e=Object(s["a"])({url:"/list/getPodActions",method:"get",params:t});return e}function m(t){var e=Object(s["a"])({url:"/list/getVMActions",method:"get",params:t});return e}function d(t){var e=Object(s["a"])({url:Object(i["d"])(),method:"get",params:t});return e}function f(t){var e=Object(s["a"])({url:Object(i["a"])(),method:"post",data:t});return e}function p(t){var e=Object(s["a"])({url:Object(i["b"])(),method:"post",data:t});return e}function v(t){var e=Object(s["a"])({url:"/list/getFilterForm",method:"get",params:t});return e}function h(t){var e=Object(s["a"])({url:"/list/getLittleDataSource",method:"get",params:t});return e}function b(t){var e=Object(s["a"])({url:"/list/getRules",method:"get",params:t});return e}function g(t){var e=Object(s["a"])({url:"/list/getTemp",method:"get",params:t});return e}},"6e50":function(t,e,a){"use strict";var s=a("df1c"),i=a.n(s);i.a},7115:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-activity"},[a("div",{staticClass:"post"},[a("div",{staticClass:"user-block"},[a("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg"+t.avatarPrefix}}),t._v(" "),a("span",{staticClass:"username text-muted"},[t._v("Iron Man")]),t._v(" "),a("span",{staticClass:"description"},[t._v("Shared publicly - 7:30 PM today")])]),t._v(" "),a("p",[t._v("\n      Lorem ipsum represents a long-held tradition for designers,\n      typographers and the like. Some people hate it and argue for\n      its demise, but others ignore the hate as they create awesome\n      tools to help create filler text for everyone from bacon lovers\n      to Charlie Sheen fans.\n    ")]),t._v(" "),a("ul",{staticClass:"list-inline"},[t._m(0),t._v(" "),a("li",[a("span",{staticClass:"link-black text-sm"},[a("svg-icon",{attrs:{"icon-class":"like"}}),t._v("\n          Like\n        ")],1)])])]),t._v(" "),a("div",{staticClass:"post"},[a("div",{staticClass:"user-block"},[a("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg"+t.avatarPrefix}}),t._v(" "),a("span",{staticClass:"username text-muted"},[t._v("Captain American")]),t._v(" "),a("span",{staticClass:"description"},[t._v("Sent you a message - yesterday")])]),t._v(" "),a("p",[t._v("\n      Lorem ipsum represents a long-held tradition for designers,\n      typographers and the like. Some people hate it and argue for\n      its demise, but others ignore the hate as they create awesome\n      tools to help create filler text for everyone from bacon lovers\n      to Charlie Sheen fans.\n    ")]),t._v(" "),a("ul",{staticClass:"list-inline"},[t._m(1),t._v(" "),a("li",[a("span",{staticClass:"link-black text-sm"},[a("svg-icon",{attrs:{"icon-class":"like"}}),t._v("\n          Like\n        ")],1)])])]),t._v(" "),a("div",{staticClass:"post"},[a("div",{staticClass:"user-block"},[a("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg"+t.avatarPrefix}}),t._v(" "),a("span",{staticClass:"username"},[t._v("Spider Man")]),t._v(" "),a("span",{staticClass:"description"},[t._v("Posted 4 photos - 2 days ago")])]),t._v(" "),a("div",{staticClass:"user-images"},[a("el-carousel",{attrs:{interval:6e3,type:"card",height:"220px"}},t._l(t.carouselImages,(function(e){return a("el-carousel-item",{key:e},[a("img",{staticClass:"image",attrs:{src:e+t.carouselPrefix}})])})),1)],1),t._v(" "),a("ul",{staticClass:"list-inline"},[t._m(2),t._v(" "),a("li",[a("span",{staticClass:"link-black text-sm"},[a("svg-icon",{attrs:{"icon-class":"like"}}),t._v(" Like")],1)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"link-black text-sm"},[a("i",{staticClass:"el-icon-share"}),t._v("\n          Share\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"link-black text-sm"},[a("i",{staticClass:"el-icon-share"}),t._v("\n          Share\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"link-black text-sm"},[a("i",{staticClass:"el-icon-share"}),t._v(" Share")])])}],n="?imageView2/1/w/80/h/80",r="?imageView2/2/h/440",l={data:function(){return{carouselImages:["https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg","https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg","https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg","https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg"],avatarPrefix:n,carouselPrefix:r}}},c=l,o=(a("6e50"),a("2877")),u=Object(o["a"])(c,s,i,!1,null,"1066d76c",null);e["a"]=u.exports},"7faf":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("About me")])]),t._v(" "),a("div",{staticClass:"user-profile"},[a("div",{staticClass:"box-center"},[a("pan-thumb",{attrs:{image:t.user.avatar,height:"100px",width:"100px",hoverable:!1}},[a("div",[t._v("Hello")]),t._v("\n        "+t._s(t.user.role)+"\n      ")])],1),t._v(" "),a("div",{staticClass:"box-center"},[a("div",{staticClass:"user-name text-center"},[t._v(t._s(t.user.name))]),t._v(" "),a("div",{staticClass:"user-role text-center text-muted"},[t._v(t._s(t._f("uppercaseFirst")(t.user.role)))])])]),t._v(" "),a("div",{staticClass:"user-bio"},[a("div",{staticClass:"user-education user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"education"}}),a("span",[t._v("Education")])],1),t._v(" "),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"text-muted"},[t._v("\n          JS in Computer Science from the University of Technology\n        ")])])]),t._v(" "),a("div",{staticClass:"user-skills user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"skill"}}),a("span",[t._v("Skills")])],1),t._v(" "),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"progress-item"},[a("span",[t._v("Vue")]),t._v(" "),a("el-progress",{attrs:{percentage:70}})],1),t._v(" "),a("div",{staticClass:"progress-item"},[a("span",[t._v("JavaScript")]),t._v(" "),a("el-progress",{attrs:{percentage:18}})],1),t._v(" "),a("div",{staticClass:"progress-item"},[a("span",[t._v("Css")]),t._v(" "),a("el-progress",{attrs:{percentage:12}})],1),t._v(" "),a("div",{staticClass:"progress-item"},[a("span",[t._v("ESLint")]),t._v(" "),a("el-progress",{attrs:{percentage:100,status:"success"}})],1)])])])])},i=[],n=a("3cbc"),r={components:{PanThumb:n["a"]},props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",roles:""}}}}},l=r,c=(a("bb707"),a("2877")),o=Object(c["a"])(l,s,i,!1,null,"72e10cd6",null);e["a"]=o.exports},bb707:function(t,e,a){"use strict";var s=a("2f9c"),i=a.n(s);i.a},d6f3:function(t,e,a){},df1c:function(t,e,a){},e206:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",[a("el-form-item",{attrs:{label:"Name"}},[a("el-input",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name","string"===typeof e?e.trim():e)},expression:"user.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Email"}},[a("el-input",{model:{value:t.user.email,callback:function(e){t.$set(t.user,"email","string"===typeof e?e.trim():e)},expression:"user.email"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Update")])],1)],1)},i=[],n={props:{user:{type:Object,default:function(){return{name:"",email:""}}}},methods:{submit:function(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},fb8d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("el-timeline",t._l(t.timeline,(function(e,s){return a("el-timeline-item",{key:s,attrs:{timestamp:e.timestamp,placement:"top"}},[a("el-card",[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.content))])])],1)})),1)],1)},i=[],n={data:function(){return{timeline:[{timestamp:"2019/4/20",title:"Update Github template",content:"PanJiaChen committed 2019/4/20 20:46"},{timestamp:"2019/4/21",title:"Update Github template",content:"PanJiaChen committed 2019/4/21 20:46"},{timestamp:"2019/4/22",title:"Build Template",content:"PanJiaChen committed 2019/4/22 20:46"},{timestamp:"2019/4/23",title:"Release New Version",content:"PanJiaChen committed 2019/4/23 20:46"}]}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports}}]);