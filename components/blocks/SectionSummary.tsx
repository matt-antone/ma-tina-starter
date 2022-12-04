import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import htmlComponents from "../content";
import { templateFields, templates } from "@components/content/templates";
import { headingSchema } from "@schema/content/heading";
import { blockStyleSchema } from "@schema/blocks/block-styles";
import { hasContent } from "@lib/content"
import Heading from "@components/content/Heading";
import Message from "@components/ui/Message";
import Block from './Block'
import Image from "@components/Image";
import image from "@schema/field-modules/image";
import aspect from '@schema/field-modules/apscect-ratio'

export const SectionSummary = (props) => {
  const { data: { heading, body, image, alignment, prose, textAlign, theme, alignRight, responsive } } = props
  const test = 0
  const baseLayout = "absolute w-[80%] lg:w-[40%] h-auto"
  const rightLayout = `${baseLayout} top-4 left-4 bottom-0 lg:pt-40 lg:ml-[60%] lg:mr-0`
  const leftLayout = `${baseLayout} top-0 bottom-4 right-4 left-0 lg:mr-[60%] lg:ml-0`
  return (
    <Block {...props}>
      <div className={` relative
        aspect-w-${responsive?.xs?.arWidth} aspect-h-${responsive?.xs?.arHeight}
        sm:aspect-w-${responsive?.sm?.arWidth} sm:aspect-h-${responsive?.sm?.arHeight}
        md:aspect-w-${responsive?.md?.arWidth} md:aspect-h-${responsive?.md?.arHeight}
        lg:aspect-w-${responsive?.lg?.arWidth} lg:aspect-h-${responsive?.lg?.arHeight}
        xl:aspect-w-${responsive?.xl?.arWidth} xl:aspect-h-${responsive?.xl?.arHeight}
        2xl:aspect-w-${responsive?.xxl?.arWidth} xl:aspect-h-${responsive?.xxl?.arHeight}
      `}>
        {/* <div className={`${alignment} relative overflow-hidden ${ alignRight === true ? '': 'pb-32' }`}> */}
        <div className={
          `absolute w-[80%]`}
        >
          {
            image ? (
              <div className={` relative
                sm:aspect-w-${ responsive?.sm?.arWidth } sm:aspect-h-${ responsive?.sm?.arHeight }
                md:aspect-w-${ responsive?.md?.arWidth } md:aspect-h-${ responsive?.md?.arHeight }
                lg:aspect-w-${ responsive?.lg?.arWidth } lg:aspect-h-${ responsive?.lg?.arHeight }
                xl:aspect-w-${ responsive?.xl?.arWidth } xl:aspect-h-${ responsive?.xl?.arHeight }
                2xl:aspect-w-${ responsive?.xxl?.arWidth } xl:aspect-h-${ responsive?.xxl?.arHeight }
              `}>
                <Image
                  src={image.source}
                  width={image.width || 1000}
                  height={image.height || 500}
                  alt={image.alt}
                  className="abslute inset-0"
                />
              </div>
            ) : (
              <Message messageType="danger" title="No content entered">
                Please add an image
              </Message>
            )
          }
        </div>
        <div className={`${alignRight === true ? rightLayout : leftLayout}`}>
          <div className={`bg-white p-8 border-t-[1em] border-t-brown  relative z-50`}>
            {heading?.text ? (
              <div className="flex items-center gap-3 text-blue fill-blue mb-4">
                <div className="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg>
                </div>
                <h2>
                  {heading.text || ""}{alignment}
                </h2>
              </div>
            ) : ''}
            {hasContent(body) ? (
              <div className={` ${prose ? prose : "prose"} max-w-none hidden lg:block`}>
                <TinaMarkdown
                  content={body}
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
            )}
          </div>

        </div>
      </div>
    </Block>
  );
};

export const sectionSummarySchema: TinaTemplate = {
  name: "sectionSummary",
  label: "Section Summary",
  ui: {
    previewSrc: "/blocks/SectionSummary.png",
  },
  fields: [
    {
      type: "reference",
      label: "Page",
      name: "page",
      collections: ["page"]
    },
    headingSchema,
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      templates: templateFields,
    },
    {
      type: "boolean",
      label: "Align Text Right",
      name: "alignRight"
    },
    // {
    //   type: "image",
    //   label: "Image",
    //   name: "image"
    // },
    image,
    {
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
    },
    blockStyleSchema.at(-1),
  ],
};
