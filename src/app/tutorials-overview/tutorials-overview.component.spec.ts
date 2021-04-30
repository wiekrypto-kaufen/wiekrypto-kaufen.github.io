import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsOverviewComponent } from './tutorials-overview.component';

describe('TutorialsOverviewComponent', () => {
  let component: TutorialsOverviewComponent;
  let fixture: ComponentFixture<TutorialsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
