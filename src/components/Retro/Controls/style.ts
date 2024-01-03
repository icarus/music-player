import styled from 'styled-components';

export const Hidden = styled.div `
  display: none;
`;

export const PlaybackControls = styled.div `
  width: 100%;
  height: 74px;
  display: flex;
  padding: 0.3125rem;
  background: var(--gray-500);
  box-shadow: -5px -5px 0px 0px var(--gray-50) inset;
`;

interface ButtonProps {
  isActive?: boolean;
}

export const Button = styled.button<ButtonProps> `
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 5px solid var(--gray-950);
  background: var(--gray-300);
  box-shadow: 0px 6px 0px 0px var(--gray-50) inset, 0px -6px 0px 0px var(--gray-500) inset;
  transition: background .4s linear;

  ${(props) => props.isActive && `
    background: var(--gray-700);
    box-shadow: none;
  `}

  &:hover {
    background: var(--gray-700);
    box-shadow: none;
  }

  &:not(:first-child) {
    margin-left: -0.625rem;
  }
`;

export const Wrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
