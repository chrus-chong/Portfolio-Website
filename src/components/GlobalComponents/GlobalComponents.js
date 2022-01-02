import styled from 'styled-components'
import React from 'react'

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  width: max-content;
  max-width: 100%;
  /* background: linear-gradient(
    121.57deg,
    #303c6c 18.77%,
    rgba(0, 0, 0, 0.5) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: black;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? '58px 0 16px' : '0')};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? '56px' : '48px')};
    line-height: ${(props) => (props.main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? '28px' : '32px')};
    line-height: ${(props) => (props.main ? '32px' : '40px')};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: #808080;
  padding-bottom: 3.6rem;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`
export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? 'linear-gradient(270deg, #fa3b04 0%, #F4976C 100%)'
      : 'linear-gradient(270deg, #fa3b04 0%, #F4976C 100%)'};
  margin: ${(props) => (props.divider ? '4rem 0' : '')};
  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
