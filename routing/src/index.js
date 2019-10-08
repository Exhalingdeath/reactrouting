import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Moon from './components/Moon';
import Sun from './components/Sun';
import Mercury from './components/Mercury';
import CatTileTurnerGame from './components/CatTileTurnerGame';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/cat" component={CatTileTurnerGame}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));