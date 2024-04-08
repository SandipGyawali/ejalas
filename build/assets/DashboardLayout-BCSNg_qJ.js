import{j as e,I as t,r as d,u as x,b as f,t as c,L as m,O as b,s as g}from"./index-szI-Gb_4.js";const N=[{url:"/admin/dashboard",text:"ड्यासबोर्ड",icon:e.jsx(t,{icon:"clarity:dashboard-solid"})},{url:"/admin/complain",text:"विवाद",icon:e.jsx(t,{icon:"tabler:messages"})},{url:"/admin/court",text:"न्यायिक समिति",icon:e.jsx(t,{icon:"mdi:court-hammer"})},{url:"/admin/likhit-ujuri",text:" लिखित",icon:e.jsx(t,{icon:"jam:write-f"})},{url:"/admin/cases",text:"केसहरु",icon:e.jsx(t,{icon:"ri:file-4-fill"})},{url:"/admin/news",text:"सूचना",icon:e.jsx(t,{icon:"fluent:news-24-filled"})},{url:"/admin/feedback",text:"गुनासो फर्वार्ड",icon:e.jsx(t,{icon:"mdi:message-bubble"})},{url:"/admin/melmilapkarta-darta",text:" मेलमिलापकर्ता दर्ता",icon:e.jsx(t,{icon:"fa6-solid:handshake"})},{nestedList:!0,heading:"प्रयोगकर्ता व्यवस्थापन",icon:e.jsx(t,{icon:"fa6-solid:list"}),list:[{url:"/admin/user",text:"प्रयोगकर्ता",icon:e.jsx(t,{icon:"fa-solid:user"})},{url:"/admin/role",text:"भूमिका",icon:e.jsx(t,{icon:"fa-regular:user"})},{url:"/admin/permission-management",text:"अनुमति",icon:e.jsx(t,{icon:"tabler:checkup-list"})},{url:"/settings",text:"पृष्ठ सेटिंग्समिलाउनुहोस",icon:e.jsx(t,{icon:"system-uicons:document-list"})}]},{nestedList:!0,heading:"मास्टर डाटा व्यवस्थापन",icon:e.jsx(t,{icon:"fa6-solid:list"}),list:[{url:"/admin/complaint-type",text:"विवादको प्रकार",icon:e.jsx(t,{icon:"tabler:messages"})},{url:"/admin/court-type",text:"न्यायिक समितिको प्रकार",icon:e.jsx(t,{icon:"material-symbols:menu-book"})},{url:"/admin/about-us",text:"हाम्रो बारेमा",icon:e.jsx(t,{icon:"material-symbols:info"})},{url:"/admin/ward",text:"वडा",icon:e.jsx(t,{icon:"fa-solid:address-book"})},{url:"/admin/melmilapKarta",text:"मेलमिलापकर्ता",icon:e.jsx(t,{icon:"mdi:users"})},{url:"/admin/department",text:"विभाग",icon:e.jsx(t,{icon:"mdi:building"})}]},{url:"/admin/complaint-related-rules",text:"विवादको नियम र दफा",icon:e.jsx(t,{icon:"bxs:file"})},{url:"/admin/get-pratiwedan-list",text:"प्रतिवेदन",icon:e.jsx(t,{icon:"bxs:file"})}];function y(){const[a,n]=d.useState({0:!1,1:!1}),[o,h]=d.useState({0:!1,1:!1}),r=x(s=>s.dashboardNav.nav_active),u=x(s=>s.windowWidth.windowWidth),p=f(),j=s=>{n(i=>{if(s==8)return{...i,0:!i[0]};if(s==9)return{...i,1:!i[1]}}),h(i=>{if(s==8)return{...i,0:!i[0]};if(s==9)return{...i,1:!i[1]}})};return e.jsx("section",{className:`sidebar-section z-10 bg-sideBarBlue min-h-screen overflow-y-auto fixed top-0 hide-scrollbar left-0 h-full pb-16 md:block ${r?"":"hidden"}`,style:r&&u<=768?{width:"100%"}:{width:"285px"},children:e.jsxs("div",{className:"sidebar-wrapper",children:[e.jsx("section",{className:"header-section",children:e.jsxs("div",{className:"header-wrapper",children:[e.jsxs("div",{className:`top-section flex gap-6 items-center p-5 ${u<=768?"justify-start":"justify-between"}`,children:[e.jsx("a",{href:"/admin/dashboard",className:"logo-container",children:e.jsx("img",{src:"/image/header/logo.png",alt:"logo",style:{width:"77px",height:"auto"}})}),e.jsx("div",{className:"text-container text-md font-semibold text-white w-32",children:e.jsx("h1",{children:"काठमाडौँ महानगरपालिका"})})]}),u<=768&&e.jsx("div",{className:"mobile-nav-termiate cursor-pointer text-white absolute top-4 right-4",onClick:()=>p(c()),children:e.jsx(t,{icon:"charm:cross",fontSize:26})}),e.jsx("div",{className:"horizontal-line w-full h-0.5 bg-grey"})]})}),e.jsx("section",{className:"dashboard-section",children:e.jsx("ul",{id:"accordian",className:"accordian-container flex flex-col gap-3.5 mt-6",children:N.map((s,i)=>s.nestedList?e.jsxs("li",{className:"common-item mt-1 cursor-pointer",children:[e.jsxs("h4",{className:"accordian-title relative js-accordian-title flex gap-3.5 items-center justify-start px-4 text-white font-bold",style:{fontSize:"15px"},onClick:()=>j(i),children:[s.icon&&e.jsx("span",{className:"icon text-xl",children:s.icon}),s.heading,e.jsx("span",{className:`absolute right-4 transition-transform duration-300 ${o[i-8]?"rotate-0":"rotate-180"}`,children:e.jsx(t,{icon:"iconamoon:arrow-up-2",fontSize:24})})]}),a[i-8]?e.jsx("ul",{className:"filter-sub-menu flex flex-col gap-3.5 mt-4",children:s.list.map((l,w)=>e.jsxs(m,{to:l.url,className:"filter-sub-item flex pr-4 pl-16 items-center justify-between gap-4 justify-start text-white",style:{fontWeight:"bold",fontSize:"14px"},onClick:()=>p(c()),children:[l.text,l.icon&&e.jsx("span",{className:"icon text-xl",children:l.icon})]},w))}):""]},i):e.jsxs(m,{to:s.url,className:"flex px-4 items-center gap-4 justify-start text-white",style:{fontWeight:"bold",fontSize:"15px"},onClick:()=>p(c()),children:[s.icon&&e.jsx("span",{className:"icon text-xl",children:s.icon}),s.text]},i))})})]})})}function v(){return e.jsx("footer",{id:"footer-wrapper",className:"fixed-bottom text-center z-20 p-2.5 bg-grey2 text-white text-sm fixed w-full bottom-0",children:e.jsxs("p",{className:"copyright-text",children:["काठमाडौँ महानगरपालिका © ",new Date().getFullYear()]})})}const S={boxShadow:"rgba(0, 0, 0, 0.24) 0px 2px 8px",width:"calc(100vw - 285px)",marginLeft:"285px"},k={width:"100vw",marginLeft:"0px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 2px 8px"};function z(){const a=x(r=>r.windowWidth.windowWidth),[n,o]=d.useState(!1),h=f();return e.jsxs("div",{className:"top-section bg-skyBlue fixed top-0 flex items-center justify-between py-3 px-4",style:a<="768"?k:S,children:[e.jsx("button",{className:"mobile-menu",onClick:()=>h(c()),children:e.jsx("span",{className:"toggle-btn cursor-pointer",children:e.jsx(t,{icon:"fa6-solid:list",fontSize:20})})}),e.jsxs("div",{className:"heading-wrapper flex items-center gap-3 justify-center",children:[e.jsx("div",{className:"img-container hidden sm:block absolute sm:static",children:e.jsx("img",{src:"/image/court-house.png",alt:"court-house",width:22})}),e.jsx("a",{href:"/admin/dashboard",className:"text-xl",children:"इजलास"}),e.jsx("div",{className:"img-container hidden sm:block absolute sm:static",children:e.jsx("img",{src:"/image/court-house.png",alt:"court-house",width:22})})]}),e.jsxs("div",{className:"login-ser-wrapper flex items-center relative cursor-pointer",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[e.jsx(t,{icon:"solar:user-circle-linear",fontSize:18,className:"mr-2"}),e.jsx("h4",{children:"admin"}),e.jsx(t,{icon:"iconamoon:arrow-down-2",fontSize:20}),n&&e.jsxs("div",{style:{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",fontSize:"14px"},className:"user-options text-text-col font-bold absolute top-10 right-1 flex flex-col gap-2 w-fit min-w-44 px-2 py-1 bg-white5",children:[e.jsx(m,{to:"/admin/change/password",className:"px-1 py-2",children:"पासवर्ड परिवर्तन गर्नुहोस्"}),e.jsx("hr",{}),e.jsx(m,{to:"/logout",className:"px-1 py-1",children:"लगआउट"})]})]})]})}const L={marginLeft:285,marginTop:25,height:"100%",overflowY:"auto"},W={marginTop:25,height:"100%",overflowY:"auto"};function E(){const a=x(o=>o.windowWidth.windowWidth),n=f();return d.useEffect(()=>{const o=()=>{n(g(window.innerWidth))};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[n]),e.jsxs("div",{className:"content-wrapper overflow-hidden",children:[e.jsx(z,{}),e.jsx(y,{}),e.jsx("div",{className:"body block pl-4 pt-12 pb-20 overflow-y-scroll",style:a<=768?W:L,children:e.jsx(b,{})}),e.jsx(v,{})]})}export{E as default};