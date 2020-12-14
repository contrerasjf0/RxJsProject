import { of } from 'rxjs'

//const obs$ = of(1,2,3,4,5,6)
// The of is sync
// The argument can any data type
const obs$ = of<number>(...[1,2,3],4,5,6)

console.log('Before Obs$');

obs$.subscribe(
  next => console.log('next: ', next),
  null,
  ( ) => console.log('The list has ended')
)

console.log('After Obs$');
