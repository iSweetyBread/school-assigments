function res(){
    //Bierzemy ze strony element html o id "num"
    const number = document.getElementById('num');
    //Sprawdzamy, czy podana wartość jest liczbą
    if(!parseFloat(number.value)){
        //Jeżeli nie, to informujemy o to użytkownika
        alert(`${number.value} nie jest liczbą`);
        //i zatrzymujemy funcję
        return;
    };
    //Sprawdzamy, czy podana wartość jest ujemna
    if(parseFloat(number.value) < 0){
        //Jeżeli jest, to informujemy o to użytkownika
        alert("Odległość nie może być ujemna");
        //i zatrzymujemy funcję
        return;
    };
    //Bierzemy ze strony element html o id "in"
    const data_in = document.getElementById('in');
    //Bierzemy ze strony element html o id "out"
    const data_out = document.getElementById('out');
    //Zapisujemy do zmiennej "res" wynik wzoru:
    // (a * x) / b
    //gdzie a i b są liczbami, ktore oznaczają ile dowolnych jednostek jest w metrze
    //także są wartościami atrybutu "value" tag'u <option>,
    //przekszatłconymi do postaci liczby zmiennoprzecinkowej
    var res = (parseFloat(number.value) * parseFloat(data_in.value)) / parseFloat(data_out.value);
    //Bierzemy ze strony element html o id "result"
    const result = document.getElementById('result');
    //Zapisujemy zmienną "res" wwewnątrz elementu o id "result"
    result.innerHTML = res.toString();
};