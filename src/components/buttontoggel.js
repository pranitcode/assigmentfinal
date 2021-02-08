import React, { Component } from 'react'
import { Collapse } from './collapse/Collapse';
import './box.css'
class Button extends Component {
    state = {

        visible: true
    
     }
    render() { 
        const buttonText = this.state.visible ? 'Collapse 👇😃' : 'Expand 👋😊';
        const display = this.state.visible ? <Collapse /> : null
        

        return (
            
            <>
                   <div className="main">
                    <div className="parentbox">
                    <div className="box">
                     <button onClick={() => { this.setState({ visible: !this.state.visible })}}>
                     { buttonText}
                     </button> 
                    </div>
                    </div>
                    </div>

                <div>
                
                {display }
                
                </div>
            </> 
         );
       }
     }
 
export default Button;