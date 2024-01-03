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
  font-family: 'VCR OSD Mono', monospace;
  color: var(--green, #0F0);
  line-height: 160%;
  font-size: 1.5rem;
  text-transform: uppercase;

  p {
    color: var(--green, #0F0);
  }

  a {
    color: var(--green, #0F0);
    text-decoration: underline;
  }
`

export const Eject = styled.div `
  width: 100%;
  height: 74px;
  display: flex;
  padding: 0.3125rem;
  background: var(--gray-500);
  box-shadow: -5px -5px 0px 0px var(--gray-50) inset;
`;

export const EjectButton = styled.button `
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-left: -0.25rem;
  align-items: center;
  border: 5px solid var(--gray-950);
  background: var(--gray-300);
  box-shadow: 0px 6px 0px 0px var(--gray-50) inset, 0px -6px 0px 0px var(--gray-500) inset;
  transition: background .4s linear;

  &:nth-child(odd) {
    background: rgba(24, 24, 27, 0.75);
    box-shadow: 0px 16px 0px 0px rgba(247, 247, 248, 0.15) inset, 0px -16px 0px 0px rgba(115, 117, 132, 0.15) inset;
  }
`

export const CD = styled.div `
  width: 100%;
  display: flex;
  height: 2rem;
  border: 5px solid var(--gray-gray-500, #737584);
  background: var(--gray-gray-950, #18181B);
  box-shadow: -5px -5px 0px 0px #F7F7F8 inset;
`

export const AC = styled.div `
  width: 100%;
  display: flex;
  height: 1rem;
  margin-top: 1rem;
  background: var(--gray-gray-950, #18181B);
  box-shadow: -5px -5px 0px 0px #F7F7F8 inset;
`
