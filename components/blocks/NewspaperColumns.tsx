import { Container } from "@components/layout/Container";
import { Section } from "@components/layout/Section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import contentComponents from "../content";
import Heading from "@components/content/Heading";
import themes from "./_block-themes";
import { headingSchema } from "@schema/content/heading";
import { hasContent } from "@lib/content";
import Message from "@components/ui/Message";
import { blockStyleSchema } from "@schema/blocks/block-styles";
import Block from "./Block";

export const NewsColumns =(props) => {
  const { data } = props
  return (
    <Block {...props}>
        {data?.heading?.text ? (
            <Heading level={data.heading.level} size={data.heading.size}>
              {data.heading.text || ""}
            </Heading>
          ) : ''}
        { hasContent(data.body) ? (
          <div className={`max-w-none prose prose-lg ${themes[data.theme]?.prose || ''} ${data.textAlign || 'left'} lg:${data.columns || 'columns-2' } gap-16`}>
            <TinaMarkdown
              content={data.body}
              components={{
                ...contentComponents
              }}
            />
          </div>
        ) : (
          <Message messageType="danger" title="No content found.">
            Please add some content to the <strong>Body</strong> field.
          </Message>
        )}
    </Block>
  );
};

export const newsColumnsBlockSchema: TinaTemplate = {
  name: "newsColumns",
  label: "News Columns",
  ui: {
    previewSrc: "/blocks/news-columns-block.png",
  },
  fields: [
    headingSchema,
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
    {
      label: "Columns",
      name: "columns",
      type: "string",
      options: [
        {
          label: "2",
          value: "columns-2",
        },
        {
          label: "3",
          value: "columns-3",
        },
      ],
      ui: {
        defaultValue: "columns-2"
      }
    },
    ...blockStyleSchema,
  ],
};
