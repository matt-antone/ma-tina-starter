import Link from 'next/link'
import Head from 'next/head'

export const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </header>
      <main className='text-3xl'>{props.children}</main>
    </div>
  )
}
