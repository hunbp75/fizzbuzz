function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";    
    }else {
        return num;
    }
}

function write(message) {
   let msg = document.createElement("div"); 
   msg.innerText = message;
   document.body.append(msg);
}

function main() {
    for (let i = 0; i < 100; i++) {
      let result = fizzbuzz(i);  
      write(result);
    }
}

window.addEventListener("load", main);  