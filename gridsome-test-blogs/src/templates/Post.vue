<template>
	<div>
    <h1 v-html="$page.post.title" />
	</div>
</template>

<page-query>
query($id:ID!){
	post(id:$id){
	title
  }
}
</page-query>
