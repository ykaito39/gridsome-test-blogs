<template>
<layout>
  <div class="slide">
    <div class="slide-img"></div>
    <div class="slide-img"></div>
    <div class="slide-img"></div>
    <h1>ykaito39's Home Page!</h1>
  </div>

  <div class="body-layout">
    <div class="scroll-stop-box">
    <div class="scroll-stop-body">
      <header class="header">
        <p>An portfolio pages. Made with Gridsome+Netlify.</p>
        <g-link to="/about/" class="link"> About ykaito39</g-link>
      </header>

      <h2>投稿一覧</h2>
      <g-link v-for="{node} in $page.allPost.edges" :to="node.path" :key="node.id">
        <div class="post-card link">
          <h3>{{ node.title }}</h3>
          <p>{{ node.date }}</p>
        </div>
      </g-link>
    </div>
  </div>
  </div>
</layout>
</template>

<page-query>
query ($page: Int){
	allPost(page: $page){
		edges{
			node{
            id
        		title
            path
            date (format: "YYYY/MM/DD")
			}
		}
	}
}
</page-query>

<script>
export default{
metaInfo:{
  title:"Index"
  }
}
</script>

<style>
/* メディアクエリがうまくいかない */
@media all and (min-width:801px){
.slide{
  z-index: 1;
  position: relative;
  height: 100vh;
  overflow: hidden;
}}
@media all and (max-width:800px){
.slide{
  height:auto;
  z-index: 1;
  position: relative;
  overflow: hidden;
}}

@media all and (min-width:801px){
.slide .slide-img{
  min-height: 100vh;
  width: 100vw;
  position: absolute;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  animation: slideshow 36s linear infinite; /* この秒数が全体長さ */
  opacity: 0;
}}
@media all and (max-width:800px){
.slide .slide-img{
  height: 10%;
  width: 100vw;
  position: absolute;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  animation: slideshow 27s linear infinite; /* この秒数が全体長さ */
  opacity: 0;
}}


/* 表示秒/(表示秒+切替秒) = 4/(4+1) =0.25 */
@keyframes slideshow{
  0% {opacity: 0}
  5% {opacity: 1}
  43.3% {opacity: 1}
  50% {opacity: 0}
  100% {
    opacity: 0;
    transform: scale(1.05);
  }
}

.slide .slide-img:nth-child(1){
  background-image: url(../site_images/1.jpg);
}
.slide .slide-img:nth-child(3){
  background-image: url(../site_images/4.jpg);
  animation-delay: 9s;
}
.slide .slide-img:nth-child(4){
  background-image: url(../site_images/7.jpg);
  animation-delay: 18s;
}

.slide h1{
  position: absolute;
  bottom: 0;
  left: 20px;
}

.post-card{
  margin: 10px 0 0 0;
  display: flex;
  align-items:flex-end;
  height: 20px;
}

.post-card h3{
  margin: 0;
  padding: 0;
}

.post-card p{
  margin: 0;
  padding: 0, 10px;
}

.scroll-stop-box{
  z-index: 2;
  position: relative;
}

.scroll-stop-body{
  z-index: 2;
  position: sticky;

}
</style>
