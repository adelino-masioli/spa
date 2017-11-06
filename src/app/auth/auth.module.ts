import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import {AuthRoutingModule} from "./auth.routing.module";
import {RouterModule} from "@angular/router";
import {LocalStorageService} from "./services/local-storage.service";
import {JwtTokenService} from "./services/jwt-token.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthRoutingModule,
        RouterModule
    ],
    declarations: [
        LoginComponent,
        ProfileComponent,
    ],
    providers: [
        AuthService,
        LocalStorageService,
        JwtTokenService
    ]
})
export class AuthModule { }
