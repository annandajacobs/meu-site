const questions = [
    {
        question: "Com quantos anos Katherine ingressou na universidade?",
        options: ["23", "15", "16", "18"],
        correctAnswer: "15"
    },
    {
        question: "Qual era sua função na NASA?",
        options: ["Desenvolveu artigos", "Controle espacial", "Manipulação de dados", "Desenvolvimento de computadores"],
        correctAnswer: "Controle espacial"
    },
    {
        question: "Qual foi o papel de Katherine Johnson na Missão Apollo 11?",
        options: ["Analisou desempenho", "Programou trajetória de voo", "Desenvolveu supercomputador", "Executou cálculos precisos"],
        correctAnswer: "Executou cálculos precisos"
    }
];
const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-button");

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${buildOptions(question.options, index)}
        `;

        quizContainer.appendChild(questionElement);
    });
}

function buildOptions(options, questionIndex) {
    return options.map((option, index) => `
        <label>
            <input type="radio" name="question-${questionIndex}" value="${option}">
            ${option}
        </label>
    `).join("");
}

function submitQuiz() {
    const userAnswers = [];

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);

        if (selectedOption) {
            userAnswers.push(selectedOption.value);
        } else {
            userAnswers.push(null);
        }
    });

    // Faça algo com as respostas do usuário (por exemplo, mostrar pontuação)
    console.log("Respostas do usuário:", userAnswers);
}

buildQuiz();