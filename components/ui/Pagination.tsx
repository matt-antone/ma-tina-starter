import React from "react";
import Button from "@components/ui/Button";

export const Pagination = ({
  ...props
}) => {
  const { pageInfo, nextHandler, text, isLoading } = props

  const nextButton = (pageInfo) => {
    if(pageInfo?.hasPreviousPage && nextHandler) {
      return <Button
                onClick={nextHandler}
              >{ isLoading ? "Loading..." : `Load More ${text}` }</Button>
    }

  }

  return (
    <div className={`flex space-x-2`}>
      {nextButton(pageInfo)}
    </div>
  );
};