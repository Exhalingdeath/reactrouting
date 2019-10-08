import React from 'react';
import CatTileTurnerTile from '../components/CatTileTurnerTile';
import '../css/CatTileTurnerBoard.css'

class CatTileTurnerBoard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="framed">
                <div className="catRow">
                    <CatTileTurnerTile cat={this.props.board[0]} turn={() =>this.props.turn(0)}/>
                    <CatTileTurnerTile cat={this.props.board[1]} turn={() =>this.props.turn(1)}/>
                    <CatTileTurnerTile cat={this.props.board[2]} turn={() =>this.props.turn(2)}/>
                    <CatTileTurnerTile cat={this.props.board[3]} turn={() =>this.props.turn(3)}/>
                </div>
                <div className="catRow">
                    <CatTileTurnerTile cat={this.props.board[4]} turn={() =>this.props.turn(4)}/>
                    <CatTileTurnerTile cat={this.props.board[5]} turn={() =>this.props.turn(5)}/>
                    <CatTileTurnerTile cat={this.props.board[6]} turn={() =>this.props.turn(6)}/>
                    <CatTileTurnerTile cat={this.props.board[7]} turn={() =>this.props.turn(7)}/>
                </div>
                <div className="catRow">
                    <CatTileTurnerTile cat={this.props.board[8]} turn={() =>this.props.turn(8)}/>
                    <CatTileTurnerTile cat={this.props.board[9]} turn={() =>this.props.turn(9)}/>
                    <CatTileTurnerTile cat={this.props.board[10]} turn={() =>this.props.turn(10)}/>
                    <CatTileTurnerTile cat={this.props.board[11]} turn={() =>this.props.turn(11)}/>
                </div>
            </div>
        );
    }
}
export default CatTileTurnerBoard;