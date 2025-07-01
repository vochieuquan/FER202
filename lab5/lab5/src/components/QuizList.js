import Question from './Question';

const quizData = [
  {
    id: 1,
    question: "Sản phẩm chay của Vegan Food có ngon không?",
    options: ["Không", "Tạm", "Ngonnn", "Dở"],
    answer: 1
  },
  {
    id: 2,
    question: "Hello World là gì?",
    options: ["1", "2", "3", "4"],
    answer: 2
  }
];

export default function QuizList() {
  return (
    <div>
      {quizData.map(item => (
        <Question key={item.id} data={item} />
      ))}
    </div>
  );
}
