import { Link } from 'react-router-dom';

import StyledFigure from '../../ui/StyledFigure';
import StyledSection from '../../ui/StyledSection';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <StyledSection>
        <Link to="/series">
          <StyledFigure>
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777779/demo-streaming/placeholder_jmzye1.png"
              alt="Series page"
            />
            <figcaption>Series</figcaption>
          </StyledFigure>
        </Link>
        <Link to="/movies">
          <StyledFigure>
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777779/demo-streaming/placeholder_jmzye1.png"
              alt="Movies page"
            />
            <figcaption>Movies</figcaption>
          </StyledFigure>
        </Link>
      </StyledSection>
    </>
  );
};

export default Home;
