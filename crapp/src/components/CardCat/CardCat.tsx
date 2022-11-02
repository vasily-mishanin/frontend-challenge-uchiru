import classes from './CardCat.module.css';
import type { ICatImage } from '../../model/types';
import HeartLike from '../HeartLike/HeartLike';
import { useState, useContext } from 'react';
import CatsContext from '../../store/catsContext';
import { url } from 'inspector';

interface ICardCat {
  cat: ICatImage;
}

function CardCat({ cat }: ICardCat) {
  const [isLikeShown, setIsLikeShown] = useState(false);
  const [isInFavorite, setIsInFavorite] = useState(cat.inFavor);

  const catsCtx = useContext(CatsContext);

  const handleMouseEnter = () => {
    console.log('toggleCardHover');
    setIsLikeShown(true);
  };

  const handleMouseLeave = () => {
    console.log('toggleCardHover');
    setIsLikeShown(false);
  };

  const handleLike = () => {
    console.log('LIKE');
    if (cat.inFavor) {
      catsCtx.removeFavCat(cat.id);
    } else {
      catsCtx.addFavCat(cat.id);
    }
  };

  return (
    <article className={classes.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={classes.card}>
        <div className={classes.imagewrapper}>
          <img className={classes.image} src={cat.url} alt='Cat' />
          {(isLikeShown || cat.inFavor) && <HeartLike onLikeClick={handleLike} inFavor={cat.inFavor} />}
        </div>
      </div>
    </article>
  );
}

export default CardCat;
