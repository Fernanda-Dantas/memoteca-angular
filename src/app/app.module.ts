import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }