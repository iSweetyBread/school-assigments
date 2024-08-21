function zad3(name, month){
    const mon = month.toLowerCase();
    switch(mon){
        case "grudzien":
        case "styczen":
        case "luty":
            console.log(`${name} jezdzi na sankach`);
            break;
        case "marzec":
        case "kwiecien":
        case "maj":
            console.log(`${name} chodzi po kalużach`);
            break;
        case "czerwiec":
        case "lipiec":
        case "sierpien":
            console.log(`${name} się opala`);
            break;
        case "wrzesien":
        case "pazdzietnik":
        case "listopad":
            console.log(`${name} zbiera liscie`);
            break;
        default:
            console.log(`${name} uczy się JS`);
    }
}

const one = "styczen";
const two = "MARZEC";
const three = "LiPiEc";
const four = "Listopad";
const five = "aaa"; 

console.log(`Dla tekstu "${one}": `);
zad3("Hlib", "styczen");
console.log();
console.log(`Dla tekstu "${two}": `);
zad3("Hlib", "MARZEC");
console.log();
console.log(`Dla tekstu "${three}": `);
zad3("Hlib", "LiPiEc");
console.log();
console.log(`Dla tekstu "${four}": `);
zad3("Hlib", "Listopad");
console.log();
console.log(`Dla tekstu "${five}": `);
zad3("Hlib", "aaa");