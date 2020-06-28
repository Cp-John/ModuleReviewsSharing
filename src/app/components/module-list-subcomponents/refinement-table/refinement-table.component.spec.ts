import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinementTableComponent } from './refinement-table.component';

describe('RefinementTableComponent', () => {
  let component: RefinementTableComponent;
  let fixture: ComponentFixture<RefinementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
