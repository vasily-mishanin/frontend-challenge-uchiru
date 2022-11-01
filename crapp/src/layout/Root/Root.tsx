import { Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../../components/Footer/Footer';

function Root() {
  return (
    <div>
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
