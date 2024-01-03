import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 93vh;
  width: 100vw;
  overflow: hidden;
`

export const TrackViewer = styled.div`
  width: 70vw;
  display: flex;
  margin-top: 17rem;
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
  width: 30vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  border-left: 2px solid var(--gray-800);
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
