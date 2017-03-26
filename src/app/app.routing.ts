import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'home', component: HomeComponent , canActivate : [AuthGuardService]},
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);