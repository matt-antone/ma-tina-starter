import React from 'react'

type Props = {
  className?: string
  children?: React.ReactNode
}

const Container = (props: Props) => {
  const { className, children } = props
  return (
    <div className={`max-w-xl mx-auto  ${ className ? className : ""}`}>
      { children }
    </div>
  )
}

export default Container