import { Section } from "@components/Layout/Section";
import { blockStyleSchema } from "./fields/block-styles";
import themes from './_block-themes';
import Link from "next/link";
import type { Template } from "tinacms";
import Block from "./Block";

const CallToAction = (props) => {
  const {data} = props
  return data.url ? (
    <Block {...props}>
      <Link href={data.url} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xl font-medium rounded shadow-sm text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          {data.buttonText}
      </Link>

    </Block>
  ) : null;
};

export default CallToAction;

export const callToActionBlockSchema: Template= {
  name: "callToAction",
  label: "Call to Action",
  ui: {
    previewSrc: '/blocks/Content.png'
  },
  fields: [
    {
      name: "url",
      label: "URL",
      type: "string",
    },
    {
      name: "buttonText",
      label: "Button Text",
      type: "string",
    },
    ...blockStyleSchema,
  ]
}