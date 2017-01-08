(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Initial array of menu items
let food = [
    {
    name: 'Spaghetti',
    description: 'The best homemade pasta and marinara',
    price: 12.00,
},

{
    name: 'Chocolate Cake',
    description: 'Decadent, Homemade, vegan chocolate cake',
    price: 15.00,
},

{
    name: 'Pancakes',
    description: 'Whole wheat pancakes',
    price: 18.00,
},

];

window.addEventListener('load', function () {
    food.map(displayFood);
    // displayFood();
    
    let submitButton = document.querySelector('#addToMenu');
    submitButton.addEventListener('click', submitFood);
    // food.push(newItem);
    // showMenu();
    
    // let deleteButton = document.querySelector('.remove');
    // deleteButton.addEventListener('click', removeFood);
    

});

// This function displays my initial food array

function displayFood(food) {
    let child = document.createElement('li');
    let parent = document.querySelector('#menu-display');
    let template = document.querySelector('#itemsDisplay');

    child.innerHTML = Mustache.render(template.innerHTML, {
        name: food.name,
        description: food.description,
        price: food.price,
    });

    parent.appendChild(child);
};

// This function creates new food items & pushes them to the DOM

function submitFood() {
    let newItem = {
        name: document.querySelector('#newName').value,
        description: document.querySelector('#newDescription').value,
        price: document.querySelector('#newPrice').value,
    }
    food.push(newItem);
   
   let newFoodArray = food.push(newItem);
   document.getElementById("#menu-list").innerHTML = newFoodArray;
    };
    

// function showMenu() {
//     let menuList = document.querySelector('#menu-display');
//     menuList.innerHTML = '';

//     for (let i = 0; i < food.length; i++) {
//         let newMenu = displayFood(food[i])
//     }
// }

// function removeFood() {
//     for(let i in food) {
//         if(food[i].name === name) {
//             food[i].count --;
//             if(food[i].count === 0) {
//                 food.splice(i, 1);
//             }
//             break;
//         }
//     }
// }
    // saveMenu function needs to be created saveMenu(); add }














},{}]},{},[1]);
