import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndependentMonitoringSystemComponent } from './independent-monitoring-system.component';
import { Indicator } from "../../types";
import { DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';
import { CRITICAL_DELAY } from "../../project-configs";

describe('IndependentMonitoringSystemComponent', () => {
  let component: IndependentMonitoringSystemComponent;
  let fixture: ComponentFixture<IndependentMonitoringSystemComponent>;
  let dom: DebugElement;
  const resultLessThousand = {
    interval: 550,
    name: 'Interval name',
    criticalDelay: CRITICAL_DELAY,
    value: 100
  } as Indicator;
  const resultMoreThousand = {
    interval: 1050,
    name: 'Interval name',
    criticalDelay: 1000,
    value: 100
  } as Indicator;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependentMonitoringSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentMonitoringSystemComponent);
    component = fixture.componentInstance;
    dom = fixture.debugElement;
    component.indicator = resultLessThousand;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render data from stream', () => {
    const title = dom.query(By.css('.indicator-title'));
    const value = dom.query(By.css('.indicator-value'));
    expect(title.nativeElement.textContent).toBe(component.indicator.name);
    expect(value.nativeElement.textContent).toBe(component.indicator.value.toString());
  })

  it('should render critical delay symbol instead value', () => {
    component.indicator = resultMoreThousand;
    fixture.detectChanges();
    const value = dom.query(By.css('.indicator-value'));
    expect(value.nativeElement.textContent).toBe('N/A')
  })
});
