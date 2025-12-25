export enum Difficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert'
}

export enum Category {
  FaceToFace = 'Face to Face',
  RearEntry = 'Rear Entry',
  Standing = 'Standing',
  Oral = 'Oral',
  SideBySide = 'Side by Side',
  Acrobatic = 'Acrobatic',
  Other = 'Other'
}

export type ClimaxGoal = 'Intimacy' | 'Deep Penetration' | 'Clitoral' | 'Visual' | 'G-Spot' | 'Power' | 'Oral Pleasure' | 'Control';

export interface Position {
  id: string;
  name: string;
  description: string;
  instructions: string[]; // Detailed step-by-step
  difficulty: Difficulty;
  category: Category;
  tags: string[];
  imageUrl?: string;
  intensity: number; // 1-5 scale
  climaxGoals: ClimaxGoal[];
}

export interface UserProgress {
  completedIds: string[];
  favorites: string[];
}