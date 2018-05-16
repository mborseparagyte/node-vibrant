import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
var Vibrant = require('node-vibrant');
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center', 
};
console.log(Vibrant)     
Vibrant.from('https://uploads.codesandbox.io/uploads/user/6f1157ef-8dbe-4eb3-8bcc-8ba2677849b3/WFlt-img.jpg').getPalette(function (err, palette) { console.log(err); console.log(palette) });

const App = () => (  
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <img src="https://uploads.codesandbox.io/uploads/user/6f1157ef-8dbe-4eb3-8bcc-8ba2677849b3/WFlt-img.jpg"/>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
