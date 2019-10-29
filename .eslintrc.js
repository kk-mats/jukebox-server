module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: [
		"airbnb-base",
		"prettier",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"prettier",
		"import"
	],
	rules:{
		"prettier/prettier": [
			"error",
			{
				tabWidth: 4,
				useTabs: true
			}
		]
	},
	parserOptions: {
		sourceType: "module",
		project: "./tsconfig.json"
	},
	settings: {
		"import/resolver": {
			typescript: {
				directory: "./tsconfig.json"
			}
		}
	}
}