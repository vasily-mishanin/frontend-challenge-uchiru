import classes from './AllCatsPage.module.css';
import type { ICatImage } from '../../model/types';
import { useLoaderData } from 'react-router-dom';
import ListCats from '../../components/List/ListCats';
import CatsContext from '../../store/catsContext';
import { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';
import * as api_cats from '../../api/api-cats';

function AllCatsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const catsCtx = useContext(CatsContext);
  let initialCats = useLoaderData() as ICatImage[];
  console.log('initialCats', initialCats);
  console.log('catsCtx', catsCtx.cats);

  useEffect(() => {
    console.log('USE EFFECT', catsCtx.cats.length);
    if (catsCtx.cats.length > 0) {
      return;
    } else {
      catsCtx.addCats(initialCats);
    }
  }, []);

  const addMoreCats = async () => {
    console.log('addMoreCats');
    const moreCats = await api_cats.fetchCats();
    // just for UI smoothness
    setTimeout(() => {
      catsCtx.addCats(moreCats);
    }, 500);
  };

  return (
    <div className={classes.wrapper} id='scrollableDiv'>
      <InfiniteScroll
        className={classes.infScroll}
        dataLength={catsCtx.cats.length}
        next={addMoreCats}
        hasMore={true}
        loader={<p> ... загружаем еще котиков ... </p>}
      >
        <ListCats catsImages={catsCtx.cats} />
      </InfiniteScroll>
    </div>
  );
}

export default AllCatsPage;
