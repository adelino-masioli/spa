import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AdminModule} from "./admin/admin.module";
import {AuthGuard} from "./guards/auth.guard";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import {RefreshTokenInterceptor} from "./interceptors/refresh_token.interceptor";
import { BankListComponent } from './banks/bank-list/bank-list.component';


@NgModule({
    declarations: [
        AppComponent,
        BankListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        AuthModule,
        AdminModule
    ],
    providers: [
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
