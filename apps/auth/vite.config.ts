import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./Login": "./src/components/Login.tsx",
      },
      shared: ["react", "react-dom"],
      dts: {
        generateTypes: {
          tsConfigPath: "./tsconfig.mf.json",
          abortOnError: true,
        },
        consumeTypes: false,
      },
    }),
  ],
  server: {
    port: 3003,
    strictPort: true,
  },
});
