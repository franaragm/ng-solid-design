import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonolithComponent } from './01-the-monolith/monolith/monolith.component';
import { HeaderComponent } from './02-single-responsibility/components/header/header.component';
import { MainComponent } from './02-single-responsibility/components/main/main.component';
import { FooterComponent } from './02-single-responsibility/components/footer/footer.component';
import { SingleResponsibilityComponent } from './02-single-responsibility/single-responsibility/single-responsibility.component';

@NgModule({
  declarations: [
    AppComponent,
    MonolithComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SingleResponsibilityComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
