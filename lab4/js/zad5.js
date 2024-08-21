var td = document.getElementsByTagName('td');
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const winCombos = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];
var circles = [];
var crosses = [];

function place(td_1){
    var img = document.createElement("img");
    img.src = "img/circle.png";
    img.alt = "img";
    img.width = 90;
    img.height = 90;
    td_1.appendChild(img);
    td_1.onclick = null;
    var id = td_1.id;
    ids[id - 1] = null;
    td[id - 1] = null;
    circles.push(id);
    setTimeout(() => {
        cross()
      }, 1000);
}

function cross(){
    if(nonNull(ids)){
        while(true){
            const rnd = Math.floor(Math.random() * 9);
            if(ids[rnd] === null){
                continue;
            }else{
                var img = document.createElement("img");
                img.src = "img/cross.png";
                img.alt = "img";
                img.width = 90;
                img.height = 90;
                td[rnd].appendChild(img);
                td[rnd].onclick = null;
                ids[rnd] = null;
                crosses.push(rnd + 1);
                break;
            }
        }
    }else{
        return null;
    }
}

function nonNull(arr){
    return arr.some(item => item !== null);
}