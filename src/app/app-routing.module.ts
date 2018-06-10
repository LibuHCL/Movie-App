import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { FeatureinfoComponent } from './components/featureinfo/featureinfo.component';
import { HomeComponent } from './components/home/home.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'feature', component: FeatureinfoComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);