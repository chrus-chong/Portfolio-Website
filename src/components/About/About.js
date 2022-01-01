import Image from 'next/image'
import React from 'react'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents'
import aboutMeImage from '/public/images/AboutMePhoto.png'

const About = () => (
  <Section nopadding id='about'>
    <SectionDivider />
    <SectionTitle main>About Me</SectionTitle>
    <div className='aboutDiv'>
      <Image
        src={aboutMeImage}
        layout='intrinsic'
        className={'aboutMeImage'}
        alt='aboutMeImage'
        width={400}
        height={400}
      />
      <div className='aboutTextDiv'>
        <SectionText>
          I am currently a Year 2 Computer Science undergraduate at the National
          University of Singapore.I love learning about the intricate computer
          systems that we use or interact with on a daily basis. This is
          especially true when I see the link between theory and practical
          application of these concepts. While I am generally fond of creating
          practical applications that look good and solve real-world
          inconveniences, I am keen on pursuing a focus area in computer
          security to safeguard sensitive information from unauthorised use.
        </SectionText>
      </div>
    </div>
  </Section>
)

export default About
