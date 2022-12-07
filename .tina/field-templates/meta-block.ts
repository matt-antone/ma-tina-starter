import type { TinaField } from "tinacms"
import global from '@content/global/index.json' assert { type: 'json' }

const categories = global.categories.map( cat => {
  return {
    label: cat,
    value: cat
  }
} )

const featured: TinaField =   {
  type: "object",
  name: "featuredImg",
  label: "Featured Images",
  required: false,
  list: true,
  description: "Add some images for SEM use.",
  fields: [
    {
      label: "Source",
      name: "src",
      type: "image",
      required: true,
    },
    {
      label: "Alternative Text",
      name: "alt",
      type: "string",
      required: true,
    }
  ]
}

const excerpt: TinaField = {
  type: "string",
  label: "Excerpt",
  name: "excerpt",
  description: "Used on archive pages and for SEO. This description is displayed in search engine results.",
  ui: {
    component: "textarea",
  }
}

const taxonomy: TinaField = {
  label: "Taxonomy",
  name: "taxonomy",
  type: "object",
  fields: [
    {
      label: "Categories",
      name: "categories",
      type: "string",
      list: true,
      options: categories
    }
  ],
}


export const metaBlock = [
  featured,
  excerpt,
  taxonomy,
]