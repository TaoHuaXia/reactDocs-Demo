import React, { Component } from 'react';
import './App.css';
import StringFormat from './components/StringFormat';
import Fragment from './components/Fragments';
import ListKey from './components/ListKey';
import CorrectListKey from './components/CorrectListKey';
import Refs from './components/Refs';
import LongList from './components/LongList';
import Portals from './components/Portals';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'default'
    }
  }

  renderModules = () => {
    let Component = null
    switch (this.state.activeKey) {
      case 'fragment':
        Component = <Fragment />
        break
      case 'listKey':
        Component = <ListKey />
        break
      case 'correctListKey':
        Component = <CorrectListKey />
        break
      case 'refs':
        Component = <Refs />
        break
      case 'longList':
        Component = <LongList />
        break
      case 'portals':
        Component = <Portals />
        break
      default:
        Component = <StringFormat />
    }
    return Component
  }

  activeKeyChange = (activeKey) => {
    if (activeKey !== this.state.activeKey) {
      this.setState({ activeKey })
    }
  }

  render() {
    return (
      <div className="App">
        <div className='tab-wrapper'>
          <ul>
            <li className='tab-item'><button onClick={_ => this.activeKeyChange('default')}>字符串</button></li>
            <li className='tab-item'><button onClick={_ => this.activeKeyChange('fragment')}>Fragment</button></li>
            <li className='tab-item'><button onClick={_ => this.activeKeyChange('listKey')}>ListKey</button></li>
            <li className='tab-item'><button onClick={_ => this.activeKeyChange('correctListKey')}>CorrectListKey</button></li>
            <li className='tab-item'><button onClick={_ => this.activeKeyChange('refs')}>Refs</button></li>
            <li className='tab-item'><button onClick={_ => this.activeKeyChange('longList')}>LongList</button></li>
            <li className='tab-item'><button onClick={_ => this.activeKeyChange('portals')}>Portals</button></li>
          </ul>
        </div>
        {
          this.renderModules()
        }
      </div>
    )
  }
}

export default App;
