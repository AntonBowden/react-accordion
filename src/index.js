import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accordion from './Accordion';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Accordion/>, document.getElementById('root'));
registerServiceWorker();
