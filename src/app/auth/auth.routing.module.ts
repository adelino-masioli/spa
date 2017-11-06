
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "../guards/auth.guard";


const authRoutes = [
    {path: 'admin/profile', component: ProfileComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}