import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from 'stream';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @Output() clickStatusEvent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  onclicktext: string = '1st'

  ngOnInit(): void { }

  cardClick(data:string) {
    console.log(data,'ranjeet');
    this.clickStatusEvent.emit(data);
  }
}
