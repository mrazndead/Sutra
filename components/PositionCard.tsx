import React from 'react';
import { Position, Difficulty } from '../types';
import { CATEGORY_COLORS, DIFFICULTY_COLORS } from '../constants';

interface PositionCardProps {
  position: Position;
  isCompleted: boolean;
  isFavorite: boolean;
  onToggleComplete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onUpdatePosition: (position: Position) => void;
}

export const PositionCard: React.FC<PositionCardProps> = ({
  position,
  isCompleted,
  isFavorite,
  onToggleComplete,
  onToggleFavorite,
  onUpdatePosition
}) => {
  
  const handleGoogleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    const query = encodeURIComponent(`kamasutra position ${position.name} photo`);
    window.open(`https://www.google.com/search?q=${query}&tbm=isch`, '_blank');
  };

  return (
    <div className={`
      relative overflow-hidden rounded-xl shadow-lg transition-all duration-300
      ${isCompleted ? 'bg-slate-800 border-2 border-green-500/50' : 'bg-brand-card border border-slate-700'}
      hover:shadow-2xl hover:-translate-y-1 group
    `}>
      {/* Image Header */}
      <div className="h-56 w-full relative bg-brand-dark flex items-center justify-center overflow-hidden">
        
        {/* Real Photo / AI Generated */}
        <img 
            src={position.imageUrl} 
            alt={position.name} 
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${isCompleted ? 'grayscale opacity-40' : 'opacity-100'}`}
            onError={(e) => {
                // Fallback if AI image fails
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/600x400/1e293b/FFF?text=${encodeURIComponent(position.name)}`;
            }}
        />

        {/* Gradient Overlay for Text Readability */}
        <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-card via-black/20 to-transparent ${isCompleted ? 'opacity-90' : 'opacity-70'}`} />
        
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end z-20">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${CATEGORY_COLORS[position.category]} text-white mb-1.5 inline-block shadow-sm`}>
              {position.category}
            </span>
            <h3 className="text-xl font-bold text-white leading-tight shadow-black drop-shadow-md">
              {position.name}
            </h3>
          </div>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute top-3 right-3 flex gap-2 z-20">
            <button
                onClick={(e) => { e.stopPropagation(); onToggleFavorite(position.id); }}
                className={`p-2 rounded-full backdrop-blur-md transition-colors shadow-lg ${isFavorite ? 'bg-brand-rose text-white' : 'bg-black/30 text-white hover:bg-brand-rose/50'}`}
                title="Favorite"
            >
                <i className={`${isFavorite ? 'fas' : 'far'} fa-heart`}></i>
            </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center text-sm">
           <span className={`${DIFFICULTY_COLORS[position.difficulty]} font-medium flex items-center gap-1`}>
             <i className="fas fa-signal text-xs"></i> {position.difficulty}
           </span>
           <button 
             onClick={handleGoogleSearch}
             className="text-xs text-slate-400 hover:text-brand-gold flex items-center gap-1 transition-colors"
           >
             <i className="fas fa-external-link-alt"></i> Search
           </button>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed h-14 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 pr-1">
          {position.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-2">
          {position.tags.map(tag => (
            <span key={tag} className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
              #{tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => onToggleComplete(position.id)}
          className={`
            w-full mt-4 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2
            ${isCompleted 
              ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]' 
              : 'bg-slate-700 text-slate-200 hover:bg-brand-rose hover:text-white'}
          `}
        >
          {isCompleted ? (
            <>
              <i className="fas fa-check-circle"></i> Completed
            </>
          ) : (
            <>
              <i className="far fa-circle"></i> Mark Complete
            </>
          )}
        </button>
      </div>
    </div>
  );
};