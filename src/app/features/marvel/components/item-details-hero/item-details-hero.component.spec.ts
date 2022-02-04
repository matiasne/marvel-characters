import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemDetailsHeroComponent } from './item-details-hero.component';

describe('ItemDetailsHeroComponent', () => {
  let component: ItemDetailsHeroComponent;
  let fixture: ComponentFixture<ItemDetailsHeroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsHeroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDetailsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
