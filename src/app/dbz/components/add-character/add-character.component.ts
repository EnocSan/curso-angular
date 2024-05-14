import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCaracter: EventEmitter<Caracter> = new EventEmitter(); //*Emite un evento para que el módulo padre pueda escuchar la actualización.

  public caracter: Caracter = {
    name: '',
    power: 0
  }

  emitCaracter():void {
    //console.log(this.caracter);
    if ( this.caracter.name.length < 3 ) return;

    this.onNewCaracter.emit(this.caracter); //? El operador spread ... sirve para asegurar de copiar y embanar (concatenar) el objeto, sin embargo Angular por si solo lo hace.

    // this.caracter.name = '';
    // this.caracter.power = 0;
    this.caracter = { name: '', power: 0 }; //?Código más eficiente que los anteriores comentados, hace la misma funcion que los anteriores.

  }

}
