const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
		{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/,
			query:
			{
			  presets:['react', 'stage-3']
			}
		}, 
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	// devServer: {
	// 	contentBase: path.join(__dirname, 'public')
	// },
	devServer: {
		 contentBase: path.join(__dirname, 'public'),
		 
		//  contentBase: path.join(__dirname, 'public'),
		 historyApiFallback: true,
		 
		//  historyApiFallback: true,
		//  proxy: {
    //   '^\/users|sitters|bookings': {
    //     target: 'http://127.0.0.1:8080',
    //     rewrite: function(req) {
		// 			console.log('in webpack config');
    //       req.url = req.url.replace(/^\/api/, '');
    //     }
    //   }
    // },
},

	// watch: true
};
