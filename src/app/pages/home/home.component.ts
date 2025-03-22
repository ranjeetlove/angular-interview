import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
@Input() title!: string; // '!' means it will be initalise by the angular

}
