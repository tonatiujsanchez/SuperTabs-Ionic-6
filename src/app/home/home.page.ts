import { Component, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';

import { SuperTabs } from '@ionic-super-tabs/angular';


interface Category{
  value: string,
  label: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('superTabs', { read: SuperTabs }) st: SuperTabs;

  body = document.querySelector('body');

  categories: Category[] = [
    {
      value: 'destacados',
      label: 'inicio'
    },
    {
      value: 'politica',
      label: 'tlapa'
    },
    {
      value: 'columna',
      label: 'editorial'
    },
    {
      value: 'montana',
      label: 'montaña'
    },
    {
      value: 'guerrero',
      label: 'guerrero'
    },
    {
      value: 'mexico',
      label: 'méxico'
    },
    {
      value: 'internacional',
      label: 'mundo'
    },
    {
      value: 'politica',
      label: 'política'
    },
    {
      value: 'interesante',
      label: 'cultura'
    },
  ];

  categoryActive = this.categories[0].value;

  articles: any[] = [];
  
  loading: boolean = false;

  darkMode: boolean = false;

  constructor( 
    private newsSvc: NewsService,
    ) {}
  
  ngOnInit(): void {

    console.log( this.categoryActive );
    this.getNews();    
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


}
