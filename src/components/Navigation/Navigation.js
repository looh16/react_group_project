import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import planetIcon from '../../images/planetIcon.png';
import './Navigation.css';
import '../../App.css';

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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-3">
          <img
            alt="logo"
            src={planetIcon}
            width="70"
            height="50"
            className="d-inline-block align-top logo"
          />
          <span className="nav-brand">Space Travelers&apos; Hub</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <Nav.Link key={link.id} as={Link} to={link.path}>
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
