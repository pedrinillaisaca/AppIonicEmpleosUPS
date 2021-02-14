import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearUserPage } from './crear-user.page';

describe('CrearUserPage', () => {
  let component: CrearUserPage;
  let fixture: ComponentFixture<CrearUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
