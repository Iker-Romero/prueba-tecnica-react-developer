import styled from 'styled-components';

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  width: 12rem;
  gap: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  text-align: center;

  &:hover {
    filter: opacity(0.66);
    border: 4px solid white;
  }
`;

export default StyledFigure;
