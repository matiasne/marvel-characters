import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Hero } from '../features/marvel/models/hero';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
})
export class HeroDetailPage implements OnInit {

  public hero: Hero;
  public title:string="";

  constructor(
    private shareDateService:SharedDataService,
    private _translate: TranslateService,
    ) {
    
    this._translate.get('DETAILS_TITLE').subscribe((res: string) => {
      this.title = res;
    });
  }
   

  ngOnInit() {
    this.hero = this.shareDateService.getHero();  
  }

}
