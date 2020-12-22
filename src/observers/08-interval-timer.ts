import { interval, timer } from 'rxjs'

const onbserver = {
  next: (val) => console.log('next: ', val),
  complete: () => console.log('complete') 
}

const startDate = new Date()

startDate.setSeconds(startDate.getSeconds() + 5)
//const intervar$ = interval(1000)
//const timer$ = timer(2000)

const timer$ = timer(2000)

console.log('Start')
//intervar$.subscribe(onbserver)
timer$.subscribe(onbserver)
console.log('End')
