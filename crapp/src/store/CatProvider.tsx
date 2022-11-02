import CatsContext from './catsContext';
import type { ICatImage } from '../model/types';
import { ICatsStore } from './catsContext';
import { useState } from 'react';

interface ICatProvider {
  children: React.ReactNode;
}

const getCatsFromLocalStorage = () => {
  const cats = localStorage.getItem('favCats');
  if (cats) {
    return JSON.parse(cats);
  } else {
    return [];
  }
};

function CatProvider(props: ICatProvider) {
  const [cats, setCats] = useState<ICatImage[]>([]);
  const [favCats, setFavCats] = useState<ICatImage[]>(getCatsFromLocalStorage());
  console.log('CatProvider', cats);

  const addNewCats = (newCats: ICatImage[]) => {
    console.log('addNewCats', cats.length);

    setCats((prevCats) => {
      let cats = [...prevCats];
      newCats.forEach((newCat) => {
        if (!cats.some((cat) => cat.id === newCat.id)) {
          cats = [...cats, newCat];
        }
      });
      return cats;
    });
  };

  const addFavCat = (id: string) => {
    setCats((prevCats) => {
      const cats = [...prevCats];
      let indexOfFavCat = cats.findIndex((cat) => cat.id === id);
      cats[indexOfFavCat].inFavor = true;
      return cats;
    });

    setFavCats((prev) => {
      if (!prev.some((favCat) => favCat.id === id)) {
        const favCatToAdd = cats.find((cat) => cat.id === id);
        if (favCatToAdd) {
          favCatToAdd.inFavor = true;
          const newFavCats = [...prev, favCatToAdd];
          localStorage.setItem('favCats', JSON.stringify(newFavCats));
          return newFavCats;
        }
      }
      return prev;
    });
  };

  const removeFavCat = (id: string) => {
    setCats((prevCats) => {
      const cats = [...prevCats];
      let indexOfFavCat = cats.findIndex((cat) => cat.id === id);
      if (indexOfFavCat > -1) {
        cats[indexOfFavCat].inFavor = false;
      }
      return cats;
    });
    setFavCats((prev) => {
      const newFavCats = prev.filter((cat) => cat.id !== id);
      localStorage.setItem('favCats', JSON.stringify(newFavCats));
      return newFavCats;
    });
  };

  const catContext: ICatsStore = {
    cats: cats,
    favCats: favCats,
    addCats: addNewCats,
    addFavCat: addFavCat,
    removeFavCat: removeFavCat,
  };

  return <CatsContext.Provider value={catContext}>{props.children}</CatsContext.Provider>;
}

export default CatProvider;
