import { inject, Injectable, signal } from '@angular/core';
import { GifItem } from '../gifs/interfaces/gif.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GiphyResponse } from '../gifs/interfaces/giphy-api.interface';
import { giphyMapper } from '../gifs/mapper/giphy.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  trendingGifLoading = signal(true);
  gifTrendingList = signal<GifItem[]>([]);

  private readonly http = inject(HttpClient);

  constructor() {
    this.loadTrendingGifs();
  }
  loadTrendingGifs() {
    const params = new HttpParams()
      .set('api_key', environment.giphyApiKey)
      .set('limit', 25)
      .set('rating', 'g');

    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: params,
      })
      .subscribe({
        next: (response) => {
          this.gifTrendingList.set(response.data.map((gif) => giphyMapper(gif)));
          this.trendingGifLoading.set(false);
        },
        error: (error) => {
          console.error('Error al cargar los gifs:', error);
          this.trendingGifLoading.set(false);
        },
      });
  }
}
