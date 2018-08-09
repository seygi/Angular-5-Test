import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { LoginService } from './shared/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FirstService } from '../core/services/app.service';
//import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        UserRoutingModule,
        CommonModule
    ],
    providers: [
        FirstService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
