let genNum;

function rng(){
    const od = document.getElementById("od");
    const odVal = parseInt(od.value);
    const do_ = document.getElementById("do");
    const doVal = parseInt(do_.value);
    genNum = Math.floor(Math.random() * ((doVal - odVal) + 1) + odVal);
    document.getElementById("odText").innerHTML = odVal;
    document.getElementById("doText").innerHTML = doVal;
}

function check(){
    let res = parseInt(prompt("Podaj liczbę: "));
    while (true) {
        if (res === genNum) {
            alert("Odgadałeś liczbę!");
            break;
        } else if (res < genNum) {
            alert("Wygenerowana liczba jest większa!");
            res = parseInt(prompt("Podaj liczbę: "));
        } else {
            alert("Wygenerowana liczba jest mniejsza!");
            res = parseInt(prompt("Podaj liczbę: "));
        }
    }
}