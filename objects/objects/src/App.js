import React from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import MathComp from './components/MathComp';
// import Links from './Links';
import './App.css';
import CitiesApp from './components/CitiesApp'
import AccountApp from './components/AccountApp'
import LLApp from './components/LLApp'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      linden: <div>Press a icon above</div>
    }
  }
  selector(event){
            console.log("Button pressed: ",event);

            switch(event.toLowerCase()) {
              case "flower":
                console.log("run flower");
                this.setState({linden:  <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                </header>});
              break;
              case "linkedlists":
                console.log("run linked lists");
                this.setState({linden:<LLApp/>});
              break;
              case "calculator":
                console.log("calculator");
                this.setState({linden:<MathComp/>});
              break;
              case "cities":
                console.log("run cities");
                this.setState({linden:<CitiesApp/>});
              break;
              case "database":
                console.log("run database");
                this.setState({linden:<AccountApp/>});
              break;
              case "exit":
                console.log("Run UnMount")
              break;
              default:
            }
  }
  render(){

    return (
            <div className="App">
              <div className="App-row">
                <img alt="" className="logo" src={require('./100sqflogo.jpeg')}/>
                <h1>Luis Apps</h1>   
                 <button  onClick={()=> {this.selector('flower')}}> 
                  <img 
                    className="App-icon" 
                    src={logo2}  alt="descripcion del icono"
                  />
                </button><button  onClick={()=> {this.selector('LinkedLists')}}> 
                  <img 
                    className="App-icon" 
                    src="https://img.icons8.com/ios/50/000000/link-filled.png" 
                    alt="Chain icon"
                  />
                </button>
                <button onClick={()=> {this.selector('calculator')}}> 
                  <img 
                    className="App-icon"
                    src="https://img.icons8.com/windows/96/000000/calculator.png" 
                    alt="Calculator icon"
                  />
                </button>
                <button onClick={()=> {this.selector('cities')}}> 
                  <img 
                    className="App-icon"
                    src="https://img.icons8.com/ios/100/0000000/city.png" 
                    alt="Cities icon"
                  />
                </button>
                <button onClick={()=> {this.selector('database')}}> 
                  <img 
                    className="App-icon"
                    src="https://img.icons8.com/windows/96/0000000/database.png" 
                    alt="Accounts Icon"
                  />
                </button>
                </div>
                

                <div>{this.state.linden}</div>
              
             </div>
    )
  }
}

export default App