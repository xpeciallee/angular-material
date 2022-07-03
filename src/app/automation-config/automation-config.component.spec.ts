import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationConfigComponent } from './automation-config.component';

describe('AutomationConfigComponent', () => {
  let component: AutomationConfigComponent;
  let fixture: ComponentFixture<AutomationConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomationConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
