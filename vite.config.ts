import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env-compatible";
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), env({ prefix: "VITE", mountedPath: "process.env" })],
})
