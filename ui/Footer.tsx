import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }

  section div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  img {
    height: 2rem;
  }
`;

export default Footer;
