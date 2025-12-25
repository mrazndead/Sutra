import React, { useState } from 'react';
import { suggestPosition } from '../services/geminiService';
import { Position } from '../types';

interface OracleProps {
  currentPositions: Position[];
  onNewPosition: (pos: Position) => void;
}

export const Oracle: React.FC<OracleProps> = ({ currentPositions, onNewPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSuggest = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    setError('');
    
    try {
      const result = await suggestPosition(mood, currentPositions);
      if (result) {
        onNewPosition(result);
        setMood('');
        setIsOpen(false);
      } else {
        setError("The Oracle remained silent. Please try again (Check API Key).");
      }
    } catch (e) {
      setError("Connection to the spirits failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-rose rounded-full shadow-[0_0_20px_rgba(225,29,72,0.6)] flex items-center justify-center text-white text-2xl z-50 hover:scale-110 transition-transform duration-300 animate-pulse"
      >
        <i className="fas fa-sparkles"></i>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-brand-card w-full max-w-md rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-rose to-brand-gold">
              Ask the Oracle
            </h2>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <p className="text-slate-300 mb-4">
            Tell us your mood, energy level, or desire, and the Oracle will reveal a new position for you.
          </p>

          <textarea
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="e.g., We are tired but want intimacy, or we want something acrobatic..."
            className="w-full bg-slate-900 text-white p-4 rounded-xl border border-slate-700 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose outline-none resize-none h-32 mb-4"
          />

          {error && (
            <p className="text-red-400 text-sm mb-4 bg-red-900/20 p-2 rounded">
              <i className="fas fa-exclamation-triangle mr-2"></i>{error}
            </p>
          )}

          <button
            onClick={handleSuggest}
            disabled={loading || !mood.trim()}
            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
              ${loading || !mood.trim() ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-brand-rose to-purple-600 text-white hover:shadow-lg hover:shadow-brand-rose/40'}
            `}
          >
            {loading ? (
              <><i className="fas fa-circle-notch fa-spin"></i> Divining...</>
            ) : (
              <><i className="fas fa-magic"></i> Reveal Position</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};