// Catch project-tiles <a> elements
const tiles = document.getElementsByClassName("project-tile");
const beforeShevron = document.getElementById("before-shevron");
const showAllLink = document.getElementById("show-all-link");


/*
* Change spans of code color in project-tile 
* when mouse is over
*/
Array.from(tiles).forEach(function (tile) {
    let codes = tile.getElementsByClassName("code");
    tile.addEventListener('mouseover', function () {
        Array.from(codes).forEach(function (code) {
            code.style.color = "orangered";
        });
    });
});

/*
* Change spans of code in project-tile 
* to default color when mouse leave
*/
Array.from(tiles).forEach(function (tile) {
    let codes = tile.getElementsByClassName("code");
    tile.addEventListener('mouseleave', function () {
        Array.from(codes).forEach(function (code) {
            code.style.color = "#303841";
        });
    });
});


showAllLink.addEventListener('mouseover', function () {
    beforeShevron.style.marginRight = "20px";
});
showAllLink.addEventListener('mouseleave', function () {
    beforeShevron.style.marginRight = "10px";
});

