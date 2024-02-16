function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function addElemnentById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
function setbackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removebackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getTextElemetsValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText ;
    const value = parseInt(elementValueText);
    return value ;
}
function setTextElementById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value ;
}
function getTextElemenstTextById(elementId){
const element = document.getElementById(elementId);
const text = element.innerText ;
return text ;
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
