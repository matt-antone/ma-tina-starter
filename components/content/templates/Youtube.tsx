import React, { useState } from 'react';
import type { Template } from 'tinacms'
import MediaContainer from '@components/Layout/MediaContainer';

const youtubeParser = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

export const youtubeFields: Template = {
  name: "YouTubeEmbed",
  label: "YouTube Video",
  fields: [
    {
      name: "url",
      label: "URL",
      type: "string",
      description: "Copy and Paste a YouTube URL."
    },
  ],
}

const YouTubeEmbed = ({ url = null }) => {
  const [isPlaying, play ] = useState(false);

  const playHandler = () => {
    play(true);
  }
  return url ? (
    <MediaContainer>
      <div className='aspect-w-16 aspect-h-9 relative bg-black'>
        { isPlaying ? (
          <iframe
            className='w-full h-full absolute inset-0'
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeParser(url)}?&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>      ) : (
          <button
            className='flex justify-center items-center absolute inset-0 not-prose text-white bg-black'
            onClick={ playHandler }
          >
            <div className='block absolute inset-0 opacity-40'>
              <img
                className='w-full h-full'
                src={`https://img.youtube.com/vi/${youtubeParser(url)}/maxresdefault.jpg`}
              />
            </div>
            <svg
              className="h-40 w-40 relative z-20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        ) }
      </div>
    </MediaContainer>
  ) : (
    <p>
      Please provide a URL.
    </p>
  );
};

export default YouTubeEmbed;


