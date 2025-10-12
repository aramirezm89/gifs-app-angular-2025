import { Component } from '@angular/core';
import { SidemenuHeader } from "./sidemenu-header/sidemenu-header";
import { SidemenuOptions } from "./sidemenu-options/sidemenu-options";

@Component({
  selector: 'app-sidemenu',
  imports: [SidemenuHeader, SidemenuOptions],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.css'
})
export class Sidemenu {

}
