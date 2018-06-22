import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import ButtonLang from './components/ButtonLang';

class Apple extends Component {
  render() {
    return (
        <div>
          <ButtonLang onClick={this.handleClick} lang={'en'} />
          <ButtonLang onClick={this.handleClick} lang={'rus'} />
          <Switch>
            <Route path={'/about'} component={About}/>
            <Route path={'/'} component={App}/>
          </Switch>
        </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Apple />
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
