import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GypsyComponent } from './gypsy.component';

describe('GypsyComponent', () => {
  let component: GypsyComponent;
  let fixture: ComponentFixture<GypsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GypsyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GypsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
