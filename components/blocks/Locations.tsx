import type { TinaTemplate } from "tinacms";
import { headingSchema } from "@schema/content/heading";
import { blockStyleSchema } from "@schema/blocks/block-styles";
import Block from "./Block";
import LocationsComponent from "@components/custom/Locations";
import Heading from "@components/content/Heading";

export const Locations = (props) => {
  const { data } = props
  return (
    <Block {...props}>
         {data?.heading?.text ? (
          <div className="mb-4">
            <Heading level={data.heading.level} size={data.heading.size}>
              {data.heading.text || ""}
            </Heading>
          </div>
          ) : ''}
        <LocationsComponent images={true}/>
    </Block>
  );
};

export const locationsBlockSchema:TinaTemplate = {
  name: "locations",
  label: "Locations",
  ui: {
    previewSrc: "/blocks/Content.png",
  },
  fields: [
    headingSchema,
    ...blockStyleSchema,
  ],
};
