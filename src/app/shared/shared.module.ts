import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelloComponent} from './hello/hello.component';
import { TableComponent } from './table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  exports: [HelloComponent, TableComponent ],
  declarations: [HelloComponent, TableComponent]
})
export class SharedModule { }
