import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended, // eslint:recommended

  {
    files: ["*.js", "tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        describe: "readonly", // Jest globals
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "prefer-const": "warn",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "semi": ["error", "always"]
    }
  },

  // Prettier integration
  {
    files: ["*.js", "tests/**/*.js"],
    ignores: [],
    rules: {
      ...prettier.rules
    }
  }
];
