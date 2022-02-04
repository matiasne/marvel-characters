import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-item-details-hero',
  templateUrl: './item-details-hero.component.html',
  styleUrls: ['./item-details-hero.component.scss'],
})
export class ItemDetailsHeroComponent implements OnInit {

  @Input() hero: Hero;
  public labelNumberOfComics:string="";
  public labelNumberOfSeries:string="";
  public labelNumberOfStories:string="";
  public titleOtherInfo:string="";
  constructor(
    private _translate: TranslateService
    ) { 
    

    this._translate.get('NUMBER_OF_COMICS').subscribe((res: string) => {
      this.labelNumberOfComics = res;
    });

    this._translate.get('NUMBER_OF_SERIES').subscribe((res: string) => {
      this.labelNumberOfSeries = res;
    });

    this._translate.get('NUMBER_OF_STORIES').subscribe((res: string) => {
      this.labelNumberOfStories = res;
    });

    this._translate.get('TITLE_OTHER_INFO').subscribe((res: string) => {
      this.titleOtherInfo = res;
    });
  }

  ngOnInit() {
    
  }

}
