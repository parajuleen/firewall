
import React from 'react';
import { Shield, Clock, Star, Trophy, ArrowLeft } from 'lucide-react';
import { getDifficultyColor } from '../utils/getDifficultyColor'


export default function LessonList({ 
    filter, setFilter, counts, filteredLessons, handleStartLearning, 
    isLessonCompleted, getLessonScore 
}) {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 flex items-center justify-center">
                    <Shield className="w-8 h-8 mr-3 text-blue-600" />
                    Firewall Security Learning Path
                </h1>
                <p className="text-xl text-gray-600 mt-2">Master network security from basics to advanced defense concepts.</p>
            </header>

            <div className="mb-6 flex space-x-4 border-b pb-4 justify-center">
                {['All', 'Beginner', 'Intermediate', 'Hard'].map((diff) => (
                    <button
                        key={diff}
                        onClick={() => setFilter(diff)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition duration-300 border 
                            ${filter === diff ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'}`}
                    >
                        {diff} ({counts[diff]})
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLessons.map(lesson => {
                    const Icon = lesson.icon;
                    const isCompleted = isLessonCompleted(lesson.id);
                    const score = getLessonScore(lesson.id);

                    return (
                        <div 
                            key={lesson.id} 
                            className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={`p-2 rounded-lg ${lesson.color} text-white`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getDifficultyColor(lesson.difficulty)}`}>
                                    {lesson.difficulty}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 flex-grow">{lesson.description}</p>
                            
                            <div className="space-y-1 text-sm text-gray-600 mb-4">
                                <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Duration: **{lesson.duration}**</p>
                                <p className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500" /> Rating: **{lesson.rating}**</p>
                                {isCompleted && (
                                    <p className="flex items-center font-semibold text-blue-600">
                                        <Trophy className="w-4 h-4 mr-2" />
                                        Completed! Score: **{score}%**
                                    </p>
                                )}
                            </div>

                            <button
                                onClick={() => handleStartLearning(lesson)}
                                className={`w-full py-2 rounded-lg font-semibold transition duration-300 
                                    ${isCompleted ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-teal-500 hover:bg-teal-600 text-white'}`}
                            >
                                {isCompleted ? 'Review Lesson' : 'Start Learning'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}