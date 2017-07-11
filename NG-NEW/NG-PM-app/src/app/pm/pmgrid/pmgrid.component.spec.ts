import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMGridComponent } from './pmgrid.component';

describe('PMGridComponent', () => {
  let component: PMGridComponent;
  let fixture: ComponentFixture<PMGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
