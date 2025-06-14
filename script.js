const questions = [
    {
      question: "Charmander evolui para qual Pokémon?",
      options: ["Charizard", "Charmeleon", "Pidgeotto", "Chimchar"],
      answer: "Charmeleon"
    },
    {
      question: "Qual é a evolução final do Bulbasaur?",
      options: ["Ivysaur", "Venusaur", "Bellsprout", "Vileplume"],
      answer: "Venusaur"
    },
    {
      question: "Pichu evolui para qual Pokémon?",
      options: ["Raichu", "Minun", "Pikachu", "Plusle"],
      answer: "Pikachu"
    },
    {
      question: "Magikarp se transforma em qual Pokémon poderoso?",
      options: ["Gyarados", "Seadra", "Tentacruel", "Blastoise"],
      answer: "Gyarados"
    },
    {
      question: "Qual desses é uma das evoluções possíveis do Eevee?",
      options: ["Machoke", "Flareon", "Slowpoke", "Golbat"],
      answer: "Flareon"
    }
  ];

  let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');

function loadQuestion() {
  resetState();
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function resetState() {
  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none';
}

function selectAnswer(button, correctAnswer) {
  const selected = button.textContent;
  const isCorrect = selected === correctAnswer;
  if (isCorrect) {
    score++;
    button.style.backgroundColor = '#43a047';
  } else {
    button.style.backgroundColor = '#e53935';
  }

  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.border = '2px solid #43a047';
    }
  });

  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.classList.add('hidden');
  optionsEl.classList.add('hidden');
  nextBtn.classList.add('hidden');
  scoreContainer.classList.remove('hidden');
  scoreEl.textContent = score;
  totalEl.textContent = questions.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreContainer.classList.add('hidden');
  questionEl.classList.remove('hidden');
  optionsEl.classList.remove('hidden');
  loadQuestion();
}

loadQuestion();
