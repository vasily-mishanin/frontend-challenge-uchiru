import CatsContext from './catsContext';
import type { ICatImage } from '../model/types';
import { ICatsStore } from './catsContext';
import { useState } from 'react';

interface ICatProvider {
  children: React.ReactNode;
}

const getCatsImagesFromLocalStorages = () => {
  const cats = localStorage.getItem('favCatsImages');
  if (cats) {
    return JSON.parse(cats);
  } else {
    return [];
  }
};

function CatProvider(props: ICatProvider) {
  const [cats, setCats] = useState<ICatImage[]>([]);
  const [favoriteCats, setFavoriteCats] = useState<ICatImage[]>(getCatsImagesFromLocalStorages());
  console.log('CatProvider', favoriteCats);

  const addNewCats = (newCats: ICatImage[]) => {
    console.log('addNewCats', cats.length);

    setCats((prevCats) => {
      let cats = [...prevCats];
      // const updatedCats = [...prevCats];
      newCats.forEach((newCat) => {
        if (!cats.some((cat) => cat.id === newCat.id)) {
          cats = [...cats, newCat];
        }
      });
      return cats;
    });
  };

  const addFavCatImage = (catImage: ICatImage) => {
    setFavoriteCats((prev) => {
      if (!prev.some((cat) => cat.id === catImage.id)) {
        catImage.inFavor = true;
        const newCatImages = [...prev, catImage];
        localStorage.setItem('favCatsImages', JSON.stringify(newCatImages));
        return newCatImages;
      }
      return prev;
    });
  };

  const removeFavCatImage = (id: string) => {
    setFavoriteCats((prev) => {
      const newCatImages = prev.filter((cat) => cat.id !== id);
      localStorage.setItem('favCatsImages', JSON.stringify(newCatImages));
      return newCatImages;
    });
  };

  const catContext: ICatsStore = {
    cats: cats,
    favCatsImages: favoriteCats,
    addCatImg: addFavCatImage,
    removeCatImg: removeFavCatImage,
    addCats: addNewCats,
  };

  return <CatsContext.Provider value={catContext}>{props.children}</CatsContext.Provider>;
}

export default CatProvider;
