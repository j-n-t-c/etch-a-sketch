var containerDiv = document.getElementById("container");
var headerDiv = document.getElementById("header");

const hoverOn = function() { document.querySelectorAll('.item').forEach(item => {//takes each item class div and assigns it to item
    item.addEventListener('mouseover', event => { //when item is hovered, does function
    item.className += " hover"; }) }) //adds hover class to apply different css    
    }

const createDivs = function(number) {
    for (let i = 1; i < (number + 1); i++){
    var newDiv = document.createElement("div"); //creates newDiv
    newDiv.className = "item"; //gives each class name item 
    newDiv.className += " item" + i; //gives individual item number classes
    containerDiv.appendChild(newDiv);
    hoverOn(); }} //puts new divs in container div x times
    
createDivs(256); //creates initial grid of divs onload

var divItem = document.getElementsByClassName("item"); /*selects all divs with class 'item'
........................................................//returns HTML collection*/
var divArray = Array.from(divItem); //converts HTML collection into array

const removeDivs = function() { //loops through array of newDivs and deletes each one
    for (let i = 0; i < divArray.length; i++) {
     containerDiv.removeChild(divArray[i]);}}  
    
    var resetBtn = document.getElementById('reset');
    var userInput = document.createElement("input");
    var inputBtn = document.createElement("button");
    //RESET BUTTON TWO FUNCTIONALITY
    resetBtn.addEventListener('click', function(){
        location.reload();
    });

//RESET BUTTON ONE FUNCTIONALITY
    /*resetBtn.addEventListener('click', function(){
        removeDivs();
        userInput.setAttribute("type", "text");
        userInput.setAttribute("placeholder", "Input # of rows and columns");
        userInput.id="userInput";
        headerDiv.appendChild(userInput);
        inputBtn.setAttribute("type", "button");
        inputBtn.id="inputBtn";
        inputBtn.innerHTML = 'Submit!';
        headerDiv.appendChild(inputBtn);
    });*/

    inputBtn.addEventListener('click', function(number){
      if (isNaN(userInput.value)) {
        alert('You must enter a valid number!')
      } else {
        createDivs((Number(userInput.value)));
    }})
