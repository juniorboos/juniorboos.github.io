import{S as c,H as d}from"./section-title.86339130.js";import{s as o,j as i,a as e,T as r}from"./index.48245a28.js";const p=o("section",{display:"flex",flexDirection:"column",justifyContent:"center",gap:"$8"}),m=o("div",{display:"flex",justifyContent:"center",gap:"$8",flexWrap:"wrap",marginBottom:"$8","@bp2":{flexWrap:"nowrap"}}),h=o("div",{display:"flex",flexDirection:"column",wordWrap:"break-word",backgroundColor:"$backgroundAccent",borderRadius:"$1",overflow:"hidden",boxShadow:"2px 5px 5px rgba(0, 0, 0, 0.5)","& img":{width:"100%"},"@bp2":{maxWidth:360}}),u=o("div",{display:"flex",flexDirection:"column",padding:"$5",gap:"$2","& a":{width:"fit-content","&:hover":{textDecoration:"underline"}}}),g=o("div",{display:"flex",justifyContent:"space-between",maxWidth:250,"& a":{color:"$textSecondary"}});var x={title:"My articles",articles:[{imgUrl:"https://miro.medium.com/max/720/1*kej2WmeUuzxtY37oqQc_5Q.webp",imgAlt:"Hero with a React suit holding javascript tools in the shape of energy",title:"The Ultimate Guide to Setting Up Your React Component Library",postedBy:"xgeeks",description:"Have you ever had that components folder that kept getting copied from one project to another just to reuse good custom components? ...",url:"https://medium.com/xgeeks/the-ultimate-guide-to-setting-up-your-react-component-library-549c43c1adc9"}]};const b=n=>{const{title:a,articles:l}=x;return i(p,{...n,children:[e(c,{name:a}),e(m,{children:l.map((t,s)=>i(h,{children:[e("img",{src:t.imgUrl,loading:"lazy",alt:t.imgAlt}),i(u,{children:[e(r,{weight:"bold",children:t.title}),e(g,{children:i(r,{size:"s",children:["Posted by: ",t.postedBy]})}),e(d,{small:!0}),e(r,{children:t.description}),e(r,{as:"a",color:"accent",href:t.url,children:"Read More..."})]})]},`${t.title}-${s}`))})]})};export{b as default};
