import React from 'react'
import '../App.js' ;
import AccountApp from './AccountApp'
import AccountsController from './AccountsController'
import './AccountsControllerApp.css';



class AccountsControllerApp extends React.Component {

	
	constructor(){
		super();

		this.state= {
	  		minBalance: 0,
	  		maxBalance: 0,
	  		totalBalance: 0,
	  		}

		this.AAA = new AccountsController()
		// this.handleChange = this.handleChange.bind(this)
	}



	render(){


		return (
			<div>
				
				
			
				

				<div className="Max-min-total">

					<div width = {100}>
						<button  onClick={()=> {this.selector('min')}}> 
			                  <img 
			                    src="https://img.icons8.com/windows/96/000000/plus-minus.png" 
			                    alt="descripcion del icono"
			                  />
			            </button>
						<p>> Min{this.state.minBalance}$ </p>
					</div>

		            <div width = {100}>
			            <button onClick={()=> {this.selector('max')}}> 
			                  <img 
			                    src="https://img.icons8.com/windows/96/000000/plus-minus.png" 
			                    alt="descripcion del icono"
			                  />
			            </button> 
						<p>> Max{this.state.maxBalance}$ </p>
			        </div>

			        <div width = {100}>
		            <button onClick={()=> {this.selector('total')}}> 
		                  <img 
		                    src="https://img.icons8.com/windows/96/000000/sigma.png" 

		                    alt="descripcion del icono"
		                  />
		            </button>  
						<p> Total{this.state.totalBalance}$ </p>	
		        	</div>
		        </div>
				<div>
					<AccountApp/>
				</div>
			</div>

			
			)
		}
	
}








export default AccountsControllerApp