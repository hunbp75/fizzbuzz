function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";    
    }else {
        return number;
    }
}

function write(message) {
   let msg = document.createElement("div"); 
   msg.innerText = message;
   document.body.append(msg);
}

function main() {
    for (let i = 1; i <= 30; i++) {
      let result = fizzbuzz(i);  
      write(result);
    }
}

window.addEventListener("load", main);  


