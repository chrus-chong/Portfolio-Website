import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIcons,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:chrus.ckn@gmail.com'>
            chrus.ckn@gmail.com
          </LinkItem>
          <div className='creditDiv'>
            Images from this website are retrieved from icons8.com
          </div>
        </LinkColumn>
        <LinkColumn></LinkColumn>
        <div className='footerIcons'>
          <LinkColumn style={{ width: '100px' }}>
            <SocialContainer>
              <SocialIcons href='https://github.com/chrus-chong'>
                <AiFillGithub size='3rem' />
              </SocialIcons>
              <SocialIcons href='https://www.linkedin.com/in/chrus-chong/'>
                <AiFillLinkedin size='3rem' />
              </SocialIcons>
            </SocialContainer>
          </LinkColumn>
        </div>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
