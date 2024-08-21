class currentUser{
    constructor(name, surname, email, www, userType, isActive){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.www = www;
        this.userType = userType;
        this.isActive = isActive;
    }
    show(){
        console.log(`Dane użytkownika:\n imię: ${this.name}\n nazwisko: ${this.surname}\n mail: ${this.email}\n www: ${this.www}\n typ: ${this.userType}\n aktywność: ${this.isActive}`);
    };
    setActive(active){
        console.log("Status aktywności użytkownika został zmieniony");
        this.isActive = active;
    };
};

var user1 = new currentUser("jan", "Kowalski", "JKow@gmail.com", "www.jan.com", "user", "Aktywny");
var user2 = new currentUser("Andrzej", "Niekowalski", "ANie@gmail.com", "www.andrzej.com", "admin", "Nie aktywny");
user1.show();
console.log();
user2.show();
console.log();
user2.setActive("Aktywny");
user2.show();