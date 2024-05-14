//? 1. Primero se importan lo que es propio de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//? 2. Segundo se importan modulos de terceros
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

//? 3. Por último se importa nuestro propio código
import { AppComponent } from './app.component';


//! Los 3 comentarios son recomendaciones (no son obligatorios), pero por una codificación limpia es necesaria.
//** Para evitar muchas importaciones de componentes, se realizan importaciones de "Módulos" */

@NgModule({
  declarations: [
    AppComponent,
  ],
  //* Los módulos siempre se importan aquí **
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
