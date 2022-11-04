import { NavLink } from 'react-router-dom';

import Button from '../../components/button';

const Home = () => {
  return (
    <>
      <h1>📽️ WELCOME! 🎬</h1>
      <div className="front-page">
        <img
          src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667232937/Cinema-Arena/cinema.png"
          alt="Cinema objects draw"
          className="home-image"
        />
        <div>
          <div className="home-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora
              earum minima in corporis magni architecto beatae fuga dolorem sit vero
              veniam suscipit eos, error deserunt? Neque eum ab consectetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam
              eligendi possimus adipisci illum deserunt atque nisi sint repudiandae quod
              temporibus, corrupti sequi eveniet? Laborum a nesciunt dolor iure illum?
            </p>
          </div>
          <NavLink to="/finder">
            <Button id="start" text="START YOUR SEARCH" color="#db0000" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
