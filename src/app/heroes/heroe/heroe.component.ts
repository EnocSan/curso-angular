import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public nombre: string = 'batman';
  public edad: number = 35;

  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();//*.toUpperCase(), es un método de JS para colocar todo string en Mayúsculas.
  }

  getHeroeDescripcion():string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarHeroe():void{
    this.nombre = 'Superman';
  }

  cambiarEdad():void {
    this.edad = 38;
  }

  resetHeroe():void {
    this.nombre = 'batman';
    this.edad = 35;
  }
}
