import{r as k,s as a,b as S,j as i,a as e,T as r,A as C}from"./index.be86051b.js";import{S as D,H as j}from"./section-title.b9f52c0d.js";import{r as s,n as y,j as l,t as c,s as x,f as d,a as u,b as p,g as h,c as g,d as v,e as A,m as I,h as T,i as L,k as P,l as W,o as z}from"./technologies.a9823ab2.js";var F=k.GenIcon,J=function(m){return F({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}}]})(m)};const q=a("section",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"$8"}),E=a("div",{display:"flex",flexDirection:"column",width:"100%",maxWidth:"100%",gap:"$8","@bp2":{flexDirection:"row"}}),G=a("ul",{listStyle:"none",display:"flex",backgroundColor:"$backgroundSecondary",overflow:"auto",height:"fit-content",borderTopWidth:"$line",borderTopStyle:"$solid",borderTopColor:"$textSecondary","@bp2":{borderTopWidth:0,borderLeftWidth:"$line",borderLeftStyle:"$solid",borderLeftColor:"$textSecondary",flexDirection:"column",width:"auto",overflow:"initial"}}),H=a("li",{color:"$textSecondary",display:"flex",alignItems:"center",padding:"$2 $4",cursor:"pointer","&:hover":{color:"$textPrimary"},variants:{active:{true:{color:"$textPrimary",backgroundColor:"$backgroundAccent"}}}}),M=a("div",{display:"flex",flexDirection:"column",gap:"$2"}),R=a("ul",{display:"flex",flexDirection:"column",gap:"$4",marginTop:"$4","& li":{display:"flex",gap:"$4"},"& svg":{fill:"$primary",minWidth:24,height:24}}),_=a("ul",{display:"flex",alignItems:"center",gap:"$3",transition:"$default",flexWrap:"wrap",listStyle:"none","& svg":{fill:"$textSecondary",padding:"$1",borderRadius:"$1","&:hover":{fill:"$textPrimary",backgroundColor:"$backgroundAccent",transform:"scale(1.1)"}}});var B={title:"Where I have worked",companies:[{name:"xgeeks",url:"https://xgeeks.io",role:"Javascript Engineer",period:"Aug 2021 - Present",technologies:[s,y,l,c,x,d,u,p,h,g],responsabilities:["Work with project managers and other engineers to understand project requirements and deliver high-quality solutions.","Write clean, maintainable, and scalable code that meets client needs and project deadlines.","Communicate effectively with clients to understand their needs and provide technical solutions."]},{name:"Cazoo",url:"https://www.cazoo.co.uk",role:"Javascript Engineer",period:"Aug 2021 - Dec 2022",technologies:[s,y,l,c,x,d,u,p,h,g],responsabilities:["Develop and maintain the company's component libraries, ensuring accessibility, testing and cross-browser compatibility.","Document design system components, usage, and best practices for internal stakeholders.","Collaborate with designers, product managers, and engineers to ensure consistency and quality across all products."]},{name:"Glartek",url:"https://glartek.com",role:"FullStack Developer",period:"Feb 2021 - Aug 2021",technologies:[s,l,c,v,A,d,I,p,T],responsabilities:["Implement front-end features, including component-based UI design, routing, state management, and API integration.","Ensure that developed applications are optimized for augmented reality and remote assistance use cases.","Debug and troubleshoot code, and resolve technical issues in a timely manner."]},{name:"Freelancing",url:"https://www.linkedin.com/in/milton-boos-junior/",role:"FullStack Developer",period:"Jan 2020 - Jan 2021",technologies:[s,L,l,c,v,P,W,d,z,u,p,h,g],responsabilities:["Ensure that the developed platform meets the client's needs, including features such as task management, document sharing, and internal communication.","Implement responsive marketing focused pages with animations.","Provide dedicated maintanance for each of the products."]}]};const O=f=>{const{title:m,companies:b}=B,[t,$]=S.exports.useState(b[0]);return i(q,{...f,children:[e(D,{name:m}),i(E,{children:[e(G,{children:b.map(n=>e(H,{active:n.name===t.name,onClick:()=>$(n),children:n.name},n.name))}),i(M,{children:[i(r,{size:"xl",weight:"bold",children:[t.role," ",i(r,{size:"xl",color:"accent",as:"a",href:t.url,target:"_blank",rel:"noopener noreferrer",children:["@",t.name]})]}),e(r,{weight:"bold",children:t.period}),e(j,{small:!0,css:{my:"1rem"}}),e(_,{"aria-label":"Technologies",children:t.technologies.map(({Icon:n,name:o,url:w})=>e("li",{children:e(C,{href:w,"aria-label":o,children:e(n,{size:32,title:o,"aria-hidden":!0})})},`${t.name}-${o}`))}),e(R,{"aria-label":"Responsabilities",children:t.responsabilities.map((n,o)=>i("li",{children:[e(J,{}),e(r,{children:n})]},o))})]})]})]})};export{O as default};