
let audio;
import 
    {buttonPlay, 
    buttonSet, 
    buttonAddMinutes, 
    buttonReduceMinutes,
    buttonForestAudio,  
    buttonCoffeAudio,
    buttonRainAudio,
    buttonFireplaceAudio,
    buttonRangeForest,
    buttonDarkMode,
    buttonLightMode,
    buttonHoverForest,
    buttonRangeRain,
    buttonHoverRain,
    buttonRangeCoffe,
    buttonForestActive,
    buttonRainActive,
    buttonCoffeActive,
    buttonCoffeSelect,
    buttonRangeFireplace,
    buttonFireplaceActive,
    buttonFireplaceSelect

    } 
    from './elements.js'

export default function ({timer, controls, sound}) {
    //---------------------Inicio Timer----------------------------
     buttonSet.addEventListener('click', function() {
      timer.reset();
      timer.updateMinutes(newMinutes, 0)
    });

    buttonPlay.addEventListener('click', function() {
        timer.countdown();
    });

    buttonAddMinutes.addEventListener('click', function() {
      let newMinutes = controls.newMinutes();

      timer.updateMinutes(newMinutes, 0);
    });

    buttonReduceMinutes.addEventListener('click', function() {
      let reduceMinutes = controls.reduceMinutes();

      timer.updateMinutes(reduceMinutes, 0);
    });
    //---------------- Fim do timer ---------------------------


    //-------------- Buttons Forest ---------------------------
    buttonForestAudio.addEventListener('click', function() {
      sound.forestAudio.play();
      controls.playForest(); 

      buttonRangeForest.addEventListener('input',()=>{
        sound.forestAudio.volume = Number(buttonRangeForest.value)/100;
        });
    });

      buttonForestActive.addEventListener('click', function() {
      controls.pause(buttonHoverForest, buttonForestAudio);
      sound.forestAudio.pause();
    });
    // -------------- Fim Forest BUttons -----------------------------
    
    //------------------- Inicio BUtton Coffe ---------------------------
    buttonCoffeAudio.addEventListener('click', function() {
      sound.coffeAudio.play();
      controls.playCoffe();

      buttonRangeCoffe.addEventListener('input', function() {
        sound.coffeAudio.volume = Number(buttonRangeCoffe.value)/100;
      });
    });

    buttonCoffeActive.addEventListener('click', function() {
      controls.pause(buttonCoffeSelect, buttonCoffeAudio);
      sound.coffeAudio.pause();
    });

    //--------------Fim Button Coffe ---------------------------------------

    //----------- Inicio Button Rain ----------------
    buttonRainAudio.addEventListener('click', function() {
      sound.rainAudio.play();
      controls.playRain();

      buttonRangeRain.addEventListener('input', function() {
        sound.rainAudio.volume = Number(buttonRangeRain.value) / 100;
      });
    });

      buttonRainActive.addEventListener('click', function() {
      controls.pause(buttonHoverRain, buttonRainAudio);
      sound.rainAudio.pause();
    });

    // -------------------- Fim Button Rain ----------------------------


    //--------------- Inicio Button Fireplace --------------------------------
    buttonFireplaceAudio.addEventListener('click', function(){
      sound.fileplaceAudio.play();
      controls.playFileplace();
      
      buttonRangeFireplace.addEventListener('input', function() {
        sound.fileplaceAudio.volume = Number(buttonRangeFireplace.value) /100;
      });
     
      buttonFireplaceActive.addEventListener('click', function() {
        controls.pause(buttonFireplaceSelect, buttonFireplaceAudio);
        sound.fileplaceAudio.pause();
      });

    });

    //-------------------------------- Fim Button Fireplace -------------------------

    // ------------------------------- Inicio Modo dark Mode ------------------------
    buttonDarkMode.addEventListener('click', function(){
      controls.lightOrDark();
    });
    
    buttonLightMode.addEventListener('click', ()=>{
      controls.lightOrDark();
    });
}



 