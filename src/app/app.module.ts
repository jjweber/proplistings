import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAQkXwZBaoWOPPBtenQOx_ijqqLF3zGT4U',
  authDomain: 'proplistings-905aa.firebaseapp.com',
  databaseURL: 'https://proplistings-905aa.firebaseio.com',
  projectId: 'proplistings-905aa',
  storageBucket: 'proplistings-905aa.appspot.com',
  messagingSenderId: '205491246289>'
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'add-listing', component: AddListingComponent},
  {path: 'edit-listing/:id', component: EditListingComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FirebaseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
