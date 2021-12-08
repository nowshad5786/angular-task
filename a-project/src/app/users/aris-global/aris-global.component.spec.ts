import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArisGlobalComponent } from './aris-global.component';

describe('ArisGlobalComponent', () => {
  let component: ArisGlobalComponent;
  let fixture: ComponentFixture<ArisGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArisGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArisGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
