export default class Question {
  constructor({
    question,
    tip,
    choices = ['tak', 'nie'],
    answer,
  }) {
    this.question = question;
    this.tip = tip;
    this.choices = choices;
    this.answer = answer;
  }

  correctAnswer(choice) {
    return this.answer === choice;
  }
}

export const questions = [
  new Question({
    question: 'Czy Twój wiek jest w przedziale 18-32 lata?',
    tip: 'Niektóre linie lotnicze jak np. Emirates, Qatar Airways czy Etihad przyjmują dopiero od 21 lat. Górna granica wiekowa to 35 lat.',
    answer: 'tak',
  }),
  new Question({
    question: 'Czy Twój wzrost mieści się w przedziale 158-190 cm?',
    tip: 'Minimalny wzrost jest podyktowany koniecznością dosięgnięcia sprzętu na pokładzie samolotu na wysokości 212 cm.',
    answer: 'tak'
  }),
  new Question({
    question: 'Czy posiadasz świadectwo maturalne?',
    tip: 'Ogólny wymóg dotyczy ukończenia 12 lat nauki, który przypada na koniec liceum. Studia nie są wymagane aby dostać pracę.',
    answer: 'tak'
  }),
  new Question({
    question: 'Czy Twoja znajomość języka angielskiego jest na poziomie min. B2?',
    tip: 'Angielski jest głównym językiem w lotnictwie. W niektórych liniach lotniczych wymagany jest dodatkowy język obcy.',
    answer: 'tak'
  }),
  new Question({
    question: 'Czy jesteś w stanie samodzielnie przepłynąć 25 metrów na basenie?',
    tip: 'Umiejetność pływania jest sprawdzana podczas szkolenia w liniach lotniczych. Wystarczą minimalne umiejętności.',
    answer: 'tak'
  }),
  new Question({
    question: 'Czy Twój wskaźnik BMI mieści się w przedziale 18,5 - 24,9?',
    tip: 'W zależności od budowy ciała możliwe są odchylenia. Chodzi głównie o zdrowe proporcje i brak dużej nadwagi.',
    answer: 'tak'
  }),
  new Question({
    question: 'Czy posiadasz względnie proste i zadbane zęby?',
    tip: 'Dopuszczalne są małe wady zgryzu i uzębienia. Uśmiech i aparycja są ważne. Duże wady lub aparat stały dyskwalifikują.',
    answer: 'tak'
  }),
  new Question({
    question: 'Czy posiadasz tatuaże widoczne poza mundurem?',
    tip: 'Szczególnie u kobiet często widoczne są łydki, stopy, ramiona i szyja. Tatuaże widoczne poza mundurem dyskwalifikują.',
    answer: 'nie'
  }),
  new Question({
    question: 'Czy posiadasz duże blizny widoczne poza mundurem?',
    tip: 'Chodzi o rażące blizny, szramy i znamiona. Małe i drobne ślady z dzieciństwa są normą u każdego i nie stanowią problemu.',
    answer: 'nie'
  }),
  new Question({
    question: 'Czy miałeś/aś kontakt z chorobą zakaźną bądź byłeś/aś przewlekle chory/a?',
    tip: 'Chodzi o choroby typu HIV, Gruźlica, Syphilis, Kiła, Padaczka itp. Wyleczona choroba nie stanowi przeszkody.',
    answer: 'nie'
  }),
  new Question({
    question: 'Czy Twój wzrok mieści się w przedziale +3,5 / -3,5 dioptrii?',
    tip: 'Wartość szacunkowa. Chodzi o bardzo duże wady wzroku. W codziennej pracy można nosić soczewki oraz okulary.',
    answer: 'tak'
  }),
]