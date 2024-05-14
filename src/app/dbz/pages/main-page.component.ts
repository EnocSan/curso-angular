import { Component, Input } from '@angular/core';
import { Caracter } from '../interfaces/caracter.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl:'main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get caracters(): Caracter[] {
    return this.dbzService.caracters;
  }

  onDeleteCaracter (id: string): void{
    this.dbzService.deleteCaracterById( id );
  }

  nuevoCaracter (caracter: Caracter):void {
    this.dbzService.agregarCaracter( caracter );
  }
}
