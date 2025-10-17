import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../../../services/gif-service';
interface MenuOption {
  title: string;
  subLabel?: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-sidemenu-options',
  imports: [RouterLink,NgClass,RouterLinkActive],
  templateUrl: './sidemenu-options.html',
  styleUrl: './sidemenu-options.css'
})
export class SidemenuOptions {

  gifService = inject(GifService);
  options = signal<MenuOption[]>([
    {
      title: 'Trending',
      icon: 'fas fa-fire',
      route: '/dashboard/trending',
      subLabel: 'Gifs Populares'
    },
    {
      title: 'Search',
      icon: 'fas fa-search',
      route: '/dashboard/search',
      subLabel: 'Buscar Gifs'
    }
  ])
}
