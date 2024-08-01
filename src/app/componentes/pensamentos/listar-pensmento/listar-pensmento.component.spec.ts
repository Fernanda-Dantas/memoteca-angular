import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensmentoComponent } from './listar-pensmento.component';

describe('ListarPensmentoComponent', () => {
  let component: ListarPensmentoComponent;
  let fixture: ComponentFixture<ListarPensmentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPensmentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPensmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
