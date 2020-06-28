import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectedComponent } from './data-collected.component';

describe('DataCollectedComponent', () => {
  let component: DataCollectedComponent;
  let fixture: ComponentFixture<DataCollectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCollectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCollectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
