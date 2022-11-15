// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// function that turns off all the lights
function turnOff(){
    document.querySelector('#stopLight').classList.remove('stop');
    document.querySelector('#slowLight').classList.remove('slow');
    document.querySelector('#goLight').classList.remove('go');
}

// Go function
function go(){
    turnOff();
    document.getElementById('goLight').classList.add('go');
    console.log("It works");
}


// Slow function
function slow(){
    turnOff();
    document.getElementById('slowLight').classList.add('slow');
    console.log("It works");
}


// Stop Function
function stop(){
    turnOff();
    document.getElementById('stopLight').classList.add('stop');
    console.log("It works");
}


//Bind the function to clicks

document.getElementById('stopButton').addEventListener('click',stop);

//now with query selector
document.querySelector("#slowButton").addEventListener('click',slow);
document.querySelector("#goButton").addEventListener('click',go);