import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completed')
}

//const obs$ = Observable.create();

const obs$ =  new Observable<string>((subs) => {
    subs.next('Text 1');
    subs.next('Text 2');


    // forced an error

    /* const person = undefined;
    person.name = 'Luis'; */

    subs.complete();

    subs.next('Text 3');
    subs.next('Text 4');
});

/* obs$.subscribe( 
    value => console.log('next: ', value),
    error => console.warn('error: ', error),
    () => console.info('completed')
 ); */
obs$.subscribe(observer);

