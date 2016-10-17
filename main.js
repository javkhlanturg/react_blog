import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Stateful from './stateful.jsx';
import Props from './props.jsx';
import StateAndProps from './stateandprops.jsx';

//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Stateful />, document.getElementById('stateful'));
ReactDOM.render(<Props headerProp = "Header from props.. " contentProp = "Content from props"/>, document.getElementById('props'));
ReactDOM.render(<StateAndProps />, document.getElementById('stateandprops'));
