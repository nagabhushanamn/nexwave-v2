import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMProductViewComponent } from './pmproduct-view.component';

describe('PMProductViewComponent', () => {
  let component: PMProductViewComponent;
  let fixture: ComponentFixture<PMProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMProductViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
