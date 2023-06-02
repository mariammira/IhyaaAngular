import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WahetRamqComponent } from './wahet-ramq.component';

describe('WahetRamqComponent', () => {
  let component: WahetRamqComponent;
  let fixture: ComponentFixture<WahetRamqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WahetRamqComponent]
    });
    fixture = TestBed.createComponent(WahetRamqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
