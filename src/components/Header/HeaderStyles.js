import { IoIosArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(
    5,
    1fr
  ); /* same as 1fr 1fr 1fr 1fr 1fr (just want to make 5 columns)*/
  grid-template-rows: 1fr; /* 1 row for NavBar */
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  /* media queries to ensure responsive website. Uses 2 rows instead of 1 for the navbar for smaller devices
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  } */
`
