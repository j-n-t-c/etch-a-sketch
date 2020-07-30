
        /*~~~~~~~~~~first variables~~~~~~~~~~*/
var containerDiv = document.getElementById("container1");
var compStyles = window.getComputedStyle(containerDiv);
var headerDiv = document.getElementById("header");
var allItems
var divItem
var divArray
var hovItem 
var hovArray = [];
var colorArray = [
    "Aqua",
    "Aquamarine",
    "Beige",
    "Bisque",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Fuchsia",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "Lime",
    "LimeGreen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MistyRose",
    "Moccasin",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "Yellow",
    "YellowGreen",
  ];
var rgb = []
var inputRows = 2
var inputColumns = 2
var numInput = inputRows * inputColumns
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
        instructions.innerHTML = ('level 2');
        removeDivs();
        inputRows *= 2;
        inputColumns *= 2;
        numInput = inputRows * inputColumns;
        containerDiv.style.gridTemplateRows = `repeat(${inputRows}, 1fr)`;
        containerDiv.style.gridTemplateColumns = `repeat(${inputColumns}, 1fr)`;
        createDivs(numInput);
        divArray.forEach(function(item){
            item.classList.add("case1");
            item.classList.remove("case0");})
          break;
        case 2:
        instructions.innerHTML = ('level 3');
        removeDivs();
        inputRows *= 2;
        inputColumns *= 2;
        numInput = inputRows * inputColumns;
        containerDiv.style.gridTemplateRows = `repeat(${inputRows}, 1fr)`;
        containerDiv.style.gridTemplateColumns = `repeat(${inputColumns}, 1fr)`;
        createDivs(numInput);
        divArray.forEach(function(item){
            item.classList.add("case2");
            item.classList.remove("case0");})
          break;
        case 3:
        instructions.innerHTML = ('level 4');
        removeDivs();
        inputRows *= 2;
        inputColumns *= 2;
        numInput = inputRows * inputColumns;
        containerDiv.style.gridTemplateRows = `repeat(${inputRows}, 30px)`;
        containerDiv.style.gridTemplateColumns = `repeat(${inputColumns}, 30px)`;
        createDivs(numInput);
        divArray.forEach(function(item){
            item.classList.add("case3");
            item.classList.remove("case0");})
        break;
        case 4:
        instructions.innerHTML = ('enter a grid size or change color');
        removeDivs();
        inputRows *= 2;
        inputColumns *= 2;
        numInput = inputRows * inputColumns;
        containerDiv.style.gridTemplateRows = `repeat(${inputRows}, 30px)`;
        containerDiv.style.gridTemplateColumns = `repeat(${inputColumns}, 30px)`;
        createDivs(numInput);
        divArray.forEach(function(item){
            item.classList.add("case4");
            item.classList.remove("case0");})
        box.style.visibility = "visible";
        submit.style.visibility = "visible";
        resetBtn.style.visibility = "visible";
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
    containerDiv.style.gridTemplateRows = `repeat(${inputRows}, 1fr)`;
    containerDiv.style.gridTemplateColumns = `repeat(${inputColumns}, 1fr)`;
    for (let i = 0; i < (number); i++){
    var newDiv = document.createElement('div'); //creates newDiv
    newDiv.className = 'item'; //gives each class name item 
    newDiv.className += ' case0' + (' item' + i); //gives individual item number classes
    newDiv.style.width = 400 / inputRows - 2 + 'px';
    newDiv.style.height = 400 / inputColumns - 2 + 'px';
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
/*var userInput = document.createElement("input");
var userInput2 = document.createElement("input2");
var inputBtn = document.createElement("button");*/


        /*~~~~~~~~~~HIDE submit and reset buttons on load~~~~~~~~~~*/
        var box = document.getElementById("userInput");
        box.style.visibility = "hidden";
        var submit = document.getElementById("inputBtn");
        submit.style.visibility = "hidden";
        resetBtn.style.visibility = "hidden";


/*~~~~~~~~~~INSERT text boxes and button~~~~~~~~~~  NOW IN HTML*/
        /*userInput.setAttribute("type", "text");
        userInput.setAttribute("placeholder", "rows");
        userInput.id="userInput";
        headerDiv.appendChild(userInput);
        userInput2.setAttribute("type", "text");
        userInput2.setAttribute("placeholder", "columns");
        userInput2.id="userInput2";
        headerDiv.appendChild(userInput2);
        inputBtn.setAttribute("type", "button");
        inputBtn.id="inputBtn";
        inputBtn.innerHTML = 'Submit!'; 
        headerDiv.appendChild(inputBtn);*/

        /*~~~~~~~~~~REMOVES ALL DIVS when called~~~~~~~~~~*/
const removeDivs = function() { //loops through array of newDivs and deletes each one
    for (let i = 0; i < divArray.length; i++) {
     containerDiv.removeChild(divArray[i]);}}  
    
        /*~~~~~~~~~~RESET FUNCTION~~~~~~~~~~*/
const reset = function() {
        removeDivs();
}

        /*~~~~~~~~~~CHANGE COLOR RESET BUTTON~~~~~~~~~~*/
    resetBtn.addEventListener('click', function(){
        reset();
        createDivs(numInput);
        divArray.forEach(function(item){
            item.classList.add("caseCustom");
            item.classList.remove("case0");})
    });

        /*~~~~~~~~~~SUBMIT BUTTON~~~~~~~~~~*/

        
    inputBtn.addEventListener('click', function(number){
        console.log('ok');
      if (isNaN(userInput.value) || userInput.value < 1) {
        alert('You must enter a valid number!');
      } else if (userInput.value > 30) { 
        alert('Whoa! Let\'s keep it at 30 or below!');
      }
        else {
          reset();
          inputRows = (Number(userInput.value));
          inputColumns = (Number(userInput.value));
          numInput = inputRows * inputColumns;
        createDivs(numInput);
        divArray.forEach(function(item){
            item.classList.add("caseCustom");
            item.classList.remove("case0");}) //creates number of boxes based on input
    }})

    /*RELOAD BUTTON IF NEEDED (change button, not reset)
    resetBtn.addEventListener('click', function(){
        location.reload();
    });*/