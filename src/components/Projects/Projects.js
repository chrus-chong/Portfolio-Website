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
import Link from 'next/link'

const getTagColor = (tag) => {
  if (tag == 'React') {
    return '#ACE7FF'
  } else if (tag == 'Java') {
    return '#FFBEBC'
  } else if (tag == 'JavaFX') {
    return '#FFDFD3'
  } else if (tag == 'Javascript') {
    return '#FFF5BA'
  } else if (tag == 'MongoDB') {
    return '#C1E7E3'
  } else if (tag == 'NodeJS') {
    return '#AFF8DB'
  } else if (tag == 'Express') {
    return '#D5AAFF'
  } else if (tag === 'NextJS') {
    return '#ECEAE4'
  } else {
    return '#ECEAE4'
  }
}

const Projects = () => (
  <Section nopadding id='projects'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>
                <Link href={p.source}>{p.title}</Link>
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <br></br>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return (
                    <Tag key={i} style={{ background: getTagColor(t) }}>
                      {t}
                    </Tag>
                    /* <Tag key={i}>{t}</Tag> */
                  )
                })}
              </TagList>
            </div>
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
)

export default Projects
