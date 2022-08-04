import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeProfilesRoutingModule } from './resume-profiles-routing.module';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    MainProfileComponent,
    SuggestionComponent,
    TestComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ResumeProfilesRoutingModule
  ],
  exports: [
    MainProfileComponent,
    SuggestionComponent
  ]
})
export class ResumeProfilesModule { }
