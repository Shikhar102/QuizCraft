const questions = [
    {
      type: "multiple-choice",
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false }
      ]
    },
    {
      type: "true-false",
      question: "The Earth is flat.",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
      ]
    },
    {
      type: "fill-in-the-blank",
      question: "The capital of Japan is ___.",
      answers: [
        { text: "Tokyo", correct: true },
        { text: "Berlin", correct: false}
      ]
    },
    {
      type: "multiple-options",
      question: "Which of the following are colors of the rainbow?",
      answers: [
        { text: "Red", correct: true },
        { text: "White", correct: false },
        { text: "Black", correct: false },
        { text: "Green", correct: true }
      ]
    },
    {
      type: "statement",
      question: "Select the correct statement.",
      answers: [
        { text: "Water boils at 100 degrees Celsius.", correct: true },
        { text: "The sun revolves around the Earth.", correct: false },
        { text: "Cats can fly.", correct: false },
        { text: "Gravity pulls objects upward.", correct: false }
      ]
    }
    // Add more questions as needed
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question-container');
  const answerButtons = document.getElementById('answer-buttons');
  const feedbackContainer = document.getElementById('feedback-container');
  const nextButton = document.getElementById('next-button');
  
  function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    answerButtons.innerHTML = '';
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(answer) {
    const {correct} = answer;
    displayFeedback(correct);
    if (correct) {
      score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
      nextButton.classList.remove('hide');
    } else {
      displayResult();
    }
  }
  
  function displayFeedback(correct) {
    feedbackContainer.innerText = correct ? 'Correct!' : 'Incorrect!';
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
    feedbackContainer.innerText = '';
    nextButton.classList.add('hide');
  }
  
  function displayResult() {
    questionContainer.innerText = `Your Score: ${score} / ${questions.length}`;
    answerButtons.innerHTML = '';
    feedbackContainer.innerText = '';
    nextButton.innerText = 'Restart';
    nextButton.classList.remove('hide');
    nextButton.onclick = startGame;
  }
  
  function toggleTheme() {
    const {body} = document;
    const themeToggle = document.getElementById('theme-toggle');
  
    body.classList.toggle('dark-mode');
    themeToggle.checked = body.classList.contains('dark-mode');
    updateThemeLabel();
  }
  
  function updateThemeLabel() {
    const themeLabel = document.getElementById('theme-label');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeLabel.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
  }
  
  updateThemeLabel();  // Initialize theme label based on initial theme
  startGame();  // Start the game
  
  