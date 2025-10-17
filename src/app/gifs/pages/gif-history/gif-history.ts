import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../../services/gif-service';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-gif-history',
  imports: [GifList],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css',
})
export default class GifHistoryComponent{
  gifService = inject(GifService);
  term = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['term'])));

  gifsByKey = computed(() => this.gifService.gegtHistoryGifs(this.term()));


}
