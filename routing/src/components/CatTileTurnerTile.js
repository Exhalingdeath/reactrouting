import React from 'react';
import '../css/CatTileTurnerTile.css'

class CatTileTurnerTile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(!this.props.cat) {
            return null;
        }
        else{
            if(this.props.cat.turned){
                return (
              
                    this.props.cat.img
                    
                );
            }
            else{
                return (
                                
                        <div className="unturned" onClick={() =>this.props.turn()}></div> 
                   
                );
            }
        }
    }
}
export default CatTileTurnerTile;