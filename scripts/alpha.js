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
        console.log('beta you win nameje ja')
    }
    else{
        console.log('you loss.. taratari ja')
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