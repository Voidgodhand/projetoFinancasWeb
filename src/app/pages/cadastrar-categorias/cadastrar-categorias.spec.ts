import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCategorias } from './cadastrar-categorias';

describe('CadastrarCategorias', () => {
  let component: CadastrarCategorias;
  let fixture: ComponentFixture<CadastrarCategorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarCategorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCategorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
