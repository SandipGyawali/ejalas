import{p as n,j as e,I as l}from"./index-szI-Gb_4.js";function c({inputHeading:s,children:t}){return e.jsxs("div",{className:"add-court-section common-add-section bg-white mt-6 overflow-hidden",style:{height:"fit-content"},children:[e.jsx("h2",{className:"bg-blue2 text-white py-3 font-semibold text-center rounded-t-md",children:s}),e.jsx("div",{className:"overflow-x-auto",children:t})]})}c.propTypes={inputHeading:n.string.isRequired};const d="border border-border-col2",x={padding:"12px 15px",maxWidth:"200px"};function h({tableHeading:s,children:t}){return e.jsxs("table",{className:`table w-full overflow-hidden text-center text-text-col bg-white ${d} text-sm sm:text-md`,style:{minWidth:"500px"},children:[e.jsx("thead",{className:"text-center border-b-2 border-border-col",children:e.jsx("tr",{children:s.map(({title:a},i)=>e.jsx("th",{className:`${d}`,style:x,children:a},i))})}),e.jsx("tbody",{className:"text-center",children:t})]})}const r={editIcon:"fa-regular:edit",viewIcon:"mdi:eye",deleteIcon:"fa6-regular:trash-can"},o={delete:"text-darkRed",edit:"text-blue",view:"text-black"};function p({href:s,btnType:t}){return e.jsx("a",{href:s,className:`${t==="edit"?o.edit:t=="delete"?o.delete:r.view}`,children:e.jsx(l,{icon:t==="edit"?r.editIcon:t=="delete"?r.deleteIcon:r.viewIcon,className:"m-auto sm:text-lg text-lg"})})}export{p as E,c as I,h as T};
