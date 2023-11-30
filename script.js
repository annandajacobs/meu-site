function checkAnswers() {
    let correctAnswers = 0;
  
    const q1Answer = document.querySelector('input[name="q1"]:checked').value;
    if (q1Answer === "15") {
      correctAnswers++;
      document.getElementById('question1').classList.add('correct');
    } else {
      document.getElementById('question1').classList.add('incorrect');
    }
  
    const q2Answer = document.querySelector('input[name="q2"]:checked').value;
    if (q2Answer === "Controle espacial") {
      correctAnswers++;
      document.getElementById('question2').classList.add('correct');
    } else {
      document.getElementById('question2').classList.add('incorrect');
    }
  
    const q3Answer = document.querySelector('input[name="q3"]:checked').value;
    if (q3Answer === "Executou cálculos precisos") {
      correctAnswers++;
      document.getElementById('question3').classList.add('correct');
    } else {
      document.getElementById('question3').classList.add('incorrect');
    }
  
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `Você acertou ${correctAnswers} de 3 perguntas.`;
  }
