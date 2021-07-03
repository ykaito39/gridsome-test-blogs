<template>
	<div>
    <h1 v-html="$page.post.title" />
	</div>
</template>

<page-query>
query Post($path: String!){
	post(path: $path){
		title
  }
}
</page-query>
