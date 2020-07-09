import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewModuleInfoComponent } from './review-module-info.component';

describe('ReviewModuleInfoComponent', () => {
  let component: ReviewModuleInfoComponent;
  let fixture: ComponentFixture<ReviewModuleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewModuleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewModuleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
