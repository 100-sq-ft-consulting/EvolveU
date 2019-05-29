import React,{Component} from 'react'
import Node from './Node'

class LinkControl extends Component{
    constructor(){
        super();
        this.head= null;
        this.tail=null;
        this.counter=1;
        this.current=null;
        this.temp=null;
    }
    createNode(Name,Amount){
        if(this.current===null){
            //adjusting if adding 1st node
            let currentNode= new Node(Name,Amount);
            currentNode.id= this.counter;
            currentNode=this.head;
            this.current= currentNode;
            this.current.next=null;
            this.current.prev=null;
            
        }else if(this.current!=null&&this.temp===null){
            //adjusting if adding 2nd node
            this.temp = this.current;
            let currentNode= new Node(Name,Amount);
            this.temp.next= currentNode;
            currentNode.id= this.counter;
            currentNode.prev= this.temp;
            currentNode.next= null;
            currentNode=this.tail;
            this.current= currentNode;
            this.temp.next=this.current;
        }else if(this.current.prev===null){
               //adjusting if the node referncing head changes
        }else if(this.current.next===null){
            //adjusting if the node referncing tail changes
        }else{
            //adjusting if adding the node in the middle i.e head and tail stay the same
        }
        this.counter++;
    }
    first(){

    }
    last(){

    }

}
export default LinkControl

