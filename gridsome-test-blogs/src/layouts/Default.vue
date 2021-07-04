<template>
  <main class="layout" role="main">
    <slot><g-link to="/" class="link">HOME</g-link></slot><!-- Page content will be inserted here -->
  </main>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&display=swap');

/* Reset CSS */
*,::after,::before{box-sizing:border-box}html{line-sizing:normal}body{margin:0}[hidden]{display:none}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h4{font-size:1rem}h5{font-size:.83rem}h6{font-size:.67rem}h1{margin:.67em 0}pre{white-space:pre-wrap}hr{border-style:solid;border-width:1px 0 0;color:inherit;height:0;overflow:visible}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle;max-width:100%}audio:not([controls]){display:none}picture{display:contents}source{display:none}canvas,img,svg,video{height:auto}audio{width:100%}img{border-style:none}svg{overflow:hidden}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}

/* User CSS */
body {
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0;
  padding: 0;
  color: #F1F1F1;
  line-height: 1.5;
  min-height: 100vh;
  background-color: #0A2A3A;
}
.layout{
  margin: 0 auto;
}

.body-layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}
h2 {
  margin: 20px 0 5px 0;
}

p {
  margin: 5px, 0;
}

.link{
  color: #61c2d3;
  text-decoration: none;
  transition: all .3s;
  position:relative;
}
.link:hover:before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: solid 2px;
  animation: link_animation .3s linear forwards;
}

/* linkのアニメーション(borderを左右に表示) */
@keyframes link_animation{
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
}

.addnote-box{
  border: 1px solid;
  padding: 5px;
  margin-left: 0px 10px 0px 10px;
}
</style>
