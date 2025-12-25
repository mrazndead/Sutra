import { Position, UserProgress } from '../types';
import { INITIAL_POSITIONS } from '../constants';

const STORAGE_KEY_POSITIONS = 'sutra_positions_v1';
const STORAGE_KEY_PROGRESS = 'sutra_progress_v1';

export const getStoredPositions = (): Position[] => {
  let storedPositions: Position[] = [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY_POSITIONS);
    if (stored) {
      storedPositions = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load positions", e);
  }

  // Create a map of stored positions for quick lookup
  const storedMap = new Map(storedPositions.map(p => [p.id, p]));
  
  // 1. Start with the source-of-truth INITIAL_POSITIONS
  // 2. Merge logic: If stored has a custom AI generated image (starts with data:), keep it. 
  //    Otherwise use the new INITIAL_POSITIONS URL which is guaranteed to be there.
  const mergedInitial = INITIAL_POSITIONS.map(initPos => {
    const stored = storedMap.get(initPos.id);
    if (stored && stored.imageUrl && stored.imageUrl.startsWith('data:')) {
      // Keep custom generated AI art (base64)
      return { ...initPos, imageUrl: stored.imageUrl };
    }
    // Default to the updated code's URL (overwrites old empty placeholders)
    return initPos;
  });

  // 3. Identify user-created custom positions (those not in INITIAL_POSITIONS)
  // We identify them because their IDs won't match any in the initial list.
  const initialIds = new Set(INITIAL_POSITIONS.map(p => p.id));
  const customPositions = storedPositions.filter(p => !initialIds.has(p.id));

  return [...mergedInitial, ...customPositions];
};

export const saveStoredPositions = (positions: Position[]) => {
  try {
    localStorage.setItem(STORAGE_KEY_POSITIONS, JSON.stringify(positions));
  } catch (e) {
    console.error("Failed to save positions", e);
  }
};

export const getStoredProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load progress", e);
  }
  return { completedIds: [], favorites: [] };
};

export const saveStoredProgress = (progress: UserProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress", e);
  }
};