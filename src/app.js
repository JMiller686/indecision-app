//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p',null,'testing 123');

ReactDOM.render(template, document.getElementById('app'));