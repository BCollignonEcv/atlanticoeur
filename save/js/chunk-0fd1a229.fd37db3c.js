(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd1a229"],{"1ca3":function(e,t,c){"use strict";c("7c8e")},"7c8e":function(e,t,c){},f814:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n={class:"page"};function i(e,t,c,i,r,a){var l=Object(o["resolveComponent"])("DoctorCards"),d=Object(o["resolveComponent"])("Section"),s=Object(o["resolveComponent"])("DoctorDescriptions"),u=Object(o["resolveComponent"])("SpecialitySlide"),b=Object(o["resolveComponent"])("SwiperSlide"),p=Object(o["resolveComponent"])("Slider"),j=Object(o["resolveComponent"])("Cta");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createVNode"])(d,{title:"Les cardiologues du cabinet \nSCM Atlanticœur",sectionSetting:["landing"]},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{"type-card":"big"})]})),_:1}),Object(o["createVNode"])(d,{sectionSetting:["grey"]},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s)]})),_:1}),Object(o["createVNode"])(d,{title:"Les spécialités du cabinet \nSCM Atlanticœur",sectionSetting:["fullWidth","bigTitle"]},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{options:{slidesPerView:2}},{slides:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(i.dataStore.getSpecialities,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:e.id},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{"data-speciality":e},null,8,["data-speciality"])]})),_:2},1024)})),128))]})),_:1})]})),_:1}),e.responsiveDisplay.tablette?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:0,sectionSetting:["dark","sectionMarginTop"]},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j)]})),_:1})):Object(o["createCommentVNode"])("",!0)])}var r=c("38ab"),a=c("62fa"),l=c("2608"),d=c("d428"),s=c("a4b4"),u=c("8349"),b={name:"Praticiens",components:{DoctorCards:l["f"],DoctorDescriptions:l["h"],SpecialitySlide:l["n"],Section:d["c"],Slider:d["d"],Cta:s["b"],SwiperSlide:u["b"]},data:function(){return{doctorSelected:1,specialitySelected:null}},setup:function(){var e=Object(r["a"])(),t=Object(a["a"])(),c=null;return t.$subscribe((function(e){"activeDoctor"===e.events.key&&(c=e.events.newValue)}),{detached:!0}),{appStore:e,dataStore:t,activeDoctor:c}},methods:{newSelected:function(e){this.doctorSelected=e},scrollToDoctor:function(e){setTimeout((function(){document.getElementById("doctorDescription"+e).scrollIntoView({behavior:"smooth",block:"center"})}),200)}},watch:{}},p=(c("1ca3"),c("6b0d")),j=c.n(p);const O=j()(b,[["render",i],["__scopeId","data-v-06e0ba06"]]);t["default"]=O}}]);
//# sourceMappingURL=chunk-0fd1a229.fd37db3c.js.map