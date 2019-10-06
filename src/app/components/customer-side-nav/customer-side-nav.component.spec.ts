import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSideNavComponent } from './customer-side-nav.component';

describe('CustomerSideNavComponent', () => {
  let component: CustomerSideNavComponent;
  let fixture: ComponentFixture<CustomerSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
