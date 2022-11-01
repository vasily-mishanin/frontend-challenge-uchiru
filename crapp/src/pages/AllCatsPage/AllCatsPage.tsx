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
  const catsCtx = useContext(CatsContext);
  const [isLoading, setIsLoading] = useState(false);
  let initialCats = useLoaderData() as ICatImage[];
  // catsCtx.addCats(initialCats);
  // initialCats = [];
  useEffect(() => {}, []);

  return (
    <div className={classes.wrapper}>
      <p>Add Infinite Scroll</p>
      <ListCats catsImages={initialCats} />
      {isLoading && <p> ... загружаем еще котиков ... </p>}
      {/* <InfiniteScroll dataLength={catsCtx.cats.length} >
      </InfiniteScroll> */}
    </div>
  );
}

export default AllCatsPage;
