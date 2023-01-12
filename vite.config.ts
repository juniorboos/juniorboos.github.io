import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "~stitches",
        replacement: path.resolve(__dirname, "src/theme/stitches.config.ts"),
      },
      {
        find: "~atoms",
        replacement: path.resolve(__dirname, "./src/components/atoms"),
      },
      {
        find: "~molecules",
        replacement: path.resolve(__dirname, "./src/components/molecules"),
      },
      {
        find: "~theme",
        replacement: path.resolve(__dirname, "./src/theme"),
      },
    ],
  },
});
