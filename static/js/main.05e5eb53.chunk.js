(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:"img-soldier76",name:"Soldier: 76",beenClicked:!1,path:"/gh-pages/images/cards/soldier76.png"},{id:"img-winston",name:"Winston",beenClicked:!1,path:"/gh-pages/images/cards/winston.jpg"},{id:"img-tracer",name:"Tracer",beenClicked:!1,path:"/gh-pages/images/cards/tracer.png"},{id:"img-bigdaddyjeff",name:"Big Daddy Jeff",beenClicked:!1,path:"/gh-pages/images/cards/jeff.png"},{id:"img-ana",name:"Captain Ana Amari",beenClicked:!1,path:"/gh-pages/images/cards/ana.png"},{id:"img-hanzo",name:"Hanzo",beenClicked:!1,path:"/gh-pages/images/cards/hanzo.png"},{id:"img-junk",name:"Junkrat",beenClicked:!1,path:"/gh-pages/images/cards/junkrat.png"},{id:"img-lucio",name:"L\xfacio",beenClicked:!1,path:"/gh-pages/images/cards/lucio.png"},{id:"img-mcree",name:"McCree",beenClicked:!1,path:"/gh-pages/images/cards/mccree.png"},{id:"img-rein",name:"Reinhardt",beenClicked:!1,path:"/gh-pages/images/cards/reinhardt.png"},{id:"img-widow",name:"Widowmaker",beenClicked:!1,path:"/gh-pages/images/cards/widowmaker.png"},{id:"img-zen",name:"Zenyatta",beenClicked:!1,path:"/gh-pages/images/cards/zenyatta.png"}]},,,,,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),i=t.n(c),s=(t(14),t(4)),o=t(5),l=t(7),m=t(6),d=t(8),g=(t(16),function(e){return r.a.createElement("img",{id:"banner",className:"img-fluid",src:"../images/banner.jpg",alt:"Overwatch Clicky Game!"})}),h={footer:{background:"#007bff",color:"#fff",textAlign:"center"}},u=function(e){return r.a.createElement("div",{style:h.footer,className:"footer font-small pt-4 mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"title"},"Footer Content"),r.a.createElement("p",null,"Here is overwatch footer content.")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"title"},"Links"),r.a.createElement("ul",null,r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"#!"},"Link 1")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"#!"},"Link 2")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"#!"},"Link 3")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"#!"},"Link 4"))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("div",{className:"container-fluid"},"\xa9 ",(new Date).getFullYear()," Copyright: ",r.a.createElement("a",{href:"#"}," overwatchclickygame.com "))))},f=(t(18),function(e){return r.a.createElement("img",{onClick:function(){return e.clickedTwice(e.id)},id:e.id,src:e.path,alt:e.name})}),p=t(1),k=(t(20),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,highScore:0,cardImages:p},t.clickedTwice=function(e){t.state.cardImages.forEach(function(a){if(a.id===e){if(a.beenClicked)return alert("you lose"),t.resetGame(),!1;a.beenClicked||(t.scoreBoard(),a.beenClicked=!0),t.state.score>=t.state.highScore&&t.highScore()}}),t.randomizeCards(t.state.cardImages)},t.randomizeCards=function(e){!function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a}(t.state.cardImages),t.setState({cardImages:p})},t.resetGame=function(e){t.state.cardImages.forEach(function(e){e.beenClicked=!1}),t.setState({score:0})},t.resetGameandHighScore=function(e){t.state.cardImages.forEach(function(e){e.beenClicked=!1}),t.setState({score:0,highScore:0})},t.scoreBoard=function(){t.setState(function(e){return{score:e.score+1}})},t.highScore=function(){t.setState(function(e){return{highScore:e.score}})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row nav"},r.a.createElement("div",{className:"col-lg-12 scoreboard"},r.a.createElement("br",null),r.a.createElement("h2",{className:"score"},"Score: ",this.state.score," ",r.a.createElement("button",{onClick:function(){return e.resetGame()},id:"reset",className:" btn btn-primary reset"},"Reset Game!")),r.a.createElement("h2",{className:"highscore"},"High Score: ",this.state.highScore,"  ",r.a.createElement("button",{onClick:function(){return e.resetGameandHighScore()},id:"reset",className:"btn btn-warning reset2"},"Reset High Score/Game")))),r.a.createElement("div",{className:"row background"},r.a.createElement("div",{id:"grid",className:"col-lg-12 grid"},this.state.cardImages.map(function(a){return r.a.createElement(f,{randomize:function(){return e.randomizeCards(e.state.cardImages)},clickedTwice:e.clickedTwice,boolean:e.state.beenClicked,key:a.id,id:a.id,path:a.path})})))),r.a.createElement(u,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.05e5eb53.chunk.js.map