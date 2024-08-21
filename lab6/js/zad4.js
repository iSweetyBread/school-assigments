//Bierzemy ze strony element o id "back"
const back = document.getElementById('back');
//Czekamy, póki użytkownik nie da jakąś wartość, wtedy działa funkcja
back.addEventListener('input', (event) => {
    //Bierzemy kolor wybrany przez użytkownika
    const color = event.target.value;
    //Bierzemy ze strony wszystkie elementy o tag'ie "body"
    const background = document.getElementsByTagName('body');
    //Ponieważ poprzednia funkcja zwraca listę i mamy tylko jeden element "body"
    //bierzemy pierwszy element tej listy i zamieniamy kolor tła tego elementu
    //na kolor tła wybrany przez użytkownika
    background[0].style.backgroundColor = color;
});

//Bierzemy ze strony element o id "text"
const text = document.getElementById('text');
//Czekamy, póki użytkownik nie da jakąś wartość, wtedy działa funkcja
text.addEventListener('input', (event) => {
    //Bierzemy kolor wybrany przez użytkownika
    const color = event.target.value;
    //Bierzemy ze strony wszystkie elementy o tag'ie "body"
    const text_color = document.getElementsByTagName('body');
    //Ponieważ poprzednia funkcja zwraca listę i mamy tylko jeden element "body"
    //bierzemy pierwszy element tej listy i zamieniamy kolor tła tego elementu
    //na kolor tekstu wybrany przez użytkownika
    text_color[0].style.color = color
    //Bierzemy ze strony wszystkie elementy o class'ie "pseudo_btn"
    const border = document.getElementsByClassName('pseudo_btn');
    //Przechodzimy przez wszystkie elementy(tylko trzy)
    for(let i = 0; i < 3; i++){
        //Zamieniamy kolor granicy na kolor wybrany przez użytkownika
        border[i].style.borderColor = color
    };
});

function counter_plus(){
    //Bierzemy ze strony element o id "count"
    const number = document.getElementById('count');
    //Bierzemy obecny tekst wewnętrzny
    var current = number.innerText;
    //Dodajemy do tekstu przekszatałconego do postaci liczby naturlnej jedynkę
    current = parseInt(current) + 1
    //Zapisujemy do tekstu wewnętrznego zmieniony tekst, przekształcony
    //do postaci tekstu tak, żeby jego długość nie przekracała 4 symbole,
    //i tak, żeby ten tekst się zaczynał zerami
    number.innerHTML = current.toString().padStart(4,'0')
};
function counter_minus(){
    //Bierzemy ze strony element o id "count"
    const number = document.getElementById('count');
    //Bierzemy obecny tekst wewnętrzny
    var current = number.innerText;
    //Sprawdzamy czy tekst obecny nie jest zerami
    if(current === "0000"){
        //Jeżeli jest to przerywamy funkcję
        return;
    };
    //Odejmujemy od tekstu przekszatałconego do postaci liczby naturlnej jedynkę
    current = parseInt(current) - 1
    //Zapisujemy do tekstu wewnętrznego zmieniony tekst, przekształcony
    //do postaci tekstu tak, żeby jego długość nie przekracała 4 symbole,
    //i tak, żeby ten tekst się zaczynał zerami
    number.innerHTML = current.toString().padStart(4,'0')
};
function reset(){
    //Bierzemy ze strony element o id "count"
    const number = document.getElementById('count');
    //Zapisujemy do tekstu wewnętrznego cztery zera
    number.innerHTML ="0000"
};