// Colors array
let colors = ['red','yellow','green','bule','pink','purple','brown'];

// get button
let button = document.getElementById('button');

// add Event Listener 
button.addEventListener('click', function(){
    // randomizer
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    // get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})