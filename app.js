const containerEl = document.querySelector('.container')
const playBtn = document.querySelector('.button-again')
const checkBtn = document.querySelector('.button-check')
const hideNum = document.querySelector('.hide-num')
const message = document.querySelector('.message')
const inputNum = document.querySelector('.input-number')
const highScoreEl = document.querySelector('.high-score')
const scoreEl = document.querySelector('.score')

let randomNumber = parseInt(Math.random() * 10 + 1)
let score = 3
let highScore = 0

checkBtn.addEventListener('click', () => {
  const guess = Number(inputNum.value)
  
  if(guess){
    if(guess != randomNumber){
      if(score > 1){
        score--;
        scoreEl.textContent = score

        message.textContent = guess > randomNumber ? "Too High " : "Too Low"
        scoreEl.textContent = score
      }
      else{
        disMessage("You've lost the Game.")
        containerEl.style.backgroundColor = "#fff"
        scoreEl.textContent = 0
        hideNum.textContent = `The number was ${randomNumber}`
        
      }
    }
    else{
      hideNum.textContent = `You guessed it right: ${randomNumber}`
      containerEl.style.backgroundColor = "#e0d8d3"
      disMessage("Congratulations! You've won the Game.")
      highScore += score
      highScoreEl.textContent = highScore
    }
  }
  else{
    disMessage("Please Enter the Number :(")
  }
})

function disMessage(msg){
  message.textContent = msg
}

playBtn.addEventListener('click', () => {
  score = 3
  randomNumber = parseInt(Math.random() * 10 + 1)
  console.log(randomNumber);
  scoreEl.textContent = score
  highScoreEl.textContent = highScore
  hideNum.textContent = "?"
  inputNum.value = ""
  containerEl.style.backgroundColor = "#ddd"
  disMessage("Start Guessing.........")
})