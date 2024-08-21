//Tworzymy komórki pamięci dla liczb, z których będziemy korzystali
var number_a;
var number_b;

function num_a(){
    //Pobieramy od użytkownika pierwszą liczbę
    var val_a = prompt("Podaj pierwszą liczbę: ");
    //Sprawdzamy czy podane przez użytkownika symbole jest liczbą
    if(!parseInt(val_a)){
        //Sprawdzamy czy podane przez użytkownika symbole jest zerem,
        //ponieważ program postrzega zero jako null
        if(val_a != 0){
            //jeżeli nie jest ani zerem ani liczbą to informujemy o to
            alert("Nie jest liczbą!");
            return;
        };
        //jeżeli nie jest liczbą, ale jest zerem to przypisujemy zero do zmiennej
        val_a = 0;
    };
    //Zapisujemy podaną przez użytkownika liczbę dla następnych operacji
    number_a = val_a;
    //Bierzemy ze strony element o id "btn_a"
    const btn_a = document.getElementById("btn_a");
    //Zmieniamy tekst wewnętrzny elementu na tekst o postaci "A=liczba"
    btn_a.innerHTML = "A="+val_a.toString();
};
function num_b(){
    //Pobieramy od użytkownika pierwszą liczbę
    var val_b = prompt("Podaj pierwszą liczbę: ");
    //Sprawdzamy czy podane przez użytkownika symbole jest liczbą
    if(!parseInt(val_b)){
        //Sprawdzamy czy podane przez użytkownika symbole jest zerem,
        //ponieważ program postrzega zero jako null
        if(val_b != 0){
            //jeżeli nie jest ani zerem ani liczbą to informujemy o to
            alert("Nie jest liczbą!");
            return;
        };
        //jeżeli nie jest liczbą, ale jest zerem to przypisujemy zero do zmiennej
        val_b = 0;
    };
    //Zapisujemy podaną przez użytkownika liczbę dla następnych operacji
    number_b = val_b;
    //Bierzemy ze strony element o id "btn_b"
    const btn_b = document.getElementById("btn_b");
    //Zmieniamy tekst wewnętrzny elementu na tekst o postaci "B=liczba"
    btn_b.innerHTML = "B="+val_b.toString();
};
//Argumenty funkcji "calc" są zapisane w kodzie html
function calc(sym){
    //Pzrydzielamy wyniku obliczeń miejsce w pamięci
    var result;
    //Tworzymy switch-case instrukcję dla różnych działań matematychnych
    switch(sym){
        //Jeżeli argumentem jest "+"
        case "+":
            //Zapisujemy do zmiennej "result" wynik dodawania
            //zmiennych "number_a" i "number_b" przekształconych do
            //postaci liczb całkowitych
            result = parseInt(number_a) + parseInt(number_b);
            //Przerywamy switch-case
            break;
        //Jeżeli argumentem jest "-"
        case "-":
            //Zapisujemy do zmiennej "result" wynik odejmowania
            //zmiennych "number_a" i "number_b" przekształconych do
            //postaci liczb całkowitych
            result = parseInt(number_a) - parseInt(number_b);
            //Przerywamy switch-case
            break;
        //Jeżeli argumentem jest "🞄"
        case "🞄":
            //Zapisujemy do zmiennej "result" wynik mnożenia
            //zmiennych "number_a" i "number_b" przekształconych do
            //postaci liczb całkowitych
            result = parseInt(number_a) * parseInt(number_b);
            //Przerywamy switch-case
            break;
        //Jeżeli argumentem jest "/"
        case "/":
            //Sprawdzamy czy dzielnik nie jest zerem
            if(parseInt(number_b) == 0){
                //Jeżeli jest, to informujemy użytkownika o to
                alert("Nie można dzielić przez zero");
                //Pzerywamy działanie funkcji
                return;
            };
            //Jeżeli nie jest zerem, to zapisujemy do zmiennej "result" wynik dzielenia
            result = parseInt(number_a) / parseInt(number_b);
            //Przerywamy switch-case
            break;
    };
    //Bierzemy ze strony element o id "result"
    const res_show = document.getElementById("result");
    //Zmieniamy tekst wewnętrzny elementu na tekst o postaci:
    //' pierwsza liczba' 'symbol dziłania' 'druga liczba' = 'wynik'
    res_show.innerHTML = number_a.toString() + " " + sym + " " + number_b.toString() + " = " + result.toString();
};
function reset(){
    //Odświeżamy stronę
    location.reload();
};

//Tworzyny flagę dla ponownego użycia funckji
var flag = true
//Czekamy, póki użytkownik sprobuje wywołać menu, korzystając z prawego przycisku myszy
document.addEventListener('contextmenu', (event) => {
    //Kiedy to zrobi, to bierzemy ze strony element o id "sad"
    const sad = document.getElementById('sad');
    //Sprawdzamy, czy flaga jest "True", czyli strona ma stan oryginalny
    if(flag){
        //Jeżeli tak, to zmieniamy widoczność obrazu na widoczny
        sad.style.visibility = "visible";
        //Zapobiegamy wywołaniu menu
        event.preventDefault();
        //Zmieniamy flagę na "False", czyli zapamiętywamy, że stan strony został zmieniony
        flag = false;
    //Jeżeli jest flaga jest "False", czyli stronama stan zmieniony
    }else{
        //Zmieniamy widoczność obrazu na niewidzialny
        sad.style.visibility = "hidden";
        //Zapobiegamy wywołaniu menu
        event.preventDefault();
        //Zmieniamy flagę na "True", czyli zapamiętywamy, że stan strony wrócił do oryginalnego
        flag = true;
    };
});