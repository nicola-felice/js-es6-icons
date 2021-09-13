// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.


const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	}
];

const colors = {
    'animal': 'green',
    'beverage': 'red',
    'food': 'yellow'
};


// add color propriety on each icon (new array)
const coloredIcons = icons.map( (elm) => {

    return {
        ...elm,
        'color': colors[elm.category] 
    };
});


// add select options to html
const categories = [];
icons.forEach( (elm) => {
    if ( !categories.includes(elm.category) ) {
        categories.push(elm.category);
        document.getElementById("selectIconsFilter").innerHTML += `
            <option value="${elm.category}">${elm.category}</option>
        `;
    }
});


// input: array of icons to display
// output: prints on screen the icons
const displayIcons = ((array, containerIcons) => {

    containerIcons.innerHTML = "";

    array.forEach( (elm) => {

        const {name, family, prefix, category, color} = elm;

        containerIcons.innerHTML += `
            <div class="icon ${category}">
                <i style="color: ${color};" class="${family} ${prefix}${name}"></i>
                <div>${name}</div>
            </div> 
        `;
    });
});



const iconsWrapper = document.querySelector("#iconsWrapper");

// display all icons on page load 
displayIcons(coloredIcons, iconsWrapper);


// filter icons for category on select change
document.querySelector("#selectIconsFilter").addEventListener('change', (event) => {

    const selectedFilter = event.target.value;

    displayIcons(coloredIcons.filter( (elm) => (elm.category == selectedFilter || selectedFilter == "") ), iconsWrapper);

});