class spaceShip{
    constructor(name, currentLocation, flyDistance){
        this.name = name;
        this.currentLocation = currentLocation;
        this.flyDistance = flyDistance;
    };

    flyTo(place, distance){
        this.currentLocation = place;
        this.flyDistance = parseFloat(this.flyDistance) + parseFloat(distance);
    };
    showInfo(){
        console.log(`Informacje o statku:\n----\nStatek ${this.name}\ndoleciał do miejsca ${this.currentLocation}\nStatek przeleciał już całkowity dystans ${this.flyDistance}`);
    };
    meetClingon(){
        var count0 = 0;
        var count1 = 0;
        for(let i = 0; i < 100; i++){
            const rand = Math.round(Math.random());
            if(rand == 1){
                count1++;
            }else{
                count0++;
            };
        };
        if(count1 >= count0){
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
        }else{
            console.warn(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
        };
    };
};

const ship = new spaceShip("Enterprise", "Earth", 0);
ship.showInfo();
console.log("-----------------------------------");
ship.flyTo("Vulcan", 255255);
ship.showInfo();
console.log("-----------------------------------");
ship.meetClingon();