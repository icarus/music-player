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
  margin-top: 10rem;
  flex-direction: column;
  justify-content: center;
  gap: 4.5rem;
  text-align: left;
  overflow: hidden;
`

export const Side = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  border-left: 2px solid var(--gray-800);
  padding: 2rem;
  gap: 2rem;
`
