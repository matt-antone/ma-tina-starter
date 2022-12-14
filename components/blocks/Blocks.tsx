import type { Page } from ".tina/__generated__/types";
import { Content } from "@components/blocks/Content";
import { Hero } from "@components/blocks/Hero";
import { Testimonial } from "@components/blocks/Testimonial-block";
import { NewsColumns } from "@components/blocks/NewspaperColumns";
import { Grid } from "@components/blocks/Grid";
import { Posts } from "@components/blocks/Posts";
import CallToAction from "./CallToAction";
import { SectionSummary } from "./SectionSummary"
import { PageHeader } from "./PageHeader";
import { Locations } from "./Locations";

export const Blocks = (props) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            // console.log(block.__typename)
            switch (true) {
              case block.__typename.includes("BlocksLocations"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Locations data={block} parentField={`blocks.${i}`} />
                  </div>
                )
              case block.__typename.includes("BlocksPageheader"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <PageHeader data={block} parentField={`blocks.${i}`} />
                  </div>
                )
              case block.__typename.includes("BlocksContent"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Content data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case block.__typename.includes("BlocksHero"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Hero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case block.__typename.includes("BlocksTestimonial"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Testimonial data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case block.__typename.includes("BlocksNewsColumns"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <NewsColumns data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case block.__typename.includes("BlocksGrid"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Grid data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case block.__typename.includes("BlocksPosts"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Posts data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case block.__typename.includes("BlocksCallToAction"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <CallToAction data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case block.__typename.includes("BlocksSectionSummary"):
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <SectionSummary data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
              return null;
            }
          })
        : null}
    </>
  );
};
