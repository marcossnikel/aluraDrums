//Main file Javascript Web
/*JS in console in Google Chrome - - - > 
-> query selector -> search for some selector
querySelector('') you need to tell where to find 

document.
*/


//How to reproduce a soun in a audio tag in html

function playSound(soundId) {
    const element = document.querySelector(soundId);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Element not found !!')
    }
}
//When you want to pass a function to an onclick tag , you dont need the parenteses ()

//list of elements
const keysList = document.querySelectorAll('.tecla')



for (let counter = 0; counter < keysList.length; counter++) {

    const key = keysList[counter];
    const instrument = key.classList[1];
    const audioId = `#som_${instrument}`

    key.onclick = function () {
        playSound(audioId);
    };
    //adding an class to an element (ativa) in this case -> class that is in HTML
    key.onkeydown = function (event) {
        if (event.code === "Enter" || event.code === "Space") {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}





//Anonnymous Function !! ??
// classList atribute !