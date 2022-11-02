import type { ICatImage } from '../model/types';

const baseURL = 'https://api.thecatapi.com/v1/images/search';
const CATS_LIMIT = 7;

export async function fetchCats() {
  try {
    const res = await fetch(`${baseURL}?limit=${CATS_LIMIT}`);
    const data: ICatImage[] = await res.json();
    return data;
  } catch (err) {
    console.error('fetchCats', err);
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    return [];
  }
}
