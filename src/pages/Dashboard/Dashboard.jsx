import React, { useEffect, useState } from 'react';
import { Award, TrendingUp, Target, Star, BookOpen, CheckCircle, Clock, Trophy, Zap, ArrowRight, Shield } from 'lucide-react'; // Added ArrowRight and Shield
import { useProgress } from '../../context/progressContext';
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    // Hooks and Context
    const { getOverallProgress, loading, isLoggedIn } = useProgress();
    const navigate = useNavigate();

    // --- Authentication and Redirection Logic ---
    useEffect(() => {
        if (!loading && !isLoggedIn) {
            // Redirect to login page if not logged in and loading is complete
            navigate('/login');
        }
    }, [isLoggedIn, loading, navigate]);

    // The rest of the component assumes the user is logged in
    const progress = getOverallProgress();

    if (loading || !isLoggedIn) {
        // If loading, show spinner. 
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin mx-auto"></div>
                    <p className="text-slate-600 font-medium">Checking authentication status...</p>
                </div>
            </div>
        );
    }
    
    const badges = [
        { 
            id: 'starter', 
            name: 'Getting Started', 
            description: 'Completed your first lessons',
            requirement: 20, 
            color: 'from-blue-500 to-cyan-500',
            icon: <Zap className="w-6 h-6" />
        },
        { 
            id: 'halfway', 
            name: 'Halfway Hero', 
            description: 'Reached 50% completion',
            requirement: 50, 
            color: 'from-emerald-500 to-green-500',
            icon: <Target className="w-6 h-6" />
        },
        { 
            id: 'master', 
            name: 'Firewall Master', 
            description: 'Completed all lessons',
            requirement: 100, 
            color: 'from-amber-500 to-yellow-500',
            icon: <Trophy className="w-6 h-6" />
        }
    ];

    const earnedBadges = badges.filter(badge => progress.percent >= badge.requirement);
    const nextBadge = badges.find(badge => progress.percent < badge.requirement);
    
    const stats = [
        { 
            label: 'Total Lessons', 
            value: progress.totalLessons, 
            total: progress.totalLessons,
            icon: <BookOpen className="w-6 h-6" />,
            color: 'from-sky-500 to-blue-600'
        },
        { 
            label: 'Lessons Completed', 
            value: progress.completedCount, 
            total: progress.totalLessons,
            icon: <CheckCircle className="w-6 h-6" />, 
            color: 'from-sky-500 to-blue-600'
        },
        { 
            label: 'Overall Progress', 
            value: `${progress.percent}%`, 
            icon: <TrendingUp className="w-6 h-6" />,
            color: 'from-purple-500 to-pink-600'
        },
        { 
            label: 'Badges Earned', 
            value: earnedBadges.length, 
            total: badges.length,
            icon: <Award className="w-6 h-6" />,
            color: 'from-emerald-500 to-green-600'
        }
    ];

    const averageScore = Object.values(progress.scores).length > 0
        ? Math.round(Object.values(progress.scores).reduce((a, b) => a + b, 0) / Object.values(progress.scores).length)
        : 0;

    // --- Authenticated Dashboard View ---
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 py-12 px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                        Your Dashboard
                    </h1>
                    <p className="text-lg text-slate-600">
                        Track your progress and celebrate your achievements
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between">
                                <div className="space-y-3 flex-1">
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                        {stat.label}
                                    </p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black text-slate-900">
                                            {stat.value}
                                        </span>
                                        {stat.total && (
                                            <span className="text-2xl font-bold text-slate-400">
                                                / {stat.total}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Section */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 sm:p-10 border-b border-slate-200">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-slate-900">Learning Progress</h2>
                                <p className="text-slate-600">You're doing great! Keep up the momentum.</p>
                            </div>
                            <div className="flex flex-col items-start lg:items-end">
                                <span className="text-6xl font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                                    {progress.percent}%
                                </span>
                                <span className="text-sm text-slate-600 font-medium">Complete</span>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <div className="relative w-full bg-slate-200 rounded-full h-5 overflow-hidden shadow-inner">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full shadow-lg transition-all duration-700 ease-out flex items-center justify-end pr-2"
                                    style={{ width: `${progress.percent}%` }}
                                >
                                    {progress.percent > 10 && (
                                        <Star className="w-4 h-4 text-white animate-pulse" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {nextBadge && (
                            <div className="mt-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200">
                                <p className="text-sm text-slate-600">
                                    <strong className="text-sky-600">{nextBadge.requirement - progress.percent}%</strong> away from earning <strong>{nextBadge.name}</strong>!
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Badges Section */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="p-8 sm:p-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                                <Trophy className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Achievement Badges</h2>
                                <p className="text-slate-600">Collect badges as you progress</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {badges.map((badge) => {
                                const isEarned = progress.percent >= badge.requirement;
                                return (
                                    <div
                                        key={badge.id}
                                        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                                            isEarned
                                                ? 'bg-gradient-to-br from-white to-slate-50 border-slate-300 shadow-lg hover:shadow-xl hover:-translate-y-1'
                                                : 'bg-slate-50 border-slate-200 opacity-60'
                                        }`}
                                    >
                                        {isEarned && (
                                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                        )}
                                        
                                        <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 ${!isEarned && 'grayscale'}`}>
                                            {badge.icon}
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {badge.name}
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-3">
                                            {badge.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Target className="w-4 h-4" />
                                            <span>{badge.requirement}% required</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Scores Section */}
                {Object.keys(progress.scores).length > 0 && (
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Star className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">Quiz Scores</h2>
                                    <p className="text-slate-600">Your performance on completed lessons</p>
                                </div>
                            </div>

                            {/* Average Score Card */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-1">
                                            Average Score
                                        </p>
                                        <p className="text-4xl font-black text-purple-900">{averageScore}%</p>
                                    </div>
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                        <TrendingUp className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>

                            {/* Individual Scores */}
                            <div className="space-y-4">
                                {Object.entries(progress.scores).map(([lessonId, score]) => {
                                    const scoreNum = parseInt(score);
                                    const getScoreColor = (s) => {
                                        if (s >= 90) return 'from-green-500 to-emerald-600';
                                        if (s >= 70) return 'from-blue-500 to-cyan-600';
                                        if (s >= 50) return 'from-yellow-500 to-amber-600';
                                        return 'from-red-500 to-orange-600';
                                    };

                                    return (
                                        <div
                                            key={lessonId}
                                            className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                                        >
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-slate-900">Lesson {lessonId}</h4>
                                                <div className="mt-2 w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${getScoreColor(scoreNum)} rounded-full transition-all duration-500`}
                                                        style={{ width: `${scoreNum}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-2xl font-bold text-slate-900">{score}%</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Empty State for Scores */}
                {Object.keys(progress.scores).length === 0 && (
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-12 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">No Quiz Scores Yet</h3>
                        <p className="text-slate-600 mb-6 max-w-md mx-auto">
                            Complete your first lesson and quiz to see your scores here!
                        </p>
                        <Link
                            to="/lessons"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-xl hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <BookOpen className="w-5 h-5" />
                            Start Learning
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}