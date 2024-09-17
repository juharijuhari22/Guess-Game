const guessNumber = document.getElementById("guessNumber");
const result = document.getElementById("result");

const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
let attempts = 0;


function guess(){
    let guess = Number(guessNumber.value);

    if (isNaN(guess)){
        result.textContent = "Please enter a valid number";
    } 
    else if (guess < minimum || guess > maximum){
        result.textContent = `Please enter a number between ${minimum} and ${maximum}`;
    } 
    else{
        result.textContent = answer;
        attempts++;
        if (guess < answer){
            result.textContent = `Terlalu Rendah` ;
        } else if (guess > answer){
            result.textContent = "Terlalu Tinggi";
        }else{
            result.textContent = `BENAR, Jawabannya adalah ${answer} dan kamu melakukan tebakan sebanyak ${attempts} kali`;
        }
        
    }
    result.style.display = "block";
}



