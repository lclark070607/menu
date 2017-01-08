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
    
    let submitButton = document.querySelector('#addToList');
    submitButton.addEventListener('click', submitFood);

    // let showMenuPageButton = document.querySelector('#view-menu');
    // showMenuPageButton.addEventListener('click', viewWholeMenu);

    // let showInputPageButton = document.querySelector("#add-food");
    // showInputPageButton = addEventListener('click', addFoodItems);
    
    // let deleteButton = document.querySelector('.remove');
    // deleteButton.addEventListener('click', removeFood);
    
});

// This function displays my initial food array

function displayFood(food) {
    let menuList = document.querySelector('#menu-display');
    menuList.innerHTML = '';
    
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
    // console.log(newItem);
    // console.log(food);
    food.map(displayFood);
    };

//This function hides the input page when you click the View Whole Menu button
// function viewWholeMenu() {


//     let wholeMenu = document.querySelector('#menu-display');
//     wholeMenu.classList.remove('view');
// }
    // view.innerHTML = "";

    // food.map(displayFood);
    // let showMenu = document.querySelector('#menu-display');
    // showMenu.classList.remove('.view');
// }

// function addFoodItems() {
//     let addItems = document.querySelector('#menu-list');
//     addItems.classList.add('hidden');
// }

//This function hides the Whole Menu page when you click the Add Menu Item button
// function addMenuPage() {
//     let menuPage = document.querySelector('.pages #addNewFoodsList');
//     menuPage.classList.remove('hidden');
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
   













