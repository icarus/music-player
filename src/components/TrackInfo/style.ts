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
  height: 3em;
  align-text: bottom;
`

export const TickerContent = styled.div`
  color: var(--gray-500);
  display: flex;
  justify-content: space-between;
  font-style: italic;
  animation: ${slide} 8s linear infinite;
`

export const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
