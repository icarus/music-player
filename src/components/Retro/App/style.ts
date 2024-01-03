import styled from 'styled-components'

export const Container = styled.div`
  margin: 0.625rem;
  display: flex;
  width: calc(100vw - 1.25rem);
  height: calc(100vh - 8.75rem);
  justify-content: center;
  align-items: center;
  background: var(--gray-300);
`

export const TrackViewer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.5rem;
  text-align: left;
  overflow: hidden;

  @media (width < 768px) {
    width: 100%;
  }
`

interface ISideProps {
  isVisible: boolean;
}

export const Side = styled.div<ISideProps>`
  width: 30%;
  height: 94%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  border-left: 10px solid var(--gray-950);
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    border-left: 0px;
    width: 90vw;
    height: 100%;
    background-color: var(--gray-950);
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