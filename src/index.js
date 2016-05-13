/*
var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App.jsx');

*/


import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './components/slideshow/Slide';

const app = document.getElementById('app');
//import App from './components/App.js';

ReactDOM.render(<Slide/> , app);
