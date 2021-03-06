"use strict"


function renderCoffee(coffee) {
    var html = '<div class="coffee col-md-6 d-flex mb-3">';
    html += '<div class="noshow">' + coffee.id + '</div>';
    html += '<h2 class="coffeeName">' + coffee.name + '</h2>'
    html += '<p class="coffeeRoast">' + coffee.roast + '</p>'
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';

    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function manRoast() {
    roastSelection = document.querySelector('#roast-selection');
    updateCoffees();
}

function manCoffee() {
    nameBox = document.querySelector('#coffeeNameBox');
    updateCoffees();
}


function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update. sending to a server / updating the page
    var selectedRoast = roastSelection.value;
    var selectedCoffee = nameBox.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || "all" === selectedRoast) {
            if (coffee.name.toUpperCase().includes(selectedCoffee.toUpperCase())) {
                filteredCoffees.push(coffee);
            }   else if ("" === selectedCoffee) {
                filteredCoffees.push(coffee);
            }
        }
    });
    darkness.innerHTML = renderCoffees(filteredCoffees);
}

function createANewCoffee(e){
    e.preventDefault();
    var newCoffee = newCoffeeName.value;
    var newRoast = addDarkness.value;
    var addACoffee = {name: newCoffee,roast: newRoast}
    coffees.push(addACoffee)
    console.log(coffees)
    darkness.innerHTML = renderCoffees(coffees);

}


function searchCoffee(e) {
    e.preventDefault(); // < stops the form from doing default behavior
    var selectedCoffee = nameBox.value.toUpperCase();
    console.log(selectedCoffee);
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase() === selectedCoffee) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
    darkness.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var darkness = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameBox = document.querySelector('#coffeeNameBox');
var addSubmit = document.querySelector('#add-submit');
// var nameSubmit = document.querySelector('#name-submit');
darkness.innerHTML = renderCoffees(coffees);
coffeeNameBox.innerHTML = renderCoffees(coffees);
var newCoffeeName = document.querySelector('#add-input');
var addDarkness = document.querySelector('#add-selection');


// submitButton.addEventListener('click', updateCoffees);
// document.getElementByName("name-submit").disabled = true;
// nameSubmit.addEventListener('click', searchCoffee);
addSubmit.addEventListener('click', createANewCoffee);


