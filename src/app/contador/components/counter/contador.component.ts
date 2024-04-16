import { Component } from '@angular/core';


@Component({
  selector:'app-contador',
  template: `

  <h3>Contador: {{ contador }}</h3>

  <button (click)= "incremento(+1)">+1</button>
  <button (click)= "reiniciarContador()">RESET</button>
  <button (click)="incremento(-1)">-1</button>



  `,
})
export class ContadorComponent{
  public contador: number = 10;

  incremento(value: number): void {
    //this.contador = this.contador += 1;
    this.contador += value;
  }

  reiniciarContador(value: number = 10):void {
    this.contador = value;
  }
}
