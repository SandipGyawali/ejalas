import{j as e}from"./index-szI-Gb_4.js";import{B as n}from"./BreadCrumb-kHw5uSv_.js";import{I as l}from"./InputBox-D1c3pHce.js";import{E as s,I as d,T as o}from"./table-evd-BNShHvb8.js";const t="border border-border-col2 overflow-hidden px-2 py-2.5",p={padding:"12px 15px",maxWidth:"200px",overflow:"hidden"};function m({tableData:i}){return e.jsx(e.Fragment,{children:i.map((a,r)=>e.jsxs("tr",{className:`border border ${t} bg-table-bg ${r%2!=0?"bg-white":""}`,children:[e.jsx("th",{className:`px-3 py-3.5 ${t}`,style:p,children:a.id}),e.jsx("td",{className:`${t}`,children:a.issueType}),e.jsx("td",{className:`${t}`,children:e.jsx(s,{href:"#",btnType:"view"})}),e.jsx("td",{className:`${t}`,children:e.jsx(s,{href:"#",btnType:"edit"})}),e.jsx("td",{className:`${t}`,children:e.jsx(s,{href:"#",btnType:"delete"})})]},r))})}const c=[{id:1,issueType:"सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी, मिची वा घुसाई खाएको,"}];function u(){return e.jsx("div",{children:e.jsxs("section",{className:"main-section mr-4",children:[e.jsx(n,{head:"होम",text:"विवादको नियम र दफा",customStyle:"mt-0 mx-0"}),e.jsx(l,{method:"post",action:"/admin",inputPlaceHolder:"विवादको प्रकार छान्नुहोस",inputHeading:"विवादको प्रकार छान्नुहोस",buttonName:"विवादको प्रकार छान्नुहोस"}),e.jsx(d,{inputHeading:"विवादको नियम र दफाको सूची",children:e.jsx(o,{tableHeading:[{title:"#"},{title:"विवादको प्रकार"},{title:"नियम र दफा हेर्नुहोस"},{title:"सम्पादन गर्नुहोस्"},{title:"डिलिट गर्नुहोस्"}],children:e.jsx(m,{tableData:c})})})]})})}export{u as default};
