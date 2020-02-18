import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { ProductosComponent } from './productos/productos.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {RutasModule} from "./rutas/rutas.module";
import { RegistrarseComponent } from './registrarse/registrarse.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    BannerComponent,
    ProductosComponent,
    MasVendidosComponent,
    FooterComponent,
    LoginComponent,
    RegistrarseComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    RutasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

