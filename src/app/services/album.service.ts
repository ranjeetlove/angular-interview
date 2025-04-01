import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  ApiPath:string = 'https://jsonplaceholder.typicode.com/';
  textname:string='';
  constructor(private httpClient: HttpClient) { }
  
  clickCardDetails(data:string){
    this.textname = data;
    console.log(this.textname, 'console value from service');
  }

  getClickCardData(){
    return this.textname;
  }

  getAllAlbum(){
    return this.httpClient.get(this.ApiPath+'posts');
  }

}
