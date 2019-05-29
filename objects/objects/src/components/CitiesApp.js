import React from 'react'
import City from './City'

 // Name, Latitude, Longitude, Population

class CityCard extends React.Component{
	constructor(props){
		super(props)
		this.input1=React.createRef();
		this.input2=React.createRef();
		this.input3=React.createRef();
		this.input4=React.createRef();

		console.log("City Card Constructor",this.props.city)
	}
	render(){
		return(
			<div className="class1">
				<div className="class3">
					<p>City: {this.props.city.name}, Latitude: {this.props.city.latitude}, Longitude: {this.props.city.longitude}, Population: {this.props.city.population} </p>
				</div>
				<input ref= {this.input4} placeholder="enter population change"></input>
				<div className="class2">
					<button onClick={()=> {this.props.selector('MoveIn',this.props.cityNumber,this.input4.current.value)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/000000/plus.png" 
	                    alt=" Move In icon"
	                  />
	                </button>
	                <button onClick={()=> {this.props.selector('MoveOut', this.props.cityNumber, this.input4.current.value)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/minus.png" 
	                    alt="Move Out Icon"
	                  />
	                </button>
	                <button onClick={()=> {this.props.selector('RemoveCity',this.props.cityNumber)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/headstone.png" 
	                    alt="Headsotne Icon"
	                  />
	                </button>
                    <button> 
	                  <img 
	                    src="https://img.icons8.com/ios/100/0000000/city.png"
	                    alt="city Icon"
	                  />
	                </button>
                    <button>
                        <h1>City Size is: {this.props.city.howBig(this.props.city.population)}</h1>
                    </button>
				</div>
			</div>
		)
	}
}

class CitiesApp extends React.Component{
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
	              case "movein":
					console.log("in moveIn", amount);
					this.list[cityNumber].movedIn(amount);
					this.setState({nonsense: null});
	              break;
	              case "moveout":
	              console.log("in moveOut", amount);
					this.list[cityNumber].movedOut(amount);
					this.setState({nonsense: null});
	              break;
	              case "removecity":
		          console.log("in kill",cityNumber);
					this.list.splice(cityNumber,1);
					this.setState({nonsense: null});
                  break;
                  case "show":
		          console.log("in show",cityNumber);
                    this.list[cityNumber].show();
					this.setState({nonsense: null});
		          break;
	              default:
            }
		}

		//
    openNew = () => { 
      console.log("in Create new City", this.openingName.current.value);
    		this.list.push(new City(
					this.openingName.current.value, 
					this.openingLatitude.current.value,
					this.openingLongitude.current.value,
					this.openingPopulation.current.value,
                						)
            					);
    			this.setState({nonsense: null});
    }
		// class properites
	
	mostNorthernCity(){
		let NorthenCity="";

		if (this.list.length > 0) {
		let max= Math.max.apply(Math, this.list.map((item) => {return item.latitude; }));
		let northObj = this.list.find((item) => {return item.latitude ===max })
		NorthenCity=northObj.name
		}
		return NorthenCity
	}

	mostSouthernCity(){
		let SouthernCity="";

		if (this.list.length > 0) {
			let min= Math.min.apply(Math, this.list.map((item) => { return item.latitude	; }))
		let southObj = this.list.find((item) => {return item.latitude ===min })
		SouthernCity=southObj.name}
		return SouthernCity
	}

	northenmostLatitude() {
			let max;
			if (this.list.length > 0) {
			max = this.list[0].latitude
			this.list.forEach((item)=>{if (max <= item.latitude) {max=item.latitude}})
			}
		return max
			}

	southernmostLatitude() {
		let min;
	  	if (this.list.length > 0) {
  			min = this.list[0].latitude
        this.list.forEach((item) =>{if (min >= item.latitude) {min=item.latitude}})
			}
			return min
			}

	render(){
		const cityList=this.list.map(
			(item, index) => {return <CityCard city={item} key={item.name+index} selector={this.selector} cityNumber={index}/>}
        )
        
		return(
			<div>
				<div>
					<h1>Luis Greatest City Controller App</h1>
						<div className="Max-min-total">
								<div width = {100}>
														<p> Further North city is {this.mostNorthernCity()} at {this.northenmostLatitude()} degrees</p>
														<img 
													src="https://img.icons8.com/ios/96/000000/north-filled.png" 
													alt="descripcion del icono"
												/>
								</div>
								<div width = {100}>
											<img 
													src="https://img.icons8.com/ios/96/000000/south-filled.png" 
													alt="descripcion del icono"
												/>
												<p> Further South city is { this.mostSouthernCity()} at {this.southernmostLatitude()} degrees</p>
								</div>
							</div>
					<p> Enter name, lat/long and population of new cities before pressing the CREATE button below</p>
	            <button onClick={this.openNew}>CREATE</button>
	            <br/>
					<input ref={this.openingName} placeholder="City Name?"></input>
					<br/>
					<input ref={this.openingLatitude} placeholder="City Latitude? (-90/+90)"></input>
                <br/>
                <input ref={this.openingLongitude} placeholder="City Longitude?( -180/+180"></input>
                <br/>
                <input ref={this.openingPopulation} placeholder="City initital Population"></input>
                <br/>
				</div>
				{cityList} 
				<hr></hr>
				<div>Press a icon above</div>
			</div>
		)
	}
}

export default CitiesApp