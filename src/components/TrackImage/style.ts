import styled from 'styled-components'

export const Box = styled.div `
  width: 50%;
  margin: 0 auto;
  aspect-ratio: 1;
  background: var(--gray-950);
`

interface IImageProps {
  image: string;
}

export const Image = styled.div<IImageProps> `
  width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`
