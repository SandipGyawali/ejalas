import{j as e}from"./index-szI-Gb_4.js";import{B as i}from"./BreadCrumb-kHw5uSv_.js";import{E as d,I as n,T as l}from"./table-evd-BNShHvb8.js";const t="border border-border-col2 overflow-hidden px-2 py-2.5",o={padding:"12px 15px",maxWidth:"200px",overflow:"hidden"};function c({tableData:s}){return e.jsx(e.Fragment,{children:s.map((a,r)=>e.jsxs("tr",{className:`border border ${t} bg-table-bg ${r%2!=0?"bg-white":""}`,children:[e.jsx("th",{className:`px-3 py-3.5 ${t}`,style:o,children:a.id}),e.jsx("td",{className:`${t}`,children:a.pratiwedanName}),e.jsx("td",{className:`${t}`,children:e.jsx(d,{href:"#",btnType:"view"})})]},r))})}const m=[{id:1,pratiwedanName:"वडागत केसको स्थिति प्रतिवेदन"}];function b(){return e.jsx("div",{children:e.jsxs("section",{className:"main-section mr-4",children:[e.jsx(i,{head:"होम",text:" प्रतिवेदनहरु",customStyle:"mt-0 mx-0"}),e.jsx(n,{inputHeading:"प्रतिवेदनहरूको सूची",children:e.jsx(l,{tableHeading:[{title:"#"},{title:"प्रतिवेदनको नाम"},{title:"हेर्नुहोस"}],children:e.jsx(c,{tableData:m})})})]})})}export{b as default};