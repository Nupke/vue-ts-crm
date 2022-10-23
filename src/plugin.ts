import {
  Alert,
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Input,
  Layout,
  Menu,
  Popconfirm,
  Row,
  Select,
  Space,
  Spin,
  Table as AntdTable,
} from "ant-design-vue";

import type { App } from "vue";

import Icon from "/@/components/Icon/index.vue";

export function setupComponents(app: App<Element>) {
  app.component("Icon", Icon);

  app
    .use(Alert)
    .use(Avatar)
    .use(Breadcrumb)
    .use(Button)
    .use(Card)
    .use(Col)
    .use(DatePicker)
    .use(Divider)
    .use(Dropdown)
    .use(Form)
    .use(Input)
    .use(Layout)
    .use(Menu)
    .use(Popconfirm)
    .use(Row)
    .use(Select)
    .use(Space)
    .use(Spin)
    .use(AntdTable);
}
