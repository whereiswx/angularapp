import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, children: [
        { path: 'menu', component: MenuComponent },
        { path: 'user-page', component: UsersComponent },
    ] },
];
