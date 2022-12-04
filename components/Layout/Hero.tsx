import { Page } from '.tina/__generated__/types'
import Image from 'next/image'
import React from 'react'
import CloudImage from '@components/CloudImage'
import Container from './Container'
import Prose from './Prose'

type Props = {
  page: Page
}

const Hero = (props: Props) => {
  const { page } = props
  return page.hero.image ? (
    <div>
      <div className="aspect-w-16 aspect-h-7 relative">
        <CloudImage src={page.hero.image} width={1920} height={1080} alt={'stuff'} quality={100} className="absolute inset-0 object-cover z-0"/>
        <Container className='absolute h-auto bottom-0 top-auto z-10 text-white'>
          { page.hero.content ? (
            <Prose content={page.hero.content} className={`prose-white`}/>
          ) : null }
        </Container>
      </div>
    </div>
  ) : null
}

export default Hero