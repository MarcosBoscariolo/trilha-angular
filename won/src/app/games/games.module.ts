import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
