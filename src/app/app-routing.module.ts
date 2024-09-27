import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VillageDataComponent } from './layout/shevgaon-village-data/village-data.component';
import { PathardiVillageDataComponent } from './layout/pathardi-village-data/pathardi-village-data.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: '' , redirectTo : 'home', pathMatch: 'full'},
  {path:"home", component: HomeComponent },
  { path:"login", component: LoginComponent },
  { path:"ShevgaonVillageData", component: VillageDataComponent },
  { path:"OtherRouteForAkhatwade", component: VillageDataComponent },
  { path:"AkhegaonComp", component: VillageDataComponent },
  { path:"PathardiVillageData", component: PathardiVillageDataComponent },
  { path:"gallery", component: GalleryComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
