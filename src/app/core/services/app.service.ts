
import { Injectable } from '@angular/core';
import { of, from, BehaviorSubject, Subject, Observable } from 'rxjs';
//import { Observable } from 'rxjs';
import { User } from '../../user/user.model';

//import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

@Injectable()

export class FirstService {

    public getUsers() {
        let fakeUsers = [
            {
                id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'
            },
            {
                id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'
            },
            {
                id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'
            },
            {
                id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'
            },
        ].map((user: User) => new User().deserialize(user));

        //return of(fakeUsers);


        
        return of(fakeUsers).pipe(delay(5000));


        //return Observable.of(fakeUsers).delay(5000).toPromise();


        // return new Promise(resolve =>
        //     setTimeout(() => resolve(fakeUsers), 5000)
        // );


    }
}