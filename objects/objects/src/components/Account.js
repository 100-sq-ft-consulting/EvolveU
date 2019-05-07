
class Account {
	constructor(a,b){
	  	this.balance=Number(a);
	  	this.accountName=b;
  	}
	checkBalance() {
			return (this.balance);	
	}
	withdraw(amount){
			const newbal=this.balance-Number(amount);
			this.balance=newbal;
			return (this.balance)
	}
	deposit(amount){
			const newbal=this.balance+Number(amount)
			this.balance=newbal;
			return (this.balance)
	}
	modifyAccountName(newName) {
  		return this.accountName= newName
		}

}  		
export default Account