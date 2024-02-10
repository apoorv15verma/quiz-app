

import './App.css'
import React, {  useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is javascript framework?',
			answerOptions: [
				{ answerText: 'django', isCorrect: false },
				{ answerText: 'springboot', isCorrect: false },
				{ answerText: 'react', isCorrect: true },
				{ answerText: 'laravel', isCorrect: false },
			],
		},
		{
			questionText: 'What does CSS stand for?',
			answerOptions: [
				{ answerText: 'cascasing sheet style', isCorrect: false },
				{ answerText: 'cascading style sheet', isCorrect: true },
				{ answerText: 'computer style sheet', isCorrect: false },
				{ answerText: 'cascading steel sheet', isCorrect: false },
			],
		},
		{
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: 'Hyper text markup language', isCorrect: true },
				{ answerText: 'Hyper type markup language', isCorrect: false },
				{ answerText: 'Hyper tag markup language', isCorrect: false },
				{ answerText: 'Hyper text main language', isCorrect: false },
			],
		},
		{
			questionText: 'where you put css path link in HTML',
			answerOptions: [
				{ answerText: 'anywhere', isCorrect: false },
				{ answerText: 'body', isCorrect: false },
				{ answerText: 'footer', isCorrect: false },
				{ answerText: 'head', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const handleReloadClick = () => {
    
    window.location.reload();
  };



  
	return (
		<div className='app'>
			{showScore ? (
        
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <button onClick={handleReloadClick}>play again</button>
				</div>
        

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}