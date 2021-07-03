module.exports = {
  	siteName: 'ykaito39s Blog',
  	plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
			typeName:'Post',
        	baseDir: './src/content/posts/', //In my case, Including "src/" worked correctly.
		    path: '*.md'
		}
	}
    ],
	templates: {
		Post:'/blog',
		}
}

