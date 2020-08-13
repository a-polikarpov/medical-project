import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndependentMonitoringSystemComponent } from './components/independent-monitoring-system/independent-monitoring-system.component';
import { SystemsBlockComponent } from './components/systems-block/systems-block.component';

@NgModule({
  declarations: [
    AppComponent,
    IndependentMonitoringSystemComponent,
    SystemsBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
