import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesBandComponent } from './exchanges-band.component';

describe('ExchangesBandComponent', () => {
  let component: ExchangesBandComponent;
  let fixture: ComponentFixture<ExchangesBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangesBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
