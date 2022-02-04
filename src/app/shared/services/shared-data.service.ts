import { Injectable } from '@angular/core';
import { Hero } from 'src/app/features/marvel/models/hero';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private hero: Hero;
  
  constructor() { 
    this.hero = new Hero();
  }

  setHero(hero: Hero){
    this.hero = hero;
  }

  getHero(): Hero{
    return this.hero;
  }
}
