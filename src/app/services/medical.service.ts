import { Injectable } from '@angular/core';
import { triggerEmit } from '../helpers/helpers';
import { Subject, combineLatest, Observable} from "rxjs";
import { Indicator, System } from '../types';
import {
  TEMPERATURE_MIN_VALUE,
  TEMPERATURE_MAX_VALUE,
  AIR_PRESSURE_MIN_VALUE,
  AIR_PRESSURE_MAX_VALUE,
  HUMIDITY_MIN_VALUE,
  HUMIDITY_MAX_VALUE
} from '../project-configs';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  temperature$: Subject<Indicator> = new Subject<Indicator>();
  airPressure$: Subject<Indicator> = new Subject<Indicator>();
  humidity$: Subject<Indicator> = new Subject<Indicator>();

  medicalDataStream$: Observable<Indicator[]> = combineLatest([
    this.temperature$,
    this.airPressure$,
    this.humidity$
  ]);

  startObserveData(): void {
    triggerEmit(this.temperature$, System.Temperature, TEMPERATURE_MIN_VALUE, TEMPERATURE_MAX_VALUE, 1);
    triggerEmit(this.airPressure$, System.AirPressure, AIR_PRESSURE_MIN_VALUE, AIR_PRESSURE_MAX_VALUE);
    triggerEmit(this.humidity$, System.Humidity, HUMIDITY_MIN_VALUE, HUMIDITY_MAX_VALUE);
  }

  constructor() {}
}

