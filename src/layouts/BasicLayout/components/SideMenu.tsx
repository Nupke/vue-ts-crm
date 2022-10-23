import { Layout, Menu, Space } from "ant-design-vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import Icon from "/@/components/Icon/index.vue";
import { PropType, h, Transition } from "vue";
import { router } from "/@/router";
import { MenuDataItem } from "/@/layouts/BasicLayout/utils/typings";
import './index.less';

export default defineComponent({
  name: "BaseMenu",
  props: {
    theme: {
      type: String,
      default: "light",
    },
    menuWidth: {
      type: Number,
      default: 200,
    },
    menuData: {
      type: Array as PropType<MenuDataItem[]>,
      default: () => [],
    },
  },
  setup(props) {
    const state = reactive<any>({
      collapsed: false,
      openKeys: [],
      selectedKeys: [],
    });

    watchEffect(() => {
      if (router.currentRoute) {
        const matched = router.currentRoute.value.matched.concat();
        state.selectedKeys = matched
          .filter((r) => r.name !== "index")
          .map((r) => r.path);
        state.openKeys = matched
          .filter((r) => r.path !== router.currentRoute.value.path)
          .map((r) => r.path);
      }
    });

    const onSelect = (
      e: { key: string; item: { props: { routeId: number } } } | any
    ) => {
      router.push(e.key);
    };

    const getIcon = (type?: string) =>
      type ? <Icon type={type} className="sideMenu-icon" /> : null;

    const makeTreeDom = (data: MenuDataItem[]): JSX.Element[] => {
      return data.map((item: MenuDataItem) => {
        if (item.children) {
          return (
            <Menu.SubMenu
              key={item.path}
              title={
                <>
                  {getIcon(item.meta?.icon as string)}
                  <span>{item.meta?.title}</span>
                </>
              }
            >
              {makeTreeDom(item.children)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item key={item.path}>
            {getIcon(item.meta?.icon as string)}
            <span>{item.meta?.title}</span>
          </Menu.Item>
        );
      });
    };

    return () => {
      return (
        <Layout.Sider
          width={200}
          collapsedWidth={54}
          class="my-sideMenu-sider"
          theme="light"
          trigger={null}
          breakpoint="lg"
          onBreakpoint={(val) => (state.collapsed = val)}
          collapsible
          collapsed={state.collapsed}
        >
          <Transition name="fade-top">
            {!state.collapsed && (
              <div class="my-sideMenu-sider_logo">
                <Space align="center" class="link">
                  <Icon type="guanlipingtai" size="20px" align="0px" />
                  <span class="font16 nowrap">Тест</span>
                </Space>
              </div>
            )}
          </Transition>

          <Menu
            theme="light"
            mode="inline"
            selectedKeys={state.selectedKeys}
            {...(state.collapsed ? {} : { openKeys: state.openKeys })}
            onOpenChange={(keys: any[]) => (state.openKeys = keys)}
            onSelect={onSelect}
            class="my-sideMenu-sider_menu"
          >
            {makeTreeDom(props.menuData)}
          </Menu>

          <div class="my-sideMenu-sider_footer">
            {h(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              style: { fontSize: 16 },
              onClick: () => (state.collapsed = !state.collapsed),
            })}
          </div>
        </Layout.Sider>
      );
    };
  },
});
