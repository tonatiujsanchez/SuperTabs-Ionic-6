import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuOption } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuOption: EventEmitter<number> = new EventEmitter();

  constructor( private http: HttpClient ) { }


  getMenuOptions(){
    return this.http.get<MenuOption[]>('assets/data/menu.json');
  }

  navigateToCategory( idx:number ){
    this.menuOption.emit( idx );
  }

}
