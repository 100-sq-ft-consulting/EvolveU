import Node from './Node'
import LinkControl from './LinkControl'

test("Test for LL constructor",()=>{
    let llcontroller= new LinkControl();

    expect(llcontroller.Head.prev).toBe(null);
    expect(llcontroller.Head.next).toBe(llcontroller.Tail);

    expect(llcontroller.Tail.prev).toBe(llcontroller.Head);
    expect(llcontroller.Tail.next).toBe(null);

    expect(llcontroller.current).toBe(llcontroller.Head);

    // create tests to prove construction worls before adding nodes

    llcontroller.createNextNode("Luis",20);
    llcontroller.createNextNode("Nilou",30);
    llcontroller.createNextNode("lisetd",40);    
    llcontroller.createNextNode("Jose",10);    
    // llcontroller.createNextNode("lin",50);
    // llcontroller.createNextNode("eva",60);
    
    llcontroller.moveLeft();
    console.log(llcontroller);
  // create tests for adding and deleting nodes
  //edge cases for moving itno head and tail
})

