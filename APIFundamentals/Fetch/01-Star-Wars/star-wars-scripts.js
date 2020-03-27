var starWarsPlanetsList = document.querySelector('ul');
fetch('https://swapi.co/api/planets')
.then(function(response) {
    return response.json();
})
.then (function(json) {
    let planets = json.results;

    for (p of planets) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '<p>';
        starWarsPlanetsList.appendChild(listItem);
    }
});