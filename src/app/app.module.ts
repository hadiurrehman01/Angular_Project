import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './includes/header/search/search.component';
import { NavbarComponent } from './includes/header/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './includes/header/header.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { CallactionComponent } from './pages/home/callaction/callaction.component';
import { ContentComponent } from './pages/home/content/content.component';
import { FooterComponent } from './includes/footer/footer.component';
import { DummyComponent } from './dummy/dummy.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    CallactionComponent,
    ContentComponent,
    FooterComponent,
    DummyComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
