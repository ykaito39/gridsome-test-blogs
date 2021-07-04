<template>
  <main class="layout" role="main">
    <slot/>
    <div class="footer">
    </div>
  </main>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #F1F1F1;
  line-height: 1.5;
  min-height: 100vh;
  background-color: #0A2A3A;
}
.layout {
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

//linkのアニメーション(borderを左右に表示)
@keyframes link_animation{
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
}
</style>
