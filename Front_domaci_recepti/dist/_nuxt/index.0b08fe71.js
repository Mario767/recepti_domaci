import{_ as u,z as k,n as m,c as s,x as _,y as h,a as n,t as a,q as c,v as f,d as p,b as v,w as y,o as r,p as z,e as w}from"./entry.e952e3f2.js";import{a as b}from"./accountStore.3470eac0.js";const j={data(){return{korisnicko_ime:"",lozinka:"",isLoggedIn:!1,isCheckingLogin:!0,errors:{korisnicko_ime:"",lozinka:"",general:""}}},async created(){try{this.isLoggedIn=await b.getters.isLoggedIn(),this.isLoggedIn&&(await k(),window.location.href="/")}catch(i){console.error("Error during login check:",i)}finally{this.isCheckingLogin=!1}},methods:{async prijavi(){if(!this.isCheckingLogin&&(this.errors={korisnicko_ime:"",lozinka:"",general:""},this.korisnicko_ime||(this.errors.korisnicko_ime="Korisničko ime je obavezno"),this.lozinka||(this.errors.lozinka="Lozinka je obavezna"),!(this.errors.korisnicko_ime||this.errors.lozinka)))try{await fetch("http://pzi202024.studenti.sum.ba/backend/sanctum/csrf-cookie");const i=await fetch("http://pzi202024.studenti.sum.ba/backend/api/prijavi",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({korisnicko_ime:this.korisnicko_ime,lozinka:this.lozinka})}),o=await i.json();i.ok?(document.cookie=`authToken=${o.access_token}; path=/`,document.cookie=`username=${this.korisnicko_ime}; path=/`,document.cookie=`email=${o.korisnik.email}; path=/`,this.isLoggedIn=!0,await k(),o.korisnik.uloga_id==2||o.korisnik.uloga_id==3?window.location.href="/admin":window.location.href="/"):this.errors=o.errors||{}}catch(i){this.errors.general="Došlo je do greške prilikom prijave: "+i.message,console.error("Detalji greške: ",i)}}}},l=i=>(z("data-v-89e5d0d9"),i=i(),w(),i),L={id:"app"},x={key:0},C=l(()=>n("h1",null,"Provjera prijave...",-1)),I=[C],S={key:1},N={key:0},T=l(()=>n("h1",null,"Prijavljeni ste",-1)),V=[T],D={key:1,class:"login-container"},P=l(()=>n("h1",{class:"title"},"Domaći recepti",-1)),U=["disabled"],q={key:0,class:"error-message"},B=["disabled"],E={key:1,class:"error-message"},M=["disabled"],O={key:2,class:"error-message"},J={class:"register-container"};function K(i,o,R,A,e,d){const g=m("router-link");return r(),s("div",L,[e.isCheckingLogin?(r(),s("div",x,I)):(r(),s("div",S,[e.isLoggedIn?(r(),s("div",N,V)):(r(),s("div",D,[P,_(n("input",{class:"input-field",type:"text",placeholder:"Unesi ime","onUpdate:modelValue":o[0]||(o[0]=t=>e.korisnicko_ime=t),disabled:e.isCheckingLogin,required:""},null,8,U),[[h,e.korisnicko_ime]]),e.errors.korisnicko_ime?(r(),s("p",q,a(e.errors.korisnicko_ime),1)):c("",!0),_(n("input",{class:"input-field",type:"password",placeholder:"Unesi lozinku","onUpdate:modelValue":o[1]||(o[1]=t=>e.lozinka=t),disabled:e.isCheckingLogin,required:""},null,8,B),[[h,e.lozinka]]),e.errors.lozinka?(r(),s("p",E,a(e.errors.lozinka),1)):c("",!0),n("button",{class:"login-button",onClick:o[2]||(o[2]=f((...t)=>d.prijavi&&d.prijavi(...t),["prevent"])),disabled:e.isCheckingLogin},"Prijavi se",8,M),e.errors.general?(r(),s("p",O,a(e.errors.general),1)):c("",!0),n("div",J,[n("p",null,[p("Nemaš račun? "),v(g,{to:"/register",class:"register-button"},{default:y(()=>[p("Registriraj se")]),_:1})])])]))]))])}const H=u(j,[["render",K],["__scopeId","data-v-89e5d0d9"]]);export{H as default};
