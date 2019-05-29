import Node from './Node'
import LinkControl from './LinkControl'

test("Test Adding the Controller and a Single Node",()=>{
    let controller= new LinkControl();
    expect(controller.head).toBe(null);
    expect(controller.tail).toBe(null);
    expect(controller.current).toBe(null);
    controller.createNode("Trent",10);
    expect(controller.current.id).toBe(1);
    expect(controller.current.subject).toBe("Trent");
    expect(controller.current.next).toBe(null);
    expect(controller.current.show()).toBe(controller.current.subject+" has "+controller.current.amount+"$");
    
})

test("Test for Controller Having a Two Nodes Added",()=>{
    let controller= new LinkControl();
    controller.createNode("Trent",10);
    controller.createNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
    expect(controller.current.prev).toBe(controller.temp);
    expect(controller.current.next).toBe(null);
    expect(controller.temp.subject).toBe("Trent");
    expect(controller.temp.prev).toBe(null);
    expect(controller.temp.next).toBe(controller.current);
})

test("Test for Controller Having a Three Nodes Added",()=>{
    let controller= new LinkControl();
    controller.createNode("Trent",10);
    controller.createNode("Luis",20);
    controller.createNode("Linden",30);
    expect(controller.current.subject).toBe("Linden");
    expect(controller.temp.subject).toBe("Luis");
    expect(controller.temp.prev.subject).toBe("Trent")
})
