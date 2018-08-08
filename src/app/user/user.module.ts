/*
 Projeto: conciliation
 Author/Empresa: Rede
 Copyright (C) 2016 Redecard S.A.
 */

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { LoginService } from './shared/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        UserRoutingModule
    ],
    providers: [
        //LoginService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
