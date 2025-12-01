import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Progress Context
const ProgressContext = createContext();

// Custom hook to use the Progress Context
export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

// Progress Provider Component
export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    completedLessons: [],
    scores: {}
  });
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status and load progress on mount
  useEffect(() => {
    checkAuthAndLoadProgress();
  }, []);

  // Listen for login/logout events
  useEffect(() => {
    const handleStorageChange = () => {
      checkAuthAndLoadProgress();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!loading && isLoggedIn) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const userId = currentUser.email || currentUser.username || 'guest';
      localStorage.setItem(`fw_progress_${userId}`, JSON.stringify(progress));
    }
  }, [progress, loading, isLoggedIn]);

  const checkAuthAndLoadProgress = () => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      loadProgress();
    } else {
      // Reset progress if not logged in
      setProgress({
        completedLessons: [],
        scores: {}
      });
      setLoading(false);
    }
  };

  const loadProgress = () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const userId = currentUser.email || currentUser.username || 'guest';
      const saved = localStorage.getItem(`fw_progress_${userId}`);
      
      if (saved) {
        const parsed = JSON.parse(saved);
        setProgress({
          completedLessons: parsed.completedLessons || [],
          scores: parsed.scores || {}
        });
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const markLessonComplete = (lessonId) => {
    if (!isLoggedIn) {
      console.warn('User must be logged in to save progress');
      return false;
    }
    
    setProgress(prev => {
      const isAlreadyCompleted = prev.completedLessons.includes(lessonId);
      if (isAlreadyCompleted) {
        return prev;
      }
      
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId]
      };
    });
    return true;
  };

  const saveQuizScore = (lessonId, score) => {
    if (!isLoggedIn) {
      console.warn('User must be logged in to save progress');
      return false;
    }
    
    setProgress(prev => ({
      ...prev,
      scores: {
        ...prev.scores,
        [lessonId]: score
      }
    }));
    return true;
  };

  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const getLessonScore = (lessonId) => {
    return progress.scores[lessonId] || null;
  };

  const getOverallProgress = () => {
    const totalLessons = 20; 
    const completed = progress.completedLessons.length;
    const percent = Math.round((completed / totalLessons) * 100);
    
    return {
      completedLessons: progress.completedLessons,
      scores: progress.scores,
      percent,
      totalLessons,
      completedCount: completed
    };
  };

  const resetProgress = () => {
    if (!isLoggedIn) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userId = currentUser.email || currentUser.username || 'guest';
    
    setProgress({
      completedLessons: [],
      scores: {}
    });
    localStorage.removeItem(`fw_progress_${userId}`);
  };

  const value = {
    progress,
    loading,
    isLoggedIn,
    markLessonComplete,
    saveQuizScore,
    isLessonCompleted,
    getLessonScore,
    getOverallProgress,
    resetProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};