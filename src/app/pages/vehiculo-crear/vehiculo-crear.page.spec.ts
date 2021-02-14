import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculoCrearPage } from './vehiculo-crear.page';

describe('VehiculoCrearPage', () => {
  let component: VehiculoCrearPage;
  let fixture: ComponentFixture<VehiculoCrearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoCrearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
