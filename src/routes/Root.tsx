import { Outlet } from 'react-router-dom';

import Nav from '../../components/Nav';
import Main from '../../ui/Main';

const Root = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Root;
