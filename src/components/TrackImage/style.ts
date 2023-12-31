import styled from 'styled-components'

export const Box = styled.div `
  width: 100%;
  aspect-ratio: 1;
  background: var(--gray-900);
`

interface IImageProps {
  image: string;
}

export const Image = styled.div<IImageProps> `
  width: 100%;
  aspect-ratio: 1;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`
