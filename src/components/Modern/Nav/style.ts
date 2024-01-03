import styled from 'styled-components'

export const Navbar = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--gray-800);
  padding: 0 2rem;
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
