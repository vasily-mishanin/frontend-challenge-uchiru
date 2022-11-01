import classes from './AllCatsPage.module.css';
import type { ICatImage } from '../../model/types';
import { useLoaderData } from 'react-router-dom';
import ListCats from '../../components/List/ListCats';

function AllCatsPage() {
  const cats = useLoaderData() as ICatImage[];
  console.log(cats);

  return (
    <div className={classes.wrapper}>
      <h1>All Cats Page</h1>
      <ListCats catsImages={cats} />
    </div>
  );
}

export default AllCatsPage;
