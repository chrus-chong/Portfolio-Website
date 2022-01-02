import React from 'react'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents'
import Image from 'next/image'
import javaLogo from '../../../public/images/java.svg'
import javascriptLogo from '../../../public/images/javascript.svg'
import pythonLogo from '../../../public/images/python.svg'
import htmlLogo from '../../../public/images/html-5.svg'
import cssLogo from '../../../public/images/css-3.svg'
import cLogo from '../../../public/images/c.svg'

import reactLogo from '../../../public/images/react.svg'
import reduxLogo from '../../../public/images/redux.svg'
import mongodbLogo from '../../../public/images/mongodb.svg'
import cypressLogo from '../../../public/images/cypress.svg'
import javafxLogo from '../../../public/images/JavaFx.png'
import gitLogo from '../../../public/images/git.svg'
import figmaLogo from '../../../public/images/figma.svg'

const Technologies = () => (
  <Section nopadding id='technologies'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with the following programming languages and technologies to
      build web and desktop applications alike. In particular, I frequently code
      using Java which makes it the programming language that I am most
      confident in.
    </SectionText>
    <SectionText>Programming Languages</SectionText>
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
    <br></br>
    <br></br>
    <br></br>
    <SectionText>Platforms and Technologies</SectionText>
    <div className='technologiesDiv'>
      <Image
        src={reactLogo}
        layout='intrinsic'
        className={'reactLogo'}
        alt='reactLogo'
        width={50}
        height={50}
      />
      <Image
        src={reduxLogo}
        layout='intrinsic'
        className={'reduxLogo'}
        alt='reduxLogo'
        width={50}
        height={50}
      />
      <Image
        src={mongodbLogo}
        layout='intrinsic'
        className={'mongodbLogo'}
        alt='mongodbLogo'
        width={50}
        height={50}
      />
      <Image
        src={cypressLogo}
        layout='intrinsic'
        className={'cypressLogo'}
        alt='cypressLogo'
        width={50}
        height={50}
      />
      <Image
        src={javafxLogo}
        layout='intrinsic'
        className={'javafxLogo'}
        alt='javafxLogo'
        width={50}
        height={50}
      />
      <Image
        src={gitLogo}
        layout='intrinsic'
        className={'gitLogo'}
        alt='gitLogo'
        width={50}
        height={50}
      />
      <Image
        src={figmaLogo}
        layout='intrinsic'
        className={'figmaLogo'}
        alt='figmaLogo'
        width={50}
        height={50}
      />
    </div>
  </Section>
)

export default Technologies
