import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { FormsModule} from '@angular/forms';
import { ClientesService } from './service/clientes.service';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClientesModule,
    ProdutosModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    TemplateModule,
    FormsModule
    
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
