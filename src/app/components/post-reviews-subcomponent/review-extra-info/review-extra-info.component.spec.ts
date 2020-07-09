import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewExtraInfoComponent } from './review-extra-info.component';

describe('ReviewExtraInfoComponent', () => {
  let component: ReviewExtraInfoComponent;
  let fixture: ComponentFixture<ReviewExtraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewExtraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
