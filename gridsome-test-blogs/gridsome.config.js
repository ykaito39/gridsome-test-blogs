module.exports = {
  	siteName: 'ykaito39s Blog',
  	plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
			typeName:'Post',
        	baseDir: './src/content/posts/', //In my case, Including "src/" worked correctly.
		    path: '*.md',
			route: ':slug',
			refs: {
				tags: {
				  typeName: 'Tag',
				  route: '/tag/:id',
				  create: true
				}
			}
		}
	}
    ],
	templates: {
		Post:[
			{
				path: '/blog/:year-:month/:title',
				component: './src/templates/Post.vue'
			}
		]
	}
}

