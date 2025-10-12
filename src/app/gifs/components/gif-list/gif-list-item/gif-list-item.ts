import { Component, input } from '@angular/core';
import { GifItem } from "../../../interfaces/gif.interface";
@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styleUrl: './gif-list-item.css'
})
export class GifListItem {
  gif = input.required<GifItem>();
}
