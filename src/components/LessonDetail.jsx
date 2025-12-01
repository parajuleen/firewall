
import React from 'react';
import { 
    ArrowLeft, CheckCircle, Clock, Star, Target, Award, Info, 
    HelpCircle, XCircle, Trophy, BookOpen, AlertTriangle
} from 'lucide-react';
import { getDifficultyColor } from '../utils/getDifficultyColor'; 


const LessonContent = ({ content }) => (
    <div className="space-y-6">
        {content.map((item, index) => (
            <div key={index}>
                {item.type === 'intro' && (
                    <p className="text-gray-700 text-lg border-l-4 border-blue-500 pl-4 bg-blue-50">
                        <Info className="inline-block w-5 h-5 mr-2 text-blue-600" />
                        {item.text}
                    </p>
                )}
                {item.type === 'section' && (
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-1 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                            {item.title}
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                            {item.points.map((point, pIndex) => (
                                <li key={pIndex}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        ))}
    </div>
);


const QuizView = ({ quiz, quizAnswers, handleQuizAnswer, handleQuizSubmit, quizSubmitted, quizResults, handleRetakeQuiz, score }) => (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-inner">
        <h3 className="text-2xl font-bold text-teal-600 mb-4 border-b-2 border-teal-500 pb-2 flex items-center">
            <HelpCircle className="w-6 h-6 mr-2" />
            Lesson Quiz
        </h3>
        
        {!quizSubmitted ? (
            <div className="space-y-6">
                {quiz.map((q, qIndex) => (
                    <div key={qIndex} className="p-4 border border-gray-200 rounded-md bg-white">
                        <p className="font-medium text-gray-800 mb-3">
                            <span className="text-teal-600 font-bold">{qIndex + 1}.</span> {q.question}
                        </p>
                        <div className="space-y-2">
                            {q.options.map((option, oIndex) => {
                                const isSelected = quizAnswers[qIndex] === option;
                                return (
                                    <button
                                        key={oIndex}
                                        onClick={() => handleQuizAnswer(qIndex, option)}
                                        className={`block w-full text-left p-3 rounded-lg transition duration-200 
                                            ${isSelected ? 'bg-teal-100 border-teal-400 font-semibold' : 'bg-gray-50 hover:bg-teal-50 border-gray-200'} border`}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
                <button
                    onClick={handleQuizSubmit}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
                    disabled={Object.keys(quizAnswers).length !== quiz.length}
                >
                    Submit Quiz
                </button>
            </div>
        ) : (
            <div className="text-center p-6 space-y-4">
                <h4 className="text-3xl font-extrabold text-gray-800 flex items-center justify-center">
                    <Trophy className="w-8 h-8 mr-3 text-amber-500" />
                    Quiz Results
                </h4>
                <p className="text-xl font-bold">
                    You scored <span className="text-teal-600">{score.correct} out of {score.total}</span> (
                    <span className={score.percentage >= 70 ? 'text-green-600' : 'text-red-600'}>
                        {score.percentage}%
                    </span>)
                </p>
                
                <div className="mt-6 border-t pt-4">
                    <h5 className="text-lg font-semibold text-left mb-3">Review Answers:</h5>
                    <div className="space-y-4">
                        {quiz.map((q, qIndex) => {
                            const isCorrect = quizResults[qIndex];
                            const userSelection = quizAnswers[qIndex];
                            const isAnswered = userSelection !== undefined;

                            return (
                                <div key={qIndex} className={`p-3 rounded-md ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'} border`}>
                                    <p className="font-medium text-gray-800 flex items-start">
                                        {isCorrect ? <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" /> : <XCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />}
                                        {qIndex + 1}. {q.question}
                                    </p>
                                    <p className="ml-7 text-sm">
                                        **Your Answer:** <span className={isCorrect ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                            {isAnswered ? userSelection : 'Not Answered'}
                                        </span>
                                    </p>
                                    {!isCorrect && (
                                        <p className="ml-7 text-sm text-gray-600">
                                            **Correct Answer:** <span className="text-green-700 font-semibold">{q.answer}</span>
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={handleRetakeQuiz}
                    className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Retake Quiz
                </button>
            </div>
        )}
    </div>
);




export default function LessonDetail({ 
    lesson, handleBackToList, isCompleted, handleMarkComplete, 
    quizAnswers, handleQuizAnswer, handleQuizSubmit, quizSubmitted, quizResults, 
    handleRetakeQuiz, getQuizScore, showSuccessMessage 
}) {
    const Icon = lesson.icon;
    const score = getQuizScore();
    const canComplete = quizSubmitted && score.percentage >= 70;
    
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
            <button 
                onClick={handleBackToList}
                className="text-blue-600 hover:text-blue-800 mb-6 flex items-center font-semibold transition duration-200"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to All Lessons
            </button>

            {showSuccessMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <CheckCircle className="inline w-5 h-5 mr-2" />
                    <span className="block sm:inline">Lesson marked as complete! Great job!</span>
                </div>
            )}

            <header className="flex items-center space-x-4 pb-4 border-b-2 border-gray-200">
                <div className={`p-3 rounded-full ${lesson.color} text-white shadow-lg`}>
                    <Icon className="w-8 h-8" />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">{lesson.title}</h2>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mt-1 ${getDifficultyColor(lesson.difficulty)} border`}>
                        {lesson.difficulty}
                    </span>
                    {isCompleted && (
                        <span className="ml-3 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border-blue-200 border">
                            <CheckCircle className="inline w-3 h-3 mr-1" /> Completed
                        </span>
                    )}
                </div>
            </header>

            <section className="mt-6">
                <p className="text-xl italic text-gray-600 mb-6">{lesson.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center mb-8 border-b pb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 mx-auto text-amber-500" />
                        <p className="text-sm font-medium mt-1">Duration: **{lesson.duration}**</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <Star className="w-5 h-5 mx-auto text-yellow-500" />
                        <p className="text-sm font-medium mt-1">Rating: **{lesson.rating}**</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <Target className="w-5 h-5 mx-auto text-cyan-500" />
                        <p className="text-sm font-medium mt-1">Topics: **{lesson.topics}**</p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                    Lesson Content
                </h3>
                
                <LessonContent content={lesson.content} />
            </section>

            <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-green-600" />
                    Learning Objectives
                </h3>
                <ul className="list-disc list-outside space-y-2 text-gray-700 ml-6">
                    {lesson.objectives.map((obj, index) => <li key={index}>{obj}</li>)}
                </ul>
            </div>

            <QuizView 
                quiz={lesson.quiz}
                quizAnswers={quizAnswers}
                handleQuizAnswer={handleQuizAnswer}
                handleQuizSubmit={handleQuizSubmit}
                quizSubmitted={quizSubmitted}
                quizResults={quizResults}
                handleRetakeQuiz={handleRetakeQuiz}
                score={score}
            />
            
            {canComplete && !isCompleted && (
                <button
                    onClick={handleMarkComplete}
                    className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-xl flex items-center justify-center"
                >
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Mark Lesson Complete
                </button>
            )}
            
            {quizSubmitted && score.percentage < 70 && (
                <p className="mt-4 text-center text-lg font-medium text-red-600 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    You need at least 70% to mark this lesson complete. Please retake the quiz.
                </p>
            )}
        </div>
    );
}