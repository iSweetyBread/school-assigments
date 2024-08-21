class book{
    constructor(title, author, pageCount, publisher){
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.publisher = publisher;
    };
    showDetails(){
        var line1 = "";
        var line2 = "";
        for(let i = 0; i < Object.keys(this).length; i++) {
            line1 = line1 + Object.keys(this)[i] + " ";
        };
        for(let i = 0; i < Object.values(this).length; i++){
            line2 = line2 + Object.values(this)[i] + " ";
        };
        console.log(line1);
        console.log();
        console.log(line2);
    };
};
const book1 = new book("nazwa", "autor", "300", "publish");
book1.showDetails();