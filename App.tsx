import React, { useState, useEffect, useCallback } from 'react';
import { Position, Difficulty, Category, ClimaxGoal } from './types';
import { INITIAL_POSITIONS } from './constants';
import { PositionArt } from './components/PositionArt';
import { Oracle } from './components/Oracle';

// --- Types ---
type AppState = 'SETUP' | 'ACTIVE' | 'COMPLETION';

interface Filters {
  categories: Category[];
  difficulties: Difficulty[];
  climaxGoals: ClimaxGoal[];
  durationPerPosition: number; // in minutes
}

// --- Helper Functions ---
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// --- Components ---

const SetupScreen: React.FC<{
  onStart: (filters: Filters) => void;
  currentPositions: Position[];
  onNewPosition: (p: Position) => void;
}> = ({ onStart, currentPositions, onNewPosition }) => {
  const [selectedCats, setSelectedCats] = useState<Category[]>([]);
  const [selectedDiffs, setSelectedDiffs] = useState<Difficulty[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<ClimaxGoal[]>([]);
  const [duration, setDuration] = useState<number>(10);

  const toggleCat = (c: Category) => {
    setSelectedCats(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const toggleDiff = (d: Difficulty) => {
    setSelectedDiffs(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  };

  const toggleGoal = (g: ClimaxGoal) => {
    setSelectedGoals(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
  };

  const handleStart = () => {
    onStart({ 
      categories: selectedCats, 
      difficulties: selectedDiffs,
      climaxGoals: selectedGoals,
      durationPerPosition: duration
    });
  };

  // Helper arrays
  const allGoals: ClimaxGoal[] = ['Intimacy', 'Deep Penetration', 'Clitoral', 'Visual', 'G-Spot', 'Power', 'Oral Pleasure', 'Control'];
  const durationOptions = [5, 10, 15, 20];

  const isValid = selectedCats.length > 0 || selectedDiffs.length > 0 || selectedGoals.length > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-brand-dark text-white max-w-lg mx-auto text-center relative">
      <div className="mb-6 z-10">
        <i className="fas fa-scroll text-5xl text-brand-rose mb-4 animate-pulse inline-block"></i>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-rose to-brand-gold tracking-tight">
          Sutra Quest
        </h1>
        <p className="text-slate-400 text-sm mt-2">Choose your path to pleasure.</p>
      </div>

      <div className="w-full space-y-8 overflow-y-auto max-h-[70vh] px-1 pb-4 scrollbar-thin scrollbar-thumb-slate-700 z-10">
        
        {/* Duration */}
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
           <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3 flex items-center justify-center gap-2">
             <i className="fas fa-hourglass-half"></i> Time per Position
           </h3>
           <div className="flex justify-center gap-2">
             {durationOptions.map(m => (
               <button
                 key={m}
                 onClick={() => setDuration(m)}
                 className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                   duration === m 
                   ? 'bg-brand-gold text-brand-dark shadow-lg' 
                   : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                 }`}
               >
                 {m}m
               </button>
             ))}
           </div>
        </div>

        {/* Goals */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">Quest Goal</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {allGoals.map(goal => (
              <button
                key={goal}
                onClick={() => toggleGoal(goal)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  selectedGoals.includes(goal)
                    ? 'bg-red-500/20 border-red-500 text-red-200'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">Preferred Types</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.values(Category).map(cat => (
              <button
                key={cat}
                onClick={() => toggleCat(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  selectedCats.includes(cat)
                    ? 'bg-blue-500/20 border-blue-500 text-blue-200'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Intensity */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">Intensity Level</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.values(Difficulty).filter(d => d !== Difficulty.Expert).map(diff => (
              <button
                key={diff}
                onClick={() => toggleDiff(diff)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  selectedDiffs.includes(diff)
                    ? 'bg-purple-500/20 border-purple-500 text-purple-200'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

      </div>

      <button
        onClick={handleStart}
        className={`w-full py-4 rounded-xl font-bold text-lg mt-6 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl z-10 ${
          isValid
            ? 'bg-gradient-to-r from-brand-rose to-purple-600 text-white hover:scale-[1.02]'
            : 'bg-slate-800 text-slate-600'
        }`}
      >
        {isValid ? (
            <>Begin Quest <i className="fas fa-dragon"></i></>
        ) : (
            <>Explore All <i className="fas fa-dice"></i></>
        )}
      </button>

      <Oracle currentPositions={currentPositions} onNewPosition={onNewPosition} />
    </div>
  );
};

const ActiveSession: React.FC<{
  position: Position;
  durationMinutes: number;
  onNext: () => void;
  onStop: () => void;
}> = ({ position, durationMinutes, onNext, onStop }) => {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [isPaused, setIsPaused] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (isPaused) return;
    
    // Reset timer when position changes
    setTimeLeft(durationMinutes * 60);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onNext(); // Auto-advance
          return durationMinutes * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [position.id, isPaused, onNext, durationMinutes]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = (timeLeft / (durationMinutes * 60)) * 100;

  // Generate flame icons for intensity
  const renderIntensity = (level: number) => {
    return (
      <div className="flex gap-1 text-orange-500" title={`Intensity: ${level}/5`}>
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fas fa-fire ${i < level ? 'opacity-100' : 'opacity-20 text-slate-500'}`}></i>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-white relative overflow-hidden">
      {/* Dynamic Art Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <PositionArt category={position.category} difficulty={position.difficulty} name={position.name} />
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800 z-30">
        <div 
            className="h-full bg-gradient-to-r from-brand-rose to-brand-gold transition-all duration-1000 ease-linear"
            style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Header */}
      <div className="p-4 flex justify-between items-center z-20 bg-brand-dark/50 backdrop-blur-sm sticky top-0">
        <button onClick={onStop} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium">
          <i className="fas fa-times"></i> End
        </button>
        <div className="font-mono text-2xl font-bold text-brand-gold tracking-widest tabular-nums shadow-black drop-shadow-md">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 pt-4 z-20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-lg mx-auto">
          
          <div className="space-y-3 w-full">
            <div className="flex justify-between items-center w-full px-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white border border-white/30 bg-black/30 px-2 py-0.5 rounded backdrop-blur">
                  {position.category}
                </span>
                {renderIntensity(position.intensity)}
            </div>
            
            <h2 className="text-4xl font-extrabold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {position.name}
            </h2>
          </div>

          <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 group">
             <img 
                src={position.imageUrl} 
                alt={position.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/1e293b/FFF?text=${encodeURIComponent(position.name)}`;
                }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          </div>

          <div className="w-full bg-slate-900/80 backdrop-blur-md rounded-xl p-5 text-left border border-slate-700/50 shadow-xl">
             <h3 className="text-xs font-bold text-brand-gold uppercase mb-3 flex items-center gap-2">
               <i className="fas fa-list-ol"></i> Instructions
             </h3>
             <ol className="space-y-4">
               {position.instructions.map((step, idx) => (
                 <li key={idx} className="flex gap-3 text-slate-200 text-sm leading-relaxed">
                   <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 text-brand-gold text-xs flex items-center justify-center font-bold mt-0.5 shadow-inner">
                     {idx + 1}
                   </span>
                   {step}
                 </li>
               ))}
             </ol>
          </div>

          <p className="text-sm italic text-slate-300 bg-black/40 p-3 rounded-lg backdrop-blur-sm">
            "{position.description}"
          </p>

          <div className="flex flex-wrap justify-center gap-2">
             {position.tags.map(t => (
                 <span key={t} className="text-[10px] bg-slate-800/80 border border-slate-600 px-2 py-1 rounded text-slate-400">#{t}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Controls Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent">
        <div className="flex gap-4 max-w-md mx-auto">
            <button 
                onClick={() => setIsPaused(!isPaused)}
                className="flex-1 py-4 bg-slate-800/90 backdrop-blur rounded-xl text-white font-bold hover:bg-slate-700 transition-colors border border-slate-700"
            >
                {isPaused ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}
            </button>
            <button 
                onClick={onNext}
                className="flex-[2] py-4 bg-brand-rose rounded-xl text-white font-bold shadow-lg shadow-brand-rose/20 hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
            >
                Next Position <i className="fas fa-forward"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

const CompletionScreen: React.FC<{
  onClimax: () => void;
  onContinue: () => void;
}> = ({ onClimax, onContinue }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-brand-dark text-white max-w-lg mx-auto text-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-rose/10 to-brand-dark"></div>
      
      <div className="relative z-10 space-y-8 w-full">
        <div className="space-y-2">
          <i className="fas fa-crown text-6xl text-brand-gold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] mb-4 animate-bounce"></i>
          <h2 className="text-3xl font-extrabold text-white">Quest Complete</h2>
          <p className="text-slate-400">You have reached the end of this path.</p>
        </div>

        <div className="py-8">
           <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-rose to-purple-400">
             Did you climax?
           </h3>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={onClimax}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-rose to-pink-600 text-white font-bold text-xl shadow-lg shadow-brand-rose/30 hover:scale-[1.02] transition-transform"
          >
            Yes, it was divine <i className="fas fa-sparkles ml-2"></i>
          </button>
          
          <button
            onClick={onContinue}
            className="w-full py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-bold text-lg hover:bg-slate-700 hover:text-white transition-colors"
          >
            Not yet, continue journey <i className="fas fa-redo ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App Logic ---

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('SETUP');
  const [allPositions, setAllPositions] = useState<Position[]>(INITIAL_POSITIONS);
  const [playlist, setPlaylist] = useState<Position[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(10);
  
  // Store last filters to allow seamless "Continue" functionality
  const [lastFilters, setLastFilters] = useState<Filters | null>(null);
  // Track IDs played in the current session (spanning multiple 'legs' if user continues)
  const [playedIds, setPlayedIds] = useState<Set<string>>(new Set());

  // Helper to score positions based on goals (for backfilling)
  const scorePosition = (p: Position, goals: ClimaxGoal[], filters?: Filters) => {
    let score = 0;
    // High value for direct goal matches
    p.climaxGoals.forEach(g => { if (goals.includes(g)) score += 5; });
    // Bonus for tags matching common goal archetypes
    if (goals.includes('Intimacy') && (p.tags.includes('Romantic') || p.tags.includes('Slow'))) score += 2;
    if (goals.includes('Power') && (p.tags.includes('Wild') || p.tags.includes('Active'))) score += 2;
    
    // Slight bonus if it matches other filter criteria (e.g. difficulty) even if it didn't match category
    if (filters && filters.difficulties.length > 0 && filters.difficulties.includes(p.difficulty)) score += 1;
    
    return score;
  };

  // Advanced Journey Builder
  const generateJourney = (candidates: Position[], goals: ClimaxGoal[]): Position[] => {
    // 1. Calculate Relevance Score
    const scoredCandidates = candidates.map(p => ({ 
        ...p, 
        score: scorePosition(p, goals) 
    }));

    // 2. Identify Journey Archetype based on goals
    const isPowerJourney = goals.includes('Power') || goals.includes('Deep Penetration');
    const isIntimacyJourney = goals.includes('Intimacy') || goals.includes('Oral Pleasure');
    const isVisualJourney = goals.includes('Visual') || goals.includes('Control');

    let finalJourney: typeof scoredCandidates = [];

    // 3. Construct the Path
    if (isPowerJourney && !isIntimacyJourney) {
        // Archetype: "The Ascent" (Easy to Hard)
        finalJourney = [...scoredCandidates].sort((a, b) => (a.intensity - b.intensity) || (b.score - a.score));
    } 
    else if (isIntimacyJourney && !isPowerJourney) {
        // Archetype: "The Deep Connection" (Lower intensity preferred, high relevance)
        finalJourney = [...scoredCandidates].sort((a, b) => (a.intensity - b.intensity) || (b.score - a.score));
    }
    else if (isVisualJourney) {
        // Archetype: "The Showcase" (High Relevance first)
        const sortedByScore = [...scoredCandidates].sort((a, b) => b.score - a.score);
        // Distribute "Stars" (top matches) throughout
        const stars = sortedByScore.slice(0, 3);
        const rest = shuffleArray(sortedByScore.slice(3));

        if (stars.length > 0) finalJourney.push(stars[0]); 
        if (rest.length > 0) finalJourney.push(...rest.slice(0, Math.ceil(rest.length / 2)));
        if (stars.length > 1) finalJourney.push(stars[1]); 
        if (rest.length > 0) finalJourney.push(...rest.slice(Math.ceil(rest.length / 2)));
        if (stars.length > 2) finalJourney.push(stars[2]); 
    } 
    else {
        // Archetype: "The Explorer" (Random)
        finalJourney = shuffleArray(scoredCandidates);
    }

    return finalJourney;
  };

  const getPaddedCandidates = (
      pool: Position[], 
      filterFn: (p: Position) => boolean, 
      climaxGoals: ClimaxGoal[],
      originalFilters: Filters
  ): Position[] => {
    // 1. Get exact matches from the pool (usually unplayed subset)
    let candidates = pool.filter(filterFn);

    // 2. If < 10, fill with high-scoring positions from the ENTIRE library (recycling if needed)
    if (candidates.length < 10) {
        const existingIds = new Set(candidates.map(c => c.id));
        const needed = 10 - candidates.length;
        
        // Find best matches from the entire INITIAL_POSITIONS list that aren't already selected
        const backups = INITIAL_POSITIONS.filter(p => !existingIds.has(p.id));
        
        // Sort backups by how well they match the current goals and filters
        const scoredBackups = backups.map(p => ({
            position: p,
            score: scorePosition(p, climaxGoals, originalFilters)
        })).sort((a, b) => b.score - a.score);

        // Take top N needed to fill the journey to 10
        const extras = scoredBackups.slice(0, needed).map(wrapper => wrapper.position);
        candidates = [...candidates, ...extras];
    }
    return candidates;
  };

  const handleStart = (filters: Filters) => {
    setLastFilters(filters);
    
    // Use all positions as the pool for a fresh start
    const candidates = getPaddedCandidates(
        allPositions,
        (p) => {
            const matchesCategory = filters.categories.length === 0 || filters.categories.includes(p.category);
            const matchesDiff = filters.difficulties.length === 0 || filters.difficulties.includes(p.difficulty);
            return matchesCategory && matchesDiff;
        },
        filters.climaxGoals,
        filters
    );

    if (candidates.length === 0) {
        alert("No positions found for these criteria. Try selecting more options.");
        return;
    }

    const curatedPlaylist = generateJourney(candidates, filters.climaxGoals);

    if (curatedPlaylist.length > 0) {
      setPlaylist(curatedPlaylist);
      setPlayedIds(new Set(curatedPlaylist.map(p => p.id)));
      setCurrentIndex(0);
      setSessionDuration(filters.durationPerPosition);
      setAppState('ACTIVE');
    }
  };

  const handleNext = useCallback(() => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setAppState('COMPLETION');
    }
  }, [currentIndex, playlist]);

  const handleStop = () => {
    setAppState('SETUP');
    setPlaylist([]);
    setPlayedIds(new Set());
    setCurrentIndex(0);
  };

  const handleClimaxSuccess = () => {
    setAppState('SETUP');
    setPlaylist([]);
    setPlayedIds(new Set());
    setCurrentIndex(0);
  };

  const handleContinueJourney = () => {
    if (!lastFilters) {
        setAppState('SETUP');
        return;
    }

    // 1. Identify unplayed positions available
    const unplayedPool = allPositions.filter(p => !playedIds.has(p.id));

    // 2. If completely out of unique positions in the entire deck, reset history
    if (unplayedPool.length === 0) { 
        alert("You have explored every known position! Reshuffling the deck for a fresh experience.");
        setPlayedIds(new Set()); 
        handleStart(lastFilters); 
        return;
    }

    // 3. Get candidates from unplayed pool, padding with recycled favorites if necessary to reach 10
    const candidates = getPaddedCandidates(
        unplayedPool,
        (p) => {
            const matchesCategory = lastFilters.categories.length === 0 || lastFilters.categories.includes(p.category);
            const matchesDiff = lastFilters.difficulties.length === 0 || lastFilters.difficulties.includes(p.difficulty);
            return matchesCategory && matchesDiff;
        },
        lastFilters.climaxGoals,
        lastFilters
    );

    // 4. Generate Journey
    const nextPlaylist = generateJourney(candidates, lastFilters.climaxGoals);

    if (nextPlaylist.length > 0) {
        setPlaylist(nextPlaylist);
        setPlayedIds(prev => {
            const next = new Set(prev);
            nextPlaylist.forEach(p => next.add(p.id));
            return next;
        });
        setCurrentIndex(0);
        setAppState('ACTIVE');
    } else {
        // Fallback
        alert("Unable to generate a new journey.");
        setAppState('SETUP');
    }
  };

  const handleNewPosition = (pos: Position) => {
    setAllPositions(prev => [...prev, pos]);
  };

  return (
    <div className="antialiased">
      {appState === 'SETUP' && (
        <SetupScreen 
          onStart={handleStart} 
          currentPositions={allPositions}
          onNewPosition={handleNewPosition}
        />
      )}
      
      {appState === 'ACTIVE' && playlist[currentIndex] && (
        <ActiveSession 
            position={playlist[currentIndex]} 
            durationMinutes={sessionDuration}
            onNext={handleNext} 
            onStop={handleStop}
        />
      )}

      {appState === 'COMPLETION' && (
        <CompletionScreen 
            onClimax={handleClimaxSuccess} 
            onContinue={handleContinueJourney} 
        />
      )}
    </div>
  );
};

export default App;