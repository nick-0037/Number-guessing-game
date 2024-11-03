const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

function getChances(level) {
  switch(level) {
    case '1': return 10
    case '2': return 5
    case '3': return 3
    default: return 5
  }
}

function startGame() {
  console.log('Welcome to the Number Guessing Game!')
  console.log("I'm thinking of a number between 1 and 100.")
  console.log('You have 5 chances to guess the correct number.')

  rl.question('Please select the difficult level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n Enter your choice: ', (choice) => {
    const chances = getChances(choice)
    const randomNumber = getRandomNumber()
    let attempts = 0
    let guessedCorrectly = false

    console.log(`Great! You have selected the ${choice === '1' ? 'Easy' : choice === 2 ? 'Medium' : 'Hard'} difficulty level`)
    console.log(`You have ${chances} chances to guess the correct number.`)

    function makeGuess() {
      if(attempts < chances) {
        rl.question('Enter your guess:', (input) => {
          const guess = parseInt(input)
          attempts++

          if(guess === randomNumber) {
            guessedCorrectly = true 
            console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`)
          } else {
            if(guess < randomNumber) {
              console.log(`Incorrect! The number is greater than ${guess}.`)
            } else {
              console.log(`Incorrect! The number is less than ${guess}.`)
            }
            makeGuess()
          }
        })
      } else {
        console.log(`Sorry, you've run out of chances! The number was ${randomNumber}.`)
        rl.close()
      }
    }
    makeGuess()
  })
}

startGame()