import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayWayRoutingModule } from './may-way-routing.module';

import { ResumeProfilesModule } from './components/resume-profiles/resume-profiles.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, MayWayRoutingModule, ResumeProfilesModule],
  exports: [ CommonModule],
})
export class MayWayModule {}
