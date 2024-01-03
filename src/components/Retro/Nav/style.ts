import styled from 'styled-components'

export const Navbar = styled.nav`
  margin: 0.625rem;
  background: var(--gray-300);
  height: 5rem;
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`

interface IProfileProps {
  profile: string;
}

export const Profile = styled.img<IProfileProps> `
  background-image: url(${props => props.profile});
  aspect-ratio: 1;
  width: 2rem;
  border-radius: 50%;

  @media (width < 768px) {
    display: none;
  }
`

export const Burger = styled.div`
  @media (width < 768px) {
    display: block;
  }

  @media (width >= 768px) {
    display: none;
  }
`
