import type { ICatImage } from '../model/types';
import React from 'react';

export interface ICatsStore {
  cats: ICatImage[];
  addCats: (cats: ICatImage[]) => void;
  favCatsImages: ICatImage[];
  addCatImg: (catImage: ICatImage) => void;
  removeCatImg: (id: string) => void;
}

const initialCatsState: ICatsStore = {
  cats: [],
  addCats: () => {},
  favCatsImages: [],
  addCatImg: () => {},
  removeCatImg: () => {},
};

const CatsContext = React.createContext(initialCatsState);

export default CatsContext;
