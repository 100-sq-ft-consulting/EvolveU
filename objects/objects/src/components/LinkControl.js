import React,{Component} from 'react'
import Node from './Node'

class LinkControl extends Component{
    constructor(){
        super();
        

        this.Head= new Node("Head");
        this.Tail =new Node("Tail");

        this.Head.prev=null;
        this.Head.next=this.Tail

        this.Tail.prev=this.Head;
        this.Tail.next=null;

        this.current=this.Head;
    }

    createNextNode(Name,Amount){
        // I can only add nodes to "my right"   

            this.newNode= new Node(Name,Amount);

            //Likage updates on the right of current
            this.newNode.next=this.current.next;
            this.newNode.prev=this.current;

            //Likage updates on the left of current
            this.current.next.prev=this.newNode;
            this.current.next=this.newNode;

            //name swaping             
            this.current=this.newNode;
            
        }
       
    
    moveLeft(){
            //check we are not at the HEad
            if (llcontroller.current.prev.prev!==null){
            this.current=this.current.prev;
            }

            return this.current.subject
        }

            // //Likage updates on the left of current
            // this.current.prev=this.current.prev.prev;
            // this.current.next=this.current.prev

            // //Likage updates on the right of current
            // this.current.prev.next=this.current.next;
            // this.current.next.prev=this.current.prev.prev;
            

            
    
    moveRight(){

    }
    moveToHead(){
            if (current.prev===null)
               {this.current=this.Head};
            return this.current.subject

    }

    moveToTail(){
            if (current.next===null)
                {this.current=this.Tail};
            return this.current.subject

    }

    showNodeContent(){
            return this.current.subject

    }

    //delete current node
    //totalize amounts
    //sort links

}
export default LinkControl

