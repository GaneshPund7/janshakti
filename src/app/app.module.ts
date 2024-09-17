import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// import {  SidebarModule } from 'ng-cdbangular';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { VillageDataComponent } from './layout/shevgaon-village-data/village-data.component'
import { PathardiVillageDataComponent } from './layout/pathardi-village-data/pathardi-village-data.component'
import { GalleryComponent } from './gallery/gallery.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddVillageDataComponent } from './layout/add-village-data/add-village-data.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VillageDataComponent,
    PathardiVillageDataComponent,
    GalleryComponent,
    AddVillageDataComponent,
    // HttpClient
  ],
  imports: [
     BrowserModule,
     AppRoutingModule, 
     ReactiveFormsModule,
     HttpClientModule,
     FormsModule
    ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
