import { Tooltip, Tag } from "ant-design-vue";
import { ColumnProps } from "ant-design-vue/es/table";

export const columns: ColumnProps[] = [
  {
    title: "Name",
    dataIndex: "name",
    width: 100,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 80,
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    width: 150,
    key: "toDateTime",
  },
  {
    title: "Updated At",
    dataIndex: "updated_at",
    width: 170,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: 150,
  },
  {
    title: "Description",
    dataIndex: "description",
    ellipsis: true,
    customRender: ({ text }) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  },
  {
    title: "Color",
    dataIndex: "color",
    customRender: ({ text }) => <Tag color={text}>text</Tag>,
    fixed: "right",
  },
];
