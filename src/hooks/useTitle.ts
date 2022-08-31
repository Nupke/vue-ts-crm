import { watch, unref } from "vue";
import { useTitle as usePageTitle } from "@vueuse/core";
import { useRouter } from 'vue-router';

export const useTitle = () => {
  const { currentRoute } = useRouter();

  const pageTitle = usePageTitle();

  watch(
    [() => currentRoute.value.path],
    () => {
      const route = unref(currentRoute);

      const tTitle = route?.meta?.title as string;
      pageTitle.value = tTitle;
    },
    { immediate: true }
  );
};
