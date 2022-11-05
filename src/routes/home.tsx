import { Link } from 'react-router-dom';

import StyledFigure from '../../ui/StyledFigure';
import StyledSection from '../../ui/StyledSection';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <StyledSection>
        <Link to="/series">
          <StyledFigure>Series</StyledFigure>
        </Link>
        <Link to="/movies">
          <StyledFigure>Movies</StyledFigure>
        </Link>
      </StyledSection>
    </>
  );
};

export default Home;
