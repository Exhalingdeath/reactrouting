import React from 'react';
import ReactDOM from 'react-dom';
import CatTileTurnerBoard from '../components/CatTileTurnerBoard';
import '../css/CatTileTurnerGame.css';

class CatTileTurnerGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board : Array(12).fill(null),
            numberTurned : 0,
            lastTurned : null,
            lastTurnedIndex : null
        };
    }
    turn(index) {
        let board = this.state.board.slice(0);
        let numberTurned = this.state.numberTurned;
        let lastTurned = this.state.lastTurned;
        let lastTurnedIndex = this.state.lastTurnedIndex;
        if(board[index] !== null){
            if(!board[index].turned){
                board[index].turned = true;
                numberTurned++;
                if(lastTurned !== null){
                    
                    if(numberTurned === 2) {
                        if(lastTurned === board[index].id){
                            console.log("the same");
                        }
                        else{
                            board[index].turned = false;
                            board[lastTurnedIndex].turned = false;
                        }
                        numberTurned = 0;
                    }
                }
            }
        }

        this.setState({
            board : board.slice(0),
            numberTurned : numberTurned,
            lastTurned : board[index].id,
            lastTurnedIndex : index,
        })
    };

    render() {
        return (
            <div className="wrapperCenter"> 
            <div className="centered">
                <CatTileTurnerBoard board={this.state.board} turn={(i) => this.turn(i)} />
            </div>
            </div>
        );
    }
    componentDidMount() {
        let i = 0;
        let cats = [];
        for(i; i < 6; i++) {
            cats.push(fetch("https://aws.random.cat/meow").then(response => response.json()).then(data => data));
        }
        Promise.all(cats).then((newCats) => {
            
            function shuffle(o) {
                for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            };
            let positions = [0,1,2,3,4,5,6,7,8,9,10,11];
            let pos = shuffle(positions);
  
            let counter = 0;
            let id = 0;
            let filledBoard = Array(12).fill(null);
            newCats.forEach((cat) => {
                const img = new Image();
                img.src = cat.file;
                filledBoard[pos[counter]] = {img: <img className="img-border" alt="here" src={cat.file} height="200" width="200"></img>, turned: false ,id : id};
                filledBoard[pos[++counter]] = {img: <img className="img-border" alt="here" src={cat.file} height="200" width="200"></img>, turned: false , id : id};
                counter++;
                id++;
            })
            this.setState({
                board : filledBoard.slice(0)
            })

        })
        
        
    }

}
export default CatTileTurnerGame;

