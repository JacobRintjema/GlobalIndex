import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalIndexSidenavComponent } from './global-index-sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    GlobalIndexSidenavComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [GlobalIndexSidenavComponent]
})
export class GlobalIndexSidenavModule { }
