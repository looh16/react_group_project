import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import planetIcon from '../../images/planetIcon.png';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: ' My Profile',
    },
  ];

  return (
    <Navbar className="top-0 bg-white position-sticky ">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-3">
          <img
            alt="logo"
            src={planetIcon}
            width="90"
            height="70"
            className="d-inline-block align-top"
          />
          Space Travelers&apos; Hub
        </Navbar.Brand>
        <Nav>
          {links.map((link) => (
            <Nav.Link key={link.id}>
              <NavLink
                key={link.id}
                to={link.path}
                style={(isActive) => ({
                  textDecoration: isActive ? 'none' : 'underline',
                })}
              >
                {link.text}
              </NavLink>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
