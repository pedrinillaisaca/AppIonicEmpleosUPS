import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculosListaPage } from './vehiculos-lista.page';

describe('VehiculosListaPage', () => {
  let component: VehiculosListaPage;
  let fixture: ComponentFixture<VehiculosListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
