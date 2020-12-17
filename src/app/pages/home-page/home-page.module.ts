import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MaterialModule } from 'src/app/theme/material.module';
import { SecNavComponent } from './components/sec-nav/sec-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DealsComponent } from './components/deals/deals.component';

@NgModule({
  declarations: [HomeComponent, MainNavComponent, SecNavComponent, CarouselComponent, DealsComponent],
  imports: [CommonModule, HomePageRoutingModule, MaterialModule,SharedModule],
})
export class HomePageModule {}
