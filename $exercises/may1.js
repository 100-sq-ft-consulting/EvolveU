
class Living extends Object{

	constructor(age){
		super()
		this.age=age;
	}

	tellMehowOld() {
		console.log("from tellMehowOld", this.age);
	}

	aging(){
		this.age = this.age+1
		console.log("from aging", this.age)
	}

}


let j = new Living (4);
console.log("jjj",j)

j.tellMehowOld()

j.aging()
j.aging()
j.tellMehowOld()
j.aging()

let y = new Living (100);
console.log("jjj",y);
y.aging()
y.aging()
j=null;
console.log("jjj",j)

class Animal extends Living {

	constructor(age, name){
		super(age)
		this.name=name;
	}

	tellMehowOld(){
		console.log("from tellmeHowOld2", this.name,"is" ,this.age);
	}

}

let z = new Animal (150);
console.log("zzzz",z);
z.tellMehowOld()

let monkey = new Animal (20, "Monkey");
console.log("monkey>", monkey.age, monkey.name);

	
monkey.tellMehowOld()


