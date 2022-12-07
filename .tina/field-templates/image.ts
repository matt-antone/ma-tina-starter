import type { TinaField } from "tinacms"

const image: TinaField = {
  type: "object",
  name: "image",
  label: "Image",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "image",
      name: "source",
      label: "Image"
    },
    {
      type: "string",
      name: "alt",
      label: "Alternative Text",
    }
  ]
}

export default image