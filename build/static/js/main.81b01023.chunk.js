(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(9),r=n.n(i),c=(n(19),n(12)),s=n(11),u=n(3),d=n(4),l=n(6),h=n(5),m=n(1),p=n(7),v=n(2),f=n(10),b=n.n(f),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={editing:!1},n.edit=n.edit.bind(Object(m.a)(n)),n.remove=n.remove.bind(Object(m.a)(n)),n.save=n.save.bind(Object(m.a)(n)),n.renderDisplay=n.renderDisplay.bind(Object(m.a)(n)),n.renderForm=n.renderForm.bind(Object(m.a)(n)),n.randomBetween=n.randomBetween.bind(Object(m.a)(n)),n.generateDynamicStyle(),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"randomBetween",value:function(e,t,n){return e+Math.ceil(Math.random()*(t-e))+n}},{key:"edit",value:function(){this.setState({editing:!0})}},{key:"remove",value:function(){this.props.onRemove(this.props.index)}},{key:"save",value:function(e){e.preventDefault(),this.props.onChange(this._newText.value,this.props.index),this.setState({editing:!1})}},{key:"generateDynamicStyle",value:function(){this.style={right:this.randomBetween(20,window.innerWidth-170,"px"),top:this.randomBetween(20,window.innerHeight-170,"px"),transform:"rotate(".concat(this.randomBetween(-25,25,"deg"),")")}}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){var e;this.state.editing&&((e=this._newText).focus(),e.select())}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.children!==e.children||this.state!==t}},{key:"renderForm",value:function(){var e=this;return a.a.createElement("div",{className:"note",style:this.style},a.a.createElement("form",{onSubmit:this.save},a.a.createElement("textarea",{ref:function(t){return e._newText=t},defaultValue:this.props.children}),a.a.createElement("button",{id:"save"},a.a.createElement(v.c,null))))}},{key:"renderDisplay",value:function(){return a.a.createElement("div",{className:"note",style:this.style},a.a.createElement("p",null,this.props.children),a.a.createElement("span",null,a.a.createElement("button",{id:"edit",onClick:this.edit},a.a.createElement(v.a,null)),a.a.createElement("button",{id:"remove",onClick:this.remove},a.a.createElement(v.d,null))))}},{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderDisplay()}}]),t}(o.Component),w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={notes:[],showLoading:!0},n.eachNote=n.eachNote.bind(Object(m.a)(n)),n.update=n.update.bind(Object(m.a)(n)),n.remove=n.remove.bind(Object(m.a)(n)),n.add=n.add.bind(Object(m.a)(n)),n.nextId=n.nextId.bind(Object(m.a)(n)),n.fetchMessageFromAPI(),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"add",value:function(e){var t=this;this.setState(function(n){return{notes:[].concat(Object(s.a)(n.notes),[{id:t.nextId(),note:e}])}})}},{key:"nextId",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"update",value:function(e,t){console.log("updating item with id ".concat(t,' | new text is "').concat(e,'"')),this.setState(function(n){return{notes:n.notes.map(function(n){return n.id!==t?n:Object(c.a)({},n,{note:e})})}})}},{key:"remove",value:function(e){console.log("removing item with id",e),this.setState(function(t){return{notes:t.notes.filter(function(t){return t.id!==e})}})}},{key:"eachNote",value:function(e){return a.a.createElement(y,{key:e.id,index:e.id,onChange:this.update,onRemove:this.remove},e.note)}},{key:"fetchMessageFromAPI",value:function(){var e=this;console.log("The Board will mount");var t=this;this.props.count&&fetch("https://baconipsum.com/api/?type=meat-and=filler&sentences=".concat(this.props.count)).then(function(e){return e.json()}).then(function(n){console.log("Finished pulling fetch data, now adding to state"),n[0].split(". ").forEach(function(e){return t.add(e.substring(0,25))}),e.setState({showLoading:!1})})}},{key:"componentDidMount",value:function(){console.log("The Board has just mounted")}},{key:"componentWillUnmount",value:function(){console.log("The Board will unmount")}},{key:"render",value:function(){return a.a.createElement("div",{className:"board"},this.state.notes.map(this.eachNote),a.a.createElement("button",{onClick:this.add.bind(null,"New Note"),id:"add"},a.a.createElement(v.b,{size:25})),this.state.showLoading?a.a.createElement(b.a,{id:"loadingComp",type:"spin",color:"#1a6fb9",height:100,width:100}):null)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,{count:50}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.81b01023.chunk.js.map