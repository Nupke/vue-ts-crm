import type { RouteRecord, RouteRecordRaw } from "vue-router";

type IRouteRecordRaw = RouteRecordRaw & { childrenPaths?: string[] };

export function clearMenuItem(
  menusData: RouteRecord[] | RouteRecordRaw[]
): RouteRecordRaw[] {
  const filterHideMenus = menusData
    .map((item: RouteRecord | RouteRecordRaw) => {
      const finalItem = { ...item };
      if (!finalItem.name || finalItem.meta?.hideInMenu) {
        return null;
      }

      if (finalItem && finalItem?.children) {
        if (
          !finalItem.meta?.hideChildInMenu &&
          finalItem.children.some(
            (child: RouteRecord | RouteRecordRaw) =>
              child && child.name && !child.meta?.hideInMenu
          )
        ) {
          return {
            ...item,
            children: clearMenuItem(finalItem.children),
          };
        }
        delete finalItem.children;
      }
      return finalItem;
    })
    .filter((item) => item) as IRouteRecordRaw[];

  //

  return filterHideMenus;
}

export const filterRoutes = (menusData: RouteRecordRaw[]): RouteRecordRaw[] => {
  const filterRoutes: string[] = [];
  menusData.forEach((n) => {
    if (n.children) {
      n.children.forEach(({ path }) => filterRoutes.push(path));
    }
  });

  return menusData.filter(({ path }) => !filterRoutes.includes(path));
};
