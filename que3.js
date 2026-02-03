function once(fn) {
  let executed = false

    return function (){
      if (!executed){
        executed = true;
        return fn()
      }
  }
  
}

function greet() {
  console.log("Hello")
}

const greetOnce = once(greet)
greetOnce()
greetOnce()
greetOnce()
