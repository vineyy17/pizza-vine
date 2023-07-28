import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "/src/styles/utils/_mixins.scss";
        @import "/src/styles/utils/_variables.scss";
        @import "src/styles/utils/_breakpoints.scss";
        @import "src/styles/shared/_titles.scss";
        @import "src/styles/shared/_descriptions.scss";
        `,
      },
    },
  },
});
