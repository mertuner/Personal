(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1:function(e,t,n){e.exports={Container:"containers_Container__2m-pg",MasterContainer:"containers_MasterContainer__VeYb_",HeroText:"containers_HeroText__PDNFD",JobText:"containers_JobText__2VwVv",ProjectsContainer:"containers_ProjectsContainer__2m1b0",ProjectsInnerContainer:"containers_ProjectsInnerContainer__2Mq6s",ButtonContainer:"containers_ButtonContainer__2M8Fv"}},20:function(e,t,n){e.exports={App:"App_App__16ZpL"}},23:function(e,t,n){e.exports=n.p+"static/media/eye.4b4cf493.svg"},26:function(e,t,n){e.exports=n(65)},31:function(e,t,n){},5:function(e,t,n){e.exports={Button:"ui_Button__zz-M-",RightArrow:"ui_RightArrow__3j8Qd",rightAnimation:"ui_rightAnimation__1-4rf",ProjectContainer:"ui_ProjectContainer__1e3m0"}},58:function(e,t,n){e.exports=n.p+"static/media/cat.76d344f0.svg"},59:function(e,t,n){var a={"./cm.png":60,"./mov.png":61,"./pq.png":62,"./prt.png":63,"./rlx.png":64};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=59},60:function(e,t,n){e.exports=n.p+"static/media/cm.a19a7da0.png"},61:function(e,t,n){e.exports=n.p+"static/media/mov.5508e5b7.png"},62:function(e,t,n){e.exports=n.p+"static/media/pq.8f733e8e.png"},63:function(e,t,n){e.exports=n.p+"static/media/prt.d278e653.png"},64:function(e,t,n){e.exports=n.p+"static/media/rlx.c5422c15.png"},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=(n(31),n(17)),l=n(18),s=n(24),m=n(19),p=n(25),u=n(20),h=n.n(u),f=n(5),d=n.n(f),g=n(21),_=n.n(g),v={border:"1px solid white",backgroundColor:"black"},E=function(e){return r.a.createElement("div",{onClick:e.clicked,className:d.a.Button,style:v},r.a.createElement("p",null,e.children),r.a.createElement("div",{className:d.a.RightArrow},r.a.createElement(_.a,{icon:"arrow_forward",color:"#FCFCFC",size:22})))},b=n(22),k=n.n(b),x=n(1),w=n.n(x),y=r.a.forwardRef((function(e,t){return r.a.createElement("section",{ref:t,className:w.a.Container},r.a.createElement("div",{className:w.a.MasterContainer},r.a.createElement("p",{className:w.a.HeroText},"Hello. I'm Mert."),r.a.createElement("p",{className:w.a.JobText},"I'm a Front End Engineer. React Enthusiast."),r.a.createElement("div",{className:w.a.ButtonContainer},r.a.createElement(E,{clicked:e.clicked},"My Projects"),r.a.createElement(E,null,r.a.createElement("a",{target:"_blank",style:{color:"white",textDecoration:"none"},href:"https://github.com/mertuner"},"Github"))),r.a.createElement("p",null,"E-mail: ","   uner_mert@yahoo.com")),r.a.createElement(k.a,{width:"100%",height:"100%",color:"#6DECB9",style:{position:"absolute",top:0,left:0}}))})),C=(n(58),n(23)),j=n.n(C),R=function(e){var t=n(59)("./".concat(e.img,".png"));return r.a.createElement("div",{className:d.a.ProjectContainer},r.a.createElement("div",{style:{height:"80%",width:"100%",backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),r.a.createElement("div",{style:{width:"100%",height:"20%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}},r.a.createElement("a",{target:"_blank",style:{fontSize:"1em",fontWeight:"500",color:"black",textDecoration:"none"},href:e.gLink},"</>"),r.a.createElement("a",{target:"_blank",style:{fontSize:"0.9em",fontWeight:"300",color:"black",textDecoration:"none"},href:e.vLink},r.a.createElement("div",{style:{width:"25px",height:"25px",backgroundImage:"url(".concat(j.a,")")}}))))},P=r.a.forwardRef((function(e,t){return r.a.createElement("section",{className:w.a.ProjectsContainer,ref:t},r.a.createElement("div",{style:{marginTop:"25px",width:"85%",display:"flex",justifyContent:"flex-start",alignItems:"center"}},r.a.createElement("h3",null,"My Projects"),r.a.createElement("div",{style:{width:"2px",height:"30px",marginLeft:"10px",backgroundColor:"black"}})),r.a.createElement("div",{style:{width:"85%",height:"1px",backgroundColor:"#cccccc",margin:"20px 0 20px 0"}}),r.a.createElement("div",{className:w.a.ProjectsInnerContainer},r.a.createElement(R,{img:"cm",vLink:"https://personal-musical-therapy.firebaseapp.com/",gLink:"https://github.com/mertuner/Personal-Musical-Affirmations"}),r.a.createElement(R,{img:"pq",vLink:"https://www.projectquality.app/",gLink:"https://github.com/mertuner/project-quality"}),r.a.createElement(R,{img:"rlx",vLink:"https://mertuner.github.io/RelaxeStatic/",gLink:""}),r.a.createElement(R,{img:"prt",vLink:"https://www.mertuner.com",gLink:"https://github.com/mertuner/RelaxeStatic"})))})),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={currentPage:"welcome",projectRef:r.a.createRef(),appRef:r.a.createRef()},n.clickHandler=function(){n.state.projectRef.current.scrollIntoView(!0,{behavior:"smooth"}),console.log("clicked")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state.appRef.current.scrollIntoView(!0,{behavior:"smooth"})}},{key:"render",value:function(){return r.a.createElement("div",{className:h.a.App},r.a.createElement(y,{ref:this.state.appRef,clicked:this.clickHandler}),r.a.createElement(P,{ref:this.state.projectRef}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1a0fc064.chunk.js.map