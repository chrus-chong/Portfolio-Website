import styled from 'styled-components'

export const Link = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: #1f51ff;
  transition: all 0.3s ease-in;
  font-size: 1.6rem;

  &:hover {
    color: #39ff14;
  }
`

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  background: #808080 /*grey*/;
  top: 0;
  left: 0;
  right: 0;
`

export const Logo = styled.a`
  padding: 1rem 0;
  color: #faed27;
  font-weight: 800;
  font-size: 1.9rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`

export const Dropdown = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #ffffff /*white*/;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
