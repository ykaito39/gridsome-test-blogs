// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome test blog',
  siteDescription: "A test blog with gridsome.",
  plugins: [
	  {
  		use: "gridsome/source-filesystem",
  		options:{
  			path: "content:posts/**/*.md",
  			typeName:"post",
  		}
  	  }
  ]
}
