import Head from 'next/head'
import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'
import React, { useRef } from 'react'

type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {

  const contentBox = useRef(null)

  return (
    <div>
      <Head>
        <title>Starter</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='fixed w-full py-12 -translate-y-full focus-within:translate-y-0 bg-white flex justify-center items-center'>
          <a 
            href="#content-wrapper" 
            title="Skip this site's navigation and go directly to the content."
            className='block py-2 px-4 bg-primary'
          >
            Skip to content
          </a>
      </div>
      <Header/>
      <div id="content-wrapper" ref={contentBox}>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}
