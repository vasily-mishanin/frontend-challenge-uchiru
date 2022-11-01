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
    setIsSolid(false);
    onLikeClick();
  };

  //   const renderLike = () => {
  //     if (inFavor) {
  //       return <img className={classes.image} src={FullHeartIcon} alt='Cat' />;
  //     }
  //   };

  return (
    <div
      className={classes.like}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isSolid && inFavor && <img className={classes.image} src={FullHeartIcon} alt='Cat' />}
      {!isSolid && inFavor && <img className={classes.image} src={HeartIcon} alt='Cat' />}
      {!isSolid && !inFavor && <img className={classes.image} src={HeartIcon} alt='Cat' />}
      {isSolid && !inFavor && <img className={classes.image} src={FullHeartIcon} alt='Cat' />}
    </div>
  );
}

export default HeartLike;
