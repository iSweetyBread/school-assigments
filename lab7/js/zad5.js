var book = {
    users: [],
    count: 0,
    addUser(name, age, phone){
        const user = {
            name: name,
            age: age,
            phone: phone,
        }
        this.users.push(user);
    },
    showUsers(){
        console.log("Wszyscy użytkownicy w książce:\n");
        this.users.forEach(element => {
            console.log(`${element.name} - ${element.age} - ${element.phone}`);
        });
    },
    findByName(name){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].name === name){
                console.log(`${this.users[i].name} - ${this.users[i].age} - ${this.users[i].phone}`);
                return;
            };
        };
        console.log("False");
        return false;
    },
    findByPhone(phone){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].phone === phone){
                console.log(`${this.users[i].name} - ${this.users[i].age} - ${this.users[i].phone}`);
                return;
            };
        };
        console.log("False");
        return false;
    },
    getCount(){
        console.log(this.users.length);
    },
};
book.showUsers()
console.log("-------------------------------");
book.addUser("aaa", 12, "2123");
book.addUser("bbb", 12, "1123");
book.addUser("ccc", 12, "3123");
book.addUser("ddd", 12, "4123");
book.addUser("eee", 12, "5123");
book.showUsers()
console.log("-------------------------------");
console.log("Szukamy imię 'ccc'");
book.findByName("ccc");
console.log("-------------------------------");
console.log("Szukamy imię 'uuu'");
book.findByName("uuu");
console.log("-------------------------------");
console.log("Szukamy numer '1123'");
book.findByPhone("1123");
console.log("-------------------------------");
console.log("Szukamy numer '5555'");
book.findByPhone("5555");
console.log("-------------------------------");
console.log("Ile jest użytkowników:");
book.getCount();