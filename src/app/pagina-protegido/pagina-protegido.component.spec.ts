import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProtegidoComponent } from './pagina-protegido.component';

describe('PaginaProtegidoComponent', () => {
  let component: PaginaProtegidoComponent;
  let fixture: ComponentFixture<PaginaProtegidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaProtegidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaProtegidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
