let mini = 50;
let maxi = 100;
const randomNum = Math.floor(Math.random()*(maxi-mini+1))+mini;
console.log(randomNum);
let guesses=0;

const result = document.getElementById("result");



document.getElementById("btn").onclick=function(){
    guesses++;
    let ans=document.getElementById("num").value ;
    if(ans==randomNum){
        result.textContent = `Congratulations! You guessed the correct number ${randomNum} in ${guesses} guesses.`;
    }
    else if(ans<mini ||ans>maxi){
        result.textContent = "Please enter a valid number between 50 and 100.";
    }else if(ans<randomNum){
        result.textContent = "Too low! Try again.";
    }else{
        result.textContent = "Too high! Try again.";
    }
}




