let num1 = 1000
 let num2 = 100
 document.getElementById("num1-el").textContent = num1 
 document.getElementById("num2-el").textContent = num2 
  
 let sumEl = document.getElementById("sum-el") 
  
 function add() { 
     let result = num1 + num2 
     sumEl.textContent = "Result: " + result 
 } 
  
 function subtract() { 
     let result = num1 - num2 
     sumEl.textContent = "Result: " + result 
 } 
  
 function divide() { 
     let result = num1 / num2 
     sumEl.textContent = "Result: " + result 
 } 
  
 function multiply() { 
     let result = num1 * num2 
     sumEl.textContent = "Result: " + result 
 }
