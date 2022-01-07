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
import { OpenClosedComponent } from './03-open-closed/open-closed/open-closed.component';
import { OriginalContentComponent } from './03-open-closed/components/content/original-content/original-content.component';
import { SquareContentComponent } from './03-open-closed/components/content/square-content/square-content.component';
import { SectionContentComponent } from './03-open-closed/components/section-content/section-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MonolithComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SingleResponsibilityComponent,
    OpenClosedComponent,
    OriginalContentComponent,
    SquareContentComponent,
    SectionContentComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
