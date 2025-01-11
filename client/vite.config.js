import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Change to port 5000
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["@aws-sdk/client-s3"],
  },
  resolve: {
    alias: {},
  },
});
