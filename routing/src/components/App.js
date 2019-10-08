import React from 'react';
import '../css/App.css';
import {Route, Link} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    onCat() {
        this.props.history.push("/cat");
    }
    onHome() {
        this.props.history.push("/")
    }


    render() {
        
        return(
        <div className="headContainer">
            <div className="topContainerLeft">
                <button className="topLinkSun" onClick={() => this.onHome()}>Home</button>   
                <button className="topLinkSun" onClick={() => this.onCat()}>Cat tile turner</button>           
            </div>       
        </div>
       
        );}
}
export default App;