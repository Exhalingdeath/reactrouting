import React from 'react';
import '../css/App.css';

class App extends React.Component {
    render() {
        return(
        <div className="headContainer">
            <div className="topContainerLeft">
                <h1 className="topLink">moon</h1>
                <h1 className="topLink">sun</h1>
                <div className="topContainerInnerRight">
                <button className="topForm">Log in</button>
                <input className="topForm" type="text"/>
                
                </div>
             
                
            </div>
           
        
        
        </div>
       
        );}
}
export default App;