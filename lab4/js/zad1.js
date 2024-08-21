function countWord(txt){
    if (txt.trim().length == 0)
        return console.log("Nie mam co liczyć");
    return console.log("Text: " + txt + " ma " + txt.split(/\s+/).length + " słów");
}

let userInput = prompt("Wpisz coś: ");
countWord(userInput);