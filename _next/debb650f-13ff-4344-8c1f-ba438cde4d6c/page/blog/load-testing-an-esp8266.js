module.exports=__NEXT_REGISTER_PAGE("/blog/load-testing-an-esp8266",function(){var e=webpackJsonp([10],{448:function(e,t,a){e.exports=a(449)},449:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var n=a.n(l);var r=a(69);var o=a.n(r);var s=a(70);var i=a(81);t["default"]=Object(s["b"])({title:"Load Testing an ESP8266",description:"ESP8266 works great. But, I wanted to load test it and see how reliable it is.",image:"https://user-images.githubusercontent.com/50838/32901959-2f83b472-cb17-11e7-9bf2-4a1c21320159.png",slug:"load-testing-an-esp8266",date:"November 16, 2017",links:{twitter:"https://twitter.com/arunoda/status/931199229984350208",facebook:"https://www.facebook.com/arunoda.susiripala/posts/10156074418128606?pnref=story"}})(o()(s["a"],function(e){return n.a.createElement("div",{className:"_markdown_"},n.a.createElement(e.p,null,n.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/ESP8266"},"ESP8266")," is a really cheap WiFi module with a built-in TCP/IP stack. Basically, you can program it just like an Arduino. It works, but I was not quite sure about the reliability nor the performance of it."),n.a.createElement(e.p,null,"Therefore, I decided to do a load test."),n.a.createElement(e.h2,null,"Test Case"),n.a.createElement(e.p,null,"Unlike a normal CPU, the processor of an ESP8266 (or any microcontroller) always runs at 100% unless it's sleeping. So the goal of this load test is not to test the CPU performance, but to measure the strength of its WiFi capabilities."),n.a.createElement(e.p,null,"In this test case, the ESP8266 is serving a huge file around 1TB to any client who connects to it. We are using ESP8266's ",n.a.createElement(e.a,{href:"https://github.com/esp8266/Arduino"},"Arduino C++ API")," for this."),n.a.createElement(e.p,null,n.a.createElement(e.a,{href:"https://gist.github.com/arunoda/3f17eba4f3f1fd5e1a7adc86e7b62ca7"},"Here's the code snippet"),"."),n.a.createElement(e.h2,null,"Test Client"),n.a.createElement(e.p,null,"Even though we are downloading the file via the local network, I didn't want to download and save a huge file on my laptop. So I just wrote a simple Node.js http client to get the download speed without saving any data."),n.a.createElement(e.p,null,n.a.createElement(e.a,{href:"https://gist.github.com/arunoda/7c977b5b722ffc4b83ea780d97d21219"},"Here it is"),"."),n.a.createElement(e.h2,null,"Test Setup"),n.a.createElement(e.p,null,"I uploaded this code to my ESP8266 via the Arduino IDE. My ESP8226 is a generic ",n.a.createElement(e.a,{href:"https://www.instructables.com/id/Getting-Started-with-the-ESP8266-ESP-12/"},"ESP-12F")," chip with a custom made dev board."),n.a.createElement(e.p,null,n.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32901740-8f793fba-cb16-11e7-8ec6-1dc1f85bfb02.jpeg"})),n.a.createElement(e.p,null,"When uploading the code, I've set the clock speed to 160 MHz to get the maximum output from the ESP8266."),n.a.createElement(e.p,null,"My WiFi access point is 2 meters away from the dev board and separated by a wall. I could download up to ",n.a.createElement(e.strong,null,"3 mega-bytes per sec")," from the Internet using my laptop (This is the maximum speed of my ISP)."),n.a.createElement(e.blockquote,null,n.a.createElement(e.p,null,"It's the same laptop as my test client and it's just a few inches from my ESP8266.")),n.a.createElement(e.h2,null,"Result"),n.a.createElement(e.p,null,"So, I started the client and ran it for 3 days. Here are the result."),n.a.createElement(e.p,null,"NOTE: All of the download speed numbers are in ",n.a.createElement(e.strong,null,"Killo Bytes Per Seconds (kBps)"),"."),n.a.createElement(e.p,null,"First of all, let me show you the time series chart of the download speed data I ",n.a.createElement(e.a,{href:"https://gist.github.com/arunoda/adad7657d7e89b512212df793526d237"},"collected"),"."),n.a.createElement(e.p,null,n.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32901946-2527f182-cb17-11e7-8870-8a714ea9ce85.png"})),n.a.createElement(e.p,null,"Just by looking at it, you can see that it was performing really well. It has some drops and that could be a slowdown in the ESP8266 or something with my WiFi setup (which is not very reliable)."),n.a.createElement(e.p,null,"This is the histogram of the whole data points:"),n.a.createElement(e.p,null,n.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/32901959-2f83b472-cb17-11e7-9bf2-4a1c21320159.png"})),n.a.createElement(e.p,null,"Here's a set of summary statistics:"),n.a.createElement(e.ul,null,n.a.createElement(e.li,null,"mean - 488"),n.a.createElement(e.li,null,"standard deviation - 87"),n.a.createElement(e.li,null,"5th percentile - 341"),n.a.createElement(e.li,null,"25th percentile - 440"),n.a.createElement(e.li,null,"25th percentile(median) - 490"),n.a.createElement(e.li,null,"75th percentile - 550")),n.a.createElement(e.h2,null,"Conclusion"),n.a.createElement(e.p,null,"This is a really good result.",n.a.createElement("br",null),"It delivered more than ",n.a.createElement(e.strong,null,"341 kilo bytes/sec (2.7 mega bits/sec)")," for 95% of the time for a range of 3 days. That's a very impressive result for a ",n.a.createElement(e.a,{href:"https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20171116081811&SearchText=esp+8266"},"cheap")," WiFi module."),n.a.createElement(e.p,null,"In a real world ESP8266 project, I would never want to transfer this amount of data over WiFi. Therefore. this is more than enough for me."),n.a.createElement(e.p,null,"I could load test for a few other cases, like the number of connections per second or WiFi range. But I am now pretty confident with the module."),n.a.createElement(e.p,null,"I'll go ahead with a real-world project and test the performance with that."))}))}},[448]);return{page:e.default}});