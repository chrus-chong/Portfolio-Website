import styled from 'styled-components'

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`
export const Social = styled.a`
  color: #303c6c;
  font-size: 1.9rem;
  padding: 0.8rem 1.3rem;
  background: #f4976c;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #fbae06;
  }
`
