(this.webpackJsonpavito=this.webpackJsonpavito||[]).push([[0],{166:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n(0),a=n.n(o),i=n(13),c=n.n(i),s=(n(166),n(34)),l=n(16),b=n(320),h=Object(l.b)({form:b.a}),u=Object(l.c)(h),d=n(84),j=n(31),p=n(32),m=n(36),f=n(35),v=n(143),O=n.n(v),g=n(144),x=n(309),C=n(313),y=n(321),k=function(e){var t=e.formColor,n=e.bannerRef,o=e.description;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{variant:"h6",component:"h2",style:{color:"white"},children:"\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440:"}),Object(r.jsx)("div",{ref:n,style:{height:"250px",width:"230px",margin:"0 auto"},children:Object(r.jsx)("a",{href:"https://avito.ru",style:{textDecoration:"none"},children:Object(r.jsx)("div",{style:{backgroundImage:"url(https://i.vgy.me/JtUN9L.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",borderRadius:"4px"},children:Object(r.jsx)("div",{style:{color:t,padding:"70% 2% 0",wordWrap:"break-word",overflow:"hidden",lineHeight:"1.3em",height:"3.9em"},children:o})})})})]})},T=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsx)(k,{description:this.props.formValues.values.description,formColor:this.props.formValues.values.color,bannerRef:this.props.bannerRef})}}]),n}(a.a.Component),S=Object(s.b)((function(e){return{formValues:{values:Object(y.a)("banner")(e,"description","color")}}}),null)(T),R=n(317),w=n(319),P=n(318),I=n(282),M=n(312),H=n(152),L=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={displayColorPicker:!1},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleClose=function(){e.setState({displayColorPicker:!1})},e.handleChangeComplete=function(t){e.props.onColorChange(t.hex)},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(I.a,{fullWidth:!0,variant:"contained",type:"button",onClick:this.handleClick,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430"}),this.state.displayColorPicker?Object(r.jsxs)("div",{style:{position:"absolute",zIndex:"2"},children:[Object(r.jsx)("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:this.handleClose}),Object(r.jsx)(H.a,{onChangeComplete:this.handleChangeComplete,width:"inherit"})]}):null]})}}]),n}(a.a.Component),W=n(315),z=function(e){return Object(r.jsx)(W.a,Object(d.a)({size:"small",label:e.placeholder,variant:"outlined",fullWidth:!0},e.input))},B=function(e){var t=e.handleSubmit,n=e.handleColorChange,o=e.saveImgToPng,a=e.saveHTML;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)(P.a,{mt:2,mb:2,children:[Object(r.jsx)(w.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043d\u0435\u0440\u0430",name:"description",type:"text",component:z}),Object(r.jsx)(P.a,{mt:.5,children:Object(r.jsx)(w.a,{name:"color",component:L,onColorChange:n})})]}),Object(r.jsxs)(M.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"contained",fullWidth:!0,children:[Object(r.jsx)(I.a,{type:"button",onClick:o,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u0430\u043d\u043d\u0435\u0440 \u0432 png"}),Object(r.jsx)(I.a,{type:"button",onClick:a,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u0430\u043d\u043d\u0435\u0440 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"}),Object(r.jsx)(I.a,{type:"submit",children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0431\u0430\u043d\u043d\u0435\u0440\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430 (json)"})]})]})})},F=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleColorChange=function(t){e.props.change("color",t)},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsx)(B,{onSubmit:this.props.onSubmit,handleColorChange:this.handleColorChange,saveImgToPng:this.props.saveImgToPng,saveHTML:this.props.saveHTML,handleSubmit:this.props.handleSubmit})}}]),n}(a.a.Component),J=Object(R.a)({form:"banner"})(F),A=function(e){var t=e.bannerRef,n=e.onSubmit,o=e.saveImgToPng,a=e.saveHTML;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{variant:"h4",component:"h1",align:"center",style:{color:"white"},children:"\u0411\u0430\u043d\u043d\u0435\u0440 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"}),Object(r.jsxs)(C.a,{direction:"column",justify:"center",alignItems:"center",style:{backgroundColor:"#2C2F34",maxWidth:"280px",borderRadius:"4px"},children:[Object(r.jsx)(S,{bannerRef:t}),Object(r.jsx)(J,{onSubmit:n,saveImgToPng:o,saveHTML:a})]})]})},V=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).onSubmit=function(e){var t=Object(d.a)({},e);navigator.clipboard.writeText(JSON.stringify(t))},r.saveImgToPng=function(){O()(r.bannerRef.current,{useCORS:!0}).then((function(e){e.toBlob((function(e){Object(g.saveAs)(e,"banner.png")}))}))},r.saveHTML=function(){navigator.clipboard.writeText(r.bannerRef.current.outerHTML.replace(/&quot;/g,""))},r.bannerRef=a.a.createRef(),r}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsx)(A,{onSubmit:this.onSubmit,saveImgToPng:this.saveImgToPng,saveHTML:this.saveHTML,bannerRef:this.bannerRef})}}]),n}(a.a.Component),N=n(314),q=n(153),D=Object(q.a)({overrides:{MuiButton:{root:{fontSize:"0.5rem"}},MuiContainer:{root:{paddingTop:"8px",paddingBottom:"16px"}}}});c.a.render(Object(r.jsx)(s.a,{store:u,children:Object(r.jsx)(N.a,{theme:D,children:Object(r.jsx)(V,{})})}),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.b851d963.chunk.js.map