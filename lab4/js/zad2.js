function generateID(){
    const char = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    let id = "";
    const len = 20;

    for (let i = 0; i < len; i++){
        const rndId = Math.floor(Math.random() * char.length);
        id += char.charAt(rndId);
    }

    return id;
}

console.log(generateID())