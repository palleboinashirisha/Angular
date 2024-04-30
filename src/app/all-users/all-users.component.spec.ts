import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUSersComponent } from './all-users.component';

describe('AllUSersComponent', () => {
  let component: AllUSersComponent;
  let fixture: ComponentFixture<AllUSersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUSersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUSersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
