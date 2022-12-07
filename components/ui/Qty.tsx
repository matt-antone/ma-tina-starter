import React from 'react';

const Qty = ({number, className = ''}) => {
  return (
    <span
      className={`${className} inline-flex justify-center items-center w-4 h-4 rounded-full text-xxs text-white bg-danger -translate-y-2`}
    >{number}</span>
  );
};

export default Qty;