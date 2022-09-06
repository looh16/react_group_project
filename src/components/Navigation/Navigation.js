import { NavLink } from 'react-router-dom';
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
    <div>
      <nav>
        <a href="/">
          <img src={planetIcon} alt="logo" />
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
