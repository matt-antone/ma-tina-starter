import React from 'react';

const MediaContainer = ({children}) => {
  return (
    <span className='block my-12 max-w-lg md:max-w-2xl 2xl:max-w-4xl mx-auto'>
      { children }
    </span>
  );
};

export default MediaContainer;