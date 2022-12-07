import type { TinaField } from "tinacms"


const draft: TinaField = {
  label: "Published",
  name: "published",
  type: "boolean",
}

const date: TinaField =   {
  type: "datetime",
  label: "Posted Date",
  name: "date",
  required: true,
  ui: {
    dateFormat: "MMMM DD YYYY",
    timeFormat: "hh:mm A",
  },
}

const title: TinaField =  {
  type: "string",
  label: "Title",
  name: "title",
  required: true,
  description: "Title of this page.",
}

const slug: TinaField =  {
  type: "string",
  label: "Slug",
  name: "slug",
  required: false,
  description: "The URL slug for this page.",
}

export const titleBlock = [
  draft,
  date,
  title,
  slug,
]
