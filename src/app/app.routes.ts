import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-component/dashboard-component').then(c => c.default),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page-component/trending-page-component').then(c => c.default)
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page-component/search-page-component').then(c => c.default)
      },
      {
        path: 'gif-history/:term',
        loadComponent: () => import('./gifs/pages/gif-history/gif-history').then(c => c.default)
      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'dashboard'
  }
];
