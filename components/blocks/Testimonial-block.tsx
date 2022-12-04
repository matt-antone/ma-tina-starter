import type { TinaTemplate } from "tinacms";
import { headingSchema } from "@schema/content/heading";
import { blockStyleSchema } from "@schema/blocks/block-styles";
import Block from "./Block";

export const Testimonial = (props) => {
  const { data, parentField } = props
  return (
    <Block {...props}>
      <blockquote>
        <div
          className={`relative z-10 mx-auto text-3xl font-light tracking-normal title-font`}
        >
          <p
            data-tinafield={`${parentField}.quote`}
            className="relative opacity-95"
          >
            <>&ldquo;</>{`${data.quote}`}<>&rdquo;</>
          </p>
        </div>
        <footer className="text-left">
          <p
            data-tinafield={`${parentField}.author`}
            className={`mt-4 title-font font-bold text-lg text-white/70 uppercase`}
          >
            {data.author}
          </p>
        </footer>
      </blockquote>
    </Block>
  );
};

export const testimonialBlockSchema: TinaTemplate = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
    },
  },
  fields: [
    headingSchema,
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Quote",
      name: "quote",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
    },
    ...blockStyleSchema,
    // {
    //   type: "string",
    //   label: "Color",
    //   name: "color",
    //   options: [
    //     { label: "Default", value: "default" },
    //     { label: "Tint", value: "tint" },
    //     { label: "Primary", value: "primary" },
    //   ],
    // },
  ],
};
