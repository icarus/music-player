import styled from 'styled-components';

export const TrackListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`

interface TrackProps {
  isActive: boolean;
}

export const Track = styled.div<TrackProps>`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  &:hover, :focus {
    cursor: pointer;
    background: var(--gray-900);
  }

  ${props => props.isActive && `
    background: var(--gray-900);
  `}

  img {
    aspect-ratio: 1;
    width: 3rem;
  }
`

export const TrackContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  p:last-child {
    text-decoration: underline;
  }
`

export const ShowMoreButton = styled.button`
  color: var(--primary-color);
  text-edge: cap;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
  text-decoration-line: underline;
  transition: all 0.5s ease-in-out;


  &:hover, :active, :focus {
    cursor: pointer;
    opacity: 0.8;
  }
`
