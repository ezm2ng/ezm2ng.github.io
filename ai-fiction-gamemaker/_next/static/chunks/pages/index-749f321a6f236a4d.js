(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(85)}])},85:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var n=i(5893),l=i(9008),r=i.n(l),a=i(9854),s=i.n(a),o=i(545),c=i(1358),d=i(4051),x=i(1555),h=i(4119),_=i(3680),p=i(6968),u=i(7294),m=i(6154);function j(){let[e,t]=(0,u.useState)(""),[i,l]=(0,u.useState)(""),[a,j]=(0,u.useState)(!1),[g,Z]=(0,u.useState)(!1),[T,v]=(0,u.useState)({title:"",genre:"",developer:"",price:"",release_date:"",initial_bounus:"",initial_sales:"",platform:"",sumally:"",bug:""}),f=()=>{j(!1),Z(!0),y()},b=e=>{console.log(e),v({title:e.title,genre:e.genre,price:e.price,developer:e.developer,release_date:e.release_date,initial_bounus:e.initial_bounus,initial_sales:e.initial_sales,platform:e.platform,sumally:e.sumally,bug:e.bug}),j(!0),Z(!1)},y=()=>{let t=""!=e.trim()?e.split("\n"):[],n=""!=i.trim()?i.split("\n"):[];m.Z.post("https://vgc.dev.i-kotoba.net/api/create-vgame",{character:t,salt:n}).then(e=>{b(e.data)})},w=e=>{t(e.target.value)},H=e=>{l(e.target.value)},C=e=>{let t="【タイトル】"+T.title+"\n";t+="【ジャンル】"+T.genre+"\n【価格】"+T.price+"\n【発売日】"+T.release_date+"\n【初回特典】"+T.initial_bounus+"\n【初回売上本数】"+T.initial_sales+"\n【対応ハード】"+T.platform+"\n【概要】\n"+T.sumally+"\n【面白いバグ】\n"+T.bug+"\n",navigator.clipboard.writeText(t)},N=()=>a?(0,n.jsx)("div",{children:(0,n.jsxs)(o.Z,{style:{maxWidth:"30rem",padding:"10px",margin:"20px"},children:[(0,n.jsx)(o.Z.Title,{children:"タイトル"}),(0,n.jsx)(o.Z.Text,{children:T.title}),(0,n.jsx)(o.Z.Title,{children:"ジャンル"}),(0,n.jsx)(o.Z.Text,{children:T.genre}),(0,n.jsx)(o.Z.Title,{children:"メーカー"}),(0,n.jsx)(o.Z.Text,{children:T.developer}),(0,n.jsx)(o.Z.Title,{children:"価格"}),(0,n.jsx)(o.Z.Text,{children:T.price}),(0,n.jsx)(o.Z.Title,{children:"発売日"}),(0,n.jsx)(o.Z.Text,{children:T.release_date}),(0,n.jsx)(o.Z.Title,{children:"初回特典"}),(0,n.jsx)(o.Z.Text,{children:T.initial_bounus}),(0,n.jsx)(o.Z.Title,{children:"初回売上本数"}),(0,n.jsx)(o.Z.Text,{children:T.initial_sales}),(0,n.jsx)(o.Z.Title,{children:"対応ハード"}),(0,n.jsx)(o.Z.Text,{children:T.platform}),(0,n.jsx)(o.Z.Title,{children:"概要"}),(0,n.jsx)(o.Z.Text,{children:T.sumally}),(0,n.jsx)(o.Z.Title,{children:"面白いバグ"}),(0,n.jsx)(o.Z.Text,{children:T.bug})]})}):(0,n.jsx)(n.Fragment,{});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"AI虚構ゲームメーカー"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:s().main,style:{width:"100%"},children:[(0,n.jsx)("h3",{style:{margin:"30px"},children:"AI虚構ゲームメーカー(v0.2)"}),(0,n.jsxs)(c.Z,{style:{width:"100%",padding:"30px"},children:[(0,n.jsx)(d.Z,{className:"g-2",children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(h.Z,{controlId:"floatingTextarea2",label:"登場人物名を入力(改行で複数入力可)",children:(0,n.jsx)(c.Z.Control,{as:"textarea",style:{maxWidth:"500px",height:"180px"},value:e,onChange:w})})})}),(0,n.jsx)(d.Z,{className:"g-2",style:{marginTop:"20px"},children:(0,n.jsx)(x.Z,{children:(0,n.jsx)(h.Z,{controlId:"floatingTextarea2",label:"オプションで何か加えたい要素を入力(改行で複数入力可)",children:(0,n.jsx)(c.Z.Control,{as:"textarea",style:{maxWidth:"500px",height:"100px"},value:i,onChange:H})})})}),(0,n.jsx)(d.Z,{style:{marginTop:"20px"},children:(0,n.jsx)(x.Z,{children:g?(0,n.jsxs)(_.Z,{variant:"primary",disabled:!0,children:[(0,n.jsx)(p.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"AIが考えています..."]}):(0,n.jsxs)("div",{children:[(0,n.jsx)(_.Z,{variant:"primary",type:"button",onClick:f,children:"Generate!"}),(0,n.jsx)(_.Z,{variant:"primary",type:"button",onClick:C,style:{marginLeft:"10px"},children:"Copy to Clipboard"})]})})})]}),(0,n.jsx)(N,{})]})]})}},9854:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}}},function(e){e.O(0,[654,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);