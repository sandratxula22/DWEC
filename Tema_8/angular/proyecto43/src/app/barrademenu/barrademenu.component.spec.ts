import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrademenuComponent } from './barrademenu.component';

describe('BarrademenuComponent', () => {
  let component: BarrademenuComponent;
  let fixture: ComponentFixture<BarrademenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrademenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrademenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
