import{a as k}from"./accountStore.3470eac0.js";import{_ as m,o as t,c as o,F as _,u as l,a as n,t as c,q as p,b as y}from"./entry.d256b9ad.js";import{a as j}from"./axios.4d564c32.js";const g={props:{recepti:{type:Array,required:!0}},methods:{getImageUrl(s){return"http://127.0.0.1:8000/"+s},goToRecept(s){let i=s.naziv_recepta.replace(/\s+/g,"_");this.$router.push({path:`/News/${i}`}),k.actions.setReceptId(s.recept_id)}}},x={class:"card-recepti"},$=["onClick"],R=["src"],b={class:"card-body"},I={class:"card-title"},N={class:"card-text"},z={class:"prosjecna-ocjena"},B={key:0,class:"ocjena-title"},C={key:1,class:"ocjena"};function H(s,i,u,f,r,d){return t(),o("div",x,[(t(!0),o(_,null,l(u.recepti,e=>(t(),o("div",{key:e.recept_id,class:"card card-hover",onClick:a=>d.goToRecept(e)},[n("img",{src:d.getImageUrl(e.slika),alt:"Recept slika"},null,8,R),n("div",b,[n("h5",I,c(e.naziv_recepta),1),n("p",N,"Autor: "+c(e.korisnicko_ime),1),n("div",z,[e.prosjecna_ocjena!==null&&e.prosjecna_ocjena!==void 0?(t(),o("span",B,"Ocjena:")):p("",!0),(t(),o(_,null,l(5,a=>(t(),o(_,null,[a<=Math.floor(e.prosjecna_ocjena)?(t(),o("span",{class:"star-filled",key:"filled-"+a},"★")):(t(),o("span",{class:"star",key:"empty-"+a},"★"))],64))),64)),e.prosjecna_ocjena!==null&&e.prosjecna_ocjena!==void 0?(t(),o("span",C,c(e.prosjecna_ocjena),1)):p("",!0)])])],8,$))),128))])}const v=m(g,[["render",H],["__scopeId","data-v-d36e7898"]]);j.defaults.baseURL="http://127.0.0.1:8000/";const J={components:{HomeRecepti:v},data(){return{topJela:{},error:null}},mounted(){j.get("api/topjela").then(s=>{this.topJela=s.data.top_jela}).catch(s=>{this.error="Došlo je do greške prilikom dohvata top jela: "+s.message})}},U={id:"app"},V={class:"naslovi"},q={key:0};function A(s,i,u,f,r,d){const e=v;return t(),o("div",U,[(t(!0),o(_,null,l(r.topJela,(a,h)=>(t(),o("div",{key:h},[n("h2",V,c(h),1),y(e,{recepti:a},null,8,["recepti"])]))),128)),r.error?(t(),o("p",q,c(r.error),1)):p("",!0)])}const S=m(J,[["render",A],["__scopeId","data-v-14ab791d"]]);export{S as default};
