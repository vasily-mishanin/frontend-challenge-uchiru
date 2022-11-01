import classes from './CardCat.module.css';
import type { ICatImage } from '../../model/types';

function CardCat({ url }: ICatImage) {
  return (
    <article className={classes.wrapper}>
      <div className={classes.card}>
        <img className={classes.image} src={url} alt='Cat' />
      </div>
    </article>
  );
}

export default CardCat;
