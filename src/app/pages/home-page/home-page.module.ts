import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from 'src/app/theme/material.module';

@NgModule({
  declarations: [HomeComponent, MainNavComponent],
  imports: [CommonModule, HomePageRoutingModule, MaterialModule],
})
export class HomePageModule {}
