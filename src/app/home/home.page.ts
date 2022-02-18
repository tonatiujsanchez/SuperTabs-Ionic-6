import { Component, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';

import { SuperTabs } from '@ionic-super-tabs/angular';
import { MenuOption } from '../interfaces/menu.interface';
import { MenuService } from '../services/menu.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('superTabs', { read: SuperTabs }) st: SuperTabs;

  body = document.querySelector('body');

  categories: MenuOption[] = [

  ];

  categoryActive = null;

  articles: any[] = [];
  
  loading: boolean = false;

  darkMode: boolean = false;

  constructor( 
    private newsSvc: NewsService,
    private menuSvc: MenuService
    ) {}
  
  ngOnInit(): void {

    this.menuSvc.getMenuOptions().subscribe(
      ( options ) => {
        this.categories = options
        this.categoryActive = this.categories[0].value;
        this.getNews();

      }
    );



    console.log( this.categoryActive );
    // this.getNews();
    
    this.menuSvc.menuOption.subscribe(
      resp => {
        console.log( resp );
        
        this.navigateToCategory( resp );
      }
    );
    
  }

  onClick( evento ){

    if( this.categoryActive === this.categories[evento.detail.index].value ){
      return;
    }

    this.categoryActive = this.categories[evento.detail.index].value;

    this.getNews();

  }


  getNews(){

    this.loading = true;
    this.articles = [];

    console.log( this.categoryActive );

    this.newsSvc.getNewsByCategory( this.categoryActive )
    .subscribe(
      ( resp:any )=>{ 
        this.articles = resp
        this.loading = false;
      },
      ( error ) => { 
        console.log(' Hubo un error', error)
        this.loading = false;
      }
    );
    
  }

  toggleTheme(){
    this.darkMode = !this.darkMode;
    this.body.classList.toggle('dark');
  }


  goToMundo(){
    const idxTab = this.categories.findIndex( tab => tab.label === 'mundo' );
    console.log( idxTab );
    
    this.st.selectTab( idxTab );
  }

  navigateToCategory( idCategory: number ){
    this.st.selectTab( idCategory );
  }



}
