import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../models/hero';
import { MarvelHeroesApiService } from '../../services/marvel-heroes-api.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent implements OnInit {
 
  public heroes:Hero[] = [];
  
  @Output() selected = new EventEmitter<Hero>();
  
  constructor(private marvelHeroesApiService:MarvelHeroesApiService,) {
    
    this.marvelHeroesApiService.listFirstTweenty().subscribe((data:Hero[])=>{
      this.heroes = data;
    });


  }

  ngOnInit() {}

  onItemClick(hero: Hero) {
    console.log(hero)
    this.selected.emit(hero);
  } 

}
