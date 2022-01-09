import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonolithComponent } from './01-the-monolith/monolith/monolith.component';
import { HeaderComponent } from './07-final-app/components/header/header.component';
import { MainComponent } from './02-single-responsibility/components/main/main.component';
import { FooterComponent } from './07-final-app/components/footer/footer.component';
import { OriginalContentComponent } from './07-final-app/components/content/original-content/original-content.component';
import { SquareContentComponent } from './07-final-app/components/content/square-content/square-content.component';
import { SectionContentComponent } from './07-final-app/components/section-content/section-content.component';

/** 
 * Components by Phases 
 */
import { SingleResponsibilityComponent } from './02-single-responsibility/single-responsibility/single-responsibility.component';
import { OpenClosedComponent } from './03-open-closed/open-closed/open-closed.component';
import { LiskovSubstitutionComponent } from './04-liskov-substitution/liskov-substitution/liskov-substitution.component';
import { InterfaceSegregationComponent } from './05-interface-segregation/interface-segregation/interface-segregation.component';
import { DependencyInversionComponent } from './06-dependency-inversion/dependency-inversion/dependency-inversion.component';
import { FinalAppComponent } from './07-final-app/components/final-app/final-app.component';
/** */

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
    LiskovSubstitutionComponent,
    InterfaceSegregationComponent,
    DependencyInversionComponent,
    FinalAppComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
