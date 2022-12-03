import { Collection } from "tinacms";

const menus: Collection = {
  label: "Menus",
  name: "menus",
  path: "content/menus",
  format: "json",
  fields: [
    {
      name: "items",
      label: "Items",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label ? item.label : "New Menu Item"}
        },
      },
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label"
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "string",
          name: "title",
          label: "Title"
        },
     ]
    },
  ],
  ui: {
  },
}

export default menus