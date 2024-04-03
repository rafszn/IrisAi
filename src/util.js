export function detectGlaucoma(patientData) {
  const { age, familyHistoryOfGlaucoma, symptoms } = patientData;

  const rule1 = age > 60 && symptoms.includes('gradualLossOfVision') ;
  const rule2 = familyHistoryOfGlaucoma && symptoms.includes('blurredVision') && symptoms.includes('halosAroundLights');
  const rule3 = symptoms.includes('severeEyePain') && symptoms.includes('redness');

  if (rule1 || rule2 || rule3) {
    return 'signs of Glaucoma';
  } else {
    return 'No signs of Glaucoma';
  }
}
export function detectCataract(patientData) {
  const { age, symptoms, familyHistoryOfDiabetes, smokingHistory } = patientData;

  // Rule 1
  const rule1 = age > 50 && (symptoms.includes('cloudyVision') && symptoms.includes('increasedGlareSensitivity'));

  // Rule 2
  const rule2 = familyHistoryOfDiabetes && (symptoms.includes('blurredVision') && symptoms.includes('difficultySeeingAtNight'));

  // Rule 3
  const rule3 = symptoms.includes('doubleVision') && smokingHistory && symptoms.includes('blurredVision');

  // Rule 4
  const rule4 = age > 50 && (symptoms.includes('doubleVision') && symptoms.includes('increasedGlareSensitivity'));

  // Rule 5
  const rule5 = smokingHistory && symptoms.includes('difficultySeeingAtNight');

  // Rule 6
  const rule6 = symptoms.includes('blurredVision') && familyHistoryOfDiabetes;

  if (rule1 || rule2 || rule3 || rule4 || rule5 || rule6) {
    return 'signs of Cataract';
  } else {
    return 'No signs Cataract';
  }
}
export function detectMacularDegeneration(patientData) {
  const { age, symptoms, familyHistoryOfMacularDegeneration, smokingHistory } = patientData;

  // Rule 1
  const rule1 = age > 50 && (symptoms.includes('distortedCentralVision') && symptoms.includes('difficultyReading'));

  // Rule 2
  const rule2 = familyHistoryOfMacularDegeneration && symptoms.includes('distortedStraightLines');

  // Rule 3
  const rule3 = symptoms.includes('reducedCentralVision') && smokingHistory;

  // Rule 4
  const rule4 = symptoms.includes('difficultyRecognizingFaces') && age > 50;

  // Rule 5
  const rule5 = familyHistoryOfMacularDegeneration && symptoms.includes('distortedStraightLines');

  // Rule 6
  const rule6 = symptoms.includes('darkAreaInCentralVision') && smokingHistory;

  if (rule1 || rule2 || rule3 || rule4 || rule5 || rule6) {
    return 'signs of Macular Degeneration';
  } else {
    return 'No Macular Degeneration';
  }
}
export function detectDryEyeSyndrome(patientData) {
  const { symptoms, environmentalFactors, aging } = patientData;

  // Rule 1
  const rule1 = (symptoms.includes('burningSensation') && symptoms.includes('stringyMucus')) && environmentalFactors.includes('windOrDryClimate');

  // Rule 2
  const rule2 = symptoms.includes('excessiveTearing')

  // Rule 3
  const rule3 = symptoms.includes('eyeFatigue')  && (environmentalFactors.includes('windOrDryClimate'));

  // Rule 4
  const rule4 = symptoms.includes('burningSensation') && environmentalFactors.includes('windOrDryClimate');

  // Rule 5
  const rule5 = symptoms.includes('stringyMucus') && environmentalFactors.includes('windOrDryClimate');

  // Rule 6
  const rule6 = symptoms.includes('eyeRedness') && aging && (environmentalFactors.includes('windOrDryClimate'));

  if (rule1 || rule2 || rule3 || rule4 || rule5 || rule6) {
    return 'signs of Dry Eye Syndrome';
  } else {
    return 'No Dry Eye Syndrome';
  }
}
export function detectMyopia(patientData) {
  const { age, symptoms, familyHistoryOfMyopia, readingDifficulty } = patientData;

  // Rule 1
  const rule1 = age < 40 && symptoms.includes('blurryDistanceVision');

  // Rule 2
  const rule2 = age >= 18 && age < 40 && symptoms.includes('squinting');

  // Rule 3
  const rule3 = readingDifficulty && symptoms.includes('headaches');

  // Rule 4
  const rule4 = age >= 6 && symptoms.includes('difficultySeeingAtDistance');

  // Rule 5
  const rule5 = age < 18 && symptoms.includes('eyeStrain');

  // Rule 6
  const rule6 = age >= 6 && symptoms.includes('fatigueDuringVisualTasks');

  if (rule1 || rule2 || rule3 || rule4 || rule5 || rule6 || familyHistoryOfMyopia) {
    return 'signs of Myopia';
  } else {
    return 'No signs Myopia';
  }
}
export function detectHyperopia(patientData) {
  const { age, symptoms, familyHistoryOfHyperopia, readingDifficulty } = patientData;

  // Rule 1
  const rule1 = age >= 40 && symptoms.includes('blurryNearVision');

  // Rule 2
  const rule2 = age >= 18 && age < 40 && symptoms.includes('eyestrain');

  // Rule 3
  const rule3 = readingDifficulty && symptoms.includes('headaches');

  // Rule 4
  const rule4 = age >= 6 && symptoms.includes('difficultyFocusingOnNearObjects');

  // Rule 5
  const rule5 = age < 18 && symptoms.includes('eyeFatigue');

  // Rule 6
  const rule6 = age >= 6 && symptoms.includes('difficultyReading');

  if (rule1 || rule2 || rule3 || rule4 || rule5 || rule6 || familyHistoryOfHyperopia) {
    return 'signs of Hyperopia ';
  } else {
    return 'No signs of Hyperopia';
  }
}
export function detectAstigmatism(patientData) {
  const { age, symptoms, familyHistoryOfAstigmatism, blurredVision } = patientData;

  // Rule 1
  const rule1 = age >= 18 && symptoms.includes('distortedOrBlurryVision');

  // Rule 2
  const rule2 = blurredVision && symptoms.includes('eyeStrain');

  // Rule 3
  const rule3 = age >= 6 && symptoms.includes('headaches');

  // Rule 4
  const rule4 = age >= 6 && symptoms.includes('difficultySeeingAtNight');

  // Rule 5
  const rule5 = age >= 18 && symptoms.includes('squinting');

  // Rule 6
  const rule6 = age >= 18 && symptoms.includes('doubleVision');

  if (rule1 || rule2 || rule3 || rule4 || rule5 || rule6 || familyHistoryOfAstigmatism) {
    return 'signs of Astigmatism';
  } else {
    return 'No signs of Astigmatism';
  }
}
export function detectPresbyopia(patientData) {
  const { age, symptoms, familyHistoryOfPresbyopia, difficultyReading } = patientData;

  // Rule 1
  const rule1 = age >= 40 && symptoms.includes('difficultyReadingSmallPrint');

  // Rule 2
  const rule2 = age >= 40 && symptoms.includes('blurredNearVision');

  // Rule 3
  const rule3 = difficultyReading && symptoms.includes('eyeFatigue');

  // Rule 4
  const rule4 = age >= 40 && symptoms.includes('headaches');

  // Rule 5
  const rule5 = age >= 40 && symptoms.includes('difficultySeeingInDimLight');

  // Rule 6
  const rule6 = age >= 40 && symptoms.includes('presbyopicAsthenopia');

  if (rule1 || rule2 || rule3 || rule4 || rule5 || rule6 || familyHistoryOfPresbyopia) {
    return 'signs of Presbyopia';
  } else {
    return 'No signs Presbyopia detected';
  }
}
export  const symptoms = [
  {
    id: 1,
    label: 'Blurred Vision',
    name: 'blurredVision',
    value: 'blurredVision'
  },
  {
    id: 2,
    label: 'Double Vision',
    name: 'doubleVision',
    value: 'doubleVision'
  },
  {
    id: 3,
    label: 'Redness',
    name: 'redness',
    value: 'redness'
  },
  {
    id: 4,
    label: 'Dry Eyes',
    name: 'dryEyes',
    value: 'dryEyes'
  },
  {
    id: 5,
    label: 'Eye Strain',
    name: 'eyeStrain',
    value: 'eyeStrain'
  },
  {
    id: 6,
    label: 'Gradual Loss of Vision',
    name: 'gradualLossOfVision',
    value: 'gradualLossOfVision'
  },
  {
    id: 7,
    label: 'Severe Eye Pain',
    name: 'severeEyePain',
    value: 'severeEyePain'
  },
  {
    id: 8,
    label: 'Difficulty Seeing at Night',
    name: 'difficultySeeingAtNight',
    value: 'difficultySeeingAtNight'
  },
  {
    id: 9,
    label: 'Distorted Central Vision',
    name: 'distortedCentralVision',
    value: 'distortedCentralVision'
  },
  {
    id: 10,
    label: 'Difficulty Reading',
    name: 'difficultyReading',
    value: 'difficultyReading'
  },
  {
    id: 11,
    label: 'Distorted Straight Lines',
    name: 'distortedStraightLines',
    value: 'distortedStraightLines'
  },
  {
    id: 12,
    label: 'Reduced Central Vision',
    name: 'reducedCentralVision',
    value: 'reducedCentralVision'
  },
  {
    id: 13,
    label: 'Difficulty Recognizing Faces',
    name: 'difficultyRecognizingFaces',
    value: 'difficultyRecognizingFaces'
  },
  {
    id: 14,
    label: 'Dark Area in Central Vision',
    name: 'darkAreaInCentralVision',
    value: 'darkAreaInCentralVision'
  },
  {
    id: 15,
    label: 'Burning Sensation',
    name: 'burningSensation',
    value: 'burningSensation'
  },
  {
    id: 16,
    label: 'Excessive Tearing',
    name: 'excessiveTearing',
    value: 'excessiveTearing'
  },
  {
    id: 17,
    label: 'Squinting',
    name: 'squinting',
    value: 'squinting'
  },
  {
    id: 18,
    label: 'Headaches',
    name: 'headaches',
    value: 'headaches'
  },
  {
    id: 19,
    label: 'Fatigue During Visual Tasks',
    name: 'fatigueDuringVisualTasks',
    value: 'fatigueDuringVisualTasks'
  },
  {
    id: 20,
    label: 'Blurry Distance Vision',
    name: 'blurryDistanceVision',
    value: 'blurryDistanceVision'
  },
  {
    id: 21,
    label: 'Difficulty Seeing at Distance',
    name: 'difficultySeeingAtDistance',
    value: 'difficultySeeingAtDistance'
  },
  {
    id: 22,
    label: 'Blurry Near Vision',
    name: 'blurryNearVision',
    value: 'blurryNearVision'
  },
  {
    id: 23,
    label: 'Difficulty Focusing on Near Objects',
    name: 'difficultyFocusingOnNearObjects',
    value: 'difficultyFocusingOnNearObjects'
  },
  {
    id: 24,
    label: 'Difficulty Reading',
    name: 'difficultyReading',
    value: 'difficultyReading'
  },
  {
    id: 25,
    label: 'Difficulty Seeing at Night',
    name: 'difficultySeeingAtNight',
    value: 'difficultySeeingAtNight'
  },
  {
    id: 26,
    label: 'Double Vision',
    name: 'doubleVision',
    value: 'doubleVision'
  },
  {
    id: 27,
    label: 'Difficulty Reading Small Print',
    name: 'difficultyReadingSmallPrint',
    value: 'difficultyReadingSmallPrint'
  }
];