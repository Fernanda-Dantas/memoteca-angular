import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamentoComponent } from './listar-pensamento.component';

describe('ListarPensmentoComponent', () => {
  let component: ListarPensamentoComponent;
  let fixture: ComponentFixture<ListarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPensamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
