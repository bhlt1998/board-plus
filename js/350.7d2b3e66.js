"use strict";(self["webpackChunkboard_plus"]=self["webpackChunkboard_plus"]||[]).push([[350],{5350:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"rect-shape"},[t("v-text",{attrs:{"prop-value":e.element.propValue,element:e.element}})],1)},a=[],i=l(2689),s={extends:i.Z,props:{propValue:{type:String,required:!0,default:""},element:{type:Object,default:()=>{}}}},o=s,r=l(1001),c=(0,r.Z)(o,n,a,!1,null,"08b08abf",null),u=c.exports},2689:function(e,t,l){l.d(t,{Z:function(){return u}});var n,a,i=l(4003),s={props:{linkage:{type:Object,default:()=>{}},element:{type:Object,default:()=>{}}},created(){this.linkage?.data?.length&&(i.Z.$on("v-click",this.onClick),i.Z.$on("v-hover",this.onHover))},mounted(){const{data:e,duration:t}=this.linkage||{};e?.length&&(this.$el.style.transition=`all ${t}s`)},beforeDestroy(){this.linkage?.data?.length&&(i.Z.$off("v-click",this.onClick),i.Z.$off("v-hover",this.onHover))},methods:{changeStyle(e=[]){e.forEach((e=>{e.style.forEach((e=>{e.key&&(this.element.style[e.key]=e.value)}))}))},onClick(e){const t=this.linkage.data.filter((t=>t.id===e&&"v-click"===t.event));this.changeStyle(t)},onHover(e){const t=this.linkage.data.filter((t=>t.id===e&&"v-hover"===t.event));this.changeStyle(t)}}},o=s,r=l(1001),c=(0,r.Z)(o,n,a,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=350.7d2b3e66.js.map