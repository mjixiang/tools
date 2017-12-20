webpackJsonp([1],{"43Ss":function(e,t){},"8hXn":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=[{name:"二维码",desc:"批量生成二维码工具",route:{name:"qrcode"}}],r={name:"index",data:function(){return{apps:i}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-link",{attrs:{to:{name:"qrcode"}}},[this._v("批量生成二维码")]),this._v(" "),t("router-link",{attrs:{to:{name:"exif"}}},[this._v("在地图中显示照片")])],1)},staticRenderFns:[]},a=n("/Xao")(r,o,!1,null,null,null);t.default=a.exports},Gsly:function(e,t){},HehV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("bADx"),r={props:{url:String,size:{type:Number,default:180},logo:String,logoSize:{type:Number,default:48}},watch:{url:function(){this.drawImage()}},methods:{drawImage:function(){if(this.$refs.qrcodeBox&&(this.$refs.qrcodeBox.innerHTML="",this.url)){var e=new i({text:this.url,size:this.size,image:this.logo,imageSize:this.logoSize});e.style.display="block",this.$refs.qrcodeBox.appendChild(e)}}},mounted:function(){this.drawImage()}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"qrcodeBox",staticClass:"qrcode-box"})},staticRenderFns:[]},a={name:"qrcode",components:{xaQrcode:n("/Xao")(r,o,!1,function(e){n("W1lw")},"data-v-be1975ec",null).exports},data:function(){return{snString:"",key:"demo_qrcode_sns"}},computed:{sns:function(){return localStorage.setItem(this.key,this.snString),this.snString.split(/\s+/g).filter(function(e){return!!e})}},created:function(){this.snString=localStorage.getItem(this.key)||""}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-title"},[e._v("输入待生成文本、地址")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.snString,expression:"snString"}],staticClass:"xa-textarea",attrs:{rows:"6",placeholder:"输入待生成文本、地址(空格或换行分隔)"},domProps:{value:e.snString},on:{input:function(t){t.target.composing||(e.snString=t.target.value)}}}),e._v(" "),e._l(e.sns,function(t){return n("div",{key:t,staticClass:"qrcode-container"},[n("div",{staticClass:"form-title",staticStyle:{overflow:"auto",padding:"0 10px",height:"auto","line-height":"24px"}},[e._v(e._s(t))]),e._v(" "),n("xa-qrcode",{attrs:{url:t}})],1)})],2)},staticRenderFns:[]},c=n("/Xao")(a,s,!1,function(e){n("Gsly")},"data-v-08dcbe5b",null);t.default=c.exports},NHnr:function(e,t,n){"use strict";function i(e){return e>9?e:"0"+e}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"localStorage";window[n].setItem(e,"object"===(void 0===t?"undefined":w()(t))?y()(t):t)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"localStorage",n=window[t].getItem(e);return n?JSON.parse(n):n}function a(e){return"object"===(void 0===e?"undefined":w()(e))?JSON.parse(y()(e)):e}function s(e,t){r(e,t,"sessionStorage")}function c(e){return o(e,"sessionStorage")}function u(e,t){var n=[];for(var i in t){var r=t[i];void 0!==r&&null!==r&&n.push(i+"="+r)}return e+(n.length?"?"+n.join("&"):"")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t&&-1===(e+"").indexOf(t)&&(e=e+"-"+t),document.title=e,/ip(hone|od|ad)/i.test(navigator.userAgent)){var n=document.createElement("iframe");n.style.display="none",n.src="/favicon.ico",n.onload=function(){setTimeout(function(){document.body.removeChild(n)},0)},document.body.appendChild(n)}}Object.defineProperty(t,"__esModule",{value:!0});var d={};n.d(d,"formatNumer",function(){return i}),n.d(d,"setStorage",function(){return r}),n.d(d,"getStorage",function(){return o}),n.d(d,"copy",function(){return a}),n.d(d,"setSessionStorage",function(){return s}),n.d(d,"getSessionStorage",function(){return c}),n.d(d,"urlQueryString",function(){return u}),n.d(d,"setDocumentTitle",function(){return l});var m=n("qRXP"),f={render:function(){var e=this.$createElement;return(this._self._c||e)("header",[this._v("header")])},staticRenderFns:[]},h={name:"app-root",components:{headerNav:n("/Xao")(null,f,!1,null,null,null).exports}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[t("router-view")],1)],1)},staticRenderFns:[]},v=n("/Xao")(h,p,!1,function(e){n("dV2E")},null,null).exports,g=n("zO6J"),x=n("3cXf"),y=n.n(x),b=n("hRKE"),w=n.n(b);m.a.use(g.a);var _=new g.a({routes:[{path:"/",name:"index",component:n("8hXn").default},{path:"/qrcode",name:"qrcode",component:n("HehV").default,meta:{title:"批量生成二维码"}},{path:"/exif",name:"exif",component:n("tze9").default,meta:{title:"在地图中显示照片"}}]});_.beforeEach(function(e,t,n){e.meta.title&&l(e.meta.title),n()});var S=_;n("iqxc");m.a.prototype.$utils=d,m.a.config.productionTip=!1,new m.a({el:"#app",router:S,template:"<App/>",components:{App:v}})},W1lw:function(e,t){},dV2E:function(e,t){},gO3N:function(e,t){},iqxc:function(e,t){},tze9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("lC5x"),r=n.n(i),o=n("HzJ8"),a=n.n(o),s=n("J0Oq"),c=n.n(s),u=n("kfHR"),l=n.n(u),d=n("rVsN"),m=n.n(d),f=n("AA3o"),h=n.n(f),p=n("xSur"),v=n.n(p),g=n("vvLd"),x=n.n(g),y=function(){function e(){h()(this,e),this.dom=document.createElement("input"),this.dom.type="file",this.dom.multiple=!0,this.dom.onchange=this.onImageChange.bind(this),this.dom.accept=".jpg,.jpeg",this.resolve=null}return v()(e,[{key:"chooseImages",value:function(){var e=this;return this.dom.multiple=!0,this.dom.click(),new m.a(function(t,n){e.resolve=t})}},{key:"chooseImage",value:function(){var e=this;return this.dom.multiple=!1,this.dom.click(),new m.a(function(t,n){e.resolve=t})}},{key:"onImageChange",value:function(){this.dom.files.length&&this.resolve&&(this.resolve(l()(this.dom.files)),this.resolve=null)}},{key:"getImageSrc",value:function(e){return new m.a(function(t,n){if(!e||0!==e.type.indexOf("image"))return n(new Error("该文件不是图片文件"));t(window.URL.createObjectURL(e))})}},{key:"getImageBaseExif",value:function(e){return new m.a(function(t,n){x.a.getData(e,function(){var n=this.exifdata.GPSLongitude,i=this.exifdata.GPSLatitude,r=window.URL.createObjectURL(e);if(!n||!i)return t({error:!0,name:e.name||"",bolb:r});var o=this.exifdata.DateTimeOriginal.replace(/^(\d+):(\d+):(\d+)/,"$1-$2-$3"),a=this.exifdata.PixelXDimension,s=this.exifdata.PixelYDimension,c=n[0]+n[1]/60+n[2]/3600,u=i[0]+i[1]/60+i[2]/3600;t({name:e.name||"",time:o,lat:u,lng:c,width:a,height:s,bolb:r})})})}}]),e}(),b=n("FAY7"),w=n.n(b),_=(n("43Ss"),w.a.tileLayer("http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png",{maxZoom:19})),S=w.a.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{maxZoom:19}),k=w.a.tileLayer("http://t7.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}",{maxZoom:19,subdomains:"1234567"}),C=w.a.tileLayer("http://t{s}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}",{maxZoom:19,subdomains:"1234567"}),I={"炫酷黑":_,"天地图":k,"道路图":S},z={"地名":C},q=null,E=null,O=new y,L={name:"exif",data:function(){return{images:[]}},computed:{},methods:{choose:function(){var e=this;return c()(r.a.mark(function t(){var n,i,o,s,c,u,l,d,m,f,h;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.chooseImages();case 3:n=t.sent,i=!0,o=!1,s=void 0,t.prev=7,c=a()(n);case 9:if(i=(u=c.next()).done){t.next=25;break}return l=u.value,t.prev=11,t.next=14,O.getImageBaseExif(l);case 14:d=t.sent,e.images.push(d),d.error||(m=220,f=220,h=Math.min(220/d.width,220/d.height),m=d.height*h,f=d.width*h,d.marker=w.a.marker(d,{icon:w.a.divIcon({html:'<div class="my-div-icon" style="background-image:url('+d.bolb+')"></div>',iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16]})}).bindPopup('\n                <div class="popup-img" style="height:'+m+"px;width:"+f+"px;line-height:"+m+'px;">\n                  <span class="time">'+d.time+'</span>\n                  <img style="height:'+m+"px;width:"+f+'px;" src="'+d.bolb+'">\n                </div>\n              ',{closeButton:!1,autoClose:!0,className:"popup-diy"}).on("popupopen",function(e){}).addTo(q),E.addLayer(d.marker),q.fitBounds(E.getBounds())),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(11),console.log(t.t0.message);case 22:i=!0,t.next=9;break;case 25:t.next=31;break;case 27:t.prev=27,t.t1=t.catch(7),o=!0,s=t.t1;case 31:t.prev=31,t.prev=32,!i&&c.return&&c.return();case 34:if(t.prev=34,!o){t.next=37;break}throw s;case 37:return t.finish(34);case 38:return t.finish(31);case 39:t.next=44;break;case 41:t.prev=41,t.t2=t.catch(0),console.log(t.t2.message);case 44:case"end":return t.stop()}},t,e,[[0,41],[7,27,31,39],[11,19],[32,,34,38]])}))()},onImageClick:function(e){e.error||(q.panTo(e,{animate:!0}),e.marker.togglePopup())}},mounted:function(){q=function(e){var t=w.a.map(e,{center:[32.76880048488168,97.119140625],zoom:3,layers:[_],zoomControl:!1,attributionControl:!1});return w.a.control.layers(I,z).addTo(t),t}("map"),E=w.a.featureGroup([]).addTo(q)}},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exif-container"},[n("div",{attrs:{id:"map"}}),e._v(" "),n("footer",[n("transition-group",{staticClass:"image-items",style:{width:70*(e.images.length+1)+10+"px"},attrs:{name:"image",tag:"div"}},[n("div",{key:-1,staticClass:"image-item xa-flex-center",on:{click:e.choose}},[e._v("+")]),e._v(" "),e._l(e.images,function(t){return n("div",{key:t.bolb,class:{"image-item":!0,error:t.error},style:{backgroundImage:"url("+t.bolb+")"},on:{click:function(n){e.onImageClick(t)}}})})],2)],1)])},staticRenderFns:[]},R=n("/Xao")(L,N,!1,function(e){n("gO3N")},null,null);t.default=R.exports}},["NHnr"]);