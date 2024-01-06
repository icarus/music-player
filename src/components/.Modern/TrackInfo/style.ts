import styled, { keyframes } from 'styled-components';

export const slide = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
`

export const TickerWrapper = styled.div`
  margin-top: 17rem;
  height: 3em;
  align-text: bottom;
`

export const TickerContent = styled.div`
  color: var(--gray-500);
  display: flex;
  width: max-content;
  animation: ${slide} 20s linear infinite;
`

export const TickerItem = styled.div`
  flex-shrink: 0;
  margin-right: 16rem;

  a {
    color: var(--gray-500);
    transition: all 0.5s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;


export const TrackDetails = styled.div`
  color: var(--gray-gray-50);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  a {
    text-decoration: underline;
  }
`
