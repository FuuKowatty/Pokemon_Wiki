module.exports = 
{
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/jsx-runtime"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint"],
    "rules": {
      "no-console": "warn",
      "no-debugger": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"]
    }
  }