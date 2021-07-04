<template>
	<div>
    	<h1 v-html="$page.post.title" />
		<div v-html="$page.post.content">
		</div>
	</div>
</template>

<page-query>
query Post($path: String!){
	post(path: $path){
		id
		title
		path
		content
  }
}
</page-query>
