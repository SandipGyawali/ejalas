import{j as e,c as r,I as c}from"./index-szI-Gb_4.js";import{B as m}from"./BreadCrumb-kHw5uSv_.js";import{E as o,I as x,T as d}from"./table-evd-BNShHvb8.js";const a="border border-border-col2 overflow-hidden px-2 py-2.5",p={padding:"12px 15px",maxWidth:"200px",overflow:"hidden"};function l({tableData:t}){return e.jsx(e.Fragment,{children:t.map((s,i)=>e.jsxs("tr",{className:`border border ${a} bg-table-bg ${i%2!=0?"bg-white":""}`,children:[e.jsx("th",{className:`px-3 py-3.5 ${a}`,style:p,children:s.id}),e.jsx("td",{className:`${a}`,children:s.caseNo}),e.jsx("td",{className:`${a}`,children:s.issueType}),e.jsx("td",{className:`${a}`,children:s.pratiwadi}),e.jsx("td",{className:`${a}`,children:s.dartaMiti}),e.jsx("td",{className:`${a}`,children:e.jsx(o,{href:"#",btnType:"edit"})})]},i))})}const n=[{title:"#"},{title:"केस नं"},{title:"विवादको प्रकार"},{title:"वादी/प्रतिवादी"},{title:"दर्ता मिति"},{title:"सम्पादन गर्नुहोस्"}],h=[{id:1,caseNo:"2078-mj-35",issueType:"सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी, मिची वा घुसाई खाएको,",pratiwadi:"वादी/प्रतिवादी",dartaMiti:"दर्ता मिति",sampadan:"edit"},{id:2,caseNo:"2078-mj-35",issueType:"सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा",pratiwadi:"वादी/प्रतिवादी",dartaMiti:"दर्ता मिति",sampadan:"edit"}],j=[{id:1,caseNo:"2078-mj-35",issueType:"सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी, मिची वा घुसाई खाएको,",pratiwadi:"old data",dartaMiti:"old data",sampadan:"edit"}];function N(){const{pathname:t}=r();return e.jsx("div",{children:e.jsxs("section",{className:"main-section mr-4",children:[e.jsx(m,{head:"होम",text:"केसहरु",customStyle:"mt-0 mx-0",href:"admin/dashboard"}),e.jsxs(x,{inputHeading:"केसहरूको सूची",children:[e.jsxs("div",{className:"label sm:text-md text-sm mx-4 my-6 sm:flex-row flex-col gap-3 flex justify-between",children:[e.jsxs("ul",{className:"nav flex gap-4 text-white",children:[e.jsx("li",{className:"nav-item bg-blue3 px-4 py-2 rounded",children:e.jsx("a",{className:"nav-link active",href:"/admin/cases","aria-current":"page",children:"नयाँ"})}),e.jsx("li",{className:"nav-item px-4 py-2 bg-blue3 rounded",children:e.jsx("a",{href:"/admin/old-cases",className:"nav-link active","aria-current":"page",children:"पुरानो"})})]}),e.jsx("form",{action:"",children:e.jsxs("div",{className:"flex justify-between items-center border border-blue rounded-md px-2 py-1 focus:outline-none",children:[e.jsx("input",{type:"text",placeholder:"केस खोज्नुहोस",name:"filter",className:"focus:outline-none text-sm w-full"}),e.jsx(c,{icon:"fa6-solid:magnifying-glass",className:"text-blue"})]})})]}),t=="/admin/cases"?e.jsx(d,{tableHeading:n,children:e.jsx(l,{tableData:h})}):e.jsx(d,{tableHeading:n,children:e.jsx(l,{tableData:j})})]})]})})}export{N as default};
