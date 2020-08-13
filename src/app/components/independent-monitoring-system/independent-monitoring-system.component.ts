import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from "../../types";

@Component({
  selector: 'app-independent-monitoring-system',
  templateUrl: './independent-monitoring-system.component.html',
  styleUrls: ['./independent-monitoring-system.component.scss']
})
export class IndependentMonitoringSystemComponent {

  @Input() indicator: Indicator;

  get indicatorValue() {
    return this.indicator.interval > this.indicator.criticalDelay ? 'N/A' : this.indicator.value;
  }

}
