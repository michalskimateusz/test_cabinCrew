import Question from "./Question";

export default class Quiz extends Question {
  constructor({
    score = 0,
    questions,
    questionIndex = 0,
    yesArr = [],
    noArr = [],
  }) {
    super({});
    this.score = score;
    this.questions = questions;
    this.questionIndex = questionIndex;
    this.yesArr = yesArr;
    this.noArr = noArr;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex]
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  guess(answer) {
      if (this.getQuestionIndex().correctAnswer(answer)) {
      this.yesArr.push(this.getQuestionIndex().question);
      this.score++
    } else {
      this.noArr.push(this.getQuestionIndex().question);
    }
    this.questionIndex++
  }
}

