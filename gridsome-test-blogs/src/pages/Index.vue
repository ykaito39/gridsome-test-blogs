<template>
<layout>
<header class="header">
  <h1>ykaito39's Home Page!</h1>
  <p>An portfolio pages. Made with Gridsome+Netlify.</p>
  <g-link to="/about/" class="link"> About ykaito39</g-link>
</header>

<ul>
<h2>投稿一覧</h2>
<li v-for="{node} in $page.allPost.edges">
	<h2 v-html="node.title" class="text-xs"/>
</li>
</ul>
</layout>
</template>

<page-query>
query ($page: Int){
	allPost(page: $page){
		edges{
			node{
        		title
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
