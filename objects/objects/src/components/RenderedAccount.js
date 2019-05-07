import React from "react"
import './AccountsControllerApp.css';


function RenderedAccount(props) {


    return (
        <div className="liveAccounts">

            <input 
                type="radio" 
                name="editedAccount" 
                value="Edit"
                onChange={() => props.handleChange(props.item.id)}>

            </input>
            <p>
                {props.item.text} ${props.item.balance}
            </p>
         
            <input  
                type="submit" 
                value="Close Account" 
                onChange={() => props.handleChange(props.item.id)}>

            </input>
        </div>
    )
}

export default RenderedAccount