import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-list-item-hero',
  templateUrl: './list-item-hero.component.html',
  styleUrls: ['./list-item-hero.component.scss'],
})
export class ListItemHeroComponent implements OnInit {

  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit() {}

}
