import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AdminModule } from './admin/admin.module'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';

const config = {
  apiKey: "AIzaSyDkbCu3aGHHtVYCU-xjuPDqRicU9sYVVi0",
  authDomain: "gym1000-b0dd5.firebaseapp.com",
  databaseURL: "https://gym1000-b0dd5.firebaseio.com",
  projectId: "gym1000-b0dd5",
  storageBucket: "gym1000-b0dd5.appspot.com",
  messagingSenderId: "151264245776",
  appId: "1:151264245776:web:f106e62619155fc35ab295",
  measurementId: "G-L0634DMW02"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
