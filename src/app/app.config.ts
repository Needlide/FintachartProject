import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCharts } from 'ng2-charts';
import {
  BarController,
  CategoryScale,
  Colors,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from 'chart.js';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideCharts({
      registerables: [
        BarController,
        Legend,
        Colors,
        CategoryScale,
        LinearScale,
        LineController,
        PointElement,
        LineElement,
      ],
    }),
  ],
};
