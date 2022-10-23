import { UserConfig, ConfigEnv } from "vite";
import { resolve } from "path";

import proxy from "./config/vite/proxy";
import { createVitePlugins } from "./config/vite/plugin";
import { generateModifyVars } from "./config/themeConfig";
import { configManualChunk } from "./config/vite/optimizer";
import { VITE_DROP_CONSOLE, VITE_PORT } from "./config/constant";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log(command, mode);

  return {
    resolve: {
      alias: [
        { find: /^~/, replacement: resolve(__dirname, "") },
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/",
        },
      ],
    },

    // plugins
    plugins: createVitePlugins(isBuild),

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },

    server: {
      hmr: { overlay: false },
      port: VITE_PORT,
      open: false,
      cors: false,
      proxy,
    },

    build: {
      target: "es2015",
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: configManualChunk,
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
  };
};
