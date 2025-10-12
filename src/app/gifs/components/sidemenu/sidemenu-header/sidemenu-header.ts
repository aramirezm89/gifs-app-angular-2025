import { Component, input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-sidemenu-header',
  imports: [],
  templateUrl: './sidemenu-header.html',
  styleUrl: './sidemenu-header.css',
})
export class SidemenuHeader {
     env = environment;
  title = input<string>("Title");
}
