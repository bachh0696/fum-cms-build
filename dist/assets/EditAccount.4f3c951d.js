import{R as B,E as w,u as M,b as _,t as T,H as j,v as k,j as a,i as s,c as e,d as m,C as d,h as S,a9 as z,aa as O,a5 as P,Q as H,r as E,a as L,aq as q,I as $,ak as G,ab as Q,T as U}from"./index.ae356f4d.js";import{a as D,L as V}from"./ListAccountProvider.d7b09aab.js";const J=h=>{var b,A,p,C,F;const{isEdit:r,account:t,setIsEditAccount:i,isFacilityAccount:u}=h,o=w(),{t:l,accountTableHandler:f}=M();l("edit.form.option.label.admin"),l("edit.form.option.label.event_creator");const{control:n,watch:y,handleSubmit:v,formState:{isSubmitting:I,isDirty:Y}}=_({mode:"onTouched",defaultValues:{id:(b=t==null?void 0:t.id)!=null?b:null,name:(A=t==null?void 0:t.name)!=null?A:"",mail:(p=t==null?void 0:t.mail)!=null?p:"",role:(C=t==null?void 0:t.role)!=null?C:"",roll:(F=t==null?void 0:t.roll)!=null?F:"\u5C71\u7530\u592A\u90CE",password:"080-0000-0000",created_at:"15m\xB2"}}),R=v(async c=>{var N,g;c.confirm_password=c==null?void 0:c.password;try{await D.save(c),T("success"),o(j.account.list)}catch(x){k((g=(N=x==null?void 0:x.response)==null?void 0:N.data)==null?void 0:g.error_message)}});return a("form",{onSubmit:R,children:[a(s,{className:"p-16",children:[a(s,{className:"flex justify-between items-center mb-8",children:[e(m,{className:"font-bold text-16",children:"\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831"}),e("button",{type:"button",className:"text-blue bg-none text-16 font-bold",onClick:()=>i(!0),children:"\u7DE8\u96C6"})]}),a(s,{className:"flex justify-center",children:[a(s,{className:"flex w-1/2 items-center h-[54px]",children:[e(s,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:l("edit.form.label.id")}),e(d,{control:n,name:"id",size:"small",className:"w-[80%] h-full",readOnly:!r,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),a(s,{className:"flex w-1/2 items-center h-[54px]",children:[e(s,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:l(u?"edit.form.label.administrator_name":"edit.form.label.name")}),e(d,{control:n,name:"name",size:"small",className:"w-[80%] h-full",readOnly:!r,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),u?a(s,{className:"flex justify-center",children:[a(s,{className:"flex w-1/2 items-center h-[54px]",children:[e(s,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:l("edit.form.label.contract_id")}),e(d,{control:n,name:"role",size:"small",className:"w-[80%] h-full",readOnly:!r,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),a(s,{className:"flex w-1/2 items-center h-[54px]",children:[e(s,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:l("edit.form.label.plan_name")}),e(d,{control:n,name:"mail",size:"small",className:"w-[80%] h-full",readOnly:!r,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}):a(s,{className:"flex w-full items-center h-[54px]",children:[e(s,{className:"w-[10%] p-8 bg-[#F9F9F9] flex items-center border-1 border-[#C4C4C4] h-full text-14",children:l("edit.form.label.mail")}),e(d,{control:n,name:"mail",size:"small",className:"w-[90%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),r?a(s,{className:"flex flex-wrap sm:flex-nowrap px-16 mb-20",children:[e(S,{onClick:()=>i(!1),className:"ml-auto h-32 text-13 text-[#BDBDBD]",children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),e(z,{variant:"contained",loading:I,type:"submit",className:O("ml-[10px] h-32 text-13 text-white bg-blue"),children:"\u66F4\u65B0"})]}):null]})},K=B.memo(J),W=h=>{const{id:r}=P(),t=r!=="new",i=H(D.find,{manual:!0,onError:f=>{errorMsg("Get detail failed!!!")}}),{data:u,run:o,loading:l}=i;return E.exports.useEffect(()=>{t&&o(r)},[]),{isEdit:t,account:u==null?void 0:u.account,loadingAccount:l}},X=h=>{const{t:r}=L(U.account),{isEdit:t,account:i,loadingAccount:u}=W(),[o,l]=E.exports.useState(!1),f=!0;w();const n=q();return e(V,{t:r,children:e($,{tabHeader:e(G,{title:a(s,{className:"flex items-center justify-between",children:[a(m,{variant:"h1",className:"font-900",children:[o?"\u65BD\u8A2D\u63D0\u4F9B\u8005\u30A2\u30AB\u30A6\u30F3\u30C8\u7DE8\u96C6":"\u65BD\u8A2D\u63D0\u4F9B\u8005\u30A2\u30AB\u30A6\u30F3\u30C8\u8A73\u7D30",null]}),e(m,{onClick:()=>{n({content:a(m,{variant:"h4",children:["\u524A\u9664\u3059\u308B\u3068\u767B\u9332\u3055\u308C\u60C5\u5831\u304C\u5168\u3066\u5931\u308F\u308C\u307E\u3059\u3002",e("br",{}),"\u672C\u5F53\u306B\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"]}),title:"\u30A2\u30AB\u30A6\u30F3\u30C8\u524A\u9664",color:"error",zIndex:9999,okText:"\u524A\u9664"})},className:"cursor-pointer",color:"error",children:"\u524A\u9664"})]})}),content:u?e("div",{className:"mt-40 text-center",children:e(Q,{})}):e(K,{isEdit:o,isFacilityAccount:f,setIsEditAccount:l,account:i})})})},te=B.memo(X);export{te as default};
