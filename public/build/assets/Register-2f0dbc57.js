import{T as p,a as c,g as _,e as n,d as o,u as s,Z as w,f as l,h as d,s as g,n as V,j as v}from"./app-a72bd68e.js";import{_ as y}from"./GuestLayout-4e8d4e0b.js";import{_ as t}from"./InputError-6b0028f1.js";import{_ as m}from"./InputLabel-c6058156.js";import{P as b}from"./PrimaryButton-07649fb6.js";import{_ as i}from"./TextInput-02bfe8ae.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=["onSubmit"],k={class:"mt-4"},h={class:"mt-4"},q={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},T={__name:"Register",setup(N){const e=p({name:"",email:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,a)=>(c(),_(y,null,{default:n(()=>[o(s(w),{title:"Register"}),l("form",{onSubmit:v(u,["prevent"])},[l("div",null,[o(m,{for:"name",value:"Name"}),o(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",k,[o(m,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",h,[o(m,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[2]||(a[2]=r=>s(e).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",q,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",B,[o(s(g),{href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),o(b,{class:V(["ltr:ml-4 rtl:mr-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{T as default};
