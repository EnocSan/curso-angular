import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Caracter } from '../interfaces/caracter.interface';



@Injectable({providedIn: 'root'})
export class DbzService {

  public caracters: Caracter[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  agregarCaracter(caracter: Caracter):void {
    // console.log('MainPage');
    // console.log(caracter);
    //* Para agregar un objeto(caracter), se usa la sighiente estructura:
    const newCaracter: Caracter = {id: uuid(),...caracter };
    //* Técnicamente lo correcto es lo siguiente: = { ...caracter, id: uuid() }; pero debido a que el data no tiene id, en este caso se le coloca al principio.

    this.caracters.push(caracter);

  }

  // onDeleteIn(index: number):void{
  //   this.caracters.splice(index,1);
  //   //**Al colocar uno despues de la coma, estamos refiriendo a que solo 1 elemento será eliminado, dependiendo del indice solicitado. */
  // }
  deleteCaracterById(id: string){
    this.caracters = this.caracters.filter( caracter => caracter.id != id );
  }
}
