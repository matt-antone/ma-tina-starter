import { Collection } from "tinacms";
import {titleSection} from './lib/title-section'

console.log(...titleSection)

const pages: Collection = {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    ...titleSection,
    {
      name: "hero",
      label: "Hero",
      type: "object",
      fields: [
        {
          name: "image",
          label: "Hero Image",
          type: "image"
        },
        {
          name: "alt",
          label: "Alternate Text",
          type: "string"
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
        }
      ],
    },
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
}

export default pages