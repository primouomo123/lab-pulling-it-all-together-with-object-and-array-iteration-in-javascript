import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node },
    rules: {
      "no-console": "warn",       // Warn instead of error for console.log
      "semi": ["error", "always"], // Require semicolons
      "quotes": ["error", "double"], // Enforce double quotes
      "eqeqeq": "error",          // Require === instead of ==
      'no-undef': 'error', // Ensure variables are defined
      'curly': 'error',
    },
  },
]);