import { Component, inject, OnInit } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifService } from '../../../services/gif-service';
@Component({
  selector: 'app-trending-page-component',
  imports: [GifList],
  templateUrl: './trending-page-component.html',
  styleUrl: './trending-page-component.css'
})
export default class TrendingPageComponent implements OnInit  {
  gifService = inject(GifService);

  ngOnInit(): void {
    this.gifService.loadTrendingGifs();
  }
}
