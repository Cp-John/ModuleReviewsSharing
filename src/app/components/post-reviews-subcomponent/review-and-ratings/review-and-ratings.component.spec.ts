import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndRatingsComponent } from './review-and-ratings.component';

describe('ReviewAndRatingsComponent', () => {
  let component: ReviewAndRatingsComponent;
  let fixture: ComponentFixture<ReviewAndRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAndRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAndRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
