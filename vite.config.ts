import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "node:url";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  resolve: {
    alias: {
      "slicemachine-adapter-remix/simulator": fileURLToPath(
        new URL("./slicemachine-adapter-remix/dist/simulator", import.meta.url)
      ),
    },
  },
});
