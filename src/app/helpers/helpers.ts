import { Subject } from "rxjs";
import { CRITICAL_DELAY } from '../project-configs'

export function randomNumber(min: number, max: number, float?: number): number {
  let randomDigit = min - 0.5 + Math.random() * (max - min + 1);
  return parseFloat(randomDigit.toFixed(float ? float : 0));
}

export function triggerEmit(
  stream$: Subject<any>,
  name: string,
  minStreamValue: number,
  maxStreamValue: number,
  float?: number
) {
  const INTERVAL_STEP = 100;
  const MAX_INTERVAL = 2000;
  let currentInterval = INTERVAL_STEP;

  const activeInterval = setInterval(() => {

    const isProbability = randomNumber(1, 10) < 2;
    const isMaxIntervalAchieved = currentInterval === MAX_INTERVAL;
    if (isProbability || isMaxIntervalAchieved) {
      stream$.next({
        name,
        interval: currentInterval,
        criticalDelay: CRITICAL_DELAY,
        value: randomNumber(minStreamValue, maxStreamValue, float ? float : null)
      }
    );
      clearInterval(activeInterval);
      triggerEmit(stream$, name, minStreamValue, maxStreamValue, float ? float : null);
    } else {
      currentInterval += INTERVAL_STEP;
    }
  }, INTERVAL_STEP);
}
