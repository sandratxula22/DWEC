import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasUsuarioComponent } from './tareas-usuario.component';

describe('TareasUsuarioComponent', () => {
  let component: TareasUsuarioComponent;
  let fixture: ComponentFixture<TareasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
