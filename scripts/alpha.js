// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden') ;

//     const playgroudSection = document.getElementById('play-grauond');
//     playgroudSection.classList.remove('hidden')

// }

function handleKeyboradButtonpress(event){
    // playerpress key 
    const playerpressedkey = event.key ;

    // expected key to pressed 
    const screenAlphabets = document.getElementById('alphabet-screen') ;
    const screen = screenAlphabets.innerText ;
    const expectedKey = screen.toLowerCase();

    // cheek 
    if(expectedKey === playerpressedkey){
        console.log('beta you win nameje ja');

        const currentScore = getTextElemetsValueById('current-score');
        const updateScore = currentScore + 1 ;
    
        setTextElementById('current-score',updateScore)
        // score Update 
        // const currentScoreElement = document.getElementById('current-score') ;
        // const currentScoreText = currentScoreElement.innerText ;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1 ;
        // currentScoreElement.innerText = newScore ;

        removebackgroundColorById(expectedKey)
        continueGame();
    }
    else{
        console.log('you loss.. taratari ja');
        const currentLife = getTextElemetsValueById('current-life');
        const updateLife = currentLife - 1 ;
        setTextElementById('current-life',updateLife)
        if(updateLife === 0){
            console.log('game over');
            gameOver();
        }
        // game life Update 
        // const curretLifeElement = document.getElementById('current-life');
        // const currentLifeText = curretLifeElement.innerText ;
        // const currentLife = parseInt(currentLifeText);
        // const newLIfe = currentLife - 1 ;
        // curretLifeElement.innerText = newLIfe ;
    }
}
document.addEventListener('keyup' , handleKeyboradButtonpress );



function continueGame(){
    // get random alfabets
   const alphabet = randomAlphabets() ;
//    set alfabets in screnn
    const screenAlphabets = document.getElementById('alphabet-screen');
        screenAlphabets.innerText = alphabet ;

 // setbackgruond
        setbackgroundColorById(alphabet);
}
function play(){
    
    hideElementById('final-score')
    hideElementById('home');
    addElemnentById('play-grauond')

    // reset life and score 
    setTextElementById('current-score', 0 );
    setTextElementById('current-life', 5 ) ;

    continueGame();
}
function gameOver(){
    hideElementById('play-grauond') ;
    addElemnentById('final-score') ;

}