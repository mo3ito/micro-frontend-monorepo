import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const isProduction = mode === "production";

  return {
    plugins: [
      react(),

      federation({
        name: "shell",
        remotes: {
          products: {
            type: "module",
            name: "products",
            entry: isProduction
              ? env.VITE_PRODUCTS_PREVIEW
              : env.VITE_PRODUCTS_DEV,
          },
          cart: {
            type: "module",
            name: "cart",
            entry: isProduction ? env.VITE_CART_PREVIEW : env.VITE_CART_DEV,
          },
          auth: {
            type: "module",
            name: "auth",
            entry: isProduction ? env.VITE_AUTH_PREVIEW : env.VITE_AUTH_DEV,
          },
        },

        shared: ["react", "react-dom"],

        dts: {
          generateTypes: false,
          consumeTypes: true,
        },
      }),
    ],

    server: {
      port: 3000,
      strictPort: true,
      origin: "http://localhost:3000",
    },

    build: {
      target: "chrome89",
    },
  };
});
