import React from 'react'

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents'
import { projects } from './RecentProjectConstants'

const Projects = () => (
  <Section nopadding id='projects'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SectionDivider />
    <SectionTitle main>Projectsg</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return (
                    <Tag key={i} style={{ background: '#000000' }}>
                      {t}
                    </Tag>
                    /* <Tag key={i}>{t}</Tag> */
                  )
                })}
              </TagList>
            </div>
            <UtilityList>
              <Tag href={p.visit}>Code</Tag>
              <Tag href={p.source}>Source</Tag>
            </UtilityList>
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
)

export default Projects
