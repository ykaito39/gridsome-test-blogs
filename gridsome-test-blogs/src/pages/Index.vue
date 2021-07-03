<template>
<ul>
<li v-for="{node} in $page.allPost.edges">
	<h2 v-html="node.title" />
</li>
</ul>
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
