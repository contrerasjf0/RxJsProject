import { asyncScheduler } from 'rxjs'

// setTimeout(() => {}, 3000)
// setInterval(() => {}, 3000)

const greet = () => console.log('Hello world')
const greet2 = (name) => console.log('Hello ' + name)

asyncScheduler.schedule(greet, 2000)
asyncScheduler.schedule(greet2, 2000, 'Frank')


const subs = asyncScheduler.schedule(function (state) {
    console.log('state ', state)
    this.schedule(state + 1, 1000)
}, 3000, 0)

setTimeout(() => {
  subs.unsubscribe();
}, 6000)
