export type Indicator = {
  interval: number,
  name: string,
  criticalDelay: number
  value: number
}

export enum System {
  Temperature = 'Temperature',
  AirPressure = 'Air Pressure',
  Humidity = 'Humidity'
}
