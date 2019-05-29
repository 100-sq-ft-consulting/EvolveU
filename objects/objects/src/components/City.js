
// Name, Latitude, Longitude, Population
//
class City {
	constructor(a,b,c,d){

        this.name=String(a);
        this.latitude=Number(b);
        this.longitude=Number(c);
        this.population=Number(d); 
    }
	checkPopulation() {
		return (this.population);	
	}
	movedOut(amount){
        const newbal=this.population-Number(amount);
        this.population=newbal;
        return (this.population)
    }
	movedIn(amount){
        const newbal=this.population+Number(amount)
        this.population=newbal;
        return (this.population)
	}
    
    howBig(checkpopulation){
        console.log("checking How Big?",this.population);
        if(checkpopulation<=0){
                    console.log("Ghost Town (0)",checkpopulation);
                    return this.size=" Ghost Town";
                    // this.setState({nonsense:null})
                    }
        if(checkpopulation>=0 && checkpopulation<=100){
                    console.log("Hamlet (1-100)",checkpopulation);
                    return this.size=" Hamlet";
                    // this.setState({nonsense:null})
                    }
        if(checkpopulation>=100 && checkpopulation<=1000){
                    console.log("Village (100-1000)",checkpopulation);
                    return this.size=" Village";
                    // this.setState({nonsense:null})
                    }
        if(checkpopulation>=1000 && checkpopulation<=20000){
                    console.log("Town (1000-20000)",checkpopulation);
                    return this.size=" Town";
                    // this.setState({nonsense:null})
                    }
        if(checkpopulation>=20000 && checkpopulation<=100000){
                    console.log("Large Town (20000-100000)",checkpopulation);
                    return this.size=" Large Town";
                    // this.setState({nonsense:null})
                    }
        if(checkpopulation>=100000){
                    console.log("City (>100000)",checkpopulation);
                    return this.size=" City";
                    // this.setState({nonsense:null})
                    }
    }
}  		
export default City