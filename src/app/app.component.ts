import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumService } from './services/album.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck {
  constructor(private albumService : AlbumService){}
   menu:any=[
    {
      id:1,
      name:'Home'
    },
    {
      id:1,
      name:'About'
    },
    {
      id:1,
      name:'Contact'
    }
  ]

  receivedData: string = '';

  handleData(data: string) {
    console.log(data, 'app component');
    this.albumService.clickCardDetails(data);
    this.receivedData = data;
  }

 ngDoCheck(): void {
  this.receivedData = this.albumService.getClickCardData();
 }
}
