import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { TestValidComponent } from './components/test-valid/test-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    TestValidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
