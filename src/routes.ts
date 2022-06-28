import { Route } from '@angular/router';
import { ServiceAService } from './app/services/service-a.service';
import { ServiceBService } from './app/services/service-b.service';

export const ROUTES: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./app/components/standalone/standalone.component').then(
        (mod) => mod.StandaloneComponent
      ),
    providers: [ServiceAService],
  },
  {
    path: 'route2',
    loadComponent: () =>
      import('./app/components/standalone2/standalone2.component').then(
        (mod) => mod.Standalone2Component
      ),
    providers: [{ provide: ServiceAService, useExisting: ServiceBService }],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
