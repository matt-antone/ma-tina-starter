import type { TinaField } from "tinacms"
import aspect from '@tinaconfig/field-templates/apscect-ratio'

const responsive: TinaField = {
  label: "Responsive",
  name: "responsive",
  type: "object",
  description: "Change the aspect ratio of the hero by breakpoint.",
  fields: [
    {
      label: "XS < 640px",
      name: "xs",
      type: "object",
      ui: {
        itemProps: (item) => {
          //console.log(item)
          return { label: `shit`}
        },
      },
      fields: [
        aspect.width,
        aspect.height
      ],
    },
    {
      label: "SM > 640px",
      name: "sm",
      type: "object",
      ui: {
        itemProps: (item) => {
          //console.log(item)
          return { label: `shit`}
        },
      },
      fields: [
        aspect.width,
        aspect.height
      ],
    },
    {
      label: "MD > 768px",
      name: "md",
      type: "object",
      fields: [
        aspect.width,
        aspect.height
      ],
    },
    {
      label: "LG > 1024px",
      name: "lg",
      type: "object",
      fields: [
        aspect.width,
        aspect.height
      ],
    },
    {
      label: "XL > 1280px",
      name: "xl",
      type: "object",
      fields: [
        aspect.width,
        aspect.height
      ],
    },
    {
      label: "2XL > 1536px",
      name: "xxl",
      type: "object",
      fields: [
        aspect.width,
        aspect.height
      ],
    },
  ],
}

export default responsive