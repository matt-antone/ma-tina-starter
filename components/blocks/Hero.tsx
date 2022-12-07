import Container from "@components/Layout/Container";
import { Section } from "@components/Layout/Section";
import type { Template } from "tinacms";
import Image from "@components/CloudImage";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { headingSchema } from "@tinaconfig/field-templates/heading";
import Heading from "@components/content/Heading";
import image from "@tinaconfig/field-templates/image";
import aspect from '@tinaconfig/field-templates/apscect-ratio'
import imageResponsive from "@tinaconfig/field-templates/image-responsive"

export const Hero = ({ data, parentField }) => {
  //console.log(data.responsive)
  const textSizes = {
    default: "prose-lg md:prose-xl: lg:prose-2xl",
    large: "prose-xl md:prose-2xl: lg:prose-3xl",
    larger: "prose-2xl md:prose-3xl: lg:prose-4xl",
    largest: "prose-3xl md:prose-4xl: lg:prose-5xl",
  }

  return (
    <Section id="hero" noPadding={true} className="relative">
      <div className={`
        aspect-w-${ data.responsive?.xs?.arWidth } aspect-h-${ data.responsive?.xs?.arHeight }
        sm:aspect-w-${ data.responsive?.sm?.arWidth } sm:aspect-h-${ data.responsive?.sm?.arHeight }
        md:aspect-w-${ data.responsive?.md?.arWidth } md:aspect-h-${ data.responsive?.md?.arHeight }
        lg:aspect-w-${ data.responsive?.lg?.arWidth } lg:aspect-h-${ data.responsive?.lg?.arHeight }
        xl:aspect-w-${ data.responsive?.xl?.arWidth } xl:aspect-h-${ data.responsive?.xl?.arHeight }
        2xl:aspect-w-${ data.responsive?.xxl?.arWidth } xl:aspect-h-${ data.responsive?.xxl?.arHeight }
      `}>
        
          <Image
            data-tinafield={`${parentField}.image`}
            className="absolute inset-none object-cover z-10 brightness-50"
            alt={data?.image?.alt || null }
            src={data?.image?.source || null }
            width={1600}
            height={1024}
            priority={true}
          />
      </div>
      <Container className="absolute bottom-0 z-20 left-1/2 w-full h-full transform -translate-x-1/2 flex items-end">
            <div
              className="mx-auto absolute"
              data-tinafield={`${parentField}.heading.text`}
            >
              <div className={`py-8 text-white ${data.alignment} max-w-lg tracking-tight`}>
                {data?.heading?.text ? (
                  <h1 className="text-4xl sm:text-5xl sm:max-w-[65%]">
                    {data.heading.text || ""}
                  </h1>
                ) : ''}
                {/* { data?.text && (
                  <div id="hero-text" className={`prose prose-white ${textSizes[data.size]}`}>
                      <TinaMarkdown content={data.text} />
                  </div>
                )} */}
              </div>
            </div>
      </Container>
    </Section>
  )
}

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/Hero.png",
    defaultItem: {
      "heading": {
        "text": "In our firm there’s one side to every story: the client’s side.",
        "level": "1",
        "size": [
          "largest"
        ]
      },
      "alignment": "mr-auto",
      "image": {
        "source": "https://res.cloudinary.com/spertus-landes-umhofer/image/upload/v1666910918/_3.0/fpo-home_og3ncb.jpg",
        "alt": "walking with a briefcase"
      },
      "responsive": {
        "xs": {
          "arWidth": "1",
          "arHeight": "1"
        },
        "sm": {
          "arWidth": "16",
          "arHeight": "12"
        },
        "md": {
          "arWidth": "16",
          "arHeight": "9"
        },
        "lg": {
          "arWidth": "16",
          "arHeight": "6"
        },
        "xl": {
          "arWidth": "16",
          "arHeight": "6"
        }
      },
    }
  },
  fields: [
    headingSchema,
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Text Size",
      name: "size",
      type: "string",
      list: true,
      ui: {
        component: "select"
      },
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Large",
          value: "large",
        },
        {
          label: "Larger",
          value: "larger",
        },
        {
          label: "Largest",
          value: "largest",
        },
      ],
      required: false,
    },
    {
      label: "Alignment",
      name: "alignment",
      type: "string",
      options: [
        {
          label: "Left",
          value: "mr-auto"
        },
        {
          label: "Center",
          value: "mx-auto"
        },
        {
          label: "Right",
          value: "ml-auto",
        }
      ]
    },
    // {
    //   label: "Image",
    //   name: "src",
    //   type: "image",
    // },
    image,
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
    },
    imageResponsive,
],
};