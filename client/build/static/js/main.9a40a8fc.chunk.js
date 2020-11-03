(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/artist.b5c25cac.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/events.b4626146.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/music.b8b28f46.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/artist.b5c25cac.jpg"},38:function(e,a,t){e.exports=t(70)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(31),r=t.n(c),s=(t(43),t(6)),i=t(1),m=t(8),o=(t(44),function(e){return l.a.createElement("div",{className:"center"},l.a.createElement("div",{id:"search-area",className:"col l5 s6 offset-s3 offset-l3"},l.a.createElement("form",{action:"#"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"search-artist",type:"text",className:"materialize-textarea",onChange:e.handleInputChange}),l.a.createElement("label",{htmlFor:"search-artist"},"Search Artist")))),l.a.createElement("div",{className:"col l2 s12",style:{paddingTop:"15px"}},l.a.createElement("div",{id:"search-button",className:"btn waves-effect waves-light",onClick:e.handleFormSubmit,type:"submit"}," Search")))}),d=(t(45),t(32)),u=t.n(d),E=t(33),p=t.n(E),g=t(34),v=t.n(g);var h=function(){return l.a.createElement("div",null,l.a.createElement("section",{id:"photos",className:"container section",style:{marginTop:"30px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6 l4 push-l1 xl4 push-xl1"},l.a.createElement("img",{src:u.a,alt:"Artist on Stage",className:"responsive-img z-depth-2"})),l.a.createElement("div",{className:"col s12 m6 l6 offset-l1"},l.a.createElement("h3",{className:"indigo-text text-darken 4"},"Search Your Favorite Artists"),l.a.createElement("p",null,"Search for your favorite artists to find out their albums, top songs, and upcoming events around the world."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6 l4 push-l7 xl4 push-xl8"},l.a.createElement("img",{src:p.a,alt:"Concert Event",className:"responsive-img z-depth-2"})),l.a.createElement("div",{className:"col s12 m6 l6 pull-l4 offset-l1"},l.a.createElement("h3",{className:"indigo-text text-darken 4"},"Look for Upcoming Events"),l.a.createElement("p",null,"Look for upcoming events for artists you like. Find events all over the world or right in your city! Follow specific artists to see they have new events."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6 l4 push-l1 xl4 push-xl1"},l.a.createElement("img",{src:v.a,alt:"Artist Playing Songs",className:"responsive-img z-depth-2"})),l.a.createElement("div",{className:"col s12 m6 l6 offset-l1"},l.a.createElement("h3",{className:"indigo-text text-darken 4"},"Find An Artist's Top Songs"),l.a.createElement("p",null,"When searching for your artists, find out their albums and their top songs. Listen to their song and find new songs you haven't heard from them.")))))};t(46);var f=function(e){return l.a.createElement("div",{className:"row center header",style:{marginTop:"60x"}},e.children)};t(47);var N=function(e){var a=e.name,t=e.bio,n=e.genre,c=e.song1,r=e.song2,s=e.song3,i=e.song4,m=e.song5,o=e.image;return l.a.createElement("div",{id:"artist"},l.a.createElement("div",{className:"container z-depth-1",style:{marginTop:"50px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 l2 center"},l.a.createElement("img",{id:"artist-image",className:"z-depth-2",style:{marginTop:"20px",maxWidth:"150px"},src:o,alt:"Searched Artist"}),l.a.createElement("h4",{id:"artist-name"},a),l.a.createElement("p",null," ",l.a.createElement("i",{id:"genre"},n)," ")),l.a.createElement("div",{className:"col s12 l10"},l.a.createElement("h6",null,l.a.createElement("strong",null,"Biography")),l.a.createElement("p",{id:"summary"},t)),l.a.createElement("div",{className:"col s12 l6"},l.a.createElement("h6",null,l.a.createElement("strong",null,"Top Songs")),l.a.createElement("ul",{id:"top-songs",className:"collection"},l.a.createElement("li",{id:"song-0",className:"collection-item"},"1. ",c),l.a.createElement("li",{id:"song-1",className:"collection-item"},"2. ",r),l.a.createElement("li",{id:"song-2",className:"collection-item"},"3. ",s),l.a.createElement("li",{id:"song-3",className:"collection-item"},"4. ",i),l.a.createElement("li",{id:"song-4",className:"collection-item"},"5. ",m))))))};var b=function(e){var a=e.length;return l.a.createElement("div",null,0===a?l.a.createElement("div",{className:"container"},l.a.createElement("h2",{style:{paddingLeft:"20%"}},"No Upcoming Events Available")):l.a.createElement("div",{id:"events-searched"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{style:{paddingLeft:"10%"}},"Events: ",a))))};t(48);var y=function(e){var a=e.location,t=e.date,n=e.url,c=e.name;return l.a.createElement("section",{id:"events-searched"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"events-area",className:"row"},l.a.createElement("div",{className:"col s12 m12 l10 push-l1 xl8 push-xl2"},l.a.createElement("div",{className:"card blue-grey darken-1"},l.a.createElement("div",{className:"card-image"},l.a.createElement("button",{className:"btn-floating waves-effect waves-light red right",onClick:function(){!function(e){var a=e.location,t=e.date,n=e.url,l=e.name;fetch("/savedEvents",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({location:a,date:t,url:n,name:l})}).then((function(e){return console.log("Save complete!"),e.json()}))}({location:a,date:t,url:n,name:c})},style:{marginRight:"10px",marginTop:"10px"}},l.a.createElement("i",{className:"material-icons"},"add")),l.a.createElement("button",{className:"btn-floating waves-effect waves-light right",style:{marginRight:"10px",marginTop:"10px"}},l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"material-icons"},"shopping_cart")))),l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title",style:{fontSize:"30px"}},a),l.a.createElement("p",{style:{fontSize:"16px"}},t)))))))},w=t(11),x=t.n(w),k="4228a7dc9f02d04d2a06295ef5d3ac49",S="c9c5bd4d98a900cc7acff614d4638962",j=function(e){return x.a.get("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+e+"&api_key="+k+"&format=json")},O=function(e){return x.a.get("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+e+"&api_key="+k+"&format=json")},A=function(e){return x.a.get("https://rest.bandsintown.com/artists/"+e+"/?app_id="+S)},T=function(e){return x.a.get("https://rest.bandsintown.com/artists/"+e+"/events/?app_id="+S)};var z=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({name:"",bio:"",genre:""}),s=Object(m.a)(r,2),i=s[0],d=s[1],u=Object(n.useState)({song1:"",song2:"",song3:"",song4:"",song5:""}),E=Object(m.a)(u,2),p=E[0],g=E[1],v=Object(n.useState)({image:""}),w=Object(m.a)(v,2),x=w[0],k=w[1],S=Object(n.useState)([]),z=Object(m.a)(S,2),F=z[0],L=z[1];return l.a.createElement("div",null,l.a.createElement(f,null,l.a.createElement(o,{handleFormSubmit:function(e){e.preventDefault(),j(t).then((function(e){d({name:e.data.artist.name,bio:e.data.artist.bio.summary,genre:e.data.artist.tags.tag[0].name})})),O(t).then((function(e){g({song1:e.data.toptracks.track[0].name,song2:e.data.toptracks.track[1].name,song3:e.data.toptracks.track[2].name,song4:e.data.toptracks.track[3].name,song5:e.data.toptracks.track[4].name})})),A(t).then((function(e){k({image:e.data.image_url})})),T(t).then((function(e){L(F.concat(e.data)),console.log(e.data)}))},handleInputChange:function(e){e.preventDefault(),c(e.target.value)}})),i.name?l.a.createElement("div",null,l.a.createElement(N,{name:i.name,bio:i.bio,genre:i.genre,image:x.image,song1:p.song1,song2:p.song2,song3:p.song3,song4:p.song4,song5:p.song5}),l.a.createElement(b,{length:F.length})):l.a.createElement(h,null),F.length?F.map((function(e){return l.a.createElement(y,{key:e.id,id:e.id,location:e.venue.location,date:new Date(Date.parse(e.datetime)).toString(),url:e.url,name:i.name})})):l.a.createElement("br",null))};var F=function(e){e.id;var a=e.location,t=e.date,n=e.url,c=e.name;return l.a.createElement("section",{id:"events-searched"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"events-area",className:"row"},l.a.createElement("div",{className:"col s12 m12 l10 push-l1 xl8 push-xl2"},l.a.createElement("div",{className:"card blue-grey darken-1"},l.a.createElement("div",{className:"card-image"},l.a.createElement("button",{className:"btn-floating waves-effect waves-light red right",onClick:function(){},style:{marginRight:"10px",marginTop:"10px"}},l.a.createElement("i",{className:"material-icons"},"remove")),l.a.createElement("button",{className:"btn-floating waves-effect waves-light right",style:{marginRight:"10px",marginTop:"10px"}},l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"material-icons"},"shopping_cart")))),l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title",style:{fontSize:"30px",fontWeight:"600"}},c),l.a.createElement("p",{style:{fontSize:"16px"}},l.a.createElement("span",{style:{textDecorationLine:"underline"}},"Location"),": ",a),l.a.createElement("p",{style:{fontSize:"16px"}},l.a.createElement("span",{style:{textDecorationLine:"underline"}},"Date"),": ",t)))))))};var L=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){fetch("/savedEvents",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),c(t.concat(e))}))}),[]),l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(b,null),t.length?t.map((function(e){return l.a.createElement(F,{key:e.id,location:e.location,date:e.date,url:e.url,name:e.name})})):l.a.createElement("br",null))};var C=function(e){return l.a.createElement("div",{className:"row"},e.children)},_=function(){return l.a.createElement("div",{className:"row center"},l.a.createElement(f,null),l.a.createElement(C,null,l.a.createElement("h1",null,"404 Page Not Found")))},D=t(12),R=t(13),J=t(15),M=t(14),W=(t(17),function(e){Object(J.a)(t,e);var a=Object(M.a)(t);function t(){return Object(D.a)(this,t),a.apply(this,arguments)}return Object(R.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"nav-wrapper black z-depth-5"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"/",className:"brand-logo"},l.a.createElement("strong",null,"Spot-A-Show")),l.a.createElement("a",{href:"/",className:"sidenav-trigger","data-target":"mobile-links"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/",className:"waves-effect"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/events",className:"waves-effect"},"Events"))))))}}]),t}(n.Component)),H=t(36),P=t.n(H),q=t(37),B=t.n(q),I=function(e){Object(J.a)(t,e);var a=Object(M.a)(t);function t(){return Object(D.a)(this,t),a.apply(this,arguments)}return Object(R.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");P.a.Sidenav.init(e,{})}))}},{key:"render",value:function(){return l.a.createElement("ul",{className:"sidenav",id:"mobile-links"},l.a.createElement("li",null,l.a.createElement("div",{className:"user-view",style:{height:"100px"}},l.a.createElement("div",{className:"background"},l.a.createElement("img",{src:B.a,alt:"Artist on Stage",className:"responsive-img"})),l.a.createElement("span",{className:"white-text center name",style:{fontSize:"20px"}},"Spot-A-Show"))),l.a.createElement("li",null,l.a.createElement("div",{className:"divider"})),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/",className:"waves-effect"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/events",className:"waves-effect"},"Events")))}}]),t}(n.Component);var U=function(e){return l.a.createElement("footer",{className:"page-footer blue-grey darken-2"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6 s8"},l.a.createElement("h5",{className:"white-text"},"Team Spot-A-Show"),l.a.createElement("p",{className:"grey-text text-lighten-4"},"This project was made by Monica Rangel, Jaquelin Rocha, Andrew Yen, and Raffay Ahmed.")),l.a.createElement("div",{className:"col l4 offset-l2 s4"},l.a.createElement("h5",{className:"white-text"},"Github Profiles"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/monicarangel95"},"Monica")),l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/jackier94"},"Jaquelin")),l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/andrewyen64"},"Andrew")),l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/rahme"},"Raffay")))))),l.a.createElement("div",{className:"footer-copyright blue-grey darken-3"},l.a.createElement("div",{className:"container"},"\xa9 2020 Copyright Spot-A-Show")))};var G=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"section"}),l.a.createElement("h5",{className:""},"Account Login"),l.a.createElement("div",{className:"section"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"z-depth-1 grey lighten-4 row",style:{display:"inline-block",padding:"0px 48px 0px 48px",border:"1px solid #EEE"}},l.a.createElement("form",{className:"col s12",method:"post"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{className:"validate",type:"email",name:"email",id:"email"}),l.a.createElement("label",{htmlFor:"email"},"Enter your email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{className:"validate",type:"password",name:"password",id:"password"}),l.a.createElement("label",{htmlFor:"password"},"Enter your password"))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"row"},l.a.createElement("button",{type:"submit",name:"btn_login",className:"col s12 btn btn-large waves-effect"},"Login")))))),l.a.createElement("div",{className:"section"}),l.a.createElement(s.b,{className:"waves-effect",to:"/signup"},"Haven't made an account? Sign up here!"),l.a.createElement("div",{className:"section"})))};var Y=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"section"}),l.a.createElement("center",null,l.a.createElement("h5",{className:""},"Account Sign Up"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"z-depth-1 grey lighten-4 row",style:{display:"inline-block",padding:"32px 48px 0px 48px",border:"1px solid #EEE"}},l.a.createElement("form",{className:"col s12",method:"post"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"email",id:"firstname"}),l.a.createElement("label",{htmlFor:"first_name"},"First Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"email",id:"lastname"}),l.a.createElement("label",{htmlFor:"last_name"},"Last Name"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{className:"validate",type:"email",name:"email",id:"email"}),l.a.createElement("label",{htmlFor:"email"},"Enter your email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{className:"validate",type:"password",name:"password",id:"password"}),l.a.createElement("label",{htmlFor:"password"},"Enter your password"))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"row"},l.a.createElement("button",{type:"submit",name:"btn_signup",className:"col s12 btn btn-large waves-effect"},"Signup")))))),l.a.createElement("div",{className:"section"}),l.a.createElement(s.b,{className:"waves-effect",to:"/login"},"Already have an account? Login here!"),l.a.createElement("div",{className:"section"})))};var $=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(W,null),l.a.createElement(I,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:z}),l.a.createElement(i.a,{exact:!0,path:"/Home",component:z}),l.a.createElement(i.a,{exact:!0,path:"/events",component:L}),l.a.createElement(i.a,{exact:!0,path:"/login",component:G}),l.a.createElement(i.a,{exact:!0,path:"/signup",component:Y}),l.a.createElement(i.a,{component:_})),l.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.9a40a8fc.chunk.js.map