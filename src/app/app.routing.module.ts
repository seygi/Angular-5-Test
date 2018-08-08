import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { 
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: { preload: true }

    },
    { 
        path: 'user', 
        loadChildren: './user/user.module#UserModule',
        data: { preload: true }
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }