import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMProductFormComponent } from './pmproduct-form.component';

describe('PMProductFormComponent', () => {
  let component: PMProductFormComponent;
  let fixture: ComponentFixture<PMProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
