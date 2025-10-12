import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
