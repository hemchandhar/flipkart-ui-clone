import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MaterialModule } from 'src/app/theme/material.module';
import { SecNavComponent } from './components/sec-nav/sec-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, MainNavComponent, SecNavComponent],
  imports: [CommonModule, HomePageRoutingModule, MaterialModule,SharedModule],
})
export class HomePageModule {}
