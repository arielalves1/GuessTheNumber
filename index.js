let totalAttempts = 0 
document.getElementById("attempts").innerHTML = totalAttempts
let yourGuesses = []

//generate random number between 1-100
const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}
const randomInteger = getRandomInteger(1, 100)
console.log(randomInteger)



//function to generate calculation---------------------------------
function outcome(){
    
let guessedNumber = Number(document.getElementById('inputBox').value)
let guess = randomInteger


//pushing guessed numbers from user to matrix
yourGuesses.push(' ' + guessedNumber)
   document.getElementById('guesses').innerHTML = yourGuesses


//comparing guessed number with answer and returning input to user

if (guessedNumber == guess) {
    document.getElementById('textOutput').innerHTML = 'You got it!'
    totalAttempts = totalAttempts 
    


} else if (Math.abs(guessedNumber - guess) <= 10) {
    if (guessedNumber > guess) {
        document.getElementById('textOutput').innerHTML = 'You almost got it! A little too high.'
        totalAttempts++
    } else {
        document.getElementById('textOutput').innerHTML = 'You almost got it! A little too low.'
        totalAttempts++
    }
} else {
    if (guessedNumber > guess) {
       document.getElementById('textOutput').innerHTML =  'It is too high!'
       totalAttempts++
    } else {
        document.getElementById('textOutput').innerHTML = 'It is too low!'
        totalAttempts++
    }   
}//------------------------------------------------

document.getElementById("attempts").innerHTML = totalAttempts
}