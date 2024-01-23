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

    @media (width < 1080px) {
      font-size: 1.25rem;
    }
  }

  a {
    color: var(--green, #0F0);
    text-decoration: underline;

    @media (width < 1080px) {
      font-size: 1.25rem;
    }
  }
`

export const Eject = styled.div `
  width: 100%;
  height: 3rem;
  display: flex;
  padding: 0.3125rem;
  background: var(--gray-500);
  box-shadow: -5px -5px 0px 0px var(--gray-50) inset;

  @media (width < 640px) {
    height: 3rem;
  }
`;

export const EjectButton = styled.button `
  cursor: default;
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border: 5px solid var(--gray-950);
  background: rgba(24, 24, 27, 0.75);
  box-shadow: 0px 16px 0px 0px rgba(247, 247, 248, 0.15) inset, 0px -16px 0px 0px rgba(115, 117, 132, 0.15) inset;
  transition: background .4s linear;

  &:nth-child(even) {
    border-inline: 0px solid var(--gray-950);
    background: var(--gray-300);
    box-shadow: 0px 6px 0px 0px var(--gray-50) inset, 0px -6px 0px 0px var(--gray-500) inset;
  }
`

export const CD = styled.div `
  width: 100%;
  display: flex;
  height: 2rem;
  margin: 5px;
  box-shadow: -5px -5px 0px 0px var(--gray-50) inset;
  border: 5px solid var(--gray-500);
  border-bottom: none;
  border-right: none;
  background: var(--gray-950);

`

export const AC = styled.div`
  width: 100%;
  display: flex;
  height: 1rem;
  margin-top: 1rem;
  box-shadow: -5px -5px 0px 0px var(--gray-50) inset;
  border: 5px solid var(--gray-500);
  border-bottom: none;
  border-right: none;
  background: var(--gray-950);
`;
