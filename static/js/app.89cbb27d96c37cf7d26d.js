webpackJsonp([0],{"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticStyle:{overflow:"scroll",height:"8vh"},attrs:{dense:"",color:"black",ripple:""}},[n("v-layout",{attrs:{"justify-center":"","fill-height":""}},[n("v-toolbar-items",[n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("v-btn",{staticStyle:{height:"8vh","min-width":"10vw","font-weight":"bold"},attrs:{flat:"",color:"white"}},[t._v("\n          Top\n        ")])],1),t._v(" "),t._l(t.items,function(e){return n("router-link",{key:e.to,staticClass:"link",attrs:{to:e.to}},[n("v-btn",{staticStyle:{height:"8vh","min-width":"10vw","font-weight":"bold"},attrs:{flat:"",color:"white"}},[t._v("\n          "+t._s(e.to)+"\n        ")])],1)})],2)],1)],1)},staticRenderFns:[]};var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{dark:"",height:"auto"}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"black"},[n("strong",{staticClass:"subheading"},[t._v("My other links. Please come to my other pages!")]),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.items,function(e){return n("v-btn",{key:e.link,staticClass:"mx-3",attrs:{"aria-label":"links",dark:"",icon:"",href:e.link,target:"_blank",rel:"noopener"}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)})],2)],1)],1)},staticRenderFns:[]};var r={name:"App",components:{myHeader:n("VU/8")({name:"myHeader",data:function(){return{items:[{to:"Profile"},{to:"Skill"},{to:"Works"},{to:"Contact"}]}}},i,!1,function(t){n("RErQ")},null,null).exports,myFooter:n("VU/8")({name:"myFooter",data:function(){return{items:[{icon:"fab fa-facebook",link:"https://www.facebook.com/kazuki.takahashi.3591"},{icon:"fab fa-twitter",link:"https://twitter.com/kzkzkzk55"},{icon:"fab fa-github",link:"https://github.com/kazuki5555"},{icon:"fab fa-quora",link:"https://qiita.com/kazuki5555"}]}}},s,!1,function(t){n("bvCP"),n("pECB")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("myHeader"),this._v(" "),e("div",{attrs:{id:"content"}},[e("router-view")],1),this._v(" "),e("myFooter")],1)},staticRenderFns:[]};var o=n("VU/8")(r,l,!1,function(t){n("z9nT")},null,null).exports,c=n("3EgV"),u=n.n(c),f=n("/ocq"),v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-parallax",{attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",height:"824",alt:"top page"}},[e("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[e("h1",{staticClass:"display-2 font-weight-thin mb-3"},[this._v("Kazuki Takahashi's Portfolio")])])],1)},staticRenderFns:[]};var h=n("VU/8")({data:function(){return{msg:"Profile"}}},v,!1,function(t){n("UTw3")},null,null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{staticClass:"row",attrs:{row:""}},[e("v-flex",{staticClass:"flex",attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-card",{staticClass:"card"},[e("v-list",{staticClass:"list",attrs:{"two-line":""}},[e("v-list-tile",{staticClass:"head"},[e("v-list-tile-content",[e("b",[e("v-list-tile-title",{domProps:{textContent:this._s(this.item.title)}})],1)])],1),this._v(" "),e("v-list-tile",[e("v-list-tile-content",{staticClass:"par-content"},[e("v-list-tile-content",{staticClass:"content",domProps:{textContent:this._s(this.item.content)}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},d=n("VU/8")({name:"profile",props:["item"],data:function(){return{}}},p,!1,null,null,null).exports,m={name:"About",components:{profile:d},data:function(){return{profiles:[{title:"Name",content:"高橋一貴(タカハシカズキ)"},{title:"Work",content:"バックエンドエンジニア"},{title:"BirthDay",content:"1995/08/29"},{title:"Engineer Carrer",content:"2018/04~"},{title:"Education",content:"立教大学経済学部"},{title:"Licenses",content:"普通自動車免許,IELTS Over All Score6.0"},{title:"Favorite",content:"サッカー、水泳、サーフィン、音楽、お酒"}]}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",{staticStyle:{"text-align":"center"}},[this._v("Profile")]),this._v(" "),e("p",this._l(this.profiles,function(t){return e("profile",{key:t.title,staticClass:"prof",attrs:{item:t}})}))])},staticRenderFns:[]};var _=n("VU/8")(m,k,!1,function(t){n("Uven")},"data-v-c4d4174a",null).exports,C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-expansion-panel",{attrs:{popout:""}},[e("v-expansion-panel-content",[e("div",{attrs:{slot:"header"},slot:"header"},[e("b",[this._v(this._s(this.item.name))])]),this._v(" "),e("v-card",[e("v-card-text",[this._v(this._s(this.item.detail))])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},y={name:"Skill",components:{skillPanel:n("VU/8")({name:"skillPanel",props:["item"],data:function(){return{}}},C,!1,null,null,null).exports},data:function(){return{skills:[{name:"PHP/Laravel",detail:"主に社内管理ツールの作成を行っています。2ヶ月で基本的な勉強をした後にLaravelで実務を行っており、最も多用している言語、フレームワークになります。"},{name:"HTML5/CSS3",detail:"社内管理ツールのために最低限押さえてはいます。使用歴のあるライブラリはMaterialize CSSとVuetifyです。"},{name:"JavaScript/Vue.js",detail:"社内管理ツールのフロント側でイベントを発火させるためにJavaScriptを生で使用しています。独学で勉強しつつ実務で慣れるという形をとっておりますが、まだ調べながらの実装になることが多いです。Vue.jsはこのポートフォリオを完成させるために勉強を始めました。使用歴はまだ浅いです。"},{name:"Git",detail:"社内管理ツール開発におけるバージョン管理に使用しています。社内ではBackLogのGitを、プライベートではGithubを使用しています。基本的なpull,push,commit,clone,initなどは問題なく扱えます。"},{name:"GCP",detail:"最近、社内管理ツールのテスト環境及び本番環境とその他サーバーをオンプレからGCPに移行する際に初めて触りました。GCEにてインスタンスを作成して、CentOS上にnginx,php,php-fpmをインストールして一通り環境を構築するところまでは経験があります。"},{name:"MySQL",detail:"基本動作は問題なく使えます。上記のPHP/Laravelと並行して実務経験があります。"},{name:"Golang",detail:"書籍にて勉強後、業務用スクレイピングツールを開発中です。"}]}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",{staticStyle:{"text-align":"center"}},[this._v("Skill")]),this._v(" "),e("p",this._l(this.skills,function(t){return e("skillPanel",{key:t.name,attrs:{item:t}})}))])},staticRenderFns:[]},b=n("VU/8")(y,g,!1,null,null,null).exports,x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",{staticStyle:{"text-align":"center"}},[t._v("Contact")]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs4:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{staticClass:"gray--text mx-auto",class:"elevation-"+(a?12:2),attrs:{raised:"",href:"mailto:"+t.address,contain:""}},[n("v-card-text",[n("div",{staticClass:"headline",staticStyle:{"text-align":"center","word-wrap":"break-word"}},[n("v-icon",[t._v("fa-envelope")]),t._v(" "),n("span",[t._v(t._s(t.address))])],1)])],1)}}])})],1)],1)],1)},staticRenderFns:[]};var P=n("VU/8")({name:"Contact",data:function(){return{address:"kzk0829kop@gmail.com"}}},x,!1,function(t){n("QpFE")},null,null).exports,w={name:"Works",components:{profile:d},data:function(){return{profiles:[{title:"アフィリエイトサービスプロバイダ改修PJ",content:"弊社の既存ASPの改修をPHP/ZendFramworkを用いて行った。10年動いてる巨大モノリシックシステムなため、現状調査に時間をかけ柔軟性が出るように対応"},{title:"社内向け広告配信管理ツール開発PJ",content:"PHP/Laravelでの開発PJに途中からアサインされる。要件定義からリリースまでの工程を全て経験。フロントではVue.jsも用いて開発。綺麗なコード、保守性の高いプロダクトとはというものを学ぶ。また、パフォーマンスチューニングも行なった。"},{title:"管理ツール移行PJ",content:"上記管理ツールのサーバーをオンプレからGCPに移行するPJ。知識は無かったものの、自らの興味から手をあげて担当。必要なものをインストールして動くところまで経験。クラウド、インフラの楽しさを感じる。また、CIツールJenkinsの導入も同時に行い、自動デプロイ化。"},{title:"管理ツール開発環境Docker化PJ",content:"こちらも上記ツール関連。今までvagrantで動いていたものを、Dockerに変更。これも知識が無かったため、勉強や試行錯誤しながら環境構築にかかる工数を大幅に削った。"},{title:"指定キーワード検索結果スクレイピングプログラム",content:"Golangの勉強のアウトプットの一環として開発中。指定したキーワードのyahoo検索結果から、特定条件に当たるものを抽出し、CSVにてダウンロードできる機能をGAE環境にて開発中。"}]}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",{staticStyle:{"text-align":"center"}},[this._v("Works")]),this._v(" "),e("p",this._l(this.profiles,function(t){return e("profile",{key:t.title,staticClass:"prof",attrs:{item:t}})}))])},staticRenderFns:[]};var E=n("VU/8")(w,S,!1,function(t){n("ckmw")},"data-v-41bbc0c7",null).exports;a.default.use(f.a);var F=new f.a({mode:"history",routes:[{path:"/",name:"Top",component:h},{path:"/Profile",name:"Profile",component:_},{path:"/Skill",name:"Skill",component:b},{path:"/Contact",name:"Contact",component:P},{path:"/Works",name:"Works",component:E}],base:"Portfolio/"}),V=n("AYPi"),U=n.n(V);n("7zck"),n("gJtD"),n("ao2D");a.default.config.productionTip=!1,a.default.use(u.a,{iconfont:"fa"}),a.default.use(U.a,{id:"UA-131254399-1",router:F}),new a.default({el:"#app",router:F,components:{App:o},template:"<App/>",data:{}})},QpFE:function(t,e){},RErQ:function(t,e){},UTw3:function(t,e){},Uven:function(t,e){},ao2D:function(t,e){},bvCP:function(t,e){},ckmw:function(t,e){},gJtD:function(t,e){},pECB:function(t,e){},z9nT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.89cbb27d96c37cf7d26d.js.map