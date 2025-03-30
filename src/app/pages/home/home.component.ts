import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users = [
    {id:1, name:'sunil'},
    {id:2, name:'Ranjet'}
  ];
@Input() title!: string; // '!' means it will be initalise by the angular
changeTitle:boolean=false;

}
