function size1(){
    const text = document.getElementById("text");
    text.style.fontSize = "30px";
};
function size2(){
    const text = document.getElementById("text");
    text.style.fontSize = "70px";
};
function textcolor1(){
    const text = document.getElementById("text");
    text.style.color = "black";
};
function textcolor2(){
    const text = document.getElementById("text");
    text.style.color = "red";
};
function bdbgcolor1(){
    const text = document.getElementById("text");
    text.style.backgroundColor = "white";
};
function bdbgcolor2(){
    const text = document.getElementById("text");
    text.style.backgroundColor = "yellow";
};
function bdbgcolor3(){
    const text = document.getElementById("text");
    text.style.backgroundColor = "aliceblue";
};
function border1(){
    const text = document.getElementById("text");
    text.style.border = "0px";
};
function border2(){
    const text = document.getElementById("text");
    text.style.border = "10px solid green";
};
function background1(){
    const body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "aliceblue";
};
function background2(){
    const body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "blue";
};
function text1(){
    var prom = prompt("Napisz nowy tekst", "");
    var newtext;
    if (prom == null || prom == ""){
        return;
    }else{
        const text = document.getElementById("text");
        newtext = prom;
        text.innerHTML = newtext;
    };
};
function text2(){
    const text = document.getElementById("text");
    text.style.fontSize = "16px";
    text.style.color = "black";
    text.style.backgroundColor = "aliceblue";
    text.style.border = "0px";
    text.innerHTML = "Zmiana stylu";
};
var flag1 = true;
function doc_fun(){
    const text = document.getElementById("text1");
    const btn = document.getElementById("doc");
    if(flag1){
        text.style.fontSize = "16px";
        btn.innerHTML = "Ukryj dokument";
        flag1 = false;
    }else{
        text.style.fontSize = "0px";
        btn.innerHTML = "Pokaż dokument";
        flag1 = true;
    };
};
function info(){
    alert("Hlib Hospodarysko\nw69976");
};
var flag2 = true;
function square(){
    const color = document.getElementsByTagName("body");
    if(flag2){
        color[0].style.backgroundColor = "red";
        flag2 = false;
    }else{
        color[0].style.backgroundColor = "aliceblue";
        flag2 = true;
    };
};