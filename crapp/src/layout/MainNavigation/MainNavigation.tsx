import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <div className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink
            className={classes.link}
            to='all-cats'
            style={({ isActive }) => ({
              background: isActive ? '#1E88E5' : '#2196F3',
            })}
          >
            Все котики
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={classes.link}
            to='favorite-cats'
            style={({ isActive }) => ({
              background: isActive ? '#1E88E5' : '#2196F3',
            })}
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
