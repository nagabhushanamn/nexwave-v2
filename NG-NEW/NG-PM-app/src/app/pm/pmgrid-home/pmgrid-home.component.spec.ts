import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMGridHomeComponent } from './pmgrid-home.component';

describe('PMGridHomeComponent', () => {
  let component: PMGridHomeComponent;
  let fixture: ComponentFixture<PMGridHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMGridHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMGridHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
