import React, { useState, useRef, useEffect } from 'react'

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './ExperienceStyles'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents'
import { TimeLineData } from './TimelineDataConstants'

const TOTAL_CAROUSEL_COUNT = TimeLineData.length

const Experience = () => {
  const [activeItem, setActiveItem] = useState(0)
  const carouselRef = useRef()

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' })
  }

  const handleClick = (e, i) => {
    e.preventDefault()

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      )

      scroll(carouselRef.current, scrollLeft)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      )

      setActiveItem(index)
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <Section nopadding id='experience'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SectionDivider />
      <SectionTitle main>Experience</SectionTitle>
      <SectionText>placeholder text about experience</SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>{`${item.year}`}</CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          )
        })}
      </CarouselButtons>
    </Section>
  )
}

export default Experience
