import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <div className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink className={classes.link} to='all-cats'>
            Все котики
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} to='favorite-cats'>
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
