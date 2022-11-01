import { Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../../components/Footer/Footer';
import classes from './Root.module.css';

function Root() {
  return (
    <div className={classes.wrapper}>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Root;
