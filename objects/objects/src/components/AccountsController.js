import '../App.js' ;
import Account from './Account'



class AccountsController {

	// create Contoller
	constructor(){
		this.accountsArray=[]

    
    ;

		this.maxBalance=0;
		this.minBalance=0;
		this.totalBalance=0;

	}

	createNewCustomerAccount(balance,name){
		let newAccount = new Account(balance,name);
		// QA for name not being used
		return this.accountsArray.push(newAccount);
		
	}


	deleteCustomerAccount(delTarget){
		let tempArray=this.accountsArray.filter( (value)=> value.accountName !== delTarget)
		return this.accountsArray=tempArray

	}
	
//identify max and min travelling through array of accounts, comparing 
//current balances

	findMaxBalance(arr) {
		let max=arr[0];
	  	
	  	arr.forEach((item) =>{if (max.balance <= item.balance) {max=item}})
	  	
	  	return max
	  }
  		// return Math.max.apply(null, arr.balance);
	  	
	  // 	var max = .apply(arr.balance, arr);
	  	
	  // 	return max
	  // }
//Linden dares me back: make it work with spread and then a work variable holding the balance of the first object and comparing it in sequce to the value of all the next objects
	  findMinBalance(arr) {
  		// return Math.max.apply(null, arr.balance);
	  	let min=arr[0];
	  	
	  	arr.forEach((item) =>{if (min.balance >= item.balance) {min=item}})
	  	
	  	return min
	  }
	  findTotalBalance(arr) {
  		// return Math.max.apply(null, arr.balance);
	  	let total=0;
	  	arr.forEach((item) => {total = total + item.balance})	
	  	return total
	  }
		
		
	  }





//calculate the total of all accounts (Total balance)


export default AccountsController
