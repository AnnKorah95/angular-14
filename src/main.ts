import { CommonModule } from '@angular/common';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ROUTES } from './routes';
if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(ROUTES),
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatToolbarModule,
      MatIconModule
    ),
  ],
});
