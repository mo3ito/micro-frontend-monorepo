import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/components/Cart.tsx",
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
    port: 3002,
    strictPort: true,
  },
});
