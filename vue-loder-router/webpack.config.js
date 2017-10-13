module.exports = {
	entry:'./main.js',

	output:{
		path:__dirname,
		filename:'bundle.js'
	},

	module:{
		// 注意 loader是数组 
		loaders:[
			{test:/\.vue$/, loader:'vue'},
			{test:/\.js$/, loader:'babel',exclude:'/node_modules/'}
		]
	},
	babel:{
		presets:['es2015'],
		plugins:['transform-runtime']
	}
}