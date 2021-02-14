import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Contacto2Page } from './contacto2.page';

describe('Contacto2Page', () => {
  let component: Contacto2Page;
  let fixture: ComponentFixture<Contacto2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacto2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Contacto2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
