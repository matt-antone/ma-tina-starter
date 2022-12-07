import type { Template } from 'tinacms'
import MediaContainer from '@components/Layout/MediaContainer';

export const vimeoFields: Template = {
  name: "VimeoEmbed",
  label: "Vimeo Video",
  fields: [
    {
      name: "url",
      label: "URL",
      type: "string",
      description: "Copy and Paste a YouTube URL."
    },
  ],
}

const getVimeoId = (url: string) => {
  // Look for a string with 'vimeo', then whatever, then a
  // forward slash and a group of digits.
  const match = /vimeo.*\/(\d+)/i.exec(url);
  // If the match isn't null (i.e. it matched)
  if (match) {
    // The grouped/matched digits from the regex
    return match[1];
  }
};

const VimeoEmbed = ({ url = null }) => {

  return url ? (
    <MediaContainer>
      <div className='aspect-w-16 aspect-h-9 relative bg-black'>
        <iframe src={`https://player.vimeo.com/video/${getVimeoId(url)}`} // ?&autoplay=1
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </MediaContainer>
  ) : (
    <p>
      Please provide a URL.
    </p>
  );
};

export default VimeoEmbed;