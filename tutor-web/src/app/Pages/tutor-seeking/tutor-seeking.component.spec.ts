import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSeekingComponent } from './tutor-seeking.component';

describe('TutorSeekingComponent', () => {
  let component: TutorSeekingComponent;
  let fixture: ComponentFixture<TutorSeekingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorSeekingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorSeekingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
