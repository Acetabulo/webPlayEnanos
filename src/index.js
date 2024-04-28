import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './assets/App';

ReactDOM.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>,
  document.getElementById('root')
);
//otro tipo de expresiones por cambios en react-dom
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/
/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
*/