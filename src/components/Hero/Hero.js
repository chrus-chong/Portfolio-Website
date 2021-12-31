import React from 'react'
import {
  Section,
  SectionTitle,
  SectionText,
} from '../GlobalComponents/GlobalComponents'
import { Social } from '../Projects/ProjectStyles'
import { LeftSection } from './HeroStyles'
import { FaGithub, FaLinkedin, FaSchool, FaEnvelope } from 'react-icons/fa'

const iconColour = 'FF5678'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chrus Chong
      </SectionTitle>

      <div className='flexRow'>
        <FaSchool className='faIconBig' size='5rem' />{' '}
        <SectionText>
          I am a sophomore in NUS reading a double degree in Computer Science
          and Business Administration
        </SectionText>
      </div>
      <div className='flexRow'>
        <FaEnvelope className='faIconBig' size='3rem' />{' '}
        <SectionText>chrus.ckn@gmail.com</SectionText>
      </div>

      <SectionText>
        <Social href='https://github.com/chrus-chong' className='bigTag'>
          <FaGithub color={iconColour} /> Github
        </Social>
        <Social
          href='https://www.linkedin.com/in/chrus-chong/'
          style={{ marginLeft: '3rem' }}
          className='bigTag'
        >
          <FaLinkedin color={iconColour} /> LinkedIn
        </Social>
      </SectionText>
    </LeftSection>
  </Section>
)

export default Hero
