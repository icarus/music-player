import styled from 'styled-components';

export const Hidden = styled.div `
  display: none;
`;

export const PlaybackControls = styled.div `
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 2rem;
  align-items: flex-start;
  border-radius: 1rem;
  background: var(--gray-925);
`;

interface ButtonProps {
  isActive?: boolean;
}

export const Button = styled.button<ButtonProps> `
  color: var(--gray-500);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--gray-500);
  border-right: none;
  background: var(--gray-925);
  transition: all 0.5s ease-in-out;

  ${(props) => props.isActive && `
    border-color: var(--gray-500);
    background: var(--gray-950);
    box-shadow: -3px -3px 9px 0px rgba(115, 117, 132, 0.30) inset, 3px 3px 9px 0px rgba(0, 0, 0, 0.80) inset;
  `}

  &:hover {
    border-color: var(--gray-500);
    background: var(--gray-950);
    box-shadow: -3px -3px 9px 0px rgba(115, 117, 132, 0.30) inset, 3px 3px 9px 0px rgba(0, 0, 0, 0.80) inset;
  }

  &:first-child {
    border-radius: 1rem 0rem 0rem 1rem;
  }

  &:last-child {
    border-radius: 0rem 1rem 1rem 0rem;
  }
`;

export const Wrapper = styled.div `
  display: flex;
  gap: 4rem;
  margin-inline: 2rem;
  justify-content: space-between;
  align-items: center;

  p {
    width: 12rem;
  }
`
