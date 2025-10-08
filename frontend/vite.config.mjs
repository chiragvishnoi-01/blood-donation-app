import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import history from "connect-history-api-fallback";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    fs: { strict: false },
    setupMiddlewares: (middlewares, { app }) => {
      app.use(history()); // SPA fallback
      return middlewares;
    },
  },
});
