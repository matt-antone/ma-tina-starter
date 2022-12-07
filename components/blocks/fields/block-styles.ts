import type { SchemaField } from "tinacms"

const blockAlignment: SchemaField = {
  label: "Block Alignment",
  name: "alignment",
  type: "string",
  options: [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Full Width",
      value: "full",
    },
  ]
}

const textAlignment: SchemaField = {
  label: "Text Alignment",
  name: "textAlign",
  type: "string",
  options: [
    {
      label: "Left",
      value: "left",
    },
    {
      label: "Center",
      value: "text-center",
    },        {
      label: "Right",
      value: "text-right",
    },
  ]
}

const theme: SchemaField = {
  type: "string",
  label: "Theme",
  name: "theme",
  options: [
    { label: "Default", value: "default" },
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Accent", value: "accent" },
  ],
}

const prose: SchemaField = {
  type: "string",
  label: "Text Size",
  name: "prose",
  options: [
    { label: "Default", value: "prose" },
    { label: "Small", value: "prose prose-sm" },
    { label: "Large", value: "prose prose-lg" },
    { label: "XL", value: "prose prose-xl" },
    { label: "XXL", value: "prose prose-2xl" },
    { label: "XXXL", value: "prose prose-3xl" },
    { label: "XXXXL", value: "prose prose-4xl" },
    { label: "XXXXXL", value: "prose prose-5xl" },
    { label: "XXXXXXL", value: "prose prose-6xl" },
  ],
}

const paddingTop: SchemaField = {
  type: "boolean",
  label: "Turn off top padding",
  name: "paddingTopOff",
}

export const blockStyleSchema = [
  blockAlignment,
  textAlignment,
  prose,
  theme,
  paddingTop,
]

export default {}