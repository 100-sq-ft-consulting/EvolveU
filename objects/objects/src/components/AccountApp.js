import React from 'react'
import Account from './Account.js'

 
class AccountCard extends React.Component{
	
	constructor(props){
		super(props)
		this.input1=React.createRef();
		this.input2=React.createRef();

		console.log("roman1",this.props.account)

	}
	render(){
		return(
			<div className="class1">
				<div className="class3">
					
					<p>Account: {this.props.account.accountName}, Balance: {this.props.account.balance}$ </p>

				</div>

				<input ref={this.input1} placeholder="enter transaction $'s"></input>
				<input ref= {this.input2} placeholder="enter NEW account Name"></input>

				<div className="class2">
					<button onClick={()=> {this.props.selector('deposit',this.props.accountNumber,this.input1.current.value)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/000000/plus.png" 
	                    alt="descripcion del icono"
	                  />
	                </button>
	                <button onClick={()=> {this.props.selector('withdraw', this.props.accountNumber, this.input1.current.value)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/minus.png" 
	                    alt="descripcion del icono"
	                  />
	                </button>
	                <button onClick={()=> {this.props.selector('kill',this.props.accountNumber)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/headstone.png" 
	                    alt="descripcion del icono"
	                  />
	                </button>
	                <button onClick={()=> {this.props.selector('changeName',this.props.accountNumber, this.input2.current.value)}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/transfer-between-users.png" 
	                    alt="descripcion del icono"
	                  />
	                </button>
				</div>
			</div>
		)
	}
	
}


class AccountApp extends React.Component{

	constructor(){
		super()

	  	this.openingName=React.createRef();
		this.openingBalance=React.createRef();

	  	
		this.list=[]
		this.selector = this.selector.bind(this)

	  }	

	selector(event,accountNumber,amount){
            console.log("Button pressed: ",event,amount);
            

            switch(event.toLowerCase()) {
	              case "deposit":
					console.log("in deposit",amount);
					this.list[accountNumber].deposit(amount);
					this.setState({nonsense: null});
	              break;
	              case "withdraw":
	              console.log("in withdraw",amount);
					this.list[accountNumber].withdraw(amount);
					this.setState({nonsense: null});
	              break;
	              case "kill":
		          console.log("in kill",accountNumber);
					this.list.splice(accountNumber,1);
					this.setState({nonsense: null});
		          break;
		          case "changename":
		          console.log("in withdraw",amount);
					this.list[accountNumber].modifyAccountName(amount);
					this.setState({nonsense: null});	
		          break;
	              default:
            }
    }

    openNew = () => { 
    	console.log("roman2",this.openingBalance.current.value,this.openingName.current.value )
    	this.list.push(new Account(this.openingBalance.current.value, this.openingName.current.value))
    	this.setState({nonsense: null});

    }
    // class properites
	

	findMaxBalance() {
		let max;
	  	if (this.list.length > 0) {

	  		max = this.list[0].balance
	  		this.list.forEach((item) =>{if (max <= item.balance) {max=item.balance}})
	  	}
	  	return max
	  }

	  findMinBalance() {

		let min;
	  	
	  	if (this.list.length > 0) {

  			min = this.list[0].balance
	  		this.list.forEach((item) =>{if (min >= item.balance) {min=item.balance}})
	  	
	  	}

	  	return min

	  }

	  findTotalBalance() {
	  	let total;

	  	if (this.list.length > 0) {

  			total = 0;
		  	this.list.forEach((item) => {total = total + Number(item.balance)})	
		
		}

	  	return total
	  }

	render(){

		const cardList=this.list.map(
			(item, index) => {return <AccountCard account={item} key={item.accountName+index} selector={this.selector} accountNumber={index}/>}
		)

		


		return(
			 <div>
				<div>
					<h1>Luis Greatest Account Controller App</h1>

					<div className="Max-min-total">

					<div width = {100}>
			                  <img 
			                    src="https://img.icons8.com/windows/96/000000/plus-minus.png" 
			                    alt="descripcion del icono"
			                  />
						<p>> Min {this.findMinBalance()}$ </p>
					</div>

		            <div width = {100}>
			                  <img 
			                    src="https://img.icons8.com/windows/96/000000/plus-minus.png" 
			                    alt="descripcion del icono"
			                  />
						<p>> Max {this.findMaxBalance()}$ </p>
			        </div>

			        <div width = {100}>
		                  <img 
		                    src="https://img.icons8.com/windows/96/000000/sigma.png" 

		                    alt="descripcion del icono"
		                  />
						<p> Total {this.findTotalBalance()}$ </p>	
		        	</div>
		        </div>
				<p> Enter name and oppening balance of new accounts before pressing the buton below</p>
	            <button onClick={ this.openNew }>Open New Account </button>
	            <br/>
				<input ref={this.openingBalance} placeholder="Opening Amount"></input>
				<br/>
				<input ref={this.openingName} placeholder="Account Name"></input>
				<br/>

				</div>
				{cardList} 
	      		<hr></hr>
	      		<div>Press a icon above</div>
			</div>
		)
	}
}
	
export default AccountApp