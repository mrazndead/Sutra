import React, { useMemo } from 'react';
import { Category, Difficulty } from '../types';

interface PositionArtProps {
  category: Category;
  difficulty: Difficulty;
  name: string;
}

export const PositionArt: React.FC<PositionArtProps> = ({ category, difficulty, name }) => {
  // Deterministic random number generator based on string seed
  const pseudoRandom = (seed: string) => {
    let value = 0;
    for (let i = 0; i < seed.length; i++) {
      value += seed.charCodeAt(i);
    }
    return Math.sin(value) * 10000 - Math.floor(Math.sin(value) * 10000);
  };

  const artConfig = useMemo(() => {
    const seed = name + category;
    const rng = (offset: number) => pseudoRandom(seed + offset);
    
    // Base colors per category (using Tailwind-ish hex codes)
    const categoryColors: Record<Category, { from: string; to: string; shape: 'circle' | 'rect' | 'triangle' | 'wave' }> = {
      [Category.FaceToFace]: { from: '#3b82f6', to: '#1d4ed8', shape: 'circle' }, // Blue
      [Category.RearEntry]: { from: '#a855f7', to: '#7e22ce', shape: 'rect' }, // Purple
      [Category.Standing]: { from: '#22c55e', to: '#15803d', shape: 'rect' }, // Green
      [Category.Oral]: { from: '#ec4899', to: '#be185d', shape: 'wave' }, // Pink
      [Category.SideBySide]: { from: '#14b8a6', to: '#0f766e', shape: 'wave' }, // Teal
      [Category.Acrobatic]: { from: '#f97316', to: '#c2410c', shape: 'triangle' }, // Orange
      [Category.Other]: { from: '#64748b', to: '#475569', shape: 'circle' }, // Slate
    };

    const config = categoryColors[category];
    
    // Generate abstract shapes
    const shapes = Array.from({ length: 5 }).map((_, i) => {
      const scale = 0.5 + rng(i) * 1.5;
      const x = rng(i + 10) * 100;
      const y = rng(i + 20) * 100;
      const rotation = rng(i + 30) * 360;
      const opacity = 0.1 + rng(i + 40) * 0.3;
      
      return { scale, x, y, rotation, opacity };
    });

    return { ...config, shapes };
  }, [category, name]);

  return (
    <div 
      className="w-full h-full relative overflow-hidden bg-brand-dark"
      style={{
        background: `linear-gradient(135deg, ${artConfig.from}, ${artConfig.to})`
      }}
    >
      {/* Abstract Background Patterns */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {artConfig.shapes.map((shape, i) => (
          <g key={i} transform={`translate(${shape.x} ${shape.y}) rotate(${shape.rotation}) scale(${shape.scale})`}>
            {artConfig.shape === 'circle' && (
              <circle cx="0" cy="0" r="20" fill="white" fillOpacity={shape.opacity} />
            )}
            {artConfig.shape === 'rect' && (
              <rect x="-20" y="-20" width="40" height="40" rx="4" fill="white" fillOpacity={shape.opacity} />
            )}
            {artConfig.shape === 'triangle' && (
              <polygon points="0,-25 20,15 -20,15" fill="white" fillOpacity={shape.opacity} />
            )}
            {artConfig.shape === 'wave' && (
               <path d="M-25,0 Q0,-25 25,0 T75,0" stroke="white" strokeWidth="8" strokeOpacity={shape.opacity} fill="none" />
            )}
          </g>
        ))}
      </svg>
      
      {/* Center Icon/Glyph based on Difficulty */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
           <span className="text-4xl text-white/90 drop-shadow-md">
             {category === Category.FaceToFace && <i className="fas fa-user-friends"></i>}
             {category === Category.RearEntry && <i className="fas fa-paw"></i>}
             {category === Category.Standing && <i className="fas fa-male"></i>}
             {category === Category.Oral && <i className="fas fa-kiss-wink-heart"></i>}
             {category === Category.SideBySide && <i className="fas fa-equals"></i>}
             {category === Category.Acrobatic && <i className="fas fa-bolt"></i>}
             {category === Category.Other && <i className="fas fa-star"></i>}
           </span>
        </div>
      </div>
      
      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
};
