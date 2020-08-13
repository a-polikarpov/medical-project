import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { MedicalService } from "../../services/medical.service";

@Component({
  selector: 'app-systems-block',
  templateUrl: './systems-block.component.html',
  styleUrls: ['./systems-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemsBlockComponent implements OnInit {

  medicalDataIndicators$ = this.medicalService.medicalDataStream$;

  constructor(private medicalService: MedicalService) {}

  ngOnInit() {
    this.medicalService.startObserveData();
  }
}
