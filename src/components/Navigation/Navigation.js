import { NavLink } from 'react-router-dom';
import planetIcon from '../../images/planetIcon.png';
import './Navigation.css';

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
    <div className="container d-flex divNav">
      <nav className="navbar navbar-expand-lg menu shadow fixed-top">
        <a href="/">
          <img className="logo" src={planetIcon} alt="logo" />
          <span>Space Travelers&apos; Hub</span>
        </a>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>

  );
};

export default Navigation;
