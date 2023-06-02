import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { OurMembersComponent } from './our-members/our-members.component';
import { WahetRamqComponent } from './wahet-ramq/wahet-ramq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {
//   MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule
// } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CurriculumComponent,
    VisionComponent,
    MissionComponent,
    OurMembersComponent,
    WahetRamqComponent,
    ContactUsComponent,
    JoinUsComponent,
    HomePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,NgbCarouselModule, NgIf
    // MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
