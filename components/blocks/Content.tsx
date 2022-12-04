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

export const Content = (props) => {
  const { data } = props
  return (
    <Block {...props}>
        <div className={`${data.textAlign}`}>
          {data?.heading?.text ? (
            <Heading level={data.heading.level} size={data.heading.size}>
              {data.heading.text || ""}
            </Heading>
          ) : ''}
          { hasContent(data.body) ? (
            <div className={` ${data.prose ? data.prose : "prose" } px-12 max-w-none`}>
              <TinaMarkdown
                content={data.body}
                components={{
                  ...htmlComponents,
                  ...templates,
                }}
              />
            </div>
          ) : (
            <Message messageType="danger" title="No content entered">
              Please enter some content
            </Message>
          ) }
        </div>
    </Block>
  );
};

export const contentBlockSchema:TinaTemplate = {
  name: "content",
  label: "Content",
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
