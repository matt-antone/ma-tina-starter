import htmlComponents from "../content";
import { templates } from "@components/content/templates";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// import themes from './_block-themes';
// import { headingSchema } from "@tinaconfig/field-templates/heading";
// import { blockStyleSchema } from "@schema/blocks/block-styles";
// import { hasContent } from "@lib/content"
// import Heading from "@components/content/Heading";
// import Message from "@components/ui/Message";
// | import Container from "@components/Layout/Container";
// import { Section } from "@components/Layout/Section";

type Props = {
  content
}

const Content = (props: Props) => {
  const { content } = props
  return (
    <TinaMarkdown
      content={content}
      components={{
        ...htmlComponents,
        ...templates,
      }}
    />
  )
}

export default Content