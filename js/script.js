const menu = document.getElementById("icon");
const menuList = document.getElementById("menu_list");
const description = document.getElementById("description");
const buttons = [];
const colors = ["Yellow", "Red", "Green", "White", "Blue", "Orange", "Lightblue", "Darkblue", "Lightgreen"];
let currentColor = "White_background";
let active = 4;

// retrackt menu
const listWithdrawl = function(){
    for(i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("listPull");
    }
}

// change background function
const switchBackground = function(newChoice){
    // bonus: showing active color
    buttons[active].innerHTML = (active + 1) + " " + colors[active];
    active = newChoice;
    buttons[newChoice].innerHTML = (newChoice + 1) + " " + colors[newChoice] + " <=";
    description.innerHTML = colors[newChoice];
    document.body.classList.toggle(currentColor);
    currentColor = colors[newChoice] + "_background";
    document.body.classList.toggle(currentColor);
}

// adding buttons including bonus: described color as name and background
for (i = 0; i < colors.length; i++) {
    menuList.innerHTML += "<li class='listItem "+colors[i]+"_background' id='"+colors[i]+"'>" + (i+1) + " " + colors[i] + "</li>";
    document.head.innerHTML += "<style> ." + colors[i] + "_background { background-color: " + colors[i] + "; transition: 1s;} <style>"
}

// asign buttons and their function
for (i = 0; i < colors.length; i++) {
    buttons[i] = document.getElementById(colors[i]);
    let choice = i;
    buttons[i].addEventListener("click", function(){ 
        switchBackground(choice);
        listWithdrawl();
    });
}

// open menu
menu.addEventListener("click", function(){ 
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("listPull");
    }
});

//bonus, activation by mouseover
menu.addEventListener("mouseover", function(){ 
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("listPull");
    }
});

//bonus, activation by number keyboard selection
document.addEventListener('keypress', function(event){
    let choice = event.key;
    choice--;
    if(choice < colors.length && choice >= 0 ) {
        switchBackground(choice);
    }
});