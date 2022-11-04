import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer';
import Nav from '../../components/navbar';

const Root = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
