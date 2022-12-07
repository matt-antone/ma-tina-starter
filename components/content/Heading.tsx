
import React from 'react';

const Heading = ({ level = "2", className = '', children, size = 'default'}) => {
  const styles = "leading-tight not-prose"
  const sizes = {
    default: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
    large: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    larger: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
    largest: "text-3xl md:text-4xl lg:text-5xl xl:text-7xl",
  }

  switch (level) {
    case "1":
      return (
        <div className={`${sizes[size]} ${styles}`}>
          <h1 className={` ${className}`}>{ children }</h1>
        </div>
      );
  
    case "2":
      return (
        <div className={`${sizes[size]} ${styles}`}>
          <h2 className={` ${className}`}>{ children }</h2>
        </div>
      );
  
    case "3":
      return (
        <div className={`${sizes[size]} ${styles}`}>
          <h3 className={` ${className}`}>{ children }</h3>
        </div>
      );

    case "4":
      return (
        <div className={`${sizes[size]} ${styles}`}>
          <h4 className={` ${className}`}>{ children }</h4>
        </div>
      );
    case "5":
      return (
        <div className={`${sizes[size]} ${styles}`}>
          <h5 className={` ${className}`}>{ children }</h5>
        </div>
      );

    case "6":
      return (
        <div className={`${sizes[size]} ${styles}`}>
          <h6 className={` ${className}`}>{ children }</h6>
        </div>
      );
    default:
      return (
        <div>Please select a heading level.</div>
      )
  }

};

export default Heading;