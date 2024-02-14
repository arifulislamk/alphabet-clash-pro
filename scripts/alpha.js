// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden') ;

//     const playgroudSection = document.getElementById('play-grauond');
//     playgroudSection.classList.remove('hidden')

// }
function continueGame(){
   const alphabet = randomAlphabets() ;
    console.log('your ramdom alphabet', alphabet)
}
function play(){
    hideElementById('home');
    addElemnentById('play-grauond')
    continueGame();
}