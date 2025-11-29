const quizQuestions = [
  {question: "What is the capital of France?", answer: "paris"},
  {question: "Which language is primarily used for web pages (three letters)?", answer: "html"},
  {question: "What method converts a string to lowercase in JavaScript?", answer: "tolowercase"},
  {question: "How many days are there in a leap year?", answer: "366"},
  {question: "What keyword declares a constant in JavaScript (four letters)?", answer: "const"}
];
function runQuiz(){
  let score = 0;
  for(let i = 0; i < quizQuestions.length; i++){
    const q = quizQuestions[i].question;
    const correct = quizQuestions[i].answer;
    const raw = prompt("Question " + (i+1) + " of " + quizQuestions.length + ":\n" + q);
    if(raw === null){
      alert("Quiz cancelled. Your score: " + score + " / " + quizQuestions.length);
      return;
    }
    const ans = raw.toLowerCase().trim();
    if(ans === correct){
      score++;
      alert("Correct!");
    } else {
      alert("Wrong. Correct answer: " + correct);
    }
  }
  alert("Quiz finished! Final score: " + score + " / " + quizQuestions.length);
}
runQuiz();
