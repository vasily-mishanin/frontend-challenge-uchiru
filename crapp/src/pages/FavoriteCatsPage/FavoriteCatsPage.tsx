import classes from './FavoriteCatsPage.module.css';
import { useContext } from 'react';
import CatsContext from '../../store/catsContext';
import ListCats from '../../components/List/ListCats';

function FavoriteCatsPage() {
  const catsCtx = useContext(CatsContext);

  return (
    <div className={classes.page}>
      {catsCtx.favCats.length === 0 && <h3>Пока нет любимых котиков &#128577;</h3>}
      <ListCats catsImages={catsCtx.favCats} />
    </div>
  );
}

export default FavoriteCatsPage;
