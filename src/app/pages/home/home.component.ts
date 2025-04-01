import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from 'stream';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @Output() clickStatusEvent: EventEmitter<string> = new EventEmitter();
  constructor(private albumService : AlbumService) { }

  onclicktext: string = '1st'

  ngOnInit(): void { }

  cardClick(data:string) {
    this.clickStatusEvent.emit(data);
  }

  nextCardClick(data:string){
    this.albumService.clickCardDetails(data);
  }
}
