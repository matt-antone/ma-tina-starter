 import Image from "@components/CloudImage";
import MediaContainer from "@components/Layout/MediaContainer";

const img = ({ url, alt = '', caption, width = 1150, height = 600  }) => {
  return (
    <MediaContainer>
      { caption ? (
        <figure className="not-prose">
          <Image
            src={url}
            width={width}
            height={height}
            className={'mx-auto h-auto mb-0 mt-0'}
            alt={alt}
          />
          <caption className="block bg-black text-white py-4">
            { caption }
          </caption>
        </figure>
      ) : (
        <Image
          src={url}
          width={width}
          height={height}
          className={''}
          alt={alt}
        />
      )}
    </MediaContainer>
  )
};

export default img;