"use strict"


function renderCoffee(coffee) {
    var html = '<div class="coffee col-md-6 d-flex mb-3">';
    html += '<div class="noshow">' + coffee.id + '</div>';
    html += '<div>' + coffee.name + '</div>';
    html += '<div>' + coffee.roast + '</div>';
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


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update. sending to a server / updating the page
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all")  {
            // filteredCoffees = coffees;
            filteredCoffees.push(coffee);

        }
    });
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
var addSelection = document.querySelector('#add-selection');
var coffeeNameBox = document.querySelector('#coffeeNameBox');
var addInput = document.querySelector('#add-input');
var addSubmit = document.querySelector('#add-submit');

darkness.innerHTML = renderCoffees(coffees);
coffeeNameBox.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);


roastSelection.addEventListener("change", function() {
    let selectedRoast = roastSelection.value;
    let html = '';
    coffees.forEach(coffee => {
        if (selectedRoast === coffee.roast) {
            console.log(renderCoffee(coffee));
            darkness.innerHTML = html += renderCoffee(coffee);

        } else if (selectedRoast === "all") {
            darkness.innerHTML = renderCoffees(coffees);
        }
    })
})