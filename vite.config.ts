import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev server binds to 0.0.0.0 so it is reachable inside the Cloud Agent VM.
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
