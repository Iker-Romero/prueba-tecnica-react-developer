import styled from 'styled-components';

const Nav = styled.nav`
  height: 4rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex: 0 1 4rem;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 1;

  a {
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export default Nav;
