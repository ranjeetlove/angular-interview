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
  allPost:any
  onclicktext: string = '1st'

  ngOnInit(): void { 
    this.albumService.getAllAlbum().subscribe((response: any) => {
      this.allPost = response;
     });
  }

  // cardClick(data:string) {   passing data from chiled to parent component 
  //   this.clickStatusEvent.emit(data);
  // }

  nextCardClick(data:string){
    this.albumService.clickCardDetails(data);
  }
}
