const readline = require('readline')
const { performance } = require('perf_hooks')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const highScores = {
  Easy: Infinity,
  Medium: Infinity,
  Hard: Infinity
}

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

function getLevelName(level) {
  switch(level) {
    case '1': return 'Easy'
    case '2': return 'Medium'
    case '3': return 'Hard'
    default: return 'Medium'
  }
}

function updateHighScore(level, attempts) {
  const levelName = getLevelName(level)
  if(attempts < highScores[levelName]) {
    highScores[levelName] = attempts
    console.log(`New high score for ${levelName} level: ${attempts} attempts!`)
  } else {
    console.log(`Current high score for ${levelName} level: ${highScores[levelName]} attempts.`)
  }
}

function startGame() {
  console.log('Welcome to the Number Guessing Game!')
  console.log("I'm thinking of a number between 1 and 100.")
  console.log('You have 5 chances to guess the correct number.\n')

  rl.question('Please select the difficult level:\n\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: ', (choice) => {
    const chances = getChances(choice)
    const randomNumber = getRandomNumber()
    let attempts = 0
    let guessedCorrectly = false
    const startTime = performance.now()

    console.log(`Great! You have selected the ${choice === '1' ? 'Easy' : choice === 2 ? 'Medium' : 'Hard'} difficulty level`)
    console.log(`You have ${chances} chances to guess the correct number.\n`)

    function makeGuess() {
      if(attempts < chances) {
        rl.question('Enter your guess:', (input) => {
          const guess = parseInt(input)
          attempts++

          if(guess === randomNumber) {
            guessedCorrectly = true 
            const endTime = performance.now()
            const timeTaken = (endTime - startTime) / 1000

            console.log(`\nCongratulations! You guessed the correct number in ${attempts} attempts.`)
            updateHighScore(choice, attempts)
            console.log(`It took you ${timeTaken.toFixed(2)} seconds.`)
          } else {
            if(guess < randomNumber) {
              console.log(`Incorrect! The number is greater than ${guess}.\n`)
            } else {
              console.log(`Incorrect! The number is less than ${guess}.\n`)
            }
            makeGuess()
          }
        })
      } else {
        console.log(`Sorry, you've run out of chances! The number was ${randomNumber}.\n`)
        askToPlayAgain()
      }
    }
    makeGuess()
  })
}

function askToPlayAgain() {
  rl.question('Do you wanna to play again? (yes/no): ', (answer) => {
    if(answer.toLocaleLowerCase() === 'yes') {
      startGame()
    } else {
      console.log('Thank you for playing! Goodbye!')
      rl.close()
    }
  })
}

startGame()