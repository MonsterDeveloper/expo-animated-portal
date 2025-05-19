import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import universeNative from "eslint-config-universe/flat/native.js";
import universeWeb from "eslint-config-universe/flat/web.js";
import prettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.{js,ts,tsx}"],
    plugins: {
      js,
    },
    extends: ["js/recommended", universeNative, universeWeb],
  },
  globalIgnores(["**/build"]),
  prettier,
]);
