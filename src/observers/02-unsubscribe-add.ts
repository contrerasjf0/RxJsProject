import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completed') 
}

const interval$ = new Observable<number>( subscriber => {
    let counter = 0;

    const intervalPID = setInterval(()=>{
        subscriber.next(counter++);
        console.log(counter);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();    
    }, 2500);

    return () => {
        clearInterval(intervalPID);
        console.log('The interval has been destroyed');
    }

});

const subs1= interval$.subscribe( observer );
const subs2= interval$.subscribe( observer );
const subs3= interval$.subscribe( observer );

subs1.add(subs2)
    .add(subs3);
setTimeout(() => {
    subs1.unsubscribe();
    /* subs2.unsubscribe();
    subs3.unsubscribe(); */

    console.log('Completed timeout');
}, 6000);