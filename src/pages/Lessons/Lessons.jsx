
import React, { useState, useMemo, useCallback } from 'react';
import { Lock, Shield, Home } from 'lucide-react';
import { useProgress } from '../../context/progressContext'; 
import { useNavigate } from 'react-router-dom';


import { lessons as allLessons } from '../../data/firewallLessons'; 
import LessonList from '../../components/LessonList';
import LessonDetail from '../../components/LessonDetail'; 



export default function FirewallLessons() {
    // --- State Management ---
    const [filter, setFilter] = useState('All');
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [currentView, setCurrentView] = useState('list'); 
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizResults, setQuizResults] = useState({});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);

    // --- Hooks and Context ---
    const navigate = useNavigate();
    const { 
        markLessonComplete, 
        isLessonCompleted, 
        saveQuizScore, 
        getLessonScore,
        isLoggedIn 
    } = useProgress();


    /** Filters lessons based on the current difficulty filter. */
    const filteredLessons = useMemo(() => {
        return filter === 'All' 
        ? allLessons 
        : allLessons.filter(l => l.difficulty === filter);
    }, [filter]);

    const counts = useMemo(() => ({
        All: allLessons.length,
        Beginner: allLessons.filter(l => l.difficulty === 'Beginner').length,
        Intermediate: allLessons.filter(l => l.difficulty === 'Intermediate').length,
        Hard: allLessons.filter(l => l.difficulty === 'Hard').length
    }), []);

    /** Calculates the current quiz score. */
    const getQuizScore = useCallback(() => {
        if (!selectedLesson) return { correct: 0, total: 0, percentage: 0 };
        const total = selectedLesson.quiz.length;
        let correct = 0;
        
        selectedLesson.quiz.forEach((q, index) => {
            if (quizAnswers[index] === q.answer) {
                correct += 1;
            }
        });
        
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        return { correct, total, percentage };
    }, [selectedLesson, quizAnswers]);



    const handleStartLearning = useCallback((lesson) => {
        if (!isLoggedIn) {
            setShowLoginPrompt(true);
            setTimeout(() => navigate('/login'), 1500);
            return;
        }
        setSelectedLesson(lesson);
        setCurrentView('detail');
        // Reset quiz state when starting a new lesson
        setQuizAnswers({});
        setQuizSubmitted(false);
        setQuizResults({});
    }, [isLoggedIn, navigate]);

    const handleBackToList = useCallback(() => {
        setCurrentView('list');
        setSelectedLesson(null);
        setQuizAnswers({});
        setQuizSubmitted(false);
        setQuizResults({});
    }, []);

    const handleQuizAnswer = useCallback((questionIndex, selectedOption) => {
        if (!quizSubmitted) {
            setQuizAnswers(prevAnswers => ({
                ...prevAnswers,
                [questionIndex]: selectedOption
            }));
        }
    }, [quizSubmitted]);
    
    const handleQuizSubmit = useCallback(() => {
        if (!selectedLesson) return;
        
        const results = {};
        selectedLesson.quiz.forEach((q, index) => {
            results[index] = quizAnswers[index] === q.answer;
        });
        
        setQuizResults(results);
        setQuizSubmitted(true);

        if(isLoggedIn){
            const score = getQuizScore();
            saveQuizScore(selectedLesson.id, score.percentage);
        }
        
    }, [selectedLesson, quizAnswers, getQuizScore, isLoggedIn, saveQuizScore]);
    
    const handleMarkComplete = useCallback(() => {
        if (!selectedLesson || !isLoggedIn) return;
        
        const score = getQuizScore();
        if (score.percentage < 70) {
            console.warn("Attempted to mark complete without required score.");
            return;
        }
        
        const success = markLessonComplete(selectedLesson.id);
        if (success) {
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
        }
    }, [selectedLesson, isLoggedIn, markLessonComplete, getQuizScore]);

    const handleRetakeQuiz = useCallback(() => {
        setQuizAnswers({});
        setQuizSubmitted(false);
        setQuizResults({});
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            {showLoginPrompt && (
                <div className="fixed top-0 left-0 w-full p-4 bg-red-500 text-white text-center font-bold z-50">
                    <Lock className="inline w-5 h-5 mr-2" />
                    Please log in to track your progress! Redirecting...
                </div>
            )}

            {currentView === 'list' && (
                <LessonList 
                    filter={filter} 
                    setFilter={setFilter} 
                    counts={counts} 
                    filteredLessons={filteredLessons}
                    handleStartLearning={handleStartLearning}
                    isLessonCompleted={isLessonCompleted}
                    getLessonScore={getLessonScore}
                />
            )}

            {currentView === 'detail' && selectedLesson && (
                <LessonDetail
                    lesson={selectedLesson} 
                    handleBackToList={handleBackToList}
                    isCompleted={isLessonCompleted(selectedLesson.id)}
                    handleMarkComplete={handleMarkComplete}
                    
                    quizAnswers={quizAnswers}
                    handleQuizAnswer={handleQuizAnswer}
                    handleQuizSubmit={handleQuizSubmit}
                    quizSubmitted={quizSubmitted}
                    quizResults={quizResults}
                    handleRetakeQuiz={handleRetakeQuiz}
                    getQuizScore={getQuizScore}
                    showSuccessMessage={showSuccessMessage}
                />
            )}
            
            {!selectedLesson && currentView === 'detail' && (
                <div className="text-center p-10 bg-white max-w-lg mx-auto rounded-lg shadow-xl">
                    <Shield className="w-10 h-10 mx-auto text-red-500 mb-4" />
                    <h2 className="text-2xl font-bold text-red-600">Lesson Error</h2>
                    <p className="text-gray-600 mt-2">The selected lesson could not be loaded or is unavailable.</p>
                    <button onClick={handleBackToList} className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center mx-auto">
                        <Home className="w-5 h-5 mr-2" /> Return to Lessons List
                    </button>
                </div>
            )}
        </div>
    );
}