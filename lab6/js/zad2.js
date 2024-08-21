//Tworzymy listę podstaw id dla wykorzystywania w funkcji
const list_a = ["res_name_", "res_cost_"];
function sum(){
    //Tworzymy zmienną która zostanie sumą wszystkich produktów
    var summary = 0;
    //Tworzymy zmienną która jest listą list z danymi
    var info = vals();
    //Przechodzimy po każdej komórce tabeli wyników
    for(let i = 1; i < 4; i++){
        //Tworzymy konstanty o dynamicznie generowanych mazwach,
        //które są nazwami id elementów html
        const name_1 = list_a[0] + i
        const name_2 = list_a[1] + i
        //Bierzemy elementy html o wygenerowanych id
        const data_1 = document.getElementById(name_1);
        const data_2 = document.getElementById(name_2);
        //Zapisujemy do tabeli wyników nazwy produktów
        data_1.innerHTML = info[i-1][0];
        //Sprawdzamy, czy cena została wpisana
        if(info[i-1][1] == ""){
            //Jeżeli nie, to przyjmujemy ją wartość za zero
            info[i-1][1] = 0
        }
        //Sprawdzamy, czy ilość została wpisana
        if(info[i-1][2] == ""){
            //Jeżeli nie, to przyjmujemy ją wartość za zero
            info[i-1][2] = 0
        }
        //Zapisujemy całkowitą wartość każdego produktu do tabeli wyników
        //przez wymnożenie elementu listy wewnętrznej o indeksie 1, który jest ceną produktu
        //i elementu listy wewnętrznej o indeksie 2, który jest ilością produktu
        //przekształconych do postaci liczby całkowitej
        data_2.innerHTML = parseInt(info[i-1][1]) * parseInt(info[i-1][2])
        //Dodajemy do zmiennej sumy całkowitą wartość każdego z produktów
        summary = parseInt(summary) + (parseInt(info[i-1][1]) * parseInt(info[i-1][2]));
    };
    //Bierzemy element z kodu html o id "res_cost_4"
    const data_sum = document.getElementById('res_cost_4');
    //Zapisujemy do niego sumę
    data_sum.innerHTML = summary;
};

//Tworzymy listę podstaw id dla wykorzystywania w funkcji
const list_b = ["nazwa", "cena", "ilosc"];
function vals(){
    //Tworzymy pustą listę dla wyniku działania dunkcji
    var res = [];
    //Przechodzimy przez pętlę trzy razy
    for(let i = 1; i < 4; i++){
        //Tworzymy pustą listę dla wyniku dziłania każdej iteracji pętli "for"
        var list_b1 = [];
        //Przechodzimy po każdym elemencie listy o nazwie "list_b"
        list_b.forEach(element => {
            //Generujemy dynamicznie zmienne o nazwie kształtu:
            //"element z listy"_"liczba"
            var name = element + "_" + i;
            //Bierzemy ze strony element o wygenerowanym id
            const data = document.getElementById(name);
            //Dodajemy wartość wewnętrzną tego elementu do listy
            list_b1.push(data.value);
        }); //W wyniku pętli for-each otrzymujemy listę postaci
            //produkt, cena, ilość
        //Dodajemy listę wygenerowaną dla końcówki "i" do końcowej listy
        res.push(list_b1);
        //W wyniku pętli for otrzymujemy listę z listami ceny i ilości każdego z produktów
    };
    //Oddajemy wygenerowaną listę
    return res;
};