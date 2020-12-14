import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completed') 
}


const intervals$ = new Observable<number>( subs => {
    const intervalID = setInterval( () => {
        subs.next(Math.random())
    }, 5000)

    return () => {
      clearInterval(intervalID)
      console.log('Iterval is destroyed')
    }

})


/**
 *  1.- multiple Cast
 *  2.- It's a obserber to
 *  3.- Next, error and complete 
 */

const subject$ = new Subject()

const subscription = intervals$.subscribe(subject$)

// const subs1 = interval$.subscribe((rnd) => console.log('subs 1:', rnd))
// const subs2 = interval$.subscribe((rnd) => console.log('subs 2:', rnd))

const subs1 = subject$.subscribe(observer)
const subs1 = subject$.subscribe(observer)

setTimeout(() => {

    subject$.next(10)
  // This complete method doesn't execute the unsubscribe of observable you need a observable's subscription
    subject$.complete()

    subscription.unsubscribe();
}, 3500)
