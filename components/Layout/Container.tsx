import React from 'react'

type Props = {
  className?: string
  children?: React.ReactNode
}

const Container = (props: Props) => {
  const { className, children } = props
  return (
    <div className={`px-12 w-full mx-auto max-w-[90%] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl  ${ className ? className : ""}`}>
      { children }
    </div>
  )
}

export default Container