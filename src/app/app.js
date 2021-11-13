import Quiz from "./components/Quiz";
import { questions } from "./components/Question";
import { showFinalView } from "./components/Summary";

const questionDOM = document.getElementById('question');
const btnYesDOM = document.getElementById('btn0');
const btnNoDOM = document.getElementById('btn1');
const tipDOM = document.getElementById('tip');
const questionIndexDOM = document.getElementById('questionIndex');
const questionsLengthDOM = document.getElementById('questionsLength');

function populate(quiz) {
  if(quiz.isEnded()){
    showFinalView(quiz)
    return
  }
  const currentQuestion = quiz.getQuestionIndex();
  questionDOM.innerHTML = currentQuestion.question;
  tipDOM.innerHTML = currentQuestion.tip;
  btnYesDOM.innerHTML = currentQuestion.choices[0].toUpperCase();
  btnNoDOM.innerHTML = currentQuestion.choices[1].toUpperCase();
  questionIndexDOM.innerHTML = `${quiz.questionIndex + 1}`;
  questionsLengthDOM.innerHTML = `${quiz.questions.length}`;
  const choices = currentQuestion.choices;
  for(let i = 0; i < choices.length; i++) {
    guessAnswerOnBtnClick(`btn${i}`, choices[i], quiz)
  }
}

function guessAnswerOnBtnClick(btnId, answerChoice, quiz) {
  const button = document.getElementById(btnId);
  button.onclick = () => {
    quiz.guess(answerChoice);
    populate(quiz)
  }
}

const App = () => {
  const quiz = new Quiz({ questions })
  populate(quiz)
};

export default App;
