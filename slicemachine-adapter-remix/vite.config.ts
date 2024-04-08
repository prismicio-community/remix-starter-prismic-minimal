import { defineConfig } from "vite";
import sdk from "vite-plugin-sdk";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [sdk({ internalDependencies: ["pascal-case"] }), react()],
  build: {
    lib: {
      entry: {
        index: "./src/index.ts",
        simulator: "./src/simulator/index.ts",
      },
    },
  },
});
