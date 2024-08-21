class ksiazka{
    constructor(tytul, autor, isbn, dostepnosc){
        this.tytul = tytul;
        this.autor = autor;
        this.isbn = isbn;
        this.dostepnosc = dostepnosc;
    };
};
class biblioteka{
    list = [];
    nowa(tytul, autor, isbn){
        const book = new ksiazka(tytul, autor, isbn, true);
        this.list.push(book);
    };
    usun(isbn){
        for(let i = 0; i < this.list.length; i++){
            if(this.list[i].isbn === isbn){
                this.list.splice(i, 1)
                break;
            };
        };
    };
    szukaj(dane){
        var result = [];
        for(let i = 0; i < this.list.length; i++){
            switch(dane){
                case this.list[i].tytul:
                    result.push(this.list[i]);
                    continue;
                case this.list[i].autor:
                    result.push(this.list[i]);
                    continue;
                case this.list[i].isbn:
                    result.push(this.list[i]);
                    continue;
            };
        };
        if(result.length == 0){
            console.log("Nie udało się znaleźć takiej książki");
        }else{
            console.log("Znaleziono takie książki: ");
            for(let i = 0; i < result.length; i++){
                console.log(result[i]);
            };
            return result;
        };
    };
    wypozyc(dane){
        data = this.szukaj(dane);
        data.forEach(el => {
            if(el.dostepnosc){
                el.dostepnosc = false;
                console.log(`Wypożyczyłeś ${el.tytul} autora ${el.autor}`);
            }else{
                console.log(`Książka ${el.tytul} autora ${el.autor} nie jest dostępna`);
            };
        });
    };
    zwroc(dane){
        data = this.szukaj(dane);
        data.forEach(el => {
            if(!el.dostepnosc){
                el.dostepnosc = true;
                console.log("Dziękuję");
            }else{
                console.log("Taka książka nie była wypożyczona");
            };
        });
    };
};