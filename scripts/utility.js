function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function addElemnentById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function randomAlphabets(){
    // get alphabets 
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('') ;
    // get random Number index 
    const randomNumber = Math.random()*25 ;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet ;
}