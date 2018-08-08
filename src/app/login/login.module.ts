/*
 Projeto: conciliation
 Author/Empresa: Rede
 Copyright (C) 2016 Redecard S.A.
 */

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { LoginService } from './shared/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        LoginRoutingModule
    ],
    providers: [
        //LoginService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
