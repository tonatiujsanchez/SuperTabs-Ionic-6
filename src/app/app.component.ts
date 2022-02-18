import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuService } from './services/menu.service';
import { MenuOption } from './interfaces/menu.interface';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  options: MenuOption[] = [];

  constructor(
    private menu: MenuController,
    private menuSvc: MenuService
  ) {}

  ngOnInit(): void {
    
    this.menuSvc.getMenuOptions().subscribe(
      ( options ) => this.options = options
    );


  }
  menuClosed(){
    this.menu.close('first');
  }

  navigateToCategoria( idxCategory ){
    this.menuClosed();
    this.menuSvc.navigateToCategory( idxCategory );
    
  }


}
