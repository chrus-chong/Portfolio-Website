import React from 'react'
import {
  Button,
  Section,
  SectionTitle,
  SectionText,
} from '../GlobalComponents/GlobalComponents'
import { Tag } from '../Projects/ProjectStyles'
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
        <Tag href='https://github.com/chrus-chong'>
          <FaGithub color={iconColour} /> Github
        </Tag>
        <Tag
          href='https://www.linkedin.com/in/chrus-chong/'
          style={{ marginLeft: '3rem' }}
        >
          <FaLinkedin color={iconColour} /> LinkedIn
        </Tag>
      </SectionText>
    </LeftSection>
  </Section>
)

export default Hero
