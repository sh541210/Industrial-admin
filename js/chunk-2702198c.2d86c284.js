(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2702198c"],{"095a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",[r("h3",{staticStyle:{padding:"10px 0"}},[e._v("drag-drawer组件是对iview的drawer组件的封装，在支持drawer所有api的基础上，支持可拖动和footer底部插槽")]),r("div",{staticStyle:{padding:"10px 0"}},[r("b",[e._v("\n      方向\n      "),r("i-switch",{model:{value:e.placement,callback:function(t){e.placement=t},expression:"placement"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("左")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("右")])])],1),r("b",[e._v("\n      是否可拖动\n      "),r("i-switch",{model:{value:e.draggable,callback:function(t){e.draggable=t},expression:"draggable"}})],1),r("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){e.showContainerBDrawer=!e.showContainerBDrawer}}},[e._v(e._s(e.showContainerBDrawer?"关闭":"打开")+"容器内抽屉")]),r("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){e.showWindowBDrawer=!0}}},[e._v("打开全屏抽屉")])],1),r("div",{staticClass:"drag-drawer-inner-box"},[r("drag-drawer",{attrs:{width:e.width2,"min-width":"30px",inner:!0,transfer:!1,placement:e.placementComputed,draggable:e.draggable,scrollable:!0},on:{"update:width":function(t){e.width2=t},"on-resize":e.handleResize},model:{value:e.showContainerBDrawer,callback:function(t){e.showContainerBDrawer=t},expression:"showContainerBDrawer"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("Icon",{attrs:{type:"md-aperture",size:18}}),r("b",[e._v("这是标题")])],1),e._l(200,function(t){return r("p",{key:t},[e._v(e._s(t))])}),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("p",[e._v("123123")]),r("p",[e._v("21312")])])],2)],1),r("drag-drawer",{attrs:{width:e.width1,"min-width":300,placement:e.placementComputed,draggable:e.draggable,scrollable:!0},on:{"update:width":function(t){e.width1=t}},model:{value:e.showWindowBDrawer,callback:function(t){e.showWindowBDrawer=t},expression:"showWindowBDrawer"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("Icon",{attrs:{type:"md-aperture",size:18}}),r("b",[e._v("这是标题")])],1),r("Button",{on:{click:function(t){e.showBDrawer3=!0}}},[e._v("显示多层")]),e._l(200,function(t){return r("p",{key:t},[e._v(e._s(t))])})],2)],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Drawer",e._g(e._b({ref:"drawerWrapper",attrs:{value:e.value,width:e.width,"class-name":e.outerClasses},on:{input:e.handleInput}},"Drawer",e.$attrs,!1),e.$listeners),[e._l(e.$slots,function(t,n){return["default"!==n?e._l(t,function(e,t){return r("render-dom",{key:"b_drawer_"+n+"_"+t,attrs:{slot:n,render:function(){return e}},slot:n})}):[r("div",{key:"b_drawer_"+n,class:e.prefix+"-body-wrapper"},e._l(t,function(e,t){return r("render-dom",{key:"b_drawer_"+n+"_"+t,attrs:{slot:n,render:function(){return e}},slot:n})}))]]}),e.draggable?r("div",{class:e.prefix+"-trigger-wrapper",style:e.triggerStyle,on:{mousedown:e.handleTriggerMousedown}},[e._t("trigger",[r("drag-drawer-trigger")])],2):e._e(),e.$slots.footer?r("div",{class:e.prefix+"-footer"},[e._t("footer")],2):e._e()],2)},o=[],s=r("ade3"),d=(r("c5f6"),{name:"RenderDom",functional:!0,props:{render:Function},render:function(e,t){return t.props.render(e)}}),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.prefix+"-move-trigger"},[r("div",{class:e.prefix+"-move-trigger-point"},[r("i"),r("i"),r("i"),r("i"),r("i")])])},c=[],u=(r("cadf"),r("551c"),r("097d"),{data:function(){return{prefix:"drag-drawer"}}}),p={name:"DragDrawerTrigger",mixins:[u]},h=p,w=(r("1b4c"),r("2877")),f=Object(w["a"])(h,l,c,!1,null,null,null);f.options.__file="drag-drawer-trigger.vue";var m=f.exports,g=r("90de"),v=(r("1337"),{name:"BDrawer",components:{RenderDom:d,DragDrawerTrigger:m},mixins:[u],props:{value:{type:Boolean,default:!1},width:{type:[String,Number],default:256},draggable:{type:Boolean,default:!1},minWidth:{type:[String,Number],default:256}},data:function(){return{canMove:!1,wrapperWidth:0,wrapperLeft:0}},computed:{outerClasses:function(){var e=["".concat(this.prefix,"-wrapper"),this.canMove?"no-select pointer-events-none":""];return e.join(" ")},placement:function(){return this.$attrs.placement},innerWidth:function(){var e=this.width;return e<=100?this.wrapperWidth*e/100:e},triggerStyle:function(){var e;return e={},Object(s["a"])(e,this.placement,"".concat(this.innerWidth,"px")),Object(s["a"])(e,"position",this.$attrs.inner?"absolute":"fixed"),e}},methods:{handleInput:function(e){this.$emit("input",e)},handleTriggerMousedown:function(e){this.canMove=!0,this.$emit("on-resize-start"),window.getSelection().removeAllRanges()},handleMousemove:function(e){if(this.canMove){this.setWrapperWidth();var t=e.pageX-this.wrapperLeft,r="right"===this.placement?this.wrapperWidth-t:t;r=Math.max(r,parseFloat(this.minWidth)),e.atMin=r===parseFloat(this.minWidth),r<=100&&(r=r/this.wrapperWidth*100),this.$emit("update:width",parseInt(r)),this.$emit("on-resize",e)}},handleMouseup:function(e){this.canMove=!1,this.$emit("on-resize-end")},setWrapperWidth:function(){var e=this.$refs.drawerWrapper.$el.getBoundingClientRect(),t=e.width,r=e.left;this.wrapperWidth=t,this.wrapperLeft=r}},mounted:function(){Object(g["f"])(document,"mousemove",this.handleMousemove),Object(g["f"])(document,"mouseup",this.handleMouseup),this.setWrapperWidth()},beforeDestroy:function(){Object(g["e"])(document,"mousemove",this.handleMousemove),Object(g["e"])(document,"mouseup",this.handleMouseup)}}),_=v,b=Object(w["a"])(_,i,o,!1,null,null,null);b.options.__file="drag-drawer.vue";var x=b.exports,D=x,y={name:"drag_drawer_page",components:{DragDrawer:D},data:function(){return{showWindowBDrawer:!1,showContainerBDrawer:!1,showBDrawer3:!1,width1:300,width2:200,placement:!1,draggable:!0}},computed:{placementComputed:function(){return this.placement?"left":"right"}},methods:{handleResize:function(e){var t=e.atMin;console.log(t)}}},W=y,B=(r("ba41"),Object(w["a"])(W,n,a,!1,null,null,null));B.options.__file="index.vue";t["default"]=B.exports},1337:function(e,t,r){},"1b4c":function(e,t,r){"use strict";var n=r("efba"),a=r.n(n);a.a},"7a09":function(e,t,r){},ba41:function(e,t,r){"use strict";var n=r("7a09"),a=r.n(n);a.a},efba:function(e,t,r){}}]);