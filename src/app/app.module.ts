import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { VehicleModelComponent } from './model/vehicle-model/vehicle-model.component';
import { ServiceRequestComponent } from './model/service-request/service-request.component';
import { GoogleMapsComponent } from './pages/google-maps/google-maps.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        SignupComponent,
        DashboardComponent,
        HeaderComponent,
        VehicleDetailsComponent,
        VehicleModelComponent,
        ServiceRequestComponent,
        GoogleMapsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatDialogModule,
        MatFormFieldModule,
        HttpClientModule,
        HttpClientJsonpModule,
        GoogleMapsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        GoogleMapsComponent,
    ]
})
export class AppModule { }
