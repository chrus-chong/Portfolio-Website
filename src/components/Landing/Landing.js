import Image from 'next/image'
import React from 'react'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents'
import Hero from '../Hero/Hero'
import logo from '/public/images/Blueprints.gif'

const Landing = () => (
  <Section nopadding>
    <SectionDivider />
    <div className='landingDiv'>
      <Hero />
      <Image
        src={logo}
        layout='intrinsic'
        className={'landingImage'}
        alt='loading...'
        width={400}
        height={400}
      />
    </div>
  </Section>
)

export default Landing
