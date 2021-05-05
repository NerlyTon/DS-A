const head = 1
const tails = 0
let start = 0
let next = 1
let counter = 0
makePattern = (input) => {
    
  while (next < input.length) {
   if(input[start] === head && input[next] === tails){
            start ++
            next ++
   } else if(input[start] === head && input[next] === head) {
 input[next] = tails
            counter += 1
            start ++
            next ++
   } else if(input[start] === tails && input[next] === head) {
           start ++
           next ++
  } else {
          input[next] = head
          counter += 1
          start ++
          next ++
     }
  }
 return counter
}