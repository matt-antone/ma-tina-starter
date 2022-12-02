import React from 'react'
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

type Props = {
  content?: TinaMarkdownContent
}

const Prose = (props: Props) => {
  const { content } = props
  return (
    <div className='prose'>
      <TinaMarkdown content={content} />
    </div>
  )
}

export default Prose