import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MaterialModule } from '../theme/material.module';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DropdownComponent],
})
export class SharedModule {}
