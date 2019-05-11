(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{244:function(t,e,c){var content=c(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(40).default)("86843826",content,!0,{sourceMap:!1})},245:function(t,e,c){"use strict";var o=c(244);c.n(o).a},246:function(t,e,c){(t.exports=c(39)(!1)).push([t.i,".card-img-top[data-v-4a5af8fd],.card-title[data-v-4a5af8fd]{cursor:pointer}",""])},247:function(t,e,c){"use strict";c.r(e);var o=c(1),l=c(45),n={data:function(){return{textStr:"",selected:0,releaseWeeks:[{value:0,text:"Select a week"}]}},computed:Object(o.a)({filterComics:{get:function(){return this.textStr},set:function(t){this.textStr=t}}},Object(l.c)("comics",["getReleaseWeeks"])),methods:Object(o.a)({handleSelect:function(t){var e=this;this.selected=t,this.setStartDate(this.getReleaseWeeks[t].start),this.setEndDate(this.getReleaseWeeks[t].end),this.$nextTick(function(){e.$nuxt.$loading.start(),e.fetchComics().then(function(){e.$nuxt.$loading.finish()}).catch(function(t){console.log("From page - ".concat(t)),e.$nuxt.$loading.finish()})})},handleInput:function(){this.setFilter(this.textStr)}},Object(l.b)("comics",["fetchComics","setStartDate","setEndDate","setWeeks","setFilter"])),mounted:function(){this.setWeeks(),this.releaseWeeks=this.getReleaseWeeks.map(function(t,e){return{value:e,text:t.start}})}},r=c(24),m=Object(r.a)(n,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"mt-3"},[c("b-form",{attrs:{inline:""}},[c("b-form-group",{staticClass:"flex-fill px-1"},[c("b-input",{staticClass:"w-100",attrs:{id:"comic-books-filter",placeholder:"Filter comics by typing here..."},on:{keyup:t.handleInput},model:{value:t.filterComics,callback:function(e){t.filterComics=e},expression:"filterComics"}})],1),t._v(" "),c("b-form-group",{staticClass:"flex-fill pl-0 pl-sm-2 pl-md-4"},[c("label",{staticClass:"float-left mt-1 mr-1"},[t._v("Release week:")]),t._v(" "),c("b-form-select",{attrs:{id:"release-weeks",options:t.releaseWeeks},on:{change:t.handleSelect},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)},[],!1,null,null,null).exports,d={props:{comic:Object}},f=(c(245),Object(r.a)(d,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"card align-self-stretch mb-3 mb-md-5"},[c("img",{directives:[{name:"b-modal",rawName:"v-b-modal",value:""+t.comic.id,expression:"`${comic.id}`"},{name:"lazy",rawName:"v-lazy",value:t.comic.image.small_url,expression:"comic.image.small_url"}],staticClass:"card-img-top",attrs:{alt:t.comic.volume.name}}),t._v(" "),c("div",{staticClass:"card-body d-flex flex-column justify-content-center"},[c("div",[c("h5",{directives:[{name:"b-modal",rawName:"v-b-modal",value:""+t.comic.id,expression:"`${comic.id}`"}],staticClass:"card-title"},[t._v(t._s(t.comic.volume.name))]),t._v(" "),c("p",{staticClass:"card-text"},[t._v("Issue #"+t._s(t.comic.issue_number))]),t._v(" "),c("small",{staticClass:"text-primary font-italic"},[t._v("Store date: "+t._s(t.comic.store_date))])])]),t._v(" "),c("b-modal",{attrs:{id:""+t.comic.id,title:t.comic.volume.name+" #"+t.comic.issue_number}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.comic.image.small_url,expression:"comic.image.small_url"}],staticClass:"card-img-top",attrs:{alt:t.comic.volume.name}}),t._v(" "),c("p",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.comic.description)}}),t._v(" "),c("small",{staticClass:"text-primary font-italic"},[t._v("Store date: "+t._s(t.comic.store_date))])])],1)},[],!1,null,"4a5af8fd",null).exports),h={data:function(){return{currentPage:1}},methods:Object(o.a)({pageHandler:function(t){var e=20*(t-1);this.setOffset(e),this.fetchComics()}},Object(l.b)("comics",["fetchComics","setOffset"])),computed:Object(o.a)({},Object(l.c)("comics",["getTotalResults"]))},v={components:{GridItem:f,Pagination:Object(r.a)(h,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"overflow-auto"},[c("div",{staticClass:"mt-3"},[c("b-pagination",{attrs:{"total-rows":228},on:{change:t.pageHandler},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},[],!1,null,null,null).exports},computed:Object(o.a)({},Object(l.c)("comics",["getComicBooks","getComicsLoaded"]))},_={components:{Form:m,Grid:Object(r.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{staticClass:"mt-2"},[this.getComicsLoaded?e("b-row",{staticClass:"d-flex justify-content-center"},[e("Pagination")],1):this._e(),this._v(" "),this.getComicsLoaded?e("b-row",this._l(this.getComicBooks,function(t){return e("b-col",{key:""+t.id,staticClass:"d-flex",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("GridItem",{attrs:{comic:t}})],1)}),1):this._e()],1)},[],!1,null,null,null).exports},methods:Object(o.a)({},Object(l.b)("comics",["fetchComics"])),mounted:function(){var t=this;this.$nextTick(function(){t.$nuxt.$loading.start(),t.fetchComics().then(function(){t.$nuxt.$loading.finish()}).catch(function(e){console.log("From page - ".concat(e)),t.$nuxt.$loading.finish()})})}},x=Object(r.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Form"),this._v(" "),e("Grid")],1)},[],!1,null,null,null);e.default=x.exports}}]);