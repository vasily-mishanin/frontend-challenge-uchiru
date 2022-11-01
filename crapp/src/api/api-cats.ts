import type { ICatImage } from '../model/types';

const baseURL = 'https://api.thecatapi.com/v1/images/search';
const CATS_LIMIT = 15;

export async function getAllCats() {
  const res = await fetch(`${baseURL}?limit=${CATS_LIMIT}`);
  const data: ICatImage = await res.json();
  return data;
}
