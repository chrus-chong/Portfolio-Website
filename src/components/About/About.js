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
          Wenna Ramsbottom was thinking about Marion Gloop again. Marion was a
          brutal teacher with scrawny hands and slimy fingers. Wenna walked over
          to the window and reflected on her deprived surroundings. She had
          always loved deserted Bangkok with its bitter, big beaches. It was a
          place that encouraged her tendency to feel worried. Then she saw
          something in the distance, or rather someone. It was the a brutal
          figure of Marion Gloop. Wenna gulped. She glanced at her own
          reflection. She was a mean, special, brandy drinker with ginger hands
          and dirty fingers. Her friends saw her as a vigilant, vague vicar.
          Once, she had even made a cup of tea for a bewildered old lady. But
          not even a mean person who had once made a cup of tea for a bewildered
          old lady, was prepared for what Marion had in store today.
        </SectionText>
      </div>
    </div>
  </Section>
)

export default About
