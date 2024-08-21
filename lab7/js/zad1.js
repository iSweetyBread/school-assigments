var width, height, radius;

do{
    width = parseInt(prompt("Podaj szerokość prostokąta: "));
    if(width <= 0 || isNaN(width)){
        alert("Podaj wartość większą od zera!");
    };
}while(width <= 0 || isNaN(width));
do{
    height = parseInt(prompt("Podaj wysokość prostokąta: "));
    if(height <= 0 || isNaN(height)){
        alert("Podaj wartość większą od zera!");
    };
}while(height <= 0 || isNaN(height));
do{
    radius = parseInt(prompt("Podaj promień koła: "));
    if(radius <= 0 || isNaN(radius)){
        alert("Podaj wartość większą od zera!");
    };
}while(radius <= 0 || isNaN(radius));

const rectangle = {
    height: height,
    width: width,
    show_area(){
        return this.height * this.width
    },
};
const circle = {
    radius: radius,
    show_area(){
        return Math.PI * Math.pow(this.radius, 2);
    },
}

console.log(`Prostokąt o długości ${rectangle.width} i wysokości ${rectangle.height}`);
console.log(`Pole takiego prostokąta: ${rectangle.show_area()}`);
console.log();
console.log(`Koło o promieniu ${circle.radius}`);
console.log(`Pole takiego koła: ${circle.show_area()}`);