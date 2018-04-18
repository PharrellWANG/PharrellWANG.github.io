module.exports=__NEXT_REGISTER_PAGE("/about",function(){var e=webpackJsonp([3],{135:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(1);var i=r.n(a);var u=r(28);var c=r(16);var f=r.n(c);var l=r(31);var s=r.n(l);var p=r(65);var v=r.n(p);var d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function e(t){return{root:{paddingTop:24,paddingBottom:24,paddingLeft:24,paddingRight:24,backgroundColor:t.palette.background.primaryColor},headerPaper:{color:t.palette.text.secondary}}};var m=function(e){b(t,e);function t(){y(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,[{key:"render",value:function e(){var t=this.props,r=t.classes,n=t.headline,a=t.subheading;return o.a.createElement(v.a,{className:r.root,elevation:0},n&&o.a.createElement(s.a,{variant:"headline",className:r.headerPaper},n),a&&o.a.createElement(s.a,{variant:"subheading",className:r.headerPaper},a))}}]);return t}(o.a.Component);t["a"]=Object(u["a"])(Object(c["withStyles"])(g),Object(c["withTheme"])())(m)},276:function(e,t,r){e.exports=r(277)},277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(31);var i=r.n(a);var u=r(60);var c=r(93);var f=r(66);var l=r(135);var s=r(68);var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){y(t,e);function t(){v(this,t);return d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}p(t,[{key:"render",value:function e(){var t=o.a.createElement(l["a"],{headline:"About"});var r=o.a.createElement(i.a,{variant:"headline",style:{paddingTop:48,paddingLeft:12}},"Coming Soon");var n=o.a.createElement(f["a"],null);return o.a.createElement("div",null,o.a.createElement(c["a"],{activePageName:"about"}),o.a.createElement(s["a"],{myHeader:t,pageContents:r,myFooter:n}))}}]);return t}(o.a.Component);t["default"]=Object(u["a"])(h)},28:function(e,t,r){"use strict";var n=r(67);var o="object"==typeof self&&self&&self.Object===Object&&self;var a=n["a"]||o||Function("return this")();var i=a;var u=i.Symbol;var c=u;var f=Object.prototype;var l=f.hasOwnProperty;var s=f.toString;var p=c?c.toStringTag:void 0;function v(e){var t=l.call(e,p),r=e[p];try{e[p]=void 0;var n=true}catch(e){}var o=s.call(e);n&&(t?e[p]=r:delete e[p]);return o}var d=v;var y=Object.prototype;var h=y.toString;function b(e){return h.call(e)}var g=b;var m="[object Null]",w="[object Undefined]";var O=c?c.toStringTag:void 0;function j(e){if(null==e)return void 0===e?w:m;return O&&O in Object(e)?d(e):g(e)}var _=j;function E(e,t){return function(r){return e(t(r))}}var x=E;var T=x(Object.getPrototypeOf,Object);var P=T;function k(e){return null!=e&&"object"==typeof e}var I=k;var C="[object Object]";var S=Function.prototype,N=Object.prototype;var A=S.toString;var R=N.hasOwnProperty;var M=A.call(Object);function U(e){if(!I(e)||_(e)!=C)return false;var t=P(e);if(null===t)return true;var r=R.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&A.call(r)==M}var z=U;var F=r(86);var G={INIT:"@@redux/INIT"};function W(e,t,r){var n;if("function"===typeof t&&"undefined"===typeof r){r=t;t=void 0}if("undefined"!==typeof r){if("function"!==typeof r)throw new Error("Expected the enhancer to be a function.");return r(W)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var o=e;var a=t;var i=[];var u=i;var c=false;function f(){u===i&&(u=i.slice())}function l(){return a}function s(e){if("function"!==typeof e)throw new Error("Expected listener to be a function.");var t=true;f();u.push(e);return function r(){if(!t)return;t=false;f();var n=u.indexOf(e);u.splice(n,1)}}function p(e){if(!z(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=true;a=o(a,e)}finally{c=false}var t=i=u;for(var r=0;r<t.length;r++){var n=t[r];n()}return e}function v(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");o=e;p({type:G.INIT})}function d(){var e;var t=s;return e={subscribe:function e(r){if("object"!==typeof r)throw new TypeError("Expected the observer to be an object.");function n(){r.next&&r.next(l())}n();var o=t(n);return{unsubscribe:o}}},e[F["default"]]=function(){return this},e}p({type:G.INIT});return n={dispatch:p,subscribe:s,getState:l,replaceReducer:v},n[F["default"]]=d,n}function H(e){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}function L(e,t){var r=t&&t.type;var n=r&&'"'+r.toString()+'"'||"an action";return"Given action "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function B(e,t,r,n){var o=Object.keys(t);var a=r&&r.type===G.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===o.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!z(e))return"The "+a+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+o.join('", "')+'"';var i=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!n[e]});i.forEach(function(e){n[e]=true});if(i.length>0)return"Unexpected "+(i.length>1?"keys":"key")+' "'+i.join('", "')+'" found in '+a+'. Expected to find one of the known reducer keys instead: "'+o.join('", "')+'". Unexpected keys will be ignored.'}function D(e){Object.keys(e).forEach(function(t){var r=e[t];var n=r(void 0,{type:G.INIT});if("undefined"===typeof n)throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"===typeof r(void 0,{type:o}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+G.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function q(e){var t=Object.keys(e);var r={};for(var n=0;n<t.length;n++){var o=t[n];false;"function"===typeof e[o]&&(r[o]=e[o])}var a=Object.keys(r);var i=void 0;false;var u=void 0;try{D(r)}catch(e){u=e}return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=arguments[1];if(u)throw u;var o;false;var i=false;var c={};for(var f=0;f<a.length;f++){var l=a[f];var s=r[l];var p=t[l];var v=s(p,n);if("undefined"===typeof v){var d=L(l,n);throw new Error(d)}c[l]=v;i=i||v!==p}return i?c:t}}function J(e,t){return function(){return t(e.apply(void 0,arguments))}}function K(e,t){if("function"===typeof e)return J(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r=Object.keys(e);var n={};for(var o=0;o<r.length;o++){var a=r[o];var i=e[a];"function"===typeof i&&(n[a]=J(i,t))}return n}function X(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function Q(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(r,n,o){var a=e(r,n,o);var i=a.dispatch;var u=[];var c={getState:a.getState,dispatch:function e(t){return i(t)}};u=t.map(function(e){return e(c)});i=X.apply(void 0,u)(a.dispatch);return Z({},a,{dispatch:i})}}}r.d(t,false,function(){return W});r.d(t,false,function(){return q});r.d(t,false,function(){return K});r.d(t,false,function(){return Q});r.d(t,"a",function(){return X});function V(){}false},60:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(1);var i=r.n(a);var u=r(16);var c=r.n(u);var f=r(62);var l=r.n(f);var s=r(64);var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e){var t=function(t){y(r,t);function r(e,t){v(this,r);var n=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));n.pageContext=n.props.pageContext||Object(s["a"])();return n}p(r,[{key:"componentDidMount",value:function e(){var t=document.querySelector("#jss-server-side");t&&t.parentNode&&t.parentNode.removeChild(t)}},{key:"render",value:function t(){return o.a.createElement(u["MuiThemeProvider"],{theme:this.pageContext.theme,sheetsManager:this.pageContext.sheetsManager},o.a.createElement(l.a,null),o.a.createElement(e,this.props))}}]);return r}(o.a.Component);t.getInitialProps=function(t){if(e.getInitialProps)return e.getInitialProps(t);return{}};return t}t["a"]=h},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(63);Object.defineProperty(t,"default",{enumerable:true,get:function e(){return o(n).default}});function o(e){return e&&e.__esModule?e:{default:e}}},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(6);var o=w(n);var a=r(2);var i=w(a);var u=r(3);var c=w(u);var f=r(7);var l=w(f);var s=r(8);var p=w(s);var v=r(0);var d=w(v);var y=r(1);var h=w(y);var b=r(16);var g=r(38);var m=w(g);function w(e){return e&&e.__esModule?e:{default:e}}var O=function e(t){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},body:{margin:0,backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}}}}};var j=function(e){(0,p.default)(t,e);function t(){(0,i.default)(this,t);return(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}(0,c.default)(t,[{key:"render",value:function e(){return this.props.children}}]);return t}(d.default.Component);j.propTypes={};j.propTypes={};j.defaultProps={children:null};t.default=(0,b.withStyles)(O,{name:"MuiCssBaseline"})(j)},64:function(e,t,r){"use strict";(function(e,n){t["a"]=d;var o=r(58);var a=r.n(o);var i=r(16);var u=r.n(i);var c=r(91);var f=r.n(c);var l=r(90);var s=r.n(l);var p=Object(i["createMuiTheme"])({palette:{primary:{light:s.a[300],main:s.a[500],dark:s.a[700]},secondary:{light:f.a[300],main:f.a[500],dark:f.a[700]}}});function v(){return{theme:p,sheetsManager:new Map,sheetsRegistry:new o["SheetsRegistry"],generateClassName:Object(i["createGenerateClassName"])()}}function d(){if(!e.browser)return v();n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=v());return n.__INIT_MATERIAL_UI__}}).call(t,r(56),r(20))},66:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(1);var i=r.n(a);var u=r(28);var c=r(16);var f=r.n(c);var l=r(31);var s=r.n(l);var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function e(t){return{footerWrapper:{borderTop:"1px solid #666",backgroundColor:t.backgroundColor,height:120,zIndex:1100},copyright:{flex:1,paddingTop:36,textAlign:"center"},iconGroup:{paddingTop:36,textAlign:"center"}}};var b=function(e){y(t,e);function t(){v(this,t);return d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}p(t,[{key:"render",value:function e(){var t=this.props.classes;return o.a.createElement("div",{className:t.footerWrapper},o.a.createElement(s.a,{className:t.copyright,gutterBottom:true,noWrap:true},"© 2018, Pharrell.zx WANG"))}}]);return t}(o.a.Component);t["a"]=Object(u["a"])(Object(c["withStyles"])(h),Object(c["withTheme"])())(b)},67:function(e,t,r){"use strict";(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t["a"]=r}).call(t,r(20))},68:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(1);var i=r.n(a);var u=r(28);var c=r(16);var f=r.n(c);var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function e(t){return{innerContent:{padding:"0 30px",flex:1},content:{display:"flex",minHeight:"100vh",flexDirection:"column",backgroundColor:t.palette.background.default,width:"100%",height:"100%",paddingTop:56}}};var y=function(e){v(t,e);function t(){s(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){var t=this.props,r=t.classes,n=t.myHeader,a=t.myFooter,i=t.pageContents,u=t.isHomePage;return o.a.createElement("main",{className:r.content},n,u?o.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}},i):o.a.createElement("div",{className:r.innerContent},i),a)}}]);return t}(o.a.Component);t["a"]=Object(u["a"])(Object(c["withStyles"])(d),Object(c["withTheme"])())(y)}},[276]);return{page:e.default}});