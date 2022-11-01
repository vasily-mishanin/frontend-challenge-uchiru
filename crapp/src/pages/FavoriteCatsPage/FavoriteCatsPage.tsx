import classes from './FavoriteCatsPage.module.css';
import { useContext } from 'react';
import CatsContext from '../../store/catsContext';
import ListCats from '../../components/List/ListCats';

function FavoriteCatsPage() {
  const catsCtx = useContext(CatsContext);

  return (
    <div className={classes.page}>
      {catsCtx.favCatsImages.length === 0 && <h1>No favorites cats yet &#128577;</h1>}
      <ListCats catsImages={catsCtx.favCatsImages} />
    </div>
  );
}

export default FavoriteCatsPage;
