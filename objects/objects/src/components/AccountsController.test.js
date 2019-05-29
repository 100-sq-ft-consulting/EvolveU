import AccountsController from "./AccountsController";





test('Test array constructor', () => {
	let AC = new AccountsController();
	expect(AC.accountsArray.length).toBe(0);
})

test('Test new customer account', () => {
	let AC = new AccountsController();
	AC.createNewCustomerAccount(0,"luis");
	expect(AC.accountsArray.length).toBe(1);
	
	expect(AC.accountsArray[0].balance).toEqual(0);
})
test('Test account delete', () => {

	let AC = new AccountsController();
	AC.createNewCustomerAccount(0,"luis");

	let target=AC.deleteCustomerAccount("luis");
	expect(AC.accountsArray).toEqual([]);
})	
test('Test find highest balance', () => {

	let AC = new AccountsController();
	AC.createNewCustomerAccount(0,"luis");
	AC.createNewCustomerAccount(10,"pedro");
	AC.createNewCustomerAccount(30,"jose");

	let target=AC.deleteCustomerAccount("jose");
	

	let max=AC.findMaxBalance(AC.accountsArray);
	expect(max.balance).toEqual(10);
})	
test('Test find lowest balance', () => {

	let AC = new AccountsController();
	AC.createNewCustomerAccount(0,"luis");
	AC.createNewCustomerAccount(10,"pedro");
	AC.createNewCustomerAccount(30,"jose");

	

	let min=AC.findMinBalance(AC.accountsArray);
	expect(min.balance).toEqual(0);
})	

test('Test for total balance', () => {

	let AC = new AccountsController();
	AC.createNewCustomerAccount(0,"luis");
	AC.createNewCustomerAccount(10,"pedro");
	AC.createNewCustomerAccount(30,"jose");

	let total=AC.findTotalBalance(AC.accountsArray);
	expect(total).toEqual(40);
})	

