import AccountApp from "./AccountApp";

//test for construct


test('Test for APP constructor', () => {
	let t = new AccountApp();
	expect(t.list.length).toBe(0);

})