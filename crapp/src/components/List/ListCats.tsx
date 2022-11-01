import classes from './ListCats.module.css';
import type { ICatImage } from '../../model/types';
import CardCat from '../CardCat/CardCat';

interface ICats {
  catsImages: ICatImage[];
}

function ListCats({ catsImages }: ICats) {
  console.log(catsImages);
  return (
    <ul className={classes.list}>
      {catsImages.map((cat) => (
        <li className={classes.item} key={cat.id}>
          <CardCat {...cat} />
        </li>
      ))}
    </ul>
  );
}

export default ListCats;
