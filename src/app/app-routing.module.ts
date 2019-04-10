import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skill/skill.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent},
  { path: 'skills/:skill', component: SkillComponent},
  { path: 'experience', component: ExperiencesComponent},
  { path: 'experience/:experience', component: ExperienceComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
