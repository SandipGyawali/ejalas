import{j as e}from"./index-szI-Gb_4.js";import{B as n}from"./BreadCrumb-kHw5uSv_.js";import{E as a,I as d,T as o}from"./table-evd-BNShHvb8.js";import{I as l}from"./InputBox-D1c3pHce.js";const t="border border-border-col2 overflow-hidden px-2 py-2.5",c={padding:"12px 15px",maxWidth:"200px",overflow:"hidden"};function m({tableData:i}){return e.jsx(e.Fragment,{children:i.map((s,r)=>e.jsxs("tr",{className:`border border ${t} bg-table-bg ${r%2!=0?"bg-white":""}`,children:[e.jsx("th",{className:`px-3 py-3.5 ${t}`,style:c,children:s.id}),e.jsx("td",{className:`${t}`,children:s.notice}),e.jsx("td",{className:`${t}`,children:e.jsx(a,{href:"#",btnType:"edit"})}),e.jsx("td",{className:`${t}`,children:e.jsx(a,{href:"#",btnType:"delete"})})]},r))})}const p=[{id:1,notice:"(च) जेष्ठ नागरिकको पालनपोषण तथा हेरचाह नगरेको"}];function u(){return e.jsx("div",{children:e.jsxs("section",{className:"main-section mr-4",children:[e.jsx(n,{head:"होम",text:"सूचना",customStyle:"mt-0 mx-0",href:"/admin/dashboard"}),e.jsx(l,{method:"post",action:"/admin/complaint-type",inputPlaceHolder:"सूचना",buttonName:"थप्नुहोस्",inputHeading:"सूचना थप्नुहोस्"}),e.jsx(d,{inputHeading:"सूचनाको सूची",children:e.jsx(o,{tableHeading:[{title:"#"},{title:"सूचना"},{title:"सम्पादन गर्नुहोस्"},{title:"डिलिट गर्नुहोस्"}],children:e.jsx(m,{tableData:p})})})]})})}export{u as default};
