class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.help = this.getThis();
    }
    getThis(){
      return 3;
    }
    sayHi(){
    console.log(this.firstName);
    this.sayNo();
      //sayNo();
    }
    sayNo(){
        this.lastName+="Artem";
      console.log(this.lastName);
    }
    // геттер
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // сеттер
    set fullName(newValue) {
      [this.firstName, this.lastName] = newValue.split(' ');
    }
  
    // вычисляемое название метода
    ["test".toUpperCase()]() {
      alert("PASSED!");
    }
  
  };
  
  let user = new User("Вася", "Пупков");
  //alert(user.firstName);
  user.firstName = "Artem";
  console.log(user.help);
  user.sayHi();