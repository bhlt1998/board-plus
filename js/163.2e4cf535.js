"use strict";(self["webpackChunkboard_plus"]=self["webpackChunkboard_plus"]||[]).push([[163],{2689:function(t,e,n){n.d(e,{Z:function(){return c}});var l,o,s=n(4003),r={props:{linkage:{type:Object,default:()=>{}},element:{type:Object,default:()=>{}}},created(){this.linkage?.data?.length&&(s.Z.$on("v-click",this.onClick),s.Z.$on("v-hover",this.onHover))},mounted(){const{data:t,duration:e}=this.linkage||{};t?.length&&(this.$el.style.transition=`all ${e}s`)},beforeDestroy(){this.linkage?.data?.length&&(s.Z.$off("v-click",this.onClick),s.Z.$off("v-hover",this.onHover))},methods:{changeStyle(t=[]){t.forEach((t=>{t.style.forEach((t=>{t.key&&(this.element.style[t.key]=t.value)}))}))},onClick(t){const e=this.linkage.data.filter((e=>e.id===t&&"v-click"===e.event));this.changeStyle(e)},onHover(t){const e=this.linkage.data.filter((e=>e.id===t&&"v-hover"===e.event));this.changeStyle(e)}}},i=r,a=n(1001),h=(0,a.Z)(i,l,o,!1,null,null,null),c=h.exports},4208:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"svg-arrow-container"},[e("svg",{attrs:{version:"1.1",baseProfile:"full",xmlns:"http://www.w3.org/2000/svg"}},[e("polygon",{ref:"arrow",attrs:{points:t.points,stroke:t.element.style.borderColor,fill:t.element.style.backgroundColor,"stroke-width":"1"}})]),e("v-text",{attrs:{"prop-value":t.element.propValue,element:t.element}})],1)},o=[],s=n(2689),r={extends:s.Z,props:{propValue:{type:String,required:!0,default:""},element:{type:Object,default:()=>{}}},data(){return{points:""}},watch:{"element.style.width":function(){this.draw()},"element.style.height":function(){this.draw()}},mounted(){this.draw()},methods:{draw(){const{width:t,height:e}=this.element.style;this.drawPolygon(t,e)},drawPolygon(t,e){const n=[[.5,0],[.7,.3],[.6,.3],[.6,1],[.4,1],[.4,.3],[.3,.3]],l=n.map((n=>t*n[0]+" "+e*n[1]));this.points=l.toString()}}},i=r,a=n(1001),h=(0,a.Z)(i,l,o,!1,null,"a26e80d4",null),c=h.exports}}]);
//# sourceMappingURL=163.2e4cf535.js.map