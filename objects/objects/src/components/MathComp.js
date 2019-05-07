import React from "react"
import '../App.js' ;
import math from './math.js'


let a=0
let b=0

class MathComp extends React.Component {
  	constructor(){
	    super()
	    // this.state={image:Links}
	    // this.quien = null
	    this.state={
	    	output: 0,
	    	inUse: true
	    }
 	}
  // Behaviours here
	
 

 operator (event){
    console.log("Button pressed: ",event);

     a=parseInt(document.getElementById("input1").value)
     b=parseInt(document.getElementById("input2").value)


    switch(event.toLowerCase()) {
      case "sum":
	      console.log("run sum");
	      console.log(a);
	      console.log(b);
	      
	      this.setState({output:math.sum(a,b)});
        
      break;
      case "substract":
      console.log("run substract");
      	this.setState({output:math.substract(a,b)});
      break;
      case "multiply":
      console.log("run multiply");
      	this.setState({output:math.multiply(a,b)});
      break;
      case "divide":
      console.log("run divide");
      	this.setState({output:math.divide(a,b)});
      break;
      case "exit":
      console.log("run Un Mount");
      	this.setState({inUse:false});
      	console.log(this.state)
      break;
      default:
      console.log("false");
    }}

  	render() {
	    console.log ("Inside MathComp",);
	    
	    
	    return (
	      <div className="calculator">
	      	<h1>Luis Calculator Extraordinaire</h1>
	      	<input id="input1" placeholder="Enter first number here"></input>
          	<button onClick={()=> {this.operator('sum')}}> 
	            <img 
	              className="App-operator"
	              src="https://img.icons8.com/windows/96/000000/plus.png" 
	              alt="descripcion del icono"
	            />
            </button>
            <button onClick={()=> {this.operator('substract')}}> 
	            <img 
	              className="App-operator"
	              src="https://img.icons8.com/windows/96/0000000/minus.png" 
	              alt="descripcion del icono"
	            />
            </button>
            <button onClick={()=> {this.operator('multiply')}}> 
	            <img 
	              className="App-operator"
	              src="https://img.icons8.com/windows/96/0000000/multiply.png" 
	              alt="descripcion del icono"
	            />
            </button>
            <button onClick={()=> {this.operator('divide')}}> 
	            <img 
	              className="App-operator"
	              src="https://img.icons8.com/windows/96/0000000/divide.png" 
	              alt="descripcion del icono"
	            />
            </button>
	      	<input id="input2" placeholder="Enter second number here"></input>
	      	<p>{this.state.output}</p>
	      	<br/>
	      	
	      	
	      	<hr/>
	      	<div>Press a icon above</div>
	      </div>
	    )   
	}
}

export default MathComp