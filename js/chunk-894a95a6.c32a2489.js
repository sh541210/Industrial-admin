(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-894a95a6"],{"0514":function(e,t,n){},"38f7":function(e,t,n){"use strict";var a=n("8d82"),c=n.n(a);c.a},"66c8":function(e,t,n){"use strict";var a=n("f17d"),c=n.n(a);c.a},"8d82":function(e,t,n){},b1d7:function(e,t,n){"use strict";var a=n("0514"),c=n.n(a);c.a},e29a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tree-select",{staticStyle:{width:"300px"},attrs:{"check-strictly":"","expand-all":!0,"load-data":e.loadData,data:e.treeData},on:{"on-change":e.handleTreeSelectChange,"on-toggle-expand":e.handleTreeSelectExpand,"on-check-change":e.handleTreeSelectCheckChange,"on-select-change":e.handleTreeSelectClick},model:{value:e.treeSelected,callback:function(t){e.treeSelected=t},expression:"treeSelected"}}),n("Button",{on:{click:e.changeTreeSelectData}},[e._v("更新选中数据")]),n("Button",{on:{click:e.changeTreeData}},[e._v("更新树数据")])],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Select",e._b({ref:"select",staticClass:"tree-select",attrs:{multiple:""},on:{"on-change":e.handleChange}},"Select",e.$attrs,!1),[n("tree-select-tree-item",{attrs:{selectedArray:e.value,data:e.data,"load-data":e.loadData},on:{"on-clear":e.handleClear,"on-check":e.handleTreeCheck}})],1)},l=[];function r(e,t,n){this.$children.forEach(a=>{const c=a.$options.name;c===e?a.$emit.apply(a,[t].concat(n)):r.apply(a,[e,t].concat([n]))})}var o={methods:{dispatch(e,t,n){let a=this.$parent||this.$root,c=a.$options.name;while(a&&(!c||c!==e))a=a.$parent,a&&(c=a.$options.name);a&&a.$emit.apply(a,[t].concat(n))},broadcast(e,t,n){r.call(this,e,t,n)}}},h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Tree",e._g(e._b({attrs:{data:e.data,"load-data":e.loadDataCallback,"show-checkbox":""},on:{"on-check-change":e.handleCheckSelect}},"Tree",e.parent.$attrs,!1),e.parent.$listeners))},d=[],s=(n("6762"),n("2fdb"),n("ac6a"),function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}),u={name:"TreeSelectTree",mixins:[o],props:{data:{type:Array,default:function(){return[]}},selectedArray:{type:Array,default:function(){return[]}},loadData:Function},data:function(){return{flatDic:{},checkedArray:[]}},inject:["parent"],computed:{expandAll:function(){return this.parent.$attrs["expand-all"]}},watch:{data:function(e,t){var n=this;this.updateFlagDic(e);var a=[];this.selectedArray.forEach(function(e){e in n.flatDic&&a.push(e)}),this.$emit("on-check",a.map(function(e){return n.flatDic[e]})),this.expandAll&&this.checkData(e,!1,!0)},selectedArray:function(e,t){var n=this;if(!s(e,t)){var a=e.filter(function(e){return e in n.flatDic});this.$emit("on-check",a.map(function(e){return n.flatDic[e]})),this.$emit("on-clear"),this.$nextTick(function(){n.checkData(n.data,!0)})}}},methods:{checkEmit:function(e,t){this.dispatch("iSelect","on-select-selected",{value:e,label:t}),this.$emit("on-select-selected",{value:e,label:t})},updateFlagDic:function(e){var t={};this.setFlagDic(e,function(e){t[e.id]=e}),this.flatDic=t},setFlagDic:function(e,t){var n=this;e.forEach(function(e){e.children&&e.children.length&&n.setFlagDic(e.children,t),t(e)})},handleCheckSelect:function(e,t){this.$emit("on-check",e),this.parent.$emit("on-change",e)},checkData:function(e,t,n){var a=this;e.forEach(function(e){a.selectedArray.includes(e.id)?(a.$set(e,"checked",!0),a.checkedArray.push(e),t&&a.checkEmit(e.id,e.title)):a.$set(e,"checked",!1),e.children&&e.children.length&&(a.expandAll&&n&&a.$set(e,"expand",!0),a.checkData(e.children,t,n))})},loadDataCallback:function(e,t){var n=this;this.loadData(e,function(e){return function(){t(e),n.updateFlagDic(n.data)}()})}},mounted:function(){var e=this;this.checkData(this.data,!1,!0),this.$nextTick(function(){e.$emit("on-check",e.checkedArray)})}},f=u,p=(n("38f7"),n("2877")),m=Object(p["a"])(f,h,d,!1,null,null,null);m.options.__file="tree-select-tree.vue";var k=m.exports,g={name:"TreeSelect",mixins:[o],components:{TreeSelectTreeItem:k},props:{value:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}},loadData:Function},data:function(){return{isChangedByTree:!0,isInit:!0}},provide:function(){return{parent:this}},methods:{handleChange:function(e){this.isChangedByTree||this.$emit("input",e),this.isChangedByTree=!1},handleTreeCheck:function(e){this.isChangedByTree=!0,this.$emit("input",e.map(function(e){return e.id}))},handleClear:function(){this.$refs.select.reset()}}},v=g,D=(n("66c8"),Object(p["a"])(v,i,l,!1,null,null,null));D.options.__file="tree-select.vue";var $=D.exports,T=[{id:"a",title:"a",children:[{id:"a1",title:"a-1",children:[{id:112,title:"1-1-2"},{id:"a12",title:"a-1-2"},{id:"a13",title:"a-1-3"},{id:"a14",title:"a-1-4"}]},{id:"a2",title:"a-2",children:[{id:"a21",title:"b-2-1"}]}]}],y=n("7e1e"),S={name:"tree_select_page",components:{TreeSelect:$},data:function(){return{treeSelected:[112,113],treeData:[]}},mounted:function(){var e=this;Object(y["e"])().then(function(t){var n=t.data;e.treeData=n})},methods:{changeTreeSelectData:function(){this.treeSelected=[111,114]},changeTreeData:function(){this.treeData=T},handleTreeSelectChange:function(e){},handleTreeSelectExpand:function(e){},handleTreeSelectCheckChange:function(e,t){},handleTreeSelectClick:function(e,t){},loadData:function(e,t){setTimeout(function(){var e=[{id:111,title:"1-1-1"},{id:112,title:"1-1-2"},{id:113,title:"1-1-3"},{id:114,title:"1-1-4"}];t(e)},1e3)}}},C=S,x=(n("b1d7"),Object(p["a"])(C,a,c,!1,null,null,null));x.options.__file="index.vue";t["default"]=x.exports},f17d:function(e,t,n){}}]);