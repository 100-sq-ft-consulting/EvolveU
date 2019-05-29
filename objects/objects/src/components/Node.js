class Node{
    constructor(SubjectName,InitalAmount){
        this.prev= null;
 		this.next= null;
        this.subject=SubjectName;
        this.amount=Number(InitalAmount);
    } 
    show(){
        let display= String(this.subject+" has "+this.amount+"$")
        return display
    }
}
export default Node