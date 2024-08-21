class osoba{
    constructor(imie, nazwisko, rokurodzenia){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rokurodzenia = rokurodzenia;
    };
    wypiszInformacje(){
        console.log(`Imię: ${this.imie} ${this.nazwisko}, rok urodzenia: ${this.rokurodzenia}`);
    };
};

class pracownik extends osoba{
    constructor(imie, nazwisko, rokurodzenia, pensja, premia){
        super(imie, nazwisko, rokurodzenia);
        this.pensja = pensja;
        this.premia = premia;
    };
    wypiszInformacje(){
        super.wypiszInformacje();
        console.log(`pensja: ${this.pensja}, premia: ${this.premia}`);
    };
    stworzTabele(){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.textContent = `${this.imie} ${this.nazwisko.charAt(0)}`;
        td2.textContent = this.pensja;
        td3.textContent = this.premia;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        return tr;
    };
};

const osoba1 = new osoba("Jan", "Kowalski", 2024);
const osoba2 = new osoba("Janina", "Nowalska", 2000);

osoba1.wypiszInformacje();
osoba2.wypiszInformacje();

let tabela = document.getElementById("dane");
let pracownik1 = new pracownik("Jan", "Kowalski", 1994, 10000, 5);
let pracownik2 = new pracownik("Janina", "Nowak", 1964, 50000, 500);

tabela.appendChild(pracownik1.stworzTabele());
tabela.appendChild(pracownik2.stworzTabele());