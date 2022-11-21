import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { GallerySectionComponent } from './sections/gallery-section/gallery-section.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeroSectionComponent,
    GallerySectionComponent,
    ContactUsComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
