import{_ as p}from"./CardRecepti.536cf5f4.js";import{a as _}from"./axios.4d564c32.js";import{_ as u,c as r,b as l,a as d,q as n,t as m,o}from"./entry.e952e3f2.js";import"./accountStore.3470eac0.js";const g={components:{CardRecepti:p},data(){return{recepti:null,error:null}},mounted(){this.fetchData(1)},methods:{fetchData(c){_.get(`http://pzi202024.studenti.sum.ba/backend/api/dohvatirec?page=${c}`).then(t=>{this.recepti=t.data.recepti}).catch(t=>{this.error="Došlo je do greške prilikom dohvata recepata: "+t.message})}}},h={id:"app"},f={class:"pagination"},k={key:0};function v(c,t,b,x,e,i){const s=p;return o(),r("div",h,[l(s,{recepti:e.recepti?e.recepti.data:[]},null,8,["recepti"]),d("div",f,[e.recepti&&e.recepti.current_page>1?(o(),r("button",{key:0,class:"pagination-button",onClick:t[0]||(t[0]=a=>i.fetchData(e.recepti.current_page-1))},"Previous")):n("",!0),e.recepti&&e.recepti.last_page>e.recepti.current_page?(o(),r("button",{key:1,class:"pagination-button",onClick:t[1]||(t[1]=a=>i.fetchData(e.recepti.current_page+1))},"Next")):n("",!0)]),e.error?(o(),r("p",k,m(e.error),1)):n("",!0)])}const B=u(g,[["render",v],["__scopeId","data-v-b0877553"]]);export{B as default};
