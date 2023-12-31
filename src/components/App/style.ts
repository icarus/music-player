import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90vh;
  width: 100vw;
  overflow: hidden;
`

export const TrackViewer = styled.div`
  min-width: 70vw
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
  text-align: left;
`

export const Side = styled.div`
  min-width: 30vw;
  display: flex;
  flex-direction: column;
  position: sticky;
  border-left: 2px solid var(--gray-800);
  padding: 2rem;
  gap: 2rem;
`
