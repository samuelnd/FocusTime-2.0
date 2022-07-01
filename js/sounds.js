

export default function() {
    const forestAudio = new Audio("../sound/Floresta.wav");
    const coffeAudio = new Audio("../sound/Cafeteria.wav");
    const rainAudio = new Audio("../sound/Chuva.wav");
    const fileplaceAudio = new Audio("../sound/Lareira.wav");

    forestAudio.loop = true;

    return {
        forestAudio,
        coffeAudio, 
        rainAudio,
        fileplaceAudio,
    }
}