const path = require('path')
module.exports = {
	entry: {
		main: path.resolve('src/index.ts')
	},

	module: {
    rules: [
        {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                // Use `.swcrc` to configure swc
                loader: "swc-loader"
            }
        }
    ]
	}
}