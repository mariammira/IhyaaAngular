import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule,} from '@angular/router'

import { CurriculumComponent } from './curriculum/curriculum.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { OurMembersComponent } from './our-members/our-members.component';
import { WahetRamqComponent } from './wahet-ramq/wahet-ramq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes :Routes =[
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'mission', component: MissionComponent},
  {path: 'our-members', component: OurMembersComponent},
  {path: 'wahet-ramq', component: WahetRamqComponent},
  // {path: 'coaches', component: VisionPage},
  // {path: 'students', component: CurriculumPage},
  // {path: 'students-october', component: VisionPage},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'join-us', component: JoinUsComponent},
  {path: '', component: HomePageComponent},
  // { component: NotFoundPageComponent},
  
    // <Route
    //   exact
    //   path="/coaches"
    //   component={() => window.location.assign(FORMS_URLS.COACHES)}
    // />
    // <Route
    //   exact
    //   path="/students"
    //   component={() => window.location.assign(FORMS_URLS.STUDENTS_ORIGINAL)}
    // />
    // <Route
    //   exact
    //   path="/students-october"
    //   component={() => window.location.assign(FORMS_URLS.STUDENTS_OCTOBER)}
    // />
    // <Route component={load('NotFoundPage')} />
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
