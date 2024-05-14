import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public caracterList: Caracter[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public deleteId: EventEmitter<string> = new EventEmitter();
  // public onDelete: EventEmitter<number> = new EventEmitter();

  //?Funcion para eliminar elemento de un arreglo con el índice (si fuese algun arreglo con ID, en lugar de index sería Id).
  deleteCaracterById(id?: string): void {
    if (!id) return;
    this.deleteId.emit(id);
  }
  // onDeleteIn(index: number): void {
  //   this.onDelete.emit(index);
  // }

  // onDeleteCaracter(index: number):void {
  //   console.log(index);

  // }
}
