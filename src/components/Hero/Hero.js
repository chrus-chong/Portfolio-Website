import React from 'react'
import {
  Button,
  Section,
  SectionTitle,
  SectionText,
} from '../GlobalComponents/GlobalComponents'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chrus Chong <br />
        Portfolio Website
      </SectionTitle>
      <SectionText>
        Hello.. I am an NUS sophomore reading a double degree in Computer
        science and business administration. I am interested in computer
        security and .... more place holder text
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
