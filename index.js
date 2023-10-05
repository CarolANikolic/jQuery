const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
const rainbowColorsLenght = rainbowColors.length;

// Add multiple style classes on DOM element
$("h1").addClass("title title_decoration");

// Removing a style style class
$("h1").removeClass("title_decoration");

// Add style directly
$("div").css("padding", "1rem");

// Add multiple styles directly
$("div").css({
    "border-color": "rgb(38, 38, 112)", 
    "border-width":"1px", 
    "border-style":"solid"
})

// Access an element style
console.log($("h1").css("font-size"));

// Query for a class (true or false)
console.log($("h1").hasClass("title"));

// jQuery selects all elements just like querySelectAll
$("h2").css("color", "rgb(79, 79, 81)");

// Get data attribute
let saveDataOne = $("#jqueryExplanation").data('mydata'); 
console.log("This is the value my already existing data attribute on DOM: " + saveDataOne);

// Remove data cache
$("#jqueryExplanation").removeData('mydata');

// Set attribute
$("#jqueryExplanation").attr('data-mydata', "19");

let saveDataTwo = $("#jqueryExplanation").data('mydata');
console.log("This is the new value I gave to my already existing data attribute on DOM: " + saveDataTwo);

// Get attribute
$("a").attr("href");

// Set atribute
$("a").attr("href", "https://jquery.com");
console.log("This is the new value I gave to my href attribute: " + $("a").attr("href"));

// Create data attribute on DOM elements and set a value for it. To create other atributes, use attr() method.
$("div").data('newDataAttribute', 'yourValue');
let createdData = $("div").data('newDataAttribute')
console.log("This is the value of a new data I created with jQuery on my div element: " + createdData)

// Add event listener directly
// Use animations with jQuery: hide, show, fadeOut, fadeIn, toggle, fadeToggle, slideUp, slideDown

$("button").click(() => {

    setInterval($("h1").fadeOut()
    .css("color", rainbowColors[Math.floor(Math.random() * rainbowColorsLenght)])
    .fadeIn()
    .text("jQuery Learned!"), 100)
    
});

// Add event listener using "on". Pass the type of event and the callback function
// Use animate({}) to make custom made animation. Animate only accepts changing properties that contains number, therefore it is not possible to change color, for example, using animate.
$("#jqueryExplanation").on("mouseover", () => {
    $("#jqueryExplanation")
    .css("font-weight", "bold")
    .animate({
        opacity: .5,
        transform: "scale(1.8)"
    }, 2000)
})

// Adding and removing elements with jQuery (before(), after(), prepend(), append())
// Before()
$("div").before("<span>I was dinamically added before the div.</span>");

// After()
$("div").after("<span>I was dinamically added after the div.</span>");

//Prepend()
$("div").prepend("<span>I was dinamically added before and within the div.</span>");

// Append()
$("div").append("<span>I was dinamically added after and within the div.</span>");


