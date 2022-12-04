import type { TinaTemplate } from "tinacms";
import Heading from "@components/content/Heading";
import themes from "./_block-themes"
import { headingSchema } from "@schema/content/heading";
import { blockStyleSchema } from "@schema/blocks/block-styles";
import Block from './Block';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  Highlight,
} from 'react-instantsearch-hooks-web';
import Link from "next/link";
import IconPlay from "./IconPlay";
const searchClient = algoliasearch("UVEIS8FYWP", "ddf040ee018ef899019c541cc34e5a64");

export const Posts = (props) => {
  const { data } = props

  const Hit = ({ hit }) => {
    //(hit._sys.filename)
    return (
      <Link href={`/news-and-results/${hit._sys.filename}`} className="block p-4 bg-white my-4 border border-transparent hover:boder-black">
          <article className="flex md:flex-row-reverse">
            <header className="md:w-[80%]">
              <h2 className="text-xl md:text-3xl leading-tight">
                <Highlight
                  attribute="title"
                  hit={hit}
                />
              </h2>
            </header>
            <div className="hidden md:block w-[20%]">
              <span className="uppercase max-w-none align-top text-brown">
                <div className="pb-4 text-sm">
                  <Highlight
                    attribute="categories"
                    hit={hit}
                  />
                </div>
              </span>
            </div>
          </article>
      </Link>
    )
  }

  return (
    <Block {...props}>
      <div className={`${themes[data.theme]?.prose} ${data.textAlign}`}>
        {data?.heading?.text ? (
          <Heading level={data.heading.level} size={data.heading.size}>
            {data.heading.text || ""}
          </Heading>
        ) : ''}
        <InstantSearch indexName={"newsPartial"} searchClient={searchClient}>
          <Hits
            hitComponent={Hit}
            classNames={{
              root: 'MyCustomHits not-prose',
              list: 'MyCustomHitsList MyCustomHitsList--subclass',
            }} />
        </InstantSearch>
        <div className="pt-4 text-white">
          <Link href={'/news-and-results'} className="flex items-center gap-2 md:gap-4 md:text-xl text-white fill-white no-underline">
                <div className="w-4 md:w-12">
                  <IconPlay/>
                </div>
                See All News & Results
          </Link>
        </div>
      </div>

    </Block>
  );
};

export const postsBlockSchema: TinaTemplate = {
  name: "posts",
  label: "Recent Posts",
  ui: {
    previewSrc: "/blocks/Content.png",
    // itemProps: (item) => {
    //   return { label: `${typeof(item.body) === 'undefined' ? 'Posts Block' : item.body.children[0].children[0].text }`}
    // },
  },
  fields: [
    headingSchema,
    {
      label: "Number of Posts",
      name: "postQty",
      type: "string",
      options: [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
      ],
    },
    ...blockStyleSchema
  ],
};
