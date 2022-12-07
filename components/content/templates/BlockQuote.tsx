import { TinaMarkdown } from 'tinacms/dist/rich-text';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';
import type { Template } from 'tinacms'
import MediaContainer from '@components/Layout/MediaContainer';

export const blockQuoteFields: Template = {
  name: "BlockQuote",
  label: "Block Quote",
  fields: [
    {
      name: "children",
      label: "Quote",
      type: "rich-text",
    },
    {
      name: "authorName",
      label: "Author",
      type: "string",
    },
  ],
}

const BlockQuote = (props: {
  children: TinaMarkdownContent;
  authorName: string;
}) => {
  return (
    <MediaContainer>
      <blockquote>
        <TinaMarkdown content={props.children} />
        {props.authorName}
      </blockquote>
    </MediaContainer>
  );
};

export default BlockQuote;