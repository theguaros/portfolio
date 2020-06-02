import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PartnersComponent } from './partners/partners.component';
import { ModalColossusComponent } from './portfolio/modal-colossus/modal-colossus.component';
import { ModalSafeRidePassengerComponent } from './portfolio/modal-safe-ride-passenger/modal-safe-ride-passenger.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //Agregamos para usar los modales
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    EducationComponent,
    AboutmeComponent,
    PortfolioComponent,
    PartnersComponent,
    ModalColossusComponent,
    ModalSafeRidePassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, //Agregamos para usar los modales
    FormsModule,
    ChartsModule //Agregamos para usar los chart
  ],
  //Agregamos entryComponents para llamar a los componentes de los modales
  entryComponents:[
    ModalColossusComponent,
    ModalSafeRidePassengerComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
