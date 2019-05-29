import React from 'react'
import Link from './Link.js'



class LinkCard extends React.Component{
	constructor(props){
		super(props)
		this.input1=React.createRef();
		this.input2=React.createRef();
        this.input3=React.createRef();
        this.input4=React.createRef();

		console.log("LL Card Constructor",this.props.LL)
	}
	render(){
		return(
			<div className="class1">
				<div className="class3">
					<p>City: {this.props.city.name}, Latitude: {this.props.city.latitude}, Longitude: {this.props.city.longitude}, Population: {this.props.city.population} </p>
				</div>
				<input ref= {this.input4} placeholder="enter population change"></input>
				<div className="class2">
					<button onClick={()=> {this.props.selector('Add=Link',this.props.cityNumber,this.input4.current.value)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/000000/plus.png" 
	                    alt=" Move In icon"
	                  />
	                </button>
	                <button onClick={()=> {this.props.selector('RemoveLink',this.props.cityNumber)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/headstone.png" 
	                    alt="Headsotne Icon"
	                  />
	                </button>
				</div>
			</div>
		)
	}
}

class LLApp extends React.Component{
	constructor(){
		super()
        this.openingName=React.createRef(); 
        this.openingLatitude=React.createRef(); 
        this.openingLongitude=React.createRef();        
		this.openingPopulation=React.createRef();	
        
        this.list=[]

		this.selector = this.selector.bind(this)
      }	
      
	selector(event,cityNumber,amount){
            console.log("Button pressed: ",event);
            
            switch(event.toLowerCase()) {
	              case "removeLink":
		          console.log("in kill",cityNumber);
					this.list.splice(cityNumber,1);
					this.setState({nonsense: null});
                  break;
                
	              default:
            }
    }
    openNew = () => { 
        console.log("in Create new Linked Link",)
    		this.list.push(new Link(
                this.linkName.current.name, 
                this.linkBalance.current.balance,
                this.linkPrev.current.prev, 
                this.linkNext.current.next
                )
            )
    		this.setState({nonsense: null});
    }
    // class properites
	
	
	
	render(){
        const LinkedList="kkkk"
		return(
			 <div>
				<div>
					<h1>Luis Magnificent Linked Lists controller App</h1>
					<div className="LLApp-row">
                        <div width = {100}>
                                <img 
                                    src="https://img.icons8.com/ios/100/000000/link-filled.png"
                                    alt="Linked List Chain icon"
                                />
                                <p>> Add Link} </p>

                        </div>
                        <div width = {100}>
                                <img 
                                    src="https://img.icons8.com/ios/100/000000/delete-link-filled.png" 
                                    alt="descripcion del icono"
                                />
                                <p>> Delete Link </p>
                        </div>
                        <div width = {100}>
			                
			                <img 
			                    src="https://img.icons8.com/pastel-glyph/150/000000/anchor.png"
			                    alt="descripcion del icono"
			                  />
					</div>
                    </div>
		        </div>
				<p> Enter name, balance and link references (Previous/ Next) before pressing the CREATE button below</p>
	            <button onClick={ this.openNew }>CREATE</button>
	            <br/>
				<input ref={this.openingName} placeholder="Name?"></input>
				<br/>
				<input ref={this.openingLatitude} placeholder="Balance?"></input>
                <br/>
                <input ref={this.openingLongitude} placeholder="Previous Link Reference?"></input>
                <br/>
                <input ref={this.openingPopulation} placeholder="Next Link Reference?"></input>
                <br/>
				
                {LinkedList} 
                
	      		<hr></hr>
	      		<div>Press a icon above</div>
			</div>
		)
	}
}

export default LLApp