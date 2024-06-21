import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
];