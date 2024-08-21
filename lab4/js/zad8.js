const osoby = ["Jan Nowak", "Kazimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramski"];
osoby.forEach(function(a) {
    console.log(`${a} - Przed szyfrowaniem`);
    console.log("aaa bbb - Po szyfrowaniu");
    console.log();
});

const samochody = ["Fiat", "Skoda", "Volvo", "Mercedes", "Kia", "Opel", "Citroen"];
samochody.forEach(function(a, b) {
    if(b === 2 || b === 3){
        console.log("Tajne");
        console.log();
    }else{
        console.log(a);
        console.log();
    }
});