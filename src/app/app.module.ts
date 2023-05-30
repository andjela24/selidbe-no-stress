import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AdditionalServicesComponent,
    ServicesComponent,
    FooterComponent,
    FormComponent,
    GalleryComponent,
    HomeComponent,
    PricesComponent,
    UserReviewsComponent,
    VehiclesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
