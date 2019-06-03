import Link from './Link'

test("Testing Node Functions",()=>{
    let testNode= new Link("Trent",50);
    expect(testNode.amount).toBe(50);
    expect(testNode.next).toBe(null);
    expect(testNode.subject).toBe("Trent");
    expect(testNode.prev).toBe(null);
    expect(testNode.show()).toBe(testNode.subject+" has "+testNode.amount+"$")
})