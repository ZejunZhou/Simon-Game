
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var days = (age * 365).toString();
        var weeks = (age * 52).toString();
        var month = (age * 12).toString();
        
        console.log("You have " + days +  " days, " + weeks + " weeks, and  "  + month + " months left.")
        
        
    /*************Don't change the code below**********/
}

/** 
function bmiCalculator(weight, height){
    var result = weight/(height ** 2);
    return Math.round(result);
}

var x = prompt("Please enter your name");

var y = prompt("Please enter your crush's name");

var n = Math.random() * 100;

alert("The change you will fall in love together is " + n + "%");
**/

/** 
function bmiCalculator (weight, height) {
    var bmi = weight / (height ** 2);
    if (bmi < 18.5){
        return "Your BMI is " + bmi + " so you are underweight."
    }
    else if (18.5 < bmi < 24.9){
        return "Your BMI is " + bmi + " so you have a normal weight."
    }
    else{
        return "Your BMI is " + bmi + " so you are overweight."
    }
}

a = bmiCalculator(60, 2);
console.log(a);
*/

/** 
var arr = [];
arr.push([1,2,3]);
console.log(arr);
*/

/** 

function whosPaying(names) {
    
    
    var randomNumber = Math.floor((Math.random() * names.length));

    console.log(randomNumber);
    
    var name = names[randomNumber];
    
    return name + " is going to buy lunch today!"
        
        

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));

**/

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆

        //Write your code here:
        var trace = 3
        var total = [];
        var previous = 0;
        var current = 1;

        if (n >= 1){
            total.push(previous);
        }

        if (n >= 2){
            total.push(current);
        }
        
        while(trace <= n){
            var temp = current;
            current = current + previous;
            total.push(current);
            previous = temp;
            trace++;
        }


        return total;
        
        
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
console.log(fibonacciGenerator(10));
