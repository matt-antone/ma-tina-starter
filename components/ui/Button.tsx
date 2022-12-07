import React from 'react';

const Button = ({ className ='', onClick = null, children = "Button" }) => {
  return <button
  className={`py-1 px-2 bg-gunmetal text-white ${className}`}
  onClick={onClick}
  // href={`/symbols/newer/${pageInfo.startCursor}`}
>{children}</button>

};

export default Button;