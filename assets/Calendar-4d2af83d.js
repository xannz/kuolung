import{V as u}from"./VParallax-8fa9872b.js";import{U as p,r as l,o as c,c as m,a as e,w as t,b as f,d as h,a7 as g,X as r,Y as _,V,F as w,f as s,a8 as v}from"./index-7d36fd3d.js";const x=s("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[s("h1",{class:"text-h4 font-weight-thick mb-4"}," Trainingsuren ")],-1),b=p({__name:"Calendar",setup(C){l(["Adults","Youth","Competition","Event"]),l(["blue","indigo","deep-purple","orange"]);let a=l([new Date]),i=l([{title:"Fighting Groep 1 (17:30-19:00)",start:new Date("2024-01-03 17:30"),end:new Date("2024-01-03 19:00"),color:"deep-purple"},{title:"Fighting Groep 2 (19:00-20:30)",start:new Date("2024-01-03 9:30"),end:new Date("2024-01-03 10:30"),color:"deep-purple"}]);return(D,n)=>{const d=v("v-calendar");return c(),m(w,null,[e(u,{height:"300",src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"},{default:t(()=>[x]),_:1}),e(V,null,{default:t(()=>[e(f,{class:"fill-height"},{default:t(()=>[e(h,null,{default:t(()=>[e(g,{height:"400"},{default:t(()=>[e(d,{ref:"calendar",modelValue:r(a),"onUpdate:modelValue":n[0]||(n[0]=o=>_(a)?a.value=o:a=o),color:"primary","view-mode":"month",events:r(i)},null,8,["modelValue","events"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{b as default};