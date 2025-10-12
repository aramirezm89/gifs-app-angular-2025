import { Injectable, signal } from '@angular/core';
import { GifItem } from '../gifs/interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
   gifTrendingList = signal<GifItem[]>([
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
  { imgUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" }
  ]);
}
