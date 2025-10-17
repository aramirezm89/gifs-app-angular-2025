import { Component, inject, OnInit, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../../services/gif-service';
import { GifItem } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page-component',
  imports: [GifList],
  templateUrl: './search-page-component.html',
  styleUrl: './search-page-component.css',
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifSearchList = signal<GifItem[]>([]);
  firstSearch = signal(true);
  onSearch(searchTerm: string) {
    this.gifService.searchGifs(searchTerm.trim()).subscribe({
      next: (response) => {
       this.gifSearchList.set(response)
       this.firstSearch.set(false);
      },
      error: (error) => {
        console.error('Error al buscar gifs:', error);
      }
    });
  }
}
