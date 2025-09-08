import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/iphone15-official-clone/" : "/", // ✅ dynamic
  plugins: [
    react(),
    sentryVitePlugin({})
  ],
  build: {
    sourcemap: true
  }
}));
