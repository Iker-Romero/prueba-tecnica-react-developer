import { NavLink, Outlet } from 'react-router-dom';

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
    </>
  );
};

export default Root;
