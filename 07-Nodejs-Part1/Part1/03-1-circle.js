
/*
  User module has its own scope. Constants/functions/objects are not directly accessible.
*/
console.log("getArea() module started");
function getArea(radius) {
    console.log(this); // this refers to module.exports object
    return Math.PI * (radius ** 2) ;
}

function circumference(radius) {
    return 2 * Math.PI * radius ;
}

module.exports = { circumference, getArea, now : () => new Date() } ;