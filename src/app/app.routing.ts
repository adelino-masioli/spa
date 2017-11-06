import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";
import {BankListComponent} from "./banks/bank-list/bank-list.component";

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: 'admin',
        component: DashboardComponent,
        canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            {path: 'admin/dashboard', component: DashboardComponent}
        ]
    },
    {path: 'bank', component: BankListComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
];
export const routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);

