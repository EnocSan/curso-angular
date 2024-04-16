import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/counter/contador.component";

@NgModule({
  declarations: [ContadorComponent], //* Para agrupar el componente que abarca solamente el scope o área de modulo en counter
  exports: [ContadorComponent]//* Para exponer al exterior del scope y ser utilizado el componente conntador se usa la línea
})
export class ContadorModule{

}
