"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[294],{83294:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(2658),a=n(72642),l=n(18377),o=n(67294),u=n(73727),i=n(66818),c=n(89066),s=n(94659),m=n(66186),f=n(93155),d=n(20382),v=n(39704),g=n(5977),h=n(15074);function p(e,t,n,r,a,l,o){try{var u=e[l](o),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){p(l,r,a,o,u,"next",e)}function u(e){p(l,r,a,o,u,"throw",e)}o(void 0)}))}}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(){var e=(0,v.I0)(),t=E((0,o.useState)(null),2),n=t[0],l=t[1],u=E((0,o.useState)(null),2),p=u[0],b=u[1],w=E((0,o.useState)(null),2),S=w[0],Z=w[1],A=E((0,o.useState)(null),2),x=A[0],C=A[1],I=E((0,o.useState)(!1),2),P=I[0],k=I[1],_=E((0,o.useState)(""),2),R=_[0],T=_[1],N=(0,g.k6)(),O=E((0,o.useState)(!1),2),U=O[0],j=O[1];function L(){return L=y(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={title:n,image:p,abstract:S,externalurl:x},k(!1),e((0,d.dO)(!0)),t.next=5,c.Z.post("/news",r).then((function(t){e((0,d.c6)({msg:"Noticia Creado.",show:!0})),N.push("/admin/news")})).catch((function(e){e.response.data.data.messages?T(e.response.data.data.messages):T(e.message),k(!0)})).finally((function(){e((0,d.dO)(!1))}));case 5:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}return(0,o.useEffect)((function(){j(!!(n&&p&&S&&x))}),[n,p,S,x]),o.createElement("div",{style:{marginTop:"10px"}},o.createElement(r.Z,{variant:"h5",color:"initial"},"Nueva Noticia"),o.createElement("form",null,o.createElement(s.Z,{error:!n,label:"Titulo",value:null!==n?n:"",onChange:function(e){return l(e.target.value)},fullWidth:!0,margin:"normal"}),o.createElement(s.Z,{error:!p,label:"URL Imagen",value:null!==p?p:"",onChange:function(e){return b(e.target.value)},fullWidth:!0,margin:"normal"}),o.createElement("div",null,o.createElement(r.Z,{style:{padding:"15px",color:""===S||null===S?"#ff0000":""}},"Resumen de la noticia"),o.createElement("div",{style:{border:""===S||null===S?"1px solid #ff0000":""}},o.createElement(h.M,{apiKey:process.env.REACT_APP_TYNY_API_KEY,value:S,init:{height:500,menubar:!1,branding:!1,language:"es"},onEditorChange:function(e,t){return Z(e)}}))),o.createElement(s.Z,{error:!x,label:"URL de la Fuente",value:null!==x?x:"",onChange:function(e){return C(e.target.value)},fullWidth:!0,margin:"normal"}),P&&o.createElement(m.Z,{severity:"error",style:{textAlign:"left",marginTop:"20px"}},o.createElement(f.Z,null,"Error"),R),o.createElement(a.Z,{onClick:function(){return L.apply(this,arguments)},startIcon:o.createElement(i.Z,null),variant:"contained",className:"mt-20 ".concat(U?"buttonPrimary":""),disabled:!U},"Guardar")))},S=n(20724),Z=function(){return o.createElement(o.Fragment,null,o.createElement(r.Z,{variant:"h3",color:"initial"},"Noticias"),o.createElement(l.Z,{sx:{width:"100%"}},o.createElement(u.rU,{to:"/admin/news"},o.createElement(a.Z,{variant:"outlined",size:"small",startIcon:o.createElement(S.Z,null)},"Noticias")),o.createElement(w,null)))}},89066:function(e,t,n){var r=n(9669),a=n.n(r)().create({baseURL:process.env.REACT_APP_API_HOST});a.interceptors.request.use((function(e){return window.localStorage.getItem("_token")&&(e.headers.Authorization="bearer "+window.localStorage.getItem("_token")),e}),(function(e){return Promise.reject(e)})),t.Z=a}}]);
//# sourceMappingURL=294.bundle.js.map