import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaraudingLooterComponent } from './marauding-looter.component';

describe('MaraudingLooterComponent', () => {
  let component: MaraudingLooterComponent;
  let fixture: ComponentFixture<MaraudingLooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaraudingLooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaraudingLooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
