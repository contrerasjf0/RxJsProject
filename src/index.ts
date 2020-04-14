import { Observable } from 'rxjs';


//const obs$ = Observable.create();

const obs$ =  new Observable<string>((subs) => {
    subs.next('Text 1');
    subs.next('Text 2');

    subs.complete();

    subs.next('Text 3');
    subs.next('Text 4');
});

obs$.subscribe(console.log);

