var user
while (true) {
  user = prompt('Enter The Clue To Access The Site :')
  if (user === 'I Love You') {
    break
  } else {
    alert('Incorrect! Access denied.')
  }
}
let timeInSeconds = 90,
  incorrectAttempts = 0,
  currentQuestionIndex = 0
const timerElement = document.getElementById('timer'),
  questionElement = document.getElementById('question'),
  doorsElement = document.querySelector('.doors'),
  questions = [
    'Choose the door that is NOT on the extreme ends.',
    'Select the door that is on the right AND has an odd number of letters.',
    'Given that the left door is NOT chosen prior, choose the middle door.',
    "Choose the door that is on the left OR has the letter 'r' in its name.",
    'If the right door is chosen prior, then the middle door must be avoided.',
    'Given that the left door is chosen AND it has more than five letters, choose the right door.',
    "Choose the door that is on the right AND does NOT have the letter 'o' in its name.",
    'If the middle door is chosen prior OR the right door is chosen prior, then choose the left door.',
    'Choose the door that is on the extreme ends OR has an even number of letters.',
    'Given that the right door is chosen AND the left door is NOT chosen, choose the middle door.',
    'Choose the door that has more than two vowels in its name.',
    'Select the door that is NOT on the extreme ends AND has an even number of letters.',
    'If the left door is chosen prior, then the middle door must be avoided.',
    "Given that the right door is NOT chosen AND it has the letter 'e' in its name, choose the left door.",
    'Choose the door that is on the left OR the right door has an odd number of letters.',
    'If the middle door is chosen prior, then the right door must also be chosen.',
    'Given that the left door is chosen AND the right door is NOT chosen, choose the middle door.',
    "Choose the door that has the same number of letters as the word 'logic'.",
    'Select the door that is on the right AND has a prime number of letters.',
  ],
  answers = [
    'middle',
    'right',
    'middle',
    'right',
    'left',
    'right',
    'right',
    'left',
    'left',
    'middle',
    'middle',
    'middle',
    'left',
    'left',
    'middle',
    'right',
    'middle',
    'middle',
    'right',
    'left',
  ]
function updateTimer() {
  timerElement.textContent =
    Math.floor(timeInSeconds / 60) +
    ':' +
    (timeInSeconds % 60).toString().padStart(2, '0')
}
function displayNextQuestion() {
  currentQuestionIndex++
  currentQuestionIndex < questions.length
    ? ((questionElement.textContent = questions[currentQuestionIndex]),
      doorsElement.classList.remove('disabled'))
    : (alert(
        'Congratulations! You have completed all the questions. The Password For the Next Clue Is: Logic Gates'
      ),
      (window.location.href = '../Room9/index.html'))
}
function checkDoor(_0x6532a1) {
  doorsElement.classList.add('disabled')
  _0x6532a1 === answers[currentQuestionIndex]
    ? (displayNextQuestion(), (timeInSeconds += 5))
    : ((timeInSeconds -= 10),
      incorrectAttempts++,
      alert('Incorrect door! Try again.'),
      doorsElement.classList.remove('disabled'))
  updateTimer()
}
function countdown() {
  updateTimer()
  setInterval(() => {
    timeInSeconds > 0
      ? (timeInSeconds--, updateTimer())
      : ((questionElement.textContent = 'You FAILED'), location.reload())
  }, 1000)
}
countdown()
