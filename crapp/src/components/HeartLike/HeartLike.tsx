import classes from './HeartLike.module.css';
import HeartIcon from '../../images/heart.svg';
import FullHeartIcon from '../../images/heart-full.svg';
import { useState } from 'react';

interface ILike {
  onLikeClick: () => void;
  inFavor?: boolean;
}

function HeartLike({ onLikeClick, inFavor }: ILike) {
  const [isSolid, setIsSolid] = useState(inFavor ? true : false);

  const handleMouseEnter = () => {
    if (inFavor) {
      setIsSolid(false);
    } else {
      setIsSolid(true);
    }
  };

  const handleMouseLeave = () => {
    if (inFavor) {
      setIsSolid(true);
    } else {
      setIsSolid(false);
    }
  };

  const handleClick = () => {
    if (inFavor && isSolid) {
      setIsSolid(false);
    }
    onLikeClick();
  };

  return (
    <div
      className={classes.like}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isSolid && <img className={classes.image} src={FullHeartIcon} alt='Cat' />}
      {!isSolid && <img className={classes.image} src={HeartIcon} alt='Cat' />}
    </div>
  );
}

export default HeartLike;
