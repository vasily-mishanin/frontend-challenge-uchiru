import type { ICatImage } from '../model/types';
import React from 'react';

export interface ICatsStore {
  cats: ICatImage[];
  favCats: ICatImage[];
  addCats: (cats: ICatImage[]) => void;
  addFavCat: (id: string) => void;
  removeFavCat: (id: string) => void;
}

const initialCatsState: ICatsStore = {
  cats: [],
  favCats: [],
  addCats: () => {},
  addFavCat: () => {},
  removeFavCat: () => {},
};

const CatsContext = React.createContext(initialCatsState);

export default CatsContext;
