import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranciaComponent } from './francia.component';

describe('FranciaComponent', () => {
  let component: FranciaComponent;
  let fixture: ComponentFixture<FranciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
