import { getThemeVariables } from "ant-design-vue/dist/theme";

/**
 * less global variable
 */
export function generateModifyVars(dark = false) {
  const modifyVars = getThemeVariables({ dark });
  return {
    ...modifyVars,
    "primary-color": "#3860F4",
    "link-color": "#3860F4",
  };
}
