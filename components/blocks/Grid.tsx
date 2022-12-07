import type { Template } from "tinacms";
import Container from "@components/Layout/Container";
import { Section } from "@components/Layout/Section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import htmlComponents from "../content";
import themes from "./_block-themes";
import { templateFields, templates } from "@components/content/templates";
import Heading from "@components/content/Heading";
import { headingSchema } from "@tinaconfig/field-templates/heading";
import Message from "@components/ui/Message";
import { blockStyleSchema } from "./fields/block-styles";
import Block from "./Block";

export const Grid = (props) => {
  const { data } = props
  return (
    <Block {...props}>
        <div className={`${data.textAlign}`}>
          {data?.heading?.text ? (
            <Heading level={data.heading.level} size={data.heading.size}>
              {data.heading.text || ""}
            </Heading>
          ) : ''}

          { data.columnData?.length ? (
            <div className={`grid lg:grid-cols-${data.gridItems} gap-16`}>
              {data.columnData.map( column => (
                <div key={column.name} className={`prose prose-lg ${themes[data.theme]?.prose || ''} ${data.textAlign || 'text-left'} max-w-none`}>
                  <TinaMarkdown
                    content={column.content}
                    components={{
                      ...htmlComponents,
                      ...templates
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Message messageType="danger" title="No columns found.">
              Please add some columns.
            </Message>
          ) }
        </div>
    </Block>
  );
};

export const gridBlockSchema: Template = {
  label: "Grid",
  name: "grid",
  ui: {
    previewSrc: "/blocks/grid.png",
    // itemProps: (item) => {
    //   return { label: `${typeof(item.heading) === 'undefined' ? 'Grid' : item.heading }`}
    // },
  },
  fields: [
    headingSchema,
    {
      label: "Columns",
      name: "columnData",
      type: "object",
      list: true,
      // ui: {
      //   itemProps: (item) => {
      //     return { label: `${typeof(item.name) === 'undefined' ? 'New Column' : item.name }`}
      //   },
      // },
      fields: [
        {
          label: "Name",
          name: "name",
          type: "string",
        },
        {
          label: "Content",
          name: "content",
          type: "rich-text",
          templates: [
            {
              name: "BlockQuote",
              label: "Block Quote",
              fields: [
                {
                  name: "children",
                  label: "Quote",
                  type: "rich-text",
                  templates: [
                    ...templateFields
                  ]
                },
                {
                  name: "authorName",
                  label: "Author",
                  type: "string",
                },
              ],
            },
          ],
        }
      ],
      // ui: {
      //   defaultValue: "columns-2"
      // }
    },
    {
      label: "Grid items per row",
      name: "gridItems",
      type: "string",
      ui: {
        defaultValue: "2",
      },
      options: [
        {
          label: "1",
          value: "1"
        },
        {
          label: "2",
          value: "2"
        },
        {
          label: "3",
          value: "3"
        },
        {
          label: "4",
          value: "4"
        },
      ],
    },
    ...blockStyleSchema
  ],
};
