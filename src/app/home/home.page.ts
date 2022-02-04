import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public title:string="";

  constructor(
    private _translate: TranslateService,
    private sharedDataService: SharedDataService,
    private router: Router
    ) {   
      this._translate.get('LIST_TITLE').subscribe((res: string) => {
        this.title = res;
      });
    }

    _select(event){
      this.sharedDataService.setHero(event);
      this.router.navigate(['hero-detail'])
    }
}
