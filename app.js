var animals = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log("animals: ", animals);
var volvo = {
    color: "black",
    year: 2000,
    Rust: true,
};
console.log("volvo: ", volvo);
function hejAnimal(array) {
    array.forEach(function (item) { return console.log("Hej ".concat(item)); });
}
hejAnimal(animals);
