import type { SchemaField } from "tinacms"


const draft: SchemaField = {
  label: "Draft",
  name: "draft",
  type: "boolean",
}

const date: SchemaField =   {
  type: "datetime",
  label: "Posted Date",
  name: "date",
  required: true,
  ui: {
    dateFormat: "MMMM DD YYYY",
    timeFormat: "hh:mm A",
  },
}

const title: SchemaField =  {
  type: "string",
  label: "Title",
  name: "title",
  required: true,
  description: "Title of this page.",
}

const slug: SchemaField =  {
  type: "string",
  label: "Slug",
  name: "slug",
  required: false,
  description: "The URL slug for this page.",
}

export const titleSection = [
  draft,
  date,
  title,
  slug,
]
