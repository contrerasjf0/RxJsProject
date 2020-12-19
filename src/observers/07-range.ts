import { of, range } from 'rxjs'

//const src$ = of<number>(1,2,3,4,5)
const src$ = range(1,5)

console.log('Start')
src$.subscribe(console.log)
console.log('End')
