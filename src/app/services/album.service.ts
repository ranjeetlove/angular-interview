import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  textname:string='';
  constructor() { }
  
  clickCardDetails(data:string){
    this.textname = data;
    console.log(this.textname, 'console value from service');
  }

  getClickCardData(){
    return this.textname;
  }


}
