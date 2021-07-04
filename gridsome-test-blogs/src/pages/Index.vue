<template>
<layout>
<header class="header">
  <h1>ykaito39's Home Page!</h1>
  <p>An portfolio pages. Made with Gridsome+Netlify.</p>
  <g-link to="/about/" class="link"> About ykaito39</g-link>
</header>

<h2>投稿一覧</h2>
<g-link v-for="{node} in $page.allPost.edges" :to="node.path" :key="node.id">
	<h3 class="text-xs link">{{ node.title }}</h3>
</g-link>
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
