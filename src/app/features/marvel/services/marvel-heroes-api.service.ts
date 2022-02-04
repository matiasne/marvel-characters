import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroesApiService {

  constructor(private httpClient: HttpClient) { }

  listFirstTweenty(){
    return this.httpClient.get<Hero[]>(environment.marvelURL+'?apikey='+environment.apiKey).pipe(map((res:any) => {
      return res.data.results;
   }))
  }
}
