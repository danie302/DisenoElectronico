(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/img1.c309e74a.png"},33:function(e,t,a){e.exports=a.p+"static/media/syrus.8f14ad15.png"},34:function(e,t,a){e.exports=a.p+"static/media/gpstrack.5417b347.png"},37:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(17),s=a(75),o=a(21);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(77),r=a(74),m=a(5),u=a(6),h=a(8),p=a(7),b=a(9),d=(a(48),a(14)),g=a(2),v=a(76),f=(a(49),a(18)),C=a.n(f),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={mobile:!0},a.navClick=function(e){a.setState({mobile:!0}),a.props.history.push(e)},a.handleClick=function(){a.setState({mobile:!a.state.mobile})},a.onChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onClick=function(e){a.props.history.push(e)},a.renderMobileButtons=function(){return i.a.createElement("div",{className:"Navbar-Mobile-Links"},i.a.createElement(O,{push:a.navClick.bind(Object(g.a)(Object(g.a)(a)),"/"),name:"Inicio",icon:"fa-home"}),i.a.createElement(O,{push:a.navClick.bind(Object(g.a)(Object(g.a)(a)),"/gps"),name:"GPS",icon:"fa-tags"}),i.a.createElement(O,{push:a.navClick.bind(Object(g.a)(Object(g.a)(a)),"/contact"),name:"Contacto",icon:"fa-envelope"}))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Navbar-Main"},i.a.createElement("img",{className:"Navbar-Main--Logo",src:C.a,alt:"Truck Tracker Logo"}),i.a.createElement("div",{className:"Navbar-Main--Contact"},i.a.createElement("div",{className:"Navbar-Main--Contact--Field"},i.a.createElement("i",{className:"fab fa-whatsapp Navbar-Main--Contact--Icon"}),"317-382-2733"))),i.a.createElement("div",{className:"Navbar-Links"},i.a.createElement(j,{push:this.navClick.bind(this,"/"),name:"Inicio",icon:"fa-home"}),i.a.createElement(j,{push:this.navClick.bind(this,"/gps"),name:"GPS",icon:"fa-globe"}),i.a.createElement(j,{push:this.navClick.bind(this,"/contact"),name:"Contacto",icon:"fa-envelope"})),i.a.createElement("div",{className:"Navbar-Mobile"},i.a.createElement("i",{onClick:this.handleClick,className:"fas fa-bars Navbar-Mobile--Menu"})),this.state.mobile?null:this.renderMobileButtons())}}]),t}(n.Component);function j(e){return i.a.createElement("div",{onClick:e.push,className:"LinkButton"},i.a.createElement("i",{className:"fas LinkButton--Icon "+e.icon}),e.name)}function O(e){return i.a.createElement("div",{onClick:e.push,className:"LinkMobileButton"},i.a.createElement("i",{className:"fas LinkMobileButton--Icon "+e.icon}),e.name)}var N=Object(v.a)(E),k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.children;return i.a.createElement("div",{className:"App"},i.a.createElement(N,null),e)}}]),t}(n.Component),x=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"carouselItem"},i.a.createElement("img",{src:this.props.image,alt:"",className:"carouselImage"}),i.a.createElement("div",{className:"carouselTextCover"}),i.a.createElement("h1",{className:"titleImage"},this.props.title),i.a.createElement("p",{className:"textImage"},this.props.text))}}]),t}(n.Component),y=(a(53),a(33)),I=a.n(y),M=a(34),w=a.n(M),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={images:[{url:C.a,title:"Image 1",text:"This is the first image",index:0},{url:I.a,title:"Image 2",text:"This is the second image",index:1},{url:w.a,title:"Image 3",text:"This is the third image",index:2}],image:{url:C.a,title:"Image 1",text:"This is the first image",index:0}},a.nextImage=a.nextImage.bind(Object(g.a)(Object(g.a)(a))),a.prevImage=a.prevImage.bind(Object(g.a)(Object(g.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"nextImage",value:function(){var e=this.state.image.index+1;3===e&&(e=0),-1===e&&(e=2),this.setState({image:this.state.images[e]})}},{key:"prevImage",value:function(){var e=this.state.image.index-1;3===e&&(e=0),-1===e&&(e=2),this.setState({image:this.state.images[e]})}},{key:"render",value:function(){return i.a.createElement("div",{className:"carouselBox"},i.a.createElement(x,{image:this.state.image.url,title:this.state.image.title,text:this.state.image.text}),i.a.createElement("div",{className:"carouselControlLeft",onClick:this.prevImage},i.a.createElement("i",{className:"fas fa-angle-double-left"})),i.a.createElement("div",{className:"carouselControlRight",onClick:this.nextImage},i.a.createElement("i",{className:"fas fa-angle-double-right"})))}}]),t}(n.Component),B=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(S,null))}}]),t}(n.Component),A=a(22),T=(a(68),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={selectedPlace:"Hawai",lat:10.99304,lon:-74.8281,zoom:18},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onMouseMove",value:function(){this.setState({lon:this.state.lon+1e-4,lat:this.state.lat+1e-4})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"Box"},i.a.createElement("input",{placeholder:"ID del camion",className:"Box--Search"}),i.a.createElement("div",{className:"Box--Button"},"Seguir")),i.a.createElement(A.Map,{style:{width:"60%",height:"60%",position:"relative",left:"20%"},google:this.props.google,zoom:this.state.zoom,onMousemove:this.onMouseMove.bind(this),initialCenter:{lat:this.state.lat,lng:this.state.lon},center:{lat:this.state.lat,lng:this.state.lon}},i.a.createElement(A.Marker,{onClick:this.onMarkerClick,name:"Current location",position:{lat:this.state.lat,lng:this.state.lon}})))}}]),t}(n.Component)),H=Object(A.GoogleApiWrapper)({apiKey:"AIzaSyAaUgFuVypDeWug-2htEXKEssI7TpifSg8"})(T),L=(a(69),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={name:"",email:"",phone:"",message:""},a.onChange=a.onChange.bind(Object(g.a)(Object(g.a)(a))),a.onSubmit=a.onSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,email:this.state.email,phone:this.state.phone,message:this.state.message};console.log(t)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Contact"},i.a.createElement("span",{className:"Contact--Title"},"Cont\xe1ctanos"),i.a.createElement("p",{className:"Contact--Desc"},"Siempre atentos para brindarte el mejor servicio de localizaci\xf3n en tiempo real."),i.a.createElement("div",{className:"Contact--Holder"},i.a.createElement("div",{className:"Contact--Holder--Info"},i.a.createElement("input",{className:"Contact--Holder--Info--Input",type:"text",name:"name",value:this.state.name,placeholder:"Nombre",onChange:this.onChange}),i.a.createElement("input",{className:"Contact--Holder--Info--Input",type:"text",name:"email",value:this.state.email,placeholder:"Correo",onChange:this.onChange}),i.a.createElement("input",{className:"Contact--Holder--Info--Input",type:"text",name:"phone",value:this.state.phone,placeholder:"Tel\xe9fono / Celular",onChange:this.onChange}),i.a.createElement("textarea",{className:"Contact--Holder--Info--InputArea",type:"text",name:"message",value:this.state.message,placeholder:"Dejanos tus dudas, comentarios o solicitudes aqui.",onChange:this.onChange}),i.a.createElement("div",{onClick:this.onSubmit,className:"Contact--Holder--Info--Send"},"Enviar")),i.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7039637248868!2d-74.79069723548722!3d10.985702992179752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d64f7e57309%3A0x5150b0e3785b60da!2sParque+Central%2C+Barranquilla%2C+Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1545494967466",frameBorder:"0",className:"Contact--Holder--Map",title:"Map Location",allowFullScreen:!0,style:{borderRadius:"5px"}}))))}}]),t}(n.Component)),D=Object(o.b)(function(e){return{message:e.message}})(L),F=function(){return i.a.createElement(k,null,i.a.createElement(l.a,null,i.a.createElement(r.a,{path:"/",exact:!0,component:B}),i.a.createElement(r.a,{path:"/gps",exact:!0,component:H}),i.a.createElement(r.a,{path:"/contact",exact:!0,component:D})))},z=a(11),P=a(35),W=a(36),q={message:""},G=Object(z.c)({coordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return Object(W.a)({},e,{message:t.payload});default:return e}}}),J=[P.a],K=Object(z.e)(G,{},Object(z.d)(z.a.apply(void 0,J)));a(70);Object(c.render)(i.a.createElement(o.a,{store:K},i.a.createElement(s.a,null,i.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.354705e0.chunk.js.map