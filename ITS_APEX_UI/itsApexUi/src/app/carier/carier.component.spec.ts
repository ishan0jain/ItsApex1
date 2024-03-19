import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarierComponent } from './carier.component';

describe('CarierComponent', () => {
  let component: CarierComponent;
  let fixture: ComponentFixture<CarierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
