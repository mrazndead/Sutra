import { Position, Difficulty, Category, ClimaxGoal } from './types';

// Helper to generate "Real Photo" style URLs
const getPhotoUrl = (positionName: string, id: number) => {
  const prompt = `cinematic shot of a couple in the ${positionName} romantic position, photorealistic, 4k, highly detailed, soft bedroom lighting, romantic atmosphere, intricate details, 35mm photography`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=600&height=400&nologo=true&seed=${id}&model=flux`;
};

export const INITIAL_POSITIONS: Position[] = [
  {
    id: 'pos-1',
    name: 'Missionary',
    description: 'The classic face-to-face position allowing for maximum intimacy.',
    instructions: [
      'Receiver lies flat on their back, legs slightly apart.',
      'Partner positions themselves on top, supporting their weight on hands or elbows.',
      'Partner enters while maintaining eye contact.',
      'Adjust leg position (flat, raised, or wrapped around partner) to vary depth.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Classic', 'Romantic', 'Intimate'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('Missionary', 101)
  },
  {
    id: 'pos-2',
    name: 'Doggy Style',
    description: 'A primal rear-entry position allowing for deep penetration.',
    instructions: [
      'Receiver gets on hands and knees.',
      'Partner approaches from behind and enters.',
      'Receiver can arch their back to increase depth or lower chest to bed for comfort.',
      'Partner can hold receiver’s hips for leverage and rhythm.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.RearEntry,
    tags: ['Classic', 'Deep', 'Wild'],
    intensity: 4,
    climaxGoals: ['Deep Penetration', 'G-Spot', 'Visual'],
    imageUrl: getPhotoUrl('Doggy Style', 102)
  },
  {
    id: 'pos-3',
    name: 'Cowgirl',
    description: 'Receiver takes control on top, determining pace and depth.',
    instructions: [
      'Partner lies flat on their back.',
      'Receiver straddles partner, facing them.',
      'Receiver lowers themselves slowly onto partner.',
      'Receiver uses their knees or feet for support to bounce or grind.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Control', 'Visual', 'Pleasure'],
    intensity: 3,
    climaxGoals: ['Visual', 'Clitoral', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Cowgirl on top', 103)
  },
  {
    id: 'pos-4',
    name: 'Reverse Cowgirl',
    description: 'Receiver is on top facing away, offering a spectacular view.',
    instructions: [
      'Partner lies on their back.',
      'Receiver straddles partner but faces towards partner’s feet.',
      'Receiver leans forward (hands on partner’s legs) for stability or leans back for depth.',
      'Great for stimulating the G-spot due to the angle of entry.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.RearEntry,
    tags: ['Visual', 'Deep', 'Exciting'],
    intensity: 4,
    climaxGoals: ['Visual', 'G-Spot', 'Power'],
    imageUrl: getPhotoUrl('Reverse Cowgirl on top', 104)
  },
  {
    id: 'pos-5',
    name: 'Spooning',
    description: 'Lazy, comfortable intimacy perfect for morning sessions.',
    instructions: [
      'Both partners lie on their sides, facing the same direction.',
      'Receiver backs into partner.',
      'Partner enters from behind, wrapping arms around receiver.',
      'Bend knees slightly to improve access and stability.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.SideBySide,
    tags: ['Relaxed', 'Comfortable', 'Morning'],
    intensity: 1,
    climaxGoals: ['Intimacy', 'G-Spot'],
    imageUrl: getPhotoUrl('Spooning couple cuddling', 105)
  },
  {
    id: 'pos-6',
    name: 'The Lotus',
    description: 'A tantric position for deep connection and slow grinding.',
    instructions: [
      'Partner sits cross-legged (or with legs extended) on the bed.',
      'Receiver sits on partner’s lap, wrapping legs around partner’s waist.',
      'Partners embrace tightly, aligning chests and breathing.',
      'Movement is minimal; focus on rocking hips and grinding.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Intimate', 'Slow', 'Tantric'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('The Lotus sexual position sitting face to face', 106)
  },
  {
    id: 'pos-7',
    name: 'The Bridge',
    description: 'An active position that requires core strength and flexibility.',
    instructions: [
      'Receiver lies on back, bends knees, and plants feet on bed.',
      'Receiver lifts hips high into a bridge pose.',
      'Partner kneels between receiver’s legs and enters.',
      'Receiver can support their lower back with their hands if needed.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Other,
    tags: ['Active', 'Angle', 'Core'],
    intensity: 5,
    climaxGoals: ['Power', 'Deep Penetration'],
    imageUrl: getPhotoUrl('The Bridge yoga sexual position', 107)
  },
  {
    id: 'pos-8',
    name: 'Standing Wheelbarrow',
    description: 'A challenging position requiring strength and balance.',
    instructions: [
      'Receiver starts on hands and knees.',
      'Partner stands behind and lifts receiver’s legs, holding them at the waist or thighs.',
      'Receiver supports weight on hands (like a push-up position).',
      'Partner enters from behind while standing.'
    ],
    difficulty: Difficulty.Expert,
    category: Category.Acrobatic,
    tags: ['Strength', 'Fun', 'Challenging'],
    intensity: 5,
    climaxGoals: ['Power', 'Deep Penetration', 'Visual'],
    imageUrl: getPhotoUrl('Standing Wheelbarrow sexual position', 108)
  },
  {
    id: 'pos-9',
    name: 'The Butterfly',
    description: 'Receiver lies on edge of bed, allowing deep access.',
    instructions: [
      'Receiver lies on back near the edge of the bed.',
      'Receiver lifts legs and rests feet on partner’s shoulders.',
      'Partner stands or kneels at the edge and enters.',
      'This angle allows for very deep penetration.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Deep', 'View', 'Intense'],
    intensity: 4,
    climaxGoals: ['Deep Penetration', 'G-Spot'],
    imageUrl: getPhotoUrl('The Butterfly sexual position legs up', 109)
  },
  {
    id: 'pos-10',
    name: 'The Amazon',
    description: 'Receiver squats over partner for maximum power.',
    instructions: [
      'Partner lies on their back with knees bent.',
      'Receiver squats over partner, facing them.',
      'Receiver lowers down, keeping feet flat on the bed for leverage.',
      'Receiver controls the rhythm with powerful thigh movements.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Power', 'Control', 'Bouncy'],
    intensity: 4,
    climaxGoals: ['Power', 'Visual', 'Clitoral'],
    imageUrl: getPhotoUrl('The Amazon sexual position woman on top squatting', 110)
  },
  {
    id: 'pos-11',
    name: 'Flat Doggy',
    description: 'A friction-heavy variation of rear entry.',
    instructions: [
      'Receiver lies flat on their stomach.',
      'Partner lies on top of receiver’s back.',
      'Partner enters from behind.',
      'The straight legs create a tight sensation and high friction.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.RearEntry,
    tags: ['Tight', 'Sensual', 'Grinding'],
    intensity: 3,
    climaxGoals: ['Intimacy', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Flat Doggy style lying prone', 111)
  },
  {
    id: 'pos-12',
    name: 'The Seashell',
    description: 'Maximum depth achieved by folding the body.',
    instructions: [
      'Receiver lies on back.',
      'Receiver pulls legs back, bringing knees towards ears/shoulders.',
      'Partner enters from above, leaning into the receiver.',
      'Start slowly as this exposes the cervix directly.'
    ],
    difficulty: Difficulty.Advanced,
    category: Category.Acrobatic,
    tags: ['Flexible', 'Deep', 'Stretch'],
    intensity: 5,
    climaxGoals: ['Deep Penetration', 'G-Spot'],
    imageUrl: getPhotoUrl('The Seashell sexual position legs folded back', 112)
  },
  {
    id: 'pos-13',
    name: 'Side-by-Side 69',
    description: 'Mutual oral stimulation in a relaxed posture.',
    instructions: [
      'Partners lie on their sides facing each other.',
      'One partner slides down so their head aligns with the other’s genitals.',
      'Both partners engage in oral stimulation simultaneously.',
      'Use hands to explore the rest of the body.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Oral,
    tags: ['Oral', 'Mutual', 'Equal'],
    intensity: 3,
    climaxGoals: ['Oral Pleasure', 'Intimacy'],
    imageUrl: getPhotoUrl('69 position lying on side', 113)
  },
  {
    id: 'pos-14',
    name: 'The CAT (Coital Alignment)',
    description: 'A subtle grinding technique for clitoral stimulation.',
    instructions: [
      'Begin in missionary position.',
      'Partner slides body higher up so base of penis grinds against clitoris.',
      'Instead of thrusting in and out, focus on a rocking, grinding pressure.',
      'Maintain continuous contact with the pelvic bone.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Grinding', 'Sensation', 'Rhythm'],
    intensity: 2,
    climaxGoals: ['Clitoral', 'Intimacy'],
    imageUrl: getPhotoUrl('Coital Alignment Technique missionary', 114)
  },
  {
    id: 'pos-15',
    name: 'The Lap Dance',
    description: 'Relaxed seated intimacy.',
    instructions: [
      'Partner sits on a sturdy chair or edge of bed.',
      'Receiver straddles partner, facing them.',
      'Receiver wraps arms around partner’s neck.',
      'Receiver controls depth by lifting and lowering hips.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.Other,
    tags: ['Relaxed', 'Intimate', 'Easy'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Control'],
    imageUrl: getPhotoUrl('Lap Dance sitting on chair couple', 115)
  },
  {
    id: 'pos-16',
    name: 'The Waterfall',
    description: 'Intense sensation using gravity.',
    instructions: [
      'Receiver lies near edge of bed.',
      'Receiver slides upper body off the edge so head hangs upside down.',
      'Partner stands or kneels at the edge and enters.',
      'Do not hold this position for too long to avoid too much blood rushing to head.'
    ],
    difficulty: Difficulty.Advanced,
    category: Category.Acrobatic,
    tags: ['Rush', 'Intense', 'Exotic'],
    intensity: 4,
    climaxGoals: ['Deep Penetration', 'Visual'],
    imageUrl: getPhotoUrl('The Waterfall position head hanging off bed', 116)
  },
  {
    id: 'pos-17',
    name: 'The Pretzel',
    description: 'Complex limb entanglement for close contact.',
    instructions: [
      'Partners lie on their sides facing each other.',
      'Receiver lifts top leg and wraps it over partner’s waist.',
      'Partner wraps their top leg over receiver’s top leg.',
      'Use arms to pull each other closer for deep friction.'
    ],
    difficulty: Difficulty.Advanced,
    category: Category.SideBySide,
    tags: ['Tangle', 'Close', 'Complex'],
    intensity: 3,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('The Pretzel sexual position tangled legs', 117)
  },
  {
    id: 'pos-18',
    name: 'Standing Dragon',
    description: 'A quick and powerful standing rear entry.',
    instructions: [
      'Receiver stands and bends over a dresser or leans hands against a wall.',
      'Receiver arches back slightly.',
      'Partner stands behind and enters.',
      'Adjust height differences by spreading legs or using a small stool.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Standing,
    tags: ['Rear', 'Quickie', 'Power'],
    intensity: 4,
    climaxGoals: ['Deep Penetration', 'Power'],
    imageUrl: getPhotoUrl('Standing Doggy style position', 118)
  },
  {
    id: 'pos-19',
    name: 'The Ballet Dancer',
    description: 'Elegant standing position requiring balance.',
    instructions: [
      'Partners stand face to face.',
      'Receiver lifts one leg and wraps it high around partner’s waist.',
      'Partner holds receiver’s raised thigh for support.',
      'Partner enters while balancing on one leg (or leaning against wall).'
    ],
    difficulty: Difficulty.Advanced,
    category: Category.Standing,
    tags: ['Balance', 'Elegant', 'Spontaneous'],
    intensity: 4,
    climaxGoals: ['Intimacy', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Standing sex position one leg wrapped', 119)
  },
  {
    id: 'pos-20',
    name: 'The Snow Angel',
    description: 'A diagonal twist on missionary.',
    instructions: [
      'Receiver lies flat on back.',
      'Partner gets on top but angles their body 45 degrees to the side.',
      'Bodies form an "X" shape.',
      'This angle stimulates the vaginal walls differently than standard missionary.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Friction', 'Simple', 'Angle'],
    intensity: 2,
    climaxGoals: ['G-Spot', 'Intimacy'],
    imageUrl: getPhotoUrl('Missionary position bodies angled like X', 120)
  },
  {
    id: 'pos-21',
    name: 'Leap Frog',
    description: 'Rear entry with a tighter angle.',
    instructions: [
      'Receiver gets on hands and knees.',
      'Receiver lowers upper body/chest completely to the mattress (Puppy Pose).',
      'Hips remain high in the air.',
      'Partner enters from behind; the downward angle hits the G-spot.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.RearEntry,
    tags: ['Angle', 'Deep', 'Comfortable'],
    intensity: 3,
    climaxGoals: ['G-Spot', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Puppy pose sexual position', 121)
  },
  {
    id: 'pos-22',
    name: 'Face-Off',
    description: 'Seated intimacy without eye contact.',
    instructions: [
      'Partner sits on edge of bed with feet on floor.',
      'Receiver sits on partner’s lap facing away from them.',
      'Receiver leans back against partner’s chest.',
      'Partner can reach around to stimulate receiver manually.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Other,
    tags: ['Lazy', 'Deep', 'Support'],
    intensity: 2,
    climaxGoals: ['Clitoral', 'Intimacy'],
    imageUrl: getPhotoUrl('Sitting on lap facing away sex position', 122)
  },
  {
    id: 'pos-23',
    name: 'Splitting Bamboo',
    description: 'Asymmetrical leg position for deep stretching.',
    instructions: [
      'Receiver lies on back.',
      'Partner lifts one of receiver’s legs and rests it high on their shoulder.',
      'The other leg remains flat or bent on the bed.',
      'Partner enters; the asymmetry targets specific internal spots.'
    ],
    difficulty: Difficulty.Advanced,
    category: Category.Acrobatic,
    tags: ['Deep', 'Stretch', 'Asymmetrical'],
    intensity: 4,
    climaxGoals: ['Deep Penetration', 'G-Spot'],
    imageUrl: getPhotoUrl('Sex position one leg on shoulder', 123)
  },
  {
    id: 'pos-24',
    name: 'The Magic Mountain',
    description: 'Using partner’s legs for back support.',
    instructions: [
      'Partner sits with legs bent, feet flat, creating a "mountain" with knees.',
      'Receiver sits on partner’s lap, facing them, leaning back against partner’s raised thighs.',
      'Provides great stability and view.',
      'Allows receiver to grind effectively.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Support', 'View', 'Grinding'],
    intensity: 3,
    climaxGoals: ['Visual', 'Clitoral'],
    imageUrl: getPhotoUrl('Magic Mountain sexual position sitting', 124)
  },
  {
    id: 'pos-25',
    name: 'The Valet',
    description: 'Standing rear entry with support.',
    instructions: [
      'Receiver stands facing a table or counter.',
      'Receiver bends forward at the waist, resting elbows on surface.',
      'Partner stands behind and enters.',
      'Receiver can arch back to adjust depth.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.Standing,
    tags: ['Standing', 'Easy', 'Supported'],
    intensity: 3,
    climaxGoals: ['Deep Penetration', 'G-Spot'],
    imageUrl: getPhotoUrl('Standing sex position bending over table', 125)
  },
  {
    id: 'pos-26',
    name: 'The Padlock',
    description: 'Tight connection with legs wrapped.',
    instructions: [
      'Start in missionary position.',
      'Receiver wraps legs tightly around the small of partner’s back.',
      'Partner leans forward to embrace receiver.',
      'This limits depth but maximizes surface friction and intimacy.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Tight', 'Friction', 'Connection'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('Missionary position legs wrapped around back', 126)
  },
  {
    id: 'pos-27',
    name: 'The Plough',
    description: 'Advanced yoga-based inversion.',
    instructions: [
      'Receiver lies on back and lifts legs up and over head (toes touching bed behind head).',
      'This creates a very tight entry angle.',
      'Partner enters from behind/above.',
      'Use caution with the neck in this position.'
    ],
    difficulty: Difficulty.Expert,
    category: Category.Acrobatic,
    tags: ['Stretch', 'Expert', 'Yoga'],
    intensity: 5,
    climaxGoals: ['Deep Penetration', 'Power'],
    imageUrl: getPhotoUrl('The Plough yoga sexual position', 127)
  },
  {
    id: 'pos-28',
    name: 'The Corkscrew',
    description: 'Twisting hips for unique friction.',
    instructions: [
      'Partners lie side-by-side facing each other.',
      'Receiver brings top leg over partner.',
      'Both partners twist hips slightly away from mattress.',
      'Thighs become interlaced, creating tight pressure during movement.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.SideBySide,
    tags: ['Twist', 'Unique', 'Hip'],
    intensity: 3,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('Couple lying side by side legs interlaced', 128)
  },
  {
    id: 'pos-29',
    name: 'The G-Whiz',
    description: 'Elevated legs for targeted stimulation.',
    instructions: [
      'Receiver lies on back.',
      'Receiver lifts legs straight up and crosses them at the ankles.',
      'Partner kneels and enters.',
      'The crossed legs tighten the vaginal canal and target the G-spot.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Angle', 'Targeted', 'Stimulation'],
    intensity: 3,
    climaxGoals: ['G-Spot', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Missionary position legs crossed at ankles high', 129)
  },
  {
    id: 'pos-30',
    name: 'Use Your Head',
    description: 'Classic mutual oral pleasure.',
    instructions: [
      'Partner lies flat on back.',
      'Receiver lies on top, but reversed (facing feet).',
      'Receiver aligns their genitals with partner’s mouth.',
      'Alternatively, perform side-by-side for less neck strain.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Oral,
    tags: ['Oral', 'Classic', 'Give & Take'],
    intensity: 2,
    climaxGoals: ['Oral Pleasure', 'Intimacy'],
    imageUrl: getPhotoUrl('69 position romantic', 130)
  },
  {
    id: 'pos-31',
    name: 'The Anvil',
    description: 'Intense depth by resting legs on shoulders.',
    instructions: [
      'Receiver lies on back and lifts legs high.',
      'Receiver rests calves or ankles on partner’s shoulders.',
      'Partner kneels and enters deeply.',
      'Receiver can hold partner’s hands for support.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Deep', 'Classic', 'Intense'],
    intensity: 4,
    climaxGoals: ['Deep Penetration', 'G-Spot'],
    imageUrl: getPhotoUrl('The Anvil sex position legs on shoulders', 131)
  },
  {
    id: 'pos-32',
    name: 'The Pinball',
    description: 'A curled-up variation for comfort and depth.',
    instructions: [
      'Receiver curls up on their side in a fetal position.',
      'Partner enters from behind, curving their body around receiver.',
      'Offers deep intimacy and skin contact.',
      'Great for slow, rhythmic movement.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.RearEntry,
    tags: ['Cozy', 'Deep', 'Slow'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Couple spooning tight fetal position', 132)
  },
  {
    id: 'pos-33',
    name: 'The Chairman',
    description: 'Intimacy on the edge.',
    instructions: [
      'Partner sits on a chair or edge of the bed.',
      'Receiver sits on partner’s lap facing them.',
      'Receiver wraps legs around partner’s waist.',
      'Allows for deep eye contact and kissing.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.Other,
    tags: ['Seated', 'Intimate', 'Kissing'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('Couple sitting on chair facing each other', 133)
  },
  {
    id: 'pos-34',
    name: 'The Standing Split',
    description: 'One leg elevated for standing pleasure.',
    instructions: [
      'Partners stand facing each other.',
      'Receiver lifts one leg high, resting it on partner’s shoulder or hip.',
      'Partner supports the leg and enters.',
      'Use a wall for balance if needed.'
    ],
    difficulty: Difficulty.Advanced,
    category: Category.Standing,
    tags: ['Flexible', 'Standing', 'Challenging'],
    intensity: 4,
    climaxGoals: ['Deep Penetration', 'Visual'],
    imageUrl: getPhotoUrl('Standing sex position one leg high', 134)
  },
  {
    id: 'pos-35',
    name: 'The Deckchair',
    description: 'Relaxed rear entry with back support.',
    instructions: [
      'Partner sits with legs extended.',
      'Receiver sits between partner’s legs, facing away.',
      'Receiver leans back against partner’s chest.',
      'Partner enters from behind.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.RearEntry,
    tags: ['Relaxed', 'Lazy', 'Support'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'G-Spot'],
    imageUrl: getPhotoUrl('Sitting rear entry leaning back', 135)
  },
  {
    id: 'pos-36',
    name: 'The Frog',
    description: 'Wide legged missionary variation.',
    instructions: [
      'Receiver lies on back and brings feet together, knees dropping open (butterfly stretch).',
      'Partner enters from the front.',
      'Allows for close body contact and pelvic grinding.',
      'Great for clitoral stimulation.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Grinding', 'Open', 'Sensual'],
    intensity: 2,
    climaxGoals: ['Clitoral', 'Intimacy'],
    imageUrl: getPhotoUrl('Missionary position frog legs', 136)
  },
  {
    id: 'pos-37',
    name: 'The Octopus',
    description: 'Full body entanglement.',
    instructions: [
      'Start in the Lotus position (seated face-to-face).',
      'Wrap arms and legs tightly around each other.',
      'Rock back and forth rather than thrusting.',
      'Focus on the feeling of being one entity.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Tantric', 'Connected', 'Hug'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Control'],
    imageUrl: getPhotoUrl('Couple entangled arms and legs seated', 137)
  },
  {
    id: 'pos-38',
    name: 'The Lazy Man',
    description: 'Partner relaxes while receiver does the work.',
    instructions: [
      'Partner sits on a chair or edge of bed, leaning back on hands.',
      'Receiver straddles partner.',
      'Receiver controls all movement.',
      'Partner can enjoy the view and touch.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Visual', 'Easy', 'Control'],
    intensity: 2,
    climaxGoals: ['Visual', 'Control'],
    imageUrl: getPhotoUrl('Woman straddling man sitting edge of bed', 138)
  },
  {
    id: 'pos-39',
    name: 'The Crab',
    description: 'Inverted table-top position.',
    instructions: [
      'Receiver sits on bed, hands behind back, and lifts hips (crab walk position).',
      'Partner kneels between receiver’s legs and enters.',
      'Requires arm strength from receiver.',
      'Offers a unique angle of entry.'
    ],
    difficulty: Difficulty.Advanced,
    category: Category.Acrobatic,
    tags: ['Strength', 'Unique', 'Core'],
    intensity: 5,
    climaxGoals: ['Power', 'Visual'],
    imageUrl: getPhotoUrl('Crab walk sexual position', 139)
  },
  {
    id: 'pos-40',
    name: 'The Spork',
    description: 'Diagonal side-by-side.',
    instructions: [
      'Partners lie side-by-side but slightly angled.',
      'Receiver lifts top leg and hooks it over partner’s hip.',
      'Allows for shallow, teasing penetration.',
      'Good for prolonged sessions.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.SideBySide,
    tags: ['Teasing', 'Slow', 'Gentle'],
    intensity: 1,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('Couple lying diagonal legs hooked', 140)
  },
  {
    id: 'pos-41',
    name: 'The Eagle',
    description: 'Full spread missionary.',
    instructions: [
      'Receiver lies on back and spreads legs wide and straight.',
      'Partner kneels and enters.',
      'Partner holds receiver’s legs open for stability.',
      'Provides a very clear view for the partner.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Visual', 'Open', 'Deep'],
    intensity: 3,
    climaxGoals: ['Visual', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Missionary position legs spread wide', 141)
  },
  {
    id: 'pos-42',
    name: 'The Iron Chef',
    description: 'Kitchen counter spontaneity.',
    instructions: [
      'Receiver sits on a sturdy counter or table.',
      'Partner stands between receiver’s legs.',
      'Receiver wraps legs around partner’s waist.',
      'Perfect for quick, spontaneous intimacy.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.Standing,
    tags: ['Spontaneous', 'Fun', 'Kitchen'],
    intensity: 3,
    climaxGoals: ['Deep Penetration', 'Intimacy'],
    imageUrl: getPhotoUrl('Sex on kitchen counter', 142)
  },
  {
    id: 'pos-43',
    name: 'The Kneeling Wheelbarrow',
    description: 'Supported rear entry.',
    instructions: [
      'Receiver kneels and lowers chest to bed.',
      'Partner stands behind the bed (or kneels on it).',
      'Partner lifts receiver’s hips slightly.',
      'Allows for deep, controlled thrusts.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.RearEntry,
    tags: ['Deep', 'Control', 'Angle'],
    intensity: 3,
    climaxGoals: ['Deep Penetration', 'G-Spot'],
    imageUrl: getPhotoUrl('Kneeling rear entry hips lifted', 143)
  },
  {
    id: 'pos-44',
    name: 'The T-Square',
    description: 'Perpendicular pleasure.',
    instructions: [
      'Receiver lies on back near edge of bed.',
      'Partner stands at the side of the bed, facing receiver’s hips.',
      'Receiver lifts legs and rests them on partner’s waist.',
      'Partner enters from the side, forming a T shape.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Other,
    tags: ['Angle', 'Side', 'Visual'],
    intensity: 3,
    climaxGoals: ['Visual', 'G-Spot'],
    imageUrl: getPhotoUrl('Sex position T shape bodies', 144)
  },
  {
    id: 'pos-45',
    name: 'The Boa',
    description: 'Constricting pleasure.',
    instructions: [
      'Missionary position.',
      'Receiver wraps legs around partner’s back.',
      'Receiver also wraps arms around partner’s neck.',
      'Squeeze tightly with every thrust.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Tight', 'Hugging', 'Squeeze'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('Couple hugging tight missionary', 145)
  },
  {
    id: 'pos-46',
    name: 'The Cork',
    description: 'Swirling hips.',
    instructions: [
      'Woman on top (Cowgirl).',
      'Instead of bouncing, receiver rotates hips in a circular motion.',
      'Partner lies still and enjoys the friction.',
      'Great for hitting all internal walls.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Motion', 'Grind', 'Sensation'],
    intensity: 3,
    climaxGoals: ['G-Spot', 'Control'],
    imageUrl: getPhotoUrl('Cowgirl position hips rotating', 146)
  },
  {
    id: 'pos-47',
    name: 'The Slide',
    description: 'Slippery slope.',
    instructions: [
      'Partner lies on back with knees bent.',
      'Receiver lies on top, back-to-chest with partner.',
      'Receiver slides up and down partner’s thighs.',
      'Uses friction rather than depth.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Friction', 'Surface', 'Tease'],
    intensity: 2,
    climaxGoals: ['Clitoral', 'Intimacy'],
    imageUrl: getPhotoUrl('Couple sliding bodies against each other', 147)
  },
  {
    id: 'pos-48',
    name: 'The Sphinx',
    description: 'Regal rear entry.',
    instructions: [
      'Receiver lies on stomach but props upper body up on forearms.',
      'Partner enters from behind.',
      'The arch in the back allows for deeper entry.',
      'Receiver can look back at partner.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.RearEntry,
    tags: ['Deep', 'View', 'Arch'],
    intensity: 3,
    climaxGoals: ['Deep Penetration', 'Visual'],
    imageUrl: getPhotoUrl('Sphinx pose sexual position', 148)
  },
  {
    id: 'pos-49',
    name: 'The Jockey',
    description: 'Leaning forward cowgirl.',
    instructions: [
      'Receiver on top in cowgirl position.',
      'Receiver leans forward completely, resting chest on partner’s chest.',
      'Wraps arms around partner.',
      'Movement is a slow grind.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Intimate', 'Slow', 'Heavy'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Clitoral'],
    imageUrl: getPhotoUrl('Cowgirl leaning forward hugging', 149)
  },
  {
    id: 'pos-50',
    name: 'The Tightrope',
    description: 'Balancing act.',
    instructions: [
      'Partner lies on back.',
      'Receiver squats on top, balancing on feet only.',
      'Requires significant leg strength and balance.',
      'Allows receiver to control depth precisely.'
    ],
    difficulty: Difficulty.Expert,
    category: Category.Acrobatic,
    tags: ['Balance', 'Squat', 'Strength'],
    intensity: 5,
    climaxGoals: ['Control', 'Power'],
    imageUrl: getPhotoUrl('Full squat sex position balancing', 150)
  },
  {
    id: 'pos-51',
    name: 'The Supernova',
    description: 'Explosive pleasure.',
    instructions: [
      'Receiver lies on back, hips elevated on a pillow.',
      'Legs spread wide.',
      'Partner enters from above, pressing deep.',
      'The pillow changes the pelvic angle for G-spot access.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Angle', 'Deep', 'Easy'],
    intensity: 3,
    climaxGoals: ['G-Spot', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Missionary with pillow under hips', 151)
  },
  {
    id: 'pos-52',
    name: 'The Fusion',
    description: 'Melting together.',
    instructions: [
      'Lotus position with legs wrapped.',
      'Partners lean foreheads together.',
      'Sync breathing.',
      'Stay still and feel the connection.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Tantric', 'Stillness', 'Soulful'],
    intensity: 1,
    climaxGoals: ['Intimacy'],
    imageUrl: getPhotoUrl('Couple forehead to forehead lotus position', 152)
  },
  {
    id: 'pos-53',
    name: 'The Wheel',
    description: 'Arching backwards.',
    instructions: [
      'Partner sits with legs extended.',
      'Receiver sits on partner facing away.',
      'Receiver leans back and grabs partner’s ankles.',
      'Creates a deep arch and intense stretch.'
    ],
    difficulty: Difficulty.Expert,
    category: Category.Acrobatic,
    tags: ['Stretch', 'Arch', 'Flexible'],
    intensity: 5,
    climaxGoals: ['Visual', 'Power'],
    imageUrl: getPhotoUrl('Sexual position bending backwards holding ankles', 153)
  },
  {
    id: 'pos-54',
    name: 'The Scoop',
    description: 'Lifted spooning.',
    instructions: [
      'Spooning position.',
      'Partner lifts receiver’s top leg excessively high.',
      'Allows for deeper entry than standard spooning.',
      'Partner can hold the leg up.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.SideBySide,
    tags: ['Deep', 'Side', 'Leg Up'],
    intensity: 2,
    climaxGoals: ['Deep Penetration', 'Intimacy'],
    imageUrl: getPhotoUrl('Spooning with leg lifted high', 154)
  },
  {
    id: 'pos-55',
    name: 'The Eiffel Tower',
    description: 'Wide stance standing.',
    instructions: [
      'Receiver stands with legs spread very wide.',
      'Partner stands behind.',
      'Partner leans receiver forward slightly.',
      'Provides a very stable base for standing sex.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Standing,
    tags: ['Stable', 'Rear', 'Wide'],
    intensity: 3,
    climaxGoals: ['Deep Penetration', 'Power'],
    imageUrl: getPhotoUrl('Standing sex position wide legs', 155)
  },
  {
    id: 'pos-56',
    name: 'The Rowing Boat',
    description: 'Back and forth motion.',
    instructions: [
      'Partner sits with legs crossed.',
      'Receiver sits on partner’s lap, wrapping legs around.',
      'Hold hands and rock back and forth like rowing.',
      'Stimulates clitoris against partner’s body.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Rhythm', 'Motion', 'Fun'],
    intensity: 3,
    climaxGoals: ['Clitoral', 'Intimacy'],
    imageUrl: getPhotoUrl('Couple rowing boat motion sex position', 156)
  },
  {
    id: 'pos-57',
    name: 'The Crouch',
    description: 'Double squat.',
    instructions: [
      'Receiver squats down low.',
      'Partner squats behind receiver.',
      'Partner enters from behind.',
      'Requires strong quads from both partners.'
    ],
    difficulty: Difficulty.Expert,
    category: Category.RearEntry,
    tags: ['Workout', 'Strength', 'Tiring'],
    intensity: 5,
    climaxGoals: ['Power', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Both partners squatting sex position', 157)
  },
  {
    id: 'pos-58',
    name: 'The Goddess',
    description: 'Worshiping the receiver.',
    instructions: [
      'Receiver sits on a chair or edge of bed.',
      'Partner kneels between legs.',
      'Partner performs oral sex while holding receiver’s hips.',
      'Receiver leans back and enjoys.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.Oral,
    tags: ['Oral', 'Worship', 'Easy'],
    intensity: 2,
    climaxGoals: ['Oral Pleasure', 'Control'],
    imageUrl: getPhotoUrl('Man kneeling performing oral on woman sitting', 158)
  },
  {
    id: 'pos-59',
    name: 'The Suspended Congress',
    description: 'Carrying the receiver.',
    instructions: [
      'Partner stands up.',
      'Receiver jumps up and wraps legs around partner’s waist.',
      'Partner holds receiver up and enters.',
      'Partner can pin receiver against a wall for support.'
    ],
    difficulty: Difficulty.Expert,
    category: Category.Standing,
    tags: ['Strength', 'Carry', 'Wall'],
    intensity: 5,
    climaxGoals: ['Power', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Man carrying woman standing sex', 159)
  },
  {
    id: 'pos-60',
    name: 'The Flatiron',
    description: 'Prone bone with pressure.',
    instructions: [
      'Receiver lies flat on stomach.',
      'Partner lies on top.',
      'Partner enters from behind.',
      'Use a pillow under hips to adjust angle if needed.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.RearEntry,
    tags: ['Pressure', 'Skin', 'Friction'],
    intensity: 3,
    climaxGoals: ['Intimacy', 'G-Spot'],
    imageUrl: getPhotoUrl('Prone bone sex position', 160)
  },
  {
    id: 'pos-61',
    name: 'The Moth',
    description: 'Fluttering at the edge.',
    instructions: [
      'Receiver lies on back at edge of bed.',
      'Legs are bent at knees and feet resting on edge.',
      'Partner stands and enters.',
      'Allows for deep penetration and easy viewing.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Visual', 'Edge', 'Deep'],
    intensity: 3,
    climaxGoals: ['Deep Penetration', 'Visual'],
    imageUrl: getPhotoUrl('Missionary at edge of bed feet down', 161)
  },
  {
    id: 'pos-62',
    name: 'The Magic Wand',
    description: 'Specific angle for stimulation.',
    instructions: [
      'Rear entry position.',
      'Partner angles entry to rub against the upper wall.',
      'Receiver pushes back against the motion.',
      'Targets the G-spot specifically.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.RearEntry,
    tags: ['Targeted', 'G-Spot', 'Rubbing'],
    intensity: 3,
    climaxGoals: ['G-Spot', 'Control'],
    imageUrl: getPhotoUrl('Doggy style angled entry', 162)
  },
  {
    id: 'pos-63',
    name: 'The Starfish',
    description: 'Total relaxation.',
    instructions: [
      'Receiver lies on back, limbs spread, completely relaxed.',
      'Partner does all the work.',
      'Receiver focuses purely on sensation.',
      'Good for when one partner is tired.'
    ],
    difficulty: Difficulty.Beginner,
    category: Category.FaceToFace,
    tags: ['Lazy', 'Relaxed', 'Sensory'],
    intensity: 1,
    climaxGoals: ['Intimacy', 'Control'],
    imageUrl: getPhotoUrl('Woman lying starfish position man on top', 163)
  },
  {
    id: 'pos-64',
    name: 'The Glowing Ember',
    description: 'Slow heat.',
    instructions: [
      'Any comfortable position.',
      'Move extremely slowly.',
      'Stop completely every few seconds.',
      'Builds anticipation and sensitivity.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Slow', 'Teasing', 'Edging'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Control'],
    imageUrl: getPhotoUrl('Couple kissing intimate slow', 164)
  },
  {
    id: 'pos-65',
    name: 'The Thunderbolt',
    description: 'Powerful kneeling.',
    instructions: [
      'Receiver kneels on bed, leaning back on hands.',
      'Partner kneels between legs.',
      'Partner enters from front.',
      'Allows for deep eye contact and kissing.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.FaceToFace,
    tags: ['Kneeling', 'Eye Contact', 'Deep'],
    intensity: 3,
    climaxGoals: ['Intimacy', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Couple kneeling face to face sex', 165)
  },
  {
    id: 'pos-66',
    name: 'The Challenge',
    description: 'A test of strength.',
    instructions: [
      'Partner stands holding receiver.',
      'Receiver wraps legs around partner.',
      'Partner does squats while thrusting.',
      'A workout and a pleasure.'
    ],
    difficulty: Difficulty.Expert,
    category: Category.Acrobatic,
    tags: ['Workout', 'Squat', 'Strength'],
    intensity: 5,
    climaxGoals: ['Power', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Man squatting holding woman standing', 166)
  },
  {
    id: 'pos-67',
    name: 'The Deep Dive',
    description: 'Head down, hips up.',
    instructions: [
      'Receiver kneels, then lowers head to bed, raising hips high.',
      'Partner enters from behind, leaning over receiver.',
      'Gravity assists in depth.',
      'Very stimulating for the front wall.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.RearEntry,
    tags: ['Deep', 'Angle', 'Gravity'],
    intensity: 4,
    climaxGoals: ['G-Spot', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Face down ass up sexual position', 167)
  },
  {
    id: 'pos-68',
    name: 'The Spoon-Fork',
    description: 'Twisted spoon.',
    instructions: [
      'Spooning position.',
      'Partner stays on side, receiver rolls onto stomach.',
      'Entry is from the side/rear.',
      'Combining comfort with tightness.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.SideBySide,
    tags: ['Hybrid', 'Twist', 'Tight'],
    intensity: 2,
    climaxGoals: ['Intimacy', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Spooning twisting position', 168)
  },
  {
    id: 'pos-69',
    name: 'The Golden Arch',
    description: 'Supported bridge.',
    instructions: [
      'Receiver does a bridge pose.',
      'Partner supports receiver’s back with pillows or hands.',
      'Partner enters from below.',
      'Easier than full bridge but still intense.'
    ],
    difficulty: Difficulty.Intermediate,
    category: Category.Acrobatic,
    tags: ['Arch', 'Support', 'Angle'],
    intensity: 4,
    climaxGoals: ['Power', 'Deep Penetration'],
    imageUrl: getPhotoUrl('Supported bridge sex position', 169)
  }
];

export const CATEGORY_COLORS: Record<Category, string> = {
  [Category.FaceToFace]: 'bg-blue-500',
  [Category.RearEntry]: 'bg-purple-500',
  [Category.Standing]: 'bg-green-500',
  [Category.Oral]: 'bg-pink-500',
  [Category.SideBySide]: 'bg-teal-500',
  [Category.Acrobatic]: 'bg-orange-500',
  [Category.Other]: 'bg-gray-500',
};

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  [Difficulty.Beginner]: 'text-green-400',
  [Difficulty.Intermediate]: 'text-yellow-400',
  [Difficulty.Advanced]: 'text-orange-400',
  [Difficulty.Expert]: 'text-red-500',
};