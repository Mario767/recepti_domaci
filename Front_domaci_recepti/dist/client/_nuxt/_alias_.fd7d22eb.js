import{_ as s}from"./ShowCard.16728522.js";import{a}from"./axios.4d564c32.js";import{a as n}from"./accountStore.3470eac0.js";import{_ as p,c as _,s as i,q as m,o as r}from"./entry.d256b9ad.js";const d={data(){return{recept:null}},created(){this.fetchRecept()},methods:{fetchRecept(){let e=n.state.receptId;typeof sessionStorage<"u"&&(e=e||sessionStorage.getItem("receptId")),a.get(`http://127.0.0.1:8000/api/recept/${e}`).then(t=>{this.recept=t.data}).catch(t=>{console.error(t)})}}};function f(e,t,l,u,o,h){const c=s;return r(),_("div",null,[o.recept?(r(),i(c,{key:0,recept:o.recept},null,8,["recept"])):m("",!0)])}const S=p(d,[["render",f]]);export{S as default};
