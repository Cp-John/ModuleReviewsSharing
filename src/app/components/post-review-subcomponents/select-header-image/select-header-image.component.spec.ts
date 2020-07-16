import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeaderImageComponent } from './select-header-image.component';

describe('SelectHeaderImageComponent', () => {
  let component: SelectHeaderImageComponent;
  let fixture: ComponentFixture<SelectHeaderImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHeaderImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
