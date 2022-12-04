import React from 'react'
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

type Props = {
  content?: TinaMarkdownContent
  className?: string
}

const Prose = (props: Props) => {
  const { content, className } = props
  return (
    <div className={`prose py-12 ${className ? className : null }`}>
      <TinaMarkdown content={content} />
    </div>
  )
}

export default Prose