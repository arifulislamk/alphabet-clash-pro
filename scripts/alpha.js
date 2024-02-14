// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden') ;

//     const playgroudSection = document.getElementById('play-grauond');
//     playgroudSection.classList.remove('hidden')

// }

function handleKeyboradButtonpress(event){
    // playerpress key 
    const playerpressedkey = event.key ;
    console.log('you press ' , playerpressedkey );

    // expected key to pressed 
    const screenAlphabets = document.getElementById('alphabet-screen') ;
    const screen = screenAlphabets.innerText ;
    const expectedKey = screen.toLowerCase();
    console.log('beta eta chap' ,expectedKey);

    // cheek 
    if(expectedKey === playerpressedkey){
        console.log('beta you win nameje ja');

        // score Update 
        const currentScoreElement = document.getElementById('current-score') ;
        const currentScoreText = currentScoreElement.innerText ;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1 ;
        currentScoreElement.innerText = newScore ;

        removebackgroundColorById(expectedKey)
        continueGame();
    }
    else{
        console.log('you loss.. taratari ja');
        // game life Update 
        const curretLifeElement = document.getElementById('current-life');
        const currentLifeText = curretLifeElement.innerText ;
        const currentLife = parseInt(currentLifeText);

        const newLIfe = currentLife - 1 ;
        curretLifeElement.innerText = newLIfe ;
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
    hideElementById('home');
    addElemnentById('play-grauond')
    continueGame();
}