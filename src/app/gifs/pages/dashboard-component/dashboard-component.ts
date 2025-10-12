import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidemenu } from "../../components/sidemenu/sidemenu";

@Component({
  selector: 'app-dashboard-component',
  imports: [RouterOutlet, Sidemenu],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export default class DashboardPageComponent {



}
