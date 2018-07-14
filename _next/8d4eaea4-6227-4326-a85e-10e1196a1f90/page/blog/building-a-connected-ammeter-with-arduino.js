module.exports=__NEXT_REGISTER_PAGE("/blog/building-a-connected-ammeter-with-arduino",function(){var e=webpackJsonp([6],{35:function(e,t,n){"use strict";var a=n(13);var r=n.n(a);var l=n(0);var o=n.n(l);t["a"]=function(e){var t=e.src,n=e.width,a=void 0===n?"100%":n,l=e.height,s=e.alt,i=e.title;return o.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 container"},o.a.createElement("img",{src:t,width:a,height:l,alt:s,className:"jsx-1221164359 jsx-1221164359"}),i?o.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 title"},i):null,o.a.createElement(r.a,{styleId:"1221164359",css:".container.jsx-1221164359{text-align:center;max-width:100%;margin:50px 0;}img.jsx-1221164359{max-width:100%;}.title.jsx-1221164359{color:#888;font-size:13px;line-height:17px;padding:5px 0;}.title.jsx-1221164359 div.jsx-1221164359{margin:0;}"}))}},36:function(e,t,n){e.exports=n(83)},442:function(e,t,n){e.exports=n(443)},443:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var r=n.n(a);var l=n(70);var o=n.n(l);var s=n(71);var i=n(35);var u=n(82);t["default"]=Object(s["b"])({title:"Building a Connected Ammeter with Arduino",description:"This is my experience on building a connected Ammeter with Arduino.",image:"https://user-images.githubusercontent.com/50838/32688937-289f0b40-c700-11e7-846a-d656572fe73c.jpg",slug:"building-a-connected-ammeter-with-arduino",date:"November 11, 2017",links:{twitter:"https://twitter.com/arunoda/status/929353256362373120",facebook:"https://www.facebook.com/arunoda.susiripala/posts/10156058822568606"}})(o()(s["a"],function(e){return r.a.createElement("div",{className:"_markdown_"},r.a.createElement(e.p,null,"As I continue my electronic experiments, I wanted to measure the current used by ",r.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/ESP8266"},"ESP8266")," at its different stages. I didn’t wanna just look at numbers, but visualize the current via graphs. The current range I wanted to measure is from 120mA to 30uA. At the end, I wanted a graph like this:"),r.a.createElement(e.p,null,r.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32688859-d43fd440-c6fe-11e7-8eb7-ad428a13c47c.png"})),r.a.createElement(e.h2,null,"Measuring the voltage with Arduino"),r.a.createElement(e.p,null,r.a.createElement(e.a,{href:"https://www.arduino.cc/"},"Arduino")," has a set of pins which we can use to measure the voltage. We can measure up to 5V in a range of 1024 values. Therefore, the voltage resolution is basically around 5 mv (5000mv/1024)."),r.a.createElement(e.p,null,"This is my Arduino setup:"),r.a.createElement(e.p,null,r.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32688884-3e7c1c38-c6ff-11e7-9763-575a486d165d.png"})),r.a.createElement(e.p,null,"Here's the code:"),r.a.createElement(e.p,null,r.a.createElement(u["a"],{language:"c"},'\nvoid setup() {\n  Serial.begin(9600);\n}\n\nfloat toVolt(int val) {\n  return (val/1024.0) * 5.0;\n}\n\nvoid loop() {\n  float a6 = toVolt(analogRead(6));\n  float a7 = toVolt(analogRead(7));\n\n  float i = ((a6 - a7) / 100.0) * 1000000;\n  Serial.println(String(i) + "uA");\n\n  delay(250);\n}\n  ')),r.a.createElement(e.p,null,r.a.createElement(u["a"],{language:"python"},"\nclass ListOfAllLenders(APIView):\n  \"\"\"Provide data for admin loan management page\n  \"\"\"\n  \n  throttle_classes = ()\n  # permission_classes = []\n  permission_classes = [permissions.IsAuthenticated, TokenHasScope]\n  required_scopes = ['admin']\n  parser_classes = (\n  parsers.FormParser, parsers.MultiPartParser, parsers.JSONParser,)\n  renderer_classes = (renderers.JSONRenderer,)\n  \n  def get(self, request, *args, **kwargs):\n  # ============================================================ #\n  # no_of_lenders = ZwapUser.objects.filter(groups__name='lender').count()\n  lenders = ZwapUser.objects.filter(groups__name='lender').order_by('-date_joined')\n  # lenders = lenders.ordered_by('-id')\n  lender_count = lenders.count()\n  data_for_rows = []\n  for lender in lenders:\n    this_up = UserProfile.objects.get(user=lender)\n    user_id = lender.id\n    user_email = lender.email\n    user_account_status = lender.getAccountStatus()\n    lender_application_status = lender.getLenderStatus()\n    is_lender_verified = this_up.is_lender_verified()\n    this_user_info = this_up.lender_info\n    if this_user_info is None:\n      lender_type = 'N/A'\n      name = 'N/A'\n      gender = 'N/A'\n      birthday = 'N/A'\n      mobile = 'N/A'\n    else:\n      lender_type = this_user_info['lenderType']\n      name = this_user_info['lastName'] + ' ' + this_user_info['firstName']\n      gender = this_user_info['gender']\n      birthday = this_user_info['birthday']\n      mobile = this_user_info['mobile']\n    dictionary_item = {\n      'userId': user_id,\n      'email': user_email,\n      'accountStatus': user_account_status,\n      'lenderApplicationStatus': lender_application_status,\n      'verifiedLender': 1 if is_lender_verified else 0,\n      'lenderType': lender_type,\n      'name': name,\n      'gender': gender,\n      'birthday': birthday,\n      'mobile': mobile,\n      'lastLogin': lender.last_login.astimezone(pytz.timezone(TIME_ZONE)).strftime(r'%d/%m/%Y %H:%M:%S %Z') if lender.last_login else 'N/A',\n      'penultimateLogin': this_up.penultimate_login.astimezone(pytz.timezone(TIME_ZONE)).strftime(r'%d/%m/%Y %H:%M:%S %Z') if this_up.penultimate_login else 'N/A',\n      'dateJoined': lender.date_joined.astimezone(pytz.timezone(TIME_ZONE)).strftime(r'%d/%m/%Y %H:%M:%S %Z') if lender.date_joined else 'N/A',\n    }\n    data_for_rows.append(copy.deepcopy(dictionary_item))\n  \n  df = pd.DataFrame(\n    data_for_rows,\n    # index=list_of_idx,\n    columns=[\n      'userId',\n      'email',\n      'accountStatus',\n      'lenderApplicationStatus',\n      'verifiedLender',\n      'lenderType',\n      'name',\n      'gender',\n      'birthday',\n      'mobile',\n      'lastLogin',\n      'penultimateLogin',\n      'dateJoined',\n    ]\n  )\n  data_for_rows_in_json = df.to_json(orient='index')\n  return Response({\n    'status': 1,\n    'data': {\n      'rowsInJson': data_for_rows_in_json,\n      'noOfLenders': lender_count,\n    }})\n\n\nlist_of_all_lenders = ListOfAllLenders.as_view()\n  ")),r.a.createElement(e.p,null,"Basically, I'm measuring the voltage between the resistor and applying ",r.a.createElement(e.code,null,"I=V/R")," to calculate the current."),r.a.createElement(e.p,null,"It works well. Initially, the accuracy was not that precise. However, I was able to bump up the accuracy by attaching a 5v connection to the ",r.a.createElement(e.strong,null,"AREF")," pin in Arduino. With that, we can tell Arduino to use that voltage as the ",r.a.createElement(e.a,{href:"https://www.arduino.cc/en/Reference/AnalogReference"},"reference")," for ",r.a.createElement(e.strong,null,"analogRead"),"."),r.a.createElement(e.h2,null,"Dashboard"),r.a.createElement(e.p,null,"As you've noticed in the above Arduino code, I sent measurements to the serial port every 250ms. Then I wrote a simple ",r.a.createElement(e.a,{href:"https://github.com/arunoda/ardmeter/tree/master/dashboard"},"Next.js app")," to visualize those measurements."),r.a.createElement(e.p,null,r.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32688937-289f0b40-c700-11e7-846a-d656572fe73c.jpg"})),r.a.createElement(e.p,null,"It's pretty simple and it achieves what I want."),r.a.createElement(e.h2,null,"Actual Usage"),r.a.createElement(e.p,null,"Next, I started using my new ammeter to monitor the current usage of ESP8266. Here's my setup:"),r.a.createElement(e.p,null,r.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32688964-8364b764-c700-11e7-8057-de734b566de2.jpg"})),r.a.createElement(e.p,null,"Initially, it failed. I used a 100ohms resistor, where I could measure as low as 50uA of current. I came up with that number by applying ",r.a.createElement(e.code,null,"I=V/R")," and using V as 5mv (which is the minimal voltage Arduino can measure)."),r.a.createElement(e.p,null,"But it didn't work well."),r.a.createElement(e.p,null,"The reason is ESP8266 didn't get enough voltage to power it up. It needs exactly 3.3v. I used a voltage regulator, but the input to that was 5v. The 100ohms resistor takes a considerable amount of voltage. Hence, the input voltage to the 3.3v voltage regulator was less than 3.3v."),r.a.createElement(e.p,null,"I could have used a higher input of voltage like 12v and give it a try, but I didn't have a good 12v input source (or I was lazy to find one)."),r.a.createElement(e.h2,null,"Making it Work"),r.a.createElement(e.p,null,"I then used a 2ohms resistor and got it working. Then the minimal current I could measure was around 2.5 mA. That was not good enough for me."),r.a.createElement(e.p,null,r.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32688981-d7239ab4-c700-11e7-8a65-ae27726563eb.jpg"})),r.a.createElement(e.h2,null,"In the End"),r.a.createElement(e.p,null,"Basically, Arduino is effective at measuring voltage. But it's not good for measuring very low ranges of current."),r.a.createElement(e.p,null,"However, I was able to get an idea of the current usage of ESP8266 and that's good enough for me (at least for now)."),r.a.createElement(e.p,null,"My original idea was to build a connected ammeter with some pretty dashboards. But since I can't measure very low current, I am not continuing this project. Nevertheless, this was a very nice experiment and I learnt a lot."),r.a.createElement(e.h2,null,"Next Step"),r.a.createElement(e.p,null,"As you already know, high precision ammeters are ",r.a.createElement(e.a,{href:"https://www.ebay.com/sch/i.html?_sacat=0&_nkw=6.5+digit+multimeter&_frs=1"},"very expensive"),". But I found a ",r.a.createElement(e.a,{href:"https://www.aliexpress.com/item/0-36-5-Digits-0-3-0000A-DC-Ammeter-Digital-amp-Ampere-panel-Meter-Red-LED/32314115899.html?spm=a2g0s.13010208.99999999.263.zNVhzy"},"cheap")," ammeter which is good enough in my case."),r.a.createElement(e.p,null,"After I got it, I'd like to test it and connect it my ",r.a.createElement(e.a,{href:"https://github.com/arunoda/ardmeter/tree/master/dashboard"},"Next.js powered dashboard"),". Let’s hope it’ll work well."))}))},82:function(e,t,n){"use strict";var a=n(13);var r=n.n(a);var l=n(0);var o=n.n(l);var s=n(36);var i=n.n(s);var u=n(84);var c=n.n(u);var d=i()(new(n(36).SameLoopPromise)(function(e,t){var a=72;try{var r=n(a);return e(r)}catch(e){}n.e(0).then(function(a){try{var r=n(72);r.__webpackChunkName="react_syntax_highlighter_5e0c44cc80beffdff473f2e6ef5cb15c";e(r)}catch(e){t(e)}}.bind(null,n)).catch(n.oe)}),{loading:function e(){return o.a.createElement("div",null)}});var m={padding:15,fontSize:"100%",borderRadius:8,backgroundColor:"#eeeeee"};t["a"]=function(e){var t=e.language,n=e.children;return o.a.createElement("div",{className:"jsx-124958280 jsx-124958280 code"},o.a.createElement(d,{language:t,style:c.a,customStyle:m},n.trim()),o.a.createElement(r.a,{styleId:"124958280",css:".code.jsx-124958280{margin:30px 0;}"}))}},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.SameLoopPromise=void 0;var a=n(103);var r=E(a);var l=n(19);var o=E(l);var s=n(6);var i=E(s);var u=n(4);var c=E(u);var d=n(5);var m=E(d);var h=n(7);var f=E(h);var p=n(8);var g=E(p);var v=n(50);var _=E(v);t.default=k;t.registerChunk=A;t.flushChunks=I;var b=n(0);var y=E(b);var w=n(26);function E(e){return e&&e.__esModule?e:{default:e}}var j=new _.default;function k(e,t){var n=void 0;var a=void 0;if(e instanceof x){n=e;a=t||{}}else{if(!e.modules||!e.render){var r="`next/dynamic` options should contain `modules` and `render` fields";throw new Error(r)}if(t){var l="Add additional `next/dynamic` options to the first argument containing the `modules` and `render` fields";throw new Error(l)}a=e}return function(e){(0,g.default)(t,e);function t(){var e;(0,c.default)(this,t);for(var n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];var o=(0,f.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(r)));o.LoadingComponent=a.loading?a.loading:function(){return y.default.createElement("p",null,"loading...")};o.ssr=false!==a.ssr||a.ssr;o.state={AsyncComponent:null,asyncElement:null};o.isServer="undefined"===typeof window;o.loadBundleAgain=null;o.loadingBundle=false;o.ssr&&o.load();return o}(0,m.default)(t,[{key:"load",value:function e(){n?this.loadComponent():this.loadBundle(this.props)}},{key:"loadComponent",value:function e(){var a=this;n.then(function(e){var n=e.default||e;var r=(0,w.getDisplayName)(n);r&&(t.displayName="DynamicComponent for "+r);if(a.mounted)a.setState({AsyncComponent:n});else{a.isServer&&A(e.__webpackChunkName);a.state.AsyncComponent=n}})}},{key:"loadBundle",value:function e(n){var r=this;this.loadBundleAgain=null;this.loadingBundle=true;var l=a.modules(n);var s=(0,o.default)(l);var i=s.length;var u={};var c=function e(){if(r.loadBundleAgain){r.loadBundle(r.loadBundleAgain);return}r.loadingBundle=false;t.displayName="DynamicBundle";var l=a.render(n,u);r.mounted?r.setState({asyncElement:l}):r.state.asyncElement=l};var d=function e(t){var n=l[t];n.then(function(e){var n=e.default||e;r.isServer&&A(e.__webpackChunkName);u[t]=n;i--;0===i&&c()})};s.forEach(d)}},{key:"componentDidMount",value:function e(){this.mounted=true;this.ssr||this.load()}},{key:"componentWillReceiveProps",value:function e(t){if(n)return;this.setState({asyncElement:null});if(this.loadingBundle){this.loadBundleAgain=t;return}this.loadBundle(t)}},{key:"render",value:function e(){var t=this.state,n=t.AsyncComponent,a=t.asyncElement;var r=this.LoadingComponent;if(a)return a;if(n)return y.default.createElement(n,this.props);return y.default.createElement(r,this.props)}}]);return t}(y.default.Component)}function A(e){j.add(e)}function I(){var e=(0,r.default)(j);j.clear();return e}var x=t.SameLoopPromise=function(){(0,m.default)(e,null,[{key:"resolve",value:function t(n){var a=new e(function(e){return e(n)});return a}}]);function e(t){(0,c.default)(this,e);this.onResultCallbacks=[];this.onErrorCallbacks=[];this.cb=t}(0,m.default)(e,[{key:"setResult",value:function e(t){this.gotResult=true;this.result=t;this.onResultCallbacks.forEach(function(e){return e(t)});this.onResultCallbacks=[]}},{key:"setError",value:function e(t){this.gotError=true;this.error=t;this.onErrorCallbacks.forEach(function(e){return e(t)});this.onErrorCallbacks=[]}},{key:"then",value:function t(n,a){var r=this;this.runIfNeeded();var l=new e;var o=function e(){a?l.setResult(a(r.error)):l.setError(r.error)};var s=function e(){l.setResult(n(r.result))};if(this.gotResult){s();return l}if(this.gotError){o();return l}this.onResultCallbacks.push(s);this.onErrorCallbacks.push(o);return l}},{key:"catch",value:function t(n){var a=this;this.runIfNeeded();var r=new e;var l=function e(){r.setResult(n(a.error))};var o=function e(){r.setResult(a.result)};if(this.gotResult){o();return r}if(this.gotError){l();return r}this.onErrorCallbacks.push(l);this.onResultCallbacks.push(o);return r}},{key:"runIfNeeded",value:function e(){var t=this;if(!this.cb)return;if(this.ran)return;this.ran=true;this.cb(function(e){return t.setResult(e)},function(e){return t.setError(e)})}}]);return e}()},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default={hljs:{display:"block",background:"white",padding:"0.5em",color:"#333333",overflowX:"auto"},"hljs-comment":{color:"#969896"},"hljs-meta":{color:"#969896"},"hljs-string":{color:"#df5000"},"hljs-variable":{color:"#df5000"},"hljs-template-variable":{color:"#df5000"},"hljs-strong":{color:"#df5000"},"hljs-emphasis":{color:"#df5000"},"hljs-quote":{color:"#df5000"},"hljs-keyword":{color:"#a71d5d"},"hljs-selector-tag":{color:"#a71d5d"},"hljs-type":{color:"#a71d5d"},"hljs-literal":{color:"#0086b3"},"hljs-symbol":{color:"#0086b3"},"hljs-bullet":{color:"#0086b3"},"hljs-attribute":{color:"#0086b3"},"hljs-section":{color:"#63a35c"},"hljs-name":{color:"#63a35c"},"hljs-tag":{color:"#333333"},"hljs-title":{color:"#795da3"},"hljs-attr":{color:"#795da3"},"hljs-selector-id":{color:"#795da3"},"hljs-selector-class":{color:"#795da3"},"hljs-selector-attr":{color:"#795da3"},"hljs-selector-pseudo":{color:"#795da3"},"hljs-addition":{color:"#55a532",backgroundColor:"#eaffea"},"hljs-deletion":{color:"#bd2c00",backgroundColor:"#ffecec"},"hljs-link":{textDecoration:"underline"}}}},[442]);return{page:e.default}});