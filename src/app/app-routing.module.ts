import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'works', component: WorksComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' } // Adjust as needed for your home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }