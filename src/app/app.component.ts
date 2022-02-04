import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private _translate: TranslateService,
    private router: Router
    ) {

    this.getDeviceLanguage();
    this.router.navigate(['home']);
  }

  getDeviceLanguage() {
    if (window.Intl && typeof window.Intl === 'object') {
      this._initTranslate(navigator.language)
    }
    else {
      let nav: any = (navigator as any);

      nav.globalization.getPreferredLanguage(function (language) {  
          this._initTranslate(language.value);
        }, function () { 
            console.log('Error getting language\n'); 
        });
    }
  }

  _initTranslate(language) {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('en');
    if (language) {
      this._translate.use(language.substring(0, 2));
    }
  }
}
