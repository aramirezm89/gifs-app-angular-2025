import { GyphyItem } from '../interfaces/giphy-api.interface';
import { GifItem } from '../interfaces/gif.interface';

export const giphyMapper = (gif: GyphyItem): GifItem => {
  return {
    id: gif.id,
    title: gif.title,
    imgUrl: gif.images.original.url,
  };
};
