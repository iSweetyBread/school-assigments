const tablica = [5, 12, 17, 23, 123, 45, 54];
var div = document.getElementById("tablicaDane")
for(var i of tablica){
    var span = document.createElement("span");
    span.textContent = i.toString() + ", ";
    div.appendChild(span);
}