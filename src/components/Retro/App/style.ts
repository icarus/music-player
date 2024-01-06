import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  height: calc(100vh - 8.75rem);
  justify-content: center;
  align-items: center;
  border: 10px solid var(--gray-950);
  border-top: 5px solid var(--gray-950);
  background: var(--gray-300);
`

export const TrackViewer = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.5rem;
  text-align: left;
  overflow: hidden;

  @media (width < 1080px) {
    width: 100%;
  }
`

interface ISideProps {
  isVisible: boolean;
}

export const Side = styled.div<ISideProps>`
  width: 30vw;
  height: 95%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  border-left: 10px solid var(--gray-950);
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1080px) {
    position: fixed;
    top: 7.5rem;
    width: calc(100vw - 5.25rem);
    height: 100%;
    background-color: var(--gray-300);
    border: 10px solid var(--gray-950);
    left: 100%;
    transition: left 0.2s ease-in-out;

    ${props => props.isVisible && `
      left: 0;
    `}
  }
`

export const Wrapper = styled.div`
  background: var(--gray-950);
`
