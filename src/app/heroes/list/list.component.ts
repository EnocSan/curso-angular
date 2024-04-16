import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public nombreHeroes:string[] = ['Superman', 'Batman', 'Wonder Woman','Aquaman'];
  public borrarHeroe?:string; // ó public borrarHeroe?:string = '';

  eliminarUltimoHeroe():void {
  this.borrarHeroe = this.nombreHeroes.pop();
  }
}
