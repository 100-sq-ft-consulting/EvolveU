class Link {
	constructor(a,b,c,d){
        this.subject=String(a);
        this.amount=Number(b);
        this.prev=Number(c);
        this.next=Number(d); 
    }
	show(){
        let display= String(this.subject+" has "+this.amount+"$")
        return display
    }
}  		
export default Link