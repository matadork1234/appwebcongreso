import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent
  ]
})
export class SharedModule { }
