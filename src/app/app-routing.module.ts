import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { WorksComponent } from './works/works.component';
import { BtcComponent } from './btc/btc.component';
import { GypsyComponent } from './gypsy/gypsy.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'btc', component: BtcComponent },
  { path: 'gypsy', component: GypsyComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' } // Adjust as needed for your home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }