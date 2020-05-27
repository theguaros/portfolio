import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
  { 
    path: 'home', component: HomeComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'education', component: EducationComponent
  },
  {
    path: 'aboutme', component: AboutmeComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'partners', component: PartnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
