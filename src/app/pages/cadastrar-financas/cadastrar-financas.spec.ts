import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFinancas } from './cadastrar-financas';

describe('CadastrarFinancas', () => {
  let component: CadastrarFinancas;
  let fixture: ComponentFixture<CadastrarFinancas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarFinancas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFinancas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
