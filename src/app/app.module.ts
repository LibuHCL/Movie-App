import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSelectModule, MatDivider } from '@angular/material';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import {SearchInfoComponent} from './components/searchinfo/searchinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './components/menu/menu.component';
import { FeatureinfoComponent } from './components/featureinfo/featureinfo.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, HttpModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, BrowserAnimationsModule,MatToolbarModule,MatDividerModule ],
  declarations: [ AppComponent, SearchComponent, SearchInfoComponent, MenuComponent, FeatureinfoComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
