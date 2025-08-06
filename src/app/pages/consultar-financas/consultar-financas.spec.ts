import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFinancas } from './consultar-financas';

describe('ConsultarFinancas', () => {
  let component: ConsultarFinancas;
  let fixture: ComponentFixture<ConsultarFinancas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarFinancas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarFinancas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
