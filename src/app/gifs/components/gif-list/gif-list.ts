import { Component, input } from '@angular/core';
import { GifItem } from "../../interfaces/gif.interface";
import { GifListItem } from "./gif-list-item/gif-list-item";
@Component({
  selector: 'app-gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css'
})
export class GifList {
  gifList = input.required<GifItem[]>();
}
