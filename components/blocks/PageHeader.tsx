import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import htmlComponents from "../content";
import { templateFields, templates } from "@components/content/templates";
import { headingSchema } from "@schema/content/heading";
import { blockStyleSchema } from "@schema/blocks/block-styles";
import { hasContent } from "@lib/content"
import Heading from "@components/content/Heading";
import Message from "@components/ui/Message";
import Block from "./Block";

export const PageHeader = (props) => {
  const { data } = props
  return (
    <Block {...props}>
        <div className={`${data.textAlign} bg-blue text-white`}>
          {data?.heading?.text ? (
            <Heading level={data.heading.level} size={data.heading.size}>
              {data.heading.text || ""}
            </Heading>
          ) : ''}
          { hasContent(data.body) ? (
            <div className={`text-4xl leading-tight mt-12 font-bold max-w-none`}>
              <TinaMarkdown
                content={data.body}
                components={{
                  ...htmlComponents,
                  ...templates,
                }}
              />
            </div>
          ) : "" }
        </div>
    </Block>
  );
};

export const pageHeaderBlockSchema:TinaTemplate = {
  name: "pageheader",
  label: "PageHeader",
  ui: {
    previewSrc: "/blocks/Content.png",
  },
  fields: [
    headingSchema,
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      templates: templateFields,
    },
    ...blockStyleSchema,
  ],
};
