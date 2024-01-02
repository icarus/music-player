import styled from 'styled-components';

export const VolumeBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: var(==gray-800);
  position: relative;
  border-radius: 2px;
  cursor: pointer;
`;

export const VolumeBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--gray-800);
  border-radius: 2px;
  z-index: -1;

`;

export const VolumeIndicator = styled.div<{ volume: number }>`
  height: 100%;
  width: ${(props) => props.volume}%;
  background-color: var(--gray-500);
  border-radius: 2px;
`;

export const VolumeDot = styled.div<{ volume: number }>`
  width: 14px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--gray-500);
  border: 3px solid var(--gray-950);
  position: absolute;
  top: 50%;
  left: ${(props) => props.volume}%;
  transform: translate(-50%, -50%);
`;
