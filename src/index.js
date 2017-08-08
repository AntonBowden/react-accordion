import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accordion from './Accordion';
import registerServiceWorker from './registerServiceWorker';

const data = [
  {
    heading: 'Section 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    heading: 'Section 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    heading: 'Section 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
]

ReactDOM.render(<Accordion data={data}/>, document.getElementById('root'));
registerServiceWorker();

// heading={data.heading} content={data.content}
