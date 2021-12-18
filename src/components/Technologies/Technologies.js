import React from 'react'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents'
import Image from 'next/image'
import javaLogo from '/public/images/java.svg'
import javascriptLogo from '/public/images/javascript.svg'
import pythonLogo from '/public/images/python.svg'
import htmlLogo from '/public/images/html-5.svg'
import cssLogo from '/public/images/css-3.svg'
import cLogo from '/public/images/c.svg'

const Technologies = () => (
  <Section nopadding id='technologies'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>I am confident in ....</SectionText>
    <div className='technologiesDiv'>
      <Image
        src={javaLogo}
        layout='intrinsic'
        className={'javaLogo'}
        alt='javaLogo'
        width={50}
        height={50}
      />
      <Image
        src={javascriptLogo}
        layout='intrinsic'
        className={'javascriptLogo'}
        alt='javascriptLogo'
        width={50}
        height={50}
      />
      <Image
        src={pythonLogo}
        layout='intrinsic'
        className={'pythonLogo'}
        alt='pythonLogo'
        width={50}
        height={50}
      />
      <Image
        src={htmlLogo}
        layout='intrinsic'
        className={'htmlLogo'}
        alt='htmlLogo'
        width={50}
        height={50}
      />
      <Image
        src={cssLogo}
        layout='intrinsic'
        className={'cssLogo'}
        alt='cssLogo'
        width={50}
        height={50}
      />
      <Image
        src={cLogo}
        layout='intrinsic'
        className={'cLogo'}
        alt='cLogo'
        width={50}
        height={50}
      />
    </div>
    <SectionText>I have worked with ....</SectionText>
    <div className='technologiesDiv'></div>
  </Section>
)

export default Technologies
