import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export const autoRegistryComponents = () => {
  return Components({
    dirs: ["src/components"],
    extensions: ["vue"],
    deep: true,
    resolvers: [AntDesignVueResolver({ importStyle: "less" })],
    dts: "src/components.d.ts",
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  });
};
