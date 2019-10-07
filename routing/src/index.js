import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Moon from './components/Moon';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/moon" component={Moon}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));