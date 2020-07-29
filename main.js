
        /*~~~~~~~~~~first variables~~~~~~~~~~*/
var containerDiv = document.getElementById("container1");
var compStyles = window.getComputedStyle(containerDiv);
var headerDiv = document.getElementById("header");
var allItems
var divItem
var divArray
var hovItem 
var hovArray = [];
var colorArray = ['aqua', 'brown', 'chartreuse', 'darkolivegreen', 'fuchsia', 'goldenrod',
    'hotpink', 'indianred', 'khaki', 'limegreen', 'mediumslateblue', 'navy', 'orange', 'peru',
     'royalblue', 'silver', 'teal', 'violet', 'wheat', 'yellow']
var rgb = []
var numInput = 4
var complete = false
var changeCount = 0


        /*~~~~~~~~~~random color functions~~~~~~~~~~*/
const randomColor = function(){
for(var i = 0; i < 3; i++) {
    rgb = colorArray[Math.floor(Math.random() * colorArray.length)];}
for (var i = 0; i < divArray.length; i++) {
    divArray[i].style.backgroundColor = rgb;
}
    return rgb;
}

const randomColor2 = function(){
    for(var i = 0; i < 3; i++) {
        rgb2 = colorArray[Math.floor(Math.random() * colorArray.length)];}
        return rgb2;
    }


const changes = function() {
    switch(changeCount) {
        case 1:
        instructions.innerHTML = ('LEVEL 2: Do it two more times!');
        removeDivs();
        numInput = 16;
        containerDiv.className = ('second');
        createDivs(numInput);
          break;
        case 3:
        instructions.innerHTML = ('LEVEL 3: DO IT AGAIN!');
        removeDivs();
        numInput = 64;
        containerDiv.className = ('third');
        createDivs(numInput);
          break;
        case 4:
        instructions.innerHTML = ('LEVEL 4: ONE MORE TIME AND YOU UNLOCK PSYCHEDELIC MODE!');
        removeDivs();
        numInput = 256;
        containerDiv.className = ('fourth');
        createDivs(numInput);
        break;
        case 5:
        instructions.innerHTML = ('LEVEL 4: ONE MORE TIME AND YOU UNLOCK PSYCHEDELIC MODE!');
        removeDivs();
        numInput = 1024;
        containerDiv.className = ('fifth');
        createDivs(numInput);
            break;
        /*case y:
          // code block
          break;
        default:
          // code block*/
      }
}
        /*~~~~~~~~~~CREATES DIVS and assigns mouseover functions~~~~~~~~~~*/
const createDivs = function(number) {
    for (let i = 0; i < (number); i++){
    var newDiv = document.createElement('div'); //creates newDiv
    newDiv.className = 'item'; //gives each class name item 
    newDiv.className += ' item' + i; //gives individual item number classes
    containerDiv.appendChild(newDiv); //puts them in
}
    divItem = document.getElementsByClassName('item');
    divArray = Array.from(divItem);
    randomColor();
    randomColor2();
    divArray.forEach(function(item){
        item.addEventListener('mouseenter', function() {
            item.classList.add('hovered');
            item.style.backgroundColor = rgb2;
            hovItem = document.getElementsByClassName('hovered');
            hovArray = Array.from(hovItem);
            if(hovArray.length === numInput){
                changeCount += 1;
                changes();
                divArray.forEach(function(item){
                    item.classList.remove('hovered');
                    randomColor();
                    randomColor2();
                    })
                 }
            })
        })
} 

createDivs(numInput);

        /*~~~~~~~~~~USER INTERFACE variables~~~~~~~~~~*/
var resetBtn = document.getElementById('reset');
var userInput = document.createElement("input");
var inputBtn = document.createElement("button");

        /*~~~~~~~~~~REMOVES ALL DIVS when called~~~~~~~~~~*/
const removeDivs = function() { //loops through array of newDivs and deletes each one
    for (let i = 0; i < divArray.length; i++) {
     containerDiv.removeChild(divArray[i]);}}  
    
        /*~~~~~~~~~~RESET FUNCTION~~~~~~~~~~*/
const reset = function() {
        removeDivs();
        userInput.setAttribute("type", "text");
        userInput.setAttribute("placeholder", "Input # of rows and columns");
        userInput.id="userInput";
        headerDiv.appendChild(userInput); //puts input box on page
        inputBtn.setAttribute("type", "button");
        inputBtn.id="inputBtn";
        inputBtn.innerHTML = 'Submit!'; //puts input button on page
        headerDiv.appendChild(inputBtn);
}

        /*~~~~~~~~~~RESET BUTTON~~~~~~~~~~*/
    resetBtn.addEventListener('click', function(){
        reset();
        createDivs(numInput);
    });

        /*~~~~~~~~~~SUBMIT BUTTON~~~~~~~~~~*/
    inputBtn.addEventListener('click', function(number){
      if (isNaN(userInput.value)) { //checks if input is number
        alert('You must enter a valid number!')
      } else {
          reset();
        numInput = (Number(userInput.value))
        createDivs(numInput); //creates number of boxes based on input
    }})

    /*RELOAD BUTTON IF NEEDED (change button, not reset)
    resetBtn.addEventListener('click', function(){
        location.reload();
    });*/