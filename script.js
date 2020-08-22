var noSquares = 6;

var colors = get_random_colors(noSquares);

var squares = document.querySelectorAll(".square");

var colorPicked = pickColor(noSquares);

var reload = document.querySelector("#reload");

var result = document.querySelector("#result");

var heading = document.querySelector("h1");

var easy = document.querySelector("#easybtn");
var hard = document.querySelector("#hardbtn");

document.querySelector("#color-display").textContent = colorPicked;

reload.addEventListener("click", function(){
    result.textContent = "";
    heading.style.backgroundColor = "steelblue"
    reload.textContent = "New Colors";
    
    colors = get_random_colors(noSquares);

    colorPicked = pickColor(noSquares);
    document.querySelector("#color-display").textContent = colorPicked;

    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
    }     
});

function easySwitch(){
    result.textContent = "";
    heading.style.backgroundColor = "steelblue"
    reload.textContent = "New Colors";

    easy.classList.add("selected");
    hard.classList.remove("selected");

    noSquares = 3;

    colors = get_random_colors(noSquares);

    colorPicked = pickColor(noSquares);
    document.querySelector("#color-display").textContent = colorPicked;

    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }    
    }
}

function hardSwitch(){
    result.textContent = "";
    heading.style.backgroundColor = "steelblue"
    reload.textContent = "New Colors";

    easy.classList.remove("selected");
    hard.classList.add("selected");

    noSquares = 6;

    colors = get_random_colors(noSquares);

    colorPicked = pickColor(noSquares);
    document.querySelector("#color-display").textContent = colorPicked;

    for(var i = 0 ; i < squares.length ; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";   
    }
}

for(var i = 0 ; i < squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
}

for(var i = 0 ; i < squares.length ; i++){

    squares[i].addEventListener("click" , function(){
        if(this.style.backgroundColor == colorPicked){

            result.innerHTML = "<i class=\"fas fa-check\"></i> Correct";

            heading.style.backgroundColor = colorPicked;

            reload.textContent = "Try Again?";

            for(var i = 0 ; i < squares.length ; i++){
              squares[i].style.backgroundColor = colorPicked;
            }
        }
    
        else{
            this.style.backgroundColor = "#232323";
            result.innerHTML = "<i class=\"fas fa-times\"></i> Try Again";
        }
    });
}

function get_random_colors(n) {

    var arr = [];
    
    for(var i = 0 ; i < n ; i++){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        arr.push("rgb(" + x + ", " + y + ", " + z + ")") ;
    }

    return arr;

}


function pickColor(highest){
    var random_no = Math.floor(Math.random() * highest);
    return colors[random_no];
}    

