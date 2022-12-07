import BlockQuote, { blockQuoteFields } from "@components/content/templates/BlockQuote";
import DateTime, { dateTimeFields } from "@components/content/templates/DateTime";
import VimeoEmbed, { vimeoFields } from "@components/content/templates/Vimeo"
import YouTubeEmbed, { youtubeFields }  from "@components/content/templates/Youtube"
import Spinner, { spinnerFields } from "./Spinner";

export const templateFields = [
  blockQuoteFields,
  dateTimeFields,
  vimeoFields,
  youtubeFields,
  // slideshowFields,
  spinnerFields,
]


export const templates = {
  BlockQuote,
  DateTime,
  VimeoEmbed,
  YouTubeEmbed,
  // Slideshow,
  Spinner,
};

export default {
  components: templates,
  fields: templateFields,
}

