import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';
import { BannerComponent } from '../banner/banner.component';
import { ProductosComponent } from '../productos/productos.component';
import { MasVendidosComponent } from '../mas-vendidos/mas-vendidos.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { RegistrarseComponent } from '../registrarse/registrarse.component';
const rutas: Routes = [
  { path: 'Banner', component: BannerComponent},
  { path: 'Footer', component: FooterComponent},
  { path: 'Header', component: HeaderComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'mas-vendidos', component: MasVendidosComponent},
  { path: 'Productos', component: ProductosComponent},
  { path: 'Slider', component: SliderComponent},
  { path: 'Registrarse', component: RegistrarseComponent},
  { path: 'Home',   redirectTo: 'AppComponent', pathMatch: 'full' },
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing: true } 
    )
  ],
  declarations: [],
  exports :[
    RouterModule
  ],
})
export class RutasModule {
 
 }







