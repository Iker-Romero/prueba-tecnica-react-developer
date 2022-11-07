import styled, { css } from 'styled-components';

const login = css`
  border: 0.25rem solid white;
`;

const trial = css`
  background-color: white;
  color: black;
`;

const StyledButton = styled.button`
  height: 2rem;
  border-radius: 1rem;
  padding: 0.25rem 1rem;
  ${({ id }) => (id === 'login' ? login : trial)}
`;

export default StyledButton;
