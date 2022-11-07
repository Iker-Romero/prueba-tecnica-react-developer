import { NavLink, Outlet } from 'react-router-dom';

import Footer from '../../ui/Footer';
import Main from '../../ui/Main';
import Nav from '../../ui/Nav';

const Root = () => {
  return (
    <>
      <header>
        <Nav>
          <NavLink to="/">DEMO Streaming</NavLink>
        </Nav>
      </header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <p>
          Home | Terms and Conditions | Privacy Policy | Collection Statement | Help |
          Manage Account
        </p>
        <p>Copyright © 2022 DEMO Streaming. All Rights Reserverd.</p>
        <section>
          <div>
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777779/demo-streaming/social/facebook-white_g3zvkm.svg"
              alt="Facebook logo link"
            />
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777780/demo-streaming/social/twitter-white_zfic7u.svg"
              alt="Twitter logo link"
            />
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777779/demo-streaming/social/instagram-white_iccnkm.svg"
              alt="Instagram logo link"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777780/demo-streaming/store/app-store_brbszp.svg"
              alt="Apple App Store logo link"
            />
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777781/demo-streaming/store/play-store_oonwoq.svg"
              alt="Google Play Store logo link"
            />
            <img
              src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667777781/demo-streaming/store/windows-store_ntjmkn.svg"
              alt="Microsoft Store logo link"
            />
          </div>
        </section>
      </Footer>
    </>
  );
};

export default Root;
