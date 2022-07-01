import 
    {buttonPlay, 
     buttonSet, 
     minutesDisplay, 
     secondsDisplay,
     buttonHoverForest,
     buttonForestAudio,
     buttonHoverRain,
     buttonRainAudio,
     buttonCoffeAudio,
     buttonCoffeSelect,
     buttonFireplaceAudio,
     buttonFireplaceSelect,
     buttonRangeForest,
     buttonLightMode,
     buttonDarkMode,
    } 
    from './elements.js';

import Controls from './controls.js';
import Timer from './timer.js';
import Events from './events.js';
import Sound from './sounds.js';

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})

const controls = Controls({
    buttonPlay,
    buttonSet,
    minutesDisplay,
    buttonHoverForest,
    buttonForestAudio,
    buttonHoverRain,
    buttonRainAudio,
    buttonCoffeAudio,
    buttonCoffeSelect,
    buttonFireplaceAudio,
    buttonFireplaceSelect,
    buttonRangeForest,
    buttonLightMode,
     buttonDarkMode,
    
})

const sound = Sound();



Events({timer, controls, sound});


