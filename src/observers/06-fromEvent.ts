

// DOM Evnts

import { fromEvent } from "rxjs";

const src1$ = fromEvent<MouseEvent>(document, 'click')
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup')

const onserver = {
  next: (val) => console.log('next', val)
}

src1$.subscribe((even) => {
  console.log(even.x)
  console.log(even.y)
})

src2$.subscribe((even) => {
  console.log(even.key)
})
