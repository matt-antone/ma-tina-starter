import { defineConfig, defineSchema } from "tinacms";
import collections from "./collections";
const schema = defineSchema({
  collections
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD || 
    +'',
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
    // this is the config for the tina cloud media store
    // tina: {
    //   publicFolder: "public",
    //   mediaRoot: "uploads",
    // },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
