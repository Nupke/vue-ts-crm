import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { configStyleImportPlugin } from "./styleImport";
import { configSvgIconsPlugin } from "./svgIcons";
import { autoRegistryComponents } from "./component";
import { AutoImportDeps } from "./autoImport";
import { configMockPlugin } from "./mock";
import { configVisualizerConfig } from "./visualizer";
import { configCompressPlugin } from "./compress";

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    autoRegistryComponents(),
    AutoImportDeps(),
  ];

  isBuild && vitePlugins.push(configCompressPlugin());
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  vitePlugins.push(configMockPlugin(isBuild));
  vitePlugins.push(configVisualizerConfig());
  vitePlugins.push(configStyleImportPlugin(isBuild));

  return vitePlugins;
}
