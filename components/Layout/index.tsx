import Head from 'next/head'
import Header from '@components/Layout/Header'
import Container from '@components/Layout/Container'
import Footer from '@components/Layout/Footer'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Starter</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}
