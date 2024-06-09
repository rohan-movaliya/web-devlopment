class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Student Name : ", this.name);
        console.log("Student Email : ", this.email);
    }
}
let obj = new User("Rohan Movaliya", "2102031000126@silveroakuni.ac.in");
obj.viewData();


class Admin extends User{
    editDate(){

    }

}
