import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFinancas } from './editar-financas';

describe('EditarFinancas', () => {
  let component: EditarFinancas;
  let fixture: ComponentFixture<EditarFinancas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarFinancas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFinancas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
