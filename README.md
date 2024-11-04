# Number-guessing-game

This is CLI-based game where the player has to guess a random number between 1 and 100. The game includes difficulty levels, hints, and a system to keep track of the high score.

## Description

The Number Guessing Game allows users to select a difficulty level and guess a number within a limited number of attempts. The game provides hints if the player gets stuck and keeps track of the fewest attempts needed to win at each difficulty level.

## Installation 

Clone the repository and navigate to following path:
```bash
  git clone https://github.com/nick-0037/Number-guessing-game
  cd number-guessing-game
```

## Usage 

To run the game: 

```bash
  npm start
```

1. Select a difficulty level:
   -  Easy: 10 attemps
   -  Medium: 5 attepms
   -  Hard: 3 attemps

2. Guess the number by entering values between 1 and 100.
```bash
  Enter number: <You number>
```
3. You'll receive hints if your guess in incorrect:
   - Whether the number is higher or lower
   - Proximity hints if you're close

4. At the end each round, you can choose to play again or quit.

## Features 

- Random number generation between 1 and 100.
- Multiple difficulty levels that limit the number of attempts.
- Hint system to help the player get closer to the number.
- High score tracking, keeps track of the fewest attempts required to win at each difficulty level.

  
