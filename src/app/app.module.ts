import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BtcComponent } from './btc/btc.component';
import { GypsyComponent } from './gypsy/gypsy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    WorksComponent,
    AboutComponent,
    ContactComponent,
    BtcComponent,
    GypsyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }