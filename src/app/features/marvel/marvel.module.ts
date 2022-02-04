import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { ListItemHeroComponent } from './components/list-item-hero/list-item-hero.component';
import { ItemDetailsHeroComponent } from './components/item-details-hero/item-details-hero.component';



@NgModule({
  declarations: [
    ListHeroesComponent,
    ListItemHeroComponent,
    ItemDetailsHeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListHeroesComponent,
    ListItemHeroComponent,
    ItemDetailsHeroComponent
  ]
})
export class MarvelModule { }
