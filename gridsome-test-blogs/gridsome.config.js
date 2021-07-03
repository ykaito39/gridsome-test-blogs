module.exports = {
  siteName: 'Gridsome Blog',
  siteDescription: 'A simple blog designed with Gridsome',
  templates: {
    Post: '/blog/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
		typeName:'Post',
        path: './content/posts/',
		//route: ':slug',
		template: './src/templates/Post.vue',
		refs:{
			tags:{
				typeName:'Tag',
				route: 'tag/:id',
				create: true
			}
		}
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}

