import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedColorComponent } from './common/approved-color/approved-color.component';
import { HeaderComponent } from './common/header/header.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SelectServiceComponent } from './pages/select-service/select-service.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'color-choice', component: ApprovedColorComponent },
  // { path: 'dashboard', component: HeaderComponent },
  // { path: 'vehicle-details', component: VehicleDetailsComponent },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'vehicle-details',
        component: VehicleDetailsComponent
      },
      {
        path: 'select-service',
        component: SelectServiceComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
